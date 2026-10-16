import {mapEnumToObject, type PartialWithUndefined} from '@augment-vir/common';
import {classMap, css, defineElementEvent, html, listen} from 'element-vir';
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
 * The part of {@link ViraThemeClient} that {@link ViraThemeSwitcher} uses. Implement this to back the
 * switcher with your own theme storage instead of a `ViraThemeClient`.
 *
 * @category Internal
 */
export type ViraThemeSwitcherClient = Pick<ViraThemeClient, 'getCurrentTheme' | 'setSelectedTheme'>;

/**
 * A row of buttons for selecting a {@link ViraThemeSelection} (light, dark, or auto). Clicking a
 * button calls `setSelectedTheme` on the `themeClient` input (or on an internal
 * {@link ViraThemeClient} when none is given), which applies the theme, then fires a `themeSelect`
 * event with the selection.
 *
 * @category Elements
 */
export const ViraThemeSwitcher = defineViraElement<
    PartialWithUndefined<{
        themeClient: Readonly<ViraThemeSwitcherClient>;
        /**
         * Override the default English button labels (used as `title` attributes for tooltips and
         * as `aria-label` attributes).
         */
        labels: Readonly<Record<ViraThemeSelection, string>>;
    }>
>()({
    tagName: 'vira-theme-switcher',
    events: {
        /** Fired after the user selects a theme and it has been passed to the theme client. */
        themeSelect: defineElementEvent<ViraThemeSelection>(),
    },
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
            internalThemeClient: undefined as undefined | Readonly<ViraThemeSwitcherClient>,
            currentTheme: ViraThemeSelection.Auto,
        };
    },
    render({inputs, state, updateState, dispatch, events}) {
        const themeClient =
            inputs.themeClient || state.internalThemeClient || new ViraThemeClient();
        updateState({
            internalThemeClient: themeClient,
            currentTheme: themeClient.getCurrentTheme(),
        });

        const labels = inputs.labels || defaultThemeLabels;

        return Object.values(ViraThemeSelection).map((theme) => {
            return html`
                <button
                    class=${classMap({
                        selected: themeClient.getCurrentTheme() === theme,
                    })}
                    title=${labels[theme]}
                    aria-label=${labels[theme]}
                    ${listen('click', (event) => {
                        event.stopPropagation();
                        themeClient.setSelectedTheme(theme);
                        updateState({
                            currentTheme: themeClient.getCurrentTheme(),
                        });
                        dispatch(
                            new events.themeSelect({
                                detail: theme,
                            }),
                        );
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
