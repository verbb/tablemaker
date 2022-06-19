<?php
namespace verbb\tablemaker\base;

use verbb\cloner\Cloner;

use Craft;

use yii\log\Logger;

use verbb\base\BaseHelper;

trait PluginTrait
{
    // Static Properties
    // =========================================================================

    public static $plugin;


    // Public Methods
    // =========================================================================

    public static function log($message, $attributes = [])
    {
        if ($attributes) {
            $message = Craft::t('tablemaker', $message, $attributes);
        }

        Craft::getLogger()->log($message, Logger::LEVEL_INFO, 'tablemaker');
    }

    public static function error($message, $attributes = [])
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