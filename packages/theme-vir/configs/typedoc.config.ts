import {baseTypedocConfig} from '@virmator/docs/configs/typedoc.config.base.js';
import {resolve} from 'node:path';
import {type TypeDocOptions} from 'typedoc';

const indexTsFile = resolve(import.meta.dirname, '..', 'src', 'index.ts');
const outDirPath = resolve(import.meta.dirname, '..', 'dist-docs');

export const typeDocConfig: Partial<TypeDocOptions> = {
    ...baseTypedocConfig,
    out: outDirPath,
    entryPoints: [
        indexTsFile,
    ],
    intentionallyNotExported: [],
    defaultCategory: 'MISSING CATEGORY',
    categoryOrder: [
        'Color Theme',
        'Internal',
    ],
};
