import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElementEvent, html, listen, nothing, onDomCreated} from 'element-vir';
import {listenToGlobal} from 'typed-event-target';
import {X24Icon} from '../icons/icon-svgs/x-24.icon.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {noNativeFormStyles, noNativeSpacing} from '../styles/native-styles.js';
import {viraShadows} from '../styles/shadows.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

const globalEventsToCloseModalOn = [
    'pagehide',
    'pageshow',
    'popstate',
] as const satisfies (keyof WindowEventMap)[];

/**
 * A modal element that uses the built-in `dialog` element.
 *
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-modal
 */
export const ViraModal = defineViraElement<
    {
        open: boolean;
    } & PartialWithUndefined<{
        /** If this isn't set, make sure to use the modal title slot to fill it in. */
        modalTitle: string;
        /**
         * If `true`, the following conditions trigger the modal to close:
         *
         * - The user clicks the "x" close button
         * - The `open` input is set to `false`
         *
         * If set to `false` (the default), the following conditions trigger the modal to close:
         *
         * - The user clicks outside of the modal
         * - The user presses the "Escape" key
         * - The user clicks the "x" close button
         * - The `open` input is set to `false`
         *
         * @default false
         */
        blockLightDismissal: boolean;
        modalSubtitle: string;
        isMobileSize: boolean;
    }>
>()({
    tagName: 'vira-modal',
    events: {
        modalClose: defineElementEvent<void>(),
    },
    state() {
        return {
            dialogElement: undefined as HTMLDialogElement | undefined,
            contentElement: undefined as HTMLDivElement | undefined,
            previousOpenValue: undefined as undefined | boolean,
            /** Remove listeners. */
            cleanup: undefined as undefined | (() => void),
        };
    },
    cleanup({state}) {
        state.cleanup?.();
    },
    hostClasses: {
        'vira-modal-phone-size': ({inputs}) => !!inputs.isMobileSize,
    },
    slotNames: ['modalTitle'],
    cssVars: {
        'vira-modal-backdrop-filter': 'blur(3px)',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            display: contents;
            min-width: 280px;
            border-radius: 16px;
        }

        h1 {
            ${noNativeSpacing};
        }

        dialog {
            border: none;
            flex-direction: column;
            border-radius: inherit;
            padding: 0;
            overflow: hidden;
            min-width: inherit;
            min-height: inherit;
            max-width: calc(100dvw - 100px);
            max-height: calc(100dvh - 100px);
            ${viraShadows.modal}

            &[open] {
                display: flex;
            }
            &::backdrop {
                background: ${viraFormCssVars['vira-form-modal-backdrop-color'].value};
                backdrop-filter: ${cssVars['vira-modal-backdrop-filter'].value};
            }

            & .modal-content-wrapper {
                overflow: hidden;
                display: flex;
                flex-direction: column;

                & .header {
                    padding: 16px 24px;
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;

                    & .header-text-wrapper {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        align-self: center;
                        margin-right: auto;

                        & h1 {
                            font-size: 24px;
                        }

                        & sub {
                            font-size: 16px;
                            color: ${viraFormCssVars['vira-form-secondary-body-foreground'].value};
                        }
                    }

                    & button.close {
                        ${noNativeFormStyles};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${viraFormCssVars['vira-form-radius'].value};

                        &:hover {
                            background-color: ${viraFormCssVars['vira-form-selection-hover-color']
                                .value};
                        }

                        & ${ViraIcon} {
                            display: flex;
                        }
                    }
                }
                & .body {
                    padding: 16px 24px;
                    overflow: auto;
                    overscroll-behavior: contain;
                }
            }
        }

        ${hostClasses['vira-modal-phone-size'].selector} {
            & dialog {
                width: 100dvw;
                max-width: 100dvw;
            }
        }
    `,
    render({inputs, state, updateState, events, dispatch, slotNames}) {
        if (state.dialogElement && inputs.open !== state.dialogElement.open) {
            if (inputs.open) {
                state.dialogElement.showModal();
            } else {
                state.dialogElement.close();
            }
        }

        if (state.previousOpenValue !== inputs.open) {
            state.cleanup?.();
            updateState({previousOpenValue: inputs.open});
            if (inputs.open) {
                const removers = globalEventsToCloseModalOn.map((eventName) =>
                    listenToGlobal(eventName, () => {
                        dispatch(new events.modalClose());
                    }),
                );

                updateState({
                    cleanup: () => {
                        removers.forEach((remover) => remover());
                    },
                });
            }
        }

        function close() {
            if (inputs.open) {
                state.cleanup?.();
                dispatch(new events.modalClose());
            }
        }

        return html`
            <dialog
                ${onDomCreated((element) => {
                    updateState({dialogElement: assertWrap.instanceOf(element, HTMLDialogElement)});
                })}
                ${listen('close', () => {
                    close();
                })}
                ${listen('mousedown', (event) => {
                    if (
                        state.contentElement &&
                        !event.composedPath().includes(state.contentElement) &&
                        !inputs.blockLightDismissal
                    ) {
                        /** Background click. */
                        close();
                    }
                })}
            >
                <div
                    class="modal-content-wrapper"
                    ${onDomCreated((element) => {
                        updateState({
                            contentElement: assertWrap.instanceOf(element, HTMLDivElement),
                        });
                    })}
                >
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1><slot name=${slotNames.modalTitle}>${inputs.modalTitle}</slot></h1>
                            ${inputs.modalSubtitle
                                ? html`
                                      <sub>${inputs.modalSubtitle}</sub>
                                  `
                                : nothing}
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${listen('click', () => {
                                state.dialogElement?.close();
                            })}
                        >
                            <${ViraIcon.assign({
                                icon: X24Icon,
                            })}></${ViraIcon}>
                        </button>
                    </div>
                    ${inputs.open
                        ? html`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `
                        : nothing}
                </div>
            </dialog>
        `;
    },
});
