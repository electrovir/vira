import {check} from '@augment-vir/assert';
import {getOrSet, type PartialWithUndefined} from '@augment-vir/common';
import {defineBookPage, type BookPage} from 'element-book';
import {css, html, unsafeCSS} from 'element-vir';
import {type CssVarDefinitions, type CssVarsSetup, type SingleCssVarDefinition} from 'lit-css-vars';
import {type RequireExactlyOne} from 'type-fest';
import {viraColorPalette} from 'vira';
import {type FontSizeWeights} from './contrast.js';
import {ThemeVirColorExample} from './elements/theme-vir-color-example.element.js';

type InnerColorValue = {
    key: string;
    suffix: string;
    value: string;
    definition: SingleCssVarDefinition;
    varName: string;
};

type ContrastCell = {
    title: string;
    fontWeight: FontSizeWeights;
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

const omittedColors = [
    '#000000',
    '#ffffff',
    '#000',
    '#fff',
    'white',
    'black',
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
}: {
    parent: Readonly<BookPage>;
    title: string;
    colors: CssVarDefinitions<CssVarsSetup>;
} & PartialWithUndefined<{
    includeContrast: boolean;
}>) {
    const colorGroups: Record<string, InnerColorValue[]> = {};

    Object.entries(colors).forEach(
        ([
            key,
            color,
        ]) => {
            if (omittedColors.includes(color.default)) {
                return;
            }

            // eslint-disable-next-line sonarjs/slow-regex
            const groupName = key.replace(/-[\d-]+$/, '');
            const suffix = key.replace(groupName, '').replace(/^-+/, '');

            getOrSet(colorGroups, groupName, () => []).push({
                key,
                suffix,
                value: color.default,
                definition: color,
                varName: String(color.name),
            });
        },
    );

    const colorsPage = defineBookPage({
        parent,
        title,
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

                                & .var-name {
                                    font-size: 12px;
                                    color: ${viraColorPalette['vira-grey-50'].value};
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
                                                background-color: ${unsafeCSS(color.value)};
                                            `}
                                        ></div>
                                        <div class="var-name">${color.varName}</div>
                                    </div>
                                `;
                            });
                        },
                    });
                },
            );
        },
    });

    const blackWhiteContrastPage = defineBookPage({
        parent: colorsPage,
        title: `${title} Black White Contrast`,
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
                                gap: 24px;
                            }

                            td {
                                padding: 8px 0;
                                min-width: 170px;
                            }
                        `,
                        render() {
                            const colorRowTemplates = colors.map((color) => {
                                const cellTemplates = blackWhiteCells.map((cell) => {
                                    return html`
                                        <td>
                                            <${ThemeVirColorExample.assign({
                                                color: {
                                                    background: cell.background || color.definition,
                                                    foreground: cell.foreground || color.definition,
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

                            const headerCells = blackWhiteCells.map((cell) => {
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

    function createSelfContrastPage(fontWeight: FontSizeWeights) {
        return defineBookPage({
            parent: colorsPage,
            title: `${title} Self Contrast ${fontWeight}`,
            defineExamples({defineExample}) {
                Object.entries(colorGroups).forEach(
                    ([
                        groupName,
                        colors,
                    ]) => {
                        const selfContrastCells: ContrastCell[] = colors.map((color) => {
                            return {
                                fontWeight,
                                title: color.suffix,
                                foreground: color.definition,
                            };
                        });

                        defineExample({
                            title: groupName,
                            styles: css`
                                :host {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 24px;
                                }

                                td {
                                    padding: 8px 0;
                                    min-width: 170px;
                                }
                            `,
                            render() {
                                const colorRowTemplates = colors.map((color) => {
                                    const cellTemplates = selfContrastCells.map((cell) => {
                                        return html`
                                            <td>
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

                                const headerCells = selfContrastCells.map((cell) => {
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

    return [
        colorsPage,
        includeContrast ? blackWhiteContrastPage : undefined,
        includeContrast ? createSelfContrastPage(400) : undefined,
        includeContrast ? createSelfContrastPage(700) : undefined,
    ].filter(check.isTruthy);
}
