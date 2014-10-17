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
  columns: null,
  rows: null,
  columnSettings: null,

  $columnsTable: null,
  $rowsTable: null,

  init: function(columnsTableId, rowsTableId, columns, rows, columnSettings)
  {

    this.columnsTableId = columnsTableId;
    this.rowsTableId = rowsTableId;

    this.$columnsTable = $('#'+this.columnsTableId);
    this.$rowsTable = $('#'+this.rowsTableId);


    console.log('Woah.');

  }

});


})(jQuery);
