import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {
    createColoredIcon,
    createSizedIcon,
    LucideAnchorIcon,
    LucideCodeXmlIcon,
    ViraIcon,
} from 'vira';
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
                        icon: createSizedIcon(LucideCodeXmlIcon, 24),
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using createColoredIcon',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: createSizedIcon(
                            createColoredIcon(LucideCodeXmlIcon, {
                                'vira-icon-stroke-color': 'red',
                            }),
                            24,
                        ),
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using createSizedIcon',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: createSizedIcon(LucideCodeXmlIcon, 32),
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using lucide icon',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: LucideAnchorIcon,
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'using sized lucide icon',
            render() {
                return html`
                    <${ViraIcon.assign({
                        icon: createSizedIcon(LucideAnchorIcon, 64),
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
                        icon: LucideCodeXmlIcon,
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
                        icon: createColoredIcon(LucideCodeXmlIcon, {
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
                        icon: LucideAnchorIcon,
                        fitContainer: true,
                    })}></${ViraIcon}>
                `;
            },
        });
        defineExample({
            title: 'colored lucide fit container',
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
                        icon: createColoredIcon(LucideAnchorIcon, {
                            'vira-icon-stroke-color': 'red',
                        }),
                        fitContainer: true,
                    })}></${ViraIcon}>
                `;
            },
        });
    },
});
