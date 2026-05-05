import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {
    attributes,
    css,
    html,
    ifDefined,
    listen,
    type AttributeValues,
    type CSSResult,
} from 'element-vir';
import {type SpaRoute, type SpaRouter} from 'spa-router-vir';
import {type RequireExactlyOne} from 'type-fest';
import {listenTo} from 'typed-event-target';
import {viraFormCssVars} from '../styles/form-styles.js';
import {defineViraElement} from '../util/define-vira-element.js';

/**
 * The route properties required for using {@link ViraLink} with a route.
 *
 * @category Internal
 */
export type ViraLinkRoute = Readonly<{
    route: SpaRoute<any, any, any>;
    router: Pick<SpaRouter<any, any, any>, 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
    scrollToTop?: boolean;
}>;

/**
 * A hyperlink wrapper element that can be configured to emit route change events rather than just
 * being a raw link.
 *
 * @category Link
 * @category Elements
 * @see https://electrovir.github.io/vira/book/elements/vira-link
 */
export const ViraLink = defineViraElement<
    RequireExactlyOne<{
        /**
         * A full raw URL link that will navigate the current window away or open a new tab. If this
         * property is provided for the inputs, don't provide a route property.
         */
        link: {
            url: string;
            newTab: boolean;
        };
        /**
         * A route that'll change that current page without navigating the window. If this property
         * is provided for the inputs, don't provide a link property.
         */
        route: ViraLinkRoute;
    }> &
        PartialWithUndefined<{
            /** Styles that will be applied directly to the inner elements. */
            stylePassthrough: Readonly<PartialWithUndefined<{a: CSSResult}>>;
            /** Attributes that will be applied directly to the inner elements. */
            attributePassthrough: Readonly<PartialWithUndefined<{a: AttributeValues}>>;
            /** If set to true, internal link styles are not applied. */
            disableLinkStyles: boolean;
        }>
>()({
    tagName: 'vira-link',
    state() {
        return {
            /** Removes event listeners registered during init. */
            cleanupListeners: undefined as undefined | (() => void),
        };
    },
    hostClasses: {
        'vira-link-link-styles': ({inputs}) => !inputs.disableLinkStyles,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        ${hostClasses['vira-link-link-styles'].selector} {
            &:hover a,
            & a:hover {
                color: ${viraFormCssVars['vira-form-accent-primary-color'].value};
            }

            &:active a,
            & a:active {
                color: ${viraFormCssVars['vira-form-accent-primary-active-color'].value};
            }
        }
    `,
    init({state, updateState, host}) {
        state.cleanupListeners?.();

        let propagating = false;

        const listenerRemovers = [
            listenTo(host, 'click', (event) => {
                if (propagating) {
                    return;
                }

                const anchorElement = assertWrap.instanceOf(
                    host.shadowRoot.querySelector('a'),
                    HTMLAnchorElement,
                );

                if (event.composedPath().includes(anchorElement)) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                propagating = true;
                anchorElement.dispatchEvent(new MouseEvent(event.type, event));
                propagating = false;
            }),
        ];

        updateState({
            cleanupListeners: () => {
                listenerRemovers.forEach((remover) => remover());
            },
        });
    },
    cleanup({state, updateState}) {
        state.cleanupListeners?.();
        updateState({
            cleanupListeners: undefined,
        });
    },
    render({inputs}) {
        function clickCallback(event: MouseEvent) {
            if (!inputs.route) {
                return;
            }

            const routed = inputs.route.router.setRouteOnDirectNavigation(
                inputs.route.route,
                event,
            );

            if (routed && inputs.route.scrollToTop) {
                window.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: 'instant',
                });
            }
        }

        if (inputs.link?.newTab) {
            /** Noopener and noreferrer are needed for security reasons, do not remove! */
            return html`
                <a
                    href=${inputs.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${attributes(inputs.attributePassthrough?.a)}
                    style=${ifDefined(inputs.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;
        } else {
            const linkUrl: string = inputs.link
                ? inputs.link.url
                : inputs.route.router.createRouteUrl(inputs.route.route).url;

            /** Noopener and noreferrer are needed for security reasons, do not remove! */
            return html`
                <a
                    href=${linkUrl}
                    rel="noopener noreferrer"
                    ${attributes(inputs.attributePassthrough?.a)}
                    style=${ifDefined(inputs.stylePassthrough?.a)}
                    ${listen('click', clickCallback)}
                >
                    <slot></slot>
                </a>
            `;
        }
    },
});
