import {type PartialWithUndefined} from '@augment-vir/common';
import {css, html, nothing} from 'element-vir';
import {type ViraIconSvg, ChevronDown16Icon} from '../icons/index.js';
import {viraDisabledStyles} from '../styles/disabled.js';
import {viraAnimationDurations} from '../styles/durations.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {noUserSelect} from '../styles/index.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {defineViraElement} from '../util/define-vira-element.js';
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
    Plain = 'vira-button-plain',
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
        /**
         * If `true`, a menu trigger caret (like in ViraDropdown or ViraSelect) is rendered.
         *
         * @default false
         */
        showMenuCaret: boolean;
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
        'vira-button-plain-style': ({inputs}) => inputs.buttonStyle === ViraButtonStyle.Plain,
        'vira-button-default-style': ({inputs}) =>
            !inputs.buttonStyle || inputs.buttonStyle === ViraButtonStyle.Default,
        'vira-button-with-menu-caret': ({inputs}) => !!inputs.showMenuCaret,
    },
    cssVars: {
        'vira-button-padding': '5px 10px',

        'vira-button-internal-foreground-color':
            viraFormCssVars['vira-form-background-color'].value,
        'vira-button-internal-background-color':
            viraFormCssVars['vira-form-accent-primary-color'].value,
        'vira-button-border-color': 'transparent',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            height: 32px;
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${noUserSelect};
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

        ${hostClasses['vira-button-plain-style'].selector} {
            & button {
                ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                    'vira-form-plain-color'
                ].value};
                color: currentColor;
                ${cssVars['vira-button-border-color'].name}: ${viraFormCssVars[
                    'vira-form-plain-active-color'
                ].value};
                border-width: 1px;
            }
            &:hover button,
            & button:hover {
                ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                    'vira-form-plain-hover-color'
                ].value};
            }

            &:active button,
            & button:active {
                ${cssVars['vira-button-internal-background-color'].name}: ${viraFormCssVars[
                    'vira-form-plain-active-color'
                ].value};
            }
        }

        ${hostClasses['vira-button-outline-style'].selector} button {
            color: ${cssVars['vira-button-internal-background-color'].value};
            background-color: ${cssVars['vira-button-internal-foreground-color'].value};
            ${cssVars['vira-button-border-color'].name}: currentColor;
        }

        button {
            ${noNativeFormStyles};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid ${cssVars['vira-button-border-color'].value};
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

        .caret-icon {
            margin-left: 8px;
        }

        ${hostClasses['vira-button-with-menu-caret'].selector} {
            button {
                padding-right: 6px;
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

        const caretIconTemplate = inputs.showMenuCaret
            ? html`
                  <${ViraIcon.assign({
                      icon: ChevronDown16Icon,
                  })}
                      class="caret-icon"
                  ></${ViraIcon}>
              `
            : nothing;

        return html`
            <button ?disabled=${inputs.disabled}>
                ${iconTemplate}${textTemplate}${caretIconTemplate}
            </button>
        `;
    },
});
