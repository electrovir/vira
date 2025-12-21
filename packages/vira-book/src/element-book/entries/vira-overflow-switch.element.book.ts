import {checkWrap} from '@augment-vir/assert';
import {addPx, removePx} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {readCssVarValue, setCssVarValue} from 'lit-css-vars';
import {defineViraElement, ViraOverflowSwitch} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const commonStyles = css`
    .large {
        font-size: 32px;
    }

    .small {
        font-size: 12px;
    }
`;

const commonTemplate = html`
    <${ViraOverflowSwitch.assign({
        automaticallySwitch: true,
    })}>
        <div class="large" slot=${ViraOverflowSwitch.slotNames.large}>Large</div>
        <div class="small" slot=${ViraOverflowSwitch.slotNames.small}>Small</div>
    </${ViraOverflowSwitch}>
`;

const dynamicWidths = {
    max: 120,
    min: 25,
    default: 80,
};

const ViraDynamicWidthOverflowSwitchExample = defineViraElement()({
    tagName: 'vira-dynamic-width-overflow-switch-example',
    cssVars: {
        'vira-dynamic-width-overflow-switch-example-max-width': addPx(dynamicWidths.default),
    },
    state() {
        return {
            intervalId: undefined as undefined | ReturnType<typeof globalThis.setInterval>,
            increment: 1,
        };
    },
    styles: ({cssVars}) => css`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: ${cssVars['vira-dynamic-width-overflow-switch-example-max-width'].value};
        }
    `,
    init({state, updateState, host, cssVars}) {
        globalThis.clearInterval(state.intervalId);
        updateState({
            intervalId: globalThis.setInterval(() => {
                const currentMaxWidth =
                    checkWrap.isNumber(
                        removePx(
                            readCssVarValue({
                                onElement: host,
                                forCssVar:
                                    cssVars['vira-dynamic-width-overflow-switch-example-max-width'],
                            }),
                        ),
                    ) || dynamicWidths.default;

                if (currentMaxWidth >= dynamicWidths.max || currentMaxWidth <= dynamicWidths.min) {
                    updateState({
                        increment: state.increment * -1,
                    });
                }

                setCssVarValue({
                    onElement: host,
                    forCssVar: cssVars['vira-dynamic-width-overflow-switch-example-max-width'],
                    toValue: addPx(currentMaxWidth + state.increment),
                });
            }, 10),
        });
    },
    cleanup({state, updateState}) {
        globalThis.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
    render() {
        return html`
            <slot></slot>
        `;
    },
});

const ViraDynamicSlotOverflowSwitchExample = defineViraElement()({
    tagName: 'vira-dynamic-slot-overflow-switch-example',
    cssVars: {
        'vira-dynamic-slot-overflow-switch-example-max-width': addPx(dynamicWidths.default),
    },
    state() {
        return {
            intervalId: undefined as undefined | ReturnType<typeof globalThis.setInterval>,
            showAlternateSlot: false,
        };
    },
    styles: css`
        :host {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid black;
            width: 120px;
        }

        ${commonStyles}

        .large {
            white-space: nowrap;
        }
    `,
    init({state, updateState}) {
        globalThis.clearInterval(state.intervalId);
        updateState({
            intervalId: globalThis.setInterval(() => {
                updateState({
                    showAlternateSlot: !state.showAlternateSlot,
                });
            }, 500),
        });
    },
    cleanup({state, updateState}) {
        globalThis.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
    render({state}) {
        return html`
            <${ViraOverflowSwitch.assign({
                automaticallySwitch: true,
            })}>
                <div class="large" slot=${ViraOverflowSwitch.slotNames.large}>
                    ${state.showAlternateSlot ? 'Super Large' : 'Large'}
                </div>
                <div class="small" slot=${ViraOverflowSwitch.slotNames.small}>Small</div>
            </${ViraOverflowSwitch}>
        `;
    },
});
export const viraOverflowSwitchBookPage = defineBookPage({
    title: ViraOverflowSwitch.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'Shows a "large" slot and automatically switches to a "small" slot when the large one overflows.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'not overflowing',
            styles: css`
                ${commonStyles}
            `,
            render() {
                return commonTemplate;
            },
        });
        defineExample({
            title: 'overflowing',
            styles: css`
                ${commonStyles}

                ${ViraOverflowSwitch} {
                    max-width: 50px;
                }
            `,
            render() {
                return commonTemplate;
            },
        });

        defineExample({
            title: 'dynamic size',
            styles: css`
                ${commonStyles}

                .wrapper {
                    width: ${dynamicWidths.max + 10}px;
                }
            `,
            render() {
                return html`
                    <div class="wrapper">
                        <${ViraDynamicWidthOverflowSwitchExample}>
                            ${commonTemplate}
                        </${ViraDynamicWidthOverflowSwitchExample}>
                    </div>
                `;
            },
        });
        defineExample({
            title: 'dynamic slot',
            styles: css`
                ${commonStyles}
            `,
            render() {
                return html`
                    <${ViraDynamicSlotOverflowSwitchExample}></${ViraDynamicSlotOverflowSwitchExample}>
                `;
            },
        });
    },
});
