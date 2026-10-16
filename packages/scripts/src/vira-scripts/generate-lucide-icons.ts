/*
    This script writes one icon file per Lucide icon into "lucideIconsDir" (defined below), plus an
    index file that exports them all. Each icon gets its own module so bundlers only include the
    icons that are imported. Re-run it after changing the pinned "lucide-static" version.
*/
import {log} from '@augment-vir/common';
import {existsSync} from 'node:fs';
import {mkdir, readdir, readFile, rm, writeFile} from 'node:fs/promises';
import {basename, dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {monoRepoRootDir, viraSrcDir} from '../repo-paths.js';
import {generateAutomaticallyUpdatedByComment} from './common/automatically-updated.js';
import {formatCode} from './common/format.js';
import {
    NotUpToDateError,
    type UpdateExportsArgs,
    type UpdateExportsConfig,
    updateExportsMain,
} from './common/update-exports.js';

const lucideIconsDir = join(viraSrcDir, 'icons', 'lucide');
const lucideIconsIndexPath = join(lucideIconsDir, 'index.ts');

type LucideIconInfo = {
    /** The icon's export name in `lucide-static`, such as `FileSearch`. */
    lucideName: string;
    /** The icon's Lucide id, such as `file-search`. */
    lucideId: string;
};

/**
 * Reads icons from `lucide-static`'s ESM entry file, where each line looks like `export { default
 * as Code2, default as CodeXml } from './icons/code-xml.mjs';`. Each line's names are sorted
 * alphabetically, so the icon's current name is the one its type declarations declare directly
 * (`declare const CodeXml`); the rest are deprecated aliases, which are skipped. Deprecated icons
 * are skipped too.
 */
async function readLucideIcons(): Promise<LucideIconInfo[]> {
    const lucidePackageDir = dirname(
        fileURLToPath(import.meta.resolve('lucide-static/package.json')),
    );
    const entryCode = (
        await readFile(join(lucidePackageDir, 'dist', 'esm', 'lucide-static.mjs'))
    ).toString();
    const declarationsCode = (
        await readFile(join(lucidePackageDir, 'dist', 'lucide-static.d.ts'))
    ).toString();

    const declarePrefix = 'declare const ';
    const declaredNames = declarationsCode
        .split('\n')
        .filter((line) => line.startsWith(declarePrefix))
        .map((line) => line.slice(declarePrefix.length).split(':')[0]);

    /** Lucide marks icons that it plans to remove with `@deprecated` in its type declarations. */
    const deprecatedNames = declarationsCode
        .split('/**')
        .filter((docBlock) => docBlock.includes('@deprecated'))
        .map((docBlock) => docBlock.split('*/')[1]?.split('declare const ')[1]?.split(':')[0])
        .filter((name) => name != undefined);

    const exportPrefix = 'export { default as ';

    const icons = entryCode
        .split('\n')
        .filter((line) => line.startsWith(exportPrefix))
        .map((line): LucideIconInfo => {
            const lucideName = line
                .split(' } from ')[0]
                ?.split('default as ')
                .map((name) => name.split(',')[0]?.trim())
                .find((name) => name && declaredNames.includes(name));
            const lucideId = line.split("from './icons/")[1]?.split('.mjs')[0];

            if (!lucideName || !lucideId) {
                throw new Error(`Failed to parse lucide-static export line: '${line}'`);
            }

            return {
                lucideName,
                lucideId,
            };
        })
        .filter((icon) => !deprecatedNames.includes(icon.lucideName));

    if (!icons.length) {
        throw new Error("Found no icons in lucide-static's ESM entry file.");
    }

    return icons;
}

function generateIconFileCode({lucideName, lucideId}: Readonly<LucideIconInfo>) {
    return `import {${lucideName} as svg} from 'lucide-static';
        import {createLucideIcon} from '../lucide-icon.js';

        /**
         * Lucide's \`${lucideName}\` icon, rendered at 16px.
         *
         * @category Lucide Icon
         * @see https://lucide.dev/icons/${lucideId}
         */
        export const Lucide${lucideName}Icon = createLucideIcon({
            name: '${lucideName}',
            svg,
        });`;
}

async function generateFile({filePath, code}: Readonly<{filePath: string; code: string}>) {
    return {
        filePath,
        code: await formatCode({
            text: [
                generateAutomaticallyUpdatedByComment(basename(import.meta.filename)),
                code,
            ].join('\n\n'),
            filePath,
        }),
    };
}

export const generateLucideIcons: UpdateExportsConfig = {
    async executor(args: UpdateExportsArgs): Promise<void> {
        const icons = await readLucideIcons();

        const iconFiles = await Promise.all(
            icons.map(async (icon) => {
                return await generateFile({
                    filePath: join(lucideIconsDir, `${icon.lucideId}.icon.ts`),
                    code: generateIconFileCode(icon),
                });
            }),
        );
        const indexFile = await generateFile({
            filePath: lucideIconsIndexPath,
            code: icons
                .map((icon) => {
                    return `export * from './${icon.lucideId}.icon.js';`;
                })
                /** Matches the export sorting that `virmator format` applies. */
                .toSorted()
                .join('\n'),
        });
        const generatedFiles = [
            ...iconFiles,
            indexFile,
        ];

        const generatedFileNames = generatedFiles.map((file) => basename(file.filePath));
        const staleFilePaths = existsSync(lucideIconsDir)
            ? (await readdir(lucideIconsDir))
                  .filter((fileName) => !generatedFileNames.includes(fileName))
                  .map((fileName) => join(lucideIconsDir, fileName))
            : [];

        const outdatedFiles = (
            await Promise.all(
                generatedFiles.map(async (file) => {
                    const currentCode = existsSync(file.filePath)
                        ? (await readFile(file.filePath)).toString()
                        : '';
                    return currentCode === file.code ? undefined : file;
                }),
            )
        ).filter((file) => file != undefined);

        const relativeDir = relative(monoRepoRootDir, lucideIconsDir);

        if (!outdatedFiles.length && !staleFilePaths.length) {
            log.success(`Up to date: ${generatedFiles.length} files in '${relativeDir}'.`);
            return;
        }

        const summary = `${outdatedFiles.length} outdated and ${staleFilePaths.length} stale files in '${relativeDir}'`;

        if (args.dryRun) {
            log.info(`Would've updated ${summary}.`);
        } else if (args.checkOnly) {
            throw new NotUpToDateError(
                `Found ${summary}: run 'npx tsx ${relative(monoRepoRootDir, import.meta.filename)}'`,
            );
        } else {
            await mkdir(lucideIconsDir, {
                recursive: true,
            });
            await Promise.all([
                ...outdatedFiles.map(async (file) => {
                    await writeFile(file.filePath, file.code);
                }),
                ...staleFilePaths.map(async (filePath) => {
                    await rm(filePath);
                }),
            ]);
            log.mutate(`Updated ${summary}.`);
        }
    },
};

if (process.argv[1] && resolve(process.argv[1]) === import.meta.filename) {
    updateExportsMain(generateLucideIcons).catch((error: unknown) => {
        log.error(error);
        process.exit(1);
    });
}
