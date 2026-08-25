<?php
namespace verbb\tablemaker\fields;

use verbb\tablemaker\helpers\Plugin;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\fields\data\ColorData;
use craft\gql\GqlEntityRegistry;
use craft\helpers\Db;
use craft\helpers\DateTimeHelper;
use craft\helpers\Json;
use craft\helpers\StringHelper;
use craft\helpers\Template;
use craft\validators\ColorValidator;
use craft\validators\HandleValidator;
use craft\validators\UrlValidator;

use yii\db\Schema;
use yii\validators\EmailValidator;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class TableMakerField extends Field
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('tablemaker', 'Table Maker');
    }

    public static function icon(): string
    {
        return '@verbb/tablemaker/icon-mask.svg';
    }

    public static function dbType(): string
    {
        return Schema::TYPE_TEXT;
    }


    // Properties
    // =========================================================================

    public bool $enableWidthColumn = true;
    public bool $enableAlignmentColumn = true;
    public ?string $rowsAddRowLabel = null;


    // Public Methods
    // =========================================================================

    public function __construct(array $config = [])
    {
        // Dropped when columns moved into a modal; Craft field label/instructions cover the rest.
        unset(
            $config['columnsLabel'],
            $config['columnsInstructions'],
            $config['columnsAddRowLabel'],
            $config['rowsLabel'],
            $config['rowsInstructions'],
        );

        parent::__construct($config);
    }

    /**
     * Normalizes a cell’s value.
     * Taken from craft\fields\Table::_normalizeCellValue()
     *
     * @param string $type The cell type
     * @param mixed $value The cell value
     * @return mixed
     * @see normalizeValue()
     */
    public function normalizeCellValue(string $type, mixed $value): mixed
    {
        switch ($type) {
            case 'color':
                if ($value instanceof ColorData) {
                    return $value;
                }

                if (!$value || $value === '#') {
                    return null;
                }

                $value = strtolower($value);

                if ($value[0] !== '#') {
                    $value = '#' . $value;
                }

                if (strlen($value) === 4) {
                    $value = '#' . $value[1] . $value[1] . $value[2] . $value[2] . $value[3] . $value[3];
                }

                $color = new ColorData($value);
                return $color->__toString();

            case 'date':
            case 'time':
                return DateTimeHelper::toIso8601($value);

            case 'multiline':
                return nl2br($value);

        }

        return $value;
    }

    public function normalizeValue(mixed $value, ?ElementInterface $element): mixed
    {
        return $this->_normalizeValueInternal($value, $element, false);
    }

    public function normalizeValueFromRequest(mixed $value, ?ElementInterface $element): mixed
    {
        return $this->_normalizeValueInternal($value, $element, true);
    }

    private function _normalizeValueInternal(mixed $value, ?ElementInterface $element, bool $fromRequest): ?array
    {
        if (!is_array($value)) {
            $value = Json::decode($value);
        }

        if (!isset($value['rows'])) {
            $value['rows'] = [];
        }

        $html = '
            <table>
                <thead>
                    <tr>
        ';

        if (!empty($value['columns'])) {
            foreach ($value['columns'] as &$col) {
                $align = $this->_normalizeAlignment($col['align'] ?? 'left') ?: 'left';
                $html .= '<th align="' . $align . '" style="text-align: ' . $align . ';" width="' . ($col['width'] ?? "") . '">' . ($col['heading'] ?? "") . '</th>';

                if (isset($col['options']) && !is_array($col['options'])) {
                    $col['options'] = Json::decode($col['options']);
                }

                unset($col);
            }
        } else {
            $value['columns'] = [];
        }

        $html .= '
                    </tr>
                </thead>

                <tbody>';

        if (!empty($value['rows'])) {
            foreach ($value['rows'] as $row) {
                $html .= '<tr>';

                $i = 0;
                foreach ($row as $key => $cell) {
                    $type = $value['columns'][$key]['type'] ?? 'singleline';
                    $cell = $this->normalizeCellValue($type, $cell, $fromRequest);

                    // normalizeCellValue() only coerces color/date/time/multiline; every other
                    // type is returned as-is. If a cell still holds an array here (e.g. a
                    // date/time picker payload like ['date' => '', 'timezone' => '...'] that
                    // landed on a non-date/time column after the row/column counts drifted out
                    // of sync), concatenating it below throws a fatal "Array to string
                    // conversion" and takes down the whole element index. Treat any leftover
                    // array cell as empty so the preview renders instead of erroring.
                    if (is_array($cell)) {
                        $cell = '';
                    }

                    $align = $this->_normalizeAlignment($value['columns'][$key]['align'] ?? $value['columns'][$i]['align'] ?? '');
                    $alignAttr = $align ? (' align="' . $align . '" style="text-align: ' . $align . ';"') : '';
                    $html .= '<td' . $alignAttr . '>' . $cell . '</td>';
                    $i++;
                }

                $html .= '</tr>';
            }
        }

        $html .= '

                </tbody>

            </table>
        ';

        $value['table'] = Template::raw($html);

        return $value;
    }

    public function serializeValue(mixed $value, ElementInterface $element = null): mixed
    {
        if (!empty($value['rows']) && is_array($value['rows'])) {
            $value['rows'] = array_values($value['rows']);

            foreach ($value['rows'] as &$row) {
                if (is_array($row)) {
                    $row = array_values($row);
                }
            }
        }

        if (!empty($value['columns']) && is_array($value['columns'])) {
            $value['columns'] = array_values($value['columns']);
        }

        return parent::serializeValue($value, $element);
    }

    public function getElementValidationRules(): array
    {
        return ['validateTableData'];
    }

    public function validateTableData(ElementInterface $element): void
    {
        $value = $element->getFieldValue($this->handle);
        $rows = $value['rows'] ?? [];
        $columns = $value['columns'] ?? [];

        if (!empty($rows) && !empty($columns)) {
            foreach ($rows as &$row) {
                foreach ($columns as $colId => $col) {
                    // A row can have fewer cells than there are columns (e.g. a column added
                    // after the rows were saved, or drifted row/column counts), so the cell
                    // for this column may not exist. Treat a missing cell as empty instead of
                    // dereferencing an undefined key.
                    $cell = $row[$colId] ?? '';

                    if (is_string($cell)) {
                        // Trim the value before validating
                        $cell = trim($cell);
                    }

                    $row[$colId] = $cell;

                    $type = $col['type'] ?? 'singleLine';

                    $normalizedValue = $this->normalizeCellValue($type, $cell);

                    if ($type && !$this->_validateCellValue($type, $normalizedValue, $error)) {
                        $element->addError($this->handle, $error);
                    }
                }
            }
        }
    }

    public function getSettingsHtml(): ?string
    {
        return Craft::$app->getView()->renderTemplate('tablemaker/_field/settings', [
            'settings' => $this->getSettings(),
        ]);
    }

    public function getContentGqlType(): Type|array
    {
        $typeName = $this->handle . '_TableMakerField';
        $columnTypeName = $typeName . '_column';

        $columnType = GqlEntityRegistry::getEntity($typeName) ?: GqlEntityRegistry::createEntity($columnTypeName, new ObjectType([
            'name' => $columnTypeName,
            'fields' => [
                'type' => Type::string(),
                'heading' => Type::string(),
                'width' => Type::string(),
                'align' => Type::string(),
            ],
        ]));

        $tableMakerType = GqlEntityRegistry::getEntity($typeName) ?: GqlEntityRegistry::createEntity($typeName, new ObjectType([
            'name' => $typeName,
            'fields' => [
                'rows' => [
                    'type' => Type::listOf(Type::listOf(Type::string())),
                    'resolve' => function ($source) {
                        // Extra help here for an empty field. 
                        // TODO: Refactor `normalizeValue()` properly to remove this.
                        if (!is_array($source['rows'])) {
                            $source['rows'] = [];
                        }

                        if (!is_array($source['columns'])) {
                            $source['columns'] = [];
                        }

                        foreach ($source['rows'] as $rowKey => $row) {
                            foreach ($source['columns'] as $columnKey => $column) {
                                $type = $column['type'] ?? 'singleline';

                                if ($type === 'date' || $type === 'time') {
                                    $value = $row[$columnKey] ?? null;

                                    $source['rows'][$rowKey][$columnKey] = DateTimeHelper::toIso8601($value);
                                }

                            }
                        }

                        return $source['rows'] ?? [];
                    }
                ],
                'columns' => [
                    'type' => Type::listOf($columnType),
                    'resolve' => function ($source) {
                        // Extra help here for an empty field. 
                        // TODO: Refactor `normalizeValue()` properly to remove this.
                        if (!is_array($source['columns'])) {
                            $source['columns'] = [];
                        }

                        return $source['columns'];
                    }
                ],
                'table' => [
                    'type' => Type::string(),
                ],
            ],
        ]));

        return $tableMakerType;
    }


    // Protected Methods
    // =========================================================================

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        $view = Craft::$app->getView();

        // Register Plugin Kit web components + the Table Maker field app; the app
        // auto-mounts `[data-tablemaker-auto-mount]` and keeps the hidden JSON blob in sync.
        Plugin::registerFieldAssets();

        $name = $this->handle;

        $columns = [];
        $rows = [];

        // get columns from db or fall back to default
        if (!empty($value['columns'])) {
            foreach ($value['columns'] as $key => $val) {
                // Just in case there's invalid data
                if (!isset($val['heading'])) {
                    continue;
                }

                $type = $val['type'] ?? 'singleline';

                $columns['col' . $key] = array_filter([
                    'heading' => $val['heading'],
                    'align' => $val['align'] ?? '',
                    'width' => $val['width'] ?? '',
                    'type' => $type,
                ]);

                if ($type === 'select') {
                    if (!isset($val['options'])) {
                        $columns['col'.$key]['options'] = [];
                    } else if (is_string($val['options'])) {
                        $columns['col'.$key]['options'] = Json::decode($val['options']);
                    }
                    else {
                        $columns['col'.$key]['options'] = $val['options'];
                    }
                } else {
                    unset($columns['col'.$key]['options']);
                }
            }
        } else {
            $columns = [
                'col0' => [
                    'heading' => '',
                    'align' => '',
                    'width' => '',
                    'type' => 'singleline',
                ],
            ];
        }

        // Get rows from db or fall back to default
        if (!empty($value['rows'])) {
            // Walk down the rows and cells appending 'row' to the rows' keys and 'col' to the cells' keys
            foreach ($value['rows'] as $rowKey => $rowVal) {
                foreach ($rowVal as $colKey => $colVal) {
                    $type = $value['columns'][$colKey]['type'] ?? 'singleline';

                    $cellValue = in_array($type, ['date', 'time'], true) ? DateTimeHelper::toIso8601($colVal) : $colVal;

                    // The editable-table input can only render scalar cell values. A cell can
                    // still hold an array here (e.g. a date/time picker payload like
                    // ['time' => '', 'timezone' => '...'] that drifted onto a non-date/time
                    // column after row/column counts fell out of sync) — Twig then throws a
                    // fatal "Array to string conversion" while rendering the input. Blank any
                    // leftover array cell so the edit form still loads.
                    if (is_array($cellValue)) {
                        $cellValue = '';
                    }

                    $rows['row' . $rowKey]['col' . $colKey] = $cellValue;
                }
            }
        } else {
            $rows = ['row0' => []];
        }

        $typeOptions = [
            'checkbox' => Craft::t('app', 'Checkbox'),
            'color' => Craft::t('app', 'Color'),
            'date' => Craft::t('app', 'Date'),
            'select' => Craft::t('app', 'Dropdown'),
            'email' => Craft::t('app', 'Email'),
            'lightswitch' => Craft::t('app', 'Lightswitch'),
            'multiline' => Craft::t('app', 'Multi-line text'),
            'number' => Craft::t('app', 'Number'),
            'singleline' => Craft::t('app', 'Single-line text'),
            'time' => Craft::t('app', 'Time'),
            'url' => Craft::t('app', 'URL'),
        ];

        // Make sure they are sorted alphabetically (post-translation)
        asort($typeOptions);

        $columnSettings = array_filter([
            'heading' => [
                'heading' => Craft::t('tablemaker', 'Heading'),
                'type' => 'singleline',
                'class' => 'col-heading',
            ],
            'width' => $this->enableWidthColumn ? [
                'heading' => Craft::t('tablemaker', 'Width'),
                'class' => 'code col-width',
                'type' => 'singleline',
                'width' => 50,
            ] : null,
            'align' => $this->enableAlignmentColumn ? [
                'heading' => Craft::t('tablemaker', 'Alignment'),
                'class' => 'thin col-align',
                'type' => 'select',
                'options' => [
                    'left' => Craft::t('tablemaker', 'Left'),
                    'center' => Craft::t('tablemaker', 'Center'),
                    'right' => Craft::t('tablemaker', 'Right'),
                ],
            ] : null,
            'type' => [
                'heading' => Craft::t('tablemaker', 'Type'),
                'class' => 'thin col-type',
                'type' => 'select',
                'options' => $typeOptions,
            ],
        ]);

        $fieldSettings = $this->getSettings();

        // Everything the web-component editor needs to render, seeded from PHP. The field
        // value round-trips through a single hidden input (`name={handle}`) holding a JSON
        // `{columns, rows}` blob, decoded by normalizeValue() — no Craft EditableTable HTML.
        // Field name/instructions come from Craft's field chrome; only the add-row label is customisable.
        $componentSettings = [
            'name' => $name,
            'columns' => $columns,
            'rows' => $rows,
            'columnSettings' => $columnSettings,
            'typeOptions' => $typeOptions,
            'enableWidthColumn' => $this->enableWidthColumn,
            'enableAlignmentColumn' => $this->enableAlignmentColumn,
            'addRowLabel' => $fieldSettings['rowsAddRowLabel']
                ? Craft::t('tablemaker', $fieldSettings['rowsAddRowLabel'])
                : Craft::t('tablemaker', 'Add a row'),
        ];

        // Current value blob for the hidden input, so existing tables round-trip on save.
        $valueBlob = Json::encode([
            'columns' => $columns,
            'rows' => $rows,
        ], JSON_UNESCAPED_UNICODE);

        return $view->renderTemplate('tablemaker/_field/input', [
            'name' => $name,
            'valueBlob' => $valueBlob,
            'componentSettings' => Json::encode($componentSettings, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
        ]);
    }


    // Private Methods
    // =========================================================================

    private function _validateCellValue(string $type, mixed $value, ?string &$error = null): bool
    {
        if ($value === null || $value === '') {
            return true;
        }

        switch ($type) {
            case 'color':
                if ($value instanceof ColorData) {
                    $value = $value->getHex();
                }

                $validator = new ColorValidator();
                break;
            case 'url':
                $validator = new UrlValidator();
                break;
            case 'email':
                $validator = new EmailValidator();
                break;
            default:
                return true;
        }

        $validator->message = str_replace('{attribute}', '{value}', $validator->message);
        
        return $validator->validate($value, $error);
    }

    private function _normalizeAlignment(?string $align): string
    {
        $align = strtolower((string)$align);

        if (in_array($align, ['left', 'center', 'right'], true)) {
            return $align;
        }

        return '';
    }
}
