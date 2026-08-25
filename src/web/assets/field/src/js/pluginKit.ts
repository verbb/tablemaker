import '@verbb/plugin-kit-web/plugin-kit.css';

// Named deep imports — importing a component module runs its `@customElement`
// registration side effect. Referencing the classes from the registrar keeps the
// decorator modules from being tree-shaken.
import { PkButton } from '@verbb/plugin-kit-web/components/button/pk-button.js';
import { PkDialog } from '@verbb/plugin-kit-web/components/dialog/pk-dialog.js';
import { PkEditableTable } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';
import { PkField } from '@verbb/plugin-kit-web/components/field/pk-field.js';
import { PkIcon } from '@verbb/plugin-kit-web/components/icon/pk-icon.js';
import { PkInput } from '@verbb/plugin-kit-web/components/input/pk-input.js';

// Opt-in glyphs for `<pk-icon icon="…">`.
import {
    check,
    ellipsis,
    gear,
    plus,
    registerIcons,
    trash,
    xmark,
} from '@verbb/plugin-kit-icons';

import { TABLEMAKER_PK_COMPONENTS } from './tablemakerPkComponents.js';

registerIcons({
    check,
    ellipsis,
    gear,
    plus,
    trash,
    xmark,
});

/** Constructors whose modules run `@customElement` — must stay reachable so Rollup can't DCE them. */
const TABLEMAKER_PK_CTORS = [PkButton, PkDialog, PkEditableTable, PkField, PkIcon, PkInput] as const;

let registered = false;

/** Entry hook for the plugin-kit-register bundle. */
export async function registerTableMakerPluginKit(): Promise<void> {
    if (registered) {
        return;
    }

    for (const Ctor of TABLEMAKER_PK_CTORS) {
        if (typeof Ctor !== 'function') {
            throw new Error('Table Maker Plugin Kit constructor missing from bundle');
        }
    }

    await Promise.all(TABLEMAKER_PK_COMPONENTS.map((tag) => customElements.whenDefined(tag)));
    registered = true;
}
