import {check} from '@augment-vir/assert';
import {type PartialWithUndefined, getObjectTypedKeys} from '@augment-vir/common';
import {type CSSResult, css, html, unsafeCSS} from 'element-vir';
import {viraIconCssVars} from './icon-css-vars.js';
import {type ViraIconSvg, defineIcon} from './icon-svg.js';

/**
 * Wraps an existing icon with a specific color and outputs another icon that can be used anywhere
 * the original icon can be used.
 *
 * @category Icon
 */
export function createColoredIcon(
    icon: ViraIconSvg,
    colors: PartialWithUndefined<Record<keyof typeof viraIconCssVars, string | CSSResult>>,
): ViraIconSvg {
    const colorStyles = getObjectTypedKeys(colors)
        .map((cssVarName) => {
            if (colors[cssVarName]) {
                return `${viraIconCssVars[cssVarName].name}: ${String(colors[cssVarName])};`;
            } else {
                return undefined;
            }
        })
        .filter(check.isTruthy)
        .join(' ');

    const styles = css`
        ${unsafeCSS(colorStyles)}
        display: inline-flex;
    `;

    return defineIcon({
        name: icon.name,
        svgTemplate: html`
            <div style=${styles}>${icon.svgTemplate}</div>
        `,
    });
}
