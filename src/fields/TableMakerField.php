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

    public function normalizeValue(mixed $value, ?ElementInterface $element): mixed
    {
        return TableValue::normalize($value, false);
    }

    public function normalizeValueFromRequest(mixed $value, ?ElementInterface $element): mixed
    {
        return TableValue::normalize($value, true);
    }

    public function serializeValue(mixed $value, ?ElementInterface $element): mixed
    {
        $data = TableValue::normalize($value, true);

        return $data?->toStorage() ?? ['columns' => [], 'rows' => []];
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
        $data = TableValue::normalize($value, true);

        if ($data === null || $data->columns === [] || $data->rows === []) {
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
            'settings' => $this->getSettings(),
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

        if ($rows === []) {
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
        asort($typeOptions);

        // Keys are already colN/rowN from TableValue — do not re-prefix (avoids colcol0).
        $componentSettings = [
            'name' => $this->handle,
            'columns' => $columns,
            'rows' => $rows,
            'typeOptions' => $typeOptions,
            'enableWidthColumn' => $this->enableWidthColumn,
            'enableAlignmentColumn' => $this->enableAlignmentColumn,
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
