import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {Element24Icon} from '../../icons';
import {elementsBookPage} from '../elements.book';
import {ViraIcon} from './vira-icon.element';

export const viraIconBookPage = defineBookPage({
    title: ViraIcon.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        "See the 'Icons' page for a list of all included icons.",
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'basic',
            renderCallback() {
                return html`
                    <${ViraIcon.assign({icon: Element24Icon})}></${ViraIcon}>
                `;
            },
        });
    },
});
