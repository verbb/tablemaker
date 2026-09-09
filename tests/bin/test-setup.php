<?php

declare(strict_types=1);

use craft\enums\CmsEdition;
use yii\console\ExitCode;

$pluginRoot = dirname(__DIR__, 2);
$envExample = $pluginRoot . '/.env.testing.example';
$envFile = $pluginRoot . '/.env.testing';

if (!file_exists($envFile) && file_exists($envExample)) {
    copy($envExample, $envFile);
    fwrite(STDOUT, "Created .env.testing from .env.testing.example.\n");
}

require dirname(__DIR__) . '/bootstrap.php';

try {
    $app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
} catch (Throwable $e) {
    fwrite(STDERR, "Craft bootstrap failed: {$e->getMessage()}\n");
    exit(ExitCode::UNSPECIFIED_ERROR);
}

if ((getenv('ENVIRONMENT') ?: '') !== 'testing') {
    fwrite(STDERR, "Refusing setup outside ENVIRONMENT=testing.\n");
    exit(ExitCode::UNSPECIFIED_ERROR);
}

$runAction = static function(string $route, array $params = []) use ($app): int {
    return (int)$app->runAction($route, $params);
};

$driver = getenv('CRAFT_DB_DRIVER') ?: 'mysql';
$server = getenv('CRAFT_DB_SERVER') ?: '127.0.0.1';
$port = getenv('CRAFT_DB_PORT') ?: ($driver === 'pgsql' ? '5432' : '3306');
$database = getenv('CRAFT_DB_DATABASE') ?: 'tablemaker_test';
$user = getenv('CRAFT_DB_USER') ?: 'root';
$password = getenv('CRAFT_DB_PASSWORD');
$password = $password !== false ? $password : '';
$schema = getenv('CRAFT_DB_SCHEMA') ?: 'public';
$tablePrefix = getenv('CRAFT_DB_TABLE_PREFIX') ?: '';
$unixSocket = getenv('CRAFT_DB_UNIX_SOCKET') ?: '';

$ensureDatabaseExists = static function() use ($driver, $server, $port, $database, $user, $password, $unixSocket): void {
    if ($driver === 'mysql') {
        $dsn = $unixSocket !== ''
            ? "mysql:unix_socket={$unixSocket}"
            : "mysql:host={$server};port={$port}";
    } elseif ($driver === 'pgsql') {
        $dsn = "pgsql:host={$server};port={$port}";
    } else {
        return;
    }

    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    if ($driver === 'mysql') {
        $pdo->exec('CREATE DATABASE IF NOT EXISTS `' . str_replace('`', '``', $database) . '` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
    } elseif ($driver === 'pgsql') {
        $exists = (bool)$pdo->query("SELECT 1 FROM pg_database WHERE datname = " . $pdo->quote($database))->fetchColumn();
        if (!$exists) {
            $pdo->exec('CREATE DATABASE ' . $pdo->quote($database));
        }
    }
};

try {
    $ensureDatabaseExists();
    fwrite(STDOUT, "Ensured database `{$database}` exists.\n");
} catch (Throwable $e) {
    fwrite(STDERR, "Failed ensuring database exists: {$e->getMessage()}\n");
    exit(ExitCode::UNSPECIFIED_ERROR);
}

if ($unixSocket !== '' && $driver === 'mysql') {
    fwrite(STDOUT, "Detected CRAFT_DB_UNIX_SOCKET; skipping `craft setup/db` and relying on .env.testing values.\n");
} else {
    $dbExit = $runAction('setup/db', [
        'interactive' => 0,
        'driver' => $driver,
        'server' => $server,
        'port' => $port,
        'database' => $database,
        'user' => $user,
        'password' => $password,
        'schema' => $schema,
        'tablePrefix' => $tablePrefix,
    ]);

    if ($dbExit !== ExitCode::OK) {
        fwrite(STDERR, "Database setup failed. Check `.env.testing` CRAFT_DB_* values.\n");
        exit($dbExit);
    }
}

try {
    $db = Craft::$app->getDb();
    $db->open();
} catch (Throwable $e) {
    fwrite(STDERR, "Database connectivity preflight failed: {$e->getMessage()}\n");
    exit(ExitCode::UNSPECIFIED_ERROR);
}

$tableNames = $db->getSchema()->getTableNames();

if ($tableNames) {
    fwrite(STDOUT, "Dropping " . count($tableNames) . " existing tables...\n");
}

try {
    if ($db->driverName === 'mysql') {
        $db->createCommand('SET FOREIGN_KEY_CHECKS = 0')->execute();
    } elseif ($db->driverName === 'sqlite') {
        $db->createCommand('PRAGMA foreign_keys = OFF')->execute();
    }

    foreach ($tableNames as $tableName) {
        $db->createCommand()->dropTable($tableName)->execute();
    }
} catch (Throwable $e) {
    fwrite(STDERR, "Failed dropping existing tables: {$e->getMessage()}\n");
    exit(ExitCode::UNSPECIFIED_ERROR);
} finally {
    try {
        if ($db->driverName === 'mysql') {
            $db->createCommand('SET FOREIGN_KEY_CHECKS = 1')->execute();
        } elseif ($db->driverName === 'sqlite') {
            $db->createCommand('PRAGMA foreign_keys = ON')->execute();
        }
    } catch (Throwable) {
    }
}

$siteUrl = getenv('PRIMARY_SITE_URL') ?: 'https://tablemaker-test.test';
$installExit = $runAction('install/craft', [
    'interactive' => 0,
    'username' => 'admin',
    'email' => 'admin@example.test',
    'password' => 'password123',
    'siteName' => 'Table Maker Test',
    'siteUrl' => $siteUrl,
    'language' => 'en-US',
]);

if ($installExit !== ExitCode::OK) {
    fwrite(STDERR, "Craft install failed. Verify DB connectivity and rerun `composer test:setup`.\n");
    exit($installExit);
}

$checkExit = $runAction('install/check');
if ($checkExit !== ExitCode::OK) {
    fwrite(STDERR, "Install finished without a healthy install state. Inspect the console output above.\n");
    exit(ExitCode::UNSPECIFIED_ERROR);
}

Craft::$app->setEdition(CmsEdition::Pro);

fwrite(STDOUT, "Test setup complete. You can now run `composer test`.\n");
exit(ExitCode::OK);
