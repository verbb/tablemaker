<?php
namespace verbb\tablemaker\migrations;

use verbb\tablemaker\fields\TableMakerField;

use craft\db\Migration;

class m190412_182837_update_craft2_fieldtype extends Migration
{
    public function safeUp()
    {
        echo "    > Updating Table Maker field type...\n";

        $this->update('{{%fields}}', [
            'type' => TableMakerField::class
        ], ['type' => 'TableMaker']);

        return true;
    }

    public function safeDown()
    {
        echo "m190412_182837_tablemaker_update_fieldtype cannot be reverted.\n";
        return false;
    }
}