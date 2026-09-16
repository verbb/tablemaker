# GraphQL

Add the element section and Table Maker field to the GraphQL schema used by your access token. Replace `page_Entry` and `pricingTable` below with the generated entry type and field handle from your project.

## Query a Table

```graphql
query PricingTable($id: [QueryArgument]) {
    entry(id: $id) {
        ... on page_Entry {
            pricingTable {
                caption
                columns { type heading width align options { label value } }
                rows
                table
            }
        }
    }
}
```

Send variables separately:

```json
{ "id": 123 }
```

`rows` is returned as a positional string matrix. `table` contains generated, encoded HTML; query `columns` and `rows` instead when the client should build its own markup.

A response has the following shape:

```json
{
    "data": {
        "entry": {
            "pricingTable": {
                "caption": "Pricing",
                "columns": [
                    { "type": "heading", "heading": "Plan", "width": "", "align": "", "options": [] },
                    { "type": "singleline", "heading": "Price", "width": "", "align": "", "options": [] }
                ],
                "rows": [["Basic", "$9"], ["Pro", "$29"]],
                "table": "<table><caption>Pricing</caption><thead><tr><th align=\"left\" style=\"text-align: left;\">Plan</th><th align=\"left\" style=\"text-align: left;\">Price</th></tr></thead><tbody><tr><th scope=\"row\">Basic</th><td>$9</td></tr><tr><th scope=\"row\">Pro</th><td>$29</td></tr></tbody></table>"
            }
        }
    }
}
```

Use the complete `table` string when rendering generated markup, or omit it from the query when the client builds its own table from `columns` and `rows`.

## Save a Table

The schema must allow mutations for the target section. Craft names entry mutations `save_<sectionHandle>_<entryTypeHandle>_Entry`: the example below assumes a `pages` section and a `page` entry type. Replace both handles with your project's handles. Table Maker accepts a column list, a positional row matrix and an optional caption:

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

## The `{fieldHandle}_TableMakerField` Type

Each Table Maker field exposes an object type named from its handle. For `pricingTable`, the type is `pricingTable_TableMakerField`. Its column and option types use the same prefix. All fields and list items below are nullable.

| Field | Type | Description |
| --- | --- | --- |
| `caption` | `String` | The table caption, or null when blank. |
| `columns` | `[{fieldHandle}_TableMakerField_column]` | Columns in their saved order. |
| `rows` | `[[String]]` | Rows of cell values, ordered to match the columns. |
| `table` | `String` | Generated table HTML with encoded headings and cell values. |

### Column Type

`{fieldHandle}_TableMakerField_column` exposes the settings for one column:

| Field | Type | Description |
| --- | --- | --- |
| `type` | `String` | The column type, such as `singleline`, `heading`, or `select`. |
| `heading` | `String` | The column heading. |
| `width` | `String` | The configured width. |
| `align` | `String` | The configured alignment; an empty string uses the default. |
| `options` | `[{fieldHandle}_TableMakerField_column_option]` | Choices for columns with selectable options. |

### Option Type

`{fieldHandle}_TableMakerField_column_option` describes one selectable option:

| Field | Type | Description |
| --- | --- | --- |
| `label` | `String` | The label displayed for the option. |
| `value` | `String` | The stored value. |
| `default` | `Boolean` | Whether the option is a default choice. |

The mutation input uses the corresponding `{fieldHandle}_TableMakerInput`, `{fieldHandle}_TableMakerInput_column`, and `{fieldHandle}_TableMakerInput_column_option` types. Column and option fields match the tables above; the outer input accepts `columns`, `rows`, and `caption`, as shown in [Save a Table](#save-a-table).
