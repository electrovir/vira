import {BookPageControlTypeEnum, defineBookPage} from 'element-book';
import {CSSResult, css, html, listen, unsafeCSS} from 'element-vir';
import {Element24Icon} from '../../icons';
import {elementsBookPage} from '../elements.book';
import {ViraInput} from './vira-input.element';

export const viraInputBookPage = defineBookPage({
    title: ViraInput.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.',
        'Has completely customizable sizing and coloring.',
    ],
    controls: {
        'Text color': {
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Placeholder color': {
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Border color': {
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Focus color': {
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Selection color': {
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        },
    } as const satisfies NonNullable<Parameters<typeof defineBookPage>[0]['controls']>,
    elementExamplesCallback({defineExample}) {
        function defineInputExample({
            styles,
            title,
            inputs,
        }: {
            styles?: CSSResult;
            title: string;
            inputs: (typeof ViraInput)['inputsType'];
        }) {
            defineExample({
                title,
                styles: css`
                    ${styles || css``}
                `,
                stateInitStatic: {
                    value: inputs.value,
                },
                renderCallback({state, updateState, controls}) {
                    const styles = css`
                        ${ViraInput.cssVars['vira-input-text-color'].name}: ${unsafeCSS(
                            controls['Text color'] || 'inherit',
                        )};
                        ${ViraInput.cssVars['vira-input-border-color'].name}: ${unsafeCSS(
                            controls['Border color'] || 'inherit',
                        )};
                        ${ViraInput.cssVars['vira-input-focus-border-color'].name}: ${unsafeCSS(
                            controls['Focus color'] || 'inherit',
                        )};
                        ${ViraInput.cssVars['vira-input-placeholder-color'].name}: ${unsafeCSS(
                            controls['Placeholder color'] || 'inherit',
                        )};
                        ${ViraInput.cssVars['vira-input-text-selection-color'].name}: ${unsafeCSS(
                            controls['Selection color'] || 'inherit',
                        )};
                    `;

                    return html`
                        <${ViraInput.assign({
                            ...inputs,
                            value: state.value,
                        })}
                            style=${styles}
                            ${listen(ViraInput.events.valueChange, (event) => {
                                updateState({
                                    value: event.detail,
                                });
                            })}
                        ></${ViraInput}>
                    `;
                },
            });
        }

        defineInputExample({
            title: 'basic',
            inputs: {
                value: 'default value',
            },
        });
        defineInputExample({
            title: 'with icon',
            inputs: {
                value: '',
                icon: Element24Icon,
            },
        });
        defineInputExample({
            title: 'with placeholder',
            inputs: {
                value: '',
                placeholder: 'placeholder here',
            },
        });
        defineInputExample({
            title: 'with suffix',
            inputs: {
                value: '42',
                suffix: 'px',
            },
        });
        defineInputExample({
            title: 'disabled',
            inputs: {
                value: 'disabled',
                disabled: true,
            },
        });
        defineInputExample({
            title: 'numbers only',
            inputs: {
                value: '',
                allowedInputs: /\d/,
            },
        });
        defineInputExample({
            title: 'numbers blocked',
            inputs: {
                value: '',
                blockedInputs: /\d/,
            },
        });
        defineInputExample({
            title: 'custom width',
            styles: css`
                ${ViraInput} {
                    width: 120px;
                }
            `,
            inputs: {
                value: '',
                placeholder: 'width',
                icon: Element24Icon,
            },
        });
        defineInputExample({
            title: 'custom height',
            styles: css`
                ${ViraInput} {
                    height: 48px;
                }
            `,
            inputs: {
                value: '',
                placeholder: 'height',
                icon: Element24Icon,
            },
        });
        defineInputExample({
            title: 'max width',
            styles: css`
                ${ViraInput} {
                    max-width: 150px;
                }
            `,
            inputs: {
                // value: 'super long value that exceeds the max width',
                value: '',
                placeholder: '42',
            },
        });
        defineInputExample({
            title: 'fit text',
            styles: css`
                ${ViraInput} {
                    max-width: 150px;
                }
            `,
            inputs: {
                value: '',
                placeholder: '42',
                fitText: true,
            },
        });
    },
});
