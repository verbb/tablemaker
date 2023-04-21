<?php
namespace verbb\tablemaker\fields;

use verbb\tablemaker\assetbundles\FieldAsset;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\gql\GqlEntityRegistry;
use craft\helpers\Cp;
use craft\helpers\Db;
use craft\helpers\Json;
use craft\helpers\Template;

use yii\db\Schema;

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
    public ?string $rowsLabel = null;
    public ?string $rowsInstructions = null;
    public ?string $rowsAddRowLabel = null;


    // Public Methods
    // =========================================================================

    public function getContentColumnType(): string
    {
        return Schema::TYPE_TEXT;
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
            foreach ($value['columns'] as $col) {
                $html .= '<th align="' . $col['align'] . '" width="' . $col['width'] . '">' . $col['heading'] . '</th>';
            }
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
                    $align = $value['columns'][$key]['align'] ?? $value['columns'][$i]['align'];
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
                $columns['col' . $key] = [
                    'heading' => $val['heading'],
                    'align' => $val['align'],
                    'width' => $val['width'],
                    'type' => 'singleline',
                ];
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
                    $rows['row' . $rowKey]['col' . $colKey] = $colVal;
                }
            }
        } else {
            $rows = ['row0' => []];
        }

        $columnSettings = [
            'heading' => [
                'heading' => Craft::t('tablemaker', 'Heading'),
                'type' => 'singleline',
            ],
            'width' => [
                'heading' => Craft::t('tablemaker', 'Width'),
                'class' => 'code',
                'type' => 'singleline',
                'width' => 50,
            ],
            'align' => [
                'heading' => Craft::t('tablemaker', 'Alignment'),
                'class' => 'thin',
                'type' => 'select',
                'options' => [
                    'left' => Craft::t('tablemaker', 'Left'),
                    'center' => Craft::t('tablemaker', 'Center'),
                    'right' => Craft::t('tablemaker', 'Right'),
                ],
            ],
        ];

        $view->registerJs('new Craft.TableMaker(' .
            Json::encode($view->namespaceInputId($name), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($view->namespaceInputId($columnsInputId), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($view->namespaceInputId($rowsInputId), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($view->namespaceInputName($columnsInput), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($view->namespaceInputName($rowsInput), JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($columns, JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($rows, JSON_UNESCAPED_UNICODE) . ', ' .
            Json::encode($columnSettings, JSON_UNESCAPED_UNICODE) .
            ');');

        $fieldSettings = $this->getSettings();
        $columnsField = Cp::editableTableFieldHtml([
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

        $columnType = GqlEntityRegistry::getEntity($typeName) ?: GqlEntityRegistry::createEntity($columnTypeName, new ObjectType([
            'name' => $columnTypeName,
            'fields' => [
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
}
