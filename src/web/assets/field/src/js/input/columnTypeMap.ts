import type { PkEditableTableColumnType } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';

/** Craft Table Maker column `type` values ↔ `pk-editable-table` cell types. */
const CRAFT_TO_PK: Record<string, PkEditableTableColumnType> = {
    checkbox: 'checkbox',
    color: 'color',
    date: 'date',
    select: 'select',
    email: 'email',
    // Row heading stays editable text in the CP; HTML output uses <th scope="row">.
    heading: 'text',
    lightswitch: 'lightswitch',
    multiline: 'textarea',
    number: 'number',
    singleline: 'text',
    time: 'time',
    url: 'url',
};

const PK_TO_CRAFT: Record<string, string> = {
    checkbox: 'checkbox',
    color: 'color',
    date: 'date',
    select: 'select',
    email: 'email',
    lightswitch: 'lightswitch',
    textarea: 'multiline',
    number: 'number',
    text: 'singleline',
    time: 'time',
    url: 'url',
};

export const craftTypeToPk = (type: string | undefined): PkEditableTableColumnType => {
    return CRAFT_TO_PK[type || ''] || 'text';
};

export const pkTypeToCraft = (type: string | undefined): string => {
    return PK_TO_CRAFT[type || ''] || 'singleline';
};
