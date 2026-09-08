import type {
    ScreenshotStep,
    ScreenshotTarget,
    ScreenshotViewport,
} from '@verbb/docs-screenshots/types';
import {
    createCpDetailViewPreset as createBaseCpDetailViewPreset,
    createCpFocusedRegionPreset as createBaseCpFocusedRegionPreset,
    createCpFullScreenPreset as createBaseCpFullScreenPreset,
    createCpModalPreset as createBaseCpModalPreset,
} from '@verbb/docs-screenshots/presets';

// Plugin-local preset layer. Generic capture math lives in @verbb/docs-screenshots;
// this file only adds Table-Maker-specific CP chrome cleanup + framing steps. As the
// Phase 1 editable-table UI lands, add promo-crop steps here (model on Hyper's presets.ts).

type CpPresetOptions = {
    selector?: string;
    viewport?: ScreenshotViewport;
    padding?: NonNullable<Extract<ScreenshotTarget, { type: 'selector' }>['padding']>;
    hidePlaceholder?: boolean;
};

/** Craft CP page wash — use when the shot should read as in-CP, not a cutout. */
export const TABLEMAKER_CP_GRAY = '#f3f7fc';

const scrollResetSelectors = [
    'html',
    'body',
    '#content-container',
    '#main-content',
    '#content',
    '.content-pane',
];

function buildCleanupCss({ hidePlaceholder = true }: { hidePlaceholder?: boolean }): string {
    const rules = [
        'craft-global-sidebar, footer#global-footer { display: none !important; }',
        'craft-global-sidebar { width: 0 !important; min-width: 0 !important; flex: 0 0 0 !important; }',
        '#global-header * { display: none !important; }',
        '#details-container { position: static !important; }',
        'body.fixed-header #header { position: static !important; top: auto !important; }',
        'body.fixed-header #content-container { padding-top: 0 !important; }',
        '#content-container, #main-content, #content { max-width: none !important; }',
        '#content-container { padding: 24px !important; }',
        '#main-content { padding-top: 0 !important; }',
        '#page-container, #content-container, #main-content, #content, .content-pane { left: 0 !important; margin-left: 0 !important; }',
        'html, body, * { scrollbar-width: none !important; -ms-overflow-style: none !important; }',
        'html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }',
    ];

    if (hidePlaceholder) {
        rules.push('.cp-placeholder, .placeholder { display: none !important; }');
    }

    return rules.join('\n');
}

/** Strip Craft chrome (global sidebar/header/footer, scrollbars) for focused field crops. */
export function createTableMakerCleanupStep({ hidePlaceholder = true }: { hidePlaceholder?: boolean } = {}): ScreenshotStep {
    const css = buildCleanupCss({ hidePlaceholder });

    return {
        type: 'evaluate',
        expression: `
            (() => {
                const styleId = 'tablemaker-docs-screenshot-cleanup';
                let style = document.getElementById(styleId);

                if (!(style instanceof HTMLStyleElement)) {
                    style = document.createElement('style');
                    style.id = styleId;
                    document.head.appendChild(style);
                }

                style.textContent = ${JSON.stringify(css)} + '\\n#details, #details-container, #sidebar, .meta { display: none !important; }';

                ${JSON.stringify(scrollResetSelectors)}.forEach((selector) => {
                    document.querySelectorAll(selector).forEach((element) => {
                        if (element instanceof HTMLElement) {
                            element.scrollTop = 0;
                            element.scrollLeft = 0;
                        }
                    });
                });

                window.scrollTo(0, 0);
            })();
        `,
    };
}

/** Stage the Table Maker field on white with optional inset pad for marketing crops. */
export function createTableMakerFieldPromoCropStep({
    width = 900,
    padding = 20,
    background = '#ffffff',
}: {
    width?: number;
    padding?: number;
    background?: string;
} = {}): ScreenshotStep {
    return {
        type: 'evaluate',
        expression: `
            (() => {
                document.getElementById('tablemaker-docs-screenshot-stage')?.remove();

                const field = document.querySelector('.field:has(.tablemaker-field)');
                if (!(field instanceof HTMLElement)) {
                    throw new Error('Table Maker field not found for promo crop.');
                }

                const inset = ${padding};
                const frameWidth = ${width};
                const stageBackground = ${JSON.stringify(background)};

                const stage = document.createElement('div');
                stage.id = 'tablemaker-docs-screenshot-stage';
                stage.style.cssText = [
                    'position:fixed',
                    'left:0',
                    'top:0',
                    'width:' + frameWidth + 'px',
                    'z-index:2147483640',
                    'background:' + stageBackground,
                    'padding:0',
                    'box-sizing:content-box',
                    'overflow:hidden',
                ].join(';');

                field.style.margin = '0';
                field.style.maxWidth = '100%';
                field.style.background = '#fff';
                stage.appendChild(field);
                document.body.appendChild(stage);

                // Content-box stage: measure flush, then apply white inset.
                const box = field.getBoundingClientRect();
                stage.style.width = Math.ceil(box.width) + 'px';
                stage.style.height = Math.ceil(box.height) + 'px';
                stage.style.padding = inset + 'px';

                document.documentElement.style.background = stageBackground;
                document.body.style.background = stageBackground;
                Array.from(document.body.children).forEach((child) => {
                    if (child instanceof HTMLElement && child.id !== 'tablemaker-docs-screenshot-stage') {
                        child.style.setProperty('display', 'none', 'important');
                    }
                });
            })();
        `,
    };
}

/**
 * Open Edit columns and frame the schema dialog flush (header + table + footer).
 */
export function createOpenTableMakerColumnsModalSteps({
    width = 612,
}: {
    /** Dialog panel width for docs crops (default 100px narrower than the CP default). */
    width?: number;
} = {}): ScreenshotStep[] {
    return [
        {
            type: 'evaluate',
            expression: `
                (() => {
                    const trigger = document.querySelector('.tm-edit-columns');
                    if (!(trigger instanceof HTMLElement)) {
                        throw new Error('Edit columns trigger not found.');
                    }
                    trigger.click();
                })();
            `,
        },
        {
            type: 'wait',
            waitFor: {
                type: 'selector',
                selector: 'pk-dialog.tm-columns-schema-dialog',
                state: 'attached',
                timeout: 30000,
            },
        },
        {
            type: 'wait',
            waitFor: {
                type: 'selector',
                selector: 'pk-dialog.tm-columns-schema-dialog pk-editable-table',
                state: 'visible',
                timeout: 30000,
            },
        },
        { type: 'wait', waitFor: { type: 'timeout', ms: 400 } },
        {
            type: 'evaluate',
            expression: `
                (() => {
                    document.getElementById('tablemaker-docs-screenshot-stage')?.remove();

                    const dialog = document.querySelector('pk-dialog.tm-columns-schema-dialog');
                    if (!(dialog instanceof HTMLElement)) {
                        throw new Error('Columns schema dialog not found.');
                    }

                    dialog.id = 'tablemaker-docs-columns-dialog';
                    dialog.style.setProperty('opacity', '1', 'important');
                    dialog.style.setProperty('visibility', 'visible', 'important');
                    dialog.style.setProperty('--pk-dialog-width', ${width} + 'px', 'important');
                    dialog.style.setProperty('--pk-dialog-max-width', ${width} + 'px', 'important');

                    // Let the full schema table paint without body max-height clipping.
                    const styleId = 'tablemaker-docs-columns-modal-css';
                    let style = document.getElementById(styleId);
                    if (!(style instanceof HTMLStyleElement)) {
                        style = document.createElement('style');
                        style.id = styleId;
                        document.head.appendChild(style);
                    }
                    style.textContent = [
                        '#tablemaker-docs-columns-dialog::part(panel) {',
                        '  max-height: none !important;',
                        '  width: ' + ${width} + 'px !important;',
                        '  max-width: ' + ${width} + 'px !important;',
                        '}',
                        '#tablemaker-docs-columns-dialog::part(body) {',
                        '  max-height: none !important;',
                        '  overflow: visible !important;',
                        '}',
                        // White page wash so rounded-panel anti-alias isn’t CP-grey in the PNG corners.
                        'html, body, #page-container, #content { background: #ffffff !important; }',
                        'pk-dialog.tm-columns-schema-dialog::part(panel)::backdrop,',
                        'pk-dialog.tm-columns-schema-dialog::backdrop {',
                        '  background: #ffffff !important;',
                        '  opacity: 1 !important;',
                        '}',
                    ].join('\\n');

                    // Hide the entry field behind the dialog for a clean cutout.
                    const field = document.querySelector('.field:has(.tablemaker-field)');
                    if (field instanceof HTMLElement) {
                        field.style.setProperty('opacity', '0', 'important');
                    }

                    // Force a white full-page wash under the open dialog (UA backdrop is unreliable).
                    document.getElementById('tablemaker-docs-columns-wash')?.remove();
                    const wash = document.createElement('div');
                    wash.id = 'tablemaker-docs-columns-wash';
                    wash.style.cssText = [
                        'position:fixed',
                        'inset:0',
                        'background:#ffffff',
                        'z-index:2147483000',
                        'pointer-events:none',
                    ].join(';');
                    document.body.appendChild(wash);
                    dialog.style.setProperty('z-index', '2147483600', 'important');

                    const panel =
                        dialog.shadowRoot?.querySelector('[part="panel"], .panel, dialog')
                        || dialog;

                    if (!(panel instanceof HTMLElement)) {
                        throw new Error('Columns dialog panel not found.');
                    }

                    // showModal() uses the top layer (wash can't sit behind it). Switch to
                    // non-modal show() over a white page so corner AA isn’t CP-grey.
                    if (typeof panel.close === 'function' && typeof panel.show === 'function') {
                        try {
                            panel.close();
                            panel.show();
                        } catch (_) {
                            // Keep modal open if UA rejects the switch.
                        }
                    }

                    panel.style.position = 'fixed';
                    panel.style.margin = '0';
                    panel.style.zIndex = '2147483600';

                    return new Promise((resolve) => {
                        requestAnimationFrame(() => {
                            const vw = window.innerWidth;
                            const vh = window.innerHeight;
                            const rough = panel.getBoundingClientRect();
                            panel.style.left = Math.max(24, (vw - rough.width) / 2) + 'px';
                            panel.style.top = Math.max(24, (vh - rough.height) / 2) + 'px';

                            requestAnimationFrame(() => {
                                const box = panel.getBoundingClientRect();
                                const left = Math.max(0, Math.floor(box.left));
                                const top = Math.max(0, Math.floor(box.top));
                                const right = Math.ceil(box.right);
                                const bottom = Math.ceil(box.bottom);

                                // Docs cutout: hide the built-in close control. Opening focuses it, and
                                // the soft glyph AA reads as a focus glow in marketing crops. Cancel/Done
                                // already cover dismiss — keep the schema table as the hero.
                                const hideClose = (root) => {
                                    if (!root?.querySelectorAll) {
                                        return;
                                    }
                                    root.querySelectorAll('button.close, [data-dialog="close"]').forEach((el) => {
                                        if (el instanceof HTMLElement) {
                                            el.blur();
                                            el.style.setProperty('display', 'none', 'important');
                                        }
                                    });
                                };
                                if (document.activeElement instanceof HTMLElement) {
                                    document.activeElement.blur();
                                }
                                hideClose(dialog.shadowRoot);
                                if (panel instanceof HTMLElement) {
                                    hideClose(panel);
                                    hideClose(panel.shadowRoot);
                                }
                                if (document.body instanceof HTMLElement) {
                                    document.body.setAttribute('tabindex', '-1');
                                    document.body.focus({ preventScroll: true });
                                }

                                const stage = document.createElement('div');
                                stage.id = 'tablemaker-docs-screenshot-stage';
                                stage.style.cssText = [
                                    'position:fixed',
                                    'left:' + left + 'px',
                                    'top:' + top + 'px',
                                    'width:' + Math.max(1, right - left) + 'px',
                                    'height:' + Math.max(1, bottom - top) + 'px',
                                    'pointer-events:none',
                                    'z-index:2147483640',
                                    'background:transparent',
                                    'box-sizing:border-box',
                                ].join(';');
                                document.body.appendChild(stage);
                                resolve(true);
                            });
                        });
                    });
                })();
            `,
        },
        { type: 'wait', waitFor: { type: 'timeout', ms: 300 } },
        // Re-assert unfocused close in case show()/focus trap restored :focus-visible.
        {
            type: 'evaluate',
            expression: `
                (() => {
                    const dialog = document.querySelector('pk-dialog.tm-columns-schema-dialog');
                    if (dialog instanceof HTMLElement && dialog.shadowRoot) {
                        dialog.shadowRoot.querySelectorAll('button.close, [data-dialog="close"]').forEach((el) => {
                            if (el instanceof HTMLElement) {
                                el.style.setProperty('display', 'none', 'important');
                            }
                        });
                    }
                    if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                    }
                })();
            `,
        },
        { type: 'wait', waitFor: { type: 'timeout', ms: 100 } },
    ];
}

export function createCpFocusedRegionPreset(options: CpPresetOptions = {}) {
    const preset = createBaseCpFocusedRegionPreset(options);

    return {
        ...preset,
        steps: [
            createTableMakerCleanupStep({ hidePlaceholder: options.hidePlaceholder }),
            ...preset.steps,
        ] satisfies ScreenshotStep[],
    };
}

export function createCpFullScreenPreset(options: CpPresetOptions = {}) {
    const preset = createBaseCpFullScreenPreset(options);

    return {
        ...preset,
        steps: [
            createTableMakerCleanupStep({ hidePlaceholder: options.hidePlaceholder }),
            ...preset.steps,
        ] satisfies ScreenshotStep[],
    };
}

export function createCpModalPreset(options: CpPresetOptions = {}) {
    return createBaseCpModalPreset(options);
}

export function createCpDetailViewPreset(options: CpPresetOptions = {}) {
    const preset = createBaseCpDetailViewPreset(options);

    return {
        ...preset,
        steps: [
            createTableMakerCleanupStep({ hidePlaceholder: options.hidePlaceholder }),
            ...preset.steps,
        ] satisfies ScreenshotStep[],
    };
}
