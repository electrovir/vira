import {assert, check} from '@augment-vir/assert';
import {
    getObjectTypedEntries,
    log,
    type RequiredAndNotNull,
    type Values,
} from '@augment-vir/common';
import {type CSSResult} from 'element-vir';
import {
    type CssVarDefinitions,
    type CssVarName,
    type CssVarsSetup,
    defineCssVars,
    type SingleCssVarDefinition,
} from 'lit-css-vars';
import {type RequireAtLeastOne, type Writable} from 'type-fest';

/**
 * Reference another color from this same definition inside {@link ColorInitValue}
 *
 * @category Internal
 */
export type ColorInitReference = RequireAtLeastOne<{
    refForeground: CssVarName;
    refBackground: CssVarName;
    refDefaultBackground: true;
    refDefaultForeground: true;
}>;

/**
 * All possible types for {@link ColorInit}.
 *
 * @category Internal
 */
export type ColorInitValue =
    | string
    | number
    | CSSResult
    | ColorInitReference
    | SingleCssVarDefinition;

/**
 * An individual theme color init.
 *
 * @category Internal
 */
export type ColorInit = RequireAtLeastOne<{
    foreground: ColorInitValue;
    background: ColorInitValue;
}>;

/**
 * Same as {@link ColorInit} but without references.
 *
 * @category Internal
 */
export type NoRefColorInit = RequireAtLeastOne<{
    foreground: Exclude<ColorInitValue, ColorInitReference>;
    background: Exclude<ColorInitValue, ColorInitReference>;
}>;

/**
 * A defined individual color from a color theme.
 *
 * @category Internal
 */
export type ColorThemeColor<
    Init extends ColorInit = ColorInit,
    Name extends CssVarName = CssVarName,
> = {
    foreground: SingleCssVarDefinition;
    background: SingleCssVarDefinition;
    /**
     * The name of this theme color within the theme itself. (This is not any of the CSS variable
     * names.)
     */
    name: Name;
    init: Init;
};

/**
 * Base input type for the type parameter in {@link defineColorTheme}.
 *
 * @category Internal
 */
export type ColorThemeInit = Record<CssVarName, ColorInit>;

/**
 * A finalized color theme, output from {@link defineColorTheme}.
 *
 * @category Internal
 */
export type ColorTheme<Init extends ColorThemeInit = ColorThemeInit> = {
    colors: AllColorThemeColors<Init>;
    inverse: AllColorThemeColors<Init>;
    /** The original init object for this theme. */
    init: {
        colors: Init;
        default: RequiredAndNotNull<NoRefColorInit>;
    };
};

/**
 * All colors within a {@link ColorTheme}.
 *
 * @category Internal
 */
export type AllColorThemeColors<Init extends ColorThemeInit = ColorThemeInit> = {
    [ColorName in keyof Init as ColorName extends CssVarName
        ? ColorName
        : never]: ColorName extends CssVarName
        ? Init[ColorName] extends ColorInit
            ? ColorThemeColor<Init[ColorName], ColorName>
            : never
        : never;
} & {
    [themeDefaultKey]: ColorThemeColor<RequiredAndNotNull<NoRefColorInit>, typeof themeDefaultKey>;
};

/** @category Internal */
export function noRefColorInitToString(init: Values<NoRefColorInit>): string {
    if (check.isPrimitive(init) || '_$cssResult$' in init) {
        return String(init);
    } else {
        return init.default;
    }
}

/**
 * Handles a color init value.
 *
 * @category Internal
 */
export function createColorCssVarDefault(
    fromName: string,
    init: ColorInitValue,
    defaultInit: RequiredAndNotNull<NoRefColorInit>,
    colorsInit: ColorThemeInit,
): string | number | CSSResult {
    if (check.isPrimitive(init) || '_$cssResult$' in init) {
        return init;
    } else if ('refDefaultBackground' in init) {
        return '--var(default-bg)';
    } else if ('refDefaultForeground' in init) {
        return '--var(default-fg)';
    } else if ('refBackground' in init || 'refForeground' in init) {
        const referenceKey: keyof ColorInitReference | undefined = check.hasKey(
            init,
            'refBackground' satisfies keyof ColorInitReference,
        )
            ? 'refBackground'
            : check.hasKey(init, 'refForeground' satisfies keyof ColorInitReference)
              ? 'refForeground'
              : undefined;
        const reference =
            referenceKey && check.hasKey(init, referenceKey) ? init[referenceKey] : undefined;

        const layerKey = referenceKey === 'refBackground' ? 'background' : 'foreground';
        const referenced = reference && colorsInit[reference];
        if (!referenced) {
            throw new Error(
                `Color theme ${referenceKey} reference '${reference}' does not exist. (Referenced from '${fromName}'.)`,
            );
        }

        const colorValue =
            referenced[layerKey] ||
            (layerKey === 'foreground'
                ? createColorCssVarDefault(
                      'default-fg',
                      defaultInit.foreground,
                      defaultInit,
                      colorsInit,
                  )
                : createColorCssVarDefault(
                      'default-bg',
                      defaultInit.background,
                      defaultInit,
                      colorsInit,
                  ));

        return `var(--${reference}-${layerKey === 'foreground' ? 'fg' : 'bg'}, ${createColorCssVarDefault(reference, colorValue, defaultInit, colorsInit)})`;
    } else {
        return init.value;
    }
}

/**
 * Default foreground/background color theme used in {@link ColorTheme}. Do not define a theme color
 * with this name!
 *
 * @category Internal
 */
export const themeDefaultKey = 'theme-default' satisfies CssVarName;

/**
 * Define a color theme.
 *
 * @category Color Theme
 */
export function defineColorTheme<const Init extends ColorThemeInit>(
    defaultInit: RequiredAndNotNull<NoRefColorInit>,
    allColorsInit: Init,
): ColorTheme<Init> {
    try {
        if (themeDefaultKey in allColorsInit) {
            throw new Error(
                `Cannot define theme color by name '${themeDefaultKey}', it is used internally.`,
            );
        }

        const defaultColors = defineCssVars({
            'default-fg': createColorCssVarDefault(
                'default-fg',
                defaultInit.foreground,
                defaultInit,
                allColorsInit,
            ),
            'default-bg': createColorCssVarDefault(
                'default-bg',
                defaultInit.background,
                defaultInit,
                allColorsInit,
            ),
            'default-inverse-fg': createColorCssVarDefault(
                'default-inverse-fg',
                defaultInit.background,
                defaultInit,
                allColorsInit,
            ),
            'default-inverse-bg': createColorCssVarDefault(
                'default-inverse-bg',
                defaultInit.foreground,
                defaultInit,
                allColorsInit,
            ),
        });

        const cssVarsSetup: CssVarsSetup = getObjectTypedEntries(
            allColorsInit as ColorThemeInit,
        ).reduce(
            (
                accum,
                [
                    colorName,
                    colorInit,
                ],
            ) => {
                const names = createCssVarNames(colorName);

                accum[names.foreground] = colorInit.foreground
                    ? createColorCssVarDefault(
                          [
                              colorName,
                              'foreground',
                          ].join(' '),
                          colorInit.foreground,
                          defaultInit,
                          allColorsInit,
                      )
                    : `var(${defaultColors['default-fg'].name}, ${defaultColors['default-fg'].default})`;
                accum[names.background] = colorInit.background
                    ? createColorCssVarDefault(
                          [
                              colorName,
                              'background',
                          ].join(' '),
                          colorInit.background,
                          defaultInit,
                          allColorsInit,
                      )
                    : `var(${defaultColors['default-bg'].name}, ${defaultColors['default-bg'].default})`;

                accum[names.foregroundInverse] =
                    `var(--${names.background}, ${accum[names.background]})`;
                accum[names.backgroundInverse] =
                    `var(--${names.foreground}, ${accum[names.foreground]})`;

                return accum;
            },
            {} as Writable<CssVarsSetup>,
        );

        /**
         * This has multiple `as` casts because `defineCssVars` complains that `cssVarsSetup` is too
         * generic. That is indeed true, but in this use case we do not care because the resulting
         * `cssVars` object is not directly exposed.
         */
        const cssVars = defineCssVars(
            cssVarsSetup as any,
        ) as unknown as CssVarDefinitions<CssVarsSetup>;

        const colors: Record<string, ColorThemeColor> = {};
        const inverseColors: Record<string, ColorThemeColor> = {};

        getObjectTypedEntries(allColorsInit as Record<CssVarName, ColorInit>).forEach(
            ([
                colorName,
                colorInit,
            ]) => {
                assert.isString(colorName);

                const names = createCssVarNames(colorName);

                const foreground = cssVars[names.foreground];
                const background = cssVars[names.background];
                const foregroundInverse = cssVars[names.foregroundInverse];
                const backgroundInverse = cssVars[names.backgroundInverse];

                assert.isDefined(foreground);
                assert.isDefined(background);
                assert.isDefined(foregroundInverse);
                assert.isDefined(backgroundInverse);

                colors[colorName] = {
                    foreground,
                    background,
                    init: colorInit,
                    name: colorName,
                };

                inverseColors[colorName] = {
                    foreground: foregroundInverse,
                    background: backgroundInverse,
                    init: colorInit,
                    name: colorName,
                };
            },
        );

        const themeDefaultColors: ColorTheme['colors'][typeof themeDefaultKey] = {
            foreground: defaultColors['default-fg'],
            background: defaultColors['default-bg'],
            init: defaultInit,
            name: themeDefaultKey,
        };

        const themeDefaultInverseColors: ColorTheme['inverse'][typeof themeDefaultKey] = {
            ...themeDefaultColors,
            foreground: defaultColors['default-inverse-fg'],
            background: defaultColors['default-inverse-bg'],
        };

        return {
            colors: {
                [themeDefaultKey]: themeDefaultColors,
                ...colors,
            },
            inverse: {
                [themeDefaultKey]: themeDefaultInverseColors,
                ...inverseColors,
            },
            init: {
                colors: allColorsInit,
                default: defaultInit,
            },
        } as ColorTheme<Init>;
    } catch (error) {
        globalThis.setTimeout(() => log.error(error));
        throw error;
    }
}

function createCssVarNames(colorName: CssVarName) {
    return {
        foreground: [
            colorName,
            'fg',
        ].join('-') as CssVarName,
        background: [
            colorName,
            'bg',
        ].join('-') as CssVarName,
        foregroundInverse: [
            colorName,
            'inverse',
            'fg',
        ].join('-') as CssVarName,
        backgroundInverse: [
            colorName,
            'inverse',
            'bg',
        ].join('-') as CssVarName,
    };
}

export function generateThemeCode(theme: ColorTheme, paletteVarName?: string | undefined): string {
    const defaultInitCode = colorInitToCode(theme.init.default, 1, undefined, paletteVarName);
    const colorsInitCode = colorThemeInitToCode(
        theme.init.colors,
        1,
        theme.init.default,
        paletteVarName,
    );

    return `defineColorTheme(\n${defaultInitCode},\n${colorsInitCode},\n)`;
}

function tab(level: number): string {
    return '    '.repeat(level);
}

function colorInitValuesEqual(a: ColorInitValue, b: ColorInitValue): boolean {
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'string' || typeof a === 'number') {
        return a === b;
    }
    if ('_$cssResult$' in a && '_$cssResult$' in (b as object)) {
        return a.cssText === (b as CSSResult).cssText;
    }
    // For references and SingleCssVarDefinition, compare as JSON
    return JSON.stringify(a) === JSON.stringify(b);
}

function extractCssVarName(cssValue: string): string | undefined {
    const match = cssValue.match(/^var\(--([^,)]+)/);
    return match ? match[1] : undefined;
}

function colorInitValueToCode(
    value: ColorInitValue,
    indentLevel: number,
    paletteVarName: string | undefined,
): string {
    if (typeof value === 'string') {
        return `'${value}'`;
    } else if (typeof value === 'number') {
        return String(value);
    } else if ('_$cssResult$' in value) {
        const cssText = String(value);
        if (paletteVarName) {
            const varName = extractCssVarName(cssText);
            if (varName) {
                return `${paletteVarName}['${varName}']`;
            }
        }
        return `css\`${cssText}\``;
    } else if (
        'refBackground' in value ||
        'refForeground' in value ||
        'refDefaultBackground' in value ||
        'refDefaultForeground' in value
    ) {
        const entries: string[] = [];
        if ('refForeground' in value) {
            entries.push(`${tab(indentLevel + 1)}refForeground: '${value.refForeground}',`);
        }
        if ('refBackground' in value) {
            entries.push(`${tab(indentLevel + 1)}refBackground: '${value.refBackground}',`);
        }
        if ('refDefaultForeground' in value) {
            entries.push(`${tab(indentLevel + 1)}refDefaultForeground: true,`);
        }
        if ('refDefaultBackground' in value) {
            entries.push(`${tab(indentLevel + 1)}refDefaultBackground: true,`);
        }
        return `{\n${entries.join('\n')}\n${tab(indentLevel)}}`;
    } else {
        // SingleCssVarDefinition
        return `'${value.default}'`;
    }
}

function colorInitToCode(
    colorInit: ColorInit | NoRefColorInit,
    indentLevel: number,
    defaultInit: RequiredAndNotNull<NoRefColorInit> | undefined,
    paletteVarName: string | undefined,
): string {
    const entries: string[] = [];

    if (
        'foreground' in colorInit &&
        (!defaultInit || !colorInitValuesEqual(colorInit.foreground, defaultInit.foreground))
    ) {
        // Check if foreground matches default background (use refDefaultBackground)
        if (defaultInit && colorInitValuesEqual(colorInit.foreground, defaultInit.background)) {
            entries.push(
                `${tab(indentLevel + 1)}foreground: {\n${tab(indentLevel + 2)}refDefaultBackground: true,\n${tab(indentLevel + 1)}},`,
            );
        } else {
            entries.push(
                `${tab(indentLevel + 1)}foreground: ${colorInitValueToCode(colorInit.foreground, indentLevel + 1, paletteVarName)},`,
            );
        }
    }
    if (
        'background' in colorInit &&
        (!defaultInit || !colorInitValuesEqual(colorInit.background, defaultInit.background))
    ) {
        // Check if background matches default foreground (use refDefaultForeground)
        if (defaultInit && colorInitValuesEqual(colorInit.background, defaultInit.foreground)) {
            entries.push(
                `${tab(indentLevel + 1)}background: {\n${tab(indentLevel + 2)}refDefaultForeground: true,\n${tab(indentLevel + 1)}},`,
            );
        } else {
            entries.push(
                `${tab(indentLevel + 1)}background: ${colorInitValueToCode(colorInit.background, indentLevel + 1, paletteVarName)},`,
            );
        }
    }

    return `${tab(indentLevel)}{\n${entries.join('\n')}\n${tab(indentLevel)}}`;
}

function colorThemeInitToCode(
    colorsInit: ColorThemeInit,
    indentLevel: number,
    defaultInit: RequiredAndNotNull<NoRefColorInit>,
    paletteVarName: string | undefined,
): string {
    const entries = getObjectTypedEntries(colorsInit).map(
        ([
            colorName,
            colorInit,
        ]) => {
            return `${tab(indentLevel + 1)}'${colorName}': ${colorInitToCode(colorInit, indentLevel + 1, defaultInit, paletteVarName).trimStart()},`;
        },
    );

    return `${tab(indentLevel)}{\n${entries.join('\n')}\n${tab(indentLevel)}}`;
}
