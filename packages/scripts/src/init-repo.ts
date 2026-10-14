import {spawnSync} from 'node:child_process';
import {readFile, writeFile} from 'node:fs/promises';
import {join, resolve} from 'node:path';

/**
 * Without a `package-lock.json`, `npm i` crashes with "Cannot read properties of null (reading
 * 'matches')" while resolving this dependency of `vira-book`, because it peer-depends on the `vira`
 * workspace. Resolving it from the repo root instead avoids the crash, and once the lockfile exists
 * npm accepts it back in `vira-book`.
 */
const peerDependentName = '@theme-vir/element-book';

/** This runs before `node_modules` exists, so it can only import Node built-ins. */
const monoRepoRootDir = resolve(import.meta.dirname, '..', '..', '..');
const rootPackageJsonPath = join(monoRepoRootDir, 'package.json');
const viraBookPackageJsonPath = join(monoRepoRootDir, 'packages', 'vira-book', 'package.json');

function runNpm(args: ReadonlyArray<string>) {
    if (!process.env.npm_execpath) {
        throw new Error('Run this through `npm run init`.');
    }
    const result = spawnSync(
        process.execPath,
        [
            process.env.npm_execpath,
            ...args,
        ],
        {
            cwd: monoRepoRootDir,
            stdio: 'inherit',
        },
    );
    if (result.status !== 0) {
        throw new Error(`'npm ${args.join(' ')}' failed.`);
    }
}

async function initRepo() {
    const originalRootPackageJson = await readFile(rootPackageJsonPath, 'utf8');
    const originalViraBookPackageJson = await readFile(viraBookPackageJsonPath, 'utf8');
    const rootPackageJson: {
        devDependencies: Record<string, string>;
    } = JSON.parse(originalRootPackageJson);
    const viraBookPackageJson: {
        dependencies: Record<string, string>;
    } = JSON.parse(originalViraBookPackageJson);

    const {[peerDependentName]: peerDependentVersion, ...otherViraBookDependencies} =
        viraBookPackageJson.dependencies;
    if (!peerDependentVersion) {
        throw new Error(
            `Expected '${peerDependentName}' in ${viraBookPackageJsonPath} dependencies.`,
        );
    }

    await writeFile(
        rootPackageJsonPath,
        JSON.stringify(
            {
                ...rootPackageJson,
                devDependencies: {
                    ...rootPackageJson.devDependencies,
                    [peerDependentName]: peerDependentVersion,
                },
            },
            undefined,
            4,
        ),
    );
    await writeFile(
        viraBookPackageJsonPath,
        JSON.stringify(
            {
                ...viraBookPackageJson,
                dependencies: otherViraBookDependencies,
            },
            undefined,
            4,
        ),
    );

    try {
        runNpm([
            'i',
            '--package-lock-only',
        ]);
    } finally {
        await writeFile(rootPackageJsonPath, originalRootPackageJson);
        await writeFile(viraBookPackageJsonPath, originalViraBookPackageJson);
    }

    runNpm(['i']);
}

await initRepo();
