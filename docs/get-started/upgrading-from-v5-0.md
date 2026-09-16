# Upgrading from v5.0

Before upgrading to Table Maker 5.1, back up your database and test the update on a copy of your site. Craft CMS 5.6 or later and PHP 8.2 or later are required. Review templates and custom PHP code that use Table Maker values, then save and reopen a representative table to check its columns, cells and public output.

## Breaking Changes

### Encoded Table Output

Generated `table` markup now HTML-encodes headings, cells and captions. HTML stored in a text cell displays as text; it is no longer inserted into the generated table as markup. Multi-line cells still produce line breaks.

If your site relies on HTML in cells, build custom markup using the column and row values and sanitise that content against your project's allowed HTML before marking it as safe. Do not apply `raw` to unrestricted editor input. [Rendering Tables](docs:template-guides/rendering-tables) shows a complete custom rendering example.

### Date and Time Values

Date cells are normalised to `Y-m-d` strings and time cells to `H:i` strings, including in GraphQL responses. Existing ISO 8601 values are accepted on read. Check client code that expects a full timestamp: a table date or time does not contain the other portion of that timestamp.

For example, a time value such as `2026-09-16T19:05:00+10:00` becomes `19:05`. Use a date column as well when your table needs both pieces of information.

### Number Values

Numeric strings retain their digits instead of being converted to PHP integers or floats, so large integers and precise decimals survive browser and database round trips. Existing integers beyond JavaScript's safe range are exposed as strings as well. Custom PHP integrations should accept numeric strings; only cast when the precision limits of the target type are appropriate. Invalid or non-finite numbers now fail validation when saving. Digits already lost to earlier numeric conversions cannot be recovered.

### PHP Value Objects

A field value is now a `TableMakerData` object. Twig loops and named access such as `entry.pricingTable.rows` continue to work, and positional access such as `columns[loop.index0]` remains available. PHP integrations that require arrays should use the conversion methods:

```php
$table = $entry->getFieldValue('pricingTable');
$columns = $table->columnsArray();
$rows = $table->rowsArray();
$storedValue = $table->toStorage();
```

The arrays use `colN` and `rowN` keys. Match cells to their column keys instead of assuming that a numeric suffix is its current position. Generated `table` HTML is derived from the value and is not included in storage.

Use `rowsArray()` for readable cell values. `toStorage()` returns persistence data: its string cells are JSON-encoded and identified by `cellEncoding: json-v1`, preserving literal shortcodes, backslashes and Unicode characters. Pass the complete stored value through the field's normalisation before reading or editing its cells; do not submit encoded storage rows as editor or GraphQL input.

### Removed Field Settings

The Column Label, Column Instructions, Add Column Label, Row Label and Row Instructions settings have been removed. Use the Craft field's name and instructions to describe the table. Add Row Label remains available. Remove the corresponding `columnsLabel`, `columnsInstructions`, `columnsAddRowLabel`, `rowsLabel` and `rowsInstructions` options from custom code that assigns field properties. Existing saved field configuration containing these options can still be loaded.

## Stored Tables and the Editor

Existing positional column and row arrays are normalised when read, preserving literal text such as `:smile:`. Saving writes the canonical keyed structure with `columnOrder` and `rowOrder` lists to preserve display order in JSON database columns. No separate content conversion command is needed. Check tables with dropdown options, reordered columns, dates and times before deploying the update.

Editors configure columns in **Edit columns**, then choose **Done** to apply the schema changes or **Cancel** to discard them. Save the entry to persist the table. [Field](docs:feature-tour/field) explains the available controls and settings.
