import {mapObjectValues} from '@augment-vir/common';
import {BookPageControlType, defineBookPage} from 'element-book';
import {type CSSResult, css, html, listen} from 'element-vir';
import {viraFormCssVars, ViraTextArea} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraTextAreaBookPage = defineBookPage({
    title: ViraTextArea.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'A multi-line text area that mirrors the styling of vira-input.',
        'Supports placeholders, labels, error styling, disabled state, blocking/allowing specific inputs, and resize control.',
    ],
    controls: {
        'Text color': {
            controlType: BookPageControlType.Color,
            initValue: viraFormCssVars['vira-form-foreground-color'].default,
        },
        'Placeholder color': {
            controlType: BookPageControlType.Color,
            initValue: viraFormCssVars['vira-form-placeholder-color'].default,
        },
        'Border color': {
            controlType: BookPageControlType.Color,
            initValue: viraFormCssVars['vira-form-border-color'].default,
        },
        'Focus color': {
            controlType: BookPageControlType.Color,
            initValue: viraFormCssVars['vira-form-focus-outline-color'].default,
        },
        'Selection color': {
            controlType: BookPageControlType.Color,
            initValue: viraFormCssVars['vira-form-text-selection-color'].default,
        },
    } as const satisfies NonNullable<Parameters<typeof defineBookPage>[0]['controls']>,
    defineExamples({defineExample}) {
        type Example = {
            styles?: CSSResult;
            title: string;
            inputs: (typeof ViraTextArea)['InputsType'];
        };

        function defineTextAreaExample({styles, title, inputs}: Readonly<Example>) {
            defineExample({
                title,
                styles: css`
                    ${styles || css``}
                `,
                state() {
                    return {
                        value: inputs.value,
                    };
                },
                render({state, updateState, controls}) {
                    const cssVarControlValues = {
                        [String(viraFormCssVars['vira-form-foreground-color'].name)]:
                            controls['Text color'],
                        [String(viraFormCssVars['vira-form-placeholder-color'].name)]:
                            controls['Placeholder color'],
                        [String(viraFormCssVars['vira-form-border-color'].name)]:
                            controls['Border color'],
                        [String(viraFormCssVars['vira-form-focus-outline-color'].name)]:
                            controls['Focus color'],
                        [String(viraFormCssVars['vira-form-text-selection-color'].name)]:
                            controls['Selection color'],
                    };

                    const cssVarValues = mapObjectValues(
                        cssVarControlValues,
                        (varName, controlValue) => {
                            return controlValue || 'inherit';
                        },
                    );

                    const inlineStyles = Object.entries(cssVarValues)
                        .map(
                            ([
                                varName,
                                varValue,
                            ]) => {
                                return (
                                    [
                                        varName,
                                        varValue,
                                    ].join(': ') + ';'
                                );
                            },
                        )
                        .join('\n');

                    return html`
                        <${ViraTextArea.assign({
                            ...inputs,
                            value: state.value,
                        })}
                            style=${inlineStyles}
                            ${listen(ViraTextArea.events.valueChange, (event) => {
                                updateState({
                                    value: event.detail,
                                });
                                console.info('changed:', event.detail);
                            })}
                        ></${ViraTextArea}>
                    `;
                },
            });
        }

        const examples: ReadonlyArray<Readonly<Example>> = [
            {
                title: 'basic',
                inputs: {
                    value: 'default value',
                },
            },
            {
                title: 'with placeholder',
                inputs: {
                    value: '',
                    placeholder: 'placeholder here',
                },
            },
            {
                title: 'with label',
                inputs: {
                    label: 'Label here',
                    placeholder: 'has label',
                    value: '',
                },
            },
            {
                title: 'disabled',
                inputs: {
                    value: 'disabled',
                    disabled: true,
                },
            },
            {
                title: 'readonly',
                inputs: {
                    label: 'Label here',
                    value: 'readonly value\nwith multiple lines',
                    isReadonly: true,
                },
            },
            {
                title: 'with error',
                inputs: {
                    value: 'has error',
                    hasError: true,
                },
            },
            {
                title: 'prevent resize',
                inputs: {
                    value: '',
                    placeholder: 'cannot resize',
                    preventResize: true,
                },
            },
            {
                title: 'tall',
                inputs: {
                    value: '',
                    placeholder: '8 rows',
                    rows: 8,
                },
            },
            {
                title: 'short',
                inputs: {
                    value: '',
                    placeholder: '2 rows',
                    rows: 2,
                },
            },
            {
                title: 'numbers only',
                inputs: {
                    value: '',
                    placeholder: 'digits only',
                    allowedInputs: /\d/,
                },
            },
            {
                title: 'numbers blocked',
                inputs: {
                    value: '',
                    placeholder: 'no digits',
                    blockedInputs: /\d/,
                },
            },
            {
                title: 'custom width',
                styles: css`
                    ${ViraTextArea} {
                        width: 480px;
                    }
                `,
                inputs: {
                    value: '',
                    placeholder: 'wider',
                },
            },
        ];

        examples.forEach(defineTextAreaExample);
    },
});
