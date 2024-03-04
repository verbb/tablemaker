// ==========================================================================

// Table Maker Plugin for Craft CMS
// Author: Verbb - https://verbb.io/

// ==========================================================================

(function($) {

Craft.TableMaker = Garnish.Base.extend({
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

    init: function(fieldId, columnsTableId, rowsTableId, columnsTableName, rowsTableName, columns, rows, columnSettings, dropdownSettingsHtml, dropdownSettingsCols) {
        this.columnsTableId = columnsTableId;
        this.rowsTableId = rowsTableId;

        this.columnsTableName = columnsTableName;
        this.rowsTableName = rowsTableName;

        this.columnsTableInputPath = this.columnsTableName.replace(/]/g, '').split('[');
        this.rowsTableInputPath = this.rowsTableName.replace(/]/g, '').split('[');

        this.columns = columns;
        this.rows = rows;

        this.columnSettings = columnSettings;
        this.fieldId = fieldId

        this.dropdownSettingsHtml = dropdownSettingsHtml;
        this.dropdownSettingsCols = dropdownSettingsCols;

        this.$columnsTable = $('#' + this.columnsTableId);
        this.$rowsTable = $('#' + this.rowsTableId);
        this.$input = $('#' + fieldId + '-field').find('input.table-maker-field');

        //load columnOptions
        this.columnOptions = [];

        for (var colKey in columns) {
            if (columns[colKey].type === 'select' && columns[colKey].hasOwnProperty('options')) {
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

    onColumnsAddRow: function() {
        this.bindColumnsTableChanges();
        this.reconstructRowsTable();
    },

    onRowsAddRow: function() {
        this.bindRowsTableTextChanges();
        this.makeDataBlob();
    },

    bindColumnsTableChanges: function() {
        // text changes
        var $textareas = this.columnsTable.$tbody.find('textarea');
        this.removeListener($textareas, 'textchange');
        
        this.addListener($textareas, 'textchange', $.debounce(250, function(e) {
            this.reconstructRowsTable(e);
        }));

        // select changes
        var $selects = this.columnsTable.$tbody.find('select');
        this.removeListener($selects, 'change');

        this.addListener($selects, 'change', $.debounce(250, function(e) {
            this.reconstructRowsTable(e);
        }));
    },

    bindRowsTableTextChanges: function() {
        // console.log('bindRowsTableTextChanges')
        var $textareas = this.rowsTable.$tbody.find('textarea');
        this.removeListener($textareas, 'textchange');

        this.addListener($textareas, 'textchange', $.debounce(250, function(e) {
            this.makeDataBlob(e);
        }));
    },

    initColumnsTable: function() {
        this.columnsTable = new ColumnTable(this, this.columnsTableId, this.columnsTableName, this.columnSettings, {
            rowIdPrefix: 'col',
            defaultValues: {
                type: 'singleline'
            },
            allowAdd: true,
            allowDelete: true,
            allowReorder: true,
            onAddRow: $.proxy(this, 'onColumnsAddRow'),
            onDeleteRow: $.proxy(this, 'reconstructRowsTable'),
        });

        this.bindColumnsTableChanges();

        this.columnsTable.sorter.settings.onSortChange = $.proxy(this, 'reconstructRowsTable');
    },

    initRowsTable: function(columns) {
        this.rowsTable = new Craft.EditableTable(this.rowsTableId, this.rowsTableName, this.columns, {
            rowIdPrefix: 'row',
            allowAdd: true,
            allowDelete: true,
            allowReorder: true,
            onAddRow: $.proxy(this, 'onRowsAddRow'),
            onDeleteRow: $.proxy(this, 'makeDataBlob'),
        });

        this.bindRowsTableTextChanges();

        this.rowsTable.sorter.settings.onSortChange = $.proxy(this, 'makeDataBlob');
    },

    reconstructRowsTable: function() {
        this.getDataFromTables();

        // prep table
        var tableHtml = '<thead>' +
             '<tr>';

        // re-do columns of rowsTable
        for (var colId in this.columns) {
            tableHtml += '<th scope="col" class="header">'+(this.columns[colId].heading ? this.columns[colId].heading : '&nbsp;') + '</th>';
        }

        tableHtml += '<th class="header" colspan="2"></th>' +
             '</tr>' +
         '</thead>';

        var $table = $('<table/>', {
            id: this.rowsTableId,
            'class': 'editable fullwidth',
        }).append(tableHtml);

        var $tbody = $('<tbody/>').appendTo($table);

        // merge in the current rows content
        for (var rowId in this.rows) {
            if (!this.rows.hasOwnProperty(rowId)) {
                continue;
            }

            Craft.EditableTable.createRow(rowId, this.columns, this.rowsTableName, this.rows[rowId],
        true, true).appendTo($tbody);
        }

        this.rowsTable.$table.replaceWith($table);
        this.rowsTable.destroy();
        delete this.rowsTable;
        this.initRowsTable(this.columns);
        this.makeDataBlob();
    },

    getDataFromTables: function() {
        // get data out from the tables
        var columns = Craft.expandPostArray(Garnish.getPostData(this.columnsTable.$tbody));
        var rows = Craft.expandPostArray(Garnish.getPostData(this.rowsTable.$tbody));

        // travel down the input paths to find where the data we’re interested in actually is
        if (!$.isEmptyObject(columns)) {
            for (var i = 0; i < this.columnsTableInputPath.length; i++) {
                var key = this.columnsTableInputPath[i];
                columns = columns[key];
            }
        }

        //add in options for dropdowns
        for (var colKey in this.columnOptions) {
            if (columns[colKey]) {
                columns[colKey].options = this.columnOptions[colKey];
            }
        }

        this.columns = columns;

        if (!$.isEmptyObject(rows)) {
            for (var i = 0; i < this.rowsTableInputPath.length; i++) {
                var key = this.rowsTableInputPath[i];
                rows = rows[key];
            }
        }

        //convert date cells JS date object
        var dateColIds = [];

        for (var colKey in this.columns) {
            if (this.columns[colKey].type === 'date' || this.columns[colKey].type === 'time') {
                dateColIds.push(colKey);
            }
        }
        
        if (dateColIds.length) {
            for (var rowKey in rows) {
                for (var i = 0; i < dateColIds.length; i++) {
                    var dateArray = rows[rowKey][dateColIds[i]];
                    var date = new Date(dateArray.date); //add check for time
                    rows[rowKey][dateColIds[i]] = date;
                }
            }
        }

        this.rows = rows;
    },

    makeDataBlob: function() {
        this.getDataFromTables();

        var dataBlob = {
            'columns' : this.columns,
            'rows' : this.rows
        };

        this.$input.val(JSON.stringify(dataBlob));
    },
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
                'data-icon': 'settings',
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
            name: this.table.fieldSettings.columnsTableName + '[' + this.id + '][options]',
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
        var s = this;

        if (!this.settingsModal) {
            var id = 'dropdownsettingsmodal' + Math.floor(Math.random() * 1000000);
            var $modal = $('<div/>', {'class': 'modal dropdownsettingsmodal'}).appendTo(Garnish.$bod);
            
            var $body = $('<div/>', {'class': 'body'})
                .appendTo($modal)
                .html(this.table.fieldSettings.dropdownSettingsHtml.replace(/__ID__/g, id));

            this.optionsTable = new Craft.EditableTable(id, '__NAME__', this.table.fieldSettings.dropdownSettingsCols, {
                allowAdd: true,
                allowDelete: true,
                allowReorder: true,
                onAddRow: this.handleOptionsRowChange.bind(this),
                onDeleteRow: this.handleOptionsRowChange.bind(this)
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

            var $closeButton = $('<button/>', {
                type: 'button',
                class: 'btn submit',
                text: Craft.t('app', 'Done'),
            }).appendTo($body);

            this.settingsModal = new Garnish.Modal($modal, {
                onHide: this.handleSettingsModalHide.bind(this)
            });

            this.addListener($closeButton, 'click', function() {
                this.settingsModal.hide();
            });
        } else {
            this.settingsModal.show();
        }

        setTimeout((function() {
            s.optionsTable.$tbody.find('textarea').first().trigger('focus');
        }), 100)
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
                default: $row.find('.option-default input[type=checkbox]').prop('checked'),
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

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

})(jQuery);
