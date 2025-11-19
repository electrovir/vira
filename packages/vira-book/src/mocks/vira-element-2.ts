import {defineElement, html} from 'element-vir';

export const ViraElement2Mock = defineElement<{
    userName: string;
}>()({
    tagName: 'vira-element-2-mock',
    render({inputs}) {
        return html`
            Second element ${inputs.userName}
        `;
    },
});
