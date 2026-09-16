import { afterEach, describe, expect, it, vi } from 'vitest';

import { defaultSelectValue, normalizeDropdownOptions } from './options.js';
import {
    ensurePrefixedKey,
    seedColumns,
    normalizeDateForEditor,
    normalizeTimeForEditor,
    serializeValueBlob,
} from './shared.js';

describe('table editor normalization', () => {
    afterEach(() => vi.unstubAllGlobals());

    it('accepts pasted dates through the host format and calendar validation', () => {
        const datepickerOptions = { dateFormat: 'dd/mm/yy' };
        vi.stubGlobal('Craft', { datepickerOptions });
        const parseDate = vi.fn((format: string, value: string) => {
            if (format === 'dd/mm/yy' && value === '01/02/2026') {
                return new Date(2026, 1, 1);
            }
            throw new Error('Invalid date');
        });
        vi.stubGlobal('jQuery', { datepicker: { parseDate } });
        expect(normalizeDateForEditor('01/02/2026')).toBe('2026-02-01');
        expect(parseDate).toHaveBeenCalledWith('dd/mm/yy', '01/02/2026', datepickerOptions);
        expect(normalizeDateForEditor('31/02/2026')).toBe('');
    });

    it('validates ISO calendar days before accepting a pasted date', () => {
        for (const value of ['2026-02-31', '2026-02-29', '2100-02-29', '2026-00-10', '2026-13-01', '0000-01-01']) {
            expect(normalizeDateForEditor(value)).toBe('');
        }
        expect(normalizeDateForEditor('2024-02-29')).toBe('2024-02-29');
        expect(normalizeDateForEditor('2000-02-29T19:05:00+10:00')).toBe('2000-02-29');
        expect(normalizeDateForEditor('0099-01-01')).toBe('0099-01-01');
    });

    it('starts a restricted field with an allowed column type', () => {
        const columns = seedColumns({ name: 'numbers', columns: {}, rows: {}, typeOptions: { number: 'Number' } });
        expect(columns[0].type).toBe('number');
    });
    it('normalizes Craft maps and honours an explicit dropdown default', () => {
        expect(normalizeDropdownOptions({ basic: 'Basic', pro: 'Pro' })).toEqual([
            { label: 'Basic', value: 'basic', default: false },
            { label: 'Pro', value: 'pro', default: false },
        ]);
        expect(defaultSelectValue([
            { label: 'Basic', value: 'basic' },
            { label: 'Pro', value: 'pro', default: true },
        ])).toBe('pro');
    });

    it('converts stored date/time shapes without leaking invalid objects', () => {
        expect(normalizeDateForEditor('2026-09-13T11:12:00+10:00')).toBe('2026-09-13');
        expect(normalizeDateForEditor('not-a-date')).toBe('');
        expect(normalizeTimeForEditor('2026-09-13T07:05:00Z')).toBe('07:05');
        expect(normalizeTimeForEditor('7:05 pm')).toBe('19:05');
        expect(normalizeTimeForEditor('12:00 AM')).toBe('00:00');
        expect(normalizeTimeForEditor('12:00 PM')).toBe('12:00');
    });

    it('keeps canonical keys unique and fills the next available position', () => {
        const used = new Set(['col0', 'col2']);

        expect(ensurePrefixedKey('col2', 'col', used)).toBe('col1');
        expect(ensurePrefixedKey('legacy', 'col', used)).toBe('col3');
    });

    it('keeps existing named keys when new columns and rows are inserted before them', () => {
        const columns = ['col_new', 'col0', 'col1'].map((_id) => ({
            _id, heading: _id, type: 'singleline', width: '', align: 'left', options: [],
        }));
        const payload = JSON.parse(serializeValueBlob(columns, [
            { _id: 'row_new', col_new: 'New', col0: '', col1: '' },
            { _id: 'row0', col_new: '', col0: 'Original A', col1: 'Original B' },
            { _id: 'row1', col_new: '', col0: 'Original C', col1: 'Original D' },
        ], { name: 'insertions', columns: {}, rows: {} }));
        expect(Object.keys(payload.columns)).toEqual(['col2', 'col0', 'col1']);
        expect(Object.keys(payload.rows)).toEqual(['row2', 'row0', 'row1']);
        expect(payload.rows.row0.col0).toBe('Original A');
        expect(payload.rows.row1.col1).toBe('Original D');
    });

    it('serializes temporary column IDs as canonical keys without losing their cells', () => {
        const payload = JSON.parse(serializeValueBlob([
            { _id: 'col_mabc_123', heading: 'Plan', type: 'singleline', width: '', align: 'left', options: [] },
            { _id: 'col0', heading: 'Price', type: 'singleline', width: '', align: 'left', options: [] },
        ], [
            { _id: 'row_temporary9', col_mabc_123: 'Basic', col0: '$9' },
        ], { name: 'pricing', columns: {}, rows: {} }));

        expect(Object.keys(payload.columns)).toEqual(['col1', 'col0']);
        expect(payload.rows).toEqual({ row0: { col1: 'Basic', col0: '$9' } });
    });

    it('serializes the stable initial payload used by Craft change tracking', () => {
        expect(serializeValueBlob([
            {
                _id: 'col0',
                heading: 'Plan',
                type: 'singleline',
                width: '',
                align: 'left',
                options: [],
            },
        ], [
            { _id: 'row0', col0: 'Basic' },
        ], {
            name: 'tableMaker',
            columns: {},
            rows: {},
            enableWidthColumn: true,
            enableAlignmentColumn: true,
        })).toBe('{"columns":{"col0":{"heading":"Plan","type":"singleline","width":"","align":"left"}},"rows":{"row0":{"col0":"Basic"}}}');
    });

    it('serializes explicit false defaults for select options', () => {
        const payload = serializeValueBlob([{
            _id: 'col0',
            heading: 'Plan',
            type: 'select',
            width: '',
            align: 'left',
            options: [
                { label: 'Basic', value: 'basic' },
                { label: 'Pro', value: 'pro', default: true },
            ],
        }], [
            { _id: 'row0', col0: 'basic' },
        ], {
            name: 'tableMaker',
            columns: {},
            rows: {},
            enableWidthColumn: true,
            enableAlignmentColumn: true,
        });

        expect(payload).toContain('"options":[{"label":"Basic","value":"basic","default":false},{"label":"Pro","value":"pro","default":true}]');
    });
});
