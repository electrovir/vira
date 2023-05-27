import {assign, css, html} from 'element-vir';
import {ViraIconSvg} from '../../icons';
import {noUserSelect} from '../../styles';
import {viraDisabledStyles} from '../../styles/disabled';
import {viraAnimationDurations} from '../../styles/durations';
import {createFocusStyles, viraFocusCssVars} from '../../styles/focus';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {defineViraElement} from '../define-vira-element';
import {ViraIcon} from '../vira-icon/vira-icon.element';

export enum ViraButtonStyleEnum {
    Default = 'vira-button-default',
    Outline = 'vira-button-outline',
}

export const ViraButton = defineViraElement<{
    text?: string;
    icon?: undefined | ViraIconSvg;
    disabled?: boolean | undefined;
    buttonStyle?: ViraButtonStyleEnum | undefined;
}>()({
    tagName: 'vira-button',
    hostClasses: {
        'vira-button-outline-style': ({inputs}) =>
            inputs.buttonStyle === ViraButtonStyleEnum.Outline,
        'vira-button-disabled': ({inputs}) => !!inputs.disabled,
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
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars[
                'vira-button-primary-color'
            ].value};
            ${cssVars['vira-button-internal-foreground-color'].name}: ${cssVars[
                'vira-button-secondary-color'
            ].value};
            ${viraFocusCssVars['vira-focus-outline-color'].name}: ${cssVars[
                'vira-button-primary-hover-color'
            ].value}
        }

        :host(:hover) button,
        button:hover {
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars[
                'vira-button-primary-hover-color'
            ].value};
        }

        :host(:active) button,
        button:active {
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars[
                'vira-button-primary-active-color'
            ].value};
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
            border-radius: 8px;
            background-color: ${cssVars['vira-button-internal-background-color'].value};
            color: ${cssVars['vira-button-internal-foreground-color'].value};
            padding: 5px 10px;
            transition: color ${viraAnimationDurations['vira-interaction-animation-duration'].value},
                background-color
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value},
                border-color ${viraAnimationDurations['vira-interaction-animation-duration'].value};
        }

        ${createFocusStyles({
            mainSelector: 'button:focus:focus-visible:not(:active)',
            elementBorderSize: 2,
        })}

        button ${ViraIcon} + .text-template {
            margin-left: 8px;
        }
    `,
    renderCallback: ({inputs}) => {
        const iconTemplate = inputs.icon
            ? html`
                  <${ViraIcon}
                      ${assign(ViraIcon, {
                          icon: inputs.icon,
                      })}
                  ></${ViraIcon}>
              `
            : '';
        const textTemplate = inputs.text
            ? html`
                  <span class="text-template">${inputs.text}</span>
              `
            : '';

        return html`
            <button>${iconTemplate} ${textTemplate}</button>
        `;
    },
});
