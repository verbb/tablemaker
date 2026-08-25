import { defineScreenshotScenario } from '@verbb/docs-screenshots/api';
import { seedTableMakerDocsFixture } from '../.screenshots/tablemaker/fixtures';
import { createTableMakerCleanupStep } from '../.screenshots/tablemaker/presets';

// Starter scenario — captures the seeded entry with a populated Table Maker field, so the
// editable table is visible. Retarget the selector at the table once the Phase 1 UI is built.
let entryEditRoute = '/admin/entries';

export default defineScreenshotScenario({
    id: 'feature-tour-usage',
    output: '_screenshots/feature-tour/usage.png',
    route: () => entryEditRoute,
    viewport: {
        width: 1320,
        height: 820,
        deviceScaleFactor: 2,
    },
    async setup(context) {
        const fixture = await seedTableMakerDocsFixture(context);
        entryEditRoute = fixture.entryEditRoute;
    },
    waitFor: [
        { type: 'selector', selector: '#content', state: 'visible' },
    ],
    preSteps: [
        createTableMakerCleanupStep(),
    ],
    steps: [],
    target: {
        type: 'selector',
        selector: '#content',
        padding: 20,
    },
    caption: 'A Table Maker field on an entry.',
    intent: 'Show the editable table UI with a populated columns/rows table.',
});
