import {viraThemePages} from './entries/colors.book.js';
import {createColoredIconBookPage} from './entries/create-colored-icon.book.js';
import {createSizedIconBookPage} from './entries/create-sized-icon.book.js';
import {dynamicElementsBookPage} from './entries/dynamic-elements.book.js';
import {viraMenuItemBookPage} from './entries/pop-up/vira-menu-item.element.book.js';
import {viraMenuTriggerBookPage} from './entries/pop-up/vira-menu-trigger.element.book.js';
import {viraMenuOptionsBookPage} from './entries/pop-up/vira-menu.element.book.js';
import {viraPopUpTriggerBookPage} from './entries/pop-up/vira-pop-up-trigger.element.book.js';
import {shadowBookPage} from './entries/shadow.book.js';
import {viraBoldTextPage} from './entries/vira-bold-text.element.book.js';
import {viraButtonBookPage} from './entries/vira-button.element.book.js';
import {viraCardBookPage} from './entries/vira-card.element.book.js';
import {viraCheckboxBookPage} from './entries/vira-checkbox.element.book.js';
import {viraCollapsibleCardBookPage} from './entries/vira-collapsible-card.element.book.js';
import {viraCollapsibleBookPage} from './entries/vira-collapsible-wrapper.element.book.js';
import {viraDrawerBookPage} from './entries/vira-drawer.element.book.js';
import {viraDropdownPage} from './entries/vira-dropdown.element.book.js';
import {viraErrorBookPage} from './entries/vira-error.element.book.js';
import {viraFormBookPage} from './entries/vira-form.element.book.js';
import {viraIconBookPage} from './entries/vira-icon.element.book.js';
import {viraImageBookPage} from './entries/vira-image.element.book.js';
import {viraInputBookPage} from './entries/vira-input.element.book.js';
import {viraJsonFormBookPage} from './entries/vira-json-form.element.book.js';
import {viraLinkBookPage} from './entries/vira-link.element.book.js';
import {viraModalBookPage} from './entries/vira-modal.element.book.js';
import {viraProgressBookPage} from './entries/vira-progress.element.book.js';
import {viraSelectBookPage} from './entries/vira-select.element.book.js';
import {viraTabsBookPage} from './entries/vira-tabs.element.book.js';
import {viraTagBookPage} from './entries/vira-tag.element.book.js';
import {viraTextAreaBookPage} from './entries/vira-text-area.element.book.js';
import {viraThemeSwitcherBookPage} from './entries/vira-theme-switcher.element.book.js';
import {icons16BookPage, icons24BookPage, lucideIconsBookPage} from './icon-book-pages.js';
import {elementsBookPage, iconsBookPage, stylesBookPage, utilBookPage} from './top-level-pages.js';

const topLevelPages = [
    elementsBookPage,
    iconsBookPage,
    stylesBookPage,
    utilBookPage,
];

const elementPages = [
    viraBoldTextPage,
    viraButtonBookPage,
    viraCardBookPage,
    viraCheckboxBookPage,
    viraCollapsibleCardBookPage,
    viraCollapsibleBookPage,
    viraDrawerBookPage,
    viraDropdownPage,
    viraErrorBookPage,
    viraFormBookPage,
    viraIconBookPage,
    viraImageBookPage,
    viraInputBookPage,
    viraJsonFormBookPage,
    viraLinkBookPage,
    viraMenuItemBookPage,
    viraMenuOptionsBookPage,
    viraMenuTriggerBookPage,
    viraModalBookPage,
    viraPopUpTriggerBookPage,
    viraProgressBookPage,
    viraSelectBookPage,
    viraTabsBookPage,
    viraTagBookPage,
    viraTextAreaBookPage,
    viraThemeSwitcherBookPage,
].sort((a, b) => a.title.localeCompare(b.title));

const allPages = [
    ...elementPages,
    createColoredIconBookPage,
    createSizedIconBookPage,
    dynamicElementsBookPage,
    lucideIconsBookPage,
    icons16BookPage,
    icons24BookPage,

    shadowBookPage,
    ...viraThemePages,
];

export const viraBookPages = [
    ...topLevelPages,
    ...allPages,
];
