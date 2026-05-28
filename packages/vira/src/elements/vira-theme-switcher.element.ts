import {mapEnumToObject, type PartialWithUndefined} from '@augment-vir/common';
import {classMap, css, html, listen} from 'element-vir';
import {AutoTheme24Icon, Moon24Icon, Sun24Icon, type ViraIconSvg} from '../icons/index.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {noNativeFormStyles, noNativeSpacing, viraTheme} from '../styles/index.js';
import {defineViraElement} from '../util/define-vira-element.js';
import {ViraThemeClient, ViraThemeSelection} from '../util/vira-theme-client.js';
import {ViraIcon} from './vira-icon.element.js';

const themeIcons: Readonly<Record<ViraThemeSelection, Readonly<ViraIconSvg>>> = mapEnumToObject(
    ViraThemeSelection,
    (theme) => {
        const map: Record<ViraThemeSelection, Readonly<ViraIconSvg>> = {
            [ViraThemeSelection.Light]: Sun24Icon,
            [ViraThemeSelection.Dark]: Moon24Icon,
            [ViraThemeSelection.Auto]: AutoTheme24Icon,
        };
        return map[theme];
    },
);

const defaultThemeLabels: Readonly<Record<ViraThemeSelection, string>> = {
    [ViraThemeSelection.Light]: 'Light',
    [ViraThemeSelection.Dark]: 'Dark',
    [ViraThemeSelection.Auto]: 'Auto',
};

/**
 * A row of buttons for selecting a {@link ViraThemeSelection} (light, dark, or auto). Fires a
 * `themeSelect` event when the user picks an option; the consumer is responsible for applying the
 * resulting theme.
 *
 * @category Elements
 */
export const ViraThemeSwitcher = defineViraElement<
    PartialWithUndefined<{
        themeClient: Readonly<ViraThemeClient>;
        /** Override the default English button titles (used as `title` attributes for tooltips). */
        labels: Readonly<Record<ViraThemeSelection, string>>;
    }>
>()({
    tagName: 'vira-theme-switcher',
    styles: css`
        :host {
            display: inline-flex;
            align-items: center;
            box-sizing: border-box;
            gap: 4px;
        }

        button {
            ${noNativeSpacing};
            ${noNativeFormStyles};
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid transparent;
            border-radius: ${viraFormCssVars['vira-form-radius'].value};
            padding: 2px;
            cursor: pointer;
            color: ${viraTheme.colors['vira-grey-foreground-placeholder'].foreground.value};

            &:hover {
                color: ${viraFormCssVars['vira-form-accent-primary-hover-color'].value};
                border-color: currentColor;
            }

            &.selected {
                pointer-events: none;
                color: ${viraFormCssVars['vira-form-accent-primary-color'].value};
                border-color: ${viraFormCssVars['vira-form-accent-primary-color'].value};
            }
        }

        ${ViraIcon} {
            width: 20px;
            aspect-ratio: 1;
        }
    `,
    state() {
        return {
            internalThemeClient: undefined as undefined | Readonly<ViraThemeClient>,
            currentTheme: ViraThemeSelection.Auto,
        };
    },
    render({inputs, state, updateState}) {
        const themeClient =
            inputs.themeClient || state.internalThemeClient || new ViraThemeClient();
        updateState({
            internalThemeClient: themeClient,
            currentTheme: themeClient.currentTheme,
        });

        const labels = inputs.labels || defaultThemeLabels;

        return Object.values(ViraThemeSelection).map((theme) => {
            return html`
                <button
                    class=${classMap({
                        selected: themeClient.currentTheme === theme,
                    })}
                    title=${labels[theme]}
                    ${listen('click', (event) => {
                        event.stopPropagation();
                        themeClient.setSelectedTheme(theme);
                        updateState({
                            currentTheme: themeClient.currentTheme,
                        });
                    })}
                >
                    <${ViraIcon.assign({
                        icon: themeIcons[theme],
                        fitContainer: true,
                    })}></${ViraIcon}>
                </button>
            `;
        });
    },
});
