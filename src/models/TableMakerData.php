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
 * @implements ArrayAccess<string, mixed>
 * @implements IteratorAggregate<string, mixed>
 */
class TableMakerData implements ArrayAccess, IteratorAggregate, Countable
{
    /** @var array<string, array<string, mixed>> */
    public array $columns = [];

    /** @var array<string, array<string, mixed>> */
    public array $rows = [];

    /** Optional per-value table caption (#60). */
    public string $caption = '';

    private Markup|false|null $tableHtml = null;

    /**
     * @param array<string, array<string, mixed>> $columns
     * @param array<string, array<string, mixed>> $rows
     */
    public function __construct(array $columns = [], array $rows = [], string $caption = '')
    {
        $this->columns = $columns;
        $this->rows = $rows;
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
        $attrs = TableValue::normalizeTableAttributes($attributes);

        // Cache only the bare table; attributed renders are one-off.
        if ($attrs === []) {
            if ($this->tableHtml === null) {
                $this->tableHtml = Template::raw(TableValue::renderHtml($this->columns, $this->rows, [], $this->caption));
            }

            return $this->tableHtml;
        }

        return Template::raw(TableValue::renderHtml($this->columns, $this->rows, $attrs, $this->caption));
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
        if ($offset === 'columns' && is_array($value)) {
            $this->columns = $value;
            $this->tableHtml = null;
        } elseif ($offset === 'rows' && is_array($value)) {
            $this->rows = $value;
            $this->tableHtml = null;
        } elseif ($offset === 'caption') {
            $this->caption = trim((string)$value);
            $this->tableHtml = null;
        }
    }

    public function offsetUnset(mixed $offset): void
    {
        if ($offset === 'columns') {
            $this->columns = [];
            $this->tableHtml = null;
        } elseif ($offset === 'rows') {
            $this->rows = [];
            $this->tableHtml = null;
        } elseif ($offset === 'caption') {
            $this->caption = '';
            $this->tableHtml = null;
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
        return TableValue::toStorage($this->columns, $this->rows, $this->caption);
    }
}
