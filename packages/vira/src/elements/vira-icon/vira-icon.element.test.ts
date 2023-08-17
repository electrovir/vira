import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {setCssVarValue} from 'lit-css-vars';
import {StatusSuccess24Icon} from '../../icons';
import {viraIconCssVars} from '../../icons/icon-css-vars';
import {ViraIcon} from './vira-icon.element';

describe(ViraIcon.tagName, () => {
    async function setupFixture() {
        const fixture = await renderFixture(
            html`
                <div><${ViraIcon.assign({icon: StatusSuccess24Icon})}></${ViraIcon}></div>
            `,
        );

        typedAssertInstanceOf(fixture, HTMLDivElement);

        const viraIconInstance = fixture.querySelector(ViraIcon.tagName);

        typedAssertInstanceOf(viraIconInstance, ViraIcon);
        const internalSvg = viraIconInstance.shadowRoot.querySelector('circle');
        typedAssertInstanceOf(internalSvg, SVGCircleElement);

        return {
            wrapperDiv: fixture,
            viraIconInstance,
            getColor(colorType: GetColorType): string {
                return window.getComputedStyle(internalSvg).getPropertyValue(colorType);
            },
        };
    }

    enum GetColorType {
        Color = 'color',
        Fill = 'fill',
        Stroke = 'stroke',
    }

    describe('icon with stroke', () => {
        it('defaults to current color value', async () => {
            const {getColor} = await setupFixture();

            /** Default color (black) */
            assert.strictEqual(getColor(GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(GetColorType.Fill), 'none');
            assert.strictEqual(getColor(GetColorType.Stroke), 'rgb(0, 0, 0)');
        });

        it("tracks its parent's color value", async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            wrapperDiv.style.color = 'red';

            assert.strictEqual(getColor(GetColorType.Color), 'rgb(255, 0, 0)');
            assert.strictEqual(getColor(GetColorType.Fill), 'none');
            assert.strictEqual(getColor(GetColorType.Stroke), 'rgb(255, 0, 0)');
        });

        it('follows stroke color CSS var', async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: viraIconCssVars['vira-icon-stroke-color'],
                onElement: wrapperDiv,
                toValue: 'blue',
            });

            assert.strictEqual(getColor(GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(GetColorType.Fill), 'none');
            assert.strictEqual(getColor(GetColorType.Stroke), 'rgb(0, 0, 255)');
        });

        it('follows fill color CSS var', async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: viraIconCssVars['vira-icon-fill-color'],
                onElement: wrapperDiv,
                toValue: 'white',
            });

            assert.strictEqual(getColor(GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(GetColorType.Fill), 'rgb(255, 255, 255)');
            assert.strictEqual(getColor(GetColorType.Stroke), 'rgb(0, 0, 0)');
        });
    });
});
