<?php
namespace verbb\tablemaker\base;

use verbb\tablemaker\TableMaker;

use verbb\base\LogTrait;
use verbb\base\helpers\Plugin;

trait PluginTrait
{
    // Properties
    // =========================================================================

    public static ?TableMaker $plugin = null;


    // Traits
    // =========================================================================

    use LogTrait;
    

    // Static Methods
    // =========================================================================

    public static function config(): array
    {
        Plugin::bootstrapPlugin('tablemaker');

        return [];
    }

}