import '../css/tablemaker.css';

import { allDefined } from '@verbb/plugin-kit-web/plugin-kit';

import { TABLEMAKER_PK_COMPONENTS } from './tablemakerPkComponents.js';
import { TableMakerInput } from './input/TableMakerInput';

const INPUT_SELECTOR = '[data-tablemaker-auto-mount]';

const mounted = new WeakSet<Element>();

const mount = (root: Element): void => {
    if (!(root instanceof HTMLElement) || mounted.has(root)) {
        return;
    }

    new TableMakerInput(root).init();
    mounted.add(root);
};

const mountAll = (scope: ParentNode = document): void => {
    if (scope instanceof HTMLElement && scope.matches(INPUT_SELECTOR)) {
        mount(scope);
    }

    scope.querySelectorAll(INPUT_SELECTOR).forEach(mount);
};

const startObserver = (): void => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    mountAll(node as HTMLElement);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
};

Craft.TableMaker = Craft.TableMaker || {};
Craft.TableMaker.mountAll = mountAll;
Craft.TableMaker.startAutoMountObserver = (): void => {
    if (Craft.TableMaker.__autoMountObserverStarted) {
        return;
    }

    Craft.TableMaker.__autoMountObserverStarted = true;
    startObserver();
};

const pkMatch = (tag: string): boolean => tag.startsWith('pk-');

const bootstrap = async (): Promise<void> => {
    await allDefined({ match: pkMatch, additionalElements: [...TABLEMAKER_PK_COMPONENTS] });

    Craft.TableMaker.mountAll();
    Craft.TableMaker.startAutoMountObserver();
};

void bootstrap();
