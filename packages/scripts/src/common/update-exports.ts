import {existsSync} from 'fs';
import {readFile, writeFile} from 'fs/promises';
import {basename, relative} from 'path';
import {generateAutomaticallyUpdatedByComment} from './automatically-updated';
import {cliColors} from './cli-colors';
import {monoRepoRootDir} from './file-paths';
import {formatCode} from './format';

export class NotUpToDateError extends Error {
    public override readonly name = 'NotUpToDateError';
}

export function parseUpdateExportsArgs() {
    const dryRun = process.argv.includes('--dry-run');
    const checkOnly = process.argv.includes('--check');

    return {
        dryRun,
        checkOnly,
    };
}

export type UpdateExportsArgs = {
    /**
     * Indicates that no file should be written, and logs the code to the console. This option takes
     * precedence over checkOnly.
     */
    dryRun?: boolean | undefined;
    /**
     * Checks if the current file contents matches the contents that would've been written. Use in
     * test pipelines.
     */
    checkOnly?: boolean | undefined;
};

export type UpdateExportsConfig = {
    executor: (inputs: UpdateExportsArgs) => Promise<void>;
};

export async function writeOrCheckGeneratedFile(
    fileToWriteTo: string,
    codeToWrite: string,
    args: UpdateExportsArgs,
    scriptName: string,
): Promise<void> {
    const codeWithComment =
        generateAutomaticallyUpdatedByComment(basename(scriptName)) + '\n\n' + codeToWrite;

    const formattedCode = formatCode(codeWithComment, fileToWriteTo);
    const relativeWriteToFile = relative(monoRepoRootDir, fileToWriteTo);
    const currentOutputContents: string = existsSync(fileToWriteTo)
        ? (await readFile(fileToWriteTo)).toString()
        : '';
    const qualifier = args.checkOnly ? '' : ' already';
    if (formattedCode === currentOutputContents) {
        console.info(
            `${cliColors.green}Up to date${qualifier}: '${relativeWriteToFile}'.${cliColors.reset}`,
        );
        return;
    }

    if (args.dryRun) {
        console.info(
            `Would've written the following to '${relativeWriteToFile}':\n'${formattedCode}'`,
        );
    } else if (args.checkOnly) {
        throw new NotUpToDateError(
            `${cliColors.red}${cliColors.bold}'${relativeWriteToFile}' needs to be updated: run '${
                cliColors.reset
            }${cliColors.blue}npx ts-node ${relative(monoRepoRootDir, scriptName)}${cliColors.red}${
                cliColors.bold
            }'${cliColors.reset}`,
        );
    } else {
        await writeFile(fileToWriteTo, formattedCode);
        console.info(`${cliColors.blue}Wrote to '${relativeWriteToFile}'.${cliColors.reset}`);
    }
}

export async function updateExportsMain(updateExportsConfig: UpdateExportsConfig): Promise<void> {
    await updateExportsConfig.executor(parseUpdateExportsArgs());
}
