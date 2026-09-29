import type { RichTextLinkOption } from './types.js';

export interface CraftCkeditorInstance {
    getData(): string;
    destroy(): Promise<unknown>;
    ui: {
        view: {
            body: {
                bodyCollectionContainer?: HTMLElement;
            };
        };
    };
    model: {
        document: {
            on(event: 'change:data', callback: () => void): void;
            off(event: 'change:data', callback: () => void): void;
        };
    };
    editing: {
        view: {
            focus(): void;
        };
    };
}

type CraftCkeditorCreate = (
    source: HTMLElement,
    config: Record<string, unknown>,
) => Promise<CraftCkeditorInstance>;

type CraftInlineCkeditorCreate = (
    source: HTMLElement,
    config: Record<string, unknown>,
) => Promise<CraftCkeditorInstance>;

type CkeditorModule = Record<string, unknown>;
type CkeditorModuleImporter = (specifier: string) => Promise<CkeditorModule>;

export interface CraftCkeditorRuntime {
    create: CraftCkeditorCreate;
    createInline: CraftInlineCkeditorCreate;
    plugins: unknown[];
}

export interface RichTextEditorSettings {
    elementSiteId?: number | null;
    richTextLinkOptions?: RichTextLinkOption[];
}

/** Shared safe CKEditor surface for both modal and inline rich-text cells. */
export const richTextEditorConfig = (settings: RichTextEditorSettings): Record<string, unknown> => ({
    elementSiteId: settings.elementSiteId ?? undefined,
    linkOptions: settings.richTextLinkOptions ?? [],
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'undo',
            'redo',
        ],
    },
    ui: {
        viewportOffset: { top: 44 },
        poweredBy: { position: 'outside', label: '' },
    },
});

/** Keep CKEditor's detached balloons in the same native-dialog top layer as the editor. */
export const attachCkeditorUiToDialog = (
    editor: CraftCkeditorInstance,
    dialog: HTMLElement,
): void => {
    const container = editor.ui.view.body.bodyCollectionContainer;

    if (container) {
        // CKEditor normally mounts floating UI under document.body. A native modal
        // dialog paints above that entire tree, so move this editor's own container
        // into the dialog's light DOM where CKEditor's global styles still apply.
        dialog.appendChild(container);

        // The light-DOM node is rendered through the dialog body's slot, which gives
        // it a layout origin controlled by Plugin Kit's native-dialog internals.
        // CKEditor writes document-based top/left coordinates to its balloons, so
        // measure the container's real origin after reparenting and move it back to
        // the document origin. This remains correct on deeply scrolled entry pages
        // and does not depend on the dialog's internal positioning implementation.
        container.style.position = 'absolute';
        container.style.left = '0';
        container.style.top = '0';
        container.style.width = '0';
        container.style.height = '0';
        container.style.overflow = 'visible';

        const rect = container.getBoundingClientRect();
        const scrollX = typeof window === 'undefined' ? 0 : window.scrollX;
        const scrollY = typeof window === 'undefined' ? 0 : window.scrollY;
        container.style.left = `${-scrollX - rect.left}px`;
        container.style.top = `${-scrollY - rect.top}px`;
    }
};

const importCkeditorModule: CkeditorModuleImporter = (specifier) => {
    return import(/* @vite-ignore */ specifier) as Promise<CkeditorModule>;
};

/** Resolve CKEditor through the import map registered by Craft's CKEditor plugin. */
export const loadCraftCkeditor = async (
    importer: CkeditorModuleImporter = importCkeditorModule,
): Promise<CraftCkeditorRuntime> => {
    const [craftModule, coreModule] = await Promise.all([
        importer('@craftcms/ckeditor'),
        importer('ckeditor5'),
    ]);
    const create = craftModule.create;
    const InlineEditor = coreModule.InlineEditor as { create?: CraftInlineCkeditorCreate } | undefined;
    const plugins = [
        coreModule.Essentials,
        coreModule.Paragraph,
        coreModule.Bold,
        coreModule.Italic,
        coreModule.AutoLink,
        coreModule.LinkEditing,
        craftModule.CraftLink,
        coreModule.List,
        coreModule.ListProperties,
    ];

    if (typeof create !== 'function' || typeof InlineEditor?.create !== 'function'
        || plugins.some((plugin) => typeof plugin !== 'function')) {
        throw new Error('CKEditor control-panel modules are unavailable.');
    }

    return {
        create: create as CraftCkeditorCreate,
        createInline: (source, config) => InlineEditor.create!(source, {
            ...config,
            licenseKey: 'GPL',
        }),
        plugins,
    };
};

/**
 * One on-demand CKEditor surface for a rich-text cell. Keeping it outside the
 * grid avoids both cramped toolbars and an editor instance for every cell.
 */
export class RichTextCellDialog {
    private dialog: HTMLElement | null = null;
    private source: HTMLTextAreaElement | null = null;
    private editor: CraftCkeditorInstance | null = null;
    private resolvePromise: ((value: string | null) => void) | null = null;
    private mountToken = 0;

    constructor(private readonly settings: RichTextEditorSettings = {}) {
    }

    open(columnHeading: string, value: unknown): Promise<string | null> {
        this.close(null);

        return new Promise((resolve) => {
            this.resolvePromise = resolve;
            this.mount(columnHeading, String(value ?? ''));
        });
    }

    private mount(columnHeading: string, value: string): void {
        const token = ++this.mountToken;
        const dialog = document.createElement('pk-dialog');
        dialog.className = 'tm-richtext-dialog';
        dialog.setAttribute('label', columnHeading
            ? Craft.t('tablemaker', 'Edit rich text for “{heading}”', { heading: columnHeading })
            : Craft.t('tablemaker', 'Edit rich text'));
        dialog.setAttribute('open', '');

        const body = document.createElement('div');
        body.className = 'tm-richtext-dialog-body';

        const source = document.createElement('textarea');
        source.className = 'text fullwidth tm-richtext-source';
        source.rows = 10;
        source.value = value;
        body.appendChild(source);
        dialog.appendChild(body);

        const error = document.createElement('p');
        error.className = 'error tm-richtext-error';
        error.hidden = true;
        body.appendChild(error);

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
        done.setAttribute('disabled', '');
        done.textContent = Craft.t('app', 'Done');
        done.addEventListener('click', () => {
            this.close(this.editor?.getData() ?? source.value);
        });
        dialog.appendChild(done);

        dialog.addEventListener('pk-open-change', ((event: CustomEvent<{ open?: boolean }>) => {
            if (event.target === dialog && event.detail?.open === false && this.resolvePromise) {
                this.close(null);
            }
        }) as EventListener);

        document.body.appendChild(dialog);
        this.dialog = dialog;
        this.source = source;

        void this.createEditor(source, done, error, token);
    }

    private async createEditor(
        source: HTMLTextAreaElement,
        done: HTMLElement,
        error: HTMLElement,
        token: number,
    ): Promise<void> {
        try {
            const { create, plugins } = await loadCraftCkeditor();

            const editor = await create(source, {
                ...richTextEditorConfig(this.settings),
                accessibleFieldName: Craft.t('tablemaker', 'Rich text cell'),
                plugins,
            });

            if (token !== this.mountToken || !this.dialog) {
                await editor.destroy();
                return;
            }

            attachCkeditorUiToDialog(editor, this.dialog);
            this.editor = editor;
            done.removeAttribute('disabled');
            editor.editing.view.focus();
        } catch (exception) {
            if (token !== this.mountToken || !this.dialog) {
                return;
            }

            // Keep the value recoverable when a third-party asset fails after the
            // server reported CKEditor as enabled.
            error.textContent = Craft.t(
                'tablemaker',
                'CKEditor could not be loaded. You can edit the HTML directly instead.',
            );
            error.hidden = false;
            done.removeAttribute('disabled');
            source.focus();
            console.error(exception);
        }
    }

    private close(value: string | null): void {
        const resolve = this.resolvePromise;
        this.resolvePromise = null;
        this.mountToken += 1;

        if (this.editor) {
            void this.editor.destroy();
            this.editor = null;
        }

        if (this.dialog) {
            this.dialog.removeAttribute('open');
            this.dialog.remove();
            this.dialog = null;
        }

        this.source = null;

        if (resolve) {
            resolve(value);
        }
    }
}
