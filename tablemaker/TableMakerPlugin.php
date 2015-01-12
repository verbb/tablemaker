<?php
namespace Craft;

/**
 * TableMaker by Supercool
 *
 * @package	 TableMaker
 * @author		Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link			http://www.supercooldesign.co.uk
 */

class TableMakerPlugin extends BasePlugin
{

	public function getName()
	{
		return Craft::t('Table Maker');
	}

	public function getVersion()
	{
		return '1.0';
	}

	public function getDeveloper()
	{
		return 'Supercool';
	}

	public function getDeveloperUrl()
	{
		return 'http://plugins.supercooldesign.co.uk';
	}

}
