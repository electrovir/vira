import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {css, html, unsafeCSS} from 'element-vir';
import {ViraIcon} from '../elements/vira-icon/vira-icon.element';
import {viraIconColorCssVars} from './icon-color-css-vars';
import {allIconsByName} from './index';

export const iconsBookPage = defineBookPage({
    title: 'Icons',
    parent: undefined,
    controls: {
        'Icon Color': definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        }),
        'Stroke Color': definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        }),
        'Fill Color': definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        }),
    },
    elementExamplesCallback({defineExample}) {
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
                        <${ViraIcon.assign({icon})} style=${styles}></${ViraIcon}>
                    `;
                },
            });
        });
    },
});
