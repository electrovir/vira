import {addPx, getObjectTypedValues} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html, unsafeCSS} from 'element-vir';
import {
    type ViraIconSvg,
    ViraIcon,
    all16IconsByName,
    all24IconsByName,
    lucideIcons,
    noNativeFormStyles,
    viraFormCssVars,
    viraIconCssVars,
} from 'vira';
import {iconsBookPage} from './top-level-pages.js';

function defineIconExamples(
    icons: Readonly<Record<string, ViraIconSvg>>,
    defineExample: Parameters<
        NonNullable<Parameters<typeof defineBookPage>[0]['defineExamples']>
    >[0]['defineExample'],
) {
    getObjectTypedValues(icons).forEach((icon) => {
        defineExample({
            title: icon.name,
            styles: css`
                button {
                    ${noNativeFormStyles}
                    display: flex;
                    padding: 8px;
                    border-radius: ${viraFormCssVars['vira-form-radius'].value};
                    cursor: pointer;

                    &:hover {
                        background-color: #f2f2f2;

                        & ${ViraIcon} {
                            border-color: red;
                        }
                    }

                    &:active {
                        background-color: #999999;

                        & ${ViraIcon} {
                            border-color: transparent;
                        }
                    }
                }

                ${ViraIcon} {
                    border: 1px solid transparent;
                }
            `,
            render({controls}) {
                const styles = css`
                    ${viraIconCssVars['vira-icon-fill-color'].name}: ${unsafeCSS(
                        controls['Fill Color'] || 'inherit',
                    )};
                    ${viraIconCssVars['vira-icon-stroke-color'].name}: ${unsafeCSS(
                        controls['Stroke Color'] || 'inherit',
                    )};
                    ${viraIconCssVars['vira-icon-stroke-width'].name}: ${unsafeCSS(
                        controls['Stroke Width'] ? addPx(controls['Stroke Width']) : 'inherit',
                    )};
                `;

                return html`
                    <button>
                        <${ViraIcon.assign({
                            icon,
                        })}
                            style=${styles}
                        ></${ViraIcon}>
                    </button>
                `;
            },
        });
    });
}

export const icons16BookPage = defineBookPage({
    title: '16px Icons',
    parent: iconsBookPage,
    defineExamples({defineExample}) {
        defineIconExamples(all16IconsByName, defineExample);
    },
});

export const icons24BookPage = defineBookPage({
    title: '24px Icons',
    parent: iconsBookPage,
    defineExamples({defineExample}) {
        defineIconExamples(all24IconsByName, defineExample);
    },
});

export const lucideIconsBookPage = defineBookPage({
    title: 'Lucide Icons',
    parent: iconsBookPage,
    defineExamples({defineExample}) {
        defineIconExamples(lucideIcons, defineExample);
    },
});
