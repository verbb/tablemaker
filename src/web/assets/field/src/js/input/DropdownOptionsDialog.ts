import type { PkEditableTable, PkEditableTableColumn, PkEditableTableRow } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';

import { normalizeDropdownOptions, type DropdownOption } from './options.js';

export interface DropdownOptionsDialogResult {
    options: DropdownOption[];
}

/**
 * Modal options editor for a select-type column — Formie's table-column options dialog,
 * in plain DOM against `pk-dialog` + `pk-editable-table`.
 */
export class DropdownOptionsDialog {
    private dialog: HTMLElement | null = null;
    private table: PkEditableTable | null = null;
    private resolvePromise: ((result: DropdownOptionsDialogResult | null) => void) | null = null;
    private optionRows: PkEditableTableRow[] = [];

    open(columnHeading: string, options: unknown): Promise<DropdownOptionsDialogResult | null> {
        this.close(null);

        return new Promise((resolve) => {
            this.resolvePromise = resolve;
            this.optionRows = normalizeDropdownOptions(options).map((option) => ({
                label: option.label,
                value: option.value,
                isDefault: Boolean(option.default),
            }));

            if (this.optionRows.length === 0) {
                this.optionRows = [{ label: '', value: '', isDefault: false }];
            }

            this.mount(columnHeading);
        });
    }

    private mount(columnHeading: string): void {
        const dialog = document.createElement('pk-dialog');
        dialog.setAttribute('label', Craft.t('app', 'Dropdown Options'));
        // Backdrop dismiss = Cancel. Nested overlays are handled by kit dismiss stack.
        dialog.setAttribute('open', '');

        const body = document.createElement('div');
        body.className = 'tm-options-dialog-body';

        const instructions = document.createElement('p');
        instructions.className = 'tm-options-dialog-instructions';
        instructions.textContent = columnHeading
            ? Craft.t('tablemaker', 'Define the available options for “{heading}”.', {
                heading: columnHeading,
            })
            : Craft.t('app', 'Define the available options.');
        body.appendChild(instructions);

        const table = document.createElement('pk-editable-table') as PkEditableTable;
        table.columns = this.optionColumns();
        table.rows = this.optionRows;
        table.allowAdd = true;
        table.allowDelete = true;
        table.allowReorder = true;
        table.addRowLabel = Craft.t('app', 'Add an option');
        table.addEventListener('pk-change', ((event: CustomEvent<{ rows: PkEditableTableRow[] }>) => {
            this.optionRows = event.detail?.rows ?? [];
            table.rows = this.optionRows;
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
            this.close({ options: this.serializeOptions() });
        });
        dialog.appendChild(done);

        // Nested overlays bubble the same event name — ignore anything but this dialog.
        dialog.addEventListener('pk-open-change', ((event: CustomEvent<{ open?: boolean }>) => {
            if (event.target !== dialog || event.detail?.open !== false || !this.resolvePromise) {
                return;
            }

            this.close(null);
        }) as EventListener);

        document.body.appendChild(dialog);
        this.dialog = dialog;
    }

    private optionColumns(): PkEditableTableColumn[] {
        return [
            {
                name: 'label',
                label: Craft.t('app', 'Option Label'),
                type: 'text',
            },
            {
                name: 'value',
                label: Craft.t('app', 'Value'),
                // Autofill from label until the editor types a custom value (Craft autopopulate).
                type: 'value',
                source: 'label',
            },
            {
                name: 'isDefault',
                label: Craft.t('app', 'Default?'),
                // Radio = one default across option rows (Craft EditableTable radioMode).
                type: 'radio',
                thin: true,
                allowUnselect: true,
            },
        ];
    }

    private serializeOptions(): DropdownOption[] {
        return this.optionRows
            .map((row) => ({
                label: String(row.label ?? '').trim(),
                value: String(row.value ?? '').trim(),
                default: Boolean(row.isDefault),
            }))
            .filter((row) => row.label !== '' || row.value !== '');
    }

    private close(result: DropdownOptionsDialogResult | null): void {
        const resolve = this.resolvePromise;
        this.resolvePromise = null;

        if (this.dialog) {
            this.dialog.removeAttribute('open');
            this.dialog.remove();
            this.dialog = null;
        }

        this.table = null;

        if (resolve) {
            resolve(result);
        }
    }
}
