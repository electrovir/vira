import {
    defineElementBookChapter,
    defineElementBookPage,
    ElementBookPageControlTypeEnum,
} from 'element-book';
import {assign, css, html, unsafeCSS} from 'element-vir';
import {ViraIcon} from '../elements/vira-icon/vira-icon.element';
import {viraIconColorCssVars} from './icon-color-css-vars';
import {allIconsByName} from './index';

const iconsBookChapter = defineElementBookChapter({
    parent: undefined,
    title: 'Icons',
});

const allIconsBookPage = defineElementBookPage({
    title: 'All Icons',
    parent: iconsBookChapter,
    controls: {
        'Icon Color': {
            controlType: ElementBookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Stroke Color': {
            controlType: ElementBookPageControlTypeEnum.Text,
            initValue: '',
        },
        'Fill Color': {
            controlType: ElementBookPageControlTypeEnum.Text,
            initValue: '',
        },
    },
    defineExamplesCallback({defineExample}) {
        Object.values(allIconsByName).forEach((icon) => {
            defineExample({
                title: icon.name,
                renderCallback({controls}) {
                    const styles = css`
                        ${viraIconColorCssVars['vira-icon-color'].name}: ${unsafeCSS(
                            controls['Icon Color'] || 'inherit',
                        )};
                        ${viraIconColorCssVars['vira-icon-fill-color'].name}: ${unsafeCSS(
                            controls['Fill Color'] || 'inherit',
                        )};
                        ${viraIconColorCssVars['vira-icon-stroke-color'].name}: ${unsafeCSS(
                            controls['Stroke Color'] || 'inherit',
                        )};
                    `;

                    return html`
                        <${ViraIcon} style=${styles} ${assign(ViraIcon, {icon})}></${ViraIcon}>
                    `;
                },
            });
        });
    },
});

export const iconBookEntries = [
    iconsBookChapter,
    allIconsBookPage,
];
