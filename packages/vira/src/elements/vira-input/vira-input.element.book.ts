import {
    defineElementBookChapter,
    defineElementBookPage,
    ElementBookPageControlTypeEnum,
} from 'element-book';
import {assign, css, CSSResult, html, listen, unsafeCSS} from 'element-vir';
import {Element24Icon} from '../../icons';
import {elementsBookChapter} from '../elements.book';
import {ViraInput} from './vira-input.element';

const viraInputBookChapter = defineElementBookChapter({
    title: 'Input',
    parent: elementsBookChapter,
});

function defineViraInputPage(
    title: string,
    showControls: boolean,
    descriptions?: ReadonlyArray<string>,
    overrideInputs?: Pick<(typeof ViraInput)['inputsType'], 'fitText'>,
) {
    return defineElementBookPage({
        title,
        parent: viraInputBookChapter,
        descriptionParagraphs: descriptions,
        controls: (() => {
            const controls = {
                'Text color': {
                    controlType: ElementBookPageControlTypeEnum.Text,
                    initValue: '',
                },
                'Placeholder color': {
                    controlType: ElementBookPageControlTypeEnum.Text,
                    initValue: '',
                },
                'Border color': {
                    controlType: ElementBookPageControlTypeEnum.Text,
                    initValue: '',
                },
                'Focus color': {
                    controlType: ElementBookPageControlTypeEnum.Text,
                    initValue: '',
                },
                'Selection color': {
                    controlType: ElementBookPageControlTypeEnum.Text,
                    initValue: '',
                },
            } as const satisfies NonNullable<
                Parameters<typeof defineElementBookPage>[0]['controls']
            >;

            if (showControls) {
                return controls;
            } else {
                return {} as typeof controls;
            }
        })(),
        defineExamplesCallback({defineExample}) {
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
                        const styles = showControls
                            ? css`
                                  ${ViraInput.cssVars['vira-input-text-color'].name}: ${unsafeCSS(
                                      controls['Text color'] || 'inherit',
                                  )};
                                  ${ViraInput.cssVars['vira-input-border-color'].name}: ${unsafeCSS(
                                      controls['Border color'] || 'inherit',
                                  )};
                                  ${ViraInput.cssVars['vira-input-focus-border-color']
                                      .name}: ${unsafeCSS(controls['Focus color'] || 'inherit')};
                                  ${ViraInput.cssVars['vira-input-placeholder-color']
                                      .name}: ${unsafeCSS(
                                      controls['Placeholder color'] || 'inherit',
                                  )};
                                  ${ViraInput.cssVars['vira-input-text-selection-color']
                                      .name}: ${unsafeCSS(
                                      controls['Selection color'] || 'inherit',
                                  )};
                              `
                            : css``;

                        return html`
                            <${ViraInput}
                                style=${styles}
                                ${assign(ViraInput, {
                                    ...inputs,
                                    value: state.value,
                                    ...overrideInputs,
                                })}
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
        },
    });
}
const viraInputBookPages = [
    defineViraInputPage(ViraInput.tagName, true, [
        'Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.',
        'Has completely customizable sizing and coloring.',
    ]),
    defineViraInputPage(
        'vira-input fit text',
        true,
        ["Set the input 'fitText' to true for automatic sizing to fit the given text."],
        {fitText: true},
    ),
];

export const viraInputBookEntries = [
    viraInputBookChapter,
    ...viraInputBookPages,
];
