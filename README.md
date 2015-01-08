# Table Maker - a plugin for Craft


## Auto
```
{{ entry.plops.table }}
```

## Manual
```
<table>

  <thead>
    <tr>
      {% for col in entry.plops.columns %}
      <th align="{{ col.align }}">{{ col.heading }}</th>
      {% endfor %}
    </tr>
  </thead>

  <tbody>
    {% for row in entry.plops.rows %}
    <tr>
      {% for cell in row %}
      <td align="{{ entry.plops.columns[loop.index0].align }}">{{ cell }}</td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>

</table>
```
