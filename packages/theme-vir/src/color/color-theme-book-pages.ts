import {check} from '@augment-vir/assert';
import {groupArrayBy, type PartialWithUndefined} from '@augment-vir/common';
import {
    BookPageControlType,
    defineBookPage,
    definePageControl,
    type BookPage,
    type DefineExampleCallback,
} from 'element-book';
import {css, html, listen, nothing} from 'element-vir';
import {type EmptyObject} from 'type-fest';
import {type ColorThemeOverride} from './color-theme-override.js';
import {generateThemeCode, type ColorTheme} from './color-theme.js';
import {ThemeVirColorExample} from './elements/theme-vir-color-example.element.js';

/**
 * Create multiple element-book pages to showcase a theme its overrides (if any).
 *
 * @category Color Theme
 */
export function createColorThemeBookPages({
    parent,
    title,
    theme,
    hideInverseColors,
    overrides,
    useVerticalLayout,
    prefixGroupByCount = 0,
}: {
    title: string;
    theme: Readonly<ColorTheme>;
} & PartialWithUndefined<{
    parent: Readonly<BookPage>;
    hideInverseColors: boolean;
    overrides: ReadonlyArray<Readonly<ColorThemeOverride>>;
    useVerticalLayout: boolean;
    /**
     * The number of CSS variable name prefixes to group colors by.
     *
     * @default 0
     */
    prefixGroupByCount: number;
}>) {
    const themeControls = {
        'Show Var Names': definePageControl({
            controlType: BookPageControlType.Checkbox,
            initValue: false,
        }),
        'Show Contrast Tips': definePageControl({
            controlType: BookPageControlType.Checkbox,
            initValue: true,
        }),
    };

    const themeParentPage = defineBookPage({
        parent,
        title,
        controls: themeControls,
    });

    function buildThemeColorTemplate({
        controls,
        theme,
        themeColorName,
    }: {
        controls: Record<keyof typeof themeControls, boolean>;
        theme: Readonly<ColorTheme>;
        themeColorName: string;
    }) {
        const themeColor = check.isKeyOf(themeColorName, theme.colors)
            ? theme.colors[themeColorName]
            : undefined;
        const inverseThemeColor = check.isKeyOf(themeColorName, theme.inverse)
            ? theme.inverse[themeColorName]
            : undefined;
        if (!themeColor || !inverseThemeColor) {
            throw new Error(`No theme color found by name '${themeColorName}'`);
        }

        const normalTemplate = html`
            <${ThemeVirColorExample.assign({
                color: themeColor,
                showVarValues: true,
                showVarNames: controls['Show Var Names'],
                showContrast: controls['Show Contrast Tips'],
                fontWeight: 400,
            })}></${ThemeVirColorExample}>
        `;

        const inverseColor = hideInverseColors ? undefined : inverseThemeColor;

        const inverseTemplate = inverseColor
            ? html`
                  <${ThemeVirColorExample.assign({
                      color: inverseColor,
                      showVarValues: false,
                      showVarNames: controls['Show Var Names'],
                      showContrast: controls['Show Contrast Tips'],
                      fontWeight: 400,
                  })}></${ThemeVirColorExample}>
              `
            : nothing;

        return html`
            <div class="with-inverse">${normalTemplate}${inverseTemplate}</div>
        `;
    }

    function createThemePageExamples(
        defineExample: DefineExampleCallback<EmptyObject, typeof themeParentPage.controls>,
        theme: Readonly<ColorTheme>,
    ) {
        const groups = groupArrayBy(Object.keys(theme.colors), (value) => {
            if (prefixGroupByCount) {
                return value.split('-').slice(0, prefixGroupByCount).join('-');
            } else {
                return value;
            }
        });

        Object.entries(groups).forEach(
            ([
                groupName,
                group,
            ]) => {
                if (!group) {
                    return;
                }

                defineExample({
                    title: groupName,
                    styles: css`
                        :host {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                        }

                        .with-inverse {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                        }
                    `,
                    render({controls}) {
                        return group.map((entry) =>
                            buildThemeColorTemplate({
                                controls,
                                theme,
                                themeColorName: entry,
                            }),
                        );
                    },
                });
            },
        );
    }

    const descriptionParagraphs = [
        'Click a color preview to show CSS var names and values.',
    ];

    const defaultThemePage = defineBookPage({
        parent: themeParentPage,
        title: 'Default Theme',
        descriptionParagraphs,
        useVerticalExamples: useVerticalLayout,
        controls: {
            copy: definePageControl({
                controlType: BookPageControlType.Custom,
                content: html`
                    <button
                        ${listen('click', async () => {
                            const code = generateThemeCode(theme, 'viraColorPalette');
                            await navigator.clipboard.writeText(code);
                        })}
                    >
                        Copy Code
                    </button>
                `,
            }),
        },
        defineExamples({defineExample}) {
            createThemePageExamples(defineExample, theme);
        },
    });

    const overridePages = (overrides || []).map((override) => {
        return defineBookPage({
            parent: themeParentPage,
            title: override.name,
            useVerticalExamples: useVerticalLayout,
            descriptionParagraphs,
            defineExamples({defineExample}) {
                createThemePageExamples(defineExample, override.asTheme);
            },
        });
    });

    return [
        themeParentPage,
        defaultThemePage,
        ...overridePages,
    ];
}
