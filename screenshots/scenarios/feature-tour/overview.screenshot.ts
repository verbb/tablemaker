import { defineScreenshotScenario } from '@verbb/craft-screenshots/api';

import { seedTableMakerFixture } from '../../support/fixtures';
import { createTableMakerFrameStep } from '../../support/presets';

let entryEditRoute = '/admin/entries';

export default defineScreenshotScenario({
    id: 'table-maker-feature-tour-overview',
    output: 'feature-tour/table-maker-landscape.png',
    route: () => entryEditRoute,
    viewport: {
        width: 1260,
        height: 620,
        deviceScaleFactor: 2,
    },
    expectedOutput: {
        width: 2276,
        height: 758,
    },
    async setup(context) {
        const fixture = await seedTableMakerFixture(context);
        entryEditRoute = fixture.entryEditRoute;
    },
    waitFor: [
        { type: 'loadState', state: 'networkidle' },
        { type: 'selector', selector: 'input.table-maker-field', state: 'attached' },
    ],
    preSteps: [
        createTableMakerFrameStep(),
        { type: 'wait', waitFor: { type: 'selector', selector: '#table-maker-screenshot-frame', state: 'visible' } },
        { type: 'wait', waitFor: { type: 'timeout', ms: 250 } },
    ],
    target: {
        type: 'selector',
        selector: '#table-maker-screenshot-frame',
        padding: 0,
    },
    caption: 'Table Maker field showing editable columns and rows in Craft 5.',
    intent: 'Recreates the production landscape image with the current Table Maker field interface and representative table content.',
});
