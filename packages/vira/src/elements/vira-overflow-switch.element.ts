import {css, html, onDomCreated} from 'element-vir';
import {type RequireExactlyOne} from 'type-fest';
import {listenTo} from 'typed-event-target';
import {defineViraElement} from '../util/define-vira-element.js';

/**
 * An element switches between two slots based on their overflow.
 *
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-overflow-switch
 */
export const ViraOverflowSwitch = defineViraElement<
    RequireExactlyOne<{
        automaticallySwitch: boolean;
        useSmall: boolean;
    }>
>()({
    tagName: 'vira-overflow-switch',
    slotNames: [
        /** The child to render, if it fits. */
        'large',
        /** The child to render if the large one does not fit. */
        'small',
    ],
    state() {
        return {
            isOverflowing: false,
            resizeObserver: undefined as undefined | ResizeObserver,
            /** Called on cleanup to clear all listeners. */
            cleanupListeners: undefined as undefined | (() => void),
        };
    },
    hostClasses: {
        'vira-overflow-switch-show-small': ({state, inputs}) =>
            state.isOverflowing || !!inputs.useSmall,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-block;
            max-width: 100%;
        }

        .large,
        .small {
            display: inline-block;
        }

        .small {
            display: none;
        }

        /**
         * When the large content overflows, hide it but keep it in layout so we can measure it.
         * The small content is then shown instead.
         */
        ${hostClasses['vira-overflow-switch-show-small'].selector} .large {
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
        }

        ${hostClasses['vira-overflow-switch-show-small'].selector} .small {
            display: inline-block;
        }
    `,
    cleanup({state, updateState}) {
        state.cleanupListeners?.();
        updateState({
            cleanupListeners: undefined,
        });
    },
    render({slotNames, updateState, inputs, host, state}) {
        return html`
            <div
                class="large"
                ${onDomCreated((largeElement) => {
                    if (!inputs.automaticallySwitch) {
                        return;
                    }

                    const overflowParams: Parameters<typeof updateOverflowing>[0] = {
                        elementToTest: largeElement,
                        host,
                        updateState,
                    };

                    const resizeObserver = new ResizeObserver(() => {
                        updateOverflowing(overflowParams);
                    });

                    resizeObserver.observe(host);

                    /**
                     * Also observe the large slot wrapper itself in case its own layout changes
                     * without host resizing.
                     */
                    resizeObserver.observe(largeElement);

                    const removeSlotChangeListener = listenTo(largeElement, 'slotchange', () => {
                        updateOverflowing(overflowParams);
                    });

                    /** Initial measurement: defer until after first layout. */
                    updateOverflowing(overflowParams);

                    state.cleanupListeners?.();
                    updateState({
                        cleanupListeners() {
                            resizeObserver.disconnect();
                            removeSlotChangeListener();
                        },
                    });
                })}
            >
                <slot name=${slotNames.large}></slot>
            </div>
            <div class="small"><slot name=${slotNames.small}></slot></div>
        `;
    },
});

function updateOverflowing({
    elementToTest,
    host,
    updateState,
}: {
    host: Element;
    updateState: (newState: Partial<{isOverflowing: boolean}>) => void;
    elementToTest: Element;
}) {
    const isOverflowing = elementToTest.scrollWidth > host.clientWidth;

    updateState({
        isOverflowing,
    });
}
