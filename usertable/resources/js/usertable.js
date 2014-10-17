/**
 * @author    Supercool Ltd <josh@supercooldesign.co.uk>
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @see       http://supercooldesign.co.uk
 */

(function($){


/**
 * UserTable Class
 */
Craft.UserTable = Garnish.Base.extend(
{

  columnsTableId: null,
  rowsTableId: null,
  columnsTableName: null,
  rowsTableName: null,
  columns: null,
  rows: null,
  columnSettings: null,

  $columnsTable: null,
  $rowsTable: null,

  init: function(columnsTableId, rowsTableId, columnsTableName, rowsTableName, columns, rows, columnSettings)
  {

    this.columnsTableId = columnsTableId;
    this.rowsTableId = rowsTableId;
    this.columnsTableName = columnsTableName;
    this.rowsTableName = rowsTableName;
    this.columns = columns;
    this.rows = rows;
    this.columnSettings = columnSettings;

    this.$columnsTable = $('#'+this.columnsTableId);
    this.$rowsTable = $('#'+this.rowsTableId);


    console.log('Woah.');

    var columnsTable = new Craft.EditableTable(this.columnsTableId, this.columnsTableName, this.columns, {
      onAddRow: $.proxy(this, 'bindTextChanges'),
      onDeleteRow: $.proxy(this, 'reconstructRows')
    });

    // this.bindTextchanges({
    //   tableId: '".$id."',
    //   fieldHandle: '".$field->handle."'
    // });
    //
    columnsTable.sorter.settings.onSortChange = $.proxy(this, 'reconstructRows');

  },

  bindTextChanges: function()
  {

  },

  reconstructRows: function()
  {

  }

});


})(jQuery);
