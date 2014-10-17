<?php
namespace Craft;

/**
 * UserTable by Supercool
 *
 * No settings right now - one day we might add some that
 * let you set max cols and max rows etc
 *
 * @package   UserTable
 * @author    Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link      http://www.supercooldesign.co.uk
 */

class UserTableFieldType extends BaseFieldType
{

	// Public Methods
	// =========================================================================

	/**
	 * @inheritDoc IComponentType::getName()
	 *
	 * @return string
	 */
	public function getName()
	{
		return Craft::t('User Table');
	}

	/**
	 * @inheritDoc IFieldType::defineContentAttribute()
	 *
	 * @return mixed
	 */
	public function defineContentAttribute()
	{
		return AttributeType::Mixed;
	}

	/**
	 * @inheritDoc IFieldType::getInputHtml()
	 *
	 * @param string $name
	 * @param mixed  $value
	 *
	 * @return string
	 */
	public function getInputHtml($name, $value)
	{

		// make input
		$input = '<input type="hidden" name="'.$name.'" value="'.$value.'">';

		// $value needs to give us these eventually
		if ( ! isset($columns) )
		{
			$columns = array('col1' => array('heading' => '', 'type' => 'singleline'));
		}

		if ( ! isset($rows) )
		{
			$rows = array('row1' => array());
		}


		$columnSettings = array(
			'heading' => array(
				'heading' => Craft::t('Column Heading'),
				'type' => 'singleline'
			)
		);



		// js needs to set up top field to add to bottom field

		craft()->templates->includeJsResource('usertable/js/usertable.js');

		craft()->templates->includeJs('new Craft.UserTable(' .
			'"'.craft()->templates->namespaceInputId('columns').'", ' .
			'"'.craft()->templates->namespaceInputId('rows').'", ' .
			'"'.craft()->templates->namespaceInputName('columns').'", ' .
			'"'.craft()->templates->namespaceInputName('rows').'", ' .
			JsonHelper::encode($columns).', ' .
			JsonHelper::encode($rows).', ' .
			JsonHelper::encode($columnSettings) .
		');');

		$columnsField = craft()->templates->renderMacro('_includes/forms', 'editableTableField', array(
			array(
				'label'        => Craft::t('Table Columns'),
				'instructions' => Craft::t('Define the columns your table should have.'),
				'id'           => 'columns',
				'name'         => 'columns',
				'cols'         => $columnSettings,
				'rows'         => $columns,
				'addRowLabel'  => Craft::t('Add a column'),
				'initJs'       => false
			)
		));

		$rowsField = craft()->templates->renderMacro('_includes/forms', 'editableTableField', array(
			array(
				'label'        => Craft::t('Table Content'),
				'instructions' => Craft::t('Input the content of your table.'),
				'id'           => 'rows',
				'name'         => 'rows',
				'cols'         => $columns,
				'rows'         => $rows,
				'initJs'       => false
			)
		));

		return $input . $columnsField . $rowsField;

	}


	// Protected Methods
	// =========================================================================

	/**
	 * @inheritDoc BaseSavableComponentType::defineSettings()
	 *
	 * @return array
	 */
	protected function defineSettings()
	{
		return array(
			'columns' => AttributeType::Mixed,
			'rows' => AttributeType::Mixed
		);
	}


}
