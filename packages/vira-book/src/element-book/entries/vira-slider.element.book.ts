import {BookPageControlType, defineBookPage} from 'element-book';
import {html, listen} from 'element-vir';
import {ViraSlider} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

export const viraSliderBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraSlider.tagName,
    controls: {
        Disabled: {
            controlType: BookPageControlType.Checkbox,
            initValue: false,
        },
    },
    defineExamples({defineExample}) {
        defineExample({
            title: 'default',
            state() {
                return {
                    value: 40,
                };
            },
            render({state, updateState, controls}) {
                return html`
                    <${ViraSlider.assign({
                        value: state.value,
                        isDisabled: controls.Disabled,
                        label: 'Example',
                    })}
                        ${listen(ViraSlider.events.valueChange, (event) => {
                            updateState({
                                value: event.detail,
                            });
                        })}
                    ></${ViraSlider}>
                    <span>${state.value}</span>
                `;
            },
        });
        defineExample({
            title: 'custom range and step',
            state() {
                return {
                    value: 0.5,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraSlider.assign({
                        value: state.value,
                        min: -1,
                        max: 1,
                        step: 0.1,
                    })}
                        ${listen(ViraSlider.events.valueChange, (event) => {
                            updateState({
                                value: event.detail,
                            });
                        })}
                    ></${ViraSlider}>
                    <span>${state.value}</span>
                `;
            },
        });
        defineExample({
            title: 'disabled',
            render() {
                return html`
                    <${ViraSlider.assign({
                        value: 70,
                        isDisabled: true,
                    })}></${ViraSlider}>
                `;
            },
        });
        defineExample({
            title: 'no listener',
            descriptionParagraphs: ['Should not move on user input.'],
            render() {
                return html`
                    <${ViraSlider.assign({
                        value: 30,
                    })}></${ViraSlider}>
                `;
            },
        });
    },
});
