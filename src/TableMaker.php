<?php

/**
 * Table Maker plugin for Craft CMS 3.x
 *
 * A user-definable table field type for Craft CMS
 *
 * @link      http://www.supercooldesign.co.uk/
 * @copyright Copyright (c) 2018 Supercool Ltd
 */

namespace supercool\tablemaker;


use Craft;
use craft\base\Plugin;
use craft\services\Plugins;
use craft\events\PluginEvent;
use craft\services\Fields;
use craft\events\RegisterComponentTypesEvent;

use supercool\tablemaker\fields\TableMakerField;

use yii\base\Event;

/**
 * @author    Supercool Ltd
 * @package   TableMaker
 * @since     1.0.0
 */

class TableMaker extends Plugin
{
    // Static Properties
    // =========================================================================

    public static $plugin;
    

    // Public Methods
    // =========================================================================

    public function init()
    {
        parent::init();
        self::$plugin = $this;

        // Register our fields
        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = TableMakerField::class;
            }
        );

    }

}
