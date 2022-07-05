<?php
namespace verbb\tablemaker\migrations;

use verbb\tablemaker\fields\TableMakerField;

use Craft;
use craft\db\Migration;

class m190412_182837_update_craft2_fieldtype extends Migration
{
    // Public Methods
    // =========================================================================

    public function safeUp(): bool
    {
        $this->update('{{%fields}}', ['type' => TableMakerField::class], ['type' => 'TableMaker']);

        return true;
    }

    public function safeDown(): bool
    {
        echo "m190412_182837_tablemaker_update_fieldtype cannot be reverted.\n";
        return false;
    }
}