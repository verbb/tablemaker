/**
 * Table Maker plugin for Craft CMS
 *
 *  Field JS
 *
 * @author    Supercool Ltd
 * @copyright Copyright (c) 2018 Supercool Ltd
 * @link      http://www.supercooldesign.co.uk/
 * @package   TableMaker
 * @since     1.0.0TableMaker
 */

 ;(function ( $, window, document, undefined ) {

    var pluginName = "TableMaker",
        defaults = {
        };

    // Plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function(id) {
            var _this = this;

            $(function () {

/* -- _this.options gives us access to the $jsonVars that our FieldType passed down to us */

            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };



/**
 * TableMaker Class
 *
 * An awful lot of this is taken directly from TableFieldsSettings.js
 */
Craft.TableMaker = Garnish.Base.extend(
{

    columnsTableId: null,
    rowsTableId: null,
    columnsTableName: null,
    rowsTableName: null,
    columnsTableInputPath: null,
    rowsTableInputPath: null,
    columns: null,
    rows: null,
    columnSettings: null,
    columnOptions: null,
    fieldId: null,

    columnsTable: null,
    rowsTable: null,

    dropdownSettingsHtml: null,
    dropdownSettingsCols: null,

    $columnsTable: null,
    $rowsTable: null,
    $input: null,

    init: function(fieldId, columnsTableId, rowsTableId, columnsTableName, rowsTableName, columns, rows, columnSettings, dropdownSettingsHtml, dropdownSettingsCols)
    {

        this.columnsTableId = columnsTableId;
        this.rowsTableId = rowsTableId;

        this.columnsTableName = columnsTableName;
        this.rowsTableName = rowsTableName;

        this.columnsTableInputPath = this.columnsTableId.split('-');
        this.rowsTableInputPath = this.rowsTableId.split('-');

        this.columns = columns;
        this.rows = rows;

        this.columnSettings = columnSettings;
        this.fieldId = fieldId


        this.dropdownSettingsHtml = dropdownSettingsHtml;
        this.dropdownSettingsCols = dropdownSettingsCols;


        this.$columnsTable = $('#'+this.columnsTableId);
        this.$rowsTable = $('#'+this.rowsTableId);
        this.$input = $('#'+fieldId+'-field').find('input.table-maker-field');

        //load columnOptions
        this.columnOptions = [];
        for(var colKey in columns)
        {
            if(columns[colKey].type === 'select' && columns[colKey].hasOwnProperty('options'))
            {
                this.columnOptions[colKey] = columns[colKey].options;
            }
        }


        // set up columns table
        this.initColumnsTable();

        // set up rows table
        this.initRowsTable();

        // make the data blob
        this.makeDataBlob();

    },

    onColumnsAddRow: function()
    {

        this.bindColumnsTableChanges();
        this.reconstructRowsTable();

    },

    onRowsAddRow: function()
    {

        this.bindRowsTableTextChanges();
        this.makeDataBlob();

    },

    bindColumnsTableChanges: function()
    {

        // text changes
        var $textareas = this.columnsTable.$tbody.find('textarea');
        this.addListener($textareas, 'textchange', 'reconstructRowsTable');

        // select changes
        var $selects = this.columnsTable.$tbody.find('select');
        this.addListener($selects, 'change', 'reconstructRowsTable');

    },

    bindRowsTableTextChanges: function()
    {

        var $textareas = this.rowsTable.$tbody.find('textarea');
        this.addListener($textareas, 'textchange', 'makeDataBlob');

    },

    initColumnsTable: function()
    {

        this.columnsTable = new ColumnTable(this, this.columnsTableId, this.columnsTableName, this.columnSettings, {
            rowIdPrefix: 'col',
            defaultValues: {
                type: 'singleline'
            },
            onAddRow: $.proxy(this, 'onColumnsAddRow'),
            onDeleteRow: $.proxy(this, 'reconstructRowsTable')
        });

        this.bindColumnsTableChanges();

        this.columnsTable.sorter.settings.onSortChange = $.proxy(this, 'reconstructRowsTable');

    },

    initRowsTable: function()
    {

        this.rowsTable = new Craft.EditableTable(this.rowsTableId, this.rowsTableName, this.columns, {
            rowIdPrefix: 'row',
            onAddRow: $.proxy(this, 'onRowsAddRow'),
            onDeleteRow: $.proxy(this, 'makeDataBlob')
        });

        this.bindRowsTableTextChanges();

        this.rowsTable.sorter.settings.onSortChange = $.proxy(this, 'makeDataBlob');

    },

    reconstructRowsTable: function()
    {

        // get data
        this.getDataFromTables();

        // prep table
        var tableHtml = '<thead>' +
                 '<tr>';

        // re-do columns of rowsTable
        for (var colId in this.columns)
        {
            tableHtml += '<th scope="col" class="header">'+(this.columns[colId].heading ? this.columns[colId].heading : '&nbsp;')+'</th>';
        }

        tableHtml += '<th class="header" colspan="2"></th>' +
                 '</tr>' +
             '</thead>';

        var $table = $('<table/>', {
                id: this.rowsTableId,
                'class': 'editable shadow-box'
            }).append(tableHtml);

        var $tbody = $('<tbody/>').appendTo($table);

        // merge in the current rows content
        for (var rowId in this.rows)
        {
            if (!this.rows.hasOwnProperty(rowId)) {
                continue;
            }

            Craft.EditableTable.createRow(rowId, this.columns, this.rowsTableName, this.rows[rowId]).appendTo($tbody);
        }


        this.rowsTable.$table.replaceWith($table);
        this.rowsTable.destroy();
        delete this.rowsTable;
        this.initRowsTable(this.columns);
        this.makeDataBlob();
    },

    getDataFromTables: function()
    {

        // get data out from the tables
        var columns = Craft.expandPostArray(Garnish.getPostData(this.columnsTable.$tbody)),
                rows = Craft.expandPostArray(Garnish.getPostData(this.rowsTable.$tbody));

        // travel down the input paths to find where the data we’re interested in actually is

        if ( ! $.isEmptyObject(columns) )
        {

            for (var i = 0; i < this.columnsTableInputPath.length; i++)
            {
                var key = this.columnsTableInputPath[i];
                columns = columns[key];
            }

        }

        //add in options for dropdowns
        for(var colKey in this.columnOptions)
        {
            columns[colKey].options = this.columnOptions[colKey];
        }

        this.columns = columns;

        if ( ! $.isEmptyObject(rows) )
        {

            for (var i = 0; i < this.rowsTableInputPath.length; i++)
            {
                var key = this.rowsTableInputPath[i];
                rows = rows[key];
            }

        }

        //convert date cells JS date object
        var dateColIds = [];
        for(var colKey in this.columns)
        {
            if(this.columns[colKey].type === 'date' || this.columns[colKey].type === 'time') dateColIds.push(colKey);
        }
        if(dateColIds.length)
        {
            for(var rowKey in rows)
            {
                var row = rows[rowKey];
                for(var i = 0; i < dateColIds.length; i++)
                {
                    var dateArray = rows[rowKey][dateColIds[i]];
                    var date = new Date(dateArray.date); //add check for time
                    rows[rowKey][dateColIds[i]] = date;
                }
            }
        }

        this.rows = rows;

    },

    makeDataBlob: function()
    {

        // get data
        this.getDataFromTables();

        var dataBlob = {
            'columns' : this.columns,
            'rows' : this.rows
        };

        this.$input.val(JSON.stringify(dataBlob));
    }

});

var ColumnTable = Craft.EditableTable.extend({
    fieldSettings: null,

    init: function(fieldSettings, id, baseName, columns, settings) {
        this.fieldSettings = fieldSettings;
        this.base(id, baseName, columns, settings);
    },

    initialize: function() {
        if (!this.base()) {
            return false;
        }

        return true;
    },

    createRowObj: function($tr) {
        return new ColumnTable.Row(this, $tr);
    }
});

ColumnTable.Row = Craft.EditableTable.Row.extend({
    $typeSelect: null,
    $settingsBtn: null,

    options: [],
    settingsModal: null,
    optionsTable: null,
    optionsInput: null,

    init: function(table, tr) {
        this.base(table, tr);

        if (this.table.fieldSettings.columns[this.id]) {
            this.options = this.table.fieldSettings.columns[this.id].options || [];
        }

        var $typeCell = this.$tr.find('td:nth-child(4)');
        var $typeSelectContainer = $typeCell.find('.select');
        this.$settingsBtn = $typeCell.find('.settings');

        if (!this.$settingsBtn.length) {
            this.$settingsBtn = $('<a/>', {
                'class': 'settings light invisible',
                role: 'button',
                'data-icon': 'settings'
            });
            $('<div/>', {'class': 'flex flex-nowrap'})
                .appendTo($typeCell)
                .append($typeSelectContainer)
                .append(this.$settingsBtn);
        }

        this.$typeSelect = $typeSelectContainer.find('select');

        if (this.$typeSelect.val() === 'select') {
            this.$settingsBtn.removeClass('invisible');
        }
        this.optionsInput = $('<input/>', {
            type: 'hidden',
            name: this.table.fieldSettings.columnsTableName + '[' + this.id + '][options]'
        });
        this.optionsInput.appendTo(this.$tr.closest('form'));
        this.updateColumnDataWithOptions();

        this.addListener(this.$typeSelect, 'change', 'handleTypeChange');
        this.addListener(this.$settingsBtn, 'click', 'showSettingsModal');
    },

    deleteRow: function() {
        this.optionsInput.remove();
        this.optionsInput = null;
        delete this.table.fieldSettings.columnOptions[this.id];
        this.base();
    },

    handleTypeChange: function() {
        if (this.$typeSelect.val() === 'select') {
            this.$settingsBtn.removeClass('invisible');
        } else {
            this.$settingsBtn.addClass('invisible');
        }

        this.table.fieldSettings.reconstructRowsTable();
    },

    showSettingsModal: function(ev) {
        if (!this.settingsModal) {
            var id = 'dropdownsettingsmodal' + Math.floor(Math.random() * 1000000);
            var $modal = $('<div/>', {'class': 'modal dropdownsettingsmodal'}).appendTo(Garnish.$bod);
            var $body = $('<div/>', {'class': 'body'})
                .appendTo($modal)
                .html(this.table.fieldSettings.dropdownSettingsHtml.replace(/__ID__/g, id));

            this.optionsTable = new Craft.EditableTable(id, '__NAME__', this.table.fieldSettings.dropdownSettingsCols, {
                onAddRow: $.proxy(this, 'handleOptionsRowChange'),
                onDeleteRow: $.proxy(this, 'handleOptionsRowChange')
            });

            if (this.options && this.options.length) {
                var row;
                for (var i = 0; i < this.options.length; i++) {
                    row = this.optionsTable.addRow(false);
                    row.$tr.find('.option-label textarea').val(this.options[i].label);
                    row.$tr.find('.option-value textarea').val(this.options[i].value);
                    row.$tr.find('.option-default input[type="checkbox"]').prop('checked', !!this.options[i].default);
                }
            } else {
                this.optionsTable.addRow(false);
            }

            var $closeButton = $('<div/>', {
                'class': 'btn submit',
                role: 'button',
                text: Craft.t('app', 'Done')
            }).appendTo($body);

            this.settingsModal = new Garnish.Modal($modal, {
                onHide: $.proxy(this, 'handleSettingsModalHide')
            });

            this.addListener($closeButton, 'click', function() {
                this.settingsModal.hide();
            });
        } else {
            this.settingsModal.show();
        }

        setTimeout($.proxy(function() {
            this.optionsTable.$tbody.find('textarea').first().trigger('focus')
        }, this), 100);
    },

    handleOptionsRowChange: function() {
        if (this.settingsModal) {
            this.settingsModal.updateSizeAndPosition();
        }
    },

    handleSettingsModalHide: function() {
        this.options = [];
        var $rows = this.optionsTable.$table.find('tbody tr');
        for (var i = 0; i < $rows.length; i++) {
            let $row  = $rows.eq(i);
            this.options.push({
                label: $row.find('.option-label textarea').val(),
                value: $row.find('.option-value textarea').val(),
                default: $row.find('.option-default input[type=checkbox]').prop('checked')
            })
        }

        this.updateColumnDataWithOptions();

        this.table.fieldSettings.reconstructRowsTable();
    },

    updateColumnDataWithOptions: function() {
        this.table.fieldSettings.columnOptions[this.id] = this.options;
        this.optionsInput.val(JSON.stringify(this.options));
    },

});




})( jQuery, window, document );
