<?php

declare(strict_types=1);

use verbb\tablemaker\helpers\TableValue;

it('normalizes and renders a large editor table within a bounded time', function() {
    $columns = [];
    $rows = [];

    for ($column = 0; $column < 20; $column++) {
        $columns[] = ['heading' => 'Column ' . $column, 'type' => 'singleline'];
    }

    for ($row = 0; $row < 200; $row++) {
        $rows[] = array_map(
            static fn(int $column): string => "cell-{$row}-{$column}",
            range(0, 19),
        );
    }

    $start = hrtime(true);
    $value = TableValue::normalize(['columns' => $columns, 'rows' => $rows]);
    $html = (string)$value->getTable();
    $elapsed = (hrtime(true) - $start) / 1_000_000_000;

    expect($value->columns)->toHaveCount(20)
        ->and($value->rows)->toHaveCount(200)
        ->and($html)->toContain('cell-199-19')
        ->and(strlen($html))->toBeLessThan(1_000_000)
        ->and($elapsed)->toBeLessThan(1.5);
})->group('perf');
