<?php
namespace verbb\tablemaker\models;

use ArrayAccess;
use ArrayIterator;
use Countable;
use IteratorAggregate;
use JsonSerializable;
use Traversable;

/**
 * Map that exposes both named keys (`col0`) and positional indexes (`0`) without
 * double-yielding on foreach — iteration walks each entry once under its named key.
 *
 * Lets legacy Twig `columns[loop.index0]` keep working while new templates zip by `colId`.
 *
 * @implements ArrayAccess<int|string, mixed>
 * @implements IteratorAggregate<string, mixed>
 */
class DualAccessMap implements ArrayAccess, IteratorAggregate, Countable, JsonSerializable
{
    /** @var array<string, mixed> */
    private array $items = [];

    /** @var list<string> */
    private array $order = [];

    /**
     * @param array<string|int, mixed> $items
     */
    public function __construct(array $items = [])
    {
        foreach ($items as $key => $value) {
            $this->offsetSet((string)$key, $value);
        }
    }

    /**
     * @return array<string, mixed>
     */
    public function all(): array
    {
        $out = [];

        foreach ($this->order as $key) {
            $value = $this->items[$key];
            $out[$key] = $value instanceof self ? $value->all() : $value;
        }

        return $out;
    }

    public function jsonSerialize(): mixed
    {
        return $this->all();
    }

    public function offsetExists(mixed $offset): bool
    {
        if ($this->isPositional($offset)) {
            return isset($this->order[(int)$offset]);
        }

        return is_string($offset) && array_key_exists($offset, $this->items);
    }

    public function offsetGet(mixed $offset): mixed
    {
        if ($this->isPositional($offset)) {
            $key = $this->order[(int)$offset] ?? null;

            return $key !== null ? ($this->items[$key] ?? null) : null;
        }

        return is_string($offset) ? ($this->items[$offset] ?? null) : null;
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        if ($offset === null) {
            $offset = 'item' . count($this->order);
        }

        $key = (string)$offset;

        if ($this->isPositional($offset) && isset($this->order[(int)$offset])) {
            $key = $this->order[(int)$offset];
        }

        if (!array_key_exists($key, $this->items)) {
            $this->order[] = $key;
        }

        $this->items[$key] = $value;
    }

    public function offsetUnset(mixed $offset): void
    {
        if ($this->isPositional($offset)) {
            $key = $this->order[(int)$offset] ?? null;

            if ($key === null) {
                return;
            }

            unset($this->items[$key]);
            array_splice($this->order, (int)$offset, 1);

            return;
        }

        if (!is_string($offset) || !array_key_exists($offset, $this->items)) {
            return;
        }

        unset($this->items[$offset]);
        $this->order = array_values(array_filter($this->order, static fn(string $k) => $k !== $offset));
    }

    public function getIterator(): Traversable
    {
        $out = [];

        foreach ($this->order as $key) {
            $out[$key] = $this->items[$key];
        }

        return new ArrayIterator($out);
    }

    public function count(): int
    {
        return count($this->order);
    }

    private function isPositional(mixed $offset): bool
    {
        return is_int($offset) || (is_string($offset) && $offset !== '' && ctype_digit($offset));
    }
}
