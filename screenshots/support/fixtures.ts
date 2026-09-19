import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { ScreenshotSetupContext } from '@verbb/craft-screenshots/types';

type TableMakerFixture = { entryEditRoute: string };
const supportDir = dirname(fileURLToPath(import.meta.url));
const seedScript = readFileSync(join(supportDir, 'seed', 'seed-table-maker-entry.php'), 'utf8');

export async function seedTableMakerFixture(context: ScreenshotSetupContext): Promise<TableMakerFixture> {
    const output = await context.runCraftScript(seedScript, { label: 'seed-table-maker-entry' });
    const fixture = JSON.parse(output.trim()) as TableMakerFixture;

    if (!fixture.entryEditRoute) throw new Error(`Invalid Table Maker fixture payload: ${output}`);
    return fixture;
}
