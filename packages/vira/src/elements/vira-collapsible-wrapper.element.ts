import {classMap, css, defineElementEvent, html, listen, onResize} from 'element-vir';
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
        };
    },
    hostClasses: {
        'vira-collapsible-wrapper-expand-on-print': ({inputs}) => !!inputs.expandOnPrint,
    },
    slotNames: ['header'],
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;
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

        @media print {
            :host(.${hostClasses['vira-collapsible-wrapper-expand-on-print'].name})
                .collapsing-element {
                height: auto !important;
                overflow: visible !important;
                transition: none !important;
            }
        }
    `,
    events: {
        expandChange: defineElementEvent<boolean>(),
    },
    render({state, slotNames, updateState, dispatch, events, inputs}) {
        const collapsingStyles = inputs.expanded
            ? css`
                  height: ${state.contentHeight}px;
              `
            : css`
                  height: 0;
              `;

        return html`
            <button
                class="header-wrapper"
                ${listen('click', () => {
                    dispatch(new events.expandChange(!inputs.expanded));
                })}
            >
                <slot name=${slotNames.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${classMap({
                    collapsed: !inputs.expanded,
                })}"
                style=${collapsingStyles}
                disabled="disabled"
            >
                <div
                    ${onResize(({contentRect}) => {
                        updateState({
                            contentHeight: contentRect.height,
                        });
                    })}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `;
    },
});
