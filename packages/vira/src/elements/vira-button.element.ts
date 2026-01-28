import {type PartialWithUndefined} from '@augment-vir/common';
import {css, html, nothing} from 'element-vir';
import {type ViraIconSvg} from '../icons/index.js';
import {viraDisabledStyles} from '../styles/disabled.js';
import {viraAnimationDurations} from '../styles/durations.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {noUserSelect} from '../styles/index.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {defineViraElement} from './define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * Button styles available for {@link ViraButton}.
 *
 * @category Button
 */
export enum ViraButtonStyle {
    Default = 'vira-button-default',
    Outline = 'vira-button-outline',
    Danger = 'vira-button-danger',
    DangerOutline = 'vira-button-danger-outline',
    Ghost = 'vira-button-ghost',
}

/**
 * A custom button with default styling.
 *
 * @category Button
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-button
 */
export const ViraButton = defineViraElement<
    PartialWithUndefined<{
        text: string;
        icon: Pick<ViraIconSvg, 'svgTemplate'>;
        disabled: boolean;
        buttonStyle: ViraButtonStyle;
        /**
         * When set to `true`, the given icon (if any) will take up its full dimensions, potentially
         * increasing the button's size.
         *
         * @default false
         */
        expandToFitIcon: boolean;
    }>
>()({
    tagName: 'vira-button',
    hostClasses: {
        'vira-button-outline-style': ({inputs}) =>
            inputs.buttonStyle === ViraButtonStyle.Outline ||
            inputs.buttonStyle === ViraButtonStyle.DangerOutline,
        'vira-button-danger-style': ({inputs}) =>
            inputs.buttonStyle === ViraButtonStyle.Danger ||
            inputs.buttonStyle === ViraButtonStyle.DangerOutline,
        'vira-button-ghost-style': ({inputs}) => inputs.buttonStyle === ViraButtonStyle.Ghost,
        'vira-button-disabled': ({inputs}) => !!inputs.disabled,
        'vira-button-expand-to-fit-icon': ({inputs}) => !!inputs.expandToFitIcon,
        'vira-button-icon-only': ({inputs}) => !!inputs.icon && !inputs.text,
        'vira-button-default-style': ({inputs}) =>
            !inputs.buttonStyle || inputs.buttonStyle === ViraButtonStyle.Default,
    },
    cssVars: {
        'vira-button-padding': '5px 10px',

        'vira-button-internal-foreground-color': 'transparent',
        'vira-button-internal-background-color': 'transparent',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${noUserSelect};
            ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                'vira-form-accent-primary-color'
            ].value};
            ${cssVars['vira-button-internal-foreground-color'].name}: ${viraFormCssVars[
                'vira-form-background-color'
            ].value};
            ${viraFormCssVars['vira-form-focus-outline-color'].name}: ${viraFormCssVars[
                'vira-form-accent-primary-hover-color'
            ].value}
        }

        ${hostClasses['vira-button-icon-only'].selector} {
            ${cssVars['vira-button-padding'].name}: 5px;
        }

        ${hostClasses['vira-button-disabled'].selector} {
            ${viraDisabledStyles};
        }

        :host(:hover) button,
        button:hover {
            ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                'vira-form-accent-primary-hover-color'
            ].value};
        }

        :host(:active) button,
        button:active {
            ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                'vira-form-accent-primary-active-color'
            ].value};
        }

        ${hostClasses['vira-button-danger-style'].selector} {
            & button {
                ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                    'vira-form-error-color'
                ].value};
            }

            &:hover button,
            & button:hover {
                ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                    'vira-form-error-hover-color'
                ].value};
            }

            &:active button,
            & button:active {
                ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                    'vira-form-error-active-color'
                ].value};
            }
        }

        ${hostClasses['vira-button-ghost-style'].selector} {
            & button {
                ${cssVars['vira-button-internal-background-color'].name}: transparent;
                ${cssVars['vira-button-internal-foreground-color'].name}: currentColor;
            }

            &:hover button,
            & button:hover {
                ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                    'vira-form-filled-background-color'
                ].value};
            }

            &:active button,
            & button:active {
                ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                    'vira-form-filled-active-background-color'
                ].value};
            }
        }

        ${hostClasses['vira-button-outline-style'].selector} button {
            color: ${cssVars['vira-button-internal-background-color'].value};
            background-color: ${cssVars['vira-button-internal-foreground-color'].value};
            border-color: currentColor;
        }

        button {
            ${noNativeFormStyles};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            background-color: ${cssVars['vira-button-internal-background-color'].value};
            color: ${cssVars['vira-button-internal-foreground-color'].value};
            padding: ${cssVars['vira-button-padding'].value};
            transition:
                color ${viraAnimationDurations['vira-interaction-animation-duration'].value},
                background-color
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value},
                border-color ${viraAnimationDurations['vira-interaction-animation-duration'].value};

            ${createFocusStyles({
                elementBorderSize: 2,
            })}
        }

        .empty-text {
            width: 0;
        }

        button ${ViraIcon} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${hostClasses['vira-button-expand-to-fit-icon'].name})) {
            & ${ViraIcon} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,
    render: ({inputs}) => {
        const iconTemplate = inputs.icon
            ? html`
                  <${ViraIcon.assign({
                      icon: inputs.icon,
                  })}></${ViraIcon}>
              `
            : nothing;
        const textTemplate = inputs.text
            ? html`
                  <span class="text-template">${inputs.text}</span>
              `
            : html`
                  <span class="empty-text">&nbsp;</span>
              `;

        return html`
            <button ?disabled=${inputs.disabled}>${iconTemplate} ${textTemplate}</button>
        `;
    },
});
