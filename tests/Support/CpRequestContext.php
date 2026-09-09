<?php

declare(strict_types=1);

namespace Tests\Support;

use Craft;
use craft\web\Request as WebRequest;
use craft\web\Response as WebResponse;

/**
 * Swap the console app request/response for Craft web components suitable for CP controller gates.
 */
final class CpRequestContext
{
    public static function activate(string $path = 'dashboard', string $method = 'POST', bool $cp = true): void
    {
        $webRoot = rtrim((string)CRAFT_WEB_ROOT, '/');
        $script = $webRoot . '/index.php';

        if (!is_dir($webRoot)) {
            mkdir($webRoot, 0775, true);
        }

        if (!is_file($script)) {
            file_put_contents($script, "<?php\n// Test web front controller stub.\n");
        }

        $_SERVER['HTTP_HOST'] = 'cp-test.test';
        $_SERVER['HTTPS'] = 'on';
        $_SERVER['REQUEST_URI'] = '/' . ltrim($path, '/');
        $_SERVER['REQUEST_METHOD'] = strtoupper($method);
        $_SERVER['SCRIPT_NAME'] = '/index.php';
        $_SERVER['SCRIPT_FILENAME'] = $script;
        $_SERVER['PHP_SELF'] = '/index.php';
        $_SERVER['PATH_INFO'] = '/' . ltrim($path, '/');
        $_SERVER['DOCUMENT_ROOT'] = $webRoot;

        $securityKey = (string)(Craft::$app->getConfig()->getGeneral()->securityKey ?: 'testing-security-key');

        /** @var WebRequest $request */
        $request = Craft::createObject([
            'class' => WebRequest::class,
            'isConsoleRequest' => false,
            'cookieValidationKey' => $securityKey,
        ]);
        $request->setIsCpRequest($cp);
        $request->setPathInfo(ltrim($path, '/'));
        Craft::$app->set('request', $request);

        if (!(Craft::$app->get('response', false) instanceof WebResponse)) {
            Craft::$app->set('response', Craft::createObject(WebResponse::class));
        }
    }
}
