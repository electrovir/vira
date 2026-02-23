import {check} from '@augment-vir/assert';
import {
    type AnyObject,
    arrayToObject,
    filterMap,
    getEnumValues,
    getObjectTypedKeys,
    mapEnumToObject,
    removeDuplicates,
    removePrefix,
    type RemovePrefix,
    removeSuffix,
    type RemoveSuffix,
} from '@augment-vir/common';
import {ContrastLevelName} from '@electrovir/color/dist/data/contrast/contrast.js';
import {type ColorThemeColor, type themeDefaultKey} from 'theme-vir';
import {type UnionToTuple} from 'type-fest';
import {viraTheme} from './vira-color-theme.js';

const sortedContrastLevelNames = getEnumValues(ContrastLevelName).sort(
    (a, b) => Number(b.includes('-')) - Number(a.includes('-')),
);

/**
 * `ContrastLevelName` values with the values containing internal dashes to the beginning so they
 * can be correctly used with `RemoveSuffix`.
 *
 * @category Internal
 */
export type SortedContrastLevelName = [
    ...UnionToTuple<Extract<ContrastLevelName, `${string}-${string}`>>,
    ...UnionToTuple<Exclude<ContrastLevelName, `${string}-${string}`>>,
];

/**
 * The names of all colors in {@link viraTheme}.
 *
 * @category Internal
 */
export type ViraThemeColorName =
    Extract<
        keyof typeof viraTheme.colors,
        `vira-${string}`
    > extends `vira-${infer ColorPart}-${string}`
        ? ColorPart
        : never;

const viraThemeColorNames = removeDuplicates(
    filterMap(
        Object.keys(viraTheme.colors),
        (key) => key.split('-')[1],
        (mappedKey) => mappedKey !== 'default',
    ),
).filter(check.isTruthy) as ViraThemeColorName[];

/**
 * An enum of {@link ViraThemeColorName}.
 *
 * @category Internal
 */
export const ViraThemeColorName = arrayToObject(
    viraThemeColorNames,
    (colorKey) => {
        return {
            key: colorKey,
            value: colorKey,
        };
    },
    {
        useRequired: true,
    },
) satisfies Record<ViraThemeColorName, ViraThemeColorName> as {[Key in ViraThemeColorName]: Key};

/**
 * All {@link viraTheme} color pair keys.
 *
 * @category Internal
 */
export type AllViraThemeKeys = keyof typeof viraTheme.colors;

/**
 * All {@link viraTheme} color pair keys.
 *
 * @category Internal
 */
export const allViraThemeKeys = getObjectTypedKeys(viraTheme.colors);

/**
 * All {@link viraTheme} color pair keys with the contrast level suffix removed.
 *
 * @category Internal
 */
export type ViraThemeKeysWithoutContrastLevel = Exclude<
    RemoveSuffix<RemoveSuffix<AllViraThemeKeys, SortedContrastLevelName>, ['-']>,
    typeof themeDefaultKey
>;

/**
 * All {@link viraTheme} color pair grouped by their color name, pair name, and contrast level.
 *
 * @category Internal
 */
export type ViraThemeByKeys = {
    [ColorName in ViraThemeColorName]: {
        [PairName in RemovePrefix<ViraThemeKeysWithoutContrastLevel, `vira-${ColorName}-`>]: {
            [ContrastLevel in RemovePrefix<
                AllViraThemeKeys,
                `vira-${ColorName}-${PairName}-`
            >]: ColorThemeColor;
        };
    };
};

/**
 * All {@link viraTheme} color pair grouped by their color name, pair name, and contrast level.
 *
 * @category Internal
 */
export const viraThemeByKeys: ViraThemeByKeys = mapEnumToObject(ViraThemeColorName, (colorName) => {
    const colorPairKeys = removeDuplicates(
        filterMap(
            allViraThemeKeys,
            (key) => {
                return sortedContrastLevelNames.reduce(
                    (final, current) => {
                        return removeSuffix({
                            value: final,
                            suffix: `-${current}`,
                        });
                    },
                    removePrefix({
                        value: key,
                        prefix: `vira-${colorName}-`,
                    }),
                );
            },
            (mappedKey, originalKey) => {
                return originalKey.startsWith(`vira-${colorName}-`);
            },
        ),
    );

    return arrayToObject(colorPairKeys, (colorPairKey) => {
        return {
            key: colorPairKey,
            value: arrayToObject(getEnumValues(ContrastLevelName), (contrastLevel) => {
                const finalKey = `vira-${colorName}-${colorPairKey}-${contrastLevel}`;

                if (!check.hasKey(viraTheme.colors, finalKey)) {
                    return undefined;
                }

                return {
                    key: contrastLevel,
                    value: viraTheme.colors[finalKey],
                };
            }),
        };
    });
}) as AnyObject as ViraThemeByKeys;
