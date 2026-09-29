import type { DropdownOption } from './options.js';

export type EditColumnsPosition = 'auto' | 'fieldHeader' | 'tableHeader';
export type RichTextEditingMode = 'modal' | 'inline';

export interface RichTextLinkOption {
    label: string;
    elementType: string;
    refHandle: string;
    sources?: string[];
    criteria?: Record<string, unknown>;
}

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
    typeLabels?: Record<string, string>;
    /** Whether the installed and enabled CKEditor plugin can edit rich-text cells. */
    ckeditorAvailable?: boolean;
    /** Whether rich-text cells use a focused dialog or an in-place editor. */
    richTextEditingMode?: RichTextEditingMode;
    /** Craft element selectors offered by the rich-text link control. */
    richTextLinkOptions?: RichTextLinkOption[];
    /** Site used by Craft element selectors and reference tags. */
    elementSiteId?: number | null;
    enableWidthColumn?: boolean;
    enableAlignmentColumn?: boolean;
    /** Where the Configure action is mounted in the field input. */
    editColumnsPosition?: EditColumnsPosition;
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
