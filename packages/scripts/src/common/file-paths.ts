import {readDirRecursive, toPosixPath} from '@augment-vir/node-js';
import {existsSync} from 'fs';
import {stat} from 'fs/promises';
import {join, relative, resolve} from 'path';

export const monoRepoRootDir = resolve(__dirname, join('..', '..', '..', '..'));
const packagesDir = join(monoRepoRootDir, 'packages');
const viraPackageDir = join(packagesDir, 'vira');
export const viraSrcDir = join(viraPackageDir, 'src');
export const viraElementsDir = join(viraSrcDir, 'elements');

export function generateExportsFromFilePaths(
    filePaths: ReadonlyArray<string>,
    relativeDir: string,
): string {
    const exportLines = filePaths.map((filePath) => {
        const relativePath = relative(relativeDir, filePath).replace(/\.ts?$/, '');
        const posixPath = toPosixPath(relativePath);
        const exportPath = posixPath.startsWith('.') ? posixPath : `./${posixPath}`;

        return `export * from '${exportPath}';`;
    });

    return exportLines.join('\n');
}

export async function getElementFilePaths(): Promise<string[]> {
    const allFilePathsInElements = (await readDirRecursive(viraElementsDir)).map((relativePath) =>
        join(viraElementsDir, relativePath),
    );

    const allElementFilePaths = allFilePathsInElements.filter((fileName) => {
        return fileName.endsWith('.element.ts');
    });
    await verifyElementFilePaths(allElementFilePaths);
    return allElementFilePaths;
}

async function verifyElementFilePaths(filePaths: ReadonlyArray<string>): Promise<void> {
    await Promise.all(
        filePaths.map(async (filePath) => {
            if (!existsSync(filePath)) {
                throw new Error(`Element file "${filePath}" does not exist.`);
            }
            if (!(await stat(filePath)).isFile()) {
                throw new Error(`Element file "${filePath}" is not a file.`);
            }
        }),
    );
}
