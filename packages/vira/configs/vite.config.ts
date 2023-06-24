import {baseViteConfig} from 'virmator/dist/compiled-base-configs/base-vite';
import {defineConfig} from 'vite';

export default defineConfig({
    ...baseViteConfig,
    base: process.env.CI ? '/vira' : '',
    build: {
        outDir: './book-dist',
    },
});
