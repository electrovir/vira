import {type PartialWithUndefined} from '@augment-vir/common';
import {
    attributes,
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    listenToActivate,
    nothing,
    type AttributeValues,
    type CSSResult,
} from 'element-vir';
import {Check24Icon, viraIconCssVars} from '../icons/index.js';
import {viraBorders} from '../styles/border.js';
import {viraDisabledStyles} from '../styles/disabled.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {defineViraElement} from './define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * All inner elements supported by {@link ViraCheckbox}.
 *
 * @category Internals
 */
export type ViraCheckboxInnerElements =
    | 'label'
    | 'custom-checkbox'
    | 'text'
    | typeof ViraIcon.tagName;

/**
 * Inputs for {@link ViraCheckbox}.
 *
 * @category Internal
 */
export type ViraCheckboxInputs = PartialWithUndefined<{
    stylePassthrough: Record<ViraCheckboxInnerElements, CSSResult>;
    attributePassthrough: Record<ViraCheckboxInnerElements, AttributeValues>;
    disabled: boolean;
    label: string;
    hasError: boolean;
    horizontal: boolean;
}> & {
    value: boolean;
};

/**
 * A custom checkbox.
 *
 * @category Input
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-checkbox
 */
export const ViraCheckbox = defineViraElement<Readonly<ViraCheckboxInputs>>()({
    tagName: 'vira-checkbox',
    hostClasses: {
        'vira-checkbox-horizontal': ({inputs}) => !!inputs.horizontal,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${ViraIcon} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        label {
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;

            &.disabled {
                cursor: not-allowed;
            }

            & .label-text {
                cursor: pointer;
                font-weight: ${viraFormCssVars['vira-form-label-font-weight'].value};
            }

            &:hover .custom-checkbox {
                background-color: ${viraFormCssVars['vira-form-selection-hover-background-color']
                    .value};
            }
        }

        ${ViraIcon} {
            ${viraIconCssVars['vira-icon-stroke-width'].name}: 2px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${createFocusStyles({elementBorderSize: 1})}

            &.checked {
                & ${ViraIcon} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${viraFormCssVars['vira-form-error-foreground-color'].value};
            }

            &:active {
                background-color: ${viraFormCssVars['vira-form-selection-active-background-color']
                    .value};
            }

            &.disabled {
                ${viraDisabledStyles};
            }
        }

        ${hostClasses['vira-checkbox-horizontal'].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,
    events: {
        valueChange: defineElementEvent<boolean>(),
    },
    render({inputs, dispatch, events}) {
        function updateValue(this: void) {
            if (!inputs.disabled) {
                dispatch(new events.valueChange(!inputs.value));
            }
        }

        const textLabel = inputs.label
            ? html`
                  <span
                      class="label-text"
                      ${attributes(inputs.attributePassthrough?.['text'])}
                      style=${ifDefined(inputs.stylePassthrough?.['text'])}
                  >
                      ${inputs.label}
                  </span>
              `
            : nothing;

        return html`
            <label
                class=${classMap({
                    disabled: !!inputs.disabled,
                })}
                ${attributes(inputs.attributePassthrough?.label)}
                style=${ifDefined(inputs.stylePassthrough?.label)}
                ${listen('mousedown', updateValue)}
            >
                ${textLabel}
                <span
                    class="custom-checkbox ${classMap({
                        checked: inputs.value,
                        disabled: !!inputs.disabled,
                        error: !!inputs.hasError,
                    })}"
                    role="checkbox"
                    aria-checked=${inputs.value ? 'true' : 'false'}
                    aria-disabled=${inputs.disabled ? 'true' : 'false'}
                    tabindex=${inputs.disabled ? '-1' : '0'}
                    ${attributes(inputs.attributePassthrough?.['custom-checkbox'])}
                    style=${ifDefined(inputs.stylePassthrough?.['custom-checkbox'])}
                    ${listenToActivate(updateValue)}
                >
                    <${ViraIcon.assign({
                        icon: Check24Icon,
                        fitContainer: true,
                    })}
                        ${attributes(inputs.attributePassthrough?.[ViraIcon.tagName])}
                        style=${ifDefined(inputs.stylePassthrough?.[ViraIcon.tagName])}
                    ></${ViraIcon}>
                </span>
            </label>
        `;
    },
});
