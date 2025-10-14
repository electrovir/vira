import {type PartialWithUndefined} from '@augment-vir/common';
import {css, html} from 'element-vir';
import {viraBorders} from '../../styles/border.js';
import {viraFormCssVars} from '../../styles/form-styles.js';
import {viraShadows} from '../../styles/shadows.js';
import {defineViraElement} from '../define-vira-element.js';

/**
 * Possible corner styles for {@link ViraPopoverMenu}.
 *
 * @category Internal
 */
export enum PopoverMenuCornerStyle {
    /** Rounding of corners depends on the open direction of the menu. */
    Directional = 'directional',
    /** All of the menus corners should be rounded. */
    AllRounded = 'all-rounded',
    /** None of the menus corners should be rounded. */
    AllSquare = 'all-square',
}

/**
 * Menu popover directions available for {@link ViraPopoverMenu}.
 *
 * @category Internal
 */
export enum PopoverMenuDirection {
    Downwards = 'downwards',
    Upwards = 'upwards',
}

/**
 * A simple default style wrapper for popover menus.
 *
 * @category Popover
 * @category Elements
 */
export const ViraPopoverMenu = defineViraElement<
    PartialWithUndefined<{
        /** @default PopoverMenuDirection.Downwards */
        direction: PopoverMenuDirection;
        /** @default PopoverMenuCornerStyle.Directional */
        cornerStyle: PopoverMenuCornerStyle;
    }>
>()({
    tagName: 'vira-popover-menu',
    hostClasses: {
        'vira-popover-menu-open-upwards': ({inputs}) =>
            inputs.direction === PopoverMenuDirection.Upwards,
        'vira-popover-menu-rounded': ({inputs}) =>
            inputs.cornerStyle === PopoverMenuCornerStyle.AllRounded,
        'vira-popover-menu-square': ({inputs}) =>
            inputs.cornerStyle === PopoverMenuCornerStyle.AllSquare,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
            ${viraShadows.menuShadow}
        }

        ${hostClasses['vira-popover-menu-open-upwards'].selector} {
            ${viraShadows.menuShadowReversed}
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${hostClasses['vira-popover-menu-square'].selector} {
            border-radius: 0;
        }

        ${hostClasses['vira-popover-menu-rounded'].selector} {
            border-radius: ${viraBorders['vira-form-input-radius'].value};
        }
    `,
    render() {
        return html`
            <slot></slot>
        `;
    },
});
