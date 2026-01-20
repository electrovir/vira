import {BookPageControlType, defineBookPage} from 'element-book';
import {type CSSResult, css, html, unsafeCSS} from 'element-vir';
import {Options24Icon, ViraButton, ViraButtonStyle, viraFormCssVars} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraButtonBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraButton.tagName,
    descriptionParagraphs: [
        'Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!',
    ],
    controls: {
        'Primary color': {
            controlType: BookPageControlType.Color,
            initValue: '' as string,
        },
        'Secondary color': {
            controlType: BookPageControlType.Color,
            initValue: '' as string,
        },
        'Hover color': {
            controlType: BookPageControlType.Color,
            initValue: '' as string,
        },
        'Active color': {
            controlType: BookPageControlType.Color,
            initValue: '' as string,
        },
    },
    defineExamples({defineExample}) {
        function defineViraButtonExample({
            title,
            styles: inputStyles,
            inputs,
        }: {
            title: string;
            styles?: CSSResult;
            inputs?: (typeof ViraButton)['InputsType'];
        }) {
            const styles = inputStyles ?? css``;

            defineExample({
                title,
                styles,
                render({controls}) {
                    const styles = css`
                        ${viraFormCssVars['vira-form-accent-primary-color'].name}: ${unsafeCSS(
                            controls['Primary color'] || 'inherit',
                        )};
                        ${viraFormCssVars['vira-form-background-color'].name}: ${unsafeCSS(
                            controls['Secondary color'] || 'inherit',
                        )};
                        ${viraFormCssVars['vira-form-accent-primary-hover-color']
                            .name}: ${unsafeCSS(controls['Hover color'] || 'inherit')};
                        ${viraFormCssVars['vira-form-accent-primary-active-color']
                            .name}: ${unsafeCSS(controls['Active color'] || 'inherit')};
                    `;

                    return html`
                        <${ViraButton.assign({
                            text: 'hello',
                            ...inputs,
                        })}
                            style=${styles}
                        ></${ViraButton}>
                    `;
                },
            });
        }

        defineViraButtonExample({title: 'basic'});
        defineViraButtonExample({title: 'with icon', inputs: {icon: Options24Icon}});
        defineViraButtonExample({
            title: 'with expanding icon',
            inputs: {
                icon: Options24Icon,
                expandToFitIcon: true,
            },
        });
        defineViraButtonExample({
            title: 'outline',
            inputs: {
                buttonStyle: ViraButtonStyle.Outline,
            },
        });
        defineViraButtonExample({
            title: 'ghost',
            inputs: {
                buttonStyle: ViraButtonStyle.Ghost,
            },
        });
        defineViraButtonExample({
            title: 'danger',
            inputs: {
                buttonStyle: ViraButtonStyle.Danger,
            },
        });
        defineViraButtonExample({
            title: 'danger outline',
            inputs: {
                buttonStyle: ViraButtonStyle.DangerOutline,
            },
        });
        defineViraButtonExample({
            title: 'only icon',
            inputs: {
                icon: Options24Icon,
                text: '',
            },
        });
        defineViraButtonExample({
            title: 'disabled',
            inputs: {
                disabled: true,
            },
        });
        defineViraButtonExample({
            title: 'custom width',
            styles: css`
                ${ViraButton} {
                    width: 100px;
                }
            `,
        });
        defineViraButtonExample({
            title: 'custom height',
            styles: css`
                ${ViraButton} {
                    height: 75px;
                }
            `,
        });

        defineExample({
            title: 'customized colors',
            styles: css`
                :host {
                    ${viraFormCssVars['vira-form-accent-primary-color'].name}: pink;
                    ${viraFormCssVars['vira-form-background-color'].name}: purple;
                    ${viraFormCssVars['vira-form-accent-primary-hover-color'].name}: orange;
                    ${viraFormCssVars['vira-form-accent-primary-active-color'].name}: yellow;
                }
            `,
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'hello',
                    })}></${ViraButton}>
                `;
            },
        });
    },
});
