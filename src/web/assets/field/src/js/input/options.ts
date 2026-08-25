import type { PkEditableTableOption } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';

export interface DropdownOption {
    label: string;
    value: string;
    default?: boolean;
}

/** Accept Craft associative maps (`value => label`) or `{label,value,default}[]`. */
export const normalizeDropdownOptions = (raw: unknown): DropdownOption[] => {
    if (!raw) {
        return [];
    }

    if (Array.isArray(raw)) {
        return raw.map((option) => {
            if (typeof option === 'string') {
                return { label: option, value: option, default: false };
            }

            const row = option as Record<string, unknown>;

            return {
                label: String(row.label ?? row.value ?? ''),
                value: String(row.value ?? row.label ?? ''),
                default: Boolean(row.default ?? row.isDefault),
            };
        });
    }

    if (typeof raw === 'object') {
        return Object.entries(raw as Record<string, unknown>).map(([value, label]) => ({
            label: String(label ?? value),
            value: String(value),
            default: false,
        }));
    }

    return [];
};

export const toPkSelectOptions = (raw: unknown): PkEditableTableOption[] => {
    return normalizeDropdownOptions(raw).map(({ label, value }) => ({ label, value }));
};

export const defaultSelectValue = (raw: unknown): string => {
    const options = normalizeDropdownOptions(raw);
    const preferred = options.find((option) => option.default);

    return preferred?.value ?? options[0]?.value ?? '';
};
