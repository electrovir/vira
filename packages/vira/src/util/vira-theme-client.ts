import {assert} from '@augment-vir/assert';
import {
    type MaybePromise,
    type PartialWithUndefined,
    type RequireOneOrNone,
} from '@augment-vir/common';
import {LocalStorageClient} from '@electrovir/local-storage-client';
import {defineShape, enumShape} from 'object-shape-tester';
import {applyColorThemeViaStyleElement} from 'theme-vir/dist/color-theme/apply-color-theme.js';
import {defineTypedCustomEvent, ListenTarget, listenTo} from 'typed-event-target';
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
 * Fired by {@link ViraThemeClient} whenever its applied theme changes, including when the system
 * color scheme flips while the selection is `Auto`. Not fired when a new selection leaves the
 * applied theme the same (such as switching from `Dark` to `Auto` on a dark system).
 *
 * @category Internal
 */
export class ViraThemeAppliedEvent extends defineTypedCustomEvent<
    Exclude<ViraThemeSelection, ViraThemeSelection.Auto>
>()('vira-theme-applied') {}

/**
 * Persists the selection of a {@link ViraThemeClient}.
 *
 * @category Internal
 */
export type ViraThemeStorage = {
    /** The previously saved selection. `undefined` (nothing saved yet) is treated as `Auto`. */
    init: ViraThemeSelection | undefined;
    /** Called after the selection has already been applied, so it can be async. */
    save(selection: ViraThemeSelection): MaybePromise<void>;
};

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
}> &
    RequireOneOrNone<{
        /**
         * Override the LocalStorage store name used for theme persistence. Useful if a single page
         * hosts multiple isolated theme clients.
         *
         * @default 'vira-theme'
         */
        storeName: string;
        /**
         * Where to persist the selected theme. If not provided, the selection is persisted in
         * LocalStorage under `storeName`.
         */
        storage: ViraThemeStorage;
    }>;

const darkSchemeMediaQuery = '(prefers-color-scheme: dark)';

const themeStorageShapes = {
    selectedTheme: defineShape({
        theme: enumShape(ViraThemeSelection),
    }),
};

/**
 * Tracks the user's {@link ViraThemeSelection} and bridges it to a consumer-supplied `applyTheme`
 * callback. Persists the selection through `storage` (LocalStorage by default), and listens for
 * system color-scheme changes to re-apply the theme in auto mode without persisting. Listen for
 * {@link ViraThemeAppliedEvent} to react to the displayed theme changing.
 *
 * The initial theme is applied during construction.
 *
 * @category Util
 */
export class ViraThemeClient extends ListenTarget<ViraThemeAppliedEvent> {
    /** The callback that will be called to apply a new theme. */
    protected readonly applyThemeCallback: ApplyThemeCallback = defaultApplyThemeCallback;
    /** The default storage, only created when no `storage` param is given. */
    protected readonly localStorageClient:
        | LocalStorageClient<typeof themeStorageShapes>
        | undefined;
    /** Persists the user's selected theme. */
    protected readonly storage: ViraThemeStorage;
    /** The user's selected theme. */
    protected selectedTheme: ViraThemeSelection;
    /** The theme that is currently displayed. */
    protected appliedTheme: Exclude<ViraThemeSelection, ViraThemeSelection.Auto> | undefined;
    /** A callback to remove the global theme preference listener. */
    protected readonly removeThemePreferenceListener = listenTo(
        globalThis.matchMedia(darkSchemeMediaQuery),
        'change',
        (event) => {
            assert.instanceOf(event, MediaQueryListEvent);

            if (this.selectedTheme === ViraThemeSelection.Auto) {
                this.applySelection(ViraThemeSelection.Auto);
            }
        },
    );

    constructor(params: Readonly<ViraThemeClientParams> = {}) {
        super();
        if (params.applyTheme) {
            this.applyThemeCallback = params.applyTheme;
        }

        if (params.storage) {
            this.storage = params.storage;
        } else {
            const localStorageClient = new LocalStorageClient(themeStorageShapes, {
                storeName: params.storeName || 'vira-theme',
            });
            this.localStorageClient = localStorageClient;
            this.storage = {
                init: localStorageClient.get.selectedTheme()?.theme,
                save(theme) {
                    localStorageClient.set.selectedTheme({
                        theme,
                    });
                },
            };
        }

        this.selectedTheme = this.storage.init || ViraThemeSelection.Auto;
        this.applySelection(this.selectedTheme);
    }

    /**
     * The currently selected theme. If you use multiple clients to set the same theme, this might
     * get out of sync.
     */
    public getCurrentTheme(): ViraThemeSelection {
        return this.selectedTheme;
    }

    /** The theme that is currently displayed, with `Auto` resolved from the system color scheme. */
    public getAppliedTheme(): Exclude<ViraThemeSelection, ViraThemeSelection.Auto> {
        return this.appliedTheme || ViraThemeSelection.Light;
    }

    /** Set the selected theme. */
    public setSelectedTheme(selection: ViraThemeSelection): void {
        this.selectedTheme = selection;
        this.applySelection(selection);
        void this.storage.save(selection);
    }

    /** Cleanup internal state and listeners. */
    public override destroy(): void {
        this.removeThemePreferenceListener();
        this.localStorageClient?.destroy();
        super.destroy();
    }

    /** Apply the given selection and fire {@link ViraThemeAppliedEvent} if the result changed. */
    protected applySelection(selection: ViraThemeSelection): void {
        const useDarkTheme =
            selection === ViraThemeSelection.Dark ||
            (selection === ViraThemeSelection.Auto &&
                globalThis.matchMedia(darkSchemeMediaQuery).matches);
        const appliedTheme = useDarkTheme ? ViraThemeSelection.Dark : ViraThemeSelection.Light;

        void this.applyThemeCallback({
            useDarkTheme,
        });

        if (appliedTheme !== this.appliedTheme) {
            this.appliedTheme = appliedTheme;
            this.dispatch(
                new ViraThemeAppliedEvent({
                    detail: appliedTheme,
                }),
            );
        }
    }
}
