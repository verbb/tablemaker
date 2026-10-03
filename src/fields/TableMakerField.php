<?php
namespace verbb\tablemaker\fields;

use verbb\tablemaker\helpers\Plugin;
use verbb\tablemaker\helpers\TableValue;
use verbb\tablemaker\models\DualAccessMap;
use verbb\tablemaker\models\RejectedTableData;
use verbb\tablemaker\models\TableMakerData;

use Craft;
use craft\base\CrossSiteCopyableFieldInterface;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\elements\Asset;
use craft\elements\Category;
use craft\elements\Entry;
use craft\gql\GqlEntityRegistry;
use craft\helpers\Json;
use craft\models\Section;
use craft\services\ElementSources;

use yii\db\Schema;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use Throwable;

class TableMakerField extends Field implements CrossSiteCopyableFieldInterface
{
    public const MAX_REQUEST_COLUMNS = 100;
    public const MAX_REQUEST_ROWS = 1000;
    public const MAX_REQUEST_CELLS = 50000;

    public const EDIT_COLUMNS_POSITION_AUTO = 'auto';
    public const EDIT_COLUMNS_POSITION_FIELD_HEADER = 'fieldHeader';
    public const EDIT_COLUMNS_POSITION_TABLE_HEADER = 'tableHeader';
    public const RICH_TEXT_EDITING_MODE_MODAL = 'modal';
    public const RICH_TEXT_EDITING_MODE_INLINE = 'inline';

    private const MIN_CKEDITOR_VERSION = '5.0.0';
    private const REJECTED_ERRORS_KEY = '__tableMakerErrors';

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

    /**
     * Canonical storage for the allowed-types setting: `*` or a list of type handles.
     */
    public static function normalizeAllowedColumnTypesSetting(mixed $value): string|array
    {
        // Keep unavailable optional types in saved field config so temporarily
        // disabling their provider does not silently rewrite the allowlist.
        $all = array_keys(self::allColumnTypeLabels());

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

    /** Available Craft-style type map (handle → label), sorted by label. */
    public static function allColumnTypeOptions(): array
    {
        $typeOptions = self::allColumnTypeLabels();

        if (!self::isCkeditorAvailable()) {
            unset($typeOptions['richtext']);
        }

        return $typeOptions;
    }

    /**
     * Labels include optional types even when their provider is unavailable.
     * Existing columns can therefore retain a meaningful label and raw fallback.
     */
    public static function allColumnTypeLabels(): array
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
            'richtext' => Craft::t('tablemaker', 'Rich text'),
            'singleline' => Craft::t('app', 'Single-line text'),
            'time' => Craft::t('app', 'Time'),
            'url' => Craft::t('app', 'URL'),
        ];
        asort($typeOptions);

        return $typeOptions;
    }

    /**
     * Show optional types in field settings, but prevent selecting them while
     * their provider is unavailable.
     */
    public static function allColumnTypeSettingOptions(): array
    {
        $labels = self::allColumnTypeLabels();
        $available = array_fill_keys(array_keys(self::allColumnTypeOptions()), true);

        return array_map(
            static fn(string $handle, string $label): array => [
                'label' => $label,
                'value' => $handle,
                'disabled' => !isset($available[$handle]),
            ],
            array_keys($labels),
            array_values($labels),
        );
    }

    public static function isCkeditorAvailable(): bool
    {
        if (!class_exists('craft\\ckeditor\\Plugin')) {
            return false;
        }

        $plugins = Craft::$app->getPlugins();

        if (!$plugins->isPluginInstalled('ckeditor') || !$plugins->isPluginEnabled('ckeditor')) {
            return false;
        }

        $ckeditor = $plugins->getPlugin('ckeditor');

        // CKEditor 5.0 introduced the import-map modules used by both editors.
        return $ckeditor !== null && self::_isSupportedCkeditorVersion($ckeditor->getVersion());
    }

    public static function normalizeEditColumnsPosition(mixed $value): string
    {
        return in_array($value, [
            self::EDIT_COLUMNS_POSITION_AUTO,
            self::EDIT_COLUMNS_POSITION_FIELD_HEADER,
            self::EDIT_COLUMNS_POSITION_TABLE_HEADER,
        ], true) ? $value : self::EDIT_COLUMNS_POSITION_AUTO;
    }

    public static function normalizeRichTextEditingMode(mixed $value): string
    {
        return in_array($value, [
            self::RICH_TEXT_EDITING_MODE_MODAL,
            self::RICH_TEXT_EDITING_MODE_INLINE,
        ], true) ? $value : self::RICH_TEXT_EDITING_MODE_MODAL;
    }

    /** Canonical storage for enabled Craft element link types. */
    public static function normalizeRichTextLinkTypesSetting(mixed $value): string|array
    {
        $all = array_keys(self::allRichTextLinkTypeOptions());

        // The setting did not exist before 5.1.x, so missing values inherit the
        // complete set while an explicitly empty checkbox list disables them all.
        if ($value === null || $value === '' || $value === '*') {
            return '*';
        }

        if (!is_array($value)) {
            return '*';
        }

        if (in_array('*', $value, true)) {
            return '*';
        }

        $filtered = array_values(array_intersect($all, $value));

        return count($filtered) === count($all) ? '*' : $filtered;
    }

    /** Craft element types that can be selected from CKEditor's link UI. */
    public static function allRichTextLinkTypeOptions(): array
    {
        return [
            'entry' => Entry::pluralDisplayName(),
            'category' => Category::pluralDisplayName(),
            'asset' => Asset::pluralDisplayName(),
        ];
    }

    // Properties
    // =========================================================================

    public bool $enableWidthColumn = false;
    public bool $enableAlignmentColumn = false;
    public string $editColumnsPosition = self::EDIT_COLUMNS_POSITION_AUTO;
    public string $richTextEditingMode = self::RICH_TEXT_EDITING_MODE_MODAL;
    /** Craft element types offered alongside the standard URL link input. */
    public mixed $richTextLinkTypes = '*';
    public ?string $rowsAddRowLabel = null;

    /**
     * Whether editors can set a per-value table caption (#60).
     */
    public bool $enableCaption = false;

    /** CP label for the caption input when {@see $enableCaption} is on. */
    public ?string $captionLabel = null;

    /** CP instructions for the caption input when {@see $enableCaption} is on. */
    public ?string $captionInstructions = null;

    /** Placeholder for the caption input; empty by default (no placeholder shown). */
    public ?string $captionPlaceholder = null;

    /** Column type handles editors may use. `*` means all built-in types (#53). */
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
        $this->editColumnsPosition = self::normalizeEditColumnsPosition($this->editColumnsPosition);
        $this->richTextEditingMode = self::normalizeRichTextEditingMode($this->richTextEditingMode);
        $this->richTextLinkTypes = self::normalizeRichTextLinkTypesSetting($this->richTextLinkTypes);

        return parent::beforeSave($isNew);
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

    /** Type options for the CP schema editor after applying {@see $allowedColumnTypes}. */
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
        if (is_array($value) && isset($value[self::REJECTED_ERRORS_KEY]) && is_array($value[self::REJECTED_ERRORS_KEY])) {
            return new RejectedTableData($value[self::REJECTED_ERRORS_KEY]);
        }

        $data = TableValue::normalize($value, false);

        if ($data) {
            $data->siteId = $element?->siteId;
        }

        return $data;
    }

    public function normalizeValueFromRequest(mixed $value, ?ElementInterface $element): mixed
    {
        if (is_string($value)) {
            $value = Json::decodeIfJson($value);
        }

        if (is_array($value) && ($errors = $this->_requestSizeErrors($value)) !== []) {
            return new RejectedTableData($errors);
        }

        $allowedColumnTypes = self::normalizeAllowedColumnTypesSetting($this->allowedColumnTypes);
        $data = TableValue::normalize(
            $value,
            true,
            $allowedColumnTypes === '*' ? null : $allowedColumnTypes,
            $this->_persistedColumns($element),
        );

        if ($data) {
            $data->siteId = $element?->siteId;
        }

        return $data;
    }

    public function serializeValue(mixed $value, ?ElementInterface $element): mixed
    {
        if ($value instanceof RejectedTableData) {
            return [self::REJECTED_ERRORS_KEY => $value->validationErrors()];
        }

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
        $copy = TableValue::normalize($data->toStorage(), false);

        if ($copy) {
            $copy->siteId = $to->siteId;
        }
        $to->setFieldValue($this->handle, $copy);
    }

    public function isValueEmpty(mixed $value, ElementInterface $element): bool
    {
        $data = TableValue::normalize($value, false);

        if ($data instanceof RejectedTableData) {
            return false;
        }

        // Craft omits empty fields on an element's first save. Column definitions,
        // blank rows and captions are authored data even without populated cells.
        return $data === null || (
            count($data->columns) === 0
            && count($data->rows) === 0
            && $data->caption === ''
        );
    }

    public function getSearchKeywords(mixed $value, ElementInterface $element): string
    {
        $data = TableValue::normalize($value, false);

        if ($data === null) {
            return '';
        }

        return TableValue::searchKeywords($data->columnsArray(), $data->rowsArray(), $data->caption);
    }

    public function getElementValidationRules(): array
    {
        return ['validateTableData'];
    }

    public function validateTableData(ElementInterface $element): void
    {
        $value = $element->getFieldValue($this->handle);

        if ($value instanceof RejectedTableData) {
            foreach ($value->validationErrors() as $error) {
                $element->addError($this->handle, $error);
            }

            return;
        }

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

        if ($data->columns->count() === 0 || $data->rows->count() === 0) {
            return;
        }

        $rows = $data->rowsArray();

        foreach ($rows as $rowId => $row) {
            foreach ($data->columnsArray() as $colId => $column) {
                $type = TableValue::normalizeType($column['type'] ?? 'singleline');
                $cell = TableValue::normalizeCell($type, $row[$colId] ?? '', true);
                $rows[$rowId][$colId] = $cell;

                if (!TableValue::validateCell($type, $cell, $error)) {
                    $element->addError($this->handle, (string)$error);
                }
            }
        }

        // Keep type-specific cleanup without changing multiline whitespace or option IDs.
        $data->rows = new DualAccessMap(array_map(
            static fn(array $row) => new DualAccessMap($row),
            $rows,
        ));
        $element->setFieldValue($this->handle, $data);
    }

    public function getSettingsHtml(): ?string
    {
        $allowedColumnTypes = self::normalizeAllowedColumnTypesSetting($this->allowedColumnTypes);
        $unavailableAllowedColumnTypes = is_array($allowedColumnTypes)
            ? array_values(array_diff($allowedColumnTypes, array_keys(self::allColumnTypeOptions())))
            : [];

        return Craft::$app->getView()->renderTemplate('tablemaker/_field/settings', [
            'field' => $this,
            'settings' => $this->getSettings(),
            'allColumnTypeOptions' => self::allColumnTypeSettingOptions(),
            'allRichTextLinkTypeOptions' => self::allRichTextLinkTypeOptions(),
            'ckeditorAvailable' => self::isCkeditorAvailable(),
            'unavailableAllowedColumnTypes' => $unavailableAllowedColumnTypes,
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

                            return TableValue::rowsForGql($data->columnsArray(), $data->rowsArray());
                        },
                    ],
                    'columns' => [
                        'type' => Type::listOf($columnType),
                        'resolve' => static function($source) {
                            $data = TableValue::normalize($source, false);

                            // Positional list keeps GraphQL list semantics + Twig loop.index0 docs.
                            return array_values($data->columnsArray());
                        },
                    ],
                    'caption' => [
                        'type' => Type::string(),
                        'resolve' => static function($source) {
                            $data = TableValue::normalize($source, false);

                            return $data->caption !== '' ? $data->caption : null;
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

    /**
     * Mutation input mirrors the query shape: columns list + rows as [[String]] + optional caption.
     * `TableValue::normalize()` already upgrades positional lists to colN/rowN storage (#33).
     */
    public function getContentGqlMutationArgumentType(): Type|array
    {
        $typeName = $this->handle . '_TableMakerInput';
        $columnTypeName = $typeName . '_column';
        $optionTypeName = $columnTypeName . '_option';

        $optionInput = GqlEntityRegistry::getOrCreate($optionTypeName, fn() => new InputObjectType([
            'name' => $optionTypeName,
            'fields' => [
                'label' => Type::string(),
                'value' => Type::string(),
                'default' => Type::boolean(),
            ],
        ]));

        $columnInput = GqlEntityRegistry::getOrCreate($columnTypeName, fn() => new InputObjectType([
            'name' => $columnTypeName,
            'fields' => [
                'type' => Type::string(),
                'heading' => Type::string(),
                'width' => Type::string(),
                'align' => Type::string(),
                'options' => Type::listOf($optionInput),
            ],
        ]));

        return GqlEntityRegistry::getOrCreate($typeName, fn() => new InputObjectType([
            'name' => $typeName,
            'description' => sprintf('Defines the “%s” Table Maker field value.', $this->name),
            'fields' => [
                'columns' => Type::listOf($columnInput),
                // Same [[String]] contract as the query resolver — order matches columns.
                'rows' => Type::listOf(Type::listOf(Type::string())),
                'caption' => Type::string(),
            ],
        ]));
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['minRows', 'maxRows', 'minColumns'], 'integer', 'min' => 0];
        $rules[] = [['maxColumns'], 'integer', 'min' => 1];
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

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        $view = Craft::$app->getView();
        $ckeditorAvailable = self::isCkeditorAvailable();

        // Register Plugin Kit web components + the field app (hidden JSON blob round-trip).
        Plugin::registerFieldAssets();

        if ($ckeditorAvailable) {
            // Optional dependency: use CKEditor's supported CP bundle without making
            // it a Composer requirement for Table Maker installations.
            $view->registerAssetBundle('craft\\ckeditor\\web\\assets\\ckeditor\\CkeditorAsset');
        }

        $data = TableValue::normalize($value, false) ?? new TableMakerData();
        $data->siteId = $element?->siteId;
        $columns = $data->columnsArray();
        $rows = $data->rowsArray();
        $caption = $data->caption;
        $typeOptions = $this->getAllowedColumnTypeOptions();
        $defaultType = isset($typeOptions['singleline']) ? 'singleline' : array_key_first($typeOptions);

        // Required padding changes stored content even when editors only touch
        // another field. Include it in Craft's otherwise unchanged delta group.
        if (($this->minRows ?? 0) > count($rows) || ($this->minColumns ?? 0) > count($columns)) {
            $view->registerDeltaName($this->handle, true);
        }

        if ($columns === []) {
            $columns = [
                'col0' => [
                    'heading' => '',
                    'align' => 'left',
                    'width' => '',
                    'type' => $defaultType,
                ],
            ];
        }

        // Leave rows empty when unset — Craft Table parity (minRows unset/0 ⇒ zero rows).
        // Pad only when minRows is explicitly set above the current count.

        // Pad to minRows so the CP editor matches field settings before the first save.
        if ($this->minRows !== null && $this->minRows > count($rows)) {
            // Match the defaults used by Add a row, without replacing deliberately
            // empty cells in existing rows.
            $defaults = [];

            foreach ($columns as $columnId => $column) {
                $type = $column['type'] ?? 'singleline';
                $defaults[$columnId] = in_array($type, ['checkbox', 'lightswitch'], true) ? false : '';

                if ($type === 'select') {
                    $options = $column['options'] ?? [];
                    $defaults[$columnId] = $options[0]['value'] ?? '';

                    foreach ($options as $option) {
                        if (!empty($option['default'])) {
                            $defaults[$columnId] = $option['value'];
                            break;
                        }
                    }
                }
            }

            $nextIndex = 0;

            while (count($rows) < $this->minRows) {
                while (array_key_exists('row' . $nextIndex, $rows)) {
                    $nextIndex++;
                }
                $rows['row' . $nextIndex] = $defaults;
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
                    'type' => $defaultType,
                ];
                $nextIndex++;
            }
        }

        // PHP and JavaScript spell some floats differently in JSON. Use the same
        // exact string for the initial form snapshot and the mounted editor.
        foreach ($rows as $rowId => $row) {
            foreach ($columns as $columnId => $column) {
                if (($column['type'] ?? '') === 'number' && is_float($row[$columnId] ?? null)) {
                    $rows[$rowId][$columnId] = Json::encode($row[$columnId]);
                }
            }
        }

        // Keys are already colN/rowN from TableValue — do not re-prefix (avoids colcol0).
        $componentSettings = [
            'name' => $this->handle,
            'columns' => $columns,
            'rows' => $rows,
            'caption' => $caption,
            'enableCaption' => $this->enableCaption,
            'captionLabel' => $this->captionLabel
                ? Craft::t('tablemaker', $this->captionLabel)
                : Craft::t('tablemaker', 'Caption'),
            'captionInstructions' => $this->captionInstructions
                ? Craft::t('tablemaker', $this->captionInstructions)
                : '',
            'captionPlaceholder' => $this->captionPlaceholder
                ? Craft::t('tablemaker', $this->captionPlaceholder)
                : '',
            'typeOptions' => $typeOptions,
            'typeLabels' => self::allColumnTypeLabels(),
            'ckeditorAvailable' => $ckeditorAvailable,
            'richTextEditingMode' => self::normalizeRichTextEditingMode($this->richTextEditingMode),
            'richTextLinkOptions' => $ckeditorAvailable ? $this->_richTextLinkOptions($element) : [],
            'elementSiteId' => $element?->siteId,
            'enableWidthColumn' => $this->enableWidthColumn,
            'enableAlignmentColumn' => $this->enableAlignmentColumn,
            'editColumnsPosition' => self::normalizeEditColumnsPosition($this->editColumnsPosition),
            'minRows' => $this->minRows,
            'maxRows' => $this->maxRows,
            'minColumns' => $this->minColumns,
            'maxColumns' => $this->maxColumns,
            'addRowLabel' => $this->rowsAddRowLabel
                ? Craft::t('tablemaker', $this->rowsAddRowLabel)
                : Craft::t('tablemaker', 'Add a row'),
        ];

        $valueBlob = $this->serializeEditorValue($columns, $rows, $caption);

        return $view->renderTemplate('tablemaker/_field/input', [
            'name' => $this->handle,
            'valueBlob' => $valueBlob,
            'componentSettings' => Json::encode($componentSettings, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
        ]);
    }


    // Private Methods
    // =========================================================================

    /**
     * Return the persisted column schema that may grandfather existing types.
     * Request-populated and placeholder elements are deliberately not trusted.
     *
     * @return array<string, array<string, mixed>>
     */
    private function _persistedColumns(?ElementInterface $element): array
    {
        if (!$element?->id || !$element->siteId || !$this->id) {
            return [];
        }

        try {
            $persistedElement = Craft::$app->getElements()->getElementById(
                $element->id,
                $element::class,
                $element->siteId,
                ['ignorePlaceholders' => true],
            );

            if (!$persistedElement) {
                return [];
            }

            $persistedField = $persistedElement->getFieldLayout()?->getFieldByHandle($this->handle);

            if (!$persistedField || $persistedField->id !== $this->id) {
                return [];
            }

            $value = TableValue::normalize($persistedElement->getFieldValue($this->handle));

            return $value?->columnsArray() ?? [];
        } catch (Throwable) {
            return [];
        }
    }

    private static function _isSupportedCkeditorVersion(string $version): bool
    {
        return version_compare($version, self::MIN_CKEDITOR_VERSION, '>=');
    }

    /**
     * Build the documented CraftLink option shape without depending on a separate
     * CKEditor field instance. Sources stay permission- and URL-aware so the
     * element selector only offers valid link targets.
     */
    private function _richTextLinkOptions(?ElementInterface $element): array
    {
        $setting = self::normalizeRichTextLinkTypesSetting($this->richTextLinkTypes);
        $enabled = $setting === '*' ? array_keys(self::allRichTextLinkTypeOptions()) : $setting;
        $options = [];

        if (in_array('entry', $enabled, true)) {
            $sources = $this->_richTextEntrySources($element);

            if ($sources !== []) {
                $options[] = [
                    'label' => Entry::displayName(),
                    'elementType' => Entry::class,
                    'refHandle' => Entry::refHandle(),
                    'sources' => $sources,
                    'criteria' => ['uri' => ':notempty:'],
                ];
            }
        }

        if (in_array('category', $enabled, true) && $element) {
            $sources = [];

            foreach (Craft::$app->getCategories()->getAllGroups() as $group) {
                $siteSettings = $group->getSiteSettings();

                if (isset($siteSettings[$element->siteId]) && $siteSettings[$element->siteId]->hasUrls) {
                    $sources[] = "group:$group->uid";
                }
            }
            $sources = array_merge($sources, $this->_customElementSources(Category::class));

            if ($sources !== []) {
                $options[] = [
                    'label' => Category::displayName(),
                    'elementType' => Category::class,
                    'refHandle' => Category::refHandle(),
                    'sources' => array_values(array_unique($sources)),
                    'criteria' => ['uri' => ':notempty:'],
                ];
            }
        }

        if (in_array('asset', $enabled, true)) {
            $sources = [];

            foreach (Craft::$app->getVolumes()->getAllVolumes() as $volume) {
                if (
                    Craft::$app->getUser()->checkPermission("viewAssets:$volume->uid")
                    && $volume->getFs()->hasUrls
                ) {
                    $sources[] = "volume:$volume->uid";
                }
            }
            $sources = array_merge($sources, $this->_customElementSources(Asset::class));

            if ($sources !== []) {
                $options[] = [
                    'label' => Asset::displayName(),
                    'elementType' => Asset::class,
                    'refHandle' => Asset::refHandle(),
                    'sources' => array_values(array_unique($sources)),
                ];
            }
        }

        return $options;
    }

    private function _richTextEntrySources(?ElementInterface $element): array
    {
        $sources = [];
        $showSingles = false;
        $sites = Craft::$app->getSites()->getAllSites();

        foreach (Craft::$app->getEntries()->getAllSections() as $section) {
            if ($section->type === Section::TYPE_SINGLE) {
                $showSingles = true;
                continue;
            }

            if (!$element) {
                continue;
            }

            $siteSettings = $section->getSiteSettings();

            foreach ($sites as $site) {
                if (isset($siteSettings[$site->id]) && $siteSettings[$site->id]->hasUrls) {
                    $sources[] = "section:$section->uid";
                    break;
                }
            }
        }

        $sources = array_values(array_unique($sources));

        if ($showSingles) {
            array_unshift($sources, 'singles');
        }

        if ($sources !== []) {
            array_unshift($sources, '*');
        }

        return array_values(array_unique(array_merge(
            $sources,
            $this->_customElementSources(Entry::class),
        )));
    }

    /** @param class-string<ElementInterface> $elementType */
    private function _customElementSources(string $elementType): array
    {
        $sources = [];

        foreach (Craft::$app->getElementSources()->getSources($elementType, 'modal') as $source) {
            if (($source['type'] ?? null) === ElementSources::TYPE_CUSTOM && isset($source['key'])) {
                $sources[] = $source['key'];
            }
        }

        return $sources;
    }

    private function _requestSizeErrors(array $value): array
    {
        $columns = is_array($value['columns'] ?? null) ? $value['columns'] : [];
        $rows = is_array($value['rows'] ?? null) ? $value['rows'] : [];
        $columnOrder = is_array($value['columnOrder'] ?? null) ? $value['columnOrder'] : [];
        $rowOrder = is_array($value['rowOrder'] ?? null) ? $value['rowOrder'] : [];
        $columnCount = count($columns);
        $rowCount = count($rows);
        $errors = [];

        if ($columnCount > self::MAX_REQUEST_COLUMNS || count($columnOrder) > self::MAX_REQUEST_COLUMNS) {
            $errors[] = Craft::t('tablemaker', 'Table must have at most {count} columns.', [
                'count' => self::MAX_REQUEST_COLUMNS,
            ]);
        }

        if ($rowCount > self::MAX_REQUEST_ROWS || count($rowOrder) > self::MAX_REQUEST_ROWS) {
            $errors[] = Craft::t('tablemaker', 'Table must have at most {count} rows.', [
                'count' => self::MAX_REQUEST_ROWS,
            ]);
        }

        if ($columnCount > 0 && $rowCount > intdiv(self::MAX_REQUEST_CELLS, $columnCount)) {
            $errors[] = Craft::t('tablemaker', 'Table must have at most {count} cells.', [
                'count' => self::MAX_REQUEST_CELLS,
            ]);
        }

        if ($rowCount <= self::MAX_REQUEST_ROWS) {
            $submittedCells = 0;

            foreach ($rows as $row) {
                if (!is_array($row)) {
                    continue;
                }

                $submittedCells += count($row);

                if ($submittedCells > self::MAX_REQUEST_CELLS) {
                    $errors[] = Craft::t('tablemaker', 'Table must have at most {count} submitted cells.', [
                        'count' => self::MAX_REQUEST_CELLS,
                    ]);
                    break;
                }
            }
        }

        return array_values(array_unique($errors));
    }

    /**
     * Match the browser serializer exactly. Craft snapshots form values before the
     * component upgrades; any shape/order drift here creates a provisional draft
     * merely by opening an entry.
     *
     * @param array<string, array<string, mixed>> $columns
     * @param array<string, array<string, mixed>> $rows
     */
    private function serializeEditorValue(array $columns, array $rows, string $caption): string
    {
        $editorColumns = [];

        foreach ($columns as $columnId => $column) {
            $type = TableValue::normalizeType($column['type'] ?? 'singleline');
            $editorColumn = [
                'heading' => (string)($column['heading'] ?? ''),
                'type' => $type,
            ];

            // Hidden layout controls must not discard existing column formatting.
            $editorColumn['width'] = (string)($column['width'] ?? '');
            $editorColumn['align'] = TableValue::normalizeAlignment($column['align'] ?? '') ?: 'left';

            if ($type === 'select') {
                $editorColumn['options'] = array_map(static fn(array $option): array => [
                    'label' => (string)($option['label'] ?? $option['value'] ?? ''),
                    'value' => (string)($option['value'] ?? $option['label'] ?? ''),
                    'default' => !empty($option['default']),
                ], array_values($column['options'] ?? []));
            }

            $editorColumns[(string)$columnId] = $editorColumn;
        }

        $editorRows = [];

        foreach ($rows as $rowId => $row) {
            $editorRow = [];

            foreach ($editorColumns as $columnId => $column) {
                $value = $row[$columnId] ?? null;
                $type = $column['type'];

                if (in_array($type, ['checkbox', 'lightswitch'], true)) {
                    $value = $value === true || $value === 1 || $value === '1' || $value === 'true';
                } elseif ($value === null || is_object($value) || is_array($value)) {
                    $value = '';
                }

                $editorRow[$columnId] = $value;
            }

            $editorRows[(string)$rowId] = (object)$editorRow;
        }

        $editorPayload = [
            'columns' => (object)$editorColumns,
            'rows' => (object)$editorRows,
        ];

        $caption = trim($caption);

        if ($caption !== '') {
            $editorPayload['caption'] = $caption;
        }

        return Json::encode(
            $editorPayload,
            JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE,
        );
    }
}
