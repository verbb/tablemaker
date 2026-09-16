<?php

declare(strict_types=1);

use craft\elements\Entry;
use craft\fieldlayoutelements\CustomField;
use craft\models\EntryType;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;
use craft\models\GqlSchema;
use craft\models\Section;
use craft\models\Section_SiteSettings;
use Tests\Support\AdminUser;
use verbb\tablemaker\fields\TableMakerField;

beforeEach(function() {
    AdminUser::login();
    $suffix = bin2hex(random_bytes(4));
    $this->tableField = new TableMakerField([
        'name' => 'Workflow table',
        'handle' => 'workflowTable' . $suffix,
        'enableCaption' => true,
    ]);
    expect(Craft::$app->getFields()->saveField($this->tableField))->toBeTrue();
    $layout = new FieldLayout(['type' => Entry::class]);
    $layout->setTabs([new FieldLayoutTab([
        'layout' => $layout,
        'name' => 'Content',
        'elements' => [new CustomField($this->tableField)],
    ])]);
    $this->entryType = new EntryType(['name' => 'Workflow', 'handle' => 'workflow' . $suffix, 'hasTitleField' => false, 'titleFormat' => 'Workflow']);
    $this->entryType->setFieldLayout($layout);
    expect(Craft::$app->getEntries()->saveEntryType($this->entryType))->toBeTrue();
    $this->section = new Section(['name' => 'Workflow', 'handle' => 'workflow' . $suffix, 'type' => Section::TYPE_CHANNEL]);
    $this->section->setEntryTypes([$this->entryType]);
    $this->section->setSiteSettings([new Section_SiteSettings([
        'siteId' => Craft::$app->getSites()->getPrimarySite()->id,
        'enabledByDefault' => true,
        'hasUrls' => false,
    ])]);
    expect(Craft::$app->getEntries()->saveSection($this->section))->toBeTrue();
    $this->entry = new Entry([
        'sectionId' => $this->section->id,
        'typeId' => $this->entryType->id,
        'siteId' => Craft::$app->getSites()->getPrimarySite()->id,
        'slug' => 'workflow',
    ]);
    $this->entry->setFieldValue($this->tableField->handle, [
        'columns' => [['heading' => 'Plan', 'type' => 'heading']],
        'rows' => [['Basic']],
        'caption' => 'Pricing',
    ]);
    expect(Craft::$app->getElements()->saveElement($this->entry))->toBeTrue();
});

afterEach(function() {
    Craft::$app->getGql()->setActiveSchema(null);
    if (isset($this->section)) {
        Craft::$app->getEntries()->deleteSection($this->section);
    }
    if (isset($this->entryType)) {
        Craft::$app->getEntries()->deleteEntryType($this->entryType);
    }
    if (isset($this->tableField)) {
        Craft::$app->getFields()->deleteField($this->tableField);
    }
});

it('persists every column type and cleared values through Craft', function() {
    $cells = [
        'checkbox' => true, 'color' => '#aabbcc', 'date' => '2026-09-16',
        'select' => 'monthly', 'email' => 'hello@example.test', 'heading' => 'Résumé ✓',
        'lightswitch' => false, 'multiline' => "One\nTwo", 'number' => 0,
        'singleline' => ':literal: 🐨', 'time' => '19:05', 'url' => 'https://example.test/plans',
    ];
    $columns = [];
    foreach (array_keys($cells) as $type) {
        $columns[] = ['heading' => $type, 'type' => $type, 'options' => [['label' => 'Monthly', 'value' => 'monthly']]];
    }
    $handle = $this->tableField->handle;
    $this->entry->setFieldValue($handle, ['columns' => $columns, 'rows' => [array_values($cells)], 'caption' => ' Pricing ']);
    expect(Craft::$app->getElements()->saveElement($this->entry))->toBeTrue();
    $saved = Entry::find()->id($this->entry->id)->status(null)->one()->getFieldValue($handle);
    expect(array_values($saved->rowsArray()['row0']))->toBe(array_values($cells));
    expect((string)$saved->table)->toContain('<th scope="row">Résumé ✓</th>')->toContain('One<br>');
    expect($this->tableField->getSearchKeywords($saved, $this->entry))->toContain('Résumé ✓')->toContain('Pricing');
    $this->entry->setFieldValue($handle, ['columns' => $columns, 'rows' => [], 'caption' => '']);
    expect(Craft::$app->getElements()->saveElement($this->entry))->toBeTrue();
    $cleared = Entry::find()->id($this->entry->id)->status(null)->one()->getFieldValue($handle);
    expect($cleared->rowsArray())->toBe([])->and($cleared->caption)->toBe('');
});

it('preserves significant cell whitespace through validated saves', function(string $type, string $cell) {
    $handle = $this->tableField->handle;
    $this->entry->setFieldValueFromRequest($handle, [
        'columns' => [['heading' => 'Value', 'type' => $type, 'options' => [['label' => 'Exact', 'value' => $cell]]]],
        'rows' => [[$cell]],
    ]);
    for ($save = 0; $save < 2; $save++) {
        expect(Craft::$app->getElements()->saveElement($this->entry))->toBeTrue();
        $this->entry = Entry::find()->id($this->entry->id)->status(null)->one();
        $saved = $this->entry->getFieldValue($handle);
        expect($saved->rows['row0']['col0'])->toBe($cell);
        if ($type === 'select') {
            expect($saved->columns['col0']['options'][0]['value'])->toBe($cell);
        }
    }
})->with([
    'multiline indentation and blank lines' => ['multiline', "\n  first\nlast  \n"],
    'exact dropdown identifier' => ['select', ' exact '],
]);

it('preserves table structure and captions on the first save without populated cells', function() {
    $entry = new Entry([
        'sectionId' => $this->section->id,
        'typeId' => $this->entryType->id,
        'siteId' => $this->entry->siteId,
        'slug' => 'empty-structure',
    ]);
    $handle = $this->tableField->handle;
    $entry->setFieldValue($handle, [
        'columns' => [['heading' => 'Available', 'type' => 'checkbox']],
        'rows' => [[false]],
        'caption' => 'Availability',
    ]);
    expect(Craft::$app->getElements()->saveElement($entry))->toBeTrue();
    $saved = Entry::find()->id($entry->id)->status(null)->one()->getFieldValue($handle);
    expect($saved->columns['col0']['heading'])->toBe('Available');
    expect($saved->rowsArray())->toBe(['row0' => ['col0' => false]]);
    expect($saved->caption)->toBe('Availability');
});

it('keeps drafts and duplicates independent of canonical table data', function() {
    $handle = $this->tableField->handle;
    $draft = Craft::$app->getDrafts()->createDraft($this->entry, AdminUser::findAdmin()->id);
    $value = $draft->getFieldValue($handle);
    $value->rows['row0']['col0'] = 'Draft plan';
    $draft->setFieldValue($handle, $value);
    expect(Craft::$app->getElements()->saveElement($draft))->toBeTrue();
    expect(Entry::find()->id($this->entry->id)->status(null)->one()->getFieldValue($handle)->rows['row0']['col0'])->toBe('Basic');
    $published = Craft::$app->getDrafts()->applyDraft($draft);
    expect(Entry::find()->id($published->id)->status(null)->one()->getFieldValue($handle)->rows['row0']['col0'])->toBe('Draft plan');
    $copy = Craft::$app->getElements()->duplicateElement($published);
    $copyValue = $copy->getFieldValue($handle);
    $copyValue->rows['row0']['col0'] = 'Copy plan';
    $copy->setFieldValue($handle, $copyValue);
    expect(Craft::$app->getElements()->saveElement($copy))->toBeTrue();
    expect(Entry::find()->id($published->id)->status(null)->one()->getFieldValue($handle)->rows['row0']['col0'])->toBe('Draft plan');
    expect(Entry::find()->id($copy->id)->status(null)->one()->getFieldValue($handle)->rows['row0']['col0'])->toBe('Copy plan');
});

it('preserves reordered rows and columns through database saves', function() {
    $handle = $this->tableField->handle;
    $value = [
        'columns' => [
            'col2' => ['heading' => 'Third', 'type' => 'singleline'],
            'col0' => ['heading' => 'First', 'type' => 'singleline'],
            'col1' => ['heading' => 'Second', 'type' => 'singleline'],
        ],
        'rows' => [
            'row2' => ['col0' => 'A3', 'col1' => 'B3', 'col2' => 'C3'],
            'row0' => ['col0' => 'A1', 'col1' => 'B1', 'col2' => 'C1'],
            'row1' => ['col0' => 'A2', 'col1' => 'B2', 'col2' => 'C2'],
        ],
    ];
    $this->entry->setFieldValue($handle, $value);
    for ($save = 0; $save < 2; $save++) {
        expect(Craft::$app->getElements()->saveElement($this->entry))->toBeTrue();
        $this->entry = Entry::find()->id($this->entry->id)->status(null)->one();
        $saved = $this->entry->getFieldValue($handle);
        expect(array_keys($saved->columnsArray()))->toBe(['col2', 'col0', 'col1']);
        expect(array_keys($saved->rowsArray()))->toBe(['row2', 'row0', 'row1']);
        expect(array_map('array_values', array_values($saved->rowsArray())))->toBe([
            ['C3', 'A3', 'B3'], ['C1', 'A1', 'B1'], ['C2', 'A2', 'B2'],
        ]);
    }
});

it('validates row limits and rejects invalid cells without overwriting saved content', function() {
    $handle = $this->tableField->handle;
    $this->entry->setFieldValue($handle, ['columns' => [['heading' => 'Email', 'type' => 'email']], 'rows' => [['invalid']]]);
    expect(Craft::$app->getElements()->saveElement($this->entry))->toBeFalse();
    expect($this->entry->getErrors($handle))->not->toBeEmpty();
    expect(Entry::find()->id($this->entry->id)->status(null)->one()->getFieldValue($handle)->rows['row0']['col0'])->toBe('Basic');
    $this->tableField->minRows = 2;
    $this->tableField->maxRows = 3;
    $this->entry->clearErrors();
    $this->entry->setFieldValue($handle, ['columns' => [['heading' => 'Plan', 'type' => 'singleline']], 'rows' => []]);
    $this->tableField->validateTableData($this->entry);
    expect($this->entry->getErrors($handle))->toContain('Table must have at least 2 rows.');
});

it('executes GraphQL mutations and queries with actual schema permissions', function() {
    $handle = $this->tableField->handle;
    $schema = new GqlSchema([
        'name' => 'Workflow', 'uid' => craft\helpers\StringHelper::UUID(),
        'scope' => ["sections.{$this->section->uid}:read", "sections.{$this->section->uid}:save", "sites.{$this->entry->getSite()->uid}:read"],
    ]);
    $mutationName = "save_{$this->section->handle}_{$this->entryType->handle}_Entry";
    $query = 'mutation Save($id: ID!, $table: ' . $handle . '_TableMakerInput) {' . $mutationName . '(id: $id, ' . $handle . ': $table) { id ' . $handle . ' { caption rows columns { type options { label value default } } table } }}';
    $variables = ['id' => (string)$this->entry->id, 'table' => [
        'columns' => [['heading' => 'Plan', 'type' => 'select', 'options' => [['label' => 'Pro', 'value' => 'pro', 'default' => true]]]],
        'rows' => [['pro']], 'caption' => 'API pricing',
    ]];
    $result = Craft::$app->getGql()->executeQuery($schema, $query, $variables, null, true);
    expect($result)->not->toHaveKey('errors');
    expect($result['data'][$mutationName][$handle]['rows'])->toBe([['pro']]);
    expect(Entry::find()->id($this->entry->id)->status(null)->one()->getFieldValue($handle)->caption)->toBe('API pricing');
    $read = '{ entry(id: ' . $this->entry->id . ') { ... on ' . $this->entryType->handle . '_Entry { ' . $handle . ' { rows caption table } } } }';
    $result = Craft::$app->getGql()->executeQuery($schema, $read, null, null, true);
    expect($result)->not->toHaveKey('errors');
    expect($result['data']['entry'][$handle]['rows'])->toBe([['pro']]);
    $readOnly = new GqlSchema(['name' => 'Read only', 'uid' => craft\helpers\StringHelper::UUID(), 'scope' => ["sections.{$this->section->uid}:read"]]);
    $denied = Craft::$app->getGql()->executeQuery($readOnly, $query, $variables);
    expect($denied)->toHaveKey('errors');
    expect(Entry::find()->id($this->entry->id)->status(null)->one()->getFieldValue($handle)->caption)->toBe('API pricing');
});
