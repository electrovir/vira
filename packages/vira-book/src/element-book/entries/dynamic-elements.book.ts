import {assert} from '@augment-vir/assert';
import {combineErrorMessages, extractErrorMessage, wait} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, defineElement, html, listen} from 'element-vir';
import {
    type BaseDynamicElementLoaders,
    createDynamicElementLoader,
    LoaderAnimated24Icon,
    renderDynamicElement,
    ViraError,
    ViraIcon,
    ViraSelect,
} from 'vira';
import {utilBookPage} from '../top-level-pages.js';

const loaders = {
    async element1() {
        await wait({seconds: 2});
        return (await import('../../mocks/vira-element-1.js')).ViraElement1Mock;
    },
    async element2() {
        await wait({seconds: 2});
        return (await import('../../mocks/vira-element-2.js')).ViraElement2Mock;
    },
    errorElement() {
        throw new Error('import failure');
    },
} as const satisfies BaseDynamicElementLoaders;

const ExampleDirectSetKeyDynamicElements = defineElement<{numberValue: 1 | 2 | 3}>()({
    tagName: 'example-direct-set-key-dynamic-elements',
    state() {
        return {
            dynamicElements: createDynamicElementLoader(loaders),
        };
    },
    render({state, inputs}) {
        return renderDynamicElement(state.dynamicElements, {
            key:
                inputs.numberValue === 1
                    ? 'element1'
                    : inputs.numberValue === 2
                      ? 'element2'
                      : 'errorElement',
            error(error) {
                return html`
                    <${ViraError}>
                        ${combineErrorMessages(
                            'Failed to import element',
                            extractErrorMessage(error),
                        )}
                    </${ViraError}>
                `;
            },
            loading() {
                return html`
                    <${ViraIcon.assign({
                        icon: LoaderAnimated24Icon,
                    })}></${ViraIcon}>
                `;
            },
            ready(loaded) {
                if (loaded.element1) {
                    /** This child element has no inputs. */
                    return html`
                        <${loaded.element1}></${loaded.element1}>
                    `;
                } else if (loaded.element2) {
                    /** This child element has a required input. */
                    return html`
                        <${loaded.element2.assign({
                            userName: 'John',
                        })}></${loaded.element2}>
                    `;
                } else {
                    assert.never('The error element will always error');
                }
            },
        });
    },
});
const ExampleAsyncUpdateKeyDynamicElements = defineElement<{numberValue: 1 | 2 | 3}>()({
    tagName: 'example-async-update-key-dynamic-elements',
    state() {
        return {
            dynamicElements: createDynamicElementLoader(loaders),
        };
    },
    render({state, inputs}) {
        state.dynamicElements.update(
            inputs.numberValue === 1
                ? 'element1'
                : inputs.numberValue === 2
                  ? 'element2'
                  : 'errorElement',
        );

        return renderDynamicElement(state.dynamicElements, {
            error(error) {
                return html`
                    <${ViraError}>
                        ${combineErrorMessages(
                            'Failed to import element',
                            extractErrorMessage(error),
                        )}
                    </${ViraError}>
                `;
            },
            loading() {
                return html`
                    <${ViraIcon.assign({
                        icon: LoaderAnimated24Icon,
                    })}></${ViraIcon}>
                `;
            },
            ready(loaded) {
                if (loaded.element1) {
                    /** This child element has no inputs. */
                    return html`
                        <${loaded.element1}></${loaded.element1}>
                    `;
                } else if (loaded.element2) {
                    /** This child element has a required input. */
                    return html`
                        <${loaded.element2.assign({
                            userName: 'John',
                        })}></${loaded.element2}>
                    `;
                } else {
                    assert.never('The error element will always error');
                }
            },
        });
    },
});

const selectOptions = [
    {
        label: '1',
        value: '1',
    },
    {
        label: '2',
        value: '2',
    },
    {
        label: '3',
        value: '3',
    },
];

export const dynamicElementsBookPage = defineBookPage({
    parent: utilBookPage,
    title: 'Dynamic Element Loading',
    defineExamples({defineExample}) {
        defineExample({
            title: 'direct key setting',
            state() {
                return {
                    value: 1 as 1 | 2 | 3,
                };
            },
            styles: css`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ViraSelect.assign({
                        value: String(state.value),
                        options: selectOptions,
                    })}
                        ${listen(ViraSelect.events.valueChange, (event) => {
                            const numericValue = Number(event.detail);

                            if (numericValue !== 1 && numericValue !== 2 && numericValue !== 3) {
                                throw new Error(`Invalid selection: ${numericValue}`);
                            }
                            updateState({
                                value: numericValue,
                            });
                        })}
                    ></${ViraSelect}>
                    <${ExampleDirectSetKeyDynamicElements.assign({
                        numberValue: state.value,
                    })}></${ExampleDirectSetKeyDynamicElements}>
                `;
            },
        });
        defineExample({
            title: 'async prop update key',
            state() {
                return {
                    value: 1 as 1 | 2 | 3,
                };
            },
            styles: css`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ViraSelect.assign({
                        value: String(state.value),
                        options: selectOptions,
                    })}
                        ${listen(ViraSelect.events.valueChange, (event) => {
                            const numericValue = Number(event.detail);

                            if (numericValue !== 1 && numericValue !== 2 && numericValue !== 3) {
                                throw new Error(`Invalid selection: ${numericValue}`);
                            }
                            updateState({
                                value: numericValue,
                            });
                        })}
                    ></${ViraSelect}>
                    <${ExampleAsyncUpdateKeyDynamicElements.assign({
                        numberValue: state.value,
                    })}></${ExampleAsyncUpdateKeyDynamicElements}>
                `;
            },
        });
    },
});
