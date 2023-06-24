import { assign, css, html } from 'element-vir';
import { noUserSelect } from '../../styles';
import { viraDisabledStyles } from '../../styles/disabled';
import { viraAnimationDurations } from '../../styles/durations';
import { createFocusStyles, viraFocusCssVars } from '../../styles/focus';
import { removeNativeFormStyles } from '../../styles/native-styles';
import { viraCssVars } from '../../styles/vira-css-vars';
import { defineViraElement } from '../define-vira-element';
import { ViraIcon } from '../vira-icon/vira-icon.element';
export var ViraButtonStyleEnum;
(function (ViraButtonStyleEnum) {
    ViraButtonStyleEnum["Default"] = "vira-button-default";
    ViraButtonStyleEnum["Outline"] = "vira-button-outline";
})(ViraButtonStyleEnum || (ViraButtonStyleEnum = {}));
export const ViraButton = defineViraElement()({
    tagName: 'vira-button',
    hostClasses: {
        'vira-button-outline-style': ({ inputs }) => inputs.buttonStyle === ViraButtonStyleEnum.Outline,
        'vira-button-disabled': ({ inputs }) => !!inputs.disabled,
    },
    cssVars: {
        /** On the default button style this is the background color. */
        'vira-button-primary-color': '#0A89FF',
        'vira-button-primary-hover-color': '#59B1FF',
        'vira-button-primary-active-color': '#007FF6',
        /** On the default button style this is the text color. */
        'vira-button-secondary-color': 'white',
        'vira-button-internal-foreground-color': '',
        'vira-button-internal-background-color': '',
        'vira-button-padding': '5px 10px',
    },
    styles: ({ hostClasses, cssVars }) => css `
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${noUserSelect};
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars['vira-button-primary-color'].value};
            ${cssVars['vira-button-internal-foreground-color'].name}: ${cssVars['vira-button-secondary-color'].value};
            ${viraFocusCssVars['vira-focus-outline-color'].name}: ${cssVars['vira-button-primary-hover-color'].value}
        }

        :host(:hover) button,
        button:hover {
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars['vira-button-primary-hover-color'].value};
        }

        :host(:active) button,
        button:active {
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars['vira-button-primary-active-color'].value};
        }

        ${hostClasses['vira-button-disabled'].selector} {
            ${viraDisabledStyles};
        }

        ${hostClasses['vira-button-outline-style'].selector} button {
            color: ${cssVars['vira-button-internal-background-color'].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${removeNativeFormStyles};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${viraCssVars['vira-form-input-border-radius'].value};
            background-color: ${cssVars['vira-button-internal-background-color'].value};
            color: ${cssVars['vira-button-internal-foreground-color'].value};
            padding: ${cssVars['vira-button-padding'].value};
            transition: color ${viraAnimationDurations['vira-interaction-animation-duration'].value},
                background-color
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value},
                border-color ${viraAnimationDurations['vira-interaction-animation-duration'].value};
        }

        ${createFocusStyles({
        mainSelector: 'button:focus:focus-visible:not(:active):not([disabled])',
        elementBorderSize: 2,
    })}

        button ${ViraIcon} + .text-template {
            margin-left: 8px;
        }
    `,
    renderCallback: ({ inputs }) => {
        const iconTemplate = inputs.icon
            ? html `
                  <${ViraIcon}
                      ${assign(ViraIcon, {
                icon: inputs.icon,
            })}
                  ></${ViraIcon}>
              `
            : '';
        const textTemplate = inputs.text
            ? html `
                  <span class="text-template">${inputs.text}</span>
              `
            : '';
        return html `
            <button ?disabled=${inputs.disabled}>${iconTemplate} ${textTemplate}</button>
        `;
    },
});
