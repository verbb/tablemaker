<?php

declare(strict_types=1);

namespace Tests\Support;

use Craft;
use craft\elements\User;

/**
 * Logged-in non-admin identity for CP gate negatives.
 *
 * Unsaved Craft users can report `can($permission) === true` in console installs,
 * so this identity forces denials while remaining a valid User model.
 */
final class NonAdminUser
{
    private static ?User $user = null;

    public static function login(): User
    {
        $user = self::identity();
        Craft::$app->getUser()->setIdentity($user);

        return $user;
    }

    public static function identity(): User
    {
        if (self::$user) {
            return self::$user;
        }

        $user = new class extends User {
            public function can($permission): bool
            {
                // Never grant CP permissions — admin gates still use $this->admin.
                return false;
            }
        };
        $user->username = 'test-editor';
        $user->email = 'test-editor@example.test';
        $user->admin = false;

        return self::$user = $user;
    }
}
