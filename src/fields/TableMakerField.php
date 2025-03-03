<?php
namespace verbb\tablemaker\fields;

use verbb\tablemaker\assetbundles\FieldAsset;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\fields\data\ColorData;
use craft\gql\GqlEntityRegistry;
use craft\helpers\Cp;
use craft\helpers\Db;
use craft\helpers\DateTimeHelper;
use craft\helpers\Json;
use craft\helpers\Template;
use craft\validators\ColorValidator;
use craft\validators\HandleValidator;
use craft\validators\UrlValidator;
use craft\web\assets\tablesettings\TableSettingsAsset;

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


    // Properties
    // =========================================================================

    public ?string $columnsLabel = null;
    public ?string $columnsInstructions = null;
    public ?string $columnsAddRowLabel = null;
    public bool $enableWidthColumn = true;
    public bool $enableAlignmentColumn = true;
    public ?string $rowsLabel = null;
    public ?string $rowsInstructions = null;
    public ?string $rowsAddRowLabel = null;


    // Public Methods
    // =========================================================================

    public function getContentColumnType(): string
    {
        return Schema::TYPE_TEXT;
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
                return json_encode(DateTimeHelper::toIso8601($value)) ?: null;
        }

        return $value;
    }

    public function normalizeValue(mixed $value, ElementInterface $element = null): mixed
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
                $html .= '<th align="' . ($col['align'] ?? "left") . '" width="' . ($col['width'] ?? "") . '">' . ($col['heading'] ?? "") . '</th>';

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
                    $cell = $this->normalizeCellValue($type, $cell);

                    $align = $value['columns'][$key]['align'] ?? $value['columns'][$i]['align'] ?? '';
                    $html .= '<td align="' . $align . '">' . $cell . '</td>';
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
                    if (is_string($row[$colId])) {
                        // Trim the value before validating
                        $row[$colId] = trim($row[$colId]);
                    }

                    $type = $col['type'] ?? 'singleLine';

                    if ($type && !$this->_validateCellValue($type, $row[$colId], $error)) {
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

    public function getInputHtml(mixed $value, ElementInterface $element = null): string
    {
        $view = Craft::$app->getView();

        // Register our asset bundle
        $view->registerAssetBundle(FieldAsset::class);

        $name = $this->handle;

        $columns = [];
        $rows = [];

        $columnsInput = $name . '[columns]';
        $rowsInput = $name . '[rows]';

        $columnsInputId = $name . '-columns';
        $rowsInputId = $name . '-rows';

        // make input
        $input = '<input class="table-maker-field" type="hidden" name="' . $name . '" value="">';

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

                    $rows['row' . $rowKey]['col' . $colKey] = in_array($type, ['date', 'time'], true) ? DateTimeHelper::toIso8601($colVal) : $colVal;
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

        $dropdownSettingsCols = [
            'label' => [
                'heading' => Craft::t('app', 'Option Label'),
                'type' => 'singleline',
                'autopopulate' => 'value',
                'class' => 'option-label',
            ],
            'value' => [
                'heading' => Craft::t('app', 'Value'),
                'type' => 'singleline',
                'class' => 'option-value code',
            ],
            'default' => [
                'heading' => Craft::t('app', 'Default?'),
                'type' => 'checkbox',
                'radioMode' => true,
                'class' => 'option-default thin',
            ],
        ];

        $dropdownSettingsHtml = Cp::editableTableFieldHtml([
            'label' => Craft::t('app', 'Dropdown Options'),
            'instructions' => Craft::t('app', 'Define the available options.'),
            'id' => '__ID__',
            'name' => '__NAME__',
            'addRowLabel' => Craft::t('app', 'Add an option'),
            'allowAdd' => true,
            'allowReorder' => true,
            'allowDelete' => true,
            'cols' => $dropdownSettingsCols,
            'initJs' => false,
        ]);

        $view->registerAssetBundle(TableSettingsAsset::class);
        $view->registerJs('new Craft.TableMaker(' .
            Json::encode($view->namespaceInputId($name), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($view->namespaceInputId($columnsInputId), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($view->namespaceInputId($rowsInputId), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($view->namespaceInputName($columnsInput), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($view->namespaceInputName($rowsInput), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($columns, JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($rows, JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($columnSettings, JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($dropdownSettingsHtml, JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($dropdownSettingsCols, JSON_UNESCAPED_UNICODE) .
            ');');

        $fieldSettings = $this->getSettings();

        $columnsField = $view->renderTemplate('tablemaker/_field/columns-input', [
            'label' => $fieldSettings['columnsLabel'] ? Craft::t('tablemaker', $fieldSettings['columnsLabel']) : Craft::t('tablemaker', 'Table Columns'),
            'instructions' => $fieldSettings['columnsInstructions'] ? Craft::t('tablemaker', $fieldSettings['columnsInstructions']) : Craft::t('tablemaker', 'Define the columns your table should have.'),
            'id' => $columnsInputId,
            'name' => $columnsInput,
            'cols' => $columnSettings,
            'rows' => $columns,
            'static' => false,
            'allowAdd' => true,
            'allowDelete' => true,
            'allowReorder' => true,
            'addRowLabel' => $fieldSettings['columnsAddRowLabel'] ? Craft::t('tablemaker', $fieldSettings['columnsAddRowLabel']) : Craft::t('tablemaker', 'Add a column'),
            'initJs' => false,
        ]);

        $rowsField = Cp::editableTableFieldHtml([
            'label' => $fieldSettings['rowsLabel'] ? Craft::t('tablemaker', $fieldSettings['rowsLabel']) : Craft::t('tablemaker', 'Table Content'),
            'instructions' => $fieldSettings['rowsInstructions'] ? Craft::t('tablemaker', $fieldSettings['rowsInstructions']) : Craft::t('tablemaker', 'Input the content of your table.'),
            'id' => $rowsInputId,
            'name' => $rowsInput,
            'cols' => $columns,
            'rows' => $rows,
            'static' => false,
            'allowAdd' => true,
            'allowDelete' => true,
            'allowReorder' => true,
            'addRowLabel' => $fieldSettings['rowsAddRowLabel'] ? Craft::t('tablemaker', $fieldSettings['rowsAddRowLabel']) : Craft::t('tablemaker', 'Add a row'),
            'initJs' => false,
        ]);

        return $input . $columnsField . $rowsField;
    }

    public function getContentGqlType(): Type|array
    {
        $typeName = $this->handle . '_TableMakerField';
        $columnTypeName = $typeName . '_column';

        $fields = [
            'type' => Type::string(),
            'heading' => Type::string(),
        ];

        if ($this->enableWidthColumn) {
            $fields['width'] = Type::string();
        }

        if ($this->enableAlignmentColumn) {
            $fields['align'] = Type::string();
        }

        $columnType = GqlEntityRegistry::getEntity($typeName) ?: GqlEntityRegistry::createEntity($columnTypeName, new ObjectType([
            'name' => $columnTypeName,
            'fields' => $fields,
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

                        // Normalize any rows.
                        foreach ($source['rows'] as $rowKey => $row) {
                            foreach ($row as $colKey => $column) {
                                if (is_array($column) && (isset($column['date']) || isset($column['time']))) {
                                    $source['rows'][$rowKey][$colKey] = DateTimeHelper::toIso8601($column);
                                }
                            }
                        }

                        return $source['rows'];
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


    // Private Methods
    // =========================================================================

    private function _validateCellValue(string $type, mixed $value, ?string &$error = null): bool
    {
        if ($value === null || $value === '') {
            return true;
        }

        switch ($type) {
            case 'color':
                /** @var ColorData $value */
                $value = $value->getHex();
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
}
