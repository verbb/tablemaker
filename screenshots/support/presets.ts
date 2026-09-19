import type { ScreenshotStep } from '@verbb/craft-screenshots/types';

export function createTableMakerFrameStep(): ScreenshotStep {
    return {
        type: 'evaluate',
        expression: `
            (() => {
                document.getElementById('table-maker-screenshot-frame')?.remove();
                const input = document.querySelector('input.table-maker-field');
                const outerField = input?.closest('.field');
                const tables = outerField
                    ? Array.from(outerField.querySelectorAll('table.editable, table[data-id]'))
                        .map((table) => table.closest('.field'))
                        .filter((field, index, fields) => field && fields.indexOf(field) === index)
                    : [];

                if (tables.length < 2) throw new Error('Table Maker column and content fields were not found.');

                const frame = document.createElement('div');
                frame.id = 'table-maker-screenshot-frame';
                frame.style.cssText = [
                    'position:fixed', 'left:0', 'top:0', 'width:1138px', 'height:379px',
                    'box-sizing:border-box', 'padding:28px', 'display:grid', 'grid-template-columns:1fr 1fr',
                    'gap:26px', 'overflow:hidden', 'background:#ffffff', 'z-index:2147483646',
                ].join(';');

                tables.slice(0, 2).forEach((field) => {
                    field.style.margin = '0';
                    field.style.minWidth = '0';
                    frame.appendChild(field);
                });

                document.body.appendChild(frame);
                document.documentElement.style.background = '#ffffff';
                document.body.style.margin = '0';
                document.body.style.overflow = 'hidden';
            })();
        `,
    };
}
