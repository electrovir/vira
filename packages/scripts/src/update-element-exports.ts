import {join} from 'path';
import {
    generateExportsFromFilePaths,
    getElementFilePaths,
    viraElementsDir,
} from './common/file-paths';
import {
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
    writeOrCheckGeneratedFile,
} from './common/update-exports';

const elementsIndexPath = join(viraElementsDir, 'index.ts');

export const updateElementExports: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const elementFilePaths = await getElementFilePaths();

        await writeOrCheckGeneratedFile(
            elementsIndexPath,
            `export * from './define-vira-element';` +
                generateExportsFromFilePaths(elementFilePaths, viraElementsDir),
            inputs,
            __filename,
        );
    },
};

if (require.main === module) {
    updateExportsMain(elementsIndexPath, updateElementExports).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
