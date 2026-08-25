import path from 'path';
import AnalyzePlugin from 'rollup-plugin-analyzer';
import CompressionPlugin from 'vite-plugin-compression';

// Web-components field bundle (Plugin Kit v2), modelled on Hyper. Table Maker's editor
// is rebuilt on `pk-editable-table` (replacing the legacy jQuery/Garnish EditableTable).
export default {
    root: './src/web/assets',
    base: '',

    build: {
        outDir: 'field/dist',
        emptyOutDir: true,
        manifest: 'manifest.json',
        sourcemap: true,
        rollupOptions: {
            input: {
                pluginKit: '/field/src/js/plugin-kit-register.ts',
                tablemaker: '/field/src/js/tablemaker.ts',
            },
        },
    },

    server: {
        origin: 'http://localhost:4045',
        hmr: { protocol: 'ws' },
    },

    plugins: [
        AnalyzePlugin({ summaryOnly: true, limit: 10 }),
        CompressionPlugin({ filter: /\.(js|mjs|json|css|map)$/i }),
    ],

    resolve: {
        alias: { '@': path.resolve('./src/web/assets/field/src') },
        preserveSymlinks: false,
    },

    optimizeDeps: { include: ['lodash-es'] },
};
