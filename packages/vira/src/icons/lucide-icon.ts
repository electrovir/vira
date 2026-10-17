import {html, unsafeHTML} from 'element-vir';
import {viraIconCssVars} from './icon-css-vars.js';
import {type ViraIconSvg} from './icon-svg.js';

function setSvgAttribute({
    svgString,
    attributeName,
    value,
}: Readonly<{svgString: string; attributeName: string; value: string}>): string {
    const escapedName = attributeName.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
    const regex = new RegExp(String.raw`(\s)${escapedName}="[^"]*"`);

    return regex.test(svgString)
        ? svgString.replace(regex, `$1${attributeName}="${value}"`)
        : svgString.replace(/<svg\b/, `<svg ${attributeName}="${value}"`);
}

function applySvgAttributes(
    svgString: string,
    attributes: Readonly<Record<string, string>>,
): string {
    return Object.entries(attributes).reduce(
        (
            result,
            [
                key,
                value,
            ],
        ) => {
            return setSvgAttribute({
                svgString: result,
                attributeName: key,
                value,
            });
        },
        svgString,
    );
}

/**
 * Converts a single SVG string from the `lucide-static` package into a 16px {@link ViraIconSvg}.
 * Only the generated `lucide/*.icon.ts` files should call this. Import those icons instead, and use
 * `createSizedIcon` for other sizes.
 *
 * @category Internal
 */
export function createLucideIcon<const Name extends string>({
    name,
    svg,
}: Readonly<{
    name: Name;
    /** The raw SVG string exported by `lucide-static`. */
    svg: string;
}>): ViraIconSvg<Name> {
    return {
        name,
        svgTemplate: html`
            ${unsafeHTML(
                applySvgAttributes(svg, {
                    fill: String(viraIconCssVars['vira-icon-fill-color'].value),
                    stroke: String(viraIconCssVars['vira-icon-stroke-color'].value),
                    'stroke-width': String(viraIconCssVars['vira-icon-stroke-width'].value),
                    width: '16',
                    height: '16',
                }),
            )}
        `,
    };
}
