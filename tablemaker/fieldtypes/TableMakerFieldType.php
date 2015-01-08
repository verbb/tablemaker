<?php
namespace Craft;

/**
 * TableMaker by Supercool
 *
 * This bears an un-canny resemblence to the normal Table FieldType.
 * The code is mostly the same, just twiddled with a bit.
 *
 * These options should be added to the columns table:
 * - width
 * - alignment
 *
 * There are no settings right now - one day we might add some that
 * let you set max cols / rows or somesuch excitement.
 *
 * @package	 	TableMaker
 * @author		Josh Angell
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @link			http://www.supercooldesign.co.uk
 */

class TableMakerFieldType extends BaseFieldType
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
		return Craft::t('Table Maker');
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
	 * @param mixed	$value
	 *
	 * @return string
	 */
	public function getInputHtml($name, $value)
	{

		// make input
		$input = '<input class="table-maker-field" type="hidden" name="'.$name.'" value="">';
		// TODO: this needs the value from the db


		// $value needs to give us these with col types
		// $columns = $value['columns'];
		// $rows = $value['rows'];
		echo "<pre>";
		print_r($value);
		echo "</pre>";
		// JsonHelper::encode($value)


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

		craft()->templates->includeJsResource('tablemaker/js/tablemaker.js');

		craft()->templates->includeJs('new Craft.TableMaker(' .
			'"'.craft()->templates->namespaceInputId($name).'", ' .
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
				'label'				=> Craft::t('Table Columns'),
				'instructions' => Craft::t('Define the columns your table should have.'),
				'id'					 => 'columns',
				'name'				 => 'columns',
				'cols'				 => $columnSettings,
				'rows'				 => $columns,
				'addRowLabel'	=> Craft::t('Add a column'),
				'initJs'			 => false
			)
		));

		$rowsField = craft()->templates->renderMacro('_includes/forms', 'editableTableField', array(
			array(
				'label'				=> Craft::t('Table Content'),
				'instructions' => Craft::t('Input the content of your table.'),
				'id'					 => 'rows',
				'name'				 => 'rows',
				'cols'				 => $columns,
				'rows'				 => $rows,
				'initJs'			 => false
			)
		));

		return $input . $columnsField . $rowsField;

	}

	/**
	 * @inheritDoc IFieldType::prepValueFromPost()
	 *
	 * @param mixed $value
	 *
	 * @return mixed
	 */
	public function prepValueFromPost($value)
	{

		$value = JsonHelper::decode($value);

		if ( is_array($value['rows']) )
		{

			// drop keys from the rows array
			$value['rows'] = array_values($value['rows']);

			// drop each rows content array keys
			foreach ($value['rows'] as &$rowArray)
			{

				if ( is_array($rowArray) )
				{

					$rowArray = array_values($rowArray);

				}

			}

		}


		// drop keys from the columns array
		if ( is_array($value['columns']) )
		{

			$value['columns'] = array_values($value['columns']);

		}

		return JsonHelper::encode($value);

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
