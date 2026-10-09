import {check} from '@augment-vir/assert';
import {filterMap, type PartialWithUndefined, randomString} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {nav, type NavController, NavDirection} from 'device-navigation';
import {
    attributes,
    type AttributeValues,
    classMap,
    css,
    defineElementEvent,
    html,
    type HtmlInterpolation,
    ifDefined,
    listen,
    nothing,
    testId,
} from 'element-vir';
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {ChevronUp16Icon} from '../icons/index.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {ViraSize, viraSizeHeights} from '../styles/form-variants.js';
import {
    noNativeFormStyles,
    noUserSelect,
    viraAnimationDurations,
    viraTheme,
} from '../styles/index.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {fuzzyMatch} from '../util/fuzzy-match.js';
import {renderMenuItemEntries} from '../util/menu-helpers.js';
import {type PopoverManager} from '../util/popover-manager.js';
import {
    isViraDropdownOptionGroup,
    type ViraDropdownOption,
    type ViraDropdownOptionGroup,
} from '../util/vira-dropdown-option.js';
import {ViraMenuItem} from './popover/vira-menu-item.element.js';
import {ViraMenu, ViraMenuCornerStyle} from './popover/vira-menu.element.js';
import {ViraPopoverTrigger} from './popover/vira-popover-trigger.element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * A dropdown element that uses popover menus.
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
    } & PartialWithUndefined<{
        /** Text to show if nothing is selected. */
        placeholder: string;
        /**
         * Text shown in the opened popover when `options` has no options. When omitted, opening a
         * dropdown with no options shows no popover at all.
         */
        noOptionsText: string;
        /**
         * If false, this will behave like a single select dropdown, otherwise you can select
         * multiple.
         */
        isMultiSelect: boolean;
        /**
         * Replaces the selection text with a text input. Opening the dropdown focuses it and typing
         * into it filters the options to those whose labels fuzzy match the typed text.
         */
        isSearchable: boolean;
        icon: ViraIconSvg;
        selectionPrefix: string;
        isDisabled: boolean;
        /**
         * When `true`, the currently selected options' labels are rendered as plain text with no
         * trigger or menu.
         */
        isReadonly: boolean;
        hasError: boolean;
        label: string | HtmlInterpolation;
        /** Attributes applied to the trigger element. */
        attributePassthrough: Readonly<AttributeValues>;
        /**
         * Passed to {@link ViraMenu}'s `hoverScrollSpeed` input. How many menu items per second
         * hovering a scroll arrow scrolls through.
         *
         * @default 24
         */
        menuHoverScrollSpeed: number;
    }>
>()({
    tagName: 'vira-dropdown',
    testIds: [
        'leadingIcon',
        'prefixText',
        'searchInput',
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

        ${ViraPopoverTrigger} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .option-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            max-width: 100%;
            vertical-align: bottom;
        }

        .option-icon {
            flex-shrink: 0;
        }

        .option-label-text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .search-input {
            ${noNativeFormStyles};
            flex-grow: 1;
            min-width: 0;
            align-self: stretch;
            text-overflow: ellipsis;
            cursor: inherit;
            user-select: text;
            -webkit-user-select: text;
            outline: none;

            &::placeholder {
                color: inherit;
                opacity: 0.4;
            }
        }

        .open .search-input {
            cursor: text;
        }

        .dropdown-trigger:has(.search-input:focus-visible:not([disabled])) {
            position: relative;

            &::after {
                ${createFocusStyles({
                    elementBorderSize: '1px',
                    noNesting: true,
                })}
            }
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

        .open .trigger-icon {
            transform: rotate(0);
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

        .option-group-label,
        .no-options {
            ${noUserSelect};
            text-align: left;
        }

        .option-group-label {
            color: ${viraTheme.colors['vira-grey-foreground-placeholder'].foreground.value};
            padding: 8px 12px 4px calc(${ViraMenuItem.cssVars['vira-menu-item-icon-gap'].value} * 2);
            font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
        }

        .no-options {
            cursor: default;
            opacity: 0.6;
            /* Aligns with the label text of each ViraMenuItem, past its check icon. */
            padding: 8px 12px 8px
                calc(${ViraMenuItem.cssVars['vira-menu-item-icon-gap'].value} * 3 + 16px);
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
        /** `true` when the popover just opened, `false` when it just closed. */
        openChange: defineElementEvent<boolean>(),
    },
    state() {
        return {
            isOpen: false,
            shouldSelectOnMouseUp: false,
            /**
             * Used to couple the label and trigger together. This is not applied if no label is
             * provided.
             */
            randomId: randomString(32),
            /** The text typed into the search input while the dropdown is open. */
            searchText: '',
            navController: undefined as undefined | NavController,
            popoverManager: undefined as undefined | PopoverManager,
        };
    },
    render({state, inputs, dispatch, events, updateState, testIds, host}) {
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

        const selectionDisplay = shouldUsePlaceholder
            ? inputs.placeholder || ''
            : inputs.isMultiSelect && selectedOptions.length > 1
              ? `${selectedOptions.length} Selected`
              : selectedOptions[0]?.label || '';

        function renderOptionLabel(option: Readonly<ViraDropdownOption>) {
            return option.icon || option.labelTemplate
                ? html`
                      <span class="option-label">
                          ${option.icon
                              ? html`
                                    <${ViraIcon.assign({
                                        icon: option.icon,
                                    })}
                                        class="option-icon"
                                    ></${ViraIcon}>
                                `
                              : nothing}
                          <span class="option-label-text">
                              ${option.labelTemplate ?? option.label}
                          </span>
                      </span>
                  `
                : option.label;
        }

        const selectionTemplate = check.isLengthExactly(selectedOptions, 1)
            ? renderOptionLabel(selectedOptions[0])
            : selectionDisplay;

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

        const filteredOptions = state.searchText
            ? filterMap(
                  inputs.options,
                  (entry) => {
                      return isViraDropdownOptionGroup(entry)
                          ? {
                                ...entry,
                                options: entry.options.filter((option) => {
                                    return fuzzyMatch({
                                        search: state.searchText,
                                        text: option.label,
                                    });
                                }),
                            }
                          : entry;
                  },
                  (entry) => {
                      return isViraDropdownOptionGroup(entry)
                          ? !!entry.options.length
                          : fuzzyMatch({
                                search: state.searchText,
                                text: entry.label,
                            });
                  },
              )
            : inputs.options;
        const filteredFlatOptions = filteredOptions.flatMap((entry) => {
            return isViraDropdownOptionGroup(entry) ? entry.options : [entry];
        });

        function findSearchInput() {
            const searchInput = host.shadowRoot.querySelector('.search-input');

            return searchInput instanceof HTMLInputElement ? searchInput : undefined;
        }

        function clearSearch(searchInput: HTMLInputElement) {
            /** Set directly because the `.value` binding skips values it has already committed. */
            searchInput.value = '';
            updateState({
                searchText: '',
            });
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
                          hideIcon: true,
                      })}
                          class="option-group-label"
                          ${state.navController ? nav(state.navController) : nothing}
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
        const menuItemActions = filteredOptions.flatMap((entry) => {
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
                        content: renderOptionLabel(option),
                        onClick() {
                            selectOption(option);
                        },
                        disabled: option.disabled,
                        selected: selectedOptions.includes(option),
                    };
                }),
                state.navController,
            );
        }

        const isMenuShown =
            state.isOpen && (!!filteredFlatOptions.length || !!inputs.noOptionsText);

        const menuTemplate = html`
            <${ViraMenu.assign({
                cornerStyle: ViraMenuCornerStyle.Round,
                hoverScrollSpeed: inputs.menuHoverScrollSpeed,
            })}
                slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-popover']}
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
                ${filteredFlatOptions.length
                    ? filteredOptions.map((entry) => {
                          return isViraDropdownOptionGroup(entry)
                              ? html`
                                    ${renderGroupLabel(entry)} ${renderOptionEntries(entry.options)}
                                `
                              : renderOptionEntries([entry]);
                      })
                    : html`
                          <div class="no-options">${inputs.noOptionsText}</div>
                      `}
            </${ViraMenu}>
        `;

        const triggerTemplate = html`
            <${ViraPopoverTrigger.assign({
                ...inputs,
                keepOpenAfterInteraction: inputs.isMultiSelect,
                focusOnClose: true,
                popoverOffset: {
                    vertical: -1,
                    right: 24,
                },
            })}
                ${listen(ViraPopoverTrigger.events.init, (event) => {
                    updateState({
                        navController: event.detail.navController,
                        popoverManager: event.detail.popoverManager,
                    });
                })}
                ${listen(ViraPopoverTrigger.events.openChange, (event) => {
                    if (state.isOpen !== event.detail) {
                        dispatch(
                            new events.openChange({
                                detail: event.detail,
                            }),
                        );
                    }
                    updateState({
                        isOpen: event.detail,
                    });

                    const searchInput = findSearchInput();

                    if (!searchInput) {
                        return;
                    } else if (event.detail) {
                        searchInput.focus();
                    } else {
                        clearSearch(searchInput);
                    }
                })}
                ${listen('keydown', (event) => {
                    const searchInput = findSearchInput();
                    const isSearchKey =
                        event.key === 'Backspace' ||
                        (event.key.length === 1 &&
                            event.key !== ' ' &&
                            !event.ctrlKey &&
                            !event.metaKey &&
                            !event.altKey);

                    if (!searchInput || !isSearchKey) {
                        return;
                    }

                    if (!state.isOpen) {
                        clearSearch(searchInput);
                    }
                    /**
                     * Focusing during keydown makes the browser type the pressed key into the
                     * search input, even when the key was pressed on the trigger or a menu item.
                     */
                    searchInput.focus();
                    state.popoverManager?.show();
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
                        open: state.isOpen,
                    })}"
                    slot=${ViraPopoverTrigger.slotNames['vira-popover-trigger-trigger']}
                    id=${ifDefined(inputs.label ? state.randomId : undefined)}
                    aria-label=${ifDefined(
                        (check.isString(inputs.label) && inputs.label) || undefined,
                    )}
                    ${attributes(inputs.attributePassthrough)}
                    ${testId(testIds.trigger)}
                    ${listen('mousedown', () => {
                        if (!state.isOpen) {
                            updateState({
                                shouldSelectOnMouseUp: true,
                            });
                        }
                    })}
                >
                    ${leadingIconTemplate}
                    ${inputs.isSearchable
                        ? html`
                              ${state.isOpen ? nothing : prefixTemplate}
                              <input
                                  class="search-input"
                                  ${testId(testIds.searchInput)}
                                  tabindex="-1"
                                  autocomplete="off"
                                  spellcheck="false"
                                  aria-label=${ifDefined(
                                      (check.isString(inputs.label) && inputs.label) || undefined,
                                  )}
                                  ?disabled=${!!inputs.isDisabled}
                                  title=${ifDefined(
                                      shouldUsePlaceholder || state.isOpen
                                          ? undefined
                                          : selectionDisplay,
                                  )}
                                  placeholder=${state.isOpen && !shouldUsePlaceholder
                                      ? selectionDisplay
                                      : inputs.placeholder || ''}
                                  .value=${state.isOpen
                                      ? state.searchText
                                      : shouldUsePlaceholder
                                        ? ''
                                        : selectionDisplay}
                                  ${listen('mousedown', (event) => {
                                      /** Keeps the popover open when clicking into the input. */
                                      if (state.isOpen) {
                                          event.stopPropagation();
                                      }
                                  })}
                                  ${listen('input', (event) => {
                                      updateState({
                                          searchText: extractEventTarget(event, HTMLInputElement)
                                              .value,
                                      });
                                      state.popoverManager?.show();
                                  })}
                                  ${listen('keydown', (event) => {
                                      if (!state.isOpen) {
                                          return;
                                      } else if (
                                          event.key === 'ArrowDown' ||
                                          event.key === 'ArrowUp'
                                      ) {
                                          event.preventDefault();
                                          state.navController?.navigate({
                                              direction:
                                                  event.key === 'ArrowDown'
                                                      ? NavDirection.Down
                                                      : NavDirection.Up,
                                              allowWrapping: false,
                                          });
                                      } else if (event.key === 'Tab' && !event.shiftKey) {
                                          /**
                                           * Without this, browsers move focus from this input past
                                           * the menu items (sometimes closing the menu).
                                           */
                                          const firstMenuItem = Array.from(
                                              host.shadowRoot.querySelectorAll<HTMLElement>(
                                                  ViraMenuItem.tagName,
                                              ),
                                          ).find((menuItem) => menuItem.tabIndex >= 0);

                                          if (firstMenuItem) {
                                              event.preventDefault();
                                              firstMenuItem.focus();
                                          }
                                      } else if (event.key === 'Enter') {
                                          const firstOption = filteredFlatOptions.find(
                                              (option) => !option.disabled,
                                          );

                                          if (!firstOption) {
                                              return;
                                          }

                                          event.preventDefault();
                                          selectOption(firstOption);

                                          if (inputs.isMultiSelect) {
                                              clearSearch(
                                                  extractEventTarget(event, HTMLInputElement),
                                              );
                                          } else {
                                              state.popoverManager?.hide();
                                          }
                                      }
                                  })}
                              />
                          `
                        : html`
                              <span
                                  class="selection-display ${classMap({
                                      'using-placeholder': shouldUsePlaceholder,
                                  })}"
                                  title=${ifDefined(
                                      shouldUsePlaceholder ? undefined : selectionDisplay,
                                  )}
                              >
                                  ${prefixTemplate} ${selectionTemplate}
                              </span>
                          `}

                    <span class="trigger-icon-wrapper">
                        <${ViraIcon.assign({
                            icon: ChevronUp16Icon,
                        })}
                            class="trigger-icon"
                        ></${ViraIcon}>
                    </span>
                </div>
                ${isMenuShown ? menuTemplate : nothing}
            </${ViraPopoverTrigger}>
        `;

        const contentTemplate = inputs.isReadonly
            ? html`
                  <span class="readonly-value">${selectionTemplate}</span>
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
