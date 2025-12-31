import {assert, assertWrap, check} from '@augment-vir/assert';
import {
    crossProduct,
    filterMap,
    getOrSet,
    log,
    mapObjectValues,
    removeDuplicates,
    stringify,
    type PartialWithUndefined,
    type RequiredAndNotNull,
} from '@augment-vir/common';
import {type CssVarDefinitions, type SingleCssVarDefinition} from 'lit-css-vars';
import {
    defineColorTheme,
    noRefColorInitToString,
    type ColorInit,
    type NoRefColorInit,
} from './color-theme.js';
import {
    contrastLevelLabel,
    ContrastLevelName,
    findClosestColor,
    findColorAtContrastLevel,
} from './contrast.js';

export type ColorPaletteVars = CssVarDefinitions<Record<`${string}-${string}-${number}`, any>>;

/** @category Internal */
export type PaletteColor = {
    suffix: string | undefined;
    prefix: string;
    colorName: string;
    definition: SingleCssVarDefinition;
    cssVarName: string;
};

/** @category Internal */
export type ColorGroups = Record<string, PaletteColor[]>;

/**
 * Black and white color values.
 *
 * @category Internal
 */
export const defaultOmittedColorGroupColorValues = [
    '#000000',
    '#ffffff',
    '#000',
    '#fff',
    'white',
    'black',
];

/** @category Internal */
export function groupColors(
    colors: Readonly<ColorPaletteVars>,
    /**
     * Color values to omit from the grouping. Defaults to
     * {@link defaultOmittedColorGroupColorValues}.
     *
     * @default defaultOmittedColorGroupColorValues
     */
    omittedColorValues: ReadonlyArray<string> = defaultOmittedColorGroupColorValues,
): ColorGroups {
    const colorGroups: ColorGroups = {};

    Object.values(colors).forEach((color) => {
        if (omittedColorValues.includes(color.default)) {
            return;
        }
        const paletteColor = extractPaletteColor(color);

        getOrSet(colorGroups, paletteColor.colorName, () => []).push(paletteColor);
    });

    return colorGroups;
}

export function extractPaletteColor(color: Readonly<SingleCssVarDefinition>): PaletteColor {
    const split = String(color.name).replace(/^-+/, '').split('-');
    const suffix = split.length > 2 ? split.at(-1) : undefined;
    const prefix = assertWrap.isTruthy(split[0]);
    // eslint-disable-next-line sonarjs/argument-type
    const colorName = split.slice(1, suffix ? -1 : undefined).join('-');

    return {
        suffix,
        prefix,
        colorName,
        definition: color,
        cssVarName: String(color.name),
    };
}

export function extractParam<const T extends PropertyKey>(
    possibleParams: ReadonlyArray<PropertyKey> | Readonly<Record<PropertyKey, boolean>>,
    {
        mapFrom,
        mapTo,
    }: Readonly<
        PartialWithUndefined<{
            mapTo: Record<string, T>;
            mapFrom: Record<T, any>;
        }>
    >,
): T[] {
    if (check.isArray(possibleParams)) {
        return removeDuplicates(
            possibleParams.map((param): T => {
                if (mapFrom && check.isKeyOf(param, mapFrom)) {
                    return param;
                } else if (mapTo && check.isKeyOf(param, mapTo) && mapTo[param] != undefined) {
                    return mapTo[param];
                } else {
                    throw new Error(`Unknown font weight: ${String(param)}`);
                }
            }),
        );
    } else {
        return extractParam(
            filterMap(
                Object.entries(possibleParams),
                ([
                    name,
                    enabled,
                ]) => {
                    if (enabled) {
                        /**
                         * This cast is okay because the recursive case (handling an array) will
                         * guard against bas names or weights.
                         */
                        return name;
                    } else {
                        return undefined;
                    }
                },
                check.isTruthy,
            ),
            {
                mapTo,
                mapFrom,
            },
        );
    }
}

export type ArrayOrSelectParam<T extends PropertyKey> =
    | ReadonlyArray<T>
    | Readonly<Partial<Record<T, boolean>>>;

export const defaultLightThemePair: RequiredAndNotNull<NoRefColorInit> = {
    background: 'white',
    foreground: 'black',
};

export const defaultContrastLevels: Readonly<ArrayOrSelectParam<ContrastLevelName>> = {
    [ContrastLevelName.BodyText]: true,
    [ContrastLevelName.Header]: true,
    [ContrastLevelName.Placeholder]: true,
    [ContrastLevelName.Decoration]: true,
};

export function buildLowLevelColorTheme(
    colorPalette: Readonly<ColorPaletteVars>,
    {
        defaultTheme = defaultLightThemePair,
        omittedColorValues = defaultOmittedColorGroupColorValues,
        crossContrastLevels = defaultContrastLevels,
    }: Readonly<
        PartialWithUndefined<{
            /**
             * The default theme colors for {@link defineColorTheme}. Defaults to
             * {@link defaultLightThemePair}.
             *
             * @default defaultLightThemePair
             */
            defaultTheme: RequiredAndNotNull<NoRefColorInit>;
            /**
             * All font weights to cross colors with. Defaults to {@link defaultContrastLevels}.
             *
             * @default defaultContrastLevels
             */
            crossContrastLevels: Readonly<ArrayOrSelectParam<ContrastLevelName>>;
            /**
             * Color values to omit from the grouping. Defaults to
             * {@link defaultOmittedColorGroupColorValues}.
             *
             * @default defaultOmittedColorGroupColorValues
             */
            omittedColorValues: ReadonlyArray<string>;
        }>
    > = {},
) {
    const contrastLevels = extractParam<ContrastLevelName>(crossContrastLevels, {
        mapFrom: contrastLevelLabel,
    });
    const colorGroups = groupColors(colorPalette, omittedColorValues);

    const themeColors = Object.fromEntries(
        Object.entries(colorGroups).flatMap(
            ([
                colorGroupName,
                colors,
            ]) => {
                assert.isLengthAtLeast(colors, 1);
                const colorStrings: string[] = colors.map((color) => color.definition.default);
                const allCrosses = crossProduct({
                    crossWith: [
                        'ahead-background',
                        'behind-background',
                        'ahead-foreground',
                        'behind-foreground',
                        'self-light-front',
                        'self-light-back',
                    ],
                    contrast: contrastLevels,
                    // fontWeight: fontWeights,
                });
                const firstColor = colors[0];
                const defaultForegroundString: string = noRefColorInitToString(
                    defaultTheme.foreground,
                );
                const defaultBackgroundString: string = noRefColorInitToString(
                    defaultTheme.background,
                );

                const lightestSelf = findClosestColor('white', colorStrings);

                return filterMap(
                    allCrosses,
                    (cross): [string, ColorInit] | undefined => {
                        const crossName = [
                            firstColor.prefix,
                            firstColor.colorName,
                            cross.crossWith,
                            cross.contrast,
                            // cross.fontWeight,
                        ].join('-');

                        const comparison =
                            cross.crossWith === 'ahead-background'
                                ? {
                                      foreground: colorStrings,
                                      background: defaultBackgroundString,
                                  }
                                : cross.crossWith === 'behind-background'
                                  ? {
                                        foreground: defaultBackgroundString,
                                        background: colorStrings,
                                    }
                                  : cross.crossWith === 'ahead-foreground'
                                    ? {
                                          foreground: colorStrings,
                                          background: defaultForegroundString,
                                      }
                                    : cross.crossWith === 'behind-foreground'
                                      ? {
                                            foreground: defaultForegroundString,
                                            background: colorStrings,
                                        }
                                      : cross.crossWith === 'self-light-back'
                                        ? {
                                              foreground: colorStrings,
                                              background: lightestSelf,
                                          }
                                        : {
                                              foreground: lightestSelf,
                                              background: colorStrings,
                                          };

                        const matchedColorString = findColorAtContrastLevel(
                            comparison,
                            cross.contrast,
                        );
                        const matchedColor = colors.find(
                            (color) => color.definition.default === matchedColorString,
                        );

                        if (!matchedColor) {
                            log.error(
                                `No valid '${colorGroupName}' color cross found for: ${stringify(cross)} with ${stringify(colorStrings)}`,
                            );
                            return undefined;
                        }

                        return [
                            crossName,
                            mapObjectValues(comparison, (key, value) => {
                                if (check.isString(value)) {
                                    return value;
                                } else {
                                    return matchedColor.definition.value;
                                }
                            }),
                        ];
                    },
                    check.isTruthy,
                );
            },
        ),
    );

    return defineColorTheme(defaultTheme, themeColors);
}
