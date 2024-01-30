# Changelog

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
