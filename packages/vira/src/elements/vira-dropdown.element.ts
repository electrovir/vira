import {check} from '@augment-vir/assert';
import {filterMap, type PartialWithUndefined, randomString} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    attributes,
    type AttributeValues,
    classMap,
    css,
    defineElementEvent,
    html,
    type HtmlInterpolation,
    type HTMLTemplateResult,
    ifDefined,
    listen,
    nothing,
    testId,
} from 'element-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {ChevronUp16Icon} from '../icons/index.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {ViraSize, viraSizeHeights} from '../styles/form-variants.js';
import {noUserSelect, viraAnimationDurations} from '../styles/index.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {renderMenuItemEntries} from '../util/pop-up-helpers.js';
import {type ShowPopUpResult} from '../util/pop-up-manager.js';
import {
    isViraDropdownOptionGroup,
    type ViraDropdownOption,
    type ViraDropdownOptionGroup,
} from '../util/vira-dropdown-option.js';
import {ViraMenuItem} from './pop-up/vira-menu-item.element.js';
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
        options: ReadonlyArray<Readonly<ViraDropdownOption> | Readonly<ViraDropdownOptionGroup>>;
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
            /**
             * When `true`, the currently selected options' labels are rendered as plain text with
             * no trigger or menu.
             */
            isReadonly: boolean;
            hasError: boolean;
            label: string | HtmlInterpolation;
            /** Attributes applied to the trigger element. */
            attributePassthrough: Readonly<AttributeValues>;
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
            width: 224px;
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
            min-height: ${viraSizeHeights[ViraSize.Medium]}px;
            padding: 0 3px 0 10px;
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        .dropdown-wrapper {
            display: flex;
            width: 100%;
        }

        .has-error .dropdown-trigger {
            border-color: ${viraFormCssVars['vira-form-error-color'].value};
        }

        .option-group-label {
            ${noUserSelect};
            /* Aligns with the label text of each ViraMenuItem, past its check icon. */
            padding: 8px 12px 4px
                calc(${ViraMenuItem.cssVars['vira-menu-item-icon-gap'].value} * 3 + 16px);
            opacity: 0.6;
            text-align: left;
        }

        .option-group-label {
            font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
        }

        ${ViraMenuItem}.option-group-label {
            padding: 0 0 0 calc(${ViraMenuItem.cssVars['vira-menu-item-icon-gap'].value} * 2);
            ${ViraMenuItem.cssVars['vira-menu-item-padding'].name}: 8px 12px 4px 0;
        }

        .readonly-value {
            overflow-wrap: anywhere;
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
        /** Emits all currently selected values. */
        selectedValuesChange: defineElementEvent<string[]>(),
        openChange: defineElementEvent<ShowPopUpResult | undefined>(),
    },
    state() {
        return {
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
            shouldSelectOnMouseUp: false,
            /**
             * Used to couple the label and trigger together. This is not applied if no label is
             * provided.
             */
            randomId: randomString(32),
        };
    },
    render({state, inputs, dispatch, events, updateState, testIds}) {
        const flatOptions = inputs.options.flatMap((entry) => {
            return isViraDropdownOptionGroup(entry) ? entry.options : [entry];
        });
        const selectedOptions = filterMap(
            inputs.selected,
            (selectedValue) => flatOptions.find((option) => option.value === selectedValue),
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

        function selectOption(option: Readonly<ViraDropdownOption>) {
            const newSelectedValues = inputs.isMultiSelect
                ? selectedOptions.includes(option)
                    ? filterMap(
                          selectedOptions,
                          (selectedOption) => selectedOption.value,
                          (value, selectedOption) => selectedOption !== option,
                      )
                    : [
                          ...selectedOptions.map((selectedOption) => selectedOption.value),
                          option.value,
                      ]
                : [option.value];
            dispatch(
                new events.selectedValuesChange({
                    detail: newSelectedValues,
                }),
            );
        }

        function toggleGroup(group: Readonly<ViraDropdownOptionGroup>) {
            const enabledGroupOptions = group.options.filter((option) => !option.disabled);
            const isGroupSelected = enabledGroupOptions.every((option) => {
                return selectedOptions.includes(option);
            });

            dispatch(
                new events.selectedValuesChange({
                    detail: (isGroupSelected
                        ? selectedOptions.filter((option) => !enabledGroupOptions.includes(option))
                        : [
                              ...selectedOptions,
                              ...enabledGroupOptions.filter((option) => {
                                  return !selectedOptions.includes(option);
                              }),
                          ]
                    ).map((option) => option.value),
                }),
            );
        }

        function renderGroupLabel(group: Readonly<ViraDropdownOptionGroup>) {
            return inputs.isMultiSelect
                ? html`
                      <${ViraMenuItem.assign({
                          disablePointerStyles: true,
                      })}
                          class="option-group-label"
                          ${listen('click', () => {
                              toggleGroup(group);
                          })}
                      >
                          ${group.groupName}
                      </${ViraMenuItem}>
                  `
                : html`
                      <div class="option-group-label">${group.groupName}</div>
                  `;
        }

        /** Drag-select actions in the same order as the rendered menu items. */
        const menuItemActions = inputs.options.flatMap((entry) => {
            const options = isViraDropdownOptionGroup(entry) ? entry.options : [entry];
            const optionActions = options.map((option) => {
                return option.disabled
                    ? undefined
                    : () => {
                          selectOption(option);
                      };
            });

            return isViraDropdownOptionGroup(entry) && inputs.isMultiSelect
                ? [
                      () => {
                          toggleGroup(entry);
                      },
                      ...optionActions,
                  ]
                : optionActions;
        });

        function renderOptionEntries(options: ReadonlyArray<Readonly<ViraDropdownOption>>) {
            return renderMenuItemEntries(
                options.map((option) => {
                    return {
                        content: option.label,
                        onClick() {
                            selectOption(option);
                        },
                        disabled: option.disabled,
                        selected: selectedOptions.includes(option),
                    };
                }),
            );
        }

        const menuTemplate = html`
            <${ViraMenu.assign({
                direction: state.showPopUpResult?.popDown
                    ? ViraMenuPopUpDirection.Downwards
                    : ViraMenuPopUpDirection.Upwards,
            })}
                slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-pop-up']}
                ${listen('mouseup', (event) => {
                    if (state.shouldSelectOnMouseUp) {
                        const menuItem = event
                            .composedPath()
                            .find(
                                (eventTarget): eventTarget is InstanceType<typeof ViraMenuItem> => {
                                    return eventTarget instanceof ViraMenuItem;
                                },
                            );
                        const menuItemAction = menuItem
                            ? menuItemActions[
                                  Array.from(
                                      extractEventTarget(event, ViraMenu).querySelectorAll(
                                          ViraMenuItem.tagName,
                                      ),
                                  ).indexOf(menuItem)
                              ]
                            : undefined;

                        menuItemAction?.();
                    }
                })}
            >
                ${inputs.options.map((entry) => {
                    return isViraDropdownOptionGroup(entry)
                        ? html`
                              ${renderGroupLabel(entry)} ${renderOptionEntries(entry.options)}
                          `
                        : renderOptionEntries([entry]);
                })}
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
                        dispatch(
                            new events.openChange({
                                detail: event.detail,
                            }),
                        );
                    }
                    updateState({
                        showPopUpResult: event.detail,
                    });
                })}
                ${listen('mouseup', () => {
                    if (state.shouldSelectOnMouseUp) {
                        updateState({
                            shouldSelectOnMouseUp: false,
                        });
                    }
                })}
            >
                <div
                    class="dropdown-trigger ${classMap({
                        open: !!state.showPopUpResult,
                        'open-upwards': !state.showPopUpResult?.popDown,
                    })}"
                    slot=${ViraPopUpTrigger.slotNames['vira-pop-up-trigger-trigger']}
                    id=${ifDefined(inputs.label ? state.randomId : undefined)}
                    aria-label=${ifDefined(
                        (check.isString(inputs.label) && inputs.label) || undefined,
                    )}
                    ${attributes(inputs.attributePassthrough)}
                    ${testId(testIds.trigger)}
                    ${listen('mousedown', () => {
                        if (!state.showPopUpResult) {
                            updateState({
                                shouldSelectOnMouseUp: true,
                            });
                        }
                    })}
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

        const contentTemplate = inputs.isReadonly
            ? html`
                  <span class="readonly-value">${selectionDisplay}</span>
              `
            : triggerTemplate;

        if (inputs.label) {
            return html`
                <label
                    for=${ifDefined(inputs.isReadonly ? undefined : state.randomId)}
                    class=${classMap({
                        'has-error': !!inputs.hasError,
                    })}
                >
                    <span class="dropdown-label">${inputs.label}</span>
                    ${contentTemplate}
                </label>
            `;
        } else {
            return html`
                <span
                    class="dropdown-wrapper ${classMap({
                        'has-error': !!inputs.hasError,
                    })}"
                >
                    ${contentTemplate}
                </span>
            `;
        }
    },
});
