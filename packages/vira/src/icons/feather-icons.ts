import {check} from '@augment-vir/assert';
import {html, unsafeHTML} from 'element-vir';
import type * as featherIconsImportType from 'feather-icons';
import {type FeatherAttributes} from 'feather-icons';
import {viraIconCssVars} from './icon-css-vars.js';
import {type ViraIconSvg} from './icon-svg.js';

/** Feather's export format is all messed up so we have to do this to catch all its possible cases. */
async function importFeatherIcons(): Promise<typeof featherIconsImportType> {
    const imported = (await import('feather-icons')) as unknown;

    function recurseImport(imported: unknown): unknown {
        if (check.isObject(imported)) {
            if (check.hasKey(imported, 'default')) {
                return recurseImport(imported.default);
            } else if (check.hasKey(imported, 'icons')) {
                return imported;
            }
        }
        return undefined;
    }

    return (
        recurseImport(imported) ||
        /** Unfortunately, Feather will attach itself to the global state sometimes. */
        (globalThis.feather as any)
    );
}

const featherIconsImported = await importFeatherIcons();

/**
 * All supported feather icon names.
 *
 * @category Internal
 */
export type FeatherIconKey = keyof typeof featherIconsImported.icons;

/**
 * An entry in {@link featherIcons}.
 *
 * @category Internal
 */
export type FeatherIconEntry = ViraIconSvg &
    ((options: Readonly<FeatherAttributes>) => ViraIconSvg);

const defaultFeatherOptions: Readonly<Partial<FeatherAttributes>> = {
    fill: String(viraIconCssVars['vira-icon-fill-color'].value),
    stroke: String(viraIconCssVars['vira-icon-stroke-color'].value),
    'stroke-width': String(viraIconCssVars['vira-icon-stroke-width'].value),
};

function createFeatherIconEntry(iconKey: FeatherIconKey): FeatherIconEntry {
    const featherIcon = featherIconsImported.icons[iconKey];

    const configureIconCallback = (options: Readonly<FeatherAttributes>): ViraIconSvg => {
        return {
            name: featherIcon.name,
            svgTemplate: html`
                ${unsafeHTML(
                    featherIcon.toSvg({
                        ...defaultFeatherOptions,
                        ...options,
                    }),
                )}
            `,
        };
    };

    Object.defineProperty(configureIconCallback, 'name', {
        value: featherIcon.name,
        writable: false,
        configurable: true,
    });

    return Object.assign(configureIconCallback, {
        svgTemplate: html`
            ${unsafeHTML(featherIcon.toSvg(defaultFeatherOptions))}
        `,
    }) as FeatherIconEntry;
}

const featherIconCache = new Map<FeatherIconKey, FeatherIconEntry>();

/**
 * All [Feather icons](https://feathericons.com) in a format compatible with `ViraIcon`. Each icon
 * entry can be accessed directly or customized by calling it as a function.
 *
 * @category Icon
 */
export const featherIcons: Readonly<Record<FeatherIconKey, FeatherIconEntry>> = new Proxy(
    {} as Record<FeatherIconKey, FeatherIconEntry>,
    {
        get(_target, property: string) {
            const iconKey = property as FeatherIconKey;

            if (!(iconKey in featherIconsImported.icons)) {
                return undefined;
            }

            const cached = featherIconCache.get(iconKey);

            if (cached) {
                return cached;
            }

            const entry = createFeatherIconEntry(iconKey);
            featherIconCache.set(iconKey, entry);
            return entry;
        },
        has(_target, property: string) {
            return property in featherIconsImported.icons;
        },
        ownKeys() {
            return Object.keys(featherIconsImported.icons);
        },
        getOwnPropertyDescriptor(_target, property: string) {
            if (property in featherIconsImported.icons) {
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
