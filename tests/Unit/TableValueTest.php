<?php

declare(strict_types=1);

use Twig\Environment;
use Twig\Loader\ArrayLoader;
use craft\elements\GlobalSet;
use craft\fieldlayoutelements\CustomField;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;
use craft\helpers\StringHelper;
use verbb\tablemaker\fields\TableMakerField;
use verbb\tablemaker\helpers\TableValue;
use verbb\tablemaker\models\DualAccessMap;

describe('DualAccessMap', function() {
    it('exposes named and positional access to the same entry', function() {
        $map = new DualAccessMap([
            'col0' => ['heading' => 'Plan', 'align' => 'right'],
            'col1' => ['heading' => 'Price', 'align' => 'left'],
        ]);

        expect($map[0]['heading'])->toBe('Plan');
        expect($map['col0']['heading'])->toBe('Plan');
        expect($map[1]['align'])->toBe('left');
        expect($map['col1']['align'])->toBe('left');
    });

    it('foreach yields each entry once under its named key', function() {
        $map = new DualAccessMap([
            'col0' => 'a',
            'col1' => 'b',
        ]);

        $keys = [];
        foreach ($map as $key => $value) {
            $keys[] = $key;
        }

        expect($keys)->toBe(['col0', 'col1']);
        expect(count($map))->toBe(2);
    });

    it('jsonSerialize returns named keys only', function() {
        $map = new DualAccessMap(['col0' => 'x', 'col1' => 'y']);

        expect(json_encode($map))->toBe('{"col0":"x","col1":"y"}');
    });

    it('unsetting a positional index reindexes remaining order', function() {
        $map = new DualAccessMap([
            'col0' => 'a',
            'col1' => 'b',
            'col2' => 'c',
        ]);

        unset($map[1]);

        expect($map[0])->toBe('a');
        expect($map[1])->toBe('c');
        expect(isset($map['col1']))->toBeFalse();
    });
});

describe('TableValue normalize + storage', function() {
    it('normalizes Unicode line breaks while preserving multiline whitespace', function() {
        $text = " First\r\nSecond\rThird\u{0085}Fourth\u{2028}Fifth\u{2029}Last ";
        $normalized = " First\nSecond\nThird\nFourth\nFifth\nLast ";
        expect(TableValue::normalizeCell('multiline', $text, true))->toBe($normalized);
        expect(TableValue::normalizeCell('singleline', $text, true))->toBe(trim($normalized));
    });

    it('keeps date and time wall values stable across site time zones', function(string $timeZone) {
        $original = Craft::$app->getTimeZone();
        Craft::$app->setTimeZone($timeZone);
        try {
            $value = TableValue::normalize([
                'columns' => [['heading' => 'Date', 'type' => 'date'], ['heading' => 'Time', 'type' => 'time']],
                'rows' => [
                    ['2026-09-16', '19:05'],
                    ['2026-09-16T00:00:00+10:00', '2026-09-16T19:05:00+10:00'],
                ],
            ], true);
            $expected = [
                'row0' => ['col0' => '2026-09-16', 'col1' => '19:05'],
                'row1' => ['col0' => '2026-09-16', 'col1' => '19:05'],
            ];
            expect($value->rowsArray())->toBe($expected);
            expect(TableValue::normalize($value->toStorage())->rowsArray())->toBe($expected);
        } finally {
            Craft::$app->setTimeZone($original);
        }
    })->with(['UTC', 'Australia/Melbourne', 'America/New_York']);

    it('preserves literal dropdown values that resemble emoji shortcodes', function() {
        $value = TableValue::normalize([
            'columns' => [['heading' => 'Reaction', 'type' => 'select', 'options' => [['label' => 'Smile', 'value' => ':smile:']]]],
            'rows' => [[':smile:']],
        ], true);
        $reloaded = TableValue::normalize($value->toStorage());
        expect($reloaded->rows['row0']['col0'])->toBe(':smile:');
        expect($reloaded->rows['row0']['col0'])->toBe($reloaded->columns['col0']['options'][0]['value']);
    });

    it('preserves cells when normalizing temporary or historical column keys', function() {
        $value = TableValue::normalize([
            'columns' => [
                'col_temp9' => ['heading' => 'Plan', 'type' => 'singleline'],
                'colcol1' => ['heading' => 'Price', 'type' => 'singleline'],
                'col0' => ['heading' => 'Notes', 'type' => 'singleline'],
            ],
            'rows' => ['row_temp9' => ['col_temp9' => 'Basic', 'colcol1' => '$9', 'col0' => 'Keep me']],
        ]);

        expect($value->rowsArray())->toBe([
            'row0' => ['col0' => 'Basic', 'col1' => '$9', 'col2' => 'Keep me'],
        ]);
        expect(TableValue::normalize($value->toStorage())->rowsArray())->toBe($value->rowsArray());
    });

    it('upgrades legacy positional columns/rows and discards bare table HTML', function() {
        $data = TableValue::normalize([
            'columns' => [
                ['heading' => 'Plan', 'type' => 'singleline', 'align' => 'right'],
            ],
            'rows' => [
                ['Basic'],
            ],
            'table' => '<table><tr><td>stale</td></tr></table>',
            'caption' => '  Pricing  ',
        ]);

        expect($data)->not->toBeNull();
        expect($data->columns['col0']['heading'])->toBe('Plan');
        expect($data->rows['row0']['col0'])->toBe('Basic');
        expect($data->caption)->toBe('Pricing');

        $storage = $data->toStorage();
        expect($storage)->not->toHaveKey('table');
        expect($storage['caption'])->toBe('Pricing');
    });

    it('round-trips storage after cell mutation', function() {
        $data = TableValue::normalize([
            'columns' => [['heading' => 'A', 'type' => 'singleline']],
            'rows' => [['One']],
        ]);

        $data->rows['row0']['col0'] = 'Changed';
        $again = TableValue::normalize($data->toStorage());

        expect($again->rowsArray())->toBe(['row0' => ['col0' => 'Changed']]);
    });

    it('keeps Twig positional column access working (COMPAT)', function() {
        $data = TableValue::normalize([
            'columns' => [['heading' => 'Plan', 'type' => 'singleline', 'align' => 'right']],
            'rows' => [['Basic']],
        ]);

        $twig = new Environment(new ArrayLoader([
            'old' => '{% for row in value.rows %}{% for cell in row %}{% set col = value.columns[loop.index0] %}{{ col.align }}:{{ cell }}{% endfor %}{% endfor %}',
        ]), ['strict_variables' => true]);

        expect($twig->render('old', ['value' => $data]))->toBe('right:Basic');
    });

    it('rebuilds HTML after mutation so previews are not stale', function() {
        $data = TableValue::normalize([
            'columns' => [['heading' => 'A', 'type' => 'singleline']],
            'rows' => [['One']],
        ]);

        $first = (string)$data->getTable();
        $data->rows['row0']['col0'] = 'Two';
        $second = (string)$data->getTable();

        expect($first)->not->toBe($second);
        expect($second)->toContain('Two');
    });

    it('HTML-encodes caption content', function() {
        $html = TableValue::renderHtml(
            ['col0' => ['heading' => 'A', 'type' => 'singleline', 'width' => '']],
            ['row0' => ['col0' => 'x']],
            [],
            '<script>alert(1)</script>',
        );

        expect($html)->toContain('<caption>');
        expect($html)->not->toContain('<script>alert(1)</script>');
        expect($html)->toContain('&lt;script&gt;');
    });

    it('encodes headings and every rendered cell while preserving table semantics', function() {
        $html = TableValue::renderHtml(
            [
                'col0' => ['heading' => '<img src=x onerror=alert(1)>', 'type' => 'heading'],
                'col1' => ['heading' => 'Notes', 'type' => 'multiline'],
            ],
            [
                'row0' => [
                    'col0' => '<script>alert(1)</script>',
                    'col1' => "First<br>\nSecond",
                ],
            ],
        );

        expect($html)->not->toContain('<script>')
            ->and($html)->not->toContain('<img')
            ->and($html)->toContain('<th scope="row">&lt;script&gt;alert(1)&lt;/script&gt;</th>')
            ->and($html)->toContain('First&lt;br&gt;<br>')
            ->and($html)->toContain('Second');
    });

    it('rejects invalid typed cells', function() {
        expect(TableValue::validateCell('email', 'not-an-email'))->toBeFalse();
        expect(TableValue::validateCell('email', 'user@example.com'))->toBeTrue();
        expect(TableValue::validateCell('url', 'not a url'))->toBeFalse();
        expect(TableValue::validateCell('url', 'https://example.com'))->toBeTrue();
    });

    it('constrains unknown column types via allowlists', function() {
        $columns = [
            'col0' => ['heading' => 'A', 'type' => 'not-a-type', 'align' => 'centre'],
            'col1' => ['heading' => 'B', 'type' => 'number', 'align' => 'right'],
        ];

        $constrained = TableValue::constrainColumnTypes($columns, ['singleline', 'number']);

        expect($constrained['col0']['type'])->toBe('singleline');
        expect($constrained['col1']['type'])->toBe('number');
        expect(TableValue::normalizeType(''))->toBe('singleline');
        expect(TableValue::normalizeAlignment('centre'))->toBe('');
        expect(TableValue::normalizeAlignment('right'))->toBe('right');
    });
});

describe('Table Maker Craft lifecycle', function() {
    it('rejects a maximum column count that the editor cannot satisfy', function() {
        $field = new TableMakerField(['name' => 'Bounded table', 'handle' => 'boundedTable', 'maxColumns' => 0]);
        expect($field->validate())->toBeFalse();
        expect($field->getErrors('maxColumns'))->not->toBeEmpty();
        $field->maxColumns = 1;
        $field->maxRows = 0;
        expect($field->validate())->toBeTrue();
    });

    it('renders allowed types for initial and minimum columns', function() {
        Tests\Support\CpRequestContext::activate('settings/fields');
        $field = new TableMakerField([
            'name' => 'Numbers', 'handle' => 'numbers', 'allowedColumnTypes' => ['number'], 'minColumns' => 2,
        ]);
        $html = $field->getInputHtml(null, null);
        preg_match('/data-settings="([^"]+)"/', $html, $matches);
        $settings = json_decode(html_entity_decode($matches[1], ENT_QUOTES), true);
        expect(array_column($settings['columns'], 'type'))->toBe(['number', 'number']);
    });

    it('keeps empty editor maps stable for browser change tracking', function() {
        $field = new TableMakerField(['name' => 'Empty fixture', 'handle' => 'emptyFixture']);
        $method = new ReflectionMethod($field, 'serializeEditorValue');

        expect($method->invoke($field, [], [], ''))->toBe('{"columns":{},"rows":{}}');
        expect($method->invoke($field, ['col0' => ['heading' => '', 'type' => 'singleline']], [], ''))
            ->toBe('{"columns":{"col0":{"heading":"","type":"singleline","width":"","align":"left"}},"rows":{}}');
    });

    it('exposes ordered, scalar rows through the actual GraphQL field resolver', function() {
        $field = new TableMakerField([
            'name' => 'GraphQL fixture',
            'handle' => 'tableGql' . bin2hex(random_bytes(4)),
        ]);
        $value = TableValue::normalize([
            'columns' => [
                'col2' => ['heading' => 'Published', 'type' => 'date'],
                'col0' => ['heading' => 'Enabled', 'type' => 'lightswitch'],
                'col1' => ['heading' => 'Notes', 'type' => 'singleline'],
            ],
            'rows' => [
                'row4' => ['col2' => '2026-09-13', 'col0' => true, 'col1' => ['invalid']],
            ],
        ]);
        $gqlType = $field->getContentGqlType();
        $rowsField = $gqlType->getField('rows');
        $resolve = $rowsField->resolveFn;

        expect($resolve)->not->toBeNull()
            ->and($resolve($value))->toBe([['2026-09-13', '1', '']]);
    });

    it('renders the same initial payload as the browser serializer', function() {
        $field = new TableMakerField([
            'name' => 'Table payload fixture',
            'handle' => 'tablePayloadFixture',
        ]);
        $value = TableValue::normalize([
            'columns' => [
                'col0' => [
                    'heading' => 'Plan',
                    'type' => 'singleline',
                    'width' => '',
                    'align' => 'left',
                    'options' => [],
                ],
            ],
            'rows' => ['row0' => ['col0' => 'Basic']],
        ]);

        $method = new ReflectionMethod($field, 'serializeEditorValue');
        $payload = $method->invoke(
            $field,
            $value->columnsArray(),
            $value->rowsArray(),
            $value->caption,
        );
        expect($payload)->toBe('{"columns":{"col0":{"heading":"Plan","type":"singleline","width":"","align":"left"}},"rows":{"row0":{"col0":"Basic"}}}');
    });

    it('renders select defaults in the same shape as the browser serializer', function() {
        $field = new TableMakerField([
            'name' => 'Select payload fixture',
            'handle' => 'selectPayloadFixture',
        ]);
        $value = TableValue::normalize([
            'columns' => [
                'col0' => [
                    'heading' => 'Plan',
                    'type' => 'select',
                    'options' => [
                        ['label' => 'Basic', 'value' => 'basic'],
                        ['label' => 'Pro', 'value' => 'pro', 'default' => true],
                    ],
                ],
            ],
            'rows' => ['row0' => ['col0' => 'basic']],
        ]);

        $method = new ReflectionMethod($field, 'serializeEditorValue');
        $payload = $method->invoke(
            $field,
            $value->columnsArray(),
            $value->rowsArray(),
            $value->caption,
        );

        expect($payload)->toContain('"options":[{"label":"Basic","value":"basic","default":false},{"label":"Pro","value":"pro","default":true}]');
    });

    it('persists canonical data through a real field layout and element reload', function() {
        $suffix = bin2hex(random_bytes(4));
        $field = new TableMakerField([
            'name' => 'Table lifecycle fixture',
            'handle' => 'tableLifecycle' . $suffix,
            'enableCaption' => true,
        ]);
        expect(Craft::$app->getFields()->saveField($field))->toBeTrue();

        $layout = new FieldLayout([
            'uid' => StringHelper::UUID(),
            'type' => GlobalSet::class,
        ]);
        $layout->setTabs([new FieldLayoutTab([
            'layout' => $layout,
            'name' => 'Content',
            'elements' => [new CustomField($field)],
        ])]);
        expect(Craft::$app->getFields()->saveLayout($layout))->toBeTrue();
        $set = new GlobalSet([
            'name' => 'Table lifecycle fixture',
            'handle' => 'tableLifecycle' . $suffix,
            'fieldLayoutId' => $layout->id,
        ]);
        $set->setFieldLayout($layout);

        try {
            expect(Craft::$app->getGlobals()->saveSet($set))->toBeTrue();
            $set->setFieldValue($field->handle, [
                'columns' => [['heading' => 'Plan', 'type' => 'singleline']],
                'rows' => [[' Starter ']],
                'caption' => ' Pricing ',
                'table' => '<table><td>stale</td></table>',
            ]);
            expect(Craft::$app->getElements()->saveElement($set))->toBeTrue();

            $reloaded = Craft::$app->getGlobals()->getSetById($set->id);
            expect($reloaded)->not->toBe($set);
            $value = $reloaded->getFieldValue($field->handle);

            expect($value->columnsArray())->toBe([
                'col0' => [
                    'heading' => 'Plan',
                    'type' => 'singleline',
                    'width' => '',
                    'align' => '',
                    'options' => [],
                ],
            ])->and($value->rowsArray())->toBe(['row0' => ['col0' => 'Starter']])
                ->and($value->caption)->toBe('Pricing')
                ->and($value->toStorage())->not->toHaveKey('table');
        } finally {
            if ($set->id) {
                Craft::$app->getGlobals()->deleteSet($set);
            }
            Craft::$app->getFields()->deleteField($field);
        }
    });
});

describe('Composer constraint', function() {
    it('requires Craft 5.6 or newer', function() {
        $composer = json_decode((string)file_get_contents(dirname(__DIR__, 2) . '/composer.json'), true);
        $cms = $composer['require']['craftcms/cms'] ?? '';

        expect($cms)->toMatch('/\^?5\.(6|[7-9]|\d{2,})/');
    });
});
