<?php

use craft\helpers\App;
use craft\mutex\NullMutex;

return [
    'id' => App::env('CRAFT_APP_ID') ?: 'CraftCMS-TableMakerTests',
    'components' => [
        'mutex' => [
            'mutex' => NullMutex::class,
        ],
        'projectConfig' => function() {
            $config = craft\helpers\App::projectConfigConfig();
            $config['writeYamlAutomatically'] = false;

            return Craft::createObject($config);
        },
    ],
];
