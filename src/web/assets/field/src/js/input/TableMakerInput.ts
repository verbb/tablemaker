// Table Maker field input (Plugin Kit v2).
//
// Option A: content `pk-editable-table` is the field. Column schema lives in a
// modal (`ColumnsSchemaDialog`) — the content grid only rebuilds when the user
// hits Done, so typing/reordering in the schema editor is cheap.
// Field name/instructions come from Craft; only the add-row button label is customisable.
// “Edit columns” mounts into Craft’s `.heading` row to avoid an empty toolbar band.

import {
    getCustomCellSlotName,
    type PkEditableTable,
    type PkEditableTableRow,
} from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';

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
    private schemaDialog: import('./ColumnsSchemaDialog.js').ColumnsSchemaDialog | null = null;
    private richTextDialog: import('./RichTextCellDialog.js').RichTextCellDialog | null = null;
    private columnsEditorOpen = false;
    private richTextEditorOpen = false;

    private columns: ColumnDefinition[] = [];
    private contentRows: PkEditableTableRow[] = [];
    private caption = '';
    private rowsTable: PkEditableTable | null = null;
    private captionInput: (HTMLElement & { value: string }) | null = null;

    constructor(root: HTMLElement) {
        this.root = root;
        this.hiddenInput = root.querySelector<HTMLInputElement>('input.table-maker-field');
        this.settings = parseJson<TableMakerSettings>(root.getAttribute('data-settings'), {
            name: root.getAttribute('data-name') || '',
            columns: {},
            rows: {},
        });
    }

    init(): void {
        void this.initialize();
    }

    private async initialize(): Promise<void> {
        if (this.settings.enableCaption) {
            // Caption controls are optional, so keep them out of the common field bundle.
            await Promise.all([
                import('@verbb/plugin-kit-web/components/field/pk-field.js'),
                import('@verbb/plugin-kit-web/components/input/pk-input.js'),
            ]);
            await Promise.all([
                customElements.whenDefined('pk-field'),
                customElements.whenDefined('pk-input'),
            ]);
        }

        this.columns = seedColumns(this.settings);
        this.contentRows = seedContentRows(this.settings, this.columns);
        this.caption = String(this.settings.caption ?? '').trim();
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
        // Caption is opt-in via field settings; keep stored value in the blob when hidden.
        if (this.settings.enableCaption) {
            mount.appendChild(this.buildCaptionField());
        }
        this.mountEditColumnsAction();
    }

    /** Per-value caption below the grid (#60) — `pk-field` + `pk-input` → `<caption>` in `.table`. */
    private buildCaptionField(): HTMLElement {
        const labelText = (this.settings.captionLabel || '').trim()
            || Craft.t('tablemaker', 'Caption');
        const instructions = (this.settings.captionInstructions || '').trim();
        const placeholder = (this.settings.captionPlaceholder || '').trim();

        const field = document.createElement('pk-field') as HTMLElement & {
            label: string;
            instructions: string;
        };
        field.className = 'tm-caption-field';
        field.label = labelText;
        if (instructions) {
            field.instructions = instructions;
        }

        // Nameless on purpose — value lives in the hidden JSON blob, not a parallel POST key.
        const input = document.createElement('pk-input') as HTMLElement & { value: string };
        input.setAttribute('width', 'full');
        input.toggleAttribute('disabled', this.hiddenInput?.disabled ?? false);
        if (placeholder) {
            input.setAttribute('placeholder', placeholder);
        }
        input.value = this.caption;
        input.addEventListener('input', () => {
            this.caption = input.value;
            this.syncValueBlob();
        });

        field.appendChild(input);
        this.captionInput = input;

        return field;
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
        edit.toggleAttribute('disabled', this.hiddenInput?.disabled ?? false);

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
        table.disabled = this.hiddenInput?.disabled ?? false;
        table.columns = contentSchemaColumns(this.columns, Boolean(this.settings.ckeditorAvailable));
        table.rows = this.contentRows;
        table.allowReorder = true;
        // Kit defaults allowInsert=true; keep explicit for content editing (#20).
        table.allowInsert = true;
        table.addRowLabel = this.settings.addRowLabel || Craft.t('tablemaker', 'Add a row');
        table.newRowDefaults = contentNewRowDefaults(this.columns);
        this.applyRowBounds(table);
        table.addEventListener('pk-change', ((event: CustomEvent<{ rows: PkEditableTableRow[] }>) => {
            // Content edits only — schema is applied in batches from the modal Done path.
            this.contentRows = reconstructContentRows(this.columns, event.detail?.rows ?? []);
            table.rows = this.contentRows;
            this.applyRowBounds(table);
            this.mountRichTextCells(table);
            this.syncValueBlob();
        }) as EventListener);

        this.rowsTable = table;
        this.mountRichTextCells(table);

        return table;
    }

    /** Toggle add/delete from field min/max row settings (#38). */
    private applyRowBounds(table: PkEditableTable): void {
        const count = this.contentRows.length;
        // Craft Table parity: minRows unset/0 ⇒ true empty grid is allowed.
        const floor = this.settings.minRows ?? 0;
        const maxRows = this.settings.maxRows;

        // Kit enforces the cap mid-paste; allowAdd still gates the Add button / insert menu.
        table.maxRows = maxRows ?? null;
        table.allowAdd = maxRows == null || count < maxRows;
        table.allowDelete = count > floor;
    }

    /**
     * Schema edits stay in the dialog draft until Done. Cancel leaves the content
     * table untouched — no live reconstruct while the user is still configuring.
     */
    private async openColumnsEditor(): Promise<void> {
        if (this.hiddenInput?.disabled || this.columnsEditorOpen) {
            return;
        }

        // Claim the editor before loading its modules so rapid activation cannot
        // create competing dialogs while the first import is still pending.
        this.columnsEditorOpen = true;

        try {
            if (!this.schemaDialog) {
                // Column configuration is uncommon during content editing. Load its dialog
                // implementation and component only when the author asks for it.
                const [{ ColumnsSchemaDialog }] = await Promise.all([
                    import('./ColumnsSchemaDialog.js'),
                    import('@verbb/plugin-kit-web/components/dialog/pk-dialog.js'),
                ]);
                await customElements.whenDefined('pk-dialog');
                this.schemaDialog = new ColumnsSchemaDialog(this.settings);
            }

            const result = await this.schemaDialog.open(this.columns);

            if (!result) {
                return;
            }

            this.columns = result.columns;
            this.contentRows = reconstructContentRows(this.columns, this.contentRows);
            this.applyContentSchema();
            this.syncValueBlob();
        } finally {
            this.columnsEditorOpen = false;
        }
    }

    private applyContentSchema(): void {
        if (!this.rowsTable) {
            return;
        }

        this.rowsTable.columns = contentSchemaColumns(this.columns, Boolean(this.settings.ckeditorAvailable));
        this.rowsTable.newRowDefaults = contentNewRowDefaults(this.columns);
        this.rowsTable.rows = this.contentRows;
        this.applyRowBounds(this.rowsTable);
        this.mountRichTextCells(this.rowsTable);
    }

    /** Project compact cell triggers into Plugin Kit's custom-cell slots. */
    private mountRichTextCells(table: PkEditableTable): void {
        table.querySelectorAll('[data-tablemaker-richtext-cell]').forEach((element) => element.remove());

        if (!this.settings.ckeditorAvailable) {
            return;
        }

        const richColumns = this.columns.filter((column) => column.type === 'richtext');

        for (const row of this.contentRows) {
            const rowId = String(row._id ?? '');

            for (const column of richColumns) {
                const value = String(row[column._id] ?? '');
                const preview = this.richTextPreview(value);
                const button = document.createElement('pk-button');
                button.dataset.tablemakerRichtextCell = '';
                button.className = 'tm-richtext-cell';
                button.slot = getCustomCellSlotName(rowId, column._id);
                button.setAttribute('type', 'button');
                button.setAttribute('variant', 'transparent');
                button.setAttribute('size', 'sm');
                button.toggleAttribute('disabled', this.hiddenInput?.disabled ?? false);
                button.textContent = preview || Craft.t('tablemaker', 'Add rich text');
                button.title = preview || Craft.t('tablemaker', 'Add rich text');
                button.setAttribute('aria-label', column.heading.trim()
                    ? Craft.t('tablemaker', 'Edit rich text for “{heading}”', { heading: column.heading.trim() })
                    : Craft.t('tablemaker', 'Edit rich text'));
                button.addEventListener('click', () => {
                    void this.editRichTextCell(rowId, column._id);
                });
                table.appendChild(button);
            }
        }
    }

    private richTextPreview(html: string): string {
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        return String(parsed.body.textContent ?? '').replace(/\s+/g, ' ').trim();
    }

    private async editRichTextCell(rowId: string, columnId: string): Promise<void> {
        if (this.hiddenInput?.disabled || this.richTextEditorOpen || !this.settings.ckeditorAvailable) {
            return;
        }

        const rowIndex = this.contentRows.findIndex((row) => String(row._id) === rowId);
        const column = this.columns.find((item) => item._id === columnId);

        if (rowIndex === -1 || !column || !this.rowsTable) {
            return;
        }

        this.richTextEditorOpen = true;

        try {
            if (!this.richTextDialog) {
                const [{ RichTextCellDialog }] = await Promise.all([
                    import('./RichTextCellDialog.js'),
                    import('@verbb/plugin-kit-web/components/dialog/pk-dialog.js'),
                ]);
                await customElements.whenDefined('pk-dialog');
                this.richTextDialog = new RichTextCellDialog();
            }

            const value = await this.richTextDialog.open(
                column.heading.trim(),
                this.contentRows[rowIndex]?.[columnId],
            );

            if (value !== null) {
                this.rowsTable.setCellValue(rowIndex, columnId, value);
            }
        } finally {
            this.richTextEditorOpen = false;
        }
    }

    private syncValueBlob(): void {
        if (!this.hiddenInput) {
            return;
        }

        this.hiddenInput.value = serializeValueBlob(
            this.columns,
            this.contentRows,
            this.settings,
            this.caption,
        );
    }
}
