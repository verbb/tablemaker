<?php
namespace Craft;

/**
 * UserTable by Supercool
 *
 * @package   UserTable
 * @author    Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link      http://www.supercooldesign.co.uk
 */

class UserTablePlugin extends BasePlugin
{

  public function getName()
  {
    return Craft::t('User Table');
  }

  public function getVersion()
  {
    return '0.1';
  }

  public function getDeveloper()
  {
    return 'Supercool';
  }

  public function getDeveloperUrl()
  {
    return 'http://www.supercooldesign.co.uk';
  }

}
