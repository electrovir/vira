import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {Element24Icon, ViraIcon, createColoredIcon, createSizedIcon, lucideIcons} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraIconBookPage = defineBookPage({
    title: ViraIcon.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        "See the 'Icons' page for a list of all included icons.",
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: Element24Icon,
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using createColoredIcon',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: createColoredIcon(Element24Icon, {
                            'vira-icon-stroke-color': 'red',
                        }),
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using createSizedIcon',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: createSizedIcon(Element24Icon, 32),
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using lucide icon',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: lucideIcons.Anchor,
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using customized lucide icon',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: lucideIcons.Anchor({
                            height: 64,
                            width: 64,
                        }),
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'fit container',
            styles: css`
                ${ViraIcon} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: Element24Icon,
                        fitContainer: true,
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'colored fit container',
            styles: css`
                ${ViraIcon} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: createColoredIcon(Element24Icon, {
                            'vira-icon-stroke-color': 'red',
                        }),
                        fitContainer: true,
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'lucide fit container',
            styles: css`
                ${ViraIcon} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: lucideIcons.Anchor,
                        fitContainer: true,
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'customized lucide fit container',
            styles: css`
                ${ViraIcon} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: lucideIcons.Anchor({
                            'stroke-width': 4,
                        }),
                        fitContainer: true,
                    })}></${ViraIcon}>
                `;
            },
        });
    },
});
