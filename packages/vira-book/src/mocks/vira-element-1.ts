import {defineElement, html} from 'element-vir';

export const ViraElement1Mock = defineElement()({
    tagName: 'vira-element-1-mock',
    render() {
        return html`
            First element
        `;
    },
});
