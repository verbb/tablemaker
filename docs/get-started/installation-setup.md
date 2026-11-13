# Installation & Setup
You can install Table Maker via the plugin store, or through Composer.

## Craft Plugin Store
To install **Table Maker**, navigate to the _Plugin Store_ section of your Craft control panel, search for `Table Maker`, and click the _Install_ button.

## Composer
You can also add the package to your project using Composer and the command line.

1. Open your terminal and go to your Craft project:
```shell
cd /path/to/project
```

2. Then tell Composer to require the plugin, and Craft to install it:
```shell
composer require verbb/tablemaker && php craft plugin/install tablemaker
```

## First Steps
Create a Table Maker field with the handle `pricingTable` and add it to an entry type’s field layout. Open an entry, use **Configure** to add its columns and rows, then output the table in your template with `{{ entry.pricingTable.table }}`. [Field](docs:feature-tour/field) explains the column options, and [Rendering Tables](docs:template-guides/rendering-tables) shows how to customise the output.
