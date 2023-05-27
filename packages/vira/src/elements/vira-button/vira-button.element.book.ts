import {
    defineElementBookChapter,
    defineElementBookPage,
    ElementBookPageControlTypeEnum,
} from 'element-book';
import {assign, css, CSSResult, html, unsafeCSS} from 'element-vir';
import {elementsBookChapter} from '../elements.book';
import {ViraButton, ViraButtonStyleEnum} from './vira-button.element';

const viraButtonBookChapter = defineElementBookChapter({
    parent: elementsBookChapter,
    title: 'Button',
});

const viraButtonBookPage = defineElementBookPage({
    parent: viraButtonBookChapter,
    title: ViraButton.tagName,
    descriptionParagraphs: [
        'Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!',
    ],
    controls: {
        'Primary color': {
            controlType: ElementBookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Secondary color': {
            controlType: ElementBookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Hover color': {
            controlType: ElementBookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Active color': {
            controlType: ElementBookPageControlTypeEnum.Text,
            initValue: '',
        },
    },
    defineExamplesCallback({defineExample}) {
        function defineViraButtonExample({
            title,
            styles: inputStyles,
            inputs,
        }: {
            title: string;
            styles?: CSSResult;
            inputs?: Omit<(typeof ViraButton)['inputsType'], 'text'>;
        }) {
            const styles = inputStyles ?? css``;

            defineExample({
                title,
                styles,
                renderCallback({controls}) {
                    const styles = css`
                        ${ViraButton.cssVars['vira-button-primary-color'].name}: ${unsafeCSS(
                            controls['Primary color'] || 'inherit',
                        )};
                        ${ViraButton.cssVars['vira-button-secondary-color'].name}: ${unsafeCSS(
                            controls['Secondary color'] || 'inherit',
                        )};
                        ${ViraButton.cssVars['vira-button-primary-hover-color'].name}: ${unsafeCSS(
                            controls['Hover color'] || 'inherit',
                        )};
                        ${ViraButton.cssVars['vira-button-primary-active-color'].name}: ${unsafeCSS(
                            controls['Active color'] || 'inherit',
                        )};
                    `;

                    return html`
                        <${ViraButton}
                            style=${styles}
                            ${assign(ViraButton, {
                                text: 'hello',
                                ...inputs,
                            })}
                        ></${ViraButton}>
                    `;
                },
            });
        }

        defineViraButtonExample({title: 'basic'});
        defineViraButtonExample({
            title: 'outline',
            inputs: {
                buttonStyle: ViraButtonStyleEnum.Outline,
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
    },
});

const viraButtonCustomColorsBookPage = defineElementBookPage({
    parent: viraButtonBookChapter,
    title: 'with custom colors',
    descriptionParagraphs: [
        'These are not necessarily GOOD color combinations, but they are custom!',
    ],
    defineExamplesCallback({defineExample}) {
        defineExample({
            title: 'custom colors',
            styles: css`
                :host {
                    ${ViraButton.cssVars['vira-button-primary-color'].name}: pink;
                    ${ViraButton.cssVars['vira-button-secondary-color'].name}: purple;
                    ${ViraButton.cssVars['vira-button-primary-hover-color'].name}: orange;
                    ${ViraButton.cssVars['vira-button-primary-active-color'].name}: yellow;
                }
            `,
            renderCallback() {
                return html`
                    <${ViraButton}
                        ${assign(ViraButton, {
                            text: 'hello',
                        })}
                    ></${ViraButton}>
                `;
            },
        });
    },
});

export const viraButtonBookEntries = [
    viraButtonBookChapter,
    viraButtonBookPage,
    viraButtonCustomColorsBookPage,
];
