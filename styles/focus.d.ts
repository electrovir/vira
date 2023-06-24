export declare const viraFocusCssVars: import("lit-css-vars").CssVarDefinitions<{
    'vira-focus-outline-color': string;
    'vira-focus-outline-border-radius': import("element-vir").CSSResult;
}>;
/**
 * Create styles that look like an outline for the given selector.
 *
 * It is recommended to use the pseudo selectors ":focus:focus-visible:not(:active)" to preventing
 * clicking from creating focus styles in Chrome.
 */
export declare function createFocusStyles({ mainSelector, elementBorderSize, outlineGap, outlineWidth, }: {
    mainSelector: string;
    /**
     * ElementBorderSize here is used to fix the outline when the element these styles are attached
     * to has a border. The dev must specify that border size here for the offsets to be calculated
     * correctly.
     */
    elementBorderSize: number;
    outlineGap?: number;
    outlineWidth?: number;
    borderRadius?: number;
}): import("element-vir").CSSResult;
