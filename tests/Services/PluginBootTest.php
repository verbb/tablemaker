<?php

declare(strict_types=1);

use verbb\tablemaker\TableMaker;

describe('Table Maker plugin boot', function() {
    it('installs and exposes the plugin instance', function() {
        expect(TableMaker::$plugin)->not->toBeNull();
        expect(Craft::$app->plugins->isPluginEnabled('tablemaker'))->toBeTrue();
    });
});
