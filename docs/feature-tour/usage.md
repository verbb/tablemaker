# Usage
There are two ways you can go about templating a table: use the built-in html output or access the column and row data directly to code your own.

## Automatic table output
This will simply output a valid html table:

```twig
{{ entry.myTableField.table }}
```

## Code your own
Should you want more control over the output you can just access the column and row data directly instead using `{{ entry.myTableField.columns }}` and `{{ entry.myTableField.rows }}`.

Here is an example of how you might do just that:

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
                {% for cell in row %}
                    {% set col = entry.myTableField.columns[loop.index0] %}

                    <td align="{{ col.align }}">
                        {% if col.type == 'url' %}
                            <a href="{{ cell }}">{{ cell }}</a>
                        {% elseif col.type == 'date' %}
                            {{ cell | date('short') }}
                        {% elseif col.type == 'time' %}
                            {{ cell | date('short') }}
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

Note that when looping rows you can use the current loop index to find the appropriate alignment value for that column.
