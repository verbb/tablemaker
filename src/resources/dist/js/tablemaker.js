!function($){Craft.TableMaker=Garnish.Base.extend({columnsTableId:null,rowsTableId:null,columnsTableName:null,rowsTableName:null,columnsTableInputPath:null,rowsTableInputPath:null,columns:null,rows:null,columnSettings:null,columnOptions:null,fieldId:null,columnsTable:null,rowsTable:null,dropdownSettingsHtml:null,dropdownSettingsCols:null,$columnsTable:null,$rowsTable:null,$input:null,init:function(t,e,s,i,n,o,l,a,h,d){for(var r in this.columnsTableId=e,this.rowsTableId=s,this.columnsTableName=i,this.rowsTableName=n,this.columnsTableInputPath=this.columnsTableName.replace(/]/g,"").split("["),this.rowsTableInputPath=this.rowsTableName.replace(/]/g,"").split("["),this.columns=o,this.rows=l,this.columnSettings=a,this.fieldId=t,this.dropdownSettingsHtml=h,this.dropdownSettingsCols=d,this.$columnsTable=$("#"+this.columnsTableId),this.$rowsTable=$("#"+this.rowsTableId),this.$input=$("#"+t+"-field").find("input.table-maker-field"),this.columnOptions=[],o)"select"===o[r].type&&o[r].hasOwnProperty("options")&&(this.columnOptions[r]=o[r].options);this.initColumnsTable(),this.initRowsTable(),this.makeDataBlob()},onColumnsAddRow:function(){this.bindColumnsTableChanges(),this.reconstructRowsTable()},onRowsAddRow:function(){this.bindRowsTableTextChanges(),this.makeDataBlob()},bindColumnsTableChanges:function(){var t=this.columnsTable.$tbody.find("textarea");this.removeListener(t,"textchange"),this.addListener(t,"textchange",$.debounce(250,(function(t){this.reconstructRowsTable(t)})));var e=this.columnsTable.$tbody.find("select");this.removeListener(e,"change"),this.addListener(e,"change",$.debounce(250,(function(t){this.reconstructRowsTable(t)})))},bindRowsTableTextChanges:function(){var t=this.rowsTable.$tbody.find("textarea");this.removeListener(t,"textchange"),this.addListener(t,"textchange",$.debounce(250,(function(t){this.makeDataBlob(t)})))},initColumnsTable:function(){this.columnsTable=new t(this,this.columnsTableId,this.columnsTableName,this.columnSettings,{rowIdPrefix:"col",defaultValues:{type:"singleline"},allowAdd:!0,allowDelete:!0,allowReorder:!0,onAddRow:$.proxy(this,"onColumnsAddRow"),onDeleteRow:$.proxy(this,"reconstructRowsTable")}),this.bindColumnsTableChanges(),this.columnsTable.sorter.settings.onSortChange=$.proxy(this,"reconstructRowsTable")},initRowsTable:function(t){this.rowsTable=new Craft.EditableTable(this.rowsTableId,this.rowsTableName,this.columns,{rowIdPrefix:"row",allowAdd:!0,allowDelete:!0,allowReorder:!0,onAddRow:$.proxy(this,"onRowsAddRow"),onDeleteRow:$.proxy(this,"makeDataBlob")}),this.bindRowsTableTextChanges(),this.rowsTable.sorter.settings.onSortChange=$.proxy(this,"makeDataBlob")},reconstructRowsTable:function(){this.getDataFromTables();var t="<thead><tr>";for(var e in this.columns)t+='<th scope="col" class="header">'+(this.columns[e].heading?this.columns[e].heading:"&nbsp;")+"</th>";t+='<th class="header" colspan="2"></th></tr></thead>';var s=$("<table/>",{id:this.rowsTableId,class:"editable fullwidth"}).append(t),i=$("<tbody/>").appendTo(s);for(var n in this.rows)this.rows.hasOwnProperty(n)&&Craft.EditableTable.createRow(n,this.columns,this.rowsTableName,this.rows[n]).appendTo(i);this.rowsTable.$table.replaceWith(s),this.rowsTable.destroy(),delete this.rowsTable,this.initRowsTable(this.columns),this.makeDataBlob()},getDataFromTables:function(){var t=Craft.expandPostArray(Garnish.getPostData(this.columnsTable.$tbody)),e=Craft.expandPostArray(Garnish.getPostData(this.rowsTable.$tbody));if(!$.isEmptyObject(t))for(var s=0;s<this.columnsTableInputPath.length;s++){var i;t=t[i=this.columnsTableInputPath[s]]}for(var n in this.columnOptions)t[n]&&(t[n].options=this.columnOptions[n]);if(this.columns=t,!$.isEmptyObject(e))for(var s=0;s<this.rowsTableInputPath.length;s++){var i;e=e[i=this.rowsTableInputPath[s]]}var o=[];for(var n in this.columns)"date"!==this.columns[n].type&&"time"!==this.columns[n].type||o.push(n);if(o.length)for(var l in e)for(var s=0;s<o.length;s++){var a=e[l][o[s]],h=new Date(a.date);e[l][o[s]]=h}this.rows=e},makeDataBlob:function(){this.getDataFromTables();var t={columns:this.columns,rows:this.rows};this.$input.val(JSON.stringify(t))}});var t=Craft.EditableTable.extend({fieldSettings:null,init:function(t,e,s,i,n){this.fieldSettings=t,this.base(e,s,i,n)},initialize:function(){return!!this.base()},createRowObj:function(e){return new t.Row(this,e)}});t.Row=Craft.EditableTable.Row.extend({$typeSelect:null,$settingsBtn:null,options:[],settingsModal:null,optionsTable:null,optionsInput:null,init:function(t,e){this.base(t,e),this.table.fieldSettings.columns[this.id]&&(this.options=this.table.fieldSettings.columns[this.id].options||[]);var s=this.$tr.find("td:nth-child(4)"),i=s.find(".select");this.$settingsBtn=s.find(".settings"),console.log("test"),this.$settingsBtn.length||(this.$settingsBtn=$("<a/>",{class:"settings light invisible",role:"button","data-icon":"settings"}),$("<div/>",{class:"flex flex-nowrap"}).appendTo(s).append(i).append(this.$settingsBtn)),this.$typeSelect=i.find("select"),"select"===this.$typeSelect.val()&&this.$settingsBtn.removeClass("invisible"),this.optionsInput=$("<input/>",{type:"hidden",name:this.table.fieldSettings.columnsTableName+"["+this.id+"][options]"}),this.optionsInput.appendTo(this.$tr.closest("form")),this.updateColumnDataWithOptions(),this.addListener(this.$typeSelect,"change","handleTypeChange"),this.addListener(this.$settingsBtn,"click","showSettingsModal")},deleteRow:function(){this.optionsInput.remove(),this.optionsInput=null,delete this.table.fieldSettings.columnOptions[this.id],this.base()},handleTypeChange:function(){"select"===this.$typeSelect.val()?this.$settingsBtn.removeClass("invisible"):this.$settingsBtn.addClass("invisible"),this.table.fieldSettings.reconstructRowsTable()},showSettingsModal:function(t){var e=this;if(this.settingsModal)this.settingsModal.show();else{var s="dropdownsettingsmodal"+Math.floor(1e6*Math.random()),i=$("<div/>",{class:"modal dropdownsettingsmodal"}).appendTo(Garnish.$bod),n=$("<div/>",{class:"body"}).appendTo(i).html(this.table.fieldSettings.dropdownSettingsHtml.replace(/__ID__/g,s));if(this.optionsTable=new Craft.EditableTable(s,"__NAME__",this.table.fieldSettings.dropdownSettingsCols,{allowAdd:!0,allowDelete:!0,allowReorder:!0,onAddRow:this.handleOptionsRowChange.bind(this),onDeleteRow:this.handleOptionsRowChange.bind(this)}),this.options&&this.options.length)for(var o,l=0;l<this.options.length;l++)(o=this.optionsTable.addRow(!1)).$tr.find(".option-label textarea").val(this.options[l].label),o.$tr.find(".option-value textarea").val(this.options[l].value),o.$tr.find('.option-default input[type="checkbox"]').prop("checked",!!this.options[l].default);else this.optionsTable.addRow(!1);var a=$("<button/>",{type:"button",class:"btn submit",text:Craft.t("app","Done")}).appendTo(n);this.settingsModal=new Garnish.Modal(i,{onHide:this.handleSettingsModalHide.bind(this)}),this.addListener(a,"click",(function(){this.settingsModal.hide()}))}setTimeout((function(){e.optionsTable.$tbody.find("textarea").first().trigger("focus")}),100)},handleOptionsRowChange:function(){this.settingsModal&&this.settingsModal.updateSizeAndPosition()},handleSettingsModalHide:function(){this.options=[];for(var t=this.optionsTable.$table.find("tbody tr"),e=0;e<t.length;e++){let s=t.eq(e);this.options.push({label:s.find(".option-label textarea").val(),value:s.find(".option-value textarea").val(),default:s.find(".option-default input[type=checkbox]").prop("checked")})}this.updateColumnDataWithOptions(),this.table.fieldSettings.reconstructRowsTable()},updateColumnDataWithOptions:function(){this.table.fieldSettings.columnOptions[this.id]=this.options,this.optionsInput.val(JSON.stringify(this.options))}}),function(t,e){var $=t.jQuery||t.Cowboy||(t.Cowboy={}),s;$.throttle=s=function(t,s,i,n){function o(){function o(){a=+new Date,i.apply(d,u)}function h(){l=e}var d=this,r=+new Date-a,u=arguments;n&&!l&&o(),l&&clearTimeout(l),n===e&&r>t?o():!0!==s&&(l=setTimeout(n?h:o,n===e?t-r:t))}var l,a=0;return"boolean"!=typeof s&&(n=i,i=s,s=e),$.guid&&(o.guid=i.guid=i.guid||$.guid++),o},$.debounce=function(t,i,n){return n===e?s(t,i,!1):s(t,n,!1!==i)}}(this)}(jQuery);
//# sourceMappingURL=tablemaker.js.map