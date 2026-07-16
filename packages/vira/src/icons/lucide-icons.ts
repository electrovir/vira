import {html, unsafeHTML} from 'element-vir';
import * as lucideStaticImport from 'lucide-static';
import {viraIconCssVars} from './icon-css-vars.js';
import {type ViraIconSvg} from './icon-svg.js';

/**
 * All supported Lucide icon names.
 *
 * @category Internal
 */
export type LucideIconKey = keyof typeof lucideStaticImport;

const defaultLucideAttributes: Readonly<Record<string, string>> = {
    fill: String(viraIconCssVars['vira-icon-fill-color'].value),
    stroke: String(viraIconCssVars['vira-icon-stroke-color'].value),
    'stroke-width': String(viraIconCssVars['vira-icon-stroke-width'].value),
};

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
        ) =>
            setSvgAttribute({
                svgString: result,
                attributeName: key,
                value,
            }),
        svgString,
    );
}

function isLucideIconKey(key: string): key is LucideIconKey {
    return key in lucideStaticImport;
}

function getLucideIconSvg(key: LucideIconKey): string {
    const svg = lucideStaticImport[key];

    if (typeof svg !== 'string') {
        throw new TypeError(`Lucide icon "${key}" is not a valid SVG string.`);
    }

    return svg;
}

function createLucideIconEntry(iconKey: LucideIconKey): ViraIconSvg {
    return {
        name: iconKey,
        svgTemplate: html`
            ${unsafeHTML(applySvgAttributes(getLucideIconSvg(iconKey), defaultLucideAttributes))}
        `,
    };
}

const lucideIconCache = new Map<LucideIconKey, ViraIconSvg>();

/**
 * All [Lucide icons](https://lucide.dev) in a format compatible with `ViraIcon`. Each icon entry
 * can be accessed directly as a {@link ViraIconSvg}.
 *
 * @category Icon
 */
export const lucideIcons: Readonly<Record<LucideIconKey, ViraIconSvg>> = new Proxy(
    {} as Record<LucideIconKey, ViraIconSvg>,
    {
        get(_target, property: string) {
            if (!isLucideIconKey(property)) {
                return undefined;
            }

            const cached = lucideIconCache.get(property);

            if (cached) {
                return cached;
            }

            const entry = createLucideIconEntry(property);
            lucideIconCache.set(property, entry);
            return entry;
        },
        has(_target, property: string) {
            return isLucideIconKey(property);
        },
        ownKeys() {
            return Object.keys(lucideStaticImport);
        },
        getOwnPropertyDescriptor(_target, property: string) {
            if (isLucideIconKey(property)) {
                return {
                    configurable: true,
                    enumerable: true,
                    writable: false,
                };
            }
            return undefined;
        },
    },
);
