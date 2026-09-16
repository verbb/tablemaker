# Installation & Setup
You can install Table Maker via the plugin store, or through Composer.

## Craft Plugin Store
To install **Table Maker**, navigate to the _Plugin Store_ section of your Craft control panel, search for `Table Maker`, and click the _Try_ button.

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

## Create and Display a Table

Create a Table Maker field with the handle `pricingTable` and add it to an entry type's field layout. Open an entry, use **Edit columns** to add Plan and Price columns, and enter two rows with recognisable values. Save the entry.

In its Twig template, render the table:

```twig
{{ entry.pricingTable.table }}
```

Open the public page and compare its headings and rows with the editor. Your site's CSS supplies the table's appearance. [Field](docs:feature-tour/field) explains the column options, and [Rendering Tables](docs:template-guides/rendering-tables) shows how to customise the output.
