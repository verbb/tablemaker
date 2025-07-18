# Changelog

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
