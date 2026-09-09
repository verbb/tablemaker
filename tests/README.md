# Tests

Craft-boot Pest suite matching Verbb’s Hyper / CP Nav / Navigation / Formie harness.

## Setup

1. Copy `.env.testing.example` → `.env.testing` and set `CRAFT_DB_*` (dedicated test database).
2. `composer install`
3. `composer test:setup`
4. `composer test`

`CRAFT_BASE_PATH` is this plugin root. Runtime Craft paths live under `tests/_craft/` (gitignored except `config/app.php` + `config/db.php`).
