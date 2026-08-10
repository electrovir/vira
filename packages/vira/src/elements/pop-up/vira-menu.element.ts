import {type PartialWithUndefined} from '@augment-vir/common';
import {css, html} from 'element-vir';
import {viraFormCssVars} from '../../styles/form-styles.js';
import {viraShadows} from '../../styles/shadows.js';
import {defineViraElement} from '../../util/define-vira-element.js';

/**
 * Possible corner styles for {@link ViraMenu}.
 *
 * @category Internal
 */
export enum ViraMenuCornerStyle {
    /** Rounding of corners depends on the open direction of the menu. */
    Directional = 'directional',
    /** All of the menus corners should be rounded. */
    AllRounded = 'all-rounded',
    /** None of the menus corners should be rounded. */
    AllSquare = 'all-square',
}

/**
 * Menu pop-up directions available for {@link ViraMenu}.
 *
 * @category Internal
 */
export enum ViraMenuPopUpDirection {
    Downwards = 'downwards',
    Upwards = 'upwards',
}

/**
 * A simple default style wrapper for pop-up menus. Consider using `renderMenuItemEntries` to help
 * rendering many menu items.
 *
 * @category PopUp
 * @category Elements
 */
export const ViraMenu = defineViraElement<
    PartialWithUndefined<{
        /** @default PopUpMenuDirection.Downwards */
        direction: ViraMenuPopUpDirection;
        /** @default PopUpMenuCornerStyle.Directional */
        cornerStyle: ViraMenuCornerStyle;
    }>
>()({
    tagName: 'vira-menu',
    hostClasses: {
        'vira-menu-open-upwards': ({inputs}) => inputs.direction === ViraMenuPopUpDirection.Upwards,
        'vira-menu-rounded': ({inputs}) => inputs.cornerStyle === ViraMenuCornerStyle.AllRounded,
        'vira-menu-square': ({inputs}) => inputs.cornerStyle === ViraMenuCornerStyle.AllSquare,
    },
    cssVars: {
        'vira-menu-padding': '4px',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            display: flex;
            flex-direction: column;
            padding: ${cssVars['vira-menu-padding'].value};
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            overscroll-behavior: contain;
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
            ${viraShadows.menuShadow}
        }

        ${hostClasses['vira-menu-open-upwards'].selector} {
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${hostClasses['vira-menu-square'].selector} {
            border-radius: 0;
        }

        ${hostClasses['vira-menu-rounded'].selector} {
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
        }
    `,
    render() {
        return html`
            <slot>&nbsp;</slot>
        `;
    },
});
