/* node:coverage disable */

import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {ViraColorPairContrastSummary} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

export const viraColorPairContrastSummaryBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraColorPairContrastSummary.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${ViraColorPairContrastSummary.assign({
                        foregroundColor: '#1a1a2e',
                        backgroundColor: '#eaeaea',
                    })}></${ViraColorPairContrastSummary}>
                `;
            },
        });
    },
});
