import {check} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {defineBookPage, type BookPage} from 'element-book';
import {css, html, unsafeCSS} from 'element-vir';
import {type SingleCssVarDefinition} from 'lit-css-vars';
import {type RequireExactlyOne} from 'type-fest';
import {noNativeSpacing, viraColorPalette} from 'vira';
import {
    buildLowLevelColorTheme,
    groupColors,
    type ColorPaletteVars,
    type PaletteColor,
} from './build-color-theme.js';
import {createColorThemeBookPages} from './color-theme-book-pages.js';
import {type FontWeight} from './contrast.js';
import {ThemeVirColorExample} from './elements/theme-vir-color-example.element.js';

type ContrastCell = {
    title: string;
    fontWeight: FontWeight;
} & RequireExactlyOne<{
    background: SingleCssVarDefinition;
    foreground: SingleCssVarDefinition;
}>;

const blackWhiteCells: ContrastCell[] = [
    {
        title: 'Black',
        fontWeight: 400,
        foreground: viraColorPalette['vira-black'],
    },
    {
        title: 'Black',
        fontWeight: 700,
        foreground: viraColorPalette['vira-black'],
    },
    {
        title: 'White',
        fontWeight: 400,
        foreground: viraColorPalette['vira-white'],
    },
    {
        title: 'White',
        fontWeight: 700,
        foreground: viraColorPalette['vira-white'],
    },
    {
        title: 'Black',
        fontWeight: 400,
        background: viraColorPalette['vira-black'],
    },
    {
        title: 'Black',
        fontWeight: 700,
        background: viraColorPalette['vira-black'],
    },
    {
        title: 'White',
        fontWeight: 400,
        background: viraColorPalette['vira-white'],
    },
    {
        title: 'White',
        fontWeight: 700,
        background: viraColorPalette['vira-white'],
    },
];

/**
 * Create multiple element-book pages to showcase a bunch of color CSS variables.
 *
 * @category Color Theme
 * @see `createColorThemeBookPages` for creating full color theme pages.
 */
export function createColorPaletteBookPages({
    colors,
    parent,
    title,
    includeContrast,
    includeTheme,
    useVerticalTheme,
}: {
    parent: Readonly<BookPage>;
    title: string;
    colors: Readonly<ColorPaletteVars>;
} & PartialWithUndefined<{
    includeContrast: boolean;
    includeTheme: boolean;
    useVerticalTheme: boolean;
}>): BookPage[] {
    const colorGroups = groupColors(colors);

    const topColorsPage = defineBookPage({
        parent,
        title,
    });

    const colorPalettePage = defineBookPage({
        parent: topColorsPage,
        title: 'Palette',
        defineExamples({defineExample}) {
            Object.entries(colorGroups).forEach(
                ([
                    groupName,
                    colors,
                ]) => {
                    defineExample({
                        title: groupName,
                        styles: css`
                            :host {
                                display: flex;
                                flex-direction: column;
                            }

                            .swatch-wrapper {
                                display: flex;
                                gap: 4px;
                                align-items: center;

                                & .swatch {
                                    width: 50px;
                                    height: 50px;
                                }

                                & .color-details {
                                    font-family: monospace;
                                    font-size: 12px;
                                    color: ${viraColorPalette['vira-grey-50'].value};
                                }

                                & .color-value {
                                    margin-left: 1ch;
                                }
                            }
                        `,
                        render() {
                            return colors.map((color) => {
                                return html`
                                    <div class="swatch-wrapper">
                                        <div
                                            class="swatch"
                                            style=${css`
                                                background-color: ${unsafeCSS(
                                                    color.definition.default,
                                                )};
                                            `}
                                        ></div>
                                        <p class="color-details">
                                            <span>${color.cssVarName}</span>
                                            <br />
                                            <span class="color-value">
                                                ${color.definition.default}
                                            </span>
                                        </p>
                                    </div>
                                `;
                            });
                        },
                    });
                },
            );
        },
    });

    const contrastsPage = defineBookPage({
        parent: topColorsPage,
        title: 'Palette Contrast',
    });

    function createContrastPage(
        contrastPageTitle: string,
        contrastCellsInput:
            | ReadonlyArray<Readonly<ContrastCell>>
            | ((currentColors: ReadonlyArray<Readonly<PaletteColor>>) => ContrastCell[]),
    ) {
        return defineBookPage({
            parent: contrastsPage,
            title: `${title} ${contrastPageTitle}`,
            defineExamples({defineExample}) {
                Object.entries(colorGroups).forEach(
                    ([
                        groupName,
                        colors,
                    ]) => {
                        const contrastCells = check.isArray(contrastCellsInput)
                            ? contrastCellsInput
                            : contrastCellsInput(colors);

                        defineExample({
                            title: groupName,
                            styles: css`
                                :host {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 24px;
                                }

                                p {
                                    ${noNativeSpacing}
                                }

                                .darkness-level {
                                    text-align: center;
                                    font-size: 12px;
                                    color: ${viraColorPalette['vira-grey-50'].value};
                                }

                                td {
                                    padding: 4px;
                                    min-width: 170px;
                                }
                            `,
                            render() {
                                const colorRowTemplates = colors.map((color) => {
                                    const cellTemplates = contrastCells.map((cell) => {
                                        return html`
                                            <td>
                                                <p class="darkness-level">${color.suffix}</p>
                                                <${ThemeVirColorExample.assign({
                                                    color: {
                                                        background:
                                                            cell.background || color.definition,
                                                        foreground:
                                                            cell.foreground || color.definition,
                                                    },
                                                    showVarValues: true,
                                                    showVarNames: false,
                                                    showContrast: true,
                                                    fontWeight: cell.fontWeight,
                                                })}></${ThemeVirColorExample}>
                                            </td>
                                        `;
                                    });

                                    return html`
                                        <tr>${cellTemplates}</tr>
                                    `;
                                });

                                const headerCells = contrastCells.map((cell) => {
                                    const layerText = cell.background ? 'in back' : 'in front';

                                    const title = [
                                        cell.title,
                                        `(${layerText})`,
                                        `(${cell.fontWeight})`,
                                    ].join(' ');

                                    return html`
                                        <th>${title}</th>
                                    `;
                                });

                                return html`
                                    <table cellspacing="0" cellpadding="0">
                                        <thead><tr>${headerCells}</tr></thead>
                                        <tbody>${colorRowTemplates}</tbody>
                                    </table>
                                `;
                            },
                        });
                    },
                );
            },
        });
    }

    const blackWhiteContrastPage = createContrastPage('Contrast Black White', blackWhiteCells);

    function createSelfContrastPage(fontWeight: FontWeight) {
        return createContrastPage(`Contrast Self ${fontWeight}`, (colors) =>
            colors.map((color) => {
                return {
                    fontWeight,
                    title: color.suffix || '',
                    foreground: color.definition,
                };
            }),
        );
    }

    return [
        topColorsPage,
        colorPalettePage,
        contrastsPage,
        includeContrast ? blackWhiteContrastPage : undefined,
        includeContrast ? createSelfContrastPage(400) : undefined,
        includeContrast ? createSelfContrastPage(700) : undefined,
        ...(includeTheme
            ? createColorThemeBookPages({
                  parent: topColorsPage,
                  title: 'Theme (auto)',
                  theme: buildLowLevelColorTheme(colors),
                  hideInverseColors: true,
                  useVerticalLayout: useVerticalTheme,
                  prefixGroupByCount: 2,
              })
            : []),
    ].filter(check.isTruthy);
}
