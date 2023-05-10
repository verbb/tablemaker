<?php
namespace verbb\tablemaker;

use verbb\tablemaker\base\PluginTrait;
use verbb\tablemaker\fields\TableMakerField;

use craft\base\Plugin;
use craft\services\Fields;
use craft\events\RegisterComponentTypesEvent;

use yii\base\Event;

class TableMaker extends Plugin
{
    // Properties
    // =========================================================================
    
    public string $schemaVersion = '3.0.0';
    public string $minVersionRequired = '3.0.0';


    // Traits
    // =========================================================================

    use PluginTrait;


    // Public Methods
    // =========================================================================

    public function init()
    {
        parent::init();

        self::$plugin = $this;

        $this->_setPluginComponents();
        $this->_setLogging();
        $this->_registerFieldTypes();
    }


    // Private Methods
    // =========================================================================

    private function _registerFieldTypes()
    {
        Event::on(Fields::class, Fields::EVENT_REGISTER_FIELD_TYPES, function(RegisterComponentTypesEvent $event) {
            $event->types[] = TableMakerField::class;
        });
    }

}
