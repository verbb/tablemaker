# Queries

Table Maker doesn’t add its own GraphQL queries. A Table Maker field adds its value to Craft’s element types, so you query it through Craft’s own queries, such as `entry` or `entries`, the same way as any other custom field.

## Set Up the Schema

In **GraphQL → Schemas**, edit the schema used by your access token and allow it to read the section that contains your Table Maker field. Replace `page_Entry` and `pricingTable` below with the generated entry type and field handle from your project. [Craft’s GraphQL documentation](https://craftcms.com/docs/5.x/development/graphql.html) explains schemas, tokens and endpoints.

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

`rows` is returned as a positional string matrix, and a rich-text cell is returned as a sanitised HTML string. `table` contains generated HTML with ordinary values encoded and rich-text cells sanitised. Query `columns` and `rows` instead when the client should build its own markup.

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

[Interfaces & Types](docs:graphql/interfaces-types) describes every field on the table, column and option types. Saving a table through Craft’s entry mutations is covered in [Mutations](docs:graphql/mutations).
