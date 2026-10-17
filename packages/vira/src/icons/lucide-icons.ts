import * as lucideStaticImport from 'lucide-static';
import {type ViraIconSvg} from './icon-svg.js';
import {createLucideIcon} from './lucide-icon.js';

/**
 * All supported Lucide icon names.
 *
 * @category Internal
 */
export type LucideIconKey = keyof typeof lucideStaticImport;

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

const lucideIconCache = new Map<LucideIconKey, ViraIconSvg>();

/**
 * All [Lucide icons](https://lucide.dev) in a format compatible with `ViraIcon`. Each icon entry
 * can be accessed directly as a {@link ViraIconSvg}. Icons render at 16px instead of Lucide's
 * default 24px; use `createSizedIcon` for other sizes. Using this bundles every Lucide icon; to
 * bundle only the icons you use, import them individually instead (such as `LucideCircleXIcon`).
 *
 * @deprecated Use direct icon imports
 * @category Icon
 */
export const lucideIcons: Readonly<{[Key in LucideIconKey]: ViraIconSvg<Key>}> = new Proxy(
    {} as {[Key in LucideIconKey]: ViraIconSvg<Key>},
    {
        get(_target, property: string) {
            if (!isLucideIconKey(property)) {
                return undefined;
            }

            const cached = lucideIconCache.get(property);

            if (cached) {
                return cached;
            }

            const entry = createLucideIcon({
                name: property,
                svg: getLucideIconSvg(property),
            });
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
