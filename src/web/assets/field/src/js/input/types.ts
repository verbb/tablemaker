import type { DropdownOption } from './options.js';

export interface TableColumn {
    heading?: string;
    align?: string;
    width?: string;
    type?: string;
    options?: unknown;
}

export interface TableMakerSettings {
    name: string;
    columns: Record<string, TableColumn>;
    rows: Record<string, Record<string, unknown>>;
    /** Optional per-value table caption (#60). */
    caption?: string;
    /** When false, the caption CP input is hidden (stored caption still preserved). */
    enableCaption?: boolean;
    captionLabel?: string;
    captionInstructions?: string;
    captionPlaceholder?: string;
    columnSettings?: Record<string, unknown>;
    typeOptions?: Record<string, string>;
    enableWidthColumn?: boolean;
    enableAlignmentColumn?: boolean;
    /** Custom label for the content table “Add a row” button. */
    addRowLabel?: string;
    minRows?: number | null;
    maxRows?: number | null;
    minColumns?: number | null;
    maxColumns?: number | null;
}

export interface ColumnDefinition {
    _id: string;
    heading: string;
    width: string;
    align: string;
    type: string;
    options: DropdownOption[];
}
