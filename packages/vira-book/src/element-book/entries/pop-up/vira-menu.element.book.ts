import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {SpaRouter} from 'spa-router-vir';
import {ViraMenu} from 'vira';
import {elementsBookPage} from '../../top-level-pages.js';

const items = [
    {
        id: 1,
        label: 'one',
    },
    {
        id: 2,
        label: 'two',
    },
    {
        id: 3,
        label: 'three',
    },
] as const;

const examples: {title: string; inputs?: Partial<typeof ViraMenu.InputsType> | undefined}[] = [
    {
        title: 'basic',
    },
    {
        title: 'with selection',
        inputs: {
            selected: [
                2,
            ],
        },
    },
    {
        title: 'with a link',
        inputs: {
            items: [
                ...items,
                {
                    id: 4,
                    label: 'link here',
                    route: {
                        route: {
                            paths: [
                                'test',
                            ],
                        },
                        router: new SpaRouter({
                            sanitizeRoute(rawRoute) {
                                return rawRoute;
                            },
                        }),
                    },
                },
            ],
        },
    },
    {
        title: 'with multi selection',
        inputs: {
            isMultiSelect: true,
            selected: [
                2,
            ],
        },
    },
    {
        title: 'with custom template',
        inputs: {
            items: [
                ...items,
                {
                    id: 4,
                    disableDefaultPointerStyles: true,
                    label: html`
                        <span
                            style=${css`
                                color: blue;
                            `}
                        >
                            Custom Item
                        </span>
                    `,
                },
            ],
        },
    },
];

export const viraMenuOptionsBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraMenu.tagName,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                render() {
                    return html`
                        <${ViraMenu.assign({
                            isMultiSelect: false,
                            navController: undefined,
                            items,
                            selected: [],
                            ...example.inputs,
                        })}></${ViraMenu}>
                    `;
                },
            });
        });
    },
});
