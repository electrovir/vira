import {type CSSResult, css} from 'element-vir';
import {defineCssVars} from 'lit-css-vars';

/**
 * CSS Vars for shadows.
 *
 * @category Styles
 */
export const shadowCssVars = defineCssVars({
    'menu-shadow-color': 'rgba(0, 0, 0, 0.22)',
    'modal-shadow-color': 'rgba(0, 0, 0, 0.69)',
});

/**
 * CSS chunks for default Vira shadow styles.
 *
 * @category Styles
 */
export const viraShadows = {
    menuShadow: css`
        box-shadow: 0 2px 12px ${shadowCssVars['menu-shadow-color'].value};
    `,
    modal: css`
        box-shadow: 0 5px 15px ${shadowCssVars['modal-shadow-color'].value};
    `,
} as const satisfies Record<string, CSSResult>;
