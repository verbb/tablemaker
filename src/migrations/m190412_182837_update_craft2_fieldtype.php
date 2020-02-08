<?php

namespace craft\contentmigrations;

use craft\db\Migration;
use supercool\tablemaker\fields\TableMakerField;

/**
 * m190412_182837_update_craft2_fieldtype migration.
 *
 * Updates previous TableMaker fields from Craft 2
 *
 */
class m190412_182837_update_craft2_fieldtype extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        echo "    > Updating Table Maker field type...\n";

        $this->update('{{%fields}}', [
            'type' => TableMakerField::class
        ], ['type' => 'TableMaker']);

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m190412_182837_tablemaker_update_fieldtype cannot be reverted.\n";
        return false;
    }
}
