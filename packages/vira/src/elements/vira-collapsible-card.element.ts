import {type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElementEvent, html, listen, nothing, testId} from 'element-vir';
import {ChevronUp24Icon} from '../icons/index.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraCollapsibleWrapper} from './vira-collapsible-wrapper.element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * A combination ViraCard and ViraCollapsibleWrapper with a collapse caret.
 *
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-checkbox
 */
export const ViraCollapsibleCard = defineViraElement<
    PartialWithUndefined<{
        /**
         * When set to `true`, the card styles are diminished so you can still use this element in
         * more flexible ways.
         *
         * @default false
         */
        rawCollapsible: boolean;
        startExpanded: boolean;
        /**
         * If set to true, the card will always be expanded, expansion cannot be toggled, and the
         * expand toggle icon is hidden.
         *
         * @default false
         */
        blockExpansion: boolean;
        /** When true, forces the content to expand when printing regardless of collapsed state. */
        expandOnPrint: boolean;
        /**
         * When set to `true`, the header is hidden.
         *
         * @default false
         */
        hideHeader: boolean;
    }>
>()({
    tagName: 'vira-collapsible-card',
    testIds: ['openCaret'],
    events: {
        expandToggle: defineElementEvent<boolean>(),
    },
    state({inputs}) {
        return {
            isExpanded: !!inputs.startExpanded,
        };
    },
    hostClasses: {
        'vira-collapsible-card-expanded': ({state}) => state.isExpanded,
        'vira-collapsible-card-expansion-blocked': ({inputs}) => !!inputs.blockExpansion,
        'vira-collapsible-card-card-styles': ({inputs}) => !inputs.rawCollapsible,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-flex;
        }

        ${hostClasses['vira-collapsible-card-expanded'].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${ViraCollapsibleWrapper} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${hostClasses['vira-collapsible-card-card-styles'].selector} {
            & ${ViraCollapsibleWrapper} {
                border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
                border-radius: ${viraFormCssVars['vira-form-wrapper-radius'].value};
            }

            & .card-header {
                padding: 8px 16px;
            }

            & .card-content {
                padding: 8px 16px 8px 16px;
            }
        }

        ${hostClasses['vira-collapsible-card-expansion-blocked'].selector} {
            & .header-wrapper {
                cursor: default;
            }
        }

        .card-header {
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            & .header-filler {
                flex-grow: 1;
            }
        }

        .card-content {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            overflow-x: auto;
            overflow-y: hidden;
        }

        @media print {
            ${ViraCollapsibleWrapper} {
                border: none !important;
            }

            .card-header {
                padding: 8px 0 !important;
            }

            .card-content {
                overflow: visible !important;
                padding: 8px 0 16px 0 !important;
            }

            .open-caret {
                display: none;
            }
        }
    `,
    slotNames: [
        'header',
    ],
    render({inputs, slotNames, state, updateState, testIds, dispatch, events}) {
        if (inputs.blockExpansion) {
            updateState({
                isExpanded: true,
            });
        }

        const wrapperContentTemplate =
            state.isExpanded || inputs.expandOnPrint
                ? html`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `
                : nothing;
        const wrapperHeaderTemplate = inputs.hideHeader
            ? nothing
            : html`
                  <div class="card-header">
                      <slot name=${slotNames.header}><div class="header-filler"></div></slot>

                      ${inputs.blockExpansion
                          ? nothing
                          : html`
                                <${ViraIcon.assign({
                                    icon: ChevronUp24Icon,
                                    fitContainer: true,
                                })}
                                    ${testId(testIds.openCaret)}
                                    class="open-caret"
                                ></${ViraIcon}>
                            `}
                  </div>
              `;

        return html`
            <${ViraCollapsibleWrapper.assign({
                expanded: state.isExpanded,
                expandOnPrint: inputs.expandOnPrint ?? false,
            })}
                ${listen(ViraCollapsibleWrapper.events.expandChange, (event) => {
                    event.stopImmediatePropagation();
                    if (inputs.blockExpansion) {
                        return;
                    }

                    updateState({
                        isExpanded: event.detail,
                    });
                    dispatch(new events.expandToggle(event.detail));
                })}
            >
                <div class="header-wrapper" slot=${ViraCollapsibleWrapper.slotNames.header}>
                    ${wrapperHeaderTemplate}
                </div>
                ${wrapperContentTemplate}
            </${ViraCollapsibleWrapper}>
        `;
    },
});
