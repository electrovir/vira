import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {
    createColoredIcon,
    createSizedIcon,
    LucideCircleCheckIcon,
    LucideCodeXmlIcon,
    LucideStarIcon,
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
                const coloredIcon = createSizedIcon(
                    createColoredIcon(LucideCodeXmlIcon, {
                        'vira-icon-stroke-color': 'red',
                    }),
                    24,
                );

                return html`
                    <${ViraIcon.assign({
                        icon: createSizedIcon(LucideCodeXmlIcon, 24),
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
                const coloredIcon = createSizedIcon(
                    createColoredIcon(LucideStarIcon, {
                        'vira-icon-fill-color': 'gold',
                        'vira-icon-stroke-color': 'orange',
                    }),
                    24,
                );

                return html`
                    <${ViraIcon.assign({
                        icon: createSizedIcon(LucideStarIcon, 24),
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
                const coloredIcon = createSizedIcon(
                    createColoredIcon(LucideCircleCheckIcon, {
                        'vira-icon-stroke-color': 'green',
                        'vira-icon-stroke-width': '3px',
                    }),
                    24,
                );

                return html`
                    <${ViraIcon.assign({
                        icon: createSizedIcon(LucideCircleCheckIcon, 24),
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
                const errorIcon = createSizedIcon(
                    createColoredIcon(LucideCircleCheckIcon, {
                        'vira-icon-stroke-color': `${viraFormCssVars['vira-form-error-color'].value}`,
                    }),
                    24,
                );
                const successIcon = createSizedIcon(
                    createColoredIcon(LucideCircleCheckIcon, {
                        'vira-icon-stroke-color': `${viraFormCssVars['vira-form-success-color'].value}`,
                    }),
                    24,
                );

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
                const redIcon = createSizedIcon(
                    createColoredIcon(LucideCodeXmlIcon, {
                        'vira-icon-stroke-color': 'red',
                    }),
                    24,
                );
                const blueIcon = createSizedIcon(
                    createColoredIcon(LucideCodeXmlIcon, {
                        'vira-icon-stroke-color': 'dodgerblue',
                    }),
                    24,
                );
                const greenIcon = createSizedIcon(
                    createColoredIcon(LucideCodeXmlIcon, {
                        'vira-icon-stroke-color': 'green',
                    }),
                    24,
                );
                const purpleIcon = createSizedIcon(
                    createColoredIcon(LucideCodeXmlIcon, {
                        'vira-icon-stroke-color': 'purple',
                    }),
                    24,
                );

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
