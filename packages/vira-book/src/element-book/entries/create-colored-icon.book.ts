import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {
    createColoredIcon,
    Element24Icon,
    Star24Icon,
    StatusSuccess24Icon,
    viraFormCssVars,
    ViraIcon,
} from 'vira';
import {utilBookPage} from '../top-level-pages.js';

export const createColoredIconBookPage = defineBookPage({
    title: createColoredIcon.name,
    parent: utilBookPage,
    descriptionParagraphs: [
        'Wraps an existing icon with specific colors to create a new icon that can be used anywhere the original icon can be used.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'stroke color',
            styles: css`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,
            render() {
                const coloredIcon = createColoredIcon(Element24Icon, {
                    'vira-icon-stroke-color': 'red',
                });

                return html`
                    <${ViraIcon.assign({
                        icon: Element24Icon,
                    })}></${ViraIcon}>
                    <span>→</span>
                    <${ViraIcon.assign({
                        icon: coloredIcon,
                    })}></${ViraIcon}>
                `;
            },
        });

        defineExample({
            title: 'fill color',
            styles: css`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,
            render() {
                const coloredIcon = createColoredIcon(Star24Icon, {
                    'vira-icon-fill-color': 'gold',
                    'vira-icon-stroke-color': 'orange',
                });

                return html`
                    <${ViraIcon.assign({
                        icon: Star24Icon,
                    })}></${ViraIcon}>
                    <span>→</span>
                    <${ViraIcon.assign({
                        icon: coloredIcon,
                    })}></${ViraIcon}>
                `;
            },
        });

        defineExample({
            title: 'stroke width',
            styles: css`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,
            render() {
                const coloredIcon = createColoredIcon(StatusSuccess24Icon, {
                    'vira-icon-stroke-color': 'green',
                    'vira-icon-stroke-width': '3px',
                });

                return html`
                    <${ViraIcon.assign({
                        icon: StatusSuccess24Icon,
                    })}></${ViraIcon}>
                    <span>→</span>
                    <${ViraIcon.assign({
                        icon: coloredIcon,
                    })}></${ViraIcon}>
                `;
            },
        });

        defineExample({
            title: 'with CSS var values',
            styles: css`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,
            render() {
                const errorIcon = createColoredIcon(StatusSuccess24Icon, {
                    'vira-icon-stroke-color': `${viraFormCssVars['vira-form-error-color'].value}`,
                });
                const successIcon = createColoredIcon(StatusSuccess24Icon, {
                    'vira-icon-stroke-color': `${viraFormCssVars['vira-form-success-color'].value}`,
                });

                return html`
                    <${ViraIcon.assign({
                        icon: errorIcon,
                    })}></${ViraIcon}>
                    <${ViraIcon.assign({
                        icon: successIcon,
                    })}></${ViraIcon}>
                `;
            },
        });

        defineExample({
            title: 'multiple icons with different colors',
            styles: css`
                :host {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            `,
            render() {
                const redIcon = createColoredIcon(Element24Icon, {
                    'vira-icon-stroke-color': 'red',
                });
                const blueIcon = createColoredIcon(Element24Icon, {
                    'vira-icon-stroke-color': 'dodgerblue',
                });
                const greenIcon = createColoredIcon(Element24Icon, {
                    'vira-icon-stroke-color': 'green',
                });
                const purpleIcon = createColoredIcon(Element24Icon, {
                    'vira-icon-stroke-color': 'purple',
                });

                return html`
                    <${ViraIcon.assign({
                        icon: redIcon,
                    })}></${ViraIcon}>
                    <${ViraIcon.assign({
                        icon: blueIcon,
                    })}></${ViraIcon}>
                    <${ViraIcon.assign({
                        icon: greenIcon,
                    })}></${ViraIcon}>
                    <${ViraIcon.assign({
                        icon: purpleIcon,
                    })}></${ViraIcon}>
                `;
            },
        });
    },
});
