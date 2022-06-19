<?php
namespace verbb\tablemaker\migrations;

use verbb\tablemaker\fields\TableMakerField;

use Craft;
use craft\db\Migration;
use craft\services\Plugins;

class m190412_182837_update_craft2_fieldtype extends Migration
{
    // Public Methods
    // =========================================================================

    public function safeUp()
    {
        echo "    > Updating Table Maker field type...\n";

        $this->update('{{%fields}}', [
            'type' => TableMakerField::class
        ], ['type' => 'TableMaker']);

        // For some reason from a Craft 2 site, the field settings have ended up on the plugin settings and this causes
        // an application warning log message to be raised as this plugin has no defined plugin settings model
        $projectConfig = Craft::$app->getProjectConfig();
        $plugins = $projectConfig->get(Plugins::CONFIG_PLUGINS_KEY) ?? [];

        if (isset($plugins['tablemaker']['settings'])) {
            $projectConfig->muteEvents = true;

            echo "    > Removing plugin settings key...\n";
            $projectConfig->remove('plugins.tablemaker.settings');

            $projectConfig->muteEvents = false;
        }

        return true;
    }

    public function safeDown()
    {
        echo "m190412_182837_tablemaker_update_fieldtype cannot be reverted.\n";
        return false;
    }
}