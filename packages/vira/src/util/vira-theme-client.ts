import {assert} from '@augment-vir/assert';
import {type MaybePromise, type PartialWithUndefined} from '@augment-vir/common';
import {LocalStorageClient} from '@electrovir/local-storage-client';
import {defineShape, enumShape} from 'object-shape-tester';
import {applyColorThemeViaStyleElement} from 'theme-vir';
import {listenTo} from 'typed-event-target';
import {viraTheme, viraThemeDarkOverride} from '../styles/vira-color-theme.js';

/**
 * A user-facing selection of which theme to display. `Auto` follows the system color scheme; the
 * other values force a specific theme regardless of system preference.
 *
 * @category Internal
 */
export enum ViraThemeSelection {
    Light = 'light',
    Dark = 'dark',
    Auto = 'auto',
}

/**
 * Used by {@link ViraThemeClient} to apply themes. By default, vira themes will be applied (via
 * {@link defaultApplyThemeCallback}).
 *
 * @category Internal
 * @default `defaultApplyThemeCallback`
 */
export type ApplyThemeCallback = (params: Readonly<{useDarkTheme: boolean}>) => MaybePromise<void>;

/**
 * Default implementation of {@link ApplyThemeCallback}, which simply applies Vira themes.
 *
 * @category Internal
 */
export const defaultApplyThemeCallback: ApplyThemeCallback = ({useDarkTheme}) => {
    applyColorThemeViaStyleElement(viraTheme, useDarkTheme ? viraThemeDarkOverride : undefined);
};

/**
 * Constructor params for {@link ViraThemeClient}.
 *
 * @category Internal
 */
export type ViraThemeClientParams = PartialWithUndefined<{
    /**
     * Called whenever the effective theme should change. If not provided, the default Vira themes
     * will be used.
     */
    applyTheme: ApplyThemeCallback;
    /**
     * Override the LocalStorage store name used for theme persistence. Useful if a single page
     * hosts multiple isolated theme clients.
     *
     * @default 'vira-theme'
     */
    storeName: string;
}>;

const darkSchemeMediaQuery = '(prefers-color-scheme: dark)';

const themeStorageShapes = {
    selectedTheme: defineShape({
        theme: enumShape(ViraThemeSelection),
    }),
};

/**
 * Tracks the user's {@link ViraThemeSelection} and bridges it to a consumer-supplied `applyTheme`
 * callback. Persists the selection in LocalStorage via an internal `LocalStorageClient`, and
 * listens for system color-scheme changes to re-apply the theme in auto mode without persisting.
 *
 * The initial theme is applied during construction.
 *
 * @category Util
 */
export class ViraThemeClient {
    /** The callback that will be called to apply a new theme. */
    protected readonly applyThemeCallback: ApplyThemeCallback = defaultApplyThemeCallback;
    /** Contains the user's last selected theme, saving and loading it to disk for persistence. */
    protected readonly localStorageClient: LocalStorageClient<typeof themeStorageShapes>;
    /** A callback to remove the global theme preference listener. */
    protected readonly removeThemePreferenceListener = listenTo(
        globalThis.matchMedia(darkSchemeMediaQuery),
        'change',
        (event) => {
            assert.instanceOf(event, MediaQueryListEvent);

            if (this.currentTheme === ViraThemeSelection.Auto) {
                void this.applyThemeCallback({
                    useDarkTheme: event.matches,
                });
            }
        },
    );

    constructor(params: Readonly<ViraThemeClientParams> = {}) {
        if (params.applyTheme) {
            this.applyThemeCallback = params.applyTheme;
        }
        this.localStorageClient = new LocalStorageClient(themeStorageShapes, {
            storeName: params.storeName || 'vira-theme',
        });

        this.applySelection(this.currentTheme);
    }

    /**
     * The currently selected theme. If you use multiple clients to set the same theme, this might
     * get out of sync.
     */
    public get currentTheme(): ViraThemeSelection {
        return this.localStorageClient.get.selectedTheme()?.theme || ViraThemeSelection.Auto;
    }

    /** Set the selected theme. */
    public setSelectedTheme(selection: ViraThemeSelection): void {
        this.applySelection(selection);
        this.localStorageClient.set.selectedTheme({
            theme: selection,
        });
    }

    /** Cleanup internal state and listeners. */
    public destroy(): void {
        this.removeThemePreferenceListener();
        this.localStorageClient.destroy();
    }

    /** Apply the currently selected theme. */
    protected applySelection(selection: ViraThemeSelection): void {
        const useDarkTheme =
            selection === ViraThemeSelection.Dark ||
            (selection === ViraThemeSelection.Auto &&
                globalThis.matchMedia(darkSchemeMediaQuery).matches);

        void this.applyThemeCallback({
            useDarkTheme,
        });
    }
}
