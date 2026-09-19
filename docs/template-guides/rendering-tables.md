# Rendering Tables

A populated Table Maker field returns its columns, rows, caption and generated table markup. The examples below use the `pricingTable` field created in [Installation and Setup](docs:get-started/installation-setup#create-and-display-a-table).

## Use the Generated Table

Use `table` when the generated semantic HTML suits your design:

```twig
{% if entry.pricingTable.rows | length %}
    {{ entry.pricingTable.table({ class: 'pricing-table', 'data-table': 'pricing' }) }}
{% endif %}
```

The helper HTML-encodes headings, ordinary cells, caption and attribute values. Rich-text cells render Table Maker's sanitised HTML allowlist: paragraphs, line breaks, bold, italic, links and ordered or unordered lists. It includes a `<caption>` when the field value has one. Your site's stylesheet controls the table's appearance.

## Build Custom Markup

Loop through `columns` and `rows` when different column types require different markup. Both collections use stable `colN` and `rowN` keys, allowing each cell to be matched to its column definition.

```twig
{% if entry.pricingTable.rows | length %}
    <table class="pricing-table">
        {% if entry.pricingTable.caption %}<caption>{{ entry.pricingTable.caption }}</caption>{% endif %}
        <thead>
            <tr>
                {% for column in entry.pricingTable.columns %}
                    <th scope="col">{{ column.heading }}</th>
                {% endfor %}
            </tr>
        </thead>
        <tbody>
            {% for row in entry.pricingTable.rows %}
                <tr>
                    {% for columnId, column in entry.pricingTable.columns %}
                        {% set cell = row[columnId] ?? null %}
                        {% if column.type == 'heading' %}
                            <th scope="row">{{ cell }}</th>
                        {% elseif column.type == 'url' and cell %}
                            <td><a href="{{ cell }}">{{ cell }}</a></td>
                        {% elseif column.type == 'email' and cell %}
                            <td><a href="mailto:{{ cell }}">{{ cell }}</a></td>
                        {% elseif column.type == 'multiline' and cell %}
                            <td>{{ cell | nl2br }}</td>
                        {% elseif column.type == 'richtext' and cell %}
                            {# Table Maker sanitises rich-text cells when the value is normalised. #}
                            <td>{{ cell | raw }}</td>
                        {% elseif column.type in ['checkbox', 'lightswitch'] %}
                            <td>{{ cell ? 'Yes' : 'No' }}</td>
                        {% else %}
                            <td>{{ cell }}</td>
                        {% endif %}
                    {% endfor %}
                </tr>
            {% endfor %}
        </tbody>
    </table>
{% endif %}
```

Twig escapes cell values by default. Table Maker sanitises a `richtext` cell against its limited allowlist, so it can be rendered with `raw` as shown. If a project intentionally stores markup in any other text cell, sanitise it against a project-defined allowlist before applying `raw`; do not render editor input as unrestricted HTML.

Match each cell to its column key when building custom markup so headings and values stay paired after columns are reordered.
