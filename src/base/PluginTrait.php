<?php
namespace verbb\tablemaker\base;

use verbb\tablemaker\TableMaker;

use Craft;

use yii\log\Logger;

use verbb\base\BaseHelper;

trait PluginTrait
{
    // Static Properties
    // =========================================================================

    public static TableMaker $plugin;


    // Public Methods
    // =========================================================================

    public static function log($message, $attributes = []): void
    {
        if ($attributes) {
            $message = Craft::t('tablemaker', $message, $attributes);
        }

        Craft::getLogger()->log($message, Logger::LEVEL_INFO, 'tablemaker');
    }

    public static function error($message, $attributes = []): void
    {
        if ($attributes) {
            $message = Craft::t('tablemaker', $message, $attributes);
        }

        Craft::getLogger()->log($message, Logger::LEVEL_ERROR, 'tablemaker');
    }


    // Private Methods
    // =========================================================================

    private function _setPluginComponents()
    {
        BaseHelper::registerModule();
    }

    private function _setLogging()
    {
        BaseHelper::setFileLogging('tablemaker');
    }

}