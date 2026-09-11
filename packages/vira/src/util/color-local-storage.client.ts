import {ColorFormatName} from '@electrovir/color/dist/data/color-class/color-formats.js';
import {LocalStorageClient} from '@electrovir/local-storage-client';
import {enumShape} from 'object-shape-tester';

export const colorLocalStorageClient = new LocalStorageClient({
    lastFormat: enumShape(ColorFormatName),
});
