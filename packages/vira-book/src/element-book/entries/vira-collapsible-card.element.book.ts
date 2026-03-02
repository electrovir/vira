import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {noNativeFormStyles, ViraCollapsibleCard} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraCollapsibleCardBookPage = defineBookPage({
    title: ViraCollapsibleCard.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'A collapsible card element with built-in header, caret icon, and card styling. Wraps ViraCollapsibleWrapper with opinionated styles.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                p {
                    ${noNativeFormStyles}
                }
            `,
            render() {
                return html`
                    <${ViraCollapsibleCard}>
                        <span slot=${ViraCollapsibleCard.slotNames.header}>Card Header</span>
                        <p>Card content goes here.</p>
                    </${ViraCollapsibleCard}>
                `;
            },
        });
        defineExample({
            title: 'start expanded',
            styles: css`
                p {
                    ${noNativeFormStyles}
                }
            `,
            render() {
                return html`
                    <${ViraCollapsibleCard.assign({
                        startExpanded: true,
                    })}>
                        <span slot=${ViraCollapsibleCard.slotNames.header}>
                            Expanded Card Header
                        </span>
                        <p>This card starts expanded.</p>
                    </${ViraCollapsibleCard}>
                `;
            },
        });
        defineExample({
            title: 'block expansion',
            styles: css`
                p {
                    ${noNativeFormStyles}
                }
            `,
            render() {
                return html`
                    <${ViraCollapsibleCard.assign({
                        blockExpansion: true,
                    })}>
                        <span slot=${ViraCollapsibleCard.slotNames.header}>Always Expanded</span>
                        <p>This card cannot be collapsed.</p>
                    </${ViraCollapsibleCard}>
                `;
            },
        });
        defineExample({
            title: 'raw collapsible',
            styles: css`
                p {
                    ${noNativeFormStyles}
                }
            `,
            render() {
                return html`
                    <${ViraCollapsibleCard.assign({
                        rawCollapsible: true,
                        startExpanded: true,
                    })}>
                        <span slot=${ViraCollapsibleCard.slotNames.header}>Raw Header</span>
                        <p>No card border or padding styles.</p>
                    </${ViraCollapsibleCard}>
                `;
            },
        });
        defineExample({
            title: 'hidden header',
            styles: css`
                p {
                    ${noNativeFormStyles}
                }
            `,
            render() {
                return html`
                    <${ViraCollapsibleCard.assign({
                        hideHeader: true,
                        startExpanded: true,
                    })}>
                        <p>Content with no header visible.</p>
                    </${ViraCollapsibleCard}>
                `;
            },
        });
        defineExample({
            title: 'wide',
            styles: css`
                div {
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                }
                p {
                    ${noNativeFormStyles}
                }
            `,
            render() {
                return html`
                    <div>
                        <${ViraCollapsibleCard}>
                            <span slot=${ViraCollapsibleCard.slotNames.header}>Wide</span>
                            <p>Content content content content content content content.</p>
                        </${ViraCollapsibleCard}>
                    </div>
                `;
            },
        });
    },
});
