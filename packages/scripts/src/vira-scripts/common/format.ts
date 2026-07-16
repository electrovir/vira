import {format as prettierFormat, type Options as PrettierOptions} from 'prettier';
// @ts-expect-error: ignore this import cause it's not typed. We're typing it here!
// eslint-disable-next-line @virmator/no-relative-import-outside-package
import * as importedRepoConfig from '../../../../../prettier.config.mjs';

const repoConfig: PrettierOptions = importedRepoConfig as PrettierOptions;

export async function formatCode({
    text,
    filePath,
}: Readonly<{text: string; filePath: string}>): Promise<string> {
    return await prettierFormat(text, {
        ...repoConfig,
        filepath: filePath,
    });
}
