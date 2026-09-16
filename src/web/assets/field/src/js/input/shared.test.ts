import { describe, expect, it } from 'vitest';

import { defaultSelectValue, normalizeDropdownOptions } from './options.js';
import {
    ensurePrefixedKey,
    normalizeDateForEditor,
    normalizeTimeForEditor,
    serializeValueBlob,
} from './shared.js';

describe('table editor normalization', () => {
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
        expect(normalizeTimeForEditor('7:05 pm')).toBe('07:05');
    });

    it('keeps canonical keys unique and fills the next available position', () => {
        const used = new Set(['col0', 'col2']);

        expect(ensurePrefixedKey('col2', 'col', used)).toBe('col1');
        expect(ensurePrefixedKey('legacy', 'col', used)).toBe('col3');
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
