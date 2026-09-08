import type { ScreenshotSetupContext } from '@verbb/docs-screenshots/types';
import { registerPluginBootstrap } from '@verbb/docs-screenshots/api';

export default registerPluginBootstrap({
    id: 'tablemaker',
    async setup(context: ScreenshotSetupContext) {
        await context.runCraft(['migrate/up', '--plugin=tablemaker'], { allowFailure: true });
    },
});
