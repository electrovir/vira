import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {ViraThemeAppliedEvent, ViraThemeClient, ViraThemeSelection} from './vira-theme-client.js';

describe(ViraThemeClient.name, () => {
    it('loads from and saves to custom storage', () => {
        const savedSelections: ViraThemeSelection[] = [];
        const appliedDarkThemes: boolean[] = [];
        const themeClient = new ViraThemeClient({
            applyTheme({useDarkTheme}) {
                appliedDarkThemes.push(useDarkTheme);
            },
            storage: {
                init: ViraThemeSelection.Dark,
                save(selection) {
                    savedSelections.push(selection);
                },
            },
        });

        try {
            themeClient.setSelectedTheme(ViraThemeSelection.Light);

            assert.deepEquals(
                {
                    currentTheme: themeClient.getCurrentTheme(),
                    appliedTheme: themeClient.getAppliedTheme(),
                    savedSelections,
                    appliedDarkThemes,
                },
                {
                    currentTheme: ViraThemeSelection.Light,
                    appliedTheme: ViraThemeSelection.Light,
                    savedSelections: [
                        ViraThemeSelection.Light,
                    ],
                    appliedDarkThemes: [
                        true,
                        false,
                    ],
                },
            );
        } finally {
            themeClient.destroy();
        }
    });

    it('only fires an applied event when the applied theme changes', () => {
        const themeClient = new ViraThemeClient({
            applyTheme() {},
            storage: {
                init: ViraThemeSelection.Light,
                save() {},
            },
        });
        const appliedThemes: ViraThemeSelection[] = [];
        themeClient.listen(ViraThemeAppliedEvent, (event) => {
            appliedThemes.push(event.detail);
        });

        try {
            themeClient.setSelectedTheme(ViraThemeSelection.Dark);
            themeClient.setSelectedTheme(ViraThemeSelection.Dark);
            themeClient.setSelectedTheme(ViraThemeSelection.Light);

            assert.deepEquals(appliedThemes, [
                ViraThemeSelection.Dark,
                ViraThemeSelection.Light,
            ]);
        } finally {
            themeClient.destroy();
        }
    });
});
