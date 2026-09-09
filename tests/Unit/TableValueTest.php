<?php

declare(strict_types=1);

use Twig\Environment;
use Twig\Loader\ArrayLoader;
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

describe('Composer constraint', function() {
    it('requires Craft 5.6 or newer', function() {
        $composer = json_decode((string)file_get_contents(dirname(__DIR__, 2) . '/composer.json'), true);
        $cms = $composer['require']['craftcms/cms'] ?? '';

        expect($cms)->toMatch('/\^?5\.(6|[7-9]|\d{2,})/');
    });
});
