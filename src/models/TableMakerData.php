<?php
namespace verbb\tablemaker\models;

use verbb\tablemaker\helpers\TableValue;

use craft\helpers\Template;

use ArrayAccess;
use ArrayIterator;
use Countable;
use IteratorAggregate;
use Traversable;
use Twig\Markup;

/**
 * Normalized field value: columns + rows (+ optional caption). `.table` HTML is
 * built lazily and never participates in serialize/DB storage.
 *
 * Public `$columns` / `$rows` are DualAccessMap so Twig can use either named
 * `colN`/`rowN` keys or legacy positional indexes (`columns[loop.index0]`).
 *
 * @implements ArrayAccess<string, mixed>
 * @implements IteratorAggregate<string, mixed>
 */
class TableMakerData implements ArrayAccess, IteratorAggregate, Countable
{
    public DualAccessMap $columns;

    public DualAccessMap $rows;

    /** Optional per-value table caption (#60). */
    public string $caption = '';

    /**
     * @param array<string, array<string, mixed>>|DualAccessMap $columns
     * @param array<string, array<string, mixed>>|DualAccessMap $rows
     */
    public function __construct(array|DualAccessMap $columns = [], array|DualAccessMap $rows = [], string $caption = '')
    {
        $this->columns = $this->wrapColumns($columns);
        $this->rows = $this->wrapRows($rows);
        $this->caption = $caption;
    }

    /**
     * Encoded HTML preview — same Twig API as before (`entry.field.table`).
     * Optional attribute bag for the root `<table>` (#4).
     *
     * @param array<string, mixed>|null $attributes
     */
    public function getTable(?array $attributes = null): Markup
    {
        // Always render from current data — a bare HTML cache diverged when callers
        // mutated public columns/rows/caption directly (DATA-06).
        $attrs = TableValue::normalizeTableAttributes($attributes);

        return Template::raw(TableValue::renderHtml(
            $this->columns->all(),
            $this->rowsAsStorage(),
            $attrs,
            $this->caption,
        ));
    }

    /**
     * Twig `{{ entry.field.table({ class: 'specs' }) }}` resolves as a method call.
     *
     * @param array<string, mixed>|null $attributes
     */
    public function table(?array $attributes = null): Markup
    {
        return $this->getTable($attributes);
    }

    public function __isset(string $name): bool
    {
        return in_array($name, ['columns', 'rows', 'caption', 'table'], true);
    }

    public function __get(string $name): mixed
    {
        return match ($name) {
            'columns' => $this->columns,
            'rows' => $this->rows,
            'caption' => $this->caption,
            'table' => $this->getTable(),
            default => null,
        };
    }

    public function offsetExists(mixed $offset): bool
    {
        return is_string($offset) && $this->__isset($offset);
    }

    public function offsetGet(mixed $offset): mixed
    {
        return is_string($offset) ? $this->__get($offset) : null;
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        if ($offset === 'columns' && (is_array($value) || $value instanceof DualAccessMap)) {
            $this->columns = $this->wrapColumns($value);
        } elseif ($offset === 'rows' && (is_array($value) || $value instanceof DualAccessMap)) {
            $this->rows = $this->wrapRows($value);
        } elseif ($offset === 'caption') {
            $this->caption = trim((string)$value);
        }
    }

    public function offsetUnset(mixed $offset): void
    {
        if ($offset === 'columns') {
            $this->columns = new DualAccessMap();
        } elseif ($offset === 'rows') {
            $this->rows = new DualAccessMap();
        } elseif ($offset === 'caption') {
            $this->caption = '';
        }
    }

    public function getIterator(): Traversable
    {
        return new ArrayIterator([
            'columns' => $this->columns,
            'rows' => $this->rows,
            'caption' => $this->caption,
            'table' => $this->getTable(),
        ]);
    }

    public function count(): int
    {
        return 4;
    }

    /**
     * Persistable payload — never includes derived `table` HTML.
     *
     * @return array{columns: array<string, array<string, mixed>>, rows: array<string, array<string, mixed>>, caption?: string}
     */
    public function toStorage(): array
    {
        return TableValue::toStorage($this->columns->all(), $this->rowsAsStorage(), $this->caption);
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    public function columnsArray(): array
    {
        return $this->columns->all();
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    public function rowsArray(): array
    {
        return $this->rowsAsStorage();
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    private function rowsAsStorage(): array
    {
        $out = [];

        foreach ($this->rows->all() as $rowId => $row) {
            if ($row instanceof DualAccessMap) {
                $out[(string)$rowId] = $row->all();
            } elseif (is_array($row)) {
                $out[(string)$rowId] = $row;
            }
        }

        return $out;
    }

    /**
     * @param array<string, array<string, mixed>>|DualAccessMap $columns
     */
    private function wrapColumns(array|DualAccessMap $columns): DualAccessMap
    {
        if ($columns instanceof DualAccessMap) {
            return $columns;
        }

        return new DualAccessMap($columns);
    }

    /**
     * @param array<string, array<string, mixed>>|DualAccessMap $rows
     */
    private function wrapRows(array|DualAccessMap $rows): DualAccessMap
    {
        if ($rows instanceof DualAccessMap) {
            // Ensure nested cells are also dual-access.
            $wrapped = new DualAccessMap();

            foreach ($rows->all() as $rowId => $row) {
                $wrapped[(string)$rowId] = $row instanceof DualAccessMap ? $row : new DualAccessMap(is_array($row) ? $row : []);
            }

            return $wrapped;
        }

        $wrapped = new DualAccessMap();

        foreach ($rows as $rowId => $row) {
            $wrapped[(string)$rowId] = new DualAccessMap(is_array($row) ? $row : []);
        }

        return $wrapped;
    }
}
