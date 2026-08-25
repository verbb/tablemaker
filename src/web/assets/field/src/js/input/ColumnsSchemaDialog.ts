import type {
    PkEditableTable,
    PkEditableTableRow,
    PkEditableTableRowMenuItem,
} from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';

import type { ColumnDefinition } from './types.js';
import { DropdownOptionsDialog } from './DropdownOptionsDialog.js';
import { normalizeDropdownOptions } from './options.js';
import { columnSchemaTableColumns, createColumn } from './shared.js';
import type { TableMakerSettings } from './types.js';

export interface ColumnsSchemaDialogResult {
    columns: ColumnDefinition[];
}

/**
 * Bulk columns editor in a dialog — the classic BEFORE columns table, off-canvas.
 */
export class ColumnsSchemaDialog {
    private readonly settings: TableMakerSettings;
    private dialog: HTMLElement | null = null;
    private table: PkEditableTable | null = null;
    private draftRows: PkEditableTableRow[] = [];
    private resolvePromise: ((result: ColumnsSchemaDialogResult | null) => void) | null = null;

    constructor(settings: TableMakerSettings) {
        this.settings = settings;
    }

    open(columns: ColumnDefinition[]): Promise<ColumnsSchemaDialogResult | null> {
        this.close(null);

        return new Promise((resolve) => {
            this.resolvePromise = resolve;
            this.draftRows = columns.map((column) => ({
                _id: column._id,
                heading: column.heading,
                width: column.width,
                align: column.align || 'left',
                type: column.type || 'singleline',
                options: normalizeDropdownOptions(column.options),
            }));

            if (this.draftRows.length === 0) {
                const blank = createColumn();
                this.draftRows = [{ ...blank }];
            }

            this.mount();
        });
    }

    private mount(): void {
        const dialog = document.createElement('pk-dialog');
        dialog.className = 'tm-columns-schema-dialog';
        dialog.setAttribute('label', Craft.t('tablemaker', 'Edit columns'));
        // Backdrop dismiss is intentional (Cancel). Kit light-dismiss already skips
        // closing this dialog when a nested select/menu is top of the dismiss stack.
        dialog.setAttribute('open', '');

        const body = document.createElement('div');
        body.className = 'tm-columns-schema-dialog-body';

        const hint = document.createElement('p');
        hint.className = 'tm-options-dialog-instructions';
        hint.textContent = Craft.t('tablemaker', 'Define the columns your table should have.');
        body.appendChild(hint);

        const table = document.createElement('pk-editable-table') as PkEditableTable;
        table.columns = columnSchemaTableColumns(this.settings);
        table.rows = this.draftRows;
        table.allowReorder = true;
        table.addRowLabel = Craft.t('tablemaker', 'Add a column');
        table.newRowDefaults = {
            heading: '',
            width: '',
            align: 'left',
            type: 'singleline',
            options: [],
        };
        this.applyColumnBounds(table);
        table.getRowMenuItems = (row) => this.rowMenuItems(row);
        table.addEventListener('pk-change', ((event: CustomEvent<{ rows: PkEditableTableRow[] }>) => {
            this.draftRows = this.normalizeDraft(event.detail?.rows ?? []);
            this.applyColumnBounds(table);
            table.rows = this.draftRows;
        }) as EventListener);
        table.addEventListener('pk-row-menu-select', ((event: CustomEvent<{
            action?: string;
            row?: PkEditableTableRow;
        }>) => {
            if (event.detail?.action === 'edit-options' && event.detail.row) {
                void this.editOptions(event.detail.row);
            }
        }) as EventListener);

        body.appendChild(table);
        this.table = table;
        dialog.appendChild(body);

        const cancel = document.createElement('pk-button');
        cancel.setAttribute('slot', 'footer');
        cancel.setAttribute('type', 'button');
        cancel.textContent = Craft.t('app', 'Cancel');
        cancel.addEventListener('click', () => this.close(null));
        dialog.appendChild(cancel);

        const done = document.createElement('pk-button');
        done.setAttribute('slot', 'footer');
        done.setAttribute('type', 'button');
        done.setAttribute('variant', 'primary');
        done.textContent = Craft.t('app', 'Done');
        done.addEventListener('click', () => {
            const minColumns = this.settings.minColumns ?? 0;
            if (this.draftRows.length < minColumns) {
                window.alert(Craft.t('tablemaker', 'Table must have at least {count} columns.', {
                    count: String(minColumns),
                }));
                return;
            }

            this.close({ columns: this.toDefinitions(this.draftRows) });
        });
        dialog.appendChild(done);

        // Menus / selects inside the panel also fire bubbled `pk-open-change`.
        // Only tear down when *this* dialog closes — not a nested overlay.
        dialog.addEventListener('pk-open-change', ((event: CustomEvent<{ open?: boolean }>) => {
            if (event.target !== dialog || event.detail?.open !== false || !this.resolvePromise) {
                return;
            }

            this.close(null);
        }) as EventListener);

        document.body.appendChild(dialog);
        this.dialog = dialog;
    }

    /** Toggle add/delete from field min/max column settings (#38). */
    private applyColumnBounds(table: PkEditableTable): void {
        const count = this.draftRows.length;
        const minColumns = this.settings.minColumns ?? 0;
        const maxColumns = this.settings.maxColumns;
        const floor = Math.max(minColumns, 1);

        table.allowAdd = maxColumns == null || count < maxColumns;
        table.allowDelete = count > floor;
    }

    private rowMenuItems(row: PkEditableTableRow): PkEditableTableRowMenuItem[] | null {
        if (String(row.type) !== 'select') {
            return null;
        }

        return [{
            label: Craft.t('tablemaker', 'Edit options'),
            action: 'edit-options',
            icon: 'gear',
        }];
    }

    private async editOptions(row: PkEditableTableRow): Promise<void> {
        const dialog = new DropdownOptionsDialog();
        const result = await dialog.open(String(row.heading || ''), row.options);

        if (!result) {
            return;
        }

        this.draftRows = this.draftRows.map((item) => {
            if (String(item._id) !== String(row._id)) {
                return item;
            }

            return { ...item, options: result.options };
        });

        if (this.table) {
            this.table.rows = this.draftRows;
        }
    }

    private normalizeDraft(rows: PkEditableTableRow[]): PkEditableTableRow[] {
        return rows.map((row) => {
            const type = String(row.type || 'singleline');

            return {
                ...row,
                heading: row.heading ?? '',
                width: row.width ?? '',
                align: row.align || 'left',
                type,
                options: type === 'select'
                    ? normalizeDropdownOptions(row.options)
                    : [],
            };
        });
    }

    private toDefinitions(rows: PkEditableTableRow[]): ColumnDefinition[] {
        const normalized = this.normalizeDraft(rows);

        if (normalized.length === 0) {
            return [createColumn()];
        }

        return normalized.map((row) => ({
            _id: String(row._id || nextFallbackId()),
            heading: String(row.heading ?? ''),
            width: String(row.width ?? ''),
            align: String(row.align || 'left'),
            type: String(row.type || 'singleline'),
            options: normalizeDropdownOptions(row.options),
        }));
    }

    private close(result: ColumnsSchemaDialogResult | null): void {
        const resolve = this.resolvePromise;
        this.resolvePromise = null;

        if (this.dialog) {
            this.dialog.removeAttribute('open');
            this.dialog.remove();
            this.dialog = null;
        }

        this.table = null;
        this.draftRows = [];

        if (resolve) {
            resolve(result);
        }
    }
}

const nextFallbackId = (): string => {
    return `col_${Date.now().toString(36)}`;
};
