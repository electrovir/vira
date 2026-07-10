import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {
    Upload16Icon,
    Upload24Icon,
    ViraButton,
    ViraColorVariant,
    viraColorVariants,
    viraEmphasisVariants,
    viraFontCssVars,
    viraSizeVariants,
    ViraThemeColorName,
} from 'vira';
import {elementsBookPage} from '../top-level-pages.js';

const buttonVariants: {
    label: string;
    extraInputs: Omit<typeof ViraButton.InputsType, 'buttonSize' | 'buttonEmphasis' | 'color'>;
}[] = [
    {
        label: 'basic',
        extraInputs: {},
    },
    {
        label: 'with 24px icon',
        extraInputs: {
            icon: Upload24Icon,
        },
    },
    {
        label: 'with 16px icon',
        extraInputs: {
            icon: Upload16Icon,
        },
    },
    {
        label: 'only 24px icon',
        extraInputs: {
            icon: Upload24Icon,
            text: '',
        },
    },
    {
        label: 'only 16px icon',
        extraInputs: {
            icon: Upload16Icon,
            text: '',
        },
    },
    {
        label: 'disabled',
        extraInputs: {
            isDisabled: true,
        },
    },
    {
        label: 'menu caret',
        extraInputs: {
            showMenuCaret: true,
        },
    },
];

const tableStyles = css`
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
`;

export const viraButtonBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraButton.tagName,
    descriptionParagraphs: [
        'Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!',
    ],
    defineExamples({defineExample}) {
        viraSizeVariants.forEach((size) => {
            defineExample({
                title: size,
                styles: tableStyles,
                render() {
                    return buttonVariants.map(({label, extraInputs}) => {
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
                                                    return html`
                                                        <td>
                                                            <${ViraButton.assign({
                                                                text: 'Button',
                                                                ...extraInputs,
                                                                buttonSize: size,
                                                                buttonEmphasis: emphasis,
                                                                color,
                                                            })}></${ViraButton}>
                                                        </td>
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
            title: 'customized colors',
            styles: css`
                :host {
                    ${ViraButton.cssVars['vira-button-text-color'].name}: purple;
                    ${ViraButton.cssVars['vira-button-background-color'].name}: pink;
                    ${ViraButton.cssVars['vira-button-border-color'].name}: magenta;

                    ${ViraButton.cssVars['vira-button-hover-text-color'].name}: white;
                    ${ViraButton.cssVars['vira-button-hover-background-color'].name}: orange;
                    ${ViraButton.cssVars['vira-button-hover-border-color'].name}: red;

                    ${ViraButton.cssVars['vira-button-active-text-color'].name}: black;
                    ${ViraButton.cssVars['vira-button-active-background-color'].name}: yellow;
                    ${ViraButton.cssVars['vira-button-active-border-color'].name}: goldenrod;

                    ${ViraButton.cssVars['vira-button-disabled-text-color'].name}: gray;
                    ${ViraButton.cssVars['vira-button-disabled-background-color'].name}: lightgray;
                    ${ViraButton.cssVars['vira-button-disabled-border-color'].name}: darkgray;
                }
            `,
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'hello',
                        color: ViraColorVariant.Custom,
                    })}></${ViraButton}>
                `;
            },
        });

        defineExample({
            title: 'text wrapping',
            styles: css`
                ${ViraButton} {
                    max-width: 120px;
                }
            `,
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'This is a long button label that wraps',
                    })}></${ViraButton}>
                `;
            },
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
                                <${ViraButton.assign({
                                    text: color,
                                    color,
                                })}></${ViraButton}>
                            `,
                        )}
                    </div>
                `;
            },
        });
    },
});
