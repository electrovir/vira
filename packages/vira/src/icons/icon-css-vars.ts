import {defineCssVars} from 'lit-css-vars';

const genericIconColorCssVar = defineCssVars({
    /**
     * Specifies the icon color as a whole. This will color both the icon stroke and icon fill
     * colors unless those respective CSS vars are specifically overridden. This CSS var value
     * defaults to "currentColor", so in most cases you don't even need to override this variable,
     * you just need to change the icon's "color" property.
     */
    'vira-icon-color': 'currentColor',
});

const specificIconCssVars = defineCssVars({
    /** To be used for coloring an icon's stroke. */
    'vira-icon-stroke-color': genericIconColorCssVar['vira-icon-color'].value,
    /** To be used for coloring an icon's fill. */
    'vira-icon-fill-color': genericIconColorCssVar['vira-icon-color'].value,
    'vira-icon-stroke-width': '1px',
});

export const viraIconCssVars = {
    ...genericIconColorCssVar,
    ...specificIconCssVars,
};
