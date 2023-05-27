import {ElementBookApp} from 'element-book';
import {assign, css, defineElementNoInputs, html} from 'element-vir';
import {allElementBookEntries} from './all-element-book-entries';

export const ViraBookApp = defineElementNoInputs({
    tagName: 'vira-book-app',
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ElementBookApp} {
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback() {
        return html`
            <${ElementBookApp}
                ${assign(ElementBookApp, {
                    internalRouterConfig: {
                        basePath: 'vira',
                        useInternalRouter: true,
                    },
                    entries: allElementBookEntries,
                })}
            ></${ElementBookApp}>
        `;
    },
});
