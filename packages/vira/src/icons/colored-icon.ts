import {check} from '@augment-vir/assert';
import {type PartialWithUndefined, getObjectTypedKeys, getOrSetFromMap} from '@augment-vir/common';
import {type CSSResult, css, html, unsafeCSS} from 'element-vir';
import {viraIconCssVars} from './icon-css-vars.js';
import {type ViraIconSvg, defineIcon} from './icon-svg.js';

/**
 * Caches colored icons keyed first by the source icon and then by the generated color styles. The
 * outer `WeakMap` lets the entire cache for a given icon be garbage collected once that icon is no
 * longer referenced, preventing a memory leak from unbounded icon definitions.
 */
const coloredIconCache = new WeakMap<ViraIconSvg, Map<string, ViraIconSvg>>();

/**
 * Wraps an existing icon with a specific color and outputs another icon that can be used anywhere
 * the original icon can be used. Results are cached per source icon and color combination.
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

    const iconCache = getOrSetFromMap(coloredIconCache, icon, () => new Map<string, ViraIconSvg>());

    return getOrSetFromMap(iconCache, colorStyles, () => {
        const styles = css`
            ${unsafeCSS(colorStyles)}
            display: inline-flex;
            vertical-align: middle;
        `;

        return defineIcon({
            name: icon.name,
            svgTemplate: html`
                <div style=${styles}>${icon.svgTemplate}</div>
            `,
        });
    });
}
