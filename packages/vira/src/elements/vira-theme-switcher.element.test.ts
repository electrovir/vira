import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, listen} from 'element-vir';
import {ViraThemeSelection} from '../util/vira-theme-client.js';
import {ViraThemeSwitcher, type ViraThemeSwitcherClient} from './vira-theme-switcher.element.js';

function createFakeThemeClient() {
    const fakeClient: ViraThemeSwitcherClient & {
        selectedTheme: ViraThemeSelection;
    } = {
        selectedTheme: ViraThemeSelection.Auto,
        getCurrentTheme() {
            return this.selectedTheme;
        },
        setSelectedTheme(selection: ViraThemeSelection) {
            this.selectedTheme = selection;
        },
    };

    return fakeClient;
}

describe(ViraThemeSwitcher.tagName, () => {
    it('labels each button for assistive technology', async () => {
        const fixture = await testWeb.render(html`
            <${ViraThemeSwitcher.assign({
                themeClient: createFakeThemeClient(),
            })}></${ViraThemeSwitcher}>
        `);

        assert.instanceOf(fixture, ViraThemeSwitcher);

        assert.deepEquals(
            [...fixture.shadowRoot.querySelectorAll('button')].map((button) => {
                return button.getAttribute('aria-label');
            }),
            [
                'Light',
                'Dark',
                'Auto',
            ],
        );
    });

    it('sets the theme on the client and fires themeSelect', async () => {
        const themeClient = createFakeThemeClient();
        const selections: ViraThemeSelection[] = [];

        const fixture = await testWeb.render(html`
            <${ViraThemeSwitcher.assign({
                themeClient,
            })}
                ${listen(ViraThemeSwitcher.events.themeSelect, (event) => {
                    selections.push(event.detail);
                })}
            ></${ViraThemeSwitcher}>
        `);

        assert.instanceOf(fixture, ViraThemeSwitcher);

        const darkButton = fixture.shadowRoot.querySelector('button[aria-label="Dark"]');
        assert.instanceOf(darkButton, HTMLButtonElement);
        darkButton.click();

        assert.deepEquals(
            {
                clientTheme: themeClient.selectedTheme,
                selections,
            },
            {
                clientTheme: ViraThemeSelection.Dark,
                selections: [
                    ViraThemeSelection.Dark,
                ],
            },
        );
    });
});
