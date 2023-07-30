import {readFile, writeFile} from 'fs/promises';
import {viraPackageJsonPath} from './common/file-paths';

const devMain = `"main": "src/index.ts",
    "types": "src/index.ts",`;

const publishMain = `"main": "dist/index.js",
    "types": "dist/index.d.ts",`;

async function prePublish() {
    const packageContents = (await readFile(viraPackageJsonPath)).toString();
    await writeFile(viraPackageJsonPath, packageContents.replace(devMain, publishMain));
}

async function postPublish() {
    const packageContents = (await readFile(viraPackageJsonPath)).toString();
    await writeFile(viraPackageJsonPath, packageContents.replace(publishMain, devMain));
}

async function main() {
    const isPrePublish = process.argv.slice(-1)[0] === 'pre-publish';

    if (isPrePublish) {
        await prePublish();
    } else {
        await postPublish();
    }
}

main();
