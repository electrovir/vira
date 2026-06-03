import {createUtcFullDate, type FullDate} from 'date-vir';
import {defineBookPage} from 'element-book';
import {html, listen} from 'element-vir';
import {ViraDateInput} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraDateInputBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraDateInput.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'default',
            state() {
                return {
                    value: undefined as FullDate | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraDateInput.assign({
                        value: state.value,
                    })}
                        ${listen(ViraDateInput.events.valueChange, (event) => {
                            updateState({
                                value: event.detail,
                            });
                        })}
                    ></${ViraDateInput}>
                `;
            },
        });

        defineExample({
            title: 'with value',
            state() {
                return {
                    value: createUtcFullDate('2026-04-29') as FullDate | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraDateInput.assign({
                        value: state.value,
                    })}
                        ${listen(ViraDateInput.events.valueChange, (event) => {
                            updateState({
                                value: event.detail,
                            });
                        })}
                    ></${ViraDateInput}>
                `;
            },
        });

        defineExample({
            title: 'has error',
            state() {
                return {
                    value: undefined as FullDate | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraDateInput.assign({
                        value: state.value,
                        hasError: true,
                    })}
                        ${listen(ViraDateInput.events.valueChange, (event) => {
                            updateState({
                                value: event.detail,
                            });
                        })}
                    ></${ViraDateInput}>
                `;
            },
        });

        defineExample({
            title: 'disabled',
            state() {
                return {
                    value: createUtcFullDate('2026-04-29') as FullDate | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraDateInput.assign({
                        value: state.value,
                        label: 'Birth Date',
                        isDisabled: true,
                    })}
                        ${listen(ViraDateInput.events.valueChange, (event) => {
                            updateState({
                                value: event.detail,
                            });
                        })}
                    ></${ViraDateInput}>
                `;
            },
        });

        defineExample({
            title: 'readonly',
            state() {
                return {
                    value: createUtcFullDate('2026-04-29') as FullDate | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraDateInput.assign({
                        value: state.value,
                        label: 'Birth Date',
                        isReadonly: true,
                    })}
                        ${listen(ViraDateInput.events.valueChange, (event) => {
                            updateState({
                                value: event.detail,
                            });
                        })}
                    ></${ViraDateInput}>
                `;
            },
        });
    },
});
