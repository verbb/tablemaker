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
use verbb\tablemaker\models\RejectedTableData;
use verbb\tablemaker\models\TableMakerData;

describe('DualAccessMap', function() {
    it('appends after deletion without replacing an existing row', function() {
        $value = TableValue::normalize([
            'columns' => [['heading' => 'Plan', 'type' => 'singleline']],
            'rows' => [['First']],
        ], true);
        $value->rows[] = ['col0' => 'Second'];
        $value->rows[] = ['col0' => 'Third'];
        unset($value->rows[0]);
        $value->rows[] = ['col0' => 'Fourth'];
        expect(array_column($value->rowsArray(), 'col0'))->toBe(['Second', 'Third', 'Fourth']);
        expect(array_column(TableValue::normalize($value->toStorage())->rowsArray(), 'col0'))->toBe(['Second', 'Third', 'Fourth']);
    });

    it('preserves constructor identities before enabling positional updates', function() {
        $items = [2 => 'A', 0 => 'B', 1 => 'C'];
        $map = new DualAccessMap($items);
        expect($map->all())->toBe($items);
        $map[0] = 'Updated A';
        expect($map->all())->toBe([2 => 'Updated A', 0 => 'B', 1 => 'C']);
        expect((new DualAccessMap(['col0' => 'A', 0 => 'B']))->all())->toBe(['col0' => 'A', 0 => 'B']);
    });

    it('applies nested edits to column metadata and appended rows', function() {
        $value = TableValue::normalize([
            'columns' => [['heading' => 'Plan', 'type' => 'singleline']],
            'rows' => [['Original']],
        ], true);
        $value->columns[0]['heading'] = 'Renamed';
        $value->rows[] = ['col0' => 'Appended'];
        $value->rows[1]['col0'] = 'Changed';
        expect($value->columns['col0']['heading'])->toBe('Renamed');
        expect($value->rowsArray()['item1']['col0'])->toBe('Changed');
        expect((string)$value->table)->toContain('Renamed')->toContain('Changed');
        expect($value->rows['missing'])->toBeNull();
        expect(count($value->rows))->toBe(2);
        $rows = $value->rowsArray();
        $columns = $value->columnsArray();
        $rows['item1']['col0'] = 'Detached';
        $columns['col0']['heading'] = 'Detached';
        expect($value->rows[1]['col0'])->toBe('Changed');
        expect($value->columns[0]['heading'])->toBe('Renamed');
    });

    it('keeps copied row values independent of the source table', function() {
        $original = new TableMakerData(['col0' => ['heading' => 'Plan']], ['row0' => ['col0' => 'Original']]);
        $copy = new TableMakerData($original->columns, $original->rows);
        $copy->rows['row0']['col0'] = 'Copy';
        expect($original->rows['row0']['col0'])->toBe('Original');
        expect($copy->rows['row0']['col0'])->toBe('Copy');
    });

    it('wraps reordered numeric table arrays without overwriting rows or cells', function() {
        $columns = [2 => ['heading' => 'A'], 0 => ['heading' => 'B']];
        $rows = [4 => [2 => 'First A', 0 => 'First B'], 0 => [2 => 'Second A', 0 => 'Second B']];
        $value = new TableMakerData($columns, $rows);
        expect($value->columnsArray())->toBe($columns);
        expect($value->rowsArray())->toBe($rows);
        $copied = new TableMakerData($value->columns, $value->rows);
        expect($copied->rowsArray())->toBe($rows);
    });

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
    it('rejects impossible ISO calendar dates without rolling to another day', function(string $input) {
        expect(TableValue::normalizeCell('date', $input, true))->toBeNull();
    })->with(['2026-02-31', '2026-02-29', '2100-02-29', '2026-00-10', '2026-13-01', '0000-01-01']);

    it('preserves valid leap days and legacy ISO date values', function() {
        expect(TableValue::normalizeCell('date', '2024-02-29', true))->toBe('2024-02-29');
        expect(TableValue::normalizeCell('date', '2000-02-29T19:05:00+10:00', true))->toBe('2000-02-29');
        expect(TableValue::normalizeCell('date', '0099-01-01', true))->toBe('0099-01-01');
    });

    it('preserves numeric precision across storage and editor JSON', function(mixed $input, mixed $expected) {
        $value = TableValue::normalize([
            'columns' => [['heading' => 'Number', 'type' => 'number']],
            'rows' => [[$input]],
        ], true);
        expect($value->rows['row0']['col0'])->toBe($expected);
        $reloaded = TableValue::normalize($value->toStorage());
        expect($reloaded->rows['row0']['col0'])->toBe($expected);
        $field = new TableMakerField(['name' => 'Numbers', 'handle' => 'numbers']);
        $serializer = new ReflectionMethod($field, 'serializeEditorValue');
        $json = $serializer->invoke($field, $reloaded->columnsArray(), $reloaded->rowsArray(), '');
        expect(json_decode($json, true)['rows']['row0']['col0'])->toBe($expected);
    })->with([
        'large integer string' => ['9007199254740993', '9007199254740993'],
        'existing large integer' => [9007199254740993, '9007199254740993'],
        'negative large integer' => [-9007199254740993, '-9007199254740993'],
        'precise decimal' => ['0.1234567890123456789', '0.1234567890123456789'],
        'exponent' => ['1.234567890123456789e20', '1.234567890123456789e20'],
        'numeric whitespace and plus' => [' +1.25 ', '1.25'],
        'trailing decimal point' => ['1.e2', '1e2'],
        'native zero' => [0, 0],
        'native decimal' => [9.5, 9.5],
    ]);

    it('rejects invalid and nonfinite number cells', function(mixed $value) {
        expect(TableValue::validateCell('number', $value, $error))->toBeFalse();
        expect($error)->not->toBeEmpty();
    })->with(['text' => ['not a number'], 'overflow' => ['1e309'], 'infinity' => [INF], 'nan' => [NAN]]);

    it('reserves existing named identities before repairing inserted keys', function() {
        $data = TableValue::normalize([
            'columns' => [
                'col_new' => ['heading' => 'Inserted', 'type' => 'singleline'],
                'col0' => ['heading' => 'Original', 'type' => 'singleline'],
                'col1' => ['heading' => 'Another', 'type' => 'singleline'],
            ],
            'rows' => [
                'row_new' => ['col_new' => 'New'],
                'row0' => ['col0' => 'Original A', 'col1' => 'Original B'],
                'row1' => ['col0' => 'Original C', 'col1' => 'Original D'],
            ],
        ], true);
        expect(array_keys($data->columnsArray()))->toBe(['col2', 'col0', 'col1']);
        expect(array_keys($data->rowsArray()))->toBe(['row2', 'row0', 'row1']);
        expect($data->rows['row0']['col0'])->toBe('Original A');
        expect(TableValue::normalize($data->toStorage())->rows['row1']['col1'])->toBe('Original D');
    });

    it('preserves original cell positions when invalid column definitions are skipped', function(mixed $omitted) {
        $data = TableValue::normalize([
            'columns' => [$omitted, ['heading' => 'Price', 'type' => 'singleline']],
            'rows' => [['Omitted cell', 'Correct price']],
        ], true);
        expect($data->rowsArray())->toBe(['row0' => ['col1' => 'Correct price']]);
    })->with(['null column' => [null], 'empty column' => [[]]]);

    it('preserves literal shortcodes in legacy cells and subsequent saves', function() {
        $cells = [':smile:', '\\:smile\\:', ':smile:smile:', '😄', '\\folder\\file', '__MB4_DL__text__MB4_DR__'];
        $data = TableValue::normalize([
            'columns' => [['heading' => 'Literal', 'type' => 'select', 'options' => array_map(
                static fn(string $cell) => ['label' => $cell, 'value' => $cell], $cells,
            )]],
            'rows' => array_map(static fn(string $cell) => [$cell], $cells),
        ]);
        for ($save = 0; $save < 3; $save++) {
            expect(array_column($data->rowsArray(), 'col0'))->toBe($cells);
            expect(array_column($data->columns['col0']['options'], 'value'))->toBe($cells);
            $data = TableValue::normalize($data->toStorage());
        }
    });

    it('stores new literal text without shortcode or backslash collisions', function() {
        $cells = [':smile:', '\\:smile\\:', ':smile:smile:', '😄', '𠀀', '"quoted"', '\\folder\\file'];
        $data = TableValue::normalize([
            'columns' => [['heading' => 'Text', 'type' => 'singleline']],
            'rows' => array_map(static fn(string $cell) => [$cell], $cells),
        ], true);
        for ($save = 0; $save < 3; $save++) {
            $stored = $data->toStorage();
            foreach ($stored['rows'] as $row) {
                expect(preg_match('/[^\x00-\x7f]/', $row['col0']))->toBe(0);
            }
            $data = TableValue::normalize($stored);
            expect(array_column($data->rowsArray(), 'col0'))->toBe($cells);
        }
    });

    it('does not decode storage markers supplied as editor input', function() {
        $data = TableValue::normalize([
            'cellEncoding' => 'json-v1',
            'columns' => ['col0' => ['heading' => 'Text', 'type' => 'singleline']],
            'rows' => ['row0' => ['col0' => '"quoted"']],
        ], true);
        expect($data->rows['row0']['col0'])->toBe('"quoted"');
    });

    it('continues decoding unmarked canonical beta values', function() {
        $data = TableValue::normalize([
            'columns' => ['col0' => ['heading' => 'Text', 'type' => 'singleline']],
            'rows' => ['row0' => ['col0' => '\\:smile\\:'], 'row1' => ['col0' => ':smile:']],
        ]);
        expect(array_column($data->rowsArray(), 'col0'))->toBe([':smile:', '😄']);
    });

    it('keeps all entries when stored ordering metadata is incomplete or malformed', function() {
        $value = TableValue::normalize([
            'columns' => [
                'col0' => ['heading' => 'First', 'type' => 'singleline'],
                'col1' => ['heading' => 'Second', 'type' => 'singleline'],
            ],
            'columnOrder' => ['missing', 'col1', 'col1', ['invalid']],
            'rows' => ['row0' => ['col0' => 'A', 'col1' => 'B']],
            'rowOrder' => 'invalid',
        ]);
        expect(array_keys($value->columnsArray()))->toBe(['col1', 'col0']);
        expect($value->rowsArray())->toBe(['row0' => ['col1' => 'B', 'col0' => 'A']]);
    });

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
                    ['2011-12-30', '2026-03-08T02:30:00'],
                ],
            ], true);
            $expected = [
                'row0' => ['col0' => '2026-09-16', 'col1' => '19:05'],
                'row1' => ['col0' => '2026-09-16', 'col1' => '19:05'],
                'row2' => ['col0' => '2011-12-30', 'col1' => '02:30'],
            ];
            expect($value->rowsArray())->toBe($expected);
            expect(TableValue::normalize($value->toStorage())->rowsArray())->toBe($expected);
        } finally {
            Craft::$app->setTimeZone($original);
        }
    })->with(['UTC', 'Australia/Melbourne', 'America/New_York', 'Pacific/Apia']);

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
            'row0' => ['col1' => 'Basic', 'col2' => '$9', 'col0' => 'Keep me'],
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

    it('sanitizes and renders rich-text cells as a limited HTML vocabulary', function() {
        $data = TableValue::normalize([
            'columns' => [['heading' => 'Description', 'type' => 'richtext']],
            'rows' => [[
                '<p><strong>Bold</strong> <em>copy</em> <a href="javascript:alert(1)" onclick="alert(1)">link</a></p>'
                . '<ul><li>Item</li></ul><img src=x onerror=alert(1)><script>alert(1)</script>',
            ]],
        ], true);

        $cell = $data->rows['row0']['col0'];
        $html = (string)$data->getTable();

        expect($cell)->toContain('<strong>Bold</strong>')
            ->and($cell)->toContain('<ul><li>Item</li></ul>')
            ->and($cell)->not->toContain('javascript:')
            ->and($cell)->not->toContain('onclick')
            ->and($cell)->not->toContain('<img')
            ->and($cell)->not->toContain('<script')
            ->and($html)->toContain('<td><p><strong>Bold</strong>')
            ->and($html)->not->toContain('&lt;strong&gt;');

        $roundTrip = TableValue::normalize($data->toStorage());
        expect($roundTrip->rows['row0']['col0'])->toBe($cell)
            ->and(TableValue::searchKeywords($roundTrip->columnsArray(), $roundTrip->rowsArray()))
            ->toContain('Bold copy link')->not->toContain('<strong>');
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

    it('grandfathers only matching stable columns outside column type allowlists', function() {
        $columns = [
            'col0' => ['heading' => 'Existing', 'type' => 'heading'],
            'col1' => ['heading' => 'Changed', 'type' => 'select', 'options' => [['label' => 'Pro', 'value' => 'pro']]],
            'col2' => ['heading' => 'New', 'type' => 'heading'],
        ];
        $existing = [
            'col0' => ['heading' => 'Existing', 'type' => 'heading'],
            'col1' => ['heading' => 'Changed', 'type' => 'heading'],
        ];

        $constrained = TableValue::constrainColumnTypes($columns, ['singleline'], $existing);
        $keyed = TableValue::normalize(['columns' => ['col0' => $columns['col0']]], true, ['singleline'], $existing);
        $positional = TableValue::normalize(['columns' => [$columns['col0']]], true, ['singleline'], $existing);

        expect(array_column($constrained, 'type'))->toBe(['heading', 'singleline', 'singleline'])
            ->and($constrained['col1'])->not->toHaveKey('options')
            ->and($keyed->columns['col0']['type'])->toBe('heading')
            ->and($positional->columns['col0']['type'])->toBe('singleline');
    });
});

describe('Table Maker Craft lifecycle', function() {
    it('disables optional column layout controls by default', function() {
        $field = new TableMakerField();

        expect($field->enableWidthColumn)->toBeFalse()
            ->and($field->enableAlignmentColumn)->toBeFalse();
    });

    it('normalizes Edit columns button positions', function() {
        expect(TableMakerField::normalizeEditColumnsPosition('fieldHeader'))->toBe('fieldHeader')
            ->and(TableMakerField::normalizeEditColumnsPosition('tableHeader'))->toBe('tableHeader')
            ->and(TableMakerField::normalizeEditColumnsPosition('unsupported'))->toBe('auto');
    });

    it('normalizes rich text editing modes', function() {
        expect(TableMakerField::normalizeRichTextEditingMode('inline'))->toBe('inline')
            ->and(TableMakerField::normalizeRichTextEditingMode('modal'))->toBe('modal')
            ->and(TableMakerField::normalizeRichTextEditingMode('unsupported'))->toBe('modal');
    });

    it('normalizes rich text element link settings without conflating none with all', function() {
        expect(TableMakerField::normalizeRichTextLinkTypesSetting(null))->toBe('*')
            ->and(TableMakerField::normalizeRichTextLinkTypesSetting(['entry', 'category', 'asset']))->toBe('*')
            ->and(TableMakerField::normalizeRichTextLinkTypesSetting(['entry', 'unsupported']))->toBe(['entry'])
            ->and(TableMakerField::normalizeRichTextLinkTypesSetting([]))->toBe([]);
    });

    it('carries the owning site alongside raw rich text references', function() {
        $field = new TableMakerField(['name' => 'Links', 'handle' => 'links']);
        $owner = new GlobalSet(['siteId' => 42]);
        $value = $field->normalizeValue([
            'columns' => [['heading' => 'Copy', 'type' => 'richtext']],
            'rows' => [['<p><a href="https://example.test#entry:123@42">Entry</a></p>']],
        ], $owner);

        expect($value->siteId)->toBe(42)
            ->and($value->rows['row0']['col0'])->toContain('#entry:123@42');
    });

    it('requires CKEditor 5 for rich text editing', function() {
        $method = new ReflectionMethod(TableMakerField::class, '_isSupportedCkeditorVersion');

        expect($method->invoke(null, '4.11.1'))->toBeFalse()
            ->and($method->invoke(null, '5.0.0'))->toBeTrue()
            ->and($method->invoke(null, '5.8.0'))->toBeTrue();
    });

    it('passes the Edit columns button position to the field input', function() {
        Tests\Support\CpRequestContext::activate('entries');
        $field = new TableMakerField([
            'name' => 'Positioned table',
            'handle' => 'positionedTable',
            'editColumnsPosition' => 'tableHeader',
        ]);

        $html = $field->getInputHtml(null, null);

        expect($html)->toContain('&quot;editColumnsPosition&quot;:&quot;tableHeader&quot;');
    });

    it('passes the rich text editing mode to the field input', function() {
        Tests\Support\CpRequestContext::activate('entries');
        $field = new TableMakerField([
            'name' => 'Inline rich table',
            'handle' => 'inlineRichTable',
            'richTextEditingMode' => 'inline',
        ]);

        $html = $field->getInputHtml(null, null);

        expect($html)->toContain('&quot;richTextEditingMode&quot;:&quot;inline&quot;');
    });

    it('keeps rich text labelled but unavailable when CKEditor is not enabled', function() {
        $settingOptions = array_column(TableMakerField::allColumnTypeSettingOptions(), null, 'value');

        expect(TableMakerField::allColumnTypeLabels())->toHaveKey('richtext')
            ->and(TableMakerField::allColumnTypeOptions())->not->toHaveKey('richtext')
            ->and($settingOptions['richtext']['disabled'])->toBeTrue()
            ->and(TableMakerField::normalizeAllowedColumnTypesSetting(['richtext']))->toBe(['richtext']);
    });

    it('preserves unavailable optional types through the field settings form', function() {
        Tests\Support\CpRequestContext::activate('settings/fields');
        $field = new TableMakerField([
            'name' => 'Rich table',
            'handle' => 'richTable',
            'allowedColumnTypes' => ['richtext'],
        ]);

        $html = $field->getSettingsHtml();

        expect($html)->toContain('value="richtext"')
            ->and($html)->toContain('disabled')
            ->and($html)->toContain('name="allowedColumnTypes[]"');
    });

    it('rejects oversized request shapes before canonical expansion', function() {
        $field = new TableMakerField(['name' => 'Bounded table', 'handle' => 'boundedTable']);
        $column = ['heading' => 'Value', 'type' => 'singleline'];
        $cases = [
            [
                [
                    'columns' => array_fill(0, TableMakerField::MAX_REQUEST_COLUMNS + 1, $column),
                    'rows' => [],
                    '__tableMakerErrors' => [],
                ],
                'Table must have at most 100 columns.',
            ],
            [
                ['columns' => [$column], 'rows' => array_fill(0, TableMakerField::MAX_REQUEST_ROWS + 1, [])],
                'Table must have at most 1000 rows.',
            ],
            [
                ['columns' => array_fill(0, 51, $column), 'rows' => array_fill(0, 981, [])],
                'Table must have at most 50000 cells.',
            ],
            [
                ['columns' => [$column], 'rows' => [[]], 'columnOrder' => array_fill(0, TableMakerField::MAX_REQUEST_COLUMNS + 1, 'col0')],
                'Table must have at most 100 columns.',
            ],
        ];

        foreach ($cases as [$payload, $message]) {
            $value = $field->normalizeValueFromRequest(json_encode($payload, JSON_THROW_ON_ERROR), null);
            expect($value)->toBeInstanceOf(RejectedTableData::class)
                ->and($value->validationErrors())->toContain($message)
                ->and($field->serializeValue($value, null))->toHaveKey('__tableMakerErrors');
        }

        $stored = $field->normalizeValue([
            'columns' => array_fill(0, TableMakerField::MAX_REQUEST_COLUMNS + 1, $column),
            'rows' => [],
        ], null);
        expect($stored->columns)->toHaveCount(TableMakerField::MAX_REQUEST_COLUMNS + 1);
    });

    it('submits required padding through Craft delta updates', function(string $setting) {
        Tests\Support\CpRequestContext::activate('settings/fields');
        $view = Craft::$app->getView();
        $namespace = $view->getNamespace();
        $active = $view->getIsDeltaRegistrationActive();
        $field = new TableMakerField(['name' => 'Required padding', 'handle' => 'padding' . bin2hex(random_bytes(4)), $setting => 2]);
        try {
            $view->setNamespace('fields[nested]');
            $view->setIsDeltaRegistrationActive(true);
            $field->getInputHtml(TableValue::normalize([
                'columns' => [['heading' => 'Value', 'type' => 'singleline']],
                'rows' => [['Stored']],
            ]), null);
            expect($view->getModifiedDeltaNames())->toContain('fields[nested][' . $field->handle . ']');
        } finally {
            $view->setNamespace($namespace);
            $view->setIsDeltaRegistrationActive($active);
        }
    })->with(['minRows', 'minColumns']);

    it('applies dropdown defaults only to rows added for the minimum', function() {
        Tests\Support\CpRequestContext::activate('settings/fields');
        $field = new TableMakerField(['name' => 'Minimum rows', 'handle' => 'minimumRows', 'minRows' => 2]);
        $value = TableValue::normalize([
            'columns' => [
                ['heading' => 'Preferred', 'type' => 'select', 'options' => [
                    ['label' => 'First', 'value' => 'first'], ['label' => 'Preferred', 'value' => 'pro', 'default' => true],
                ]],
                ['heading' => 'First', 'type' => 'select', 'options' => [['label' => 'First', 'value' => 'first']]],
                ['heading' => 'Enabled', 'type' => 'checkbox'],
            ],
            'rows' => [['', '', false]],
        ], true);
        $html = $field->getInputHtml($value, null);
        preg_match('/data-settings="([^"]+)"/', $html, $matches);
        $settings = json_decode(html_entity_decode($matches[1], ENT_QUOTES), true);
        expect($settings['rows']['row0'])->toBe(['col0' => '', 'col1' => '', 'col2' => false]);
        expect($settings['rows']['row1'])->toBe(['col0' => 'pro', 'col1' => 'first', 'col2' => false]);
        expect(count($value->rowsArray()))->toBe(1);
    });

    it('rejects a maximum column count that the editor cannot satisfy', function() {
        $field = new TableMakerField(['name' => 'Bounded table', 'handle' => 'boundedTable', 'maxColumns' => 0]);
        expect($field->validate())->toBeFalse();
        expect($field->getErrors('maxColumns'))->not->toBeEmpty();
        $field->maxColumns = 1;
        $field->maxRows = 0;
        expect($field->validate())->toBeTrue();
    });

    it('constrains column type allowlists without a persisted baseline', function() {
        $field = new TableMakerField(['name' => 'Restricted', 'handle' => 'restricted', 'allowedColumnTypes' => ['checkbox']]);
        $input = [
            'columns' => [
                ['heading' => 'Text', 'type' => 'singleline'],
                ['heading' => 'Choice', 'type' => 'select', 'options' => [['label' => 'Plan', 'value' => 'plan']]],
            ],
            'rows' => [['Keep this text', 'plan']],
        ];
        $stored = $field->normalizeValue($input, null);
        $requested = $field->normalizeValueFromRequest($input, null);
        expect(array_column($stored->columnsArray(), 'type'))->toBe(['singleline', 'select'])
            ->and($stored->columns[1]['options'][0]['value'])->toBe('plan')
            ->and(array_column($requested->columnsArray(), 'type'))->toBe(['checkbox', 'checkbox'])
            ->and($requested->columns[1])->not->toHaveKey('options')
            ->and($requested->rowsArray())->toBe(['row0' => ['col0' => false, 'col1' => false]]);
        expect(array_keys($field->getAllowedColumnTypeOptions()))->toBe(['checkbox']);
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

    it('preserves layout metadata when its editor controls are hidden', function(bool $width, bool $alignment) {
        $field = new TableMakerField([
            'name' => 'Hidden layout', 'handle' => 'hiddenLayout',
            'enableWidthColumn' => $width, 'enableAlignmentColumn' => $alignment,
        ]);
        $value = TableValue::normalize([
            'columns' => [['heading' => 'Plan', 'type' => 'singleline', 'width' => '37%', 'align' => 'right']],
            'rows' => [['Keep text']],
        ]);
        $method = new ReflectionMethod($field, 'serializeEditorValue');
        $payload = $method->invoke($field, $value->columnsArray(), $value->rowsArray(), '');
        $submitted = $field->normalizeValueFromRequest($payload, null);
        expect($submitted->columns[0]['width'])->toBe('37%');
        expect($submitted->columns[0]['align'])->toBe('right');
        expect((string)$submitted->getTable())->toContain('width="37%"')->toContain('text-align: right');
    })->with([[false, false], [true, false], [false, true]]);

    it('keeps legacy float spelling identical in the editor settings and hidden baseline', function() {
        Tests\Support\CpRequestContext::activate('content/entries');
        $field = new TableMakerField(['name' => 'Numbers', 'handle' => 'numbers']);
        $value = TableValue::normalize([
            'columns' => [['heading' => 'Number', 'type' => 'number']],
            'rows' => [[0.00001], [1.0e20], [1.0e-7], [-0.0], [1.2345678901234567]],
        ]);
        $html = $field->getInputHtml($value, null);
        $document = new DOMDocument();
        @$document->loadHTML($html);
        $xpath = new DOMXPath($document);
        $settings = json_decode($xpath->query('//*[@data-settings]')->item(0)->getAttribute('data-settings'), true);
        $baseline = json_decode($xpath->query('//input[contains(@class, "table-maker-field")]')->item(0)->getAttribute('value'), true);
        $expected = ['1.0e-5', '1.0e+20', '1.0e-7', '-0', '1.2345678901234567'];
        expect(array_column($settings['rows'], 'col0'))->toBe($expected);
        expect(array_column($baseline['rows'], 'col0'))->toBe($expected);
        expect($value->rows[0]['col0'])->toBe(0.00001);
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
