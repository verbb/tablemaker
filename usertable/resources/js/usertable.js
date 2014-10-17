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

  columnsTable: null,
  rowsTable: null,

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


    // set up columns table
    this.columnsTable = new Craft.EditableTable(this.columnsTableId, this.columnsTableName, this.columnSettings, {
      rowIdPrefix: 'col',
      onAddRow: $.proxy(this, 'onAddRow'),
      onDeleteRow: $.proxy(this, 'reconstructRowsTable')
    });

    this.bindColumnsTableTextChanges(this.columnsTable.$tbody);

    this.columnsTable.sorter.settings.onSortChange = $.proxy(this, 'reconstructRowsTable');


    // set up rows table
    this.rowsTable = new Craft.EditableTable(this.rowsTableId, this.rowsTableName, this.columns, {
      rowIdPrefix: 'row',
      onAddRow: $.proxy(this, 'makeDataBlob'),
      onDeleteRow: $.proxy(this, 'makeDataBlob')
    });

  },

  onAddRow: function($tr)
  {

    this.bindColumnsTableTextChanges($tr);
    this.reconstructRowsTable();

  },

  bindColumnsTableTextChanges: function($container)
  {

    var $textareas = $container.find('textarea');
    this.addListener($textareas, 'textchange', 'reconstructRowsTable');

  },

  reconstructRowsTable: function()
  {

    console.log('reconstructing rows table');

  },

  makeDataBlob: function()
  {
    console.log('make data blob');
  }

});


})(jQuery);
