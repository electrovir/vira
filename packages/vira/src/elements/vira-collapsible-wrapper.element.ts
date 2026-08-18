import {assertWrap} from '@augment-vir/assert';
import {classMap, css, defineElementEvent, html, listen, onDomCreated, onResize} from 'element-vir';
import {noNativeFormStyles, noUserSelect, viraAnimationDurations} from '../styles/index.js';
import {defineViraElement} from '../util/define-vira-element.js';

/**
 * A wrapper element that can collapse and expand to fit its content dynamically and efficiently.
 *
 * @category Collapsible
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-collapsible-wrapper
 */
export const ViraCollapsibleWrapper = defineViraElement<{
    expanded: boolean;
    /** When true, forces the content to expand when printing regardless of collapsed state. */
    expandOnPrint?: boolean;
}>()({
    tagName: 'vira-collapsible-wrapper',
    state() {
        return {
            contentHeight: 0,
            contentWidth: 0,
            /**
             * Collapsed content that is merely `height: 0` is still rendered, so the browser emits
             * a line break for it when serializing a selection to plain text. Copying a region that
             * spans collapsed wrappers then pastes with runs of blank lines. Taking the content out
             * of layout entirely is what drops those breaks; `visibility: hidden` and `user-select:
             * none` both leave them behind.
             *
             * This starts `false` even when collapsed because the wrapper takes both its width and
             * its animation target height from the content, so the content has to be laid out once
             * before it can be hidden.
             */
            isContentHidden: false,
            collapsingElement: undefined as HTMLDivElement | undefined,
        };
    },
    hostClasses: {
        'vira-collapsible-wrapper-expand-on-print': ({inputs}) => !!inputs.expandOnPrint,
    },
    slotNames: ['vira-collapsible-wrapper-header'],
    styles: ({hostClasses}) => {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                max-width: 100%;
                box-sizing: border-box;
            }

            .header-wrapper {
                ${noNativeFormStyles};
                cursor: pointer;
            }

            .content-wrapper,
            .collapsing-element {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
            }

            .collapsing-element {
                transition: height ${viraAnimationDurations['vira-pretty-animation-duration'].value};
                overflow: hidden;

                &.collapsed {
                    ${noUserSelect}
                }
            }

            .content-wrapper.hidden-content {
                display: none;
            }

            @media print {
                :host(.${hostClasses['vira-collapsible-wrapper-expand-on-print'].name})
                    .collapsing-element {
                    height: auto !important;
                    overflow: visible !important;
                    transition: none !important;

                    & .content-wrapper.hidden-content {
                        display: flex !important;
                    }
                }
            }
        `;
    },
    events: {
        expandChange: defineElementEvent<boolean>(),
    },
    render({state, slotNames, updateState, dispatch, events, inputs}) {
        if (inputs.expanded && state.isContentHidden) {
            updateState({
                isContentHidden: false,
            });
        } else if (
            !inputs.expanded &&
            !state.isContentHidden &&
            state.contentHeight &&
            !state.collapsingElement?.clientHeight
        ) {
            /**
             * Already at zero height, so no collapse animation will run and `transitionend` will
             * never fire. Covers a wrapper that mounts collapsed and one that gets collapsed before
             * its expanded height has been painted.
             *
             * Hiding here rather than straight from the resize callback: changing the size of the
             * observed element from inside its own callback trips the browser's resize observer
             * loop detection.
             */
            updateState({
                isContentHidden: true,
            });
        }

        /**
         * Hidden content contributes no width, so the wrapper would shrink to its header without
         * the width measured while the content was last laid out. `max-width` keeps that from
         * blocking a later shrink to a narrower container.
         */
        const hiddenContentStyles = state.isContentHidden
            ? css`
                  width: ${state.contentWidth}px;
                  max-width: 100%;
              `
            : css``;

        /**
         * Hidden content is rendered without the resize observer rather than with a callback that
         * ignores it. An attached observer still fires when the content is hidden, and the browser
         * reports that as a resize observer loop.
         */
        const contentWrapperTemplate = state.isContentHidden
            ? html`
                  <div class="content-wrapper hidden-content">
                      <slot></slot>
                  </div>
              `
            : html`
                  <div
                      ${onResize(({contentRect}) => {
                          updateState({
                              contentHeight: contentRect.height,
                              contentWidth: contentRect.width,
                          });
                      })}
                      class="content-wrapper"
                  >
                      <slot></slot>
                  </div>
              `;

        const collapsingStyles = inputs.expanded
            ? css`
                  height: ${state.contentHeight}px;
                  ${hiddenContentStyles}
              `
            : css`
                  height: 0;
                  ${hiddenContentStyles}
              `;

        return html`
            <button
                class="header-wrapper"
                ${listen('click', () => {
                    dispatch(new events.expandChange(!inputs.expanded));
                })}
            >
                <slot name=${slotNames['vira-collapsible-wrapper-header']}>Header</slot>
            </button>

            <div
                class="collapsing-element ${classMap({
                    collapsed: !inputs.expanded,
                })}"
                style=${collapsingStyles}
                disabled="disabled"
                ${onDomCreated((element) => {
                    updateState({
                        collapsingElement: assertWrap.instanceOf(element, HTMLDivElement),
                    });
                })}
                ${listen('transitionend', (event) => {
                    if (
                        event.propertyName === 'height' &&
                        event.target === event.currentTarget &&
                        !inputs.expanded
                    ) {
                        updateState({
                            isContentHidden: true,
                        });
                    }
                })}
            >
                ${contentWrapperTemplate}
            </div>
        `;
    },
});
