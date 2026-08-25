import type { ColumnDefinition, TableColumn, TableMakerSettings } from './types.js';
import { craftTypeToPk } from './columnTypeMap.js';
import { defaultSelectValue, normalizeDropdownOptions, toPkSelectOptions } from './options.js';
import type {
    PkEditableTableColumn,
    PkEditableTableRow,
} from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';

export const parseJson = <T>(raw: string | null | undefined, fallback: T): T => {
    if (!raw) {
        return fallback;
    }

    try {
        return JSON.parse(raw) as T;
    } catch {
        return fallback;
    }
};

export const isTruthyCell = (value: unknown): boolean => {
    return value === true || value === 1 || value === '1' || value === 'true';
};

export const ensurePrefixedKey = (id: string | undefined, prefix: string, used: Set<string>): string => {
    if (id && id.startsWith(prefix) && /^\w+\d+$/.test(id) && !used.has(id)) {
        used.add(id);
        return id;
    }

    let index = 0;

    while (used.has(`${prefix}${index}`)) {
        index += 1;
    }

    const key = `${prefix}${index}`;
    used.add(key);

    return key;
};

export const nextInternalId = (prefix: string): string => {
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
};

export const createColumn = (): ColumnDefinition => ({
    _id: nextInternalId('col'),
    heading: '',
    width: '',
    align: 'left',
    type: 'singleline',
    options: [],
});

export const seedColumns = (settings: TableMakerSettings): ColumnDefinition[] => {
    const columns = settings.columns || {};
    const keys = Object.keys(columns);

    if (keys.length === 0) {
        return [createColumn()];
    }

    return keys.map((key) => {
        const col = columns[key] || {};

        return {
            _id: key,
            heading: String(col.heading ?? ''),
            width: String(col.width ?? ''),
            align: String(col.align || 'left'),
            type: String(col.type || 'singleline'),
            options: normalizeDropdownOptions(col.options),
        };
    });
};

export const normalizeCellForEditor = (type: string | undefined, value: unknown): unknown => {
    if (type === 'checkbox' || type === 'lightswitch') {
        return isTruthyCell(value);
    }

    if (value == null || typeof value === 'object') {
        return type === 'checkbox' || type === 'lightswitch' ? false : '';
    }

    return value;
};

export const defaultCellValue = (column: ColumnDefinition | undefined): unknown => {
    const type = column?.type || 'singleline';

    if (type === 'checkbox' || type === 'lightswitch') {
        return false;
    }

    if (type === 'select') {
        return defaultSelectValue(column?.options);
    }

    return '';
};

export const seedContentRows = (
    settings: TableMakerSettings,
    columns: ColumnDefinition[],
): PkEditableTableRow[] => {
    const rows = settings.rows || {};
    const keys = Object.keys(rows);
    const colKeys = columns.map((column) => column._id);

    if (keys.length === 0) {
        const cells: Record<string, unknown> = {};
        for (const colKey of colKeys) {
            cells[colKey] = defaultCellValue(columns.find((item) => item._id === colKey));
        }

        return [{ _id: 'row0', ...cells }];
    }

    return keys.map((key) => {
        const source = rows[key] || {};
        const next: PkEditableTableRow = { _id: key };

        for (const colKey of colKeys) {
            const column = columns.find((item) => item._id === colKey);
            next[colKey] = normalizeCellForEditor(column?.type, source[colKey]);
        }

        return next;
    });
};

export const contentSchemaColumns = (columns: ColumnDefinition[]): PkEditableTableColumn[] => {
    return columns.map((column) => {
        const next: PkEditableTableColumn = {
            name: column._id,
            label: column.heading.trim() || '\u00a0',
            type: craftTypeToPk(column.type),
        };

        if (column.width) {
            next.width = column.width;
        }

        if (column.type === 'select') {
            next.options = toPkSelectOptions(column.options);
        }

        if (column.type === 'checkbox' || column.type === 'lightswitch') {
            next.thin = true;
        }

        return next;
    });
};

export const contentNewRowDefaults = (columns: ColumnDefinition[]): Record<string, unknown> => {
    const defaults: Record<string, unknown> = {};

    for (const column of columns) {
        defaults[column._id] = defaultCellValue(column);
    }

    return defaults;
};

export const reconstructContentRows = (
    columns: ColumnDefinition[],
    contentRows: PkEditableTableRow[],
): PkEditableTableRow[] => {
    const colKeys = columns.map((column) => column._id);
    const remapped = contentRows.map((row) => {
        const next: PkEditableTableRow = { _id: row._id };

        for (const colKey of colKeys) {
            const column = columns.find((item) => item._id === colKey);

            if (Object.prototype.hasOwnProperty.call(row, colKey)) {
                next[colKey] = normalizeCellForEditor(column?.type, row[colKey]);
            } else {
                next[colKey] = defaultCellValue(column);
            }
        }

        return next;
    });

    if (remapped.length > 0) {
        return remapped;
    }

    const cells: Record<string, unknown> = {};
    for (const colKey of colKeys) {
        cells[colKey] = defaultCellValue(columns.find((item) => item._id === colKey));
    }

    return [{ _id: 'row0', ...cells }];
};

export const serializeValueBlob = (
    columns: ColumnDefinition[],
    contentRows: PkEditableTableRow[],
    settings: TableMakerSettings,
): string => {
    const outColumns: Record<string, TableColumn> = {};
    const usedColKeys = new Set<string>();
    const colKeyById = new Map<string, string>();

    for (const column of columns) {
        const key = ensurePrefixedKey(column._id, 'col', usedColKeys);
        colKeyById.set(column._id, key);

        const craftType = column.type || 'singleline';
        const next: TableColumn = {
            heading: column.heading,
            type: craftType,
        };

        if (settings.enableWidthColumn) {
            next.width = column.width;
        }

        if (settings.enableAlignmentColumn) {
            next.align = column.align || 'left';
        }

        if (craftType === 'select') {
            next.options = normalizeDropdownOptions(column.options);
        }

        outColumns[key] = next;
    }

    const outRows: Record<string, Record<string, unknown>> = {};
    const usedRowKeys = new Set<string>();

    for (const row of contentRows) {
        const rowKey = ensurePrefixedKey(String(row._id), 'row', usedRowKeys);
        const cells: Record<string, unknown> = {};

        for (const column of columns) {
            const colKey = colKeyById.get(column._id) || column._id;
            let value = row[column._id];

            if (column.type === 'checkbox' || column.type === 'lightswitch') {
                value = isTruthyCell(value);
            } else if (value == null || typeof value === 'object') {
                value = '';
            }

            cells[colKey] = value;
        }

        outRows[rowKey] = cells;
    }

    return JSON.stringify({ columns: outColumns, rows: outRows });
};

export const columnSchemaTableColumns = (settings: TableMakerSettings): PkEditableTableColumn[] => {
    const columns: PkEditableTableColumn[] = [
        {
            name: 'heading',
            label: Craft.t('tablemaker', 'Heading'),
            type: 'text',
        },
    ];

    if (settings.enableWidthColumn) {
        columns.push({
            name: 'width',
            label: Craft.t('tablemaker', 'Width'),
            type: 'text',
            width: '70px',
        });
    }

    if (settings.enableAlignmentColumn) {
        columns.push({
            name: 'align',
            label: Craft.t('tablemaker', 'Alignment'),
            type: 'select',
            thin: true,
            options: [
                { value: 'left', label: Craft.t('tablemaker', 'Left') },
                { value: 'center', label: Craft.t('tablemaker', 'Center') },
                { value: 'right', label: Craft.t('tablemaker', 'Right') },
            ],
        });
    }

    columns.push({
        name: 'type',
        label: Craft.t('tablemaker', 'Type'),
        type: 'select',
        thin: true,
        options: toPkSelectOptions(settings.typeOptions || {}),
    });

    return columns;
};
