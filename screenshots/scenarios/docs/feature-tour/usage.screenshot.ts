import { defineScreenshotScenario } from '@verbb/craft-screenshots/api';
import { seedTableMakerDocsFixture } from '../../../support/docs/fixtures';
import {
    createTableMakerCleanupStep,
    createTableMakerFieldPromoCropStep,
} from '../../../support/docs/presets';

let entryEditRoute = '/admin/entries';

export default defineScreenshotScenario({
    id: 'feature-tour-usage',
    output: 'docs/feature-tour/usage.png',
    route: () => entryEditRoute,
    viewport: {
        width: 1100,
        height: 900,
        deviceScaleFactor: 2,
    },
    expectedOutput: {
        width: 1200,
        height: 674,
    },
    async setup(context) {
        const fixture = await seedTableMakerDocsFixture(context);
        entryEditRoute = fixture.entryEditRoute;
    },
    waitFor: [
        { type: 'selector', selector: 'pk-editable-table.tm-content-table', state: 'visible', timeout: 30000 },
        { type: 'selector', selector: 'pk-editable-table.tm-content-table tr[data-row-id="row2"]', state: 'visible', timeout: 30000 },
        { type: 'selector', selector: 'pk-field.tm-caption-field', state: 'visible', timeout: 30000 },
        { type: 'selector', selector: 'pk-field.tm-caption-field input', state: 'visible', timeout: 30000 },
    ],
    preSteps: [
        createTableMakerCleanupStep(),
    ],
    steps: [
        // White stage + 20px inset for marketing-friendly crops.
        createTableMakerFieldPromoCropStep({ padding: 20, width: 560, background: '#ffffff' }),
        { type: 'wait', waitFor: { type: 'selector', selector: '#tablemaker-docs-screenshot-stage', state: 'visible', timeout: 30000 } },
        { type: 'wait', waitFor: { type: 'timeout', ms: 300 } },
    ],
    target: {
        type: 'selector',
        selector: '#tablemaker-docs-screenshot-stage',
        padding: 0,
    },
    caption: 'Table Maker field with Plan/Price rows and caption.',
    intent: 'Show a simple editable content table with caption on white.',
});
