<?php
namespace verbb\tablemaker\base;

use verbb\tablemaker\TableMaker;
use verbb\tablemaker\web\assets\field\TableMakerAsset;

use verbb\base\LogTrait;
use verbb\base\helpers\Plugin;

use craft\helpers\App;

use nystudio107\pluginvite\services\VitePluginService;

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

        return [
            'components' => [
                'vite' => [
                    'class' => VitePluginService::class,
                    'assetClass' => TableMakerAsset::class,
                    'useDevServer' => App::parseBooleanEnv('$TABLEMAKER_USE_VITE_DEV_SERVER') ?? false,
                    'devServerPublic' => 'http://localhost:4045/',
                    'errorEntry' => 'field/src/js/tablemaker.ts',
                    'cacheKeySuffix' => '',
                    'devServerInternal' => 'http://localhost:4045/',
                    'checkDevServer' => true,
                    'includeReactRefreshShim' => false,
                ],
            ],
        ];
    }


    // Public Methods
    // =========================================================================

    public function getVite(): VitePluginService
    {
        return $this->get('vite');
    }

}
