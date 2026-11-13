# Mutations

Table Maker doesn’t add its own GraphQL mutations. A Table Maker field adds an argument to Craft’s element mutations, which takes a `{fieldHandle}_TableMakerInput` object with the table’s columns, rows and caption.

## Save a Table

The schema must allow mutations for the target section. Craft names entry mutations `save_<sectionHandle>_<entryTypeHandle>_Entry`, and the example below assumes a `pages` section and a `page` entry type. Replace both handles with your project's handles. Table Maker accepts a column list, a positional row matrix and an optional caption:

```graphql
mutation SavePricingTable($id: ID!, $table: pricingTable_TableMakerInput) {
    save_pages_page_Entry(id: $id, pricingTable: $table) {
        id
        pricingTable { caption rows }
    }
}
```

The input type is generated from the field handle as `<handle>_TableMakerInput`. Use variables matching that generated type:

```json
{
    "id": "123",
    "table": {
        "caption": "Pricing",
        "columns": [
            { "heading": "Plan", "type": "heading" },
            { "heading": "Price", "type": "singleline" }
        ],
        "rows": [["Basic", "$9"], ["Pro", "$29"]]
    }
}
```

Verify the saved entry in the Control Panel after first enabling mutations. Column and row order is positional, and Table Maker assigns its stable storage keys on save.

## Input Types

Each Table Maker field has its own input types, named from its handle. For `pricingTable`, the outer input is `pricingTable_TableMakerInput`.

| Input Type | Fields |
| --- | --- |
| `{fieldHandle}_TableMakerInput` | `columns` (`[{fieldHandle}_TableMakerInput_column]`), `rows` (`[[String]]`) and `caption` (`String`). |
| `{fieldHandle}_TableMakerInput_column` | `type`, `heading`, `width` and `align` (all `String`), and `options` (`[{fieldHandle}_TableMakerInput_column_option]`). |
| `{fieldHandle}_TableMakerInput_column_option` | `label` and `value` (both `String`), and `default` (`Boolean`). |

These fields match the output fields described in [Interfaces & Types](docs:graphql/interfaces-types).
