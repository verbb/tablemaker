<?php
namespace verbb\tablemaker\helpers;

use verbb\tablemaker\models\TableMakerData;

use Craft;
use craft\fields\data\ColorData;
use craft\helpers\DateTimeHelper;
use craft\helpers\Html;
use craft\helpers\Json;
use craft\helpers\StringHelper;
use craft\validators\ColorValidator;
use craft\validators\UrlValidator;

use yii\validators\EmailValidator;

/**
 * Canonical Table Maker value shaping: colN/rowN maps, cell coercion, safe HTML.
 *
 * Accepts legacy positional lists from older serializeValue() output and upgrades
 * them on read. Derived `table` HTML is never part of the stored shape.
 */
class TableValue
{
    /**
     * @return TableMakerData|null
     */
    public static function normalize(mixed $value, bool $fromRequest = false): ?TableMakerData
    {
        if ($value instanceof TableMakerData) {
            return $value;
        }

        if ($value === null || $value === '') {
            return new TableMakerData();
        }

        if (!is_array($value)) {
            $value = Json::decodeIfJson($value);
        }

        if (!is_array($value)) {
            return new TableMakerData();
        }

        // Legacy saves sometimes persisted the preview Markup as a string — drop it.
        unset($value['table']);

        $columns = self::canonicalizeColumns($value['columns'] ?? []);
        $rows = self::canonicalizeRows($value['rows'] ?? [], $columns, $fromRequest);

        return new TableMakerData($columns, $rows);
    }

    /**
     * @param array<string, array<string, mixed>> $columns
     * @param array<string, array<string, mixed>> $rows
     * @return array{columns: array<string, array<string, mixed>>, rows: array<string, array<string, mixed>>}
     */
    public static function toStorage(array $columns, array $rows): array
    {
        $outColumns = [];
        $outRows = [];

        foreach ($columns as $colId => $column) {
            $colId = (string)$colId;
            $type = self::normalizeType($column['type'] ?? 'singleline');
            $next = [
                'heading' => (string)($column['heading'] ?? ''),
                'type' => $type,
            ];

            if (array_key_exists('width', $column)) {
                $next['width'] = (string)($column['width'] ?? '');
            }

            if (array_key_exists('align', $column)) {
                $next['align'] = self::normalizeAlignment($column['align'] ?? '') ?: 'left';
            }

            if ($type === 'select') {
                $next['options'] = self::normalizeOptions($column['options'] ?? []);
            }

            $outColumns[$colId] = $next;
        }

        foreach ($rows as $rowId => $row) {
            if (!is_array($row)) {
                continue;
            }

            $cells = [];

            foreach (array_keys($outColumns) as $colId) {
                $type = $outColumns[$colId]['type'];
                $cells[$colId] = self::serializeCell($type, $row[$colId] ?? null);
            }

            $outRows[(string)$rowId] = $cells;
        }

        return [
            'columns' => $outColumns,
            'rows' => $outRows,
        ];
    }

    /**
     * Safe HTML preview for Twig `{{ field.table }}`.
     *
     * @param array<string, array<string, mixed>> $columns
     * @param array<string, array<string, mixed>> $rows
     */
    public static function renderHtml(array $columns, array $rows): string
    {
        $html = '<table><thead><tr>';

        foreach ($columns as $column) {
            $align = self::normalizeAlignment($column['align'] ?? 'left') ?: 'left';
            $heading = Html::encode((string)($column['heading'] ?? ''));
            $width = Html::encode((string)($column['width'] ?? ''));
            $html .= '<th align="' . $align . '" style="text-align: ' . $align . ';"'
                . ($width !== '' ? ' width="' . $width . '"' : '')
                . '>' . $heading . '</th>';
        }

        $html .= '</tr></thead><tbody>';

        foreach ($rows as $row) {
            if (!is_array($row)) {
                continue;
            }

            $html .= '<tr>';

            foreach ($columns as $colId => $column) {
                $type = self::normalizeType($column['type'] ?? 'singleline');
                $align = self::normalizeAlignment($column['align'] ?? '');
                $alignAttr = $align !== ''
                    ? ' align="' . $align . '" style="text-align: ' . $align . ';"'
                    : '';
                $html .= '<td' . $alignAttr . '>'
                    . self::renderCellHtml($type, $row[$colId] ?? null)
                    . '</td>';
            }

            $html .= '</tr>';
        }

        $html .= '</tbody></table>';

        return $html;
    }

    public static function normalizeType(mixed $type): string
    {
        $type = strtolower(trim((string)$type));

        // Historical validateTableData default used camelCase.
        if ($type === 'single_line' || $type === 'singleline') {
            return 'singleline';
        }

        return $type !== '' ? $type : 'singleline';
    }

    public static function normalizeAlignment(mixed $align): string
    {
        $align = strtolower((string)$align);

        return in_array($align, ['left', 'center', 'right'], true) ? $align : '';
    }

    /**
     * Coerce a cell for in-memory / CP use. Display-only transforms (nl2br) stay
     * in renderCellHtml — not here — so saved content is not mutated.
     */
    public static function normalizeCell(string $type, mixed $value, bool $fromRequest = false): mixed
    {
        $type = self::normalizeType($type);

        if (is_array($value) && !in_array($type, ['date', 'time'], true)) {
            // Drifted date/time picker payloads on non-date columns, etc.
            return in_array($type, ['checkbox', 'lightswitch'], true) ? false : '';
        }

        switch ($type) {
            case 'checkbox':
            case 'lightswitch':
                return $value === true || $value === 1 || $value === '1' || $value === 'true';

            case 'color':
                if ($value instanceof ColorData) {
                    return (string)$value;
                }

                if (!$value || $value === '#') {
                    return null;
                }

                $value = strtolower((string)$value);

                if ($value[0] !== '#') {
                    $value = '#' . $value;
                }

                if (strlen($value) === 4) {
                    $value = '#' . $value[1] . $value[1] . $value[2] . $value[2] . $value[3] . $value[3];
                }

                return (string)(new ColorData($value));

            case 'date':
            case 'time':
                if ($value === null || $value === '') {
                    return null;
                }

                // Canonical CP/storage forms match pk-date-picker (Y-m-d) and
                // pk-time-picker (H:i). Full ISO8601 from older saves is accepted
                // on read so column edits no longer wipe or NaN-corrupt cells (#54).
                $dateTime = DateTimeHelper::toDateTime($value);

                if (!$dateTime) {
                    return null;
                }

                return $type === 'date'
                    ? $dateTime->format('Y-m-d')
                    : $dateTime->format('H:i');

            case 'number':
                if ($value === null || $value === '') {
                    return null;
                }

                return is_numeric($value) ? $value + 0 : $value;

            case 'singleline':
            case 'multiline':
            case 'email':
            case 'url':
                if ($value === null) {
                    return null;
                }

                $value = (string)$value;

                if (!$fromRequest) {
                    $value = StringHelper::unescapeShortcodes(StringHelper::shortcodesToEmoji($value));
                }

                return $type === 'multiline'
                    ? StringHelper::convertLineBreaks($value)
                    : trim(StringHelper::convertLineBreaks($value));
        }

        return $value;
    }

    public static function serializeCell(string $type, mixed $value): mixed
    {
        $type = self::normalizeType($type);
        $value = self::normalizeCell($type, $value, true);

        if (is_string($value)) {
            $value = StringHelper::escapeShortcodes($value);

            if (!Craft::$app->getDb()->getSupportsMb4()) {
                $value = StringHelper::emojiToShortcodes($value);
            }
        }

        return $value;
    }

    public static function validateCell(string $type, mixed $value, ?string &$error = null): bool
    {
        $type = self::normalizeType($type);
        $value = self::normalizeCell($type, $value, true);

        if ($value === null || $value === '') {
            return true;
        }

        switch ($type) {
            case 'color':
                if ($value instanceof ColorData) {
                    $value = $value->getHex();
                }

                $validator = new ColorValidator();
                break;
            case 'url':
                $validator = new UrlValidator();
                break;
            case 'email':
                $validator = new EmailValidator();
                break;
            default:
                return true;
        }

        $validator->message = str_replace('{attribute}', '{value}', (string)$validator->message);

        return $validator->validate($value, $error);
    }

    /**
     * @param array<string, array<string, mixed>> $columns
     * @param array<string, array<string, mixed>> $rows
     */
    public static function isEmpty(array $columns, array $rows): bool
    {
        if ($rows === []) {
            return true;
        }

        foreach ($rows as $row) {
            if (!is_array($row)) {
                continue;
            }

            foreach (array_keys($columns) as $colId) {
                $cell = $row[$colId] ?? null;

                if ($cell === null || $cell === '' || $cell === false) {
                    continue;
                }

                return false;
            }
        }

        return true;
    }

    /**
     * @param array<string, array<string, mixed>> $columns
     * @param array<string, array<string, mixed>> $rows
     */
    public static function searchKeywords(array $columns, array $rows): string
    {
        $parts = [];

        foreach ($columns as $column) {
            $heading = trim((string)($column['heading'] ?? ''));

            if ($heading !== '') {
                $parts[] = $heading;
            }
        }

        foreach ($rows as $row) {
            if (!is_array($row)) {
                continue;
            }

            foreach ($row as $cell) {
                if (is_scalar($cell) && (string)$cell !== '' && !is_bool($cell)) {
                    $parts[] = (string)$cell;
                }
            }
        }

        return implode(' ', $parts);
    }

    /**
     * GraphQL `[[String]]` — positional cells in column order.
     *
     * @param array<string, array<string, mixed>> $columns
     * @param array<string, array<string, mixed>> $rows
     * @return list<list<string|null>>
     */
    public static function rowsForGql(array $columns, array $rows): array
    {
        $colIds = array_keys($columns);
        $out = [];

        foreach ($rows as $row) {
            if (!is_array($row)) {
                continue;
            }

            $line = [];

            foreach ($colIds as $colId) {
                $type = self::normalizeType($columns[$colId]['type'] ?? 'singleline');
                $cell = $row[$colId] ?? null;

                if (in_array($type, ['date', 'time'], true)) {
                    if ($cell instanceof \DateTimeInterface) {
                        $cell = $type === 'date' ? $cell->format('Y-m-d') : $cell->format('H:i');
                    } elseif ($cell !== null && $cell !== '') {
                        // Already canonical Y-m-d / H:i (or legacy ISO) — keep as string.
                        $cell = (string)$cell;
                    } else {
                        $cell = null;
                    }
                } elseif (is_bool($cell)) {
                    $cell = $cell ? '1' : '';
                } elseif (is_array($cell)) {
                    $cell = '';
                } elseif ($cell !== null) {
                    $cell = (string)$cell;
                }

                $line[] = $cell;
            }

            $out[] = $line;
        }

        return $out;
    }

    /**
     * @param mixed $columns
     * @return array<string, array<string, mixed>>
     */
    private static function canonicalizeColumns(mixed $columns): array
    {
        if (!is_array($columns) || $columns === []) {
            return [];
        }

        $out = [];
        $index = 0;

        foreach ($columns as $key => $column) {
            if (!is_array($column)) {
                continue;
            }

            // Skip completely invalid legacy rows without a heading key *and* no type.
            if (!array_key_exists('heading', $column) && !array_key_exists('type', $column)) {
                continue;
            }

            $colId = self::prefixedKey($key, 'col', $index, array_keys($out));
            $type = self::normalizeType($column['type'] ?? 'singleline');

            $next = [
                'heading' => (string)($column['heading'] ?? ''),
                'align' => self::normalizeAlignment($column['align'] ?? '') ?: 'left',
                'width' => (string)($column['width'] ?? ''),
                'type' => $type,
            ];

            if ($type === 'select') {
                $next['options'] = self::normalizeOptions($column['options'] ?? []);
            }

            $out[$colId] = $next;
            $index++;
        }

        return $out;
    }

    /**
     * @param mixed $rows
     * @param array<string, array<string, mixed>> $columns
     * @return array<string, array<string, mixed>>
     */
    private static function canonicalizeRows(mixed $rows, array $columns, bool $fromRequest): array
    {
        if (!is_array($rows) || $rows === []) {
            return [];
        }

        $colIds = array_keys($columns);
        $out = [];
        $index = 0;

        foreach ($rows as $key => $row) {
            if (!is_array($row)) {
                continue;
            }

            $rowId = self::prefixedKey($key, 'row', $index, array_keys($out));

            // Positional legacy row: [cell0, cell1, …] aligned to column order.
            if ($row !== [] && array_is_list($row) && $colIds !== []) {
                $mapped = [];

                foreach ($colIds as $i => $colId) {
                    $mapped[$colId] = $row[$i] ?? null;
                }

                $row = $mapped;
            }

            $cells = [];

            foreach ($colIds as $colId) {
                // Named keys may still be bare integers from older dual formats.
                $raw = $row[$colId] ?? $row[self::stripPrefix($colId, 'col')] ?? null;
                $type = $columns[$colId]['type'] ?? 'singleline';
                $cells[$colId] = self::normalizeCell($type, $raw, $fromRequest);
            }

            $out[$rowId] = $cells;
            $index++;
        }

        return $out;
    }

    /**
     * @param list<string|int> $used
     */
    private static function prefixedKey(string|int $key, string $prefix, int $fallbackIndex, array $used): string
    {
        $key = (string)$key;

        if (preg_match('/^' . preg_quote($prefix, '/') . '\d+$/', $key) === 1 && !in_array($key, $used, true)) {
            return $key;
        }

        // Numeric list index from legacy array_values() storage.
        if (ctype_digit($key) || is_int($key)) {
            $candidate = $prefix . $key;

            if (!in_array($candidate, $used, true)) {
                return $candidate;
            }
        }

        // Already-prefixed keys that were wrongly re-prefixed historically (colcol0).
        if (str_starts_with($key, $prefix . $prefix)) {
            $stripped = substr($key, strlen($prefix));

            if (preg_match('/^' . preg_quote($prefix, '/') . '\d+$/', $stripped) === 1 && !in_array($stripped, $used, true)) {
                return $stripped;
            }
        }

        $candidate = $prefix . $fallbackIndex;

        while (in_array($candidate, $used, true)) {
            $fallbackIndex++;
            $candidate = $prefix . $fallbackIndex;
        }

        return $candidate;
    }

    private static function stripPrefix(string $key, string $prefix): string
    {
        return str_starts_with($key, $prefix) ? substr($key, strlen($prefix)) : $key;
    }

    /**
     * @return list<array{label: string, value: string, default?: bool}>
     */
    private static function normalizeOptions(mixed $options): array
    {
        if (is_string($options)) {
            $options = Json::decodeIfJson($options);
        }

        if (!is_array($options)) {
            return [];
        }

        $out = [];

        foreach ($options as $option) {
            if (!is_array($option)) {
                continue;
            }

            $label = (string)($option['label'] ?? $option['value'] ?? '');
            $value = (string)($option['value'] ?? $option['label'] ?? '');

            if ($label === '' && $value === '') {
                continue;
            }

            $next = [
                'label' => $label,
                'value' => $value,
            ];

            if (!empty($option['default'])) {
                $next['default'] = true;
            }

            $out[] = $next;
        }

        return $out;
    }

    private static function renderCellHtml(string $type, mixed $value): string
    {
        if ($value === null || $value === '') {
            return '';
        }

        if (is_array($value)) {
            return '';
        }

        if (is_bool($value)) {
            return $value ? '1' : '';
        }

        $string = (string)$value;

        if ($type === 'multiline') {
            // Encode first so nl2br only injects safe <br> tags.
            return nl2br(Html::encode($string), false);
        }

        return Html::encode($string);
    }
}
