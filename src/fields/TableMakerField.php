<?php
namespace verbb\tablemaker\fields;

use verbb\tablemaker\helpers\Plugin;
use verbb\tablemaker\helpers\TableValue;
use verbb\tablemaker\models\TableMakerData;

use Craft;
use craft\base\CrossSiteCopyableFieldInterface;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\gql\GqlEntityRegistry;
use craft\helpers\Json;

use yii\db\Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class TableMakerField extends Field implements CrossSiteCopyableFieldInterface
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

    public static function phpType(): string
    {
        return TableMakerData::class . '|null';
    }


    // Properties
    // =========================================================================

    public bool $enableWidthColumn = true;
    public bool $enableAlignmentColumn = true;
    public ?string $rowsAddRowLabel = null;

    /**
     * Column type handles editors may use. `*` = all built-in types (#53).
     *
     * @var string|string[]|null
     */
    public mixed $allowedColumnTypes = '*';

    public ?int $minRows = null;
    public ?int $maxRows = null;
    public ?int $minColumns = null;
    public ?int $maxColumns = null;


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

    public function getSettings(): array
    {
        $settings = parent::getSettings();
        // Checkbox select with “All” stores `*`; legacy null/empty means the same.
        if ($this->allowedColumnTypes === null || $this->allowedColumnTypes === '' || $this->allowedColumnTypes === []) {
            $settings['allowedColumnTypes'] = '*';
        }

        return $settings;
    }

    public function beforeSave(bool $isNew): bool
    {
        $this->allowedColumnTypes = self::normalizeAllowedColumnTypesSetting($this->allowedColumnTypes);

        return parent::beforeSave($isNew);
    }

    /**
     * Canonical storage for the allowed-types setting: `*` or a list of type handles.
     *
     * @return '*'|list<string>
     */
    public static function normalizeAllowedColumnTypesSetting(mixed $value): string|array
    {
        $all = array_keys(self::allColumnTypeOptions());

        if ($value === null || $value === '' || $value === '*' || $value === []) {
            return '*';
        }

        if (is_string($value)) {
            return in_array($value, $all, true) ? [$value] : '*';
        }

        if (!is_array($value)) {
            return '*';
        }

        if (in_array('*', $value, true)) {
            return '*';
        }

        $filtered = array_values(array_intersect($all, $value));

        if ($filtered === [] || count($filtered) === count($all)) {
            return '*';
        }

        return $filtered;
    }

    public function allowsAllColumnTypes(): bool
    {
        $allowed = $this->allowedColumnTypes;

        return $allowed === null
            || $allowed === ''
            || $allowed === '*'
            || $allowed === []
            || (is_array($allowed) && in_array('*', $allowed, true));
    }

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['minRows', 'maxRows', 'minColumns', 'maxColumns'], 'integer', 'min' => 0];
        $rules[] = [
            ['minRows'],
            'compare',
            'compareAttribute' => 'maxRows',
            'operator' => '<=',
            'type' => 'number',
            'when' => fn() => $this->maxRows !== null,
        ];
        $rules[] = [
            ['maxRows'],
            'compare',
            'compareAttribute' => 'minRows',
            'operator' => '>=',
            'type' => 'number',
            'when' => fn() => $this->minRows !== null,
        ];
        $rules[] = [
            ['minColumns'],
            'compare',
            'compareAttribute' => 'maxColumns',
            'operator' => '<=',
            'type' => 'number',
            'when' => fn() => $this->maxColumns !== null,
        ];
        $rules[] = [
            ['maxColumns'],
            'compare',
            'compareAttribute' => 'minColumns',
            'operator' => '>=',
            'type' => 'number',
            'when' => fn() => $this->minColumns !== null,
        ];

        return $rules;
    }

    /**
     * Full Craft-style type map (handle → label), sorted by label.
     *
     * @return array<string, string>
     */
    public static function allColumnTypeOptions(): array
    {
        $typeOptions = [
            'checkbox' => Craft::t('app', 'Checkbox'),
            'color' => Craft::t('app', 'Color'),
            'date' => Craft::t('app', 'Date'),
            'select' => Craft::t('app', 'Dropdown'),
            'email' => Craft::t('app', 'Email'),
            'heading' => Craft::t('app', 'Row heading'),
            'lightswitch' => Craft::t('app', 'Lightswitch'),
            'multiline' => Craft::t('app', 'Multi-line text'),
            'number' => Craft::t('app', 'Number'),
            'singleline' => Craft::t('app', 'Single-line text'),
            'time' => Craft::t('app', 'Time'),
            'url' => Craft::t('app', 'URL'),
        ];
        asort($typeOptions);

        return $typeOptions;
    }

    /**
     * Type options for the CP schema editor after applying {@see $allowedColumnTypes}.
     *
     * @return array<string, string>
     */
    public function getAllowedColumnTypeOptions(): array
    {
        $all = self::allColumnTypeOptions();

        if ($this->allowsAllColumnTypes()) {
            return $all;
        }

        $allowed = is_array($this->allowedColumnTypes)
            ? $this->allowedColumnTypes
            : [$this->allowedColumnTypes];

        $allowed = array_values(array_intersect(array_keys($all), $allowed));

        if ($allowed === []) {
            return $all;
        }

        $filtered = [];

        foreach ($allowed as $handle) {
            $filtered[$handle] = $all[$handle];
        }

        return $filtered;
    }

    public function normalizeValue(mixed $value, ?ElementInterface $element): mixed
    {
        $data = TableValue::normalize($value, false);

        if ($data !== null) {
            $data->columns = TableValue::constrainColumnTypes($data->columns, array_keys($this->getAllowedColumnTypeOptions()));
        }

        return $data;
    }

    public function normalizeValueFromRequest(mixed $value, ?ElementInterface $element): mixed
    {
        $data = TableValue::normalize($value, true);

        if ($data !== null) {
            $data->columns = TableValue::constrainColumnTypes($data->columns, array_keys($this->getAllowedColumnTypeOptions()));
        }

        return $data;
    }

    public function serializeValue(mixed $value, ?ElementInterface $element): mixed
    {
        $data = TableValue::normalize($value, true);

        return $data?->toStorage() ?? ['columns' => [], 'rows' => []];
    }

    /**
     * Deep-copy via normalize → toStorage so cloned Neo/Matrix blocks get their own
     * column defs (including select `options`) instead of sharing array references.
     * Missing cell keys / empty options must not fatal on the subsequent save (#61).
     */
    public function copyValue(ElementInterface $from, ElementInterface $to): void
    {
        $data = TableValue::normalize($from->getFieldValue($this->handle), false) ?? new TableMakerData();
        $to->setFieldValue($this->handle, TableValue::normalize($data->toStorage(), false));
    }

    public function isValueEmpty(mixed $value, ElementInterface $element): bool
    {
        $data = TableValue::normalize($value, false);

        return $data === null || TableValue::isEmpty($data->columns, $data->rows);
    }

    public function getSearchKeywords(mixed $value, ElementInterface $element): string
    {
        $data = TableValue::normalize($value, false);

        if ($data === null) {
            return '';
        }

        return TableValue::searchKeywords($data->columns, $data->rows);
    }

    public function getElementValidationRules(): array
    {
        return ['validateTableData'];
    }

    public function validateTableData(ElementInterface $element): void
    {
        $value = $element->getFieldValue($this->handle);
        $data = TableValue::normalize($value, true) ?? new TableMakerData();

        $columnCount = count($data->columns);
        $rowCount = count($data->rows);

        if ($this->minColumns !== null && $columnCount < $this->minColumns) {
            $element->addError($this->handle, Craft::t('tablemaker', 'Table must have at least {count} columns.', [
                'count' => $this->minColumns,
            ]));
        }

        if ($this->maxColumns !== null && $columnCount > $this->maxColumns) {
            $element->addError($this->handle, Craft::t('tablemaker', 'Table must have at most {count} columns.', [
                'count' => $this->maxColumns,
            ]));
        }

        if ($this->minRows !== null && $rowCount < $this->minRows) {
            $element->addError($this->handle, Craft::t('tablemaker', 'Table must have at least {count} rows.', [
                'count' => $this->minRows,
            ]));
        }

        if ($this->maxRows !== null && $rowCount > $this->maxRows) {
            $element->addError($this->handle, Craft::t('tablemaker', 'Table must have at most {count} rows.', [
                'count' => $this->maxRows,
            ]));
        }

        if ($data->columns === [] || $data->rows === []) {
            return;
        }

        $rows = $data->rows;

        foreach ($rows as $rowId => $row) {
            foreach ($data->columns as $colId => $column) {
                $cell = $row[$colId] ?? '';

                if (is_string($cell)) {
                    $cell = trim($cell);
                }

                $rows[$rowId][$colId] = $cell;
                $type = TableValue::normalizeType($column['type'] ?? 'singleline');

                if (!TableValue::validateCell($type, $cell, $error)) {
                    $element->addError($this->handle, (string)$error);
                }
            }
        }

        // Persist trimmed cells so validation cleanup survives into serialize.
        $data->rows = $rows;
        $element->setFieldValue($this->handle, $data);
    }

    public function getSettingsHtml(): ?string
    {
        return Craft::$app->getView()->renderTemplate('tablemaker/_field/settings', [
            'field' => $this,
            'settings' => $this->getSettings(),
            'allColumnTypeOptions' => self::allColumnTypeOptions(),
        ]);
    }

    public function getContentGqlType(): Type|array
    {
        $typeName = $this->handle . '_TableMakerField';
        $columnTypeName = $typeName . '_column';
        $optionTypeName = $columnTypeName . '_option';

        $optionType = GqlEntityRegistry::getEntity($optionTypeName)
            ?: GqlEntityRegistry::createEntity($optionTypeName, new ObjectType([
                'name' => $optionTypeName,
                'fields' => [
                    'label' => Type::string(),
                    'value' => Type::string(),
                    'default' => Type::boolean(),
                ],
            ]));

        $columnType = GqlEntityRegistry::getEntity($columnTypeName)
            ?: GqlEntityRegistry::createEntity($columnTypeName, new ObjectType([
                'name' => $columnTypeName,
                'fields' => [
                    'type' => Type::string(),
                    'heading' => Type::string(),
                    'width' => Type::string(),
                    'align' => Type::string(),
                    'options' => Type::listOf($optionType),
                ],
            ]));

        return GqlEntityRegistry::getEntity($typeName)
            ?: GqlEntityRegistry::createEntity($typeName, new ObjectType([
                'name' => $typeName,
                'fields' => [
                    'rows' => [
                        'type' => Type::listOf(Type::listOf(Type::string())),
                        'resolve' => static function($source) {
                            $data = TableValue::normalize($source, false);

                            return TableValue::rowsForGql($data->columns, $data->rows);
                        },
                    ],
                    'columns' => [
                        'type' => Type::listOf($columnType),
                        'resolve' => static function($source) {
                            $data = TableValue::normalize($source, false);

                            // Positional list keeps GraphQL list semantics + Twig loop.index0 docs.
                            return array_values($data->columns);
                        },
                    ],
                    'table' => [
                        'type' => Type::string(),
                        'resolve' => static function($source) {
                            $data = TableValue::normalize($source, false);

                            return (string)$data->getTable();
                        },
                    ],
                ],
            ]));
    }


    // Protected Methods
    // =========================================================================

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        $view = Craft::$app->getView();

        // Register Plugin Kit web components + the field app (hidden JSON blob round-trip).
        Plugin::registerFieldAssets();

        $data = TableValue::normalize($value, false) ?? new TableMakerData();
        $columns = $data->columns;
        $rows = $data->rows;

        if ($columns === []) {
            $columns = [
                'col0' => [
                    'heading' => '',
                    'align' => 'left',
                    'width' => '',
                    'type' => 'singleline',
                ],
            ];
        }

        // Leave rows empty when unset — Craft Table parity (minRows unset/0 ⇒ zero rows).
        // Pad only when minRows is explicitly set above the current count.

        // Pad to minRows so the CP editor matches field settings before the first save.
        if ($this->minRows !== null && $this->minRows > count($rows)) {
            $nextIndex = 0;
            while (count($rows) < $this->minRows) {
                while (array_key_exists('row' . $nextIndex, $rows)) {
                    $nextIndex++;
                }
                $rows['row' . $nextIndex] = [];
                $nextIndex++;
            }
        }

        if ($this->minColumns !== null && $this->minColumns > count($columns)) {
            $nextIndex = 0;
            while (count($columns) < $this->minColumns) {
                while (array_key_exists('col' . $nextIndex, $columns)) {
                    $nextIndex++;
                }
                $columns['col' . $nextIndex] = [
                    'heading' => '',
                    'align' => 'left',
                    'width' => '',
                    'type' => 'singleline',
                ];
                $nextIndex++;
            }
        }

        $typeOptions = $this->getAllowedColumnTypeOptions();

        // Keys are already colN/rowN from TableValue — do not re-prefix (avoids colcol0).
        $componentSettings = [
            'name' => $this->handle,
            'columns' => $columns,
            'rows' => $rows,
            'typeOptions' => $typeOptions,
            'enableWidthColumn' => $this->enableWidthColumn,
            'enableAlignmentColumn' => $this->enableAlignmentColumn,
            'minRows' => $this->minRows,
            'maxRows' => $this->maxRows,
            'minColumns' => $this->minColumns,
            'maxColumns' => $this->maxColumns,
            'addRowLabel' => $this->rowsAddRowLabel
                ? Craft::t('tablemaker', $this->rowsAddRowLabel)
                : Craft::t('tablemaker', 'Add a row'),
        ];

        $valueBlob = Json::encode([
            'columns' => $columns,
            'rows' => $rows,
        ], JSON_UNESCAPED_UNICODE);

        return $view->renderTemplate('tablemaker/_field/input', [
            'name' => $this->handle,
            'valueBlob' => $valueBlob,
            'componentSettings' => Json::encode($componentSettings, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
        ]);
    }
}
