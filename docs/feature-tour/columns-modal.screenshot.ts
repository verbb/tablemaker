import { defineScreenshotScenario } from '@verbb/docs-screenshots/api';
import { seedTableMakerDocsFixture } from '../.screenshots/tablemaker/fixtures';
import {
    createOpenTableMakerColumnsModalSteps,
    createTableMakerCleanupStep,
} from '../.screenshots/tablemaker/presets';

let entryEditRoute = '/admin/entries';

export default defineScreenshotScenario({
    id: 'feature-tour-columns-modal',
    output: '_screenshots/feature-tour/columns-modal.png',
    route: () => entryEditRoute,
    viewport: {
        width: 1100,
        height: 900,
        deviceScaleFactor: 2,
    },
    async setup(context) {
        const fixture = await seedTableMakerDocsFixture(context);
        entryEditRoute = fixture.entryEditRoute;
    },
    waitFor: [
        { type: 'selector', selector: '.tm-edit-columns', state: 'visible', timeout: 30000 },
        { type: 'selector', selector: '#tablemaker-docs-screenshot-stage', state: 'visible', timeout: 60000 },
    ],
    preSteps: [
        createTableMakerCleanupStep(),
        { type: 'wait', waitFor: { type: 'timeout', ms: 600 } },
        ...createOpenTableMakerColumnsModalSteps(),
    ],
    steps: [],
    target: {
        type: 'selector',
        selector: '#tablemaker-docs-screenshot-stage',
        padding: 0,
    },
    caption: 'Edit columns modal with heading, width, and alignment.',
    intent: 'Show the Columns schema dialog for configuring table structure.',
});
