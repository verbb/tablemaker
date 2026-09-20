// Table Maker field input (Plugin Kit v2).
//
// Option A: content `pk-editable-table` is the field. Column schema lives in a
// modal (`ColumnsSchemaDialog`) — the content grid only rebuilds when the user
// hits Done, so typing/reordering in the schema editor is cheap.
// Field name/instructions come from Craft; the column action location and add-row label are customisable.
// “Configure” can use Craft’s field heading or the table actions header.

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
    private inlineRichTextEditor: import('./RichTextCellDialog.js').CraftCkeditorInstance | null = null;
    private inlineRichTextHost: HTMLElement | null = null;
    private inlineRichTextCell: { rowId: string; columnId: string } | null = null;
    private inlineRichTextForm: HTMLFormElement | null = null;
    private inlineRichTextOpening = false;
    private inlineRichTextClosing: Promise<void> | null = null;
    private inlineRichTextSyncTimer: number | null = null;
    private richTextPreviewObserver: ResizeObserver | null = null;

    private columns: ColumnDefinition[] = [];
    private contentRows: PkEditableTableRow[] = [];
    private caption = '';
    private rowsTable: PkEditableTable | null = null;
    private captionInput: (HTMLElement & { value: string }) | null = null;

    private readonly handleInlineRichTextPointerDown = (event: PointerEvent): void => {
        if (!this.isInlineRichTextEventInside(event)) {
            void this.closeInlineRichTextEditor(true);
        }
    };

    private readonly handleInlineRichTextFocusIn = (event: FocusEvent): void => {
        if (!this.isInlineRichTextEventInside(event)) {
            void this.closeInlineRichTextEditor(true);
        }
    };

    private readonly handleInlineRichTextSubmit = (): void => {
        void this.closeInlineRichTextEditor(true);
    };

    private readonly handleInlineRichTextKeyDown = (event: KeyboardEvent): void => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 's') {
            this.commitInlineRichTextValue();
        }
    };

    private readonly handleInlineRichTextChange = (): void => {
        if (this.inlineRichTextSyncTimer !== null) {
            window.clearTimeout(this.inlineRichTextSyncTimer);
        }

        // Keep the submitted value reasonably current without serializing the
        // entire table for every CKEditor model change.
        this.inlineRichTextSyncTimer = window.setTimeout(() => {
            this.inlineRichTextSyncTimer = null;
            this.commitInlineRichTextValue();
        }, 300);
    };

    private isInlineRichTextEventInside(event: Event): boolean {
        const path = event.composedPath();
        const insideEditor = this.inlineRichTextHost && path.includes(this.inlineRichTextHost);
        const insideBalloon = path.some((target) => target instanceof Element
            && Boolean(target.closest('.ck-balloon-panel')));

        return Boolean(insideEditor || insideBalloon);
    }

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

    private mountEditColumnsAction(): void {
        const field = this.root.closest('.field');
        const heading = field?.querySelector<HTMLElement>(':scope > .heading');
        const position = this.settings.editColumnsPosition || 'auto';
        const useTableHeader = position === 'tableHeader'
            || (position === 'auto' && !heading);
        const button = this.buildEditColumnsButton(useTableHeader || !heading);

        field?.querySelectorAll('.tm-edit-columns').forEach((el) => el.remove());
        heading?.classList.remove('tm-field-heading');

        if (useTableHeader || !heading) {
            void this.mountEditColumnsInTableHeader(button);
            return;
        }

        heading.classList.add('tm-field-heading');
        heading.appendChild(button);
    }

    /** Mount after the table has rendered its shadow-DOM actions column. */
    private async mountEditColumnsInTableHeader(button: HTMLElement): Promise<void> {
        const table = this.rowsTable;

        if (!table) {
            this.mountEditColumnsToolbar(button);
            return;
        }

        await table.updateComplete;

        if (this.rowsTable !== table || (!button.isConnected && !this.root.isConnected)) {
            return;
        }

        const actionsHeader = table.shadowRoot?.querySelector<HTMLElement>('th.actions');

        if (actionsHeader) {
            actionsHeader.style.textAlign = 'right';
            actionsHeader.replaceChildren(button);
            return;
        }

        this.mountEditColumnsToolbar(button);
    }

    /** Last-resort placement for hosts that render neither supported header. */
    private mountEditColumnsToolbar(button: HTMLElement): void {
        const bar = document.createElement('div');
        bar.className = 'tm-toolbar';
        bar.appendChild(button);
        this.root.querySelector('[data-tablemaker-editor]')?.prepend(bar);
    }

    private buildEditColumnsButton(compact = false): HTMLElement {
        const edit = document.createElement('pk-button');
        edit.className = 'tm-edit-columns';
        edit.setAttribute('type', 'button');
        edit.setAttribute('aria-label', Craft.t('tablemaker', 'Configure'));
        edit.toggleAttribute('disabled', this.hiddenInput?.disabled ?? false);

        if (compact) {
            edit.setAttribute('size', 'xxs');
            edit.appendChild(document.createTextNode(Craft.t('tablemaker', 'Configure')));
        } else {
            edit.setAttribute('size', 'xs');

            const gear = document.createElement('pk-icon');
            gear.setAttribute('slot', 'start');
            gear.setAttribute('icon', 'gear');
            edit.appendChild(gear);
            edit.appendChild(document.createTextNode(Craft.t('tablemaker', 'Configure')));
        }

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
        if (this.inlineRichTextEditor || this.inlineRichTextOpening) {
            return;
        }

        this.richTextPreviewObserver?.disconnect();
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
                const emptyLabel = Craft.t('tablemaker', 'Add rich text');
                const button = document.createElement('button');
                button.dataset.tablemakerRichtextCell = '';
                button.className = 'tm-richtext-cell';
                button.slot = getCustomCellSlotName(rowId, column._id);
                button.type = 'button';
                button.toggleAttribute('disabled', this.hiddenInput?.disabled ?? false);
                button.setAttribute('aria-label', column.heading.trim()
                    ? Craft.t('tablemaker', 'Edit rich text for “{heading}”', { heading: column.heading.trim() })
                    : Craft.t('tablemaker', 'Edit rich text'));

                const previewElement = document.createElement('div');
                previewElement.className = 'tm-richtext-preview';

                if (preview.text) {
                    previewElement.appendChild(preview.content);
                } else {
                    previewElement.classList.add('is-empty');
                    previewElement.textContent = emptyLabel;
                }

                button.appendChild(previewElement);
                this.observeRichTextPreview(previewElement);
                button.addEventListener('click', () => {
                    void this.editRichTextCell(rowId, column._id);
                });
                table.appendChild(button);
            }
        }
    }

    /** Only fade previews whose content is actually clipped by the height limit. */
    private observeRichTextPreview(preview: HTMLElement): void {
        const updateTruncation = (): void => {
            preview.classList.toggle('is-truncated', preview.scrollHeight > preview.clientHeight + 1);
        };

        if (typeof ResizeObserver === 'undefined') {
            requestAnimationFrame(updateTruncation);
            return;
        }

        this.richTextPreviewObserver ??= new ResizeObserver((entries) => {
            for (const entry of entries) {
                const element = entry.target as HTMLElement;
                element.classList.toggle('is-truncated', element.scrollHeight > element.clientHeight + 1);
            }
        });
        this.richTextPreviewObserver.observe(preview);
    }

    /** Build a small, inert preview matching the server-side rich-text vocabulary. */
    private richTextPreview(html: string): { content: DocumentFragment; text: string } {
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        const content = document.createDocumentFragment();
        const allowedTags = new Set(['p', 'br', 'strong', 'b', 'em', 'i', 'a', 'ul', 'ol', 'li']);
        const blockedTags = new Set(['script', 'style', 'iframe', 'object', 'embed', 'svg', 'math', 'form']);

        const appendPreviewNode = (source: Node, parent: Node): void => {
            if (source.nodeType === Node.TEXT_NODE) {
                parent.appendChild(document.createTextNode(source.textContent ?? ''));
                return;
            }

            if (source.nodeType !== Node.ELEMENT_NODE) {
                return;
            }

            const sourceElement = source as Element;
            const tag = sourceElement.localName.toLowerCase();

            if (blockedTags.has(tag)) {
                return;
            }

            if (!allowedTags.has(tag)) {
                sourceElement.childNodes.forEach((child) => appendPreviewNode(child, parent));
                return;
            }

            // A live link nested inside the cell's button would be invalid and
            // distracting, so preserve its visual treatment with an inert span.
            const previewElement = document.createElement(tag === 'a' ? 'span' : tag);
            if (tag === 'a') {
                previewElement.className = 'tm-richtext-preview-link';
            }

            sourceElement.childNodes.forEach((child) => appendPreviewNode(child, previewElement));
            parent.appendChild(previewElement);
        };

        parsed.body.childNodes.forEach((child) => appendPreviewNode(child, content));

        return {
            content,
            text: String(parsed.body.textContent ?? '').replace(/\s+/g, ' ').trim(),
        };
    }

    private async editRichTextCell(rowId: string, columnId: string): Promise<void> {
        if (this.hiddenInput?.disabled || this.richTextEditorOpen || !this.settings.ckeditorAvailable) {
            return;
        }

        if (this.settings.richTextEditingMode === 'inline') {
            await this.editRichTextCellInline(rowId, columnId);
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

    private async editRichTextCellInline(rowId: string, columnId: string): Promise<void> {
        if (this.inlineRichTextOpening) {
            return;
        }

        this.inlineRichTextOpening = true;

        try {
            await this.closeInlineRichTextEditor(true);

            const rowIndex = this.contentRows.findIndex((row) => String(row._id) === rowId);
            const column = this.columns.find((item) => item._id === columnId);
            const table = this.rowsTable;

            if (rowIndex === -1 || !column || !table) {
                return;
            }

            // Rebuild previews after a previous inline editor committed; the
            // activation target is identified by row/column rather than DOM identity.
            table.rows = this.contentRows;
            this.inlineRichTextOpening = false;
            this.mountRichTextCells(table);
            this.inlineRichTextOpening = true;

            const slot = getCustomCellSlotName(rowId, columnId);
            const trigger = Array.from(table.querySelectorAll<HTMLElement>('[data-tablemaker-richtext-cell]'))
                .find((element) => element.slot === slot);

            if (!trigger) {
                return;
            }

            const source = document.createElement('div');
            source.dataset.tablemakerRichtextCell = '';
            source.className = 'tm-richtext-inline-source';
            source.slot = slot;
            source.innerHTML = String(this.contentRows[rowIndex]?.[columnId] ?? '');
            trigger.replaceWith(source);

            this.inlineRichTextHost = source;
            this.inlineRichTextCell = { rowId, columnId };

            const { loadCraftCkeditor } = await import('./RichTextCellDialog.js');
            const { createInline, plugins } = await loadCraftCkeditor();
            const editor = await createInline(source, {
                accessibleFieldName: column.heading.trim()
                    ? Craft.t('tablemaker', 'Edit rich text for “{heading}”', { heading: column.heading.trim() })
                    : Craft.t('tablemaker', 'Edit rich text'),
                linkOptions: [],
                plugins,
                toolbar: {
                    items: [
                        'bold',
                        'italic',
                        'link',
                        '|',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'undo',
                        'redo',
                    ],
                },
                ui: {
                    viewportOffset: { top: 44 },
                    poweredBy: { position: 'outside', label: '' },
                },
            });

            if (this.inlineRichTextHost !== source || !source.isConnected) {
                await editor.destroy();
                return;
            }

            this.inlineRichTextEditor = editor;
            this.inlineRichTextForm = this.root.closest('form');
            editor.model.document.on('change:data', this.handleInlineRichTextChange);
            document.addEventListener('pointerdown', this.handleInlineRichTextPointerDown, true);
            document.addEventListener('focusin', this.handleInlineRichTextFocusIn, true);
            window.addEventListener('keydown', this.handleInlineRichTextKeyDown, true);
            this.inlineRichTextForm?.addEventListener('submit', this.handleInlineRichTextSubmit, true);
            editor.editing.view.focus();
        } catch (exception) {
            console.error(exception);
            this.inlineRichTextHost?.remove();
            this.inlineRichTextHost = null;
            this.inlineRichTextCell = null;
        } finally {
            this.inlineRichTextOpening = false;

            if (!this.inlineRichTextEditor && this.rowsTable) {
                this.mountRichTextCells(this.rowsTable);
            }
        }
    }

    /** Flush the live editor into the hidden field before Craft serializes the form. */
    private commitInlineRichTextValue(): void {
        const editor = this.inlineRichTextEditor;
        const cell = this.inlineRichTextCell;

        if (!editor || !cell) {
            return;
        }

        const rowIndex = this.contentRows.findIndex((row) => String(row._id) === cell.rowId);
        const value = editor.getData();

        if (rowIndex !== -1 && this.contentRows[rowIndex][cell.columnId] !== value) {
            this.contentRows[rowIndex][cell.columnId] = value;
            this.syncValueBlob();
        }
    }

    /** Commit immediately so a Save click sees the value before async editor teardown. */
    private closeInlineRichTextEditor(commit: boolean): Promise<void> {
        if (this.inlineRichTextClosing) {
            return this.inlineRichTextClosing;
        }

        const editor = this.inlineRichTextEditor;
        const host = this.inlineRichTextHost;
        if (!editor) {
            return Promise.resolve();
        }

        if (commit) {
            this.commitInlineRichTextValue();
        }

        if (this.inlineRichTextSyncTimer !== null) {
            window.clearTimeout(this.inlineRichTextSyncTimer);
            this.inlineRichTextSyncTimer = null;
        }

        editor.model.document.off('change:data', this.handleInlineRichTextChange);
        document.removeEventListener('pointerdown', this.handleInlineRichTextPointerDown, true);
        document.removeEventListener('focusin', this.handleInlineRichTextFocusIn, true);
        window.removeEventListener('keydown', this.handleInlineRichTextKeyDown, true);
        this.inlineRichTextForm?.removeEventListener('submit', this.handleInlineRichTextSubmit, true);
        this.inlineRichTextEditor = null;
        this.inlineRichTextHost = null;
        this.inlineRichTextCell = null;
        this.inlineRichTextForm = null;

        const closing = (async(): Promise<void> => {
            try {
                await editor.destroy();
            } finally {
                host?.remove();

                if (!this.inlineRichTextOpening && this.rowsTable) {
                    this.rowsTable.rows = this.contentRows;
                    this.mountRichTextCells(this.rowsTable);
                }
            }
        })();

        this.inlineRichTextClosing = closing;
        void closing.finally(() => {
            if (this.inlineRichTextClosing === closing) {
                this.inlineRichTextClosing = null;
            }
        });

        return closing;
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
