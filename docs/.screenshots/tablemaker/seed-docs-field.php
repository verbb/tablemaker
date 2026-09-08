/**
 * Seed a Table Maker field + a section/entry (with a demo table) for docs screenshots.
 *
 * Echoes JSON: fieldId, fieldHandle, settingsRoute, entryEditRoute.
 * Note: no opening PHP tag — @verbb/docs-screenshots injects this into a bootstrap.
 *
 * Starter seed: creates the field + an entry pre-filled with a small columns/rows table so
 * the entry-edit screenshot shows a populated editable table. Tune columns/rows here as the
 * Phase 1 editable-table UI lands.
 */

use craft\elements\Entry;
use craft\fieldlayoutelements\CustomField;
use craft\helpers\Json;
use craft\models\EntryType;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;
use craft\models\Section;
use craft\models\Section_SiteSettings;
use craft\models\Site;
use verbb\tablemaker\fields\TableMakerField;

const DOCS_FIELD_HANDLE = 'docsScreenshotTableMaker';
const DOCS_SECTION_HANDLE = 'docsScreenshotTableMaker';
const DOCS_ENTRY_HANDLE = 'docs-screenshot-entry';

function docsScreenshotSite(): Site
{
    return Craft::$app->getSites()->getPrimarySite();
}

function docsScreenshotAdminPath(): string
{
    return Craft::$app->getConfig()->getGeneral()->cpTrigger ?: 'admin';
}

function docsScreenshotSection(string $handle, string $name): Section
{
    $entriesService = Craft::$app->getEntries();
    $section = $entriesService->getSectionByHandle($handle);
    $site = docsScreenshotSite();

    if (!$section) {
        $entryType = new EntryType([
            'name' => $name,
            'handle' => $handle . 'Type',
            'hasTitleField' => true,
        ]);

        if (!$entriesService->saveEntryType($entryType)) {
            throw new RuntimeException('Unable to save entry type: ' . Json::encode($entryType->getErrors()));
        }

        $section = new Section([
            'name' => $name,
            'handle' => $handle,
            'type' => Section::TYPE_CHANNEL,
        ]);
        $section->setEntryTypes([$entryType]);
        $section->setSiteSettings([
            new Section_SiteSettings([
                'siteId' => $site->id,
                'enabledByDefault' => true,
                'hasUrls' => false,
            ]),
        ]);

        if (!$entriesService->saveSection($section)) {
            throw new RuntimeException('Unable to save section: ' . Json::encode($section->getErrors()));
        }

        $section = $entriesService->getSectionByHandle($handle);
    }

    if (!$section) {
        throw new RuntimeException("Section `{$handle}` could not be reloaded.");
    }

    return $section;
}

function docsScreenshotTableMakerField(): TableMakerField
{
    $fields = Craft::$app->getFields();
    $existing = $fields->getFieldByHandle(DOCS_FIELD_HANDLE);

    $field = $existing instanceof TableMakerField ? $existing : new TableMakerField([
        'handle' => DOCS_FIELD_HANDLE,
    ]);

    $field->name = 'Specifications';
    $field->instructions = 'Build a table of specifications.';
    $field->enableCaption = true;

    if (!$fields->saveField($field)) {
        throw new RuntimeException('Unable to save Table Maker field: ' . Json::encode($field->getErrors()));
    }

    $saved = $fields->getFieldByHandle(DOCS_FIELD_HANDLE);

    if (!$saved instanceof TableMakerField) {
        throw new RuntimeException('Table Maker field could not be reloaded.');
    }

    return $saved;
}

function docsScreenshotAttachField(Section $section, TableMakerField $field): void
{
    $entriesService = Craft::$app->getEntries();
    $entryType = $entriesService->getEntryTypesBySectionId($section->id)[0] ?? null;

    if (!$entryType) {
        throw new RuntimeException("Section `{$section->handle}` has no entry types.");
    }

    $layout = $entryType->getFieldLayout() ?? new FieldLayout(['type' => Entry::class]);
    $tabs = $layout->getTabs();

    if (!$tabs) {
        $tabs = [new FieldLayoutTab(['name' => Craft::t('app', 'Content'), 'layout' => $layout])];
    }

    $tab = $tabs[0];
    $elements = array_values(array_filter(
        $tab->getElements(),
        static fn($element) => !($element instanceof CustomField && $element->getField()?->id === $field->id),
    ));
    $elements[] = new CustomField($field);
    $tab->setElements($elements);
    $layout->setTabs($tabs);
    $entryType->setFieldLayout($layout);

    if (!$entriesService->saveEntryType($entryType)) {
        throw new RuntimeException('Unable to attach Table Maker field: ' . Json::encode($entryType->getErrors()));
    }
}

function docsScreenshotUpsertEntry(Section $section, string $slug, string $title, string $fieldHandle, array $tableValue): Entry
{
    $site = docsScreenshotSite();
    $entryType = Craft::$app->getEntries()->getEntryTypesBySectionId($section->id)[0] ?? null;

    if (!$entryType) {
        throw new RuntimeException("Section `{$section->handle}` has no entry types.");
    }

    $entry = Entry::find()->sectionId($section->id)->slug($slug)->siteId($site->id)->status(null)->one();

    if (!$entry) {
        $entry = new Entry([
            'sectionId' => $section->id,
            'typeId' => $entryType->id,
            'siteId' => $site->id,
            'slug' => $slug,
            'enabled' => true,
        ]);
    }

    $entry->title = $title;
    $entry->enabled = true;
    $entry->setFieldValue($fieldHandle, $tableValue);

    if (!Craft::$app->getElements()->saveElement($entry)) {
        throw new RuntimeException('Unable to save entry: ' . Json::encode($entry->getErrors()));
    }

    return $entry;
}

$adminPath = docsScreenshotAdminPath();
$section = docsScreenshotSection(DOCS_SECTION_HANDLE, 'Table Maker Demo');
$field = docsScreenshotTableMakerField();
docsScreenshotAttachField($section, $field);

// Demo table matching Table Maker's {columns, rows, caption?} value contract.
$tableValue = [
    'columns' => [
        ['type' => 'heading', 'heading' => 'Plan', 'align' => 'left', 'width' => ''],
        ['type' => 'singleline', 'heading' => 'Price', 'align' => 'left', 'width' => ''],
    ],
    'rows' => [
        ['Basic', '$9'],
        ['Pro', '$29'],
        ['Team', '$79'],
    ],
    'caption' => 'Monthly pricing',
];

$entry = docsScreenshotUpsertEntry($section, DOCS_ENTRY_HANDLE, 'Demo', $field->handle, $tableValue);

$entryEditUrl = $entry->getCpEditUrl();
$entryEditPath = parse_url((string)$entryEditUrl, PHP_URL_PATH)
    ?: "/{$adminPath}/entries/{$section->handle}/{$entry->id}-{$entry->slug}";

echo Json::encode([
    'fieldId' => (int)$field->id,
    'fieldHandle' => $field->handle,
    'settingsRoute' => "/{$adminPath}/settings/fields/edit/{$field->id}",
    'entryEditRoute' => $entryEditPath,
], JSON_THROW_ON_ERROR);
