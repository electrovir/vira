import {mergeDeep} from '@augment-vir/common';
import {defineConfig} from '@virmator/frontend/configs/vite.config.base.ts';
import {join, resolve} from 'node:path';

export default defineConfig(
    {
        forGitHubPages: false,
        packageDirPath: resolve(import.meta.dirname, '..'),
    },
    (baseConfig, basePaths) => {
        return mergeDeep(baseConfig, {
            server: {
                host: true,
            },
            base: '/vira/book',
            build: {
                outDir: join(basePaths.cwd, 'dist-book'),
            },
            esbuild: {
                keepNames: true,
            },
            resolve: {
                dedupe: [
                    'vira',
                    'element-vir',
                ],
            },
            optimizeDeps: {
                exclude: [
                    ...(baseConfig.optimizeDeps?.exclude || []),
                    'vira',
                    'element-book',
                ],
            },
        });
    },
);
