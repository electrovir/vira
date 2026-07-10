import {check} from '@augment-vir/assert';
import {defineBookPage} from 'element-book';
import {classMap, css, html, listen} from 'element-vir';
import {
    viraColorVariants,
    viraEmphasisVariants,
    viraFontCssVars,
    viraSizeVariants,
    ViraTag,
    ViraThemeColorName,
} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const clickableVariants: ({
    label: string;
} & Omit<typeof ViraTag.InputsType, 'text'>)[] = [
    {
        label: 'basic',
        isClickable: undefined,
    },
    {
        label: 'selectable',
        isClickable: {
            selected: true,
        },
    },
    {
        label: 'cancellable',
        isClickable: {
            cancellable: true,
        },
    },
    {
        label: 'disabled',
        disabled: true,
        isClickable: {
            selected: true,
        },
    },
];

export const viraTagBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraTag.tagName,
    descriptionParagraphs: [
        'A tag element with selectable, cancellable, size, emphasis, and color variants.',
    ],
    defineExamples({defineExample}) {
        viraSizeVariants.forEach((size) => {
            defineExample({
                title: size,
                styles: css`
                    table {
                        border-collapse: collapse;
                    }

                    th,
                    td {
                        padding: 8px;
                        text-align: center;
                    }

                    th {
                        font-weight: ${viraFontCssVars['vira-font-weight-normal'].value};
                    }

                    .cancelled {
                        visibility: hidden;
                    }
                `,
                state() {
                    return {
                        clicked: {} as Record<string, boolean>,
                    };
                },
                render({state, updateState}) {
                    return clickableVariants.map(({label, ...inputs}) => {
                        return html`
                            <h3>${label}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        ${viraColorVariants.map(
                                            (color) => html`
                                                <th>${color}</th>
                                            `,
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${viraEmphasisVariants.map(
                                        (emphasis) => html`
                                            <tr>
                                                <th>${emphasis}</th>
                                                ${viraColorVariants.map((color) => {
                                                    const key = [
                                                        label,
                                                        emphasis,
                                                        color,
                                                    ].join('-');

                                                    const innerIsClickable = check.isBoolean(
                                                        inputs.isClickable?.selected,
                                                    )
                                                        ? {
                                                              selected: !state.clicked[key],
                                                          }
                                                        : inputs.isClickable;

                                                    const tagTemplate = html`
                                                        <${ViraTag.assign({
                                                            text: 'Label',
                                                            ...inputs,
                                                            size,
                                                            emphasis,
                                                            color,
                                                            isClickable: innerIsClickable,
                                                        })}
                                                            class=${classMap({
                                                                cancelled:
                                                                    !!inputs.isClickable
                                                                        ?.cancellable &&
                                                                    !!state.clicked[key],
                                                            })}
                                                            ${listen(ViraTag.events.cancel, () => {
                                                                updateState({
                                                                    clicked: {
                                                                        ...state.clicked,
                                                                        [key]: true,
                                                                    },
                                                                });
                                                            })}
                                                            ${listen(
                                                                ViraTag.events.toggle,
                                                                (event) => {
                                                                    updateState({
                                                                        clicked: {
                                                                            ...state.clicked,
                                                                            [key]: !event.detail,
                                                                        },
                                                                    });
                                                                },
                                                            )}
                                                        ></${ViraTag}>
                                                    `;

                                                    return html`
                                                        <td>${tagTemplate}</td>
                                                    `;
                                                })}
                                            </tr>
                                        `,
                                    )}
                                </tbody>
                            </table>
                        `;
                    });
                },
            });
        });

        defineExample({
            title: 'theme colors',
            styles: css`
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
            `,
            render() {
                return html`
                    <div class="row">
                        ${Object.values(ViraThemeColorName).map(
                            (color) => html`
                                <${ViraTag.assign({
                                    text: color,
                                    color,
                                })}></${ViraTag}>
                            `,
                        )}
                    </div>
                `;
            },
        });
    },
});
