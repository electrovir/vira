import { typedAssertInstanceOf } from '@augment-vir/browser-testing';
import { assert, fixture as renderFixture } from '@open-wc/testing';
import { assign, html } from 'element-vir';
import { setCssVarValue } from 'lit-css-vars';
import { Element24Icon } from '../../icons';
import { viraIconColorCssVars } from '../../icons/icon-color-css-vars';
import { ViraIcon } from './vira-icon.element';
describe(ViraIcon.tagName, () => {
    async function setupFixture() {
        const fixture = await renderFixture(html `
                <div><${ViraIcon} ${assign(ViraIcon, { icon: Element24Icon })}></${ViraIcon}></div>
            `);
        typedAssertInstanceOf(fixture, HTMLDivElement);
        const viraIconInstance = fixture.querySelector(ViraIcon.tagName);
        typedAssertInstanceOf(viraIconInstance, ViraIcon);
        return { wrapperDiv: fixture, viraIconInstance };
    }
    let GetColorType;
    (function (GetColorType) {
        GetColorType["Color"] = "color";
        GetColorType["Fill"] = "fill";
        GetColorType["Stroke"] = "stroke";
    })(GetColorType || (GetColorType = {}));
    function getColor(sourceElement, colorType) {
        return window.getComputedStyle(sourceElement).getPropertyValue(colorType);
    }
    describe('icon with stroke', () => {
        it('defaults to current color value', async () => {
            const { viraIconInstance } = await setupFixture();
            // default color (black)
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Fill), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Stroke), 'rgb(0, 0, 0)');
        });
        it("tracks its parent's color value", async () => {
            const { viraIconInstance, wrapperDiv } = await setupFixture();
            wrapperDiv.style.color = 'red';
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Color), 'rgb(255, 0, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Fill), 'rgb(255, 0, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Stroke), 'rgb(255, 0, 0)');
        });
        it('follows icon color CSS var', async () => {
            const { viraIconInstance, wrapperDiv } = await setupFixture();
            setCssVarValue({
                forCssVar: viraIconColorCssVars['vira-icon-color'],
                onElement: wrapperDiv,
                toValue: 'green',
            });
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Color), 'rgb(0, 128, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Fill), 'rgb(0, 128, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Stroke), 'rgb(0, 128, 0)');
        });
        it('follows stroke color CSS var', async () => {
            const { viraIconInstance, wrapperDiv } = await setupFixture();
            setCssVarValue({
                forCssVar: viraIconColorCssVars['vira-icon-stroke-color'],
                onElement: wrapperDiv,
                toValue: 'blue',
            });
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Fill), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Stroke), 'rgb(0, 0, 255)');
        });
        it('follows fill color CSS var', async () => {
            const { viraIconInstance, wrapperDiv } = await setupFixture();
            setCssVarValue({
                forCssVar: viraIconColorCssVars['vira-icon-fill-color'],
                onElement: wrapperDiv,
                toValue: 'white',
            });
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Fill), 'rgb(255, 255, 255)');
            assert.strictEqual(getColor(viraIconInstance, GetColorType.Stroke), 'rgb(0, 0, 0)');
        });
    });
});
