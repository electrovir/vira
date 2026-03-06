import {check} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {css, type CSSResult, unsafeCSS} from 'element-vir';
import {type SingleCssVarDefinition} from 'lit-css-vars';
import {viraFormCssVars} from './form-styles.js';

function cssValueOrRaw(value: string | SingleCssVarDefinition): CSSResult {
    if (check.isString(value)) {
        return unsafeCSS(value);
    } else {
        return value.value;
    }
}

/**
 * Create styles that look like an outline for the given selector.
 *
 * It is recommended to use the pseudo selector chain ":focus:focus-visible:not(:active)" to
 * preventing clicking an element from creating focus styles in Chrome.
 *
 * @category Styles
 */
export function createFocusStyles({
    elementBorderSize = '1px',
    outlineGap = '2px',
    outlineWidth = '2px',
    noNesting,
    outlineColor = viraFormCssVars['vira-form-focus-outline-color'],
    borderRadius = viraFormCssVars['vira-form-focus-outline-border-radius'],
    renderInside,
}: PartialWithUndefined<{
    /**
     * ElementBorderSize here is used to fix the outline when the element these styles are attached
     * to has a border. The dev must specify that border size here for the offsets to be calculated
     * correctly.
     */
    elementBorderSize: SingleCssVarDefinition | string;
    outlineGap: SingleCssVarDefinition | string;
    outlineWidth: SingleCssVarDefinition | string;
    borderRadius: SingleCssVarDefinition | string;
    outlineColor: SingleCssVarDefinition | string;
    noNesting: boolean;
    /** Render the focus outline inside the element instead of outside. */
    renderInside: boolean;
}> = {}) {
    const insetSpacing = css`calc(${cssValueOrRaw(outlineGap)})`;
    const outsetSpacing = css`calc(${cssValueOrRaw(outlineWidth)} + ${cssValueOrRaw(outlineGap)} + ${cssValueOrRaw(elementBorderSize)})`;

    const styles = renderInside
        ? css`
              content: '';
              top: ${insetSpacing};
              left: ${insetSpacing};
              position: absolute;
              width: calc(100% - calc(${insetSpacing} * 2));
              height: calc(100% - calc(${insetSpacing} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${cssValueOrRaw(outlineWidth)} solid ${cssValueOrRaw(outlineColor)};
              border-radius: ${cssValueOrRaw(borderRadius)};
              z-index: 100;
          `
        : css`
              content: '';
              top: calc(${outsetSpacing} * -1);
              left: calc(${outsetSpacing} * -1);
              position: absolute;
              width: calc(100% + calc(${outsetSpacing} * 2));
              height: calc(100% + calc(${outsetSpacing} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${cssValueOrRaw(outlineWidth)} solid ${cssValueOrRaw(outlineColor)};
              border-radius: ${cssValueOrRaw(borderRadius)};
              z-index: 100;
          `;

    if (noNesting) {
        return styles;
    }

    return css`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${styles}
        }
    `;
}
