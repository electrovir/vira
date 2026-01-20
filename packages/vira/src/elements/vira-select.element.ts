import {randomString, type PartialWithUndefined} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    attributes,
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    nothing,
    type AttributeValues,
} from 'element-vir';
import {ChevronUp24Icon, type ViraIconSvg} from '../icons/index.js';
import {viraDisabledStyles} from '../styles/disabled.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {viraAnimationDurations} from '../styles/index.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {defineViraElement} from './define-vira-element.js';
import {ViraDropdown} from './vira-dropdown.element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * Options for {@link ViraSelect}.
 *
 * @category Dropdown
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-select
 */
export type ViraSelectOption = {
    /** A value or id, used to keep track of which option is selected. */
    value: string;
    label: string;
} & PartialWithUndefined<{
    disabled: boolean;
}>;

/**
 * Similar to {@link ViraDropdown} but is, instead, simply a wrapper for `<select>` and nothing more.
 *
 * @category Dropdown
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-select
 */
export const ViraSelect = defineViraElement<
    Readonly<
        {
            options: ReadonlyArray<Readonly<ViraSelectOption>>;
            /** The currently selected option value. */
            value: undefined | string;
        } & PartialWithUndefined<{
            icon: Readonly<ViraIconSvg>;
            placeholder: string;
            label: string;
            disabled: boolean;
            attributePassthrough: Readonly<
                PartialWithUndefined<{
                    label: AttributeValues;
                    select: AttributeValues;
                    option: AttributeValues;
                }>
            >;
            hasError: boolean;
        }>
    >
>()({
    tagName: 'vira-select',
    state() {
        return {
            /**
             * Used to couple the label and select together. This is not applied if no label is
             * provided.
             */
            randomId: randomString(32),
        };
    },
    events: {
        valueChange: defineElementEvent<string>(),
    },
    cssVars: {
        'vira-select-padding-horizontal': '10px',
        'vira-select-padding-vertical': '6px',
        'vira-select-icon-padding': '44px',
    },
    hostClasses: {
        'vira-select-disabled': ({inputs}) => !!inputs.disabled,
        'vira-select-error': ({inputs}) => !!inputs.hasError,
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        .select-wrapper {
            ${noNativeFormStyles};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            /*
                Border colors are actually applied via the .wrapper-border class. However, we must
                apply a border here still so that it takes up space.
            */
            border: 1px solid transparent;
            cursor: pointer;

            & select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                font: inherit;
                outline: none;
                width: 100%;
                border: none;
                background: none;
                border-radius: inherit;
                padding: ${cssVars['vira-select-padding-vertical'].value} 31px
                    ${cssVars['vira-select-padding-vertical'].value}
                    ${cssVars['vira-select-padding-horizontal'].value};
                cursor: pointer;
                overflow: hidden;
                text-overflow: ellipsis;

                &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                    ${createFocusStyles({
                        elementBorderSize: 0,
                        noNesting: true,
                    })}
                }

                &.placeholder {
                    color: ${viraFormCssVars['vira-form-placeholder-color'].value};
                }

                &.with-icon {
                    padding-left: ${cssVars['vira-select-icon-padding'].value};
                }
            }

            & ${ViraIcon} {
                position: absolute;
                pointer-events: none;

                &.trigger-icon {
                    transform: rotate(180deg);
                    right: 3px;
                }

                &.input-icon {
                    left: 10px;
                }
            }

            & .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${viraFormCssVars['vira-form-radius'].value};
                z-index: 0;
                pointer-events: none;
            }

            & .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
                transition: border
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value};
            }
        }

        label {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2px;
            width: 100%;
            max-width: 100%;

            & .select-label {
                font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${hostClasses['vira-select-disabled'].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${viraDisabledStyles}
            }
            ${ViraIcon} {
                ${viraDisabledStyles}
            }
            & * {
                cursor: not-allowed;
            }
        }

        ${hostClasses['vira-select-error'].selector} {
            & .wrapper-border {
                border-color: ${viraFormCssVars['vira-form-error-color'].value};
            }
        }
    `,
    render({inputs, state, dispatch, events}) {
        const value = inputs.value || undefined;

        const placeholderOptionTemplate =
            inputs.placeholder || value == undefined
                ? html`
                      <option value="" disabled ?selected=${value == undefined}>
                          ${inputs.placeholder}
                      </option>
                  `
                : nothing;

        const selectTemplate = html`
            <span class="select-wrapper">
                <select
                    .value=${ifDefined(value)}
                    class=${classMap({
                        placeholder: !value && !!inputs.placeholder,
                        'with-icon': !!inputs.icon,
                    })}
                    tabindex=${inputs.disabled ? -1 : 0}
                    id=${ifDefined(inputs.label ? state.randomId : undefined)}
                    aria-label=${ifDefined(inputs.label || undefined)}
                    aria-disabled=${ifDefined(inputs.disabled ? 'true' : undefined)}
                    ${listen('input', (event) => {
                        const selectElement = extractEventTarget(event, HTMLSelectElement);
                        const newValue = selectElement.value;

                        if (selectElement.value !== value) {
                            selectElement.selectedIndex = inputs.options.findIndex(
                                (option) => option.value === value,
                            );
                        }

                        dispatch(new events.valueChange(newValue));
                    })}
                    ${attributes(inputs.attributePassthrough?.select)}
                >
                    ${placeholderOptionTemplate}
                    ${inputs.options.map((option) => {
                        return html`
                            <option
                                ?selected=${option.value === value}
                                aria-label=${option.label}
                                ?disabled=${option.disabled}
                                value=${option.value}
                            >
                                ${option.label}
                            </option>
                        `;
                    })}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${ViraIcon.assign({icon: inputs.icon})} class="input-icon"></${ViraIcon}>
                <${ViraIcon.assign({icon: ChevronUp24Icon})} class="trigger-icon"></${ViraIcon}>
            </span>
        `;

        if (inputs.label) {
            return html`
                <label for=${state.randomId} ${attributes(inputs.attributePassthrough?.label)}>
                    <span class="select-label">${inputs.label}</span>
                    ${selectTemplate}
                </label>
            `;
        } else {
            return selectTemplate;
        }
    },
});
