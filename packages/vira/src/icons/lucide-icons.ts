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

/**
 * An entry in {@link lucideIcons}.
 *
 * @category Internal
 */
export type LucideIconEntry = ViraIconSvg &
    ((options: Readonly<Record<string, string | number>>) => ViraIconSvg);

const defaultLucideAttributes: Readonly<Record<string, string>> = {
    fill: String(viraIconCssVars['vira-icon-fill-color'].value),
    stroke: String(viraIconCssVars['vira-icon-stroke-color'].value),
    'stroke-width': String(viraIconCssVars['vira-icon-stroke-width'].value),
};

function setSvgAttribute(svgString: string, attributeName: string, value: string): string {
    const escapedName = attributeName.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
    const regex = new RegExp(String.raw`(\s)${escapedName}="[^"]*"`);

    return regex.test(svgString)
        ? svgString.replace(regex, `$1${attributeName}="${value}"`)
        : svgString.replace(/<svg\b/, `<svg ${attributeName}="${value}"`);
}

function applySvgAttributes(
    svgString: string,
    attributes: Readonly<Record<string, string | number>>,
): string {
    return Object.entries(attributes).reduce(
        (
            result,
            [
                key,
                value,
            ],
        ) => setSvgAttribute(result, key, String(value)),
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

function createLucideIconEntry(iconKey: LucideIconKey): LucideIconEntry {
    const svgString = getLucideIconSvg(iconKey);

    const configureIconCallback = (
        options: Readonly<Record<string, string | number>>,
    ): ViraIconSvg => {
        return {
            name: iconKey,
            svgTemplate: html`
                ${unsafeHTML(
                    applySvgAttributes(svgString, {
                        ...defaultLucideAttributes,
                        ...options,
                    }),
                )}
            `,
        };
    };

    Object.defineProperty(configureIconCallback, 'name', {
        value: iconKey,
        writable: false,
        configurable: true,
    });

    return Object.assign(configureIconCallback, {
        svgTemplate: html`
            ${unsafeHTML(applySvgAttributes(svgString, defaultLucideAttributes))}
        `,
    }) as LucideIconEntry;
}

const lucideIconCache = new Map<LucideIconKey, LucideIconEntry>();

/**
 * All [Lucide icons](https://lucide.dev) in a format compatible with `ViraIcon`. Each icon entry
 * can be accessed directly or customized by calling it as a function.
 *
 * @category Icon
 */
export const lucideIcons: Readonly<Record<LucideIconKey, LucideIconEntry>> = new Proxy(
    {} as Record<LucideIconKey, LucideIconEntry>,
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
