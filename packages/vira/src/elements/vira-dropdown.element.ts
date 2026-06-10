import {check} from '@augment-vir/assert';
import {filterMap, type PartialWithUndefined, randomString} from '@augment-vir/common';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    type HTMLTemplateResult,
    ifDefined,
    listen,
    nothing,
    testId,
} from 'element-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {ChevronUp16Icon} from '../icons/index.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {noUserSelect, viraAnimationDurations} from '../styles/index.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {renderMenuItemEntries} from '../util/pop-up-helpers.js';
import {type ShowPopUpResult} from '../util/pop-up-manager.js';
import {type ViraSelectOption} from '../util/vira-select-option.js';
import {ViraMenu, ViraMenuPopUpDirection} from './pop-up/vira-menu.element.js';
import {
    HorizontalAnchor,
    type PopUpTriggerPosition,
    ViraPopUpTrigger,
} from './pop-up/vira-pop-up-trigger.element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * A dropdown element that uses pop-up menus.
 *
 * @category Dropdown
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/dropdown/vira-dropdown
 */
export const ViraDropdown = defineViraElement<
    {
        options: ReadonlyArray<Readonly<ViraSelectOption>>;
        /** The selected id from the given options. */
        selected: ReadonlyArray<PropertyKey>;
    } & PartialWithUndefined<
        {
            /** Text to show if nothing is selected. */
            placeholder: string;
            /**
             * If false, this will behave like a single select dropdown, otherwise you can select
             * multiple.
             */
            isMultiSelect: boolean;
            icon: ViraIconSvg;
            selectionPrefix: string;
            isDisabled: boolean;
            label: string;
            /** For debugging purposes only. Very bad for actual production code use. */
            z_debug_forceOpenState: boolean;
        } & PopUpTriggerPosition
    >
>()({
    tagName: 'vira-dropdown',
    testIds: [
        'leadingIcon',
        'prefixText',
        'trigger',
    ],
    styles: css`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${ViraPopUpTrigger} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            width: 24px;
            aspect-ratio: 1;
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${viraAnimationDurations['vira-interaction-animation-duration'].value} linear;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .open {
            & .trigger-icon {
                transform: rotate(0);
            }

            &:not(.open-upwards).dropdown-trigger {
                border-bottom-left-radius: 0;
            }

            &.open-upwards.dropdown-trigger {
                border-top-left-radius: 0;
            }
        }

        .dropdown-trigger {
            ${noUserSelect};
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }

        label {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2px;
            width: 100%;
            max-width: 100%;

            & .dropdown-label {
                font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }
    `,
    events: {
        selectedChange: defineElementEvent<string[]>(),
        openChange: defineElementEvent<ShowPopUpResult | undefined>(),
    },
    state() {
        return {
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
            /**
             * Used to couple the label and trigger together. This is not applied if no label is
             * provided.
             */
            randomId: randomString(32),
        };
    },
    render({state, inputs, dispatch, events, updateState, testIds}) {
        const selectedOptions = filterMap(
            inputs.selected,
            (selectedValue) => inputs.options.find((option) => option.value === selectedValue),
            check.isTruthy,
        );

        const leadingIconTemplate = inputs.icon
            ? html`
                  <${ViraIcon.assign({
                      icon: inputs.icon,
                  })}
                      ${testId(testIds.leadingIcon)}
                  ></${ViraIcon}>
              `
            : nothing;

        const shouldUsePlaceholder: boolean = !selectedOptions.length;

        const prefixTemplate =
            inputs.selectionPrefix && !shouldUsePlaceholder
                ? html`
                      <span class="selected-label-prefix" ${testId(testIds.prefixText)}>
                          ${inputs.selectionPrefix}
                      </span>
                  `
                : nothing;

        const selectionDisplay: string | HTMLTemplateResult = shouldUsePlaceholder
            ? inputs.placeholder || ''
            : inputs.isMultiSelect && selectedOptions.length > 1
              ? `${selectedOptions.length} Selected`
              : selectedOptions[0]?.label || '';

        const menuTemplate = html`
            <${ViraMenu.assign({
                direction: state.showPopUpResult?.popDown
                    ? ViraMenuPopUpDirection.Downwards
                    : ViraMenuPopUpDirection.Upwards,
            })}
                slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
            >
                ${renderMenuItemEntries(
                    inputs.options.map((option) => {
                        return {
                            content: option.label,
                            onClick() {
                                dispatch(new events.selectedChange([option.value]));
                            },
                            disabled: option.disabled,
                            selected: selectedOptions.includes(option),
                        };
                    }),
                )}
            </${ViraMenu}>
        `;

        const triggerTemplate = html`
            <${ViraPopUpTrigger.assign({
                ...inputs,
                keepOpenAfterInteraction: inputs.isMultiSelect,
                focusOnClose: true,
                popUpOffset: {
                    vertical: -1,
                    right: 24,
                },
                horizontalAnchor: inputs.horizontalAnchor || HorizontalAnchor.Both,
            })}
                ${listen(ViraPopUpTrigger.events.openChange, (event) => {
                    if (!!state.showPopUpResult !== !!event.detail) {
                        dispatch(new events.openChange(event.detail));
                    }
                    updateState({
                        showPopUpResult: event.detail,
                    });
                })}
            >
                <div
                    class="dropdown-trigger ${classMap({
                        open: !!state.showPopUpResult,
                        'open-upwards': !state.showPopUpResult?.popDown,
                    })}"
                    slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}
                    id=${ifDefined(inputs.label ? state.randomId : undefined)}
                    aria-label=${ifDefined(inputs.label || undefined)}
                    ${testId(testIds.trigger)}
                >
                    ${leadingIconTemplate}
                    <span
                        class="selection-display ${classMap({
                            'using-placeholder': shouldUsePlaceholder,
                        })}"
                        title=${ifDefined(shouldUsePlaceholder ? undefined : selectionDisplay)}
                    >
                        ${prefixTemplate} ${selectionDisplay}
                    </span>

                    <span class="trigger-icon-wrapper">
                        <${ViraIcon.assign({
                            icon: ChevronUp16Icon,
                        })}
                            class="trigger-icon"
                        ></${ViraIcon}>
                    </span>
                </div>
                ${state.showPopUpResult ? menuTemplate : nothing}
            </${ViraPopUpTrigger}>
        `;

        if (inputs.label) {
            return html`
                <label for=${state.randomId}>
                    <span class="dropdown-label">${inputs.label}</span>
                    ${triggerTemplate}
                </label>
            `;
        } else {
            return triggerTemplate;
        }
    },
});
