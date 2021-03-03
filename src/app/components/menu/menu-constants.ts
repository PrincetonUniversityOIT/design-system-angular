import {prefix as PREFIX} from '../../config';

export const ARIA_EXPANDED = 'aria-expanded';

// Main Menu Selectors
export const MENU_SELECTOR =  `.${PREFIX}-menubar`;

export const MENU_BUTTON_SELECTOR = `.${PREFIX}-menu__menu-toggle`;
export const HEADER_NAV_SELECTOR = `.${PREFIX}-menu__nav-container`;
export const MENU_MAIN_MENU_SELECTOR = `.${PREFIX}-menu__main-menu-navbar`;

// Submenu Selectors
export const HEADER_SUB_MENU_SELECTOR = `.${PREFIX}-menu__submenu-toggle`;

// Used to conditionally hide and show menu to handle hovers + click open
export const MENU_STICKY_STYLE = `${PREFIX}-menubar--stuck`;
export const MENU_HIDE_STYLE = `${PREFIX}-menubar--hide`;

// Styles to show menu in low resolution view
export const MENU_NAV_EXPANDED_STYLE = `${PREFIX}-menu__nav-container--expanded`;
export const MENU_SUB_NAV_EXPANDED_STYLE = `${PREFIX}-menu__subnav-container--expanded`;

// Styles to show menu in high resolution view
export const MENUBAR_SHOWN_STYLE = `${PREFIX}-menubar--shown`;
export const MENUBAR_SUB_SHOWN_STYLE = `${PREFIX}-menubar_submenu--shown`;

// Icons
export const ICON_SELECTOR = `.${PREFIX}-icon`;
export const ICON_CLOSE = `${PREFIX}-icon-close`;
export const  ICON_MENU = `${PREFIX}-icon-menu`;

// Id used to identify recently closed sub nav
export const MENU_RECENTLY_OPENED_ID = `${PREFIX}-menu:recentlyOpened`;
