# Table Maker Plugin for Craft CMS
Let your users define their own table columns in your Craft control panel.

![Table Maker](https://raw.githubusercontent.com/verbb/tablemaker/craft-3/screenshots/cover.jpg)

## Installation
You can install Table Maker via the plugin store, or through Composer.

### Craft Plugin Store
To install **Table Maker**, navigate to the _Plugin Store_ section of your Craft control panel, search for `Table Maker`, and click the _Try_ button.

### Composer
You can also add the package to your project using Composer and the command line.

1. Open your terminal and go to your Craft project:
```shell
cd /path/to/project
```

2. Then tell Composer to require the plugin, and Craft to install it:
```shell
composer require verbb/tablemaker && php craft plugin/install tablemaker
```

## Usage
There are two ways you can go about templating a table: use the built-in html output or access the column and row data directly to code your own.

### Automatic table output
This will simply output a valid html table:

```twig
{{ entry.myTableField.table }}
```

### Code your own
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
                    <td align="{{ entry.myTableField.columns[loop.index0].align }}">{{ cell }}</td>
                {% endfor %}
            </tr>
        {% endfor %}
    </tbody>
</table>
```

Note that when looping rows you can use the current loop index to find the appropriate alignment value for that column.

## Credits
Originally created by the team at [Supercool Ltd](http://www.supercooldesign.co.uk/).

## Show your Support
Table Maker is licensed under the MIT license, meaning it will always be free and open source – we love free stuff! If you'd like to show your support to the plugin regardless, [Sponsor](https://github.com/sponsors/verbb) development.

<h2></h2>

<a href="https://verbb.io" target="_blank">
    <img width="100" src="https://verbb.io/assets/img/verbb-pill.svg">
</a>
