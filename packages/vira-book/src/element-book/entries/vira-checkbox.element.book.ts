import {BookPageControlType, defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {ViraCheckbox} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraCheckboxBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraCheckbox.tagName,
    controls: {
        Checked: {
            controlType: BookPageControlType.Checkbox,
            initValue: false,
        },
        Disabled: {
            controlType: BookPageControlType.Checkbox,
            initValue: false,
        },
    },
    defineExamples({defineExample}) {
        defineExample({
            title: 'checked',
            state() {
                return {
                    checked: true,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'unchecked',
            state() {
                return {
                    checked: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'error',
            state() {
                return {
                    checked: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        hasError: true,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'disabled unchecked',
            render() {
                return html`
                    <${ViraCheckbox.assign({
                        value: false,
                        isDisabled: true,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'disabled checked',
            render() {
                return html`
                    <${ViraCheckbox.assign({
                        value: true,
                        isDisabled: true,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'dynamic',
            descriptionParagraphs: ['Should only update when controls change.'],
            render({controls}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: controls.Checked,
                        isDisabled: controls.Disabled,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'no listener',
            descriptionParagraphs: ['Should not update on user clicks.'],
            render() {
                return html`
                    <${ViraCheckbox.assign({
                        value: true,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'with label',
            state() {
                return {
                    checked: true,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        label: 'label goes here',
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'slotted label',
            descriptionParagraphs: [
                'The label slot overrides the label input and can contain arbitrary HTML.',
            ],
            state() {
                return {
                    checked: true,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        label: 'fallback label',
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    >
                        <span slot=${ViraCheckbox.slotNames['vira-checkbox-label']}>
                            I agree to the
                            <a href="#">terms and conditions</a>
                        </span>
                    </${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'horizontal',
            state() {
                return {
                    checked: true,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        label: 'label goes here',
                        useHorizontalLabel: true,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'long label',
            state() {
                return {
                    checked: true,
                };
            },
            styles: css`
                ${ViraCheckbox} {
                    max-width: 400px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        label: 'label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here ',
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'long horizontal label',
            state() {
                return {
                    checked: true,
                };
            },
            styles: css`
                ${ViraCheckbox} {
                    max-width: 400px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        label: 'label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here label goes here ',
                        useHorizontalLabel: true,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'fill when checked',
            state() {
                return {
                    checked: true,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        fillWhenChecked: true,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'fill when unchecked',
            state() {
                return {
                    checked: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        fillWhenUnchecked: true,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'both fills',
            state() {
                return {
                    checked: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraCheckbox.assign({
                        value: state.checked,
                        fillWhenUnchecked: true,
                        fillWhenChecked: true,
                    })}
                        ${listen(ViraCheckbox.events.valueChange, (event) => {
                            updateState({
                                checked: event.detail,
                            });
                        })}
                    ></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'disabled fill when checked',
            render() {
                return html`
                    <${ViraCheckbox.assign({
                        value: true,
                        isDisabled: true,
                        fillWhenChecked: true,
                    })}></${ViraCheckbox}>
                `;
            },
        });
        defineExample({
            title: 'disabled fill when unchecked',
            render() {
                return html`
                    <${ViraCheckbox.assign({
                        value: false,
                        isDisabled: true,
                        fillWhenUnchecked: true,
                    })}></${ViraCheckbox}>
                `;
            },
        });
    },
});
