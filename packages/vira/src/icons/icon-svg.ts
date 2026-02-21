import {check} from '@augment-vir/assert';
import {getObjectTypedKeys, type PartialWithUndefined} from '@augment-vir/common';
import {html, type CSSResult, type TemplateResult} from 'element-vir';
import {viraIconCssVars} from './icon-css-vars.js';

/**
 * An individual Vira icon SVG definition.
 *
 * @category Icon
 */
export type ViraIconSvg = {
    name: string;
    svgTemplate: TemplateResult;
};

/**
 * A function used to define an individual Vira icon SVG.
 *
 * @category Icon
 */
export function defineIcon({
    name,
    svgTemplate,
}: {
    name: string;
    svgTemplate: TemplateResult;
}): ViraIconSvg {
    const iconSvg: ViraIconSvg = {
        name,
        svgTemplate,
    };

    return iconSvg;
}

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

    return defineIcon({
        name: icon.name,
        svgTemplate: html`
            <div style=${colorStyles}>${icon.svgTemplate}</div>
        `,
    });
}
