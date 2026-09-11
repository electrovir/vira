/* node:coverage disable */

import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {ViraColorPicker} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

export const viraColorPickerBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraColorPicker.tagName,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            state() {
                return {
                    currentColor: undefined as string | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraColorPicker.assign({
                        color: state.currentColor,
                    })}
                        ${listen(ViraColorPicker.events.colorChange, (event) => {
                            updateState({
                                currentColor: event.detail,
                            });
                        })}
                    ></${ViraColorPicker}>
                `;
            },
        });
        defineExample({
            title: 'resized',
            styles: css`
                ${ViraColorPicker} {
                    ${ViraColorPicker.cssVars['vira-color-picker-swatch-width'].name}: 50px;
                    ${ViraColorPicker.cssVars['vira-color-picker-swatch-height'].name}: 50px;
                }
            `,
            state() {
                return {
                    currentColor: undefined as string | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraColorPicker.assign({
                        color: state.currentColor,
                    })}
                        ${listen(ViraColorPicker.events.colorChange, (event) => {
                            updateState({
                                currentColor: event.detail,
                            });
                        })}
                    ></${ViraColorPicker}>
                `;
            },
        });
        defineExample({
            title: 'animated resize',
            descriptionParagraphs: [
                'Verifying that vira-color-picker automatically adjusts sizing.',
            ],
            styles: css`
                @keyframes resize {
                    0% {
                        ${ViraColorPicker.cssVars['vira-color-picker-swatch-width'].name}: 50px;
                        ${ViraColorPicker.cssVars['vira-color-picker-swatch-height'].name}: 50px;
                    }
                    100% {
                        ${ViraColorPicker.cssVars['vira-color-picker-swatch-width'].name}: 200px;
                        ${ViraColorPicker.cssVars['vira-color-picker-swatch-height'].name}: 200px;
                    }
                }

                ${ViraColorPicker} {
                    border: 1px solid red;
                    animation: resize 2s ease-in-out infinite alternate;
                }

                .max-size {
                    display: block;
                    width: 200px;
                    height: 200px;
                }
            `,
            state() {
                return {
                    currentColor: undefined as string | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <div class="max-size">
                        <${ViraColorPicker.assign({
                            color: state.currentColor,
                        })}
                            ${listen(ViraColorPicker.events.colorChange, (event) => {
                                updateState({
                                    currentColor: event.detail,
                                });
                            })}
                        ></${ViraColorPicker}>
                    </div>
                `;
            },
        });
        defineExample({
            title: 'always show picker',
            state() {
                return {
                    currentColor: undefined as string | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraColorPicker.assign({
                        color: state.currentColor,
                        alwaysShowPicker: true,
                    })}
                        ${listen(ViraColorPicker.events.colorChange, (event) => {
                            updateState({
                                currentColor: event.detail,
                            });
                        })}
                    ></${ViraColorPicker}>
                `;
            },
        });
        defineExample({
            title: 'show hex',
            state() {
                return {
                    currentColor: undefined as string | undefined,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraColorPicker.assign({
                        color: state.currentColor,
                        alwaysShowPicker: true,
                        showHexValue: true,
                    })}
                        ${listen(ViraColorPicker.events.colorChange, (event) => {
                            updateState({
                                currentColor: event.detail,
                            });
                        })}
                    ></${ViraColorPicker}>
                `;
            },
        });
    },
});
