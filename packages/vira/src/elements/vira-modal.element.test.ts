import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {css, html, nothing} from 'element-vir';
import {ViraModal} from './vira-modal.element.js';

async function renderModalWidth({isCapped}: Readonly<{isCapped: boolean}>) {
    const modal = await testWeb.render(html`
        <${ViraModal.assign({
            open: true,
            modalTitle: 'Title',
            modalSubtitle:
                'This subtitle is long enough that it would stretch the modal far past its width cap. '.repeat(
                    4,
                ),
        })}
            style=${isCapped
                ? css`
                      ${ViraModal.cssVars['vira-modal-max-width'].name}: 400px;
                  `
                : nothing}
        ></${ViraModal}>
    `);
    await waitForAnimationFrame();

    return assertWrap.isDefined(modal.shadowRoot?.querySelector('dialog')).getBoundingClientRect()
        .width;
}

describe(ViraModal.tagName, () => {
    it('caps its width with the max width css var', async () => {
        assert.isAtMost(
            await renderModalWidth({
                isCapped: true,
            }),
            400,
        );
    });

    it('grows past the cap without the css var', async () => {
        assert.isAbove(
            await renderModalWidth({
                isCapped: false,
            }),
            400,
        );
    });
});
