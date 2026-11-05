import { i as defineElement, t as html } from "./vir-html-DUnuN7Eq.js";
// src/mocks/vira-element-2.ts
var ViraElement2Mock = defineElement()({
	tagName: "vira-element-2-mock",
	render({ inputs }) {
		return html`
            Second element ${inputs.userName}
        `;
	}
});
export { ViraElement2Mock };
