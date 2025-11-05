import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {ViraError} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraErrorBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraError.tagName,
    descriptionParagraphs: [
        'An error wrapper that applies error coloring (red, by default).',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${ViraError}>Error Content</${ViraError}>
                `;
            },
        });
    },
});
