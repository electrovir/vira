import {type CSSResult, css} from 'element-vir';
import {defineCssVars} from 'lit-css-vars';

/**
 * CSS Vars for shadows.
 *
 * @category Styles
 */
export const shadowCssVars = defineCssVars({
    'menu-shadow-color': '#e2e2e2',
    'modal-shadow-color': '#4f4f4f',
});

/**
 * CSS chunks for default Vira shadow styles.
 *
 * @category Styles
 */
export const viraShadows = {
    menuShadow: css`
        filter: drop-shadow(0px 5px 5px ${shadowCssVars['menu-shadow-color'].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,
    modal: css`
        box-shadow: 0 5px 15px ${shadowCssVars['modal-shadow-color'].value};
    `,
} as const satisfies Record<string, CSSResult>;
