# Interfaces & Types

Each Table Maker field adds its own object types to Craft’s GraphQL schema, named from the field’s handle. For a field with the handle `pricingTable`, the types are `pricingTable_TableMakerField`, `pricingTable_TableMakerField_column` and `pricingTable_TableMakerField_column_option`. [Queries](docs:graphql/queries) shows a complete query and response. All fields and list items are nullable.

## Field Value Types

### The `{fieldHandle}_TableMakerField` Type

The value of a Table Maker field.

::: reference
#### `caption`

**Type:** `String`

The table’s caption, or null when it’s blank.
:::

::: reference
#### `columns`

**Type:** `[{fieldHandle}_TableMakerField_column]`

The table’s columns in their saved order.
:::

::: reference
#### `rows`

**Type:** `[[String]]`

The table’s rows, each a list of cell values in the same order as `columns`. Rich text cells contain sanitised HTML.
:::

::: reference
#### `table`

**Type:** `String`

The generated table HTML, with ordinary values encoded and rich text cells sanitised.
:::

### The `{fieldHandle}_TableMakerField_column` Type

The settings for one column, returned in a table’s `columns` list.

```graphql
pricingTable {
  columns {
    type
    heading
    options {
      label
      value
      default
    }
  }
}
```

```json
{
  "pricingTable": {
    "columns": [
      { "type": "heading", "heading": "Plan", "options": [] },
      { "type": "select", "heading": "Support", "options": [
        { "label": "Email", "value": "email", "default": true },
        { "label": "Phone", "value": "phone", "default": false }
      ] }
    ]
  }
}
```

::: reference
#### `align`

**Type:** `String`

The column’s alignment, or an empty string for the default.
:::

::: reference
#### `heading`

**Type:** `String`

The column’s heading.
:::

::: reference
#### `options`

**Type:** `[{fieldHandle}_TableMakerField_column_option]`

The choices for a column with selectable options.
:::

::: reference
#### `type`

**Type:** `String`

The column type, such as `singleline`, `heading` or `select`.
:::

::: reference
#### `width`

**Type:** `String`

The column’s configured width.
:::

### The `{fieldHandle}_TableMakerField_column_option` Type

One selectable option for a column, returned in a column’s `options` list.

::: reference
#### `default`

**Type:** `Boolean`

Whether the option is a default choice.
:::

::: reference
#### `label`

**Type:** `String`

The label shown for the option.
:::

::: reference
#### `value`

**Type:** `String`

The option’s stored value.
:::
