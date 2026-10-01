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
 */
class DualAccessMap implements ArrayAccess, IteratorAggregate, Countable, JsonSerializable
{
    // Properties
    // =========================================================================

    private array $items = [];
    private array $order = [];


    // Public Methods
    // =========================================================================

    public function __construct(array $items = [])
    {
        // Constructor keys are identities; positional assignment only applies
        // when callers update the initialized collection through ArrayAccess.
        $this->items = $items;
        $this->order = array_map('strval', array_keys($items));
    }

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
        if ($this->_isPositional($offset)) {
            return isset($this->order[(int)$offset]);
        }

        return is_string($offset) && array_key_exists($offset, $this->items);
    }

    public function &offsetGet(mixed $offset): mixed
    {
        $key = $this->_isPositional($offset)
            ? ($this->order[(int)$offset] ?? null)
            : (is_string($offset) ? $offset : null);

        if ($key !== null && array_key_exists($key, $this->items)) {
            return $this->items[$key];
        }

        $missing = null;
        return $missing;
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        if ($offset === null) {
            $index = count($this->order);

            while (array_key_exists('item' . $index, $this->items)) {
                $index++;
            }
            $offset = 'item' . $index;
        }

        $key = (string)$offset;

        if ($this->_isPositional($offset) && isset($this->order[(int)$offset])) {
            $key = $this->order[(int)$offset];
        }

        if (!array_key_exists($key, $this->items)) {
            $this->order[] = $key;
        }

        $this->items[$key] = $value;
    }

    public function offsetUnset(mixed $offset): void
    {
        if ($this->_isPositional($offset)) {
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


    // Private Methods
    // =========================================================================

    private function _isPositional(mixed $offset): bool
    {
        return is_int($offset) || (is_string($offset) && $offset !== '' && ctype_digit($offset));
    }
}
