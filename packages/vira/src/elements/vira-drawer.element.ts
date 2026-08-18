import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {colorCss} from '@electrovir/color';
import {css, defineElementEvent, html, listen, nothing, onDomCreated} from 'element-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {listenToGlobal} from 'typed-event-target';
import {X24Icon} from '../icons/icon-svgs/24/x-24.icon.js';
import {viraAnimationDurations} from '../styles/durations.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {noNativeFormStyles, noNativeSpacing} from '../styles/native-styles.js';
import {viraShadows} from '../styles/shadows.js';
import {noUserSelect} from '../styles/user-select.js';
import {viraTheme} from '../styles/vira-color-theme.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

const globalEventsToCloseDrawerOn = [
    'pagehide',
    'pageshow',
    'popstate',
] as const satisfies (keyof WindowEventMap)[];

/** Minimum downward drag distance (in pixels) required to close the drawer. */
const dragCloseThreshold = 30;

/**
 * A drawer element that slides up from the bottom of the page using the built-in `dialog` element.
 *
 * @category Elements
 */
export const ViraDrawer = defineViraElement<
    {
        open: boolean;
    } & PartialWithUndefined<{
        /** If this isn't set, make sure to use the drawer title slot to fill it in. */
        drawerTitle: string;
        noContentPadding: boolean;
    }>
>()({
    tagName: 'vira-drawer',
    events: {
        drawerClose: defineElementEvent<void>(),
    },
    state() {
        return {
            dialogElement: undefined as HTMLDialogElement | undefined,
            contentElement: undefined as HTMLDivElement | undefined,
            previousOpenValue: undefined as undefined | boolean,
            /** Cleans up all listeners that have been attached. */
            cleanupListeners: undefined as undefined | (() => void),
            isDragging: false,
            dragStartY: 0,
            dragCurrentY: 0,
        };
    },
    cleanup({state}) {
        state.cleanupListeners?.();
    },
    hostClasses: {
        'vira-drawer-dragging': ({state}) => state.isDragging,
        'vira-drawer-no-content-padding': ({inputs}) => !!inputs.noContentPadding,
    },
    slotNames: ['vira-drawer-drawer-title'],
    cssVars: {
        'vira-drawer-backdrop-filter': 'blur(3px)',
        'vira-drawer-max-height': '80dvh',
    },
    styles: ({cssVars, hostClasses}) => {
        return css`
            :host {
                display: contents;
            }

            ${hostClasses['vira-drawer-dragging'].selector} {
                ${noUserSelect};
            }

            h1 {
                ${noNativeSpacing};
            }

            dialog {
                ${colorCss(viraTheme.colors[themeDefaultKey])}
                border: none;
                padding: 0;
                overflow: hidden;
                position: fixed;
                inset: auto 0 0 0;
                margin: 0;
                width: 100%;
                max-width: 100%;
                max-height: ${cssVars['vira-drawer-max-height'].value};
                border-radius: 16px 16px 0 0;
                ${viraShadows.modal}
                transition: transform ${viraAnimationDurations['vira-pretty-animation-duration']
                    .value} ease;

                &[open] {
                    display: flex;
                    flex-direction: column;
                }

                &::backdrop {
                    background: ${viraFormCssVars['vira-form-modal-backdrop-color'].value};
                    backdrop-filter: ${cssVars['vira-drawer-backdrop-filter'].value};
                }

                & .drawer-content-wrapper {
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;

                    & .drag-handle-wrapper {
                        display: flex;
                        justify-content: center;
                        padding: 8px 0 0;
                        cursor: grab;
                        touch-action: none;

                        &:active {
                            cursor: grabbing;
                        }

                        & .drag-handle {
                            width: 36px;
                            height: 4px;
                            border-radius: 2px;
                            background-color: ${viraFormCssVars[
                                'vira-form-secondary-body-foreground'
                            ].value};
                            opacity: 0.5;
                        }
                    }

                    & .header {
                        padding: 8px 24px 16px;
                        display: flex;
                        gap: 16px;
                        align-items: flex-start;

                        & .header-text-wrapper {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                            align-self: center;
                            flex-grow: 1;
                            overflow: hidden;

                            & h1 {
                                font-size: 20px;
                            }
                        }

                        & button.close {
                            ${noNativeFormStyles};
                            flex-shrink: 0;
                            cursor: pointer;
                            padding: 4px;
                            border-radius: ${viraFormCssVars['vira-form-radius'].value};

                            &:hover {
                                background-color: ${viraFormCssVars[
                                    'vira-form-selection-hover-color'
                                ].value};
                            }

                            & ${ViraIcon} {
                                display: flex;
                            }
                        }
                    }

                    & .body {
                        padding: 0 24px 24px;
                        overflow: auto;
                        overscroll-behavior: contain;
                    }
                }
            }

            ${hostClasses['vira-drawer-no-content-padding'].selector} {
                & dialog .drawer-content-wrapper .body {
                    padding: 0;
                }
            }
        `;
    },
    render({inputs, state, updateState, events, dispatch, slotNames}) {
        if (state.dialogElement && inputs.open !== state.dialogElement.open) {
            if (inputs.open) {
                state.dialogElement.showModal();
            } else {
                state.dialogElement.close();
            }
        }

        if (state.previousOpenValue !== inputs.open) {
            state.cleanupListeners?.();
            updateState({
                previousOpenValue: inputs.open,
            });
            if (inputs.open) {
                const removers = globalEventsToCloseDrawerOn.map((eventName) => {
                    return listenToGlobal(eventName, () => {
                        dispatch(new events.drawerClose());
                    });
                });

                updateState({
                    cleanupListeners: () => {
                        removers.forEach((remover) => remover());
                    },
                });
            }
        }

        function close() {
            if (inputs.open) {
                state.cleanupListeners?.();
                dispatch(new events.drawerClose());
            }
        }

        if (state.dialogElement) {
            if (state.isDragging) {
                const dragOffset = Math.max(0, state.dragCurrentY - state.dragStartY);
                state.dialogElement.style.transform = `translateY(${String(dragOffset)}px)`;
                state.dialogElement.style.transition = 'none';
            } else {
                state.dialogElement.style.transform = '';
                state.dialogElement.style.transition = '';
            }
        }

        return html`
            <dialog
                ${onDomCreated((element) => {
                    updateState({
                        dialogElement: assertWrap.instanceOf(element, HTMLDialogElement),
                    });
                })}
                ${listen('close', () => {
                    close();
                })}
                ${listen('mousedown', (event) => {
                    if (
                        state.contentElement &&
                        !event.composedPath().includes(state.contentElement)
                    ) {
                        close();
                    }
                })}
            >
                <div
                    class="drawer-content-wrapper"
                    ${onDomCreated((element) => {
                        updateState({
                            contentElement: assertWrap.instanceOf(element, HTMLDivElement),
                        });
                    })}
                >
                    <div
                        class="drag-handle-wrapper"
                        ${listen('dblclick', () => {
                            close();
                        })}
                        ${listen('pointerdown', (event) => {
                            updateState({
                                isDragging: true,
                                dragStartY: event.clientY,
                                dragCurrentY: event.clientY,
                            });

                            function handlePointerMove(moveEvent: PointerEvent) {
                                updateState({
                                    dragCurrentY: moveEvent.clientY,
                                });
                            }

                            function handlePointerUp(upEvent: PointerEvent) {
                                const dragDistance = upEvent.clientY - state.dragStartY;

                                updateState({
                                    isDragging: false,
                                    dragStartY: 0,
                                    dragCurrentY: 0,
                                });

                                if (dragDistance > dragCloseThreshold) {
                                    close();
                                }

                                listenerRemovers.forEach((remover) => remover());
                            }

                            const listenerRemovers = [
                                listenToGlobal('pointermove', handlePointerMove),
                                listenToGlobal('pointerup', handlePointerUp),
                            ];
                        })}
                    >
                        <div class="drag-handle"></div>
                    </div>
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1>
                                <slot name=${slotNames['vira-drawer-drawer-title']}>
                                    ${inputs.drawerTitle}
                                </slot>
                            </h1>
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
