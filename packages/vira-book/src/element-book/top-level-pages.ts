import {BookPageControlType, defineBookPage, definePageControl} from 'element-book';

export const elementsBookPage = defineBookPage({
    title: 'Elements',
    parent: undefined,
});

export const stylesBookPage = defineBookPage({
    title: 'Styles',
    parent: undefined,
});

export const utilBookPage = defineBookPage({
    title: 'Util',
    parent: undefined,
});

export const iconsBookPage = defineBookPage({
    title: 'Icons',
    controls: {
        'Stroke Color': definePageControl({
            controlType: BookPageControlType.Color,
            initValue: '',
        }),
        'Fill Color': definePageControl({
            controlType: BookPageControlType.Color,
            initValue: '',
        }),
        'Stroke Width': definePageControl({
            controlType: BookPageControlType.Number,
            initValue: 1.5,
        }),
    },
    parent: undefined,
});
