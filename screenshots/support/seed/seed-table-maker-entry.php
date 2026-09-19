/** Seed a populated Table Maker field for the feature screenshot. */

use craft\elements\Entry;
use craft\fieldlayoutelements\CustomField;
use craft\helpers\Json;
use craft\models\EntryType;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;
use craft\models\Section;
use craft\models\Section_SiteSettings;
use verbb\tablemaker\fields\TableMakerField;

$fields = Craft::$app->getFields();
$entries = Craft::$app->getEntries();
$site = Craft::$app->getSites()->getPrimarySite();
$fieldHandle = 'docsScreenshotTable';
$sectionHandle = 'docsScreenshotTableMaker';
$field = $fields->getFieldByHandle($fieldHandle);

if (!$field instanceof TableMakerField) {
    $field = new TableMakerField(['name' => 'Whisky notes', 'handle' => $fieldHandle]);
    if (!$fields->saveField($field)) throw new RuntimeException('Unable to save Table Maker field: ' . Json::encode($field->getErrors()));
}

$section = $entries->getSectionByHandle($sectionHandle);

if (!$section) {
    $entryType = new EntryType(['name' => 'Table Maker showcase', 'handle' => $sectionHandle . 'Type', 'hasTitleField' => true]);
    $layout = new FieldLayout(['type' => Entry::class]);
    $tab = new FieldLayoutTab(['name' => Craft::t('app', 'Content'), 'layout' => $layout]);
    $tab->setElements([new CustomField($field)]);
    $layout->setTabs([$tab]);
    $entryType->setFieldLayout($layout);
    if (!$entries->saveEntryType($entryType)) throw new RuntimeException('Unable to save Table Maker entry type: ' . Json::encode($entryType->getErrors()));

    $section = new Section(['name' => 'Table Maker showcase', 'handle' => $sectionHandle, 'type' => Section::TYPE_CHANNEL]);
    $section->setEntryTypes([$entryType]);
    $section->setSiteSettings([new Section_SiteSettings(['siteId' => $site->id, 'enabledByDefault' => true, 'hasUrls' => false])]);
    if (!$entries->saveSection($section)) throw new RuntimeException('Unable to save Table Maker section: ' . Json::encode($section->getErrors()));
}

$entryType = $entries->getEntryTypesBySectionId($section->id)[0] ?? null;
$entry = Entry::find()->sectionId($section->id)->siteId($site->id)->status(null)->one();
if (!$entry) $entry = new Entry(['sectionId' => $section->id, 'typeId' => $entryType->id, 'siteId' => $site->id, 'slug' => 'table-maker-showcase', 'enabled' => true]);

$entry->title = 'Table Maker showcase';
$entry->setFieldValue($fieldHandle, [
    'columns' => [
        ['heading' => 'Name', 'width' => '28%', 'align' => 'left', 'type' => 'singleline'],
        ['heading' => 'Country', 'width' => '20%', 'align' => 'center', 'type' => 'singleline'],
        ['heading' => 'Proof', 'width' => '14%', 'align' => 'center', 'type' => 'singleline'],
        ['heading' => 'Tasting notes', 'width' => '38%', 'align' => 'left', 'type' => 'multiline'],
    ],
    'rows' => [
        ['Talisker 57° North', 'Skye, Scotland', '57%', 'Tart fruit, sweet to start, with smoke and tar developing around the finish.'],
        ['Ardbeg 10 year old', 'Islay, Scotland', '46%', 'An initial moderate and clean sweetness is rapidly followed by smoke.'],
        ['Woodford Reserve', 'Kentucky, USA', '45.2%', 'Toffee, roasted nuts, delicate butterscotch, vanilla and aromatic spices.'],
    ],
]);

if (!Craft::$app->getElements()->saveElement($entry)) throw new RuntimeException('Unable to save Table Maker entry: ' . Json::encode($entry->getErrors()));
echo Json::encode(['entryEditRoute' => parse_url((string)$entry->getCpEditUrl(), PHP_URL_PATH)], JSON_THROW_ON_ERROR);
