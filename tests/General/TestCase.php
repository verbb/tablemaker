<?php

declare(strict_types=1);

namespace Tests\General;

use Craft;
use PHPUnit\Framework\TestCase as BaseTestCase;
use RuntimeException;

abstract class TestCase extends BaseTestCase
{
    private mixed $previousRequest = null;
    private mixed $previousResponse = null;
    private mixed $previousUser = null;
    private mixed $previousIdentity = null;
    private array $previousServer = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->ensureCraftBootstrapped();
        $this->previousRequest = Craft::$app->get('request', false);
        $this->previousResponse = Craft::$app->get('response', false);
        $this->previousUser = Craft::$app->get('user', false);
        $this->previousIdentity = Craft::$app->getUser()->getIdentity();
        $this->previousServer = $_SERVER;
    }

    protected function tearDown(): void
    {
        try {
            Craft::$app->set('request', $this->previousRequest);
            Craft::$app->set('response', $this->previousResponse);
            Craft::$app->set('user', $this->previousUser);
            Craft::$app->getUser()->setIdentity($this->previousIdentity);
            $_SERVER = $this->previousServer;
        } finally {
            parent::tearDown();
        }
    }

    protected function ensureCraftBootstrapped(): void
    {
        if (!class_exists(Craft::class) || !Craft::$app) {
            throw new RuntimeException('Craft application must be bootstrapped before running integration tests.');
        }
    }
}
