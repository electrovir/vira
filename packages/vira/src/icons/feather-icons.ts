import {html, unsafeHTML} from 'element-vir';
import featherIconsImport, {type FeatherAttributes} from 'feather-icons';
import {viraIconCssVars} from './icon-css-vars.js';
import {type ViraIconSvg} from './icon-svg.js';

export type FeatherIconKey = keyof typeof featherIconsImport.icons;

type FeatherIconEntry = ViraIconSvg & ((options: Readonly<FeatherAttributes>) => ViraIconSvg);

const defaultFeatherOptions: Readonly<Partial<FeatherAttributes>> = {
    fill: String(viraIconCssVars['vira-icon-fill-color'].value),
    stroke: String(viraIconCssVars['vira-icon-stroke-color'].value),
    'stroke-width': String(viraIconCssVars['vira-icon-stroke-width'].value),
};

function createFeatherIconEntry(iconKey: FeatherIconKey): FeatherIconEntry {
    const featherIcon = featherIconsImport.icons[iconKey];

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

export const featherIcons: Readonly<Record<FeatherIconKey, FeatherIconEntry>> = new Proxy(
    {} as Record<FeatherIconKey, FeatherIconEntry>,
    {
        get(_target, property: string) {
            const iconKey = property as FeatherIconKey;

            if (!(iconKey in featherIconsImport.icons)) {
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
            return property in featherIconsImport.icons;
        },
        ownKeys() {
            return Object.keys(featherIconsImport.icons);
        },
        getOwnPropertyDescriptor(_target, property: string) {
            if (property in featherIconsImport.icons) {
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
