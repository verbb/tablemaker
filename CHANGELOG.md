# Changelog

## Unreleased

### Fixed
- Fix the Rich text link toolbar action failing to show its link editor, including on long, deeply nested entry pages ([#71](https://github.com/verbb/tablemaker/issues/71)).
- Only offer the **Rich text** column type when CKEditor 5.0 or later is installed and enabled, preventing CKEditor 4.x installations from attempting to load unavailable editor modules ([#70](https://github.com/verbb/tablemaker/issues/70)).

## 5.1.0 - 2026-09-29

### Added
- Add an optional **Rich text** column type when Craft's CKEditor plugin is installed and enabled, with modal or single-cell inline editing, formatted previews, and a raw-HTML fallback when CKEditor is unavailable ([#69](https://github.com/verbb/tablemaker/issues/69)).
- Add **Row heading** column type (Craft Table parity): editable in the CP, rendered as `<th scope="row">` in `.table` HTML ([#6](https://github.com/verbb/tablemaker/issues/6)).
- Add optional per-value table **caption** field ([#60](https://github.com/verbb/tablemaker/issues/60)).
- Add GraphQL mutation input for Table Maker values (`columns` + `rows` + optional `caption`) and expose column options in queries ([#33](https://github.com/verbb/tablemaker/issues/33)).
- Paste spreadsheet TSV into the content grid from the focused cell; rows expand within max-row limits ([#7](https://github.com/verbb/tablemaker/issues/7)).
- Insert row above/below from the row actions menu ([#20](https://github.com/verbb/tablemaker/issues/20)).
- Confirm before deleting a column in the Edit columns dialog ([#58](https://github.com/verbb/tablemaker/issues/58)).
- Add field setting to restrict which column types editors can choose, with an “All” (`*`) default ([#53](https://github.com/verbb/tablemaker/issues/53)).
- Add field settings for min/max rows and min/max columns ([#38](https://github.com/verbb/tablemaker/issues/38)).
- Add a field setting for placing the Configure button in the field header or the table actions header, with automatic placement for fields without labels.
- Allow passing an attributes array to `.table` HTML output ([#4](https://github.com/verbb/tablemaker/issues/4)).

### Changed
- Now requires Craft CMS 5.6+.
- Rebuild the field input UI with [Plugin Kit](https://docs.verbb.io/plugin-kit/web/) web components and move column configuration into a modal.
- Change the PHP value and storage layer to use stable `colN`/`rowN` keys, retain legacy positional access, and generate `.table` HTML lazily instead of persisting it.
- Disable the optional width and alignment columns by default for new fields.
- Expand the documentation for table setup, column choices, template changes, GraphQL, and upgrading from Table Maker 5.0.

### Fixed
- Fixed a medium-severity denial-of-service vulnerability.
- Fix headings and cells not being HTML-encoded in `.table` output.
- Fix GraphQL column type registry lookup.
- Preserve column widths and alignment when their editing controls are hidden.
- Preserve multiline whitespace and exact dropdown values when editing and saving tables.
- Fix cloning / Neo block duplicate saves failing with undefined column keys when dropdown options were missing ([#61](https://github.com/verbb/tablemaker/issues/61)).
- Fix Date/Time cells wiping or showing invalid empty values when editing columns; store `Y-m-d` / `H:i` for CP round-trip ([#54](https://github.com/verbb/tablemaker/issues/54)).

### Removed
- Remove the Column Label, Column Instructions, Add Column Label, Row Label, and Row Instructions field settings; use the field label and instructions for row context instead.

## 5.0.10 - 2026-08-20

### Fixed
- Fix Date column values becoming invalid when changing column width or alignment. #68.

## 5.0.9 - 2026-04-29

### Fixed
- Fix an error in Craft 5.9+.

## 5.0.8 - 2026-03-15

### Fixed
- Fix alignment options not working correctly.

## 5.0.7 - 2026-02-13

### Fixed
- Fix an error when querying Table Maker fields via GraphQL, where `type` did not exist on a column definition.

## 5.0.6 - 2025-07-18

### Changed
- Update English translations.

### Fixed
- Fix Date and Time column values in GraphQL.

## 5.0.5 - 2025-03-04

### Fixed
- Fix an error when normalizing columns.

## 5.0.4 - 2025-02-02

### Added
- Add the ability to enable/disable the Width and Alignment columns for the Column table.
- Add placeholders in field settings for default values.

### Fixed
- Fix an error when querying Table Maker fields with Date or Time columns.
- Fix output of Multi-Line cell type values.
- Fix output of Date cell type values.
- Fix validation for some cell types.

## 5.0.3 - 2024-10-09

### Fixed
- Fix email validation for cell value.

## 5.0.2 - 2024-09-04

### Fixed
- Fix an error when trying to validate column values.
- Fix an issue where Tablemaker JS wasn’t re-initialized when toggling Matrix blocks collapsed state.

## 5.0.1 - 2024-08-11

### Changed
- Update English translations.

### Fixed
- Fix an error when initializing the field in some instances.

## 5.0.0 - 2024-05-12

### Changed
- Now requires PHP `8.2.0+`.
- Now requires Craft `5.0.0+`.

### Fixed
- Fix an error in Craft 4.6.0 where dropdown column options weren’t saving correctly.

## 4.0.18 - 2026-03-15

### Fixed
- Fix alignment options not working correctly.

## 4.0.17 - 2025-07-18

### Changed
- Update English translations.

## 4.0.16 - 2025-03-04

### Fixed
- Fix an error when normalizing columns.

## 4.0.15 - 2025-02-02

### Added
- Add the ability to enable/disable the Width and Alignment columns for the Column table.
- Add placeholders in field settings for default values.

### Fixed
- Fix an error when querying Table Maker fields with Date or Time columns.

## 4.0.14 - 2024-10-09

### Fixed
- Fix email validation for cell value.

## 4.0.13 - 2024-09-04

### Fixed
- Fix an error when trying to validate column values.

## 4.0.12 - 2024-08-12

### Changed
- Update English translations.

### Fixed
- Fix an error when initializing the field in some instances.

## 4.0.11 - 2024-04-29

### Changed
- Update English translations.

### Fixed
- Fix an error when initializing the field in some instances.

## 4.0.10 - 2024-03-26

### Fixed
- Fix an error in Craft 4.6.0 where dropdown column options weren’t saving correctly.

## 4.0.9 - 2024-03-04

### Fixed
- Fix an error when trying to access columns for the field on an empty element.

## 4.0.8 - 2024-01-30

### Added
- Add `type` to `columns` for GQL queries.

### Fixed
- Fix Dropdown columns not showing their options settings on-load.
- Fix an error when removing a Dropdown column.
- Fix an error when removing columns.

## 4.0.7 - 2023-10-25

### Fixed
- Fix an error with type settings for the field.

## 4.0.6 - 2023-04-21

### Fixed
- Fix an error with GraphQL when querying an empty field.

## 4.0.5 - 2023-04-21

### Fixed
- Fix an error with GraphQL when querying an empty field.

## 4.0.4 - 2023-02-22

### Fixed
- Improve typing sluggishness for large Table Maker fields.

## 4.0.3 - 2022-08-09

### Fixed
- Fix an incompatibility with Vizy.

## 4.0.2 - 2022-07-06

### Added
- Add GraphQL support (thanks @mattstein).

## 4.0.1 - 2022-06-21

### Changed
- Now requires Table Maker `3.0.0` in order to update from Craft 3.

### Removed
- Removed Craft 2 migration.

## 4.0.0 - 2022-06-20

### Changed
- Now requires PHP `8.0.2+`.
- Now requires Craft `4.0.0+`.

## 3.0.4 - 2022-08-09

### Fixed
- Fix an incompatibility with Vizy.

## 3.0.3 - 2022-07-31

### Added
- Add changelog notice when updating.

## 3.0.2 - 2022-07-06

### Added
- Add GraphQL support (thanks @mattstein).

### Fixed
- Fix an error when running the Craft 2 migration on an already Craft 3 updated install.

## 3.0.1 - 2022-06-20

### Added
- Add Craft 2 migration (thanks @jamesmacwhite).
- New icon.

## 3.0.0 - 2022-06-04

> {note} The plugin’s package name has changed to `verbb/tablemaker`. Table Maker will need be updated to 3.0 from a terminal, by running `composer require verbb/tablemaker && composer remove supercool/tablemaker`.

### Changed
- Migration to `verbb/tablemaker`.
- Now requires Craft 3.7+.

## 2.0.1 - 2018-07-06

### Fixed
- Fixed an error caused by deleting a column when there are mulitple columns and the deleted column is not the last one.

## 2.0.0 - 2018-04-12

### Added
- Initial Craft CMS 3 release
