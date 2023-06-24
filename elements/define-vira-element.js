import { wrapDefineElement } from 'element-vir';
export const ViraTagNamePrefix = `vira-`;
export const { defineElement: defineViraElement, defineElementNoInputs: defineViraElementNoInputs } = wrapDefineElement({
    assertInputs: (inputs) => {
        if (!inputs.tagName.startsWith(ViraTagNamePrefix)) {
            throw new Error(`Tag name should start with '${ViraTagNamePrefix}' but got '${inputs.tagName}'`);
        }
    },
});
