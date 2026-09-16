# Upgrading from v5.0

Before upgrading to Table Maker 5.1, back up your database and test the update on a copy of your site. Craft CMS 5.6 or later and PHP 8.2 or later are required. Review templates and custom PHP code that use Table Maker values, then save and reopen a representative table to check its columns, cells and public output.

## Breaking Changes

### Encoded Table Output

Generated `table` markup now HTML-encodes headings, cells and captions. HTML stored in a text cell displays as text; it is no longer inserted into the generated table as markup. Multi-line cells still produce line breaks.

If your site relies on HTML in cells, build custom markup using the column and row values and sanitise that content against your project's allowed HTML before marking it as safe. Do not apply `raw` to unrestricted editor input. [Rendering Tables](docs:template-guides/rendering-tables) shows a complete custom rendering example.

### Date and Time Values

Date cells are normalised to `Y-m-d` strings and time cells to `H:i` strings, including in GraphQL responses. Existing ISO 8601 values are accepted on read. Check client code that expects a full timestamp: a table date or time does not contain the other portion of that timestamp.

For example, a time value such as `2026-09-16T19:05:00+10:00` becomes `19:05`. Use a date column as well when your table needs both pieces of information.

### PHP Value Objects

A field value is now a `TableMakerData` object. Twig loops and named access such as `entry.pricingTable.rows` continue to work, and positional access such as `columns[loop.index0]` remains available. PHP integrations that require arrays should use the conversion methods:

```php
$table = $entry->getFieldValue('pricingTable');
$columns = $table->columnsArray();
$rows = $table->rowsArray();
$storedValue = $table->toStorage();
```

The arrays use `colN` and `rowN` keys. Match cells to their column keys instead of assuming that a numeric suffix is its current position. Generated `table` HTML is derived from the value and is not included in storage.

### Removed Field Settings

The Column Label, Column Instructions, Add Column Label, Row Label and Row Instructions settings have been removed. Use the Craft field's name and instructions to describe the table. Add Row Label remains available. Remove the corresponding `columnsLabel`, `columnsInstructions`, `columnsAddRowLabel`, `rowsLabel` and `rowsInstructions` options from custom code that assigns field properties. Existing saved field configuration containing these options can still be loaded.

## Stored Tables and the Editor

Existing positional column and row arrays are normalised when read; saving writes the canonical keyed structure with `columnOrder` and `rowOrder` lists to preserve display order in JSON database columns. No separate content conversion command is needed. Check tables with dropdown options, reordered columns, dates and times before deploying the update.

Editors configure columns in **Edit columns**, then choose **Done** to apply the schema changes or **Cancel** to discard them. Save the entry to persist the table. [Field](docs:feature-tour/field) explains the available controls and settings.
