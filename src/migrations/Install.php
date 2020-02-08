<?php
namespace supercool\tablemaker\migrations;

use Craft;
use craft\db\Migration;
use craft\db\Query;

class Install extends Migration
{
    public function safeUp()
    {
        if ($this->_upgradeFromCraft2()) {
            return;
        }
    }

    private function _upgradeFromCraft2(): bool
    {
        $row = (new Query())
            ->select(['id', 'handle'])
            ->from(['{{%plugins}}'])
            ->where(['in', 'handle', ['table-maker', 'tablemaker']])
            ->one();

        if (!$row) {
            return false;
        }

        $projectConfig = Craft::$app->projectConfig;

        $oldKey = "plugins.{$row['handle']}";
        $newKey = 'plugins.tablemaker';
        $projectConfig->set($newKey, $projectConfig->get($oldKey));

        $this->delete('{{%plugins}}', ['id' => $row['id']]);
        $projectConfig->remove($oldKey);

        return true;
    }
}
