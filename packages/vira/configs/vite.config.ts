import {join} from 'path';
import {defineConfig, outDir} from 'virmator/dist/compiled-base-configs/base-vite';

export default defineConfig({forGitHubPages: true}, (baseConfig) => {
    const viraPackageDir = outDir.replace(/dist$/, '');

    return {
        ...baseConfig,
        optimizeDeps: {
            disabled: true,
        },
        build: {
            outDir: join(viraPackageDir, 'book-dist'),
        },
    };
});
