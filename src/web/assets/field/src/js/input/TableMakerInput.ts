// Table Maker field input (Plugin Kit v2).
//
// Option A: content `pk-editable-table` is the field. Column schema lives in a
// modal (`ColumnsSchemaDialog`) — the content grid only rebuilds when the user
// hits Done, so typing/reordering in the schema editor is cheap.
// Field name/instructions come from Craft; only the add-row button label is customisable.
// “Edit columns” mounts into Craft’s `.heading` row to avoid an empty toolbar band.

import type {
    PkEditableTable,
    PkEditableTableRow,
} from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';

import { ColumnsSchemaDialog } from './ColumnsSchemaDialog.js';
import type { ColumnDefinition } from './types.js';
import {
    contentNewRowDefaults,
    contentSchemaColumns,
    parseJson,
    reconstructContentRows,
    seedColumns,
    seedContentRows,
    serializeValueBlob,
} from './shared.js';
import type { TableMakerSettings } from './types.js';

export class TableMakerInput {
    private readonly root: HTMLElement;
    private readonly settings: TableMakerSettings;
    private readonly hiddenInput: HTMLInputElement | null;
    private readonly schemaDialog: ColumnsSchemaDialog;

    private columns: ColumnDefinition[] = [];
    private contentRows: PkEditableTableRow[] = [];
    private rowsTable: PkEditableTable | null = null;

    constructor(root: HTMLElement) {
        this.root = root;
        this.hiddenInput = root.querySelector<HTMLInputElement>('input.table-maker-field');
        this.settings = parseJson<TableMakerSettings>(root.getAttribute('data-settings'), {
            name: root.getAttribute('data-name') || '',
            columns: {},
            rows: {},
        });
        this.schemaDialog = new ColumnsSchemaDialog(this.settings);
    }

    init(): void {
        this.columns = seedColumns(this.settings);
        this.contentRows = seedContentRows(this.settings, this.columns);
        this.render();
        this.syncValueBlob();
    }

    private render(): void {
        const mount = this.root.querySelector<HTMLElement>('[data-tablemaker-editor]');

        if (!mount) {
            return;
        }

        mount.replaceChildren();
        mount.appendChild(this.buildContentTable());
        this.mountEditColumnsAction();
    }

    /**
     * Sit beside the Craft field label (not above the grid). Matrix/block handles live
     * on the block chrome, so this doesn’t fight “show handles”.
     */
    private mountEditColumnsAction(): void {
        const button = this.buildEditColumnsButton();
        const field = this.root.closest('.field');
        const heading = field?.querySelector<HTMLElement>(':scope > .heading');

        field?.querySelectorAll('.tm-edit-columns').forEach((el) => el.remove());

        if (heading) {
            heading.classList.add('tm-field-heading');
            heading.appendChild(button);
            return;
        }

        // Fallback when Craft doesn’t render a heading (rare / inline contexts).
        const bar = document.createElement('div');
        bar.className = 'tm-toolbar';
        bar.appendChild(button);
        this.root.querySelector('[data-tablemaker-editor]')?.prepend(bar);
    }

    private buildEditColumnsButton(): HTMLElement {
        const edit = document.createElement('pk-button');
        edit.className = 'tm-edit-columns';
        edit.setAttribute('type', 'button');
        edit.setAttribute('size', 'xs');

        const gear = document.createElement('pk-icon');
        gear.setAttribute('slot', 'start');
        gear.setAttribute('icon', 'gear');
        edit.appendChild(gear);
        edit.appendChild(document.createTextNode(Craft.t('tablemaker', 'Edit columns')));
        edit.addEventListener('click', () => {
            void this.openColumnsEditor();
        });

        return edit;
    }

    private buildContentTable(): PkEditableTable {
        const table = document.createElement('pk-editable-table') as PkEditableTable;
        table.className = 'tm-content-table';
        table.columns = contentSchemaColumns(this.columns);
        table.rows = this.contentRows;
        table.allowAdd = true;
        table.allowDelete = true;
        table.allowReorder = true;
        table.addRowLabel = this.settings.addRowLabel || Craft.t('tablemaker', 'Add a row');
        table.newRowDefaults = contentNewRowDefaults(this.columns);
        table.addEventListener('pk-change', ((event: CustomEvent<{ rows: PkEditableTableRow[] }>) => {
            // Content edits only — schema is applied in batches from the modal Done path.
            this.contentRows = event.detail?.rows ?? [];
            this.syncValueBlob();
        }) as EventListener);

        this.rowsTable = table;

        return table;
    }

    /**
     * Schema edits stay in the dialog draft until Done. Cancel leaves the content
     * table untouched — no live reconstruct while the user is still configuring.
     */
    private async openColumnsEditor(): Promise<void> {
        const result = await this.schemaDialog.open(this.columns);

        if (!result) {
            return;
        }

        this.columns = result.columns;
        this.contentRows = reconstructContentRows(this.columns, this.contentRows);
        this.applyContentSchema();
        this.syncValueBlob();
    }

    private applyContentSchema(): void {
        if (!this.rowsTable) {
            return;
        }

        this.rowsTable.columns = contentSchemaColumns(this.columns);
        this.rowsTable.newRowDefaults = contentNewRowDefaults(this.columns);
        this.rowsTable.rows = this.contentRows;
    }

    private syncValueBlob(): void {
        if (!this.hiddenInput) {
            return;
        }

        this.hiddenInput.value = serializeValueBlob(this.columns, this.contentRows, this.settings);
    }
}
