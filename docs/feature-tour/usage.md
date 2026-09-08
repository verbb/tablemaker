# Usage

There are two ways you can go about templating a table: use the built-in html output or access the column and row data directly to code your own.

Set up the field and editor UI first — see [Field](docs:feature-tour/field).

## Automatic table output

This will simply output a valid html table (cells and headings are HTML-encoded):

```twig
{{ entry.myTableField.table }}
```

You can pass attributes for the root `<table>` element (values are encoded):

```twig
{{ entry.myTableField.table({ class: 'specs', id: 'pricing', 'data-table': 'pricing' }) }}
```

If the value has a caption set, the automatic HTML includes `<caption>…</caption>`. Access it with `{{ entry.myTableField.caption }}`. (**Enable Caption** on the field settings controls whether editors can edit it in the CP.)

For full control over markup, prefer looping `columns` / `rows` below rather than extending the built-in HTML helper.

## Code your own

Should you want more control over the output you can just access the column and row data directly instead using `{{ entry.myTableField.columns }}` and `{{ entry.myTableField.rows }}`.

Columns and rows use stable `colN` / `rowN` keys (matching the CP editor). Zip cells to columns by key — do not assume numeric `loop.index0` indexes.

```twig
<table>
    <thead>
        <tr>
            {% for col in entry.myTableField.columns %}
                <th align="{{ col.align }}" width="{{ col.width }}">{{ col.heading }}</th>
            {% endfor %}
        </tr>
    </thead>

    <tbody>
        {% for row in entry.myTableField.rows %}
            <tr>
                {% for colId, col in entry.myTableField.columns %}
                    {% set cell = row[colId] ?? null %}

                    {% if col.type == 'heading' %}
                        <th scope="row" align="{{ col.align }}">{{ cell }}</th>
                    {% elseif col.type == 'select' %}
                        {# Stored value — look up the label from column options if you need it #}
                        {% set option = col.options|filter(o => o.value == cell)|first %}
                        <td align="{{ col.align }}">{{ option.label ?? cell }}</td>
                    {% else %}
                        <td align="{{ col.align }}">
                            {% if col.type == 'url' and cell %}
                                <a href="{{ cell }}">{{ cell }}</a>
                            {% elseif col.type == 'email' and cell %}
                                <a href="mailto:{{ cell }}">{{ cell }}</a>
                            {% elseif col.type == 'date' and cell %}
                                {{ cell | date('short') }}
                            {% elseif col.type == 'time' and cell %}
                                {{ cell | date('short') }}
                            {% elseif col.type == 'multiline' and cell %}
                                {{ cell | nl2br }}
                            {% elseif col.type in ['checkbox', 'lightswitch'] %}
                                {{ cell ? 'Yes' : 'No' }}
                            {% else %}
                                {{ cell }}
                            {% endif %}
                        </td>
                    {% endif %}
                {% endfor %}
            </tr>
        {% endfor %}
    </tbody>
</table>
```

See [Field](docs:feature-tour/field) for the full list of column type handles.

## GraphQL

Query the field like Twig — `columns`, positional `rows` (`[[String]]`), optional `caption`, and encoded `table` HTML:

```graphql
{
  entry(id: 123) {
    ... on page_Entry {
      myTableField {
        caption
        columns { type heading width align options { label value } }
        rows
        table
      }
    }
  }
}
```

Mutations accept the same shape (columns list + rows as a string matrix + optional caption). Column/row order is positional; storage keys (`colN` / `rowN`) are assigned on save:

```graphql
mutation {
  save_page_Entry(id: 123, myTableField: {
    caption: "Pricing"
    columns: [
      { heading: "Plan", type: "heading" }
      { heading: "Price", type: "singleline" }
    ]
    rows: [
      ["Basic", "$9"]
      ["Pro", "$29"]
    ]
  }) {
    myTableField { caption rows }
  }
}
```
