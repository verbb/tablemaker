<?php
namespace verbb\tablemaker\web\assets\field;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

use verbb\base\assetbundles\CpAsset as VerbbCpAsset;

class TableMakerAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init(): void
    {
        // Vite manifest entries are registered via TableMaker::$plugin->getVite().
        $this->sourcePath = __DIR__ . '/dist/';

        $this->depends = [
            VerbbCpAsset::class,
            CpAsset::class,
        ];

        parent::init();
    }
}
