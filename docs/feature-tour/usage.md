# Usage
There are two ways you can go about templating a table: use the built-in html output or access the column and row data directly to code your own.

## Automatic table output
This will simply output a valid html table (cells and headings are HTML-encoded):

```twig
{{ entry.myTableField.table }}
```

You can pass attributes for the root `<table>` element (values are encoded):

```twig
{{ entry.myTableField.table({ class: 'specs', id: 'pricing', 'data-table': 'pricing' }) }}
```

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

                    <td align="{{ col.align }}">
                        {% if col.type == 'url' and cell %}
                            <a href="{{ cell }}">{{ cell }}</a>
                        {% elseif col.type == 'date' and cell %}
                            {{ cell | date('short') }}
                        {% elseif col.type == 'time' and cell %}
                            {{ cell | date('short') }}
                        {% elseif col.type == 'multiline' and cell %}
                            {{ cell | nl2br }}
                        {% else %}
                            {{ cell }}
                        {% endif %}
                    </td>
                {% endfor %}
            </tr>
        {% endfor %}
    </tbody>
</table>
```
