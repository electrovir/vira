import {assertWrap} from '@augment-vir/assert';
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
import {listenTo} from 'typed-event-target';
import {ChevronUp16Icon, type ViraIconSvg} from '../icons/index.js';
import {viraDisabledStyles} from '../styles/disabled.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {viraAnimationDurations} from '../styles/index.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {
    isViraSelectOptionGroup,
    type ViraSelectOption,
    type ViraSelectOptionGroup,
} from '../util/vira-select-option.js';
import {ViraDropdown} from './vira-dropdown.element.js';
import {ViraIcon} from './vira-icon.element.js';

function renderSelectOption(option: Readonly<ViraSelectOption>, value: string | undefined) {
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
}

/**
 * Similar to {@link ViraDropdown} but is, instead, simply a wrapper for `<select>` and nothing more.
 *
 * @category Dropdown
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-select
 */
export const ViraSelect = defineViraElement<
    {
        options: ReadonlyArray<Readonly<ViraSelectOption> | Readonly<ViraSelectOptionGroup>>;
        /** The currently selected option value. */
        value: undefined | string;
    } & PartialWithUndefined<{
        icon: Readonly<ViraIconSvg>;
        placeholder: string;
        label: string;
        /** If set to `true`, only minimal styles are applied. */
        rawSelect: boolean;
        disabled: boolean;
        /**
         * When `true`, the currently selected option's label is rendered as plain text with no
         * wrapper, border, or focus styles.
         */
        isReadonly: boolean;
        attributePassthrough: Readonly<
            PartialWithUndefined<{
                label: AttributeValues;
                select: AttributeValues;
                option: AttributeValues;
            }>
        >;
        hasError: boolean;
    }>
>()({
    tagName: 'vira-select',
    state() {
        return {
            /**
             * Used to couple the label and select together. This is not applied if no label is
             * provided.
             */
            randomId: randomString(32),
            /** Removes event listeners registered during init. */
            cleanupListeners: undefined as undefined | (() => void),
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
        'vira-select-not-raw': ({inputs}) => !inputs.rawSelect,
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
            cursor: pointer;

            & select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                color: inherit;
                font: inherit;
                outline: none;
                width: 100%;
                border: none;
                background: none;
                border-radius: inherit;
                cursor: pointer;
                /* Prevent the left pixel of text getting cut off. */
                padding-left: 0.5px;
                padding-right: 28px;
                overflow: hidden;
                text-overflow: ellipsis;

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
        }

        .trigger-icon {
            width: 24px;
            aspect-ratio: 1;
        }

        ${hostClasses['vira-select-not-raw'].selector} {
            .select-wrapper {
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
                    padding: ${cssVars['vira-select-padding-vertical'].value} 31px
                        ${cssVars['vira-select-padding-vertical'].value}
                        ${cssVars['vira-select-padding-horizontal'].value};

                    &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                        ${createFocusStyles({
                            elementBorderSize: '1px',
                            noNesting: true,
                        })}
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

        .readonly-value {
            overflow-wrap: anywhere;
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

        :host(.${hostClasses['vira-select-not-raw'].name}.${hostClasses['vira-select-error'].name})
            .wrapper-border {
            border-color: ${viraFormCssVars['vira-form-error-color'].value};
        }
    `,
    init({state, updateState, host}) {
        state.cleanupListeners?.();

        function getSelectElement() {
            return assertWrap.instanceOf(
                host.shadowRoot.querySelector('select'),
                HTMLSelectElement,
            );
        }

        const listenerRemovers = [
            listenTo(host, 'mousedown', (event) => {
                const selectElement = getSelectElement();

                if (event.composedPath().includes(selectElement)) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                /** `showPicker` is not in Safari. */
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                if (selectElement.showPicker) {
                    selectElement.showPicker();
                }
            }),
            listenTo(host, 'click', (event) => {
                const selectElement = getSelectElement();

                if (event.composedPath().includes(selectElement)) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                /** `showPicker` is not in Safari. */
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                if (selectElement.showPicker) {
                    selectElement.showPicker();
                }
            }),
        ];

        updateState({
            cleanupListeners: () => {
                listenerRemovers.forEach((remover) => remover());
            },
        });
    },
    cleanup({state, updateState}) {
        state.cleanupListeners?.();
        updateState({
            cleanupListeners: undefined,
        });
    },
    render({inputs, state, dispatch, events}) {
        const value = inputs.value || undefined;

        if (inputs.isReadonly) {
            const selectedOption = inputs.options
                .flatMap((entry) => (isViraSelectOptionGroup(entry) ? [...entry.options] : [entry]))
                .find((option) => option.value === value);
            const readonlyValueTemplate = html`
                <span class="readonly-value">
                    ${selectedOption?.label || inputs.placeholder || ''}
                </span>
            `;

            if (inputs.label) {
                return html`
                    <label ${attributes(inputs.attributePassthrough?.label)}>
                        <span class="select-label">${inputs.label}</span>
                        ${readonlyValueTemplate}
                    </label>
                `;
            } else {
                return readonlyValueTemplate;
            }
        }

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
                            selectElement.selectedIndex = inputs.options
                                .flatMap((entry) => {
                                    return isViraSelectOptionGroup(entry)
                                        ? [...entry.options]
                                        : [entry];
                                })
                                .findIndex((option) => option.value === value);
                        }

                        dispatch(new events.valueChange(newValue));
                    })}
                    ${attributes(inputs.attributePassthrough?.select)}
                >
                    ${placeholderOptionTemplate}
                    ${inputs.options.map((entry) => {
                        if (isViraSelectOptionGroup(entry)) {
                            return html`
                                <optgroup label=${entry.groupName}>
                                    ${entry.options.map((option) => {
                                        return renderSelectOption(option, value);
                                    })}
                                </optgroup>
                            `;
                        }
                        return renderSelectOption(entry, value);
                    })}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${ViraIcon.assign({
                    icon: inputs.icon,
                })}
                    class="input-icon"
                ></${ViraIcon}>
                <${ViraIcon.assign({
                    icon: ChevronUp16Icon,
                })}
                    class="trigger-icon"
                ></${ViraIcon}>
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
