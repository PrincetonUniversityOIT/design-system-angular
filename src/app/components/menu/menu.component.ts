import {MenuItem} from '../../model/menu-item';
import { prefix as PREFIX } from '../../config';
import {Component, HostListener, Input, OnInit} from '@angular/core';

export const ARIA_EXPANDED = 'aria-expanded';

// Main Menu Selectors
const MENU_SELECTOR =  `.${PREFIX}-menubar`;

const MENU_BUTTON_SELECTOR = `.${PREFIX}-menu__menu-toggle`;
const HEADER_NAV_SELECTOR = `.${PREFIX}-menu__nav-container`;
const MENU_MAIN_MENU_SELECTOR = `.${PREFIX}-menu__main-menu-navbar`;

// Submenu Selectors
const HEADER_SUB_MENU_SELECTOR = `.${PREFIX}-menu__submenu-toggle`;

// Used to conditionally hide and show menu to handle hovers + click open
const MENU_STICKY_STYLE = `${PREFIX}-menubar--stuck`;
const MENU_HIDE_STYLE = `${PREFIX}-menubar--hide`;

// Styles to show menu in low resolution view
const MENU_NAV_EXPANDED_STYLE = `${PREFIX}-menu__nav-container--expanded`;
const MENU_SUB_NAV_EXPANDED_STYLE = `${PREFIX}-menu__subnav-container--expanded`;

// Styles to show menu in high resolution view
const MENUBAR_SHOWN_STYLE = `${PREFIX}-menubar--shown`;
const MENUBAR_SUB_SHOWN_STYLE = `${PREFIX}-menubar_submenu--shown`;

// Icons
const ICON_SELECTOR = `.${PREFIX}-icon`;
const ICON_CLOSE = `${PREFIX}-icon-close`;
const ICON_MENU = `${PREFIX}-icon-menu`;

// Id used to identify recently closed sub nav
const MENU_RECENTLY_OPENED_ID = `${PREFIX}-menu:recentlyOpened`;

@Component({
  selector: 'app-jazz-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input()
  menuItems?: MenuItem[];

  @Input()
  utilityItems?: MenuItem[];

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.displayWindowSize();
  }

  constructor() {}

  ngOnInit(): void {

  }

  onMainMenuClick(event): void {
    const button = event.target as HTMLElement;
    const expandedAttr = button.getAttribute(ARIA_EXPANDED);
    const expand = !(expandedAttr && expandedAttr === 'true');
    this.showMenu(expand, button);
    event.stopImmediatePropagation();
  }

  onMainMenuIconClick(event): void {
    const icon = event.target as HTMLElement;
    const button = icon.closest('button');
    const expandedAttr = button.getAttribute(ARIA_EXPANDED);
    const expand = !(expandedAttr && expandedAttr === 'true');
    this.showMenu(expand, button);
    event.stopImmediatePropagation();
  }

  // tslint:disable-next-line:typedef
  showMenu(expand, button) {
    // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
    const menuEl = button.closest(MENU_MAIN_MENU_SELECTOR);
    const buttonToReset = this.getButtonForSelector(MENU_BUTTON_SELECTOR, button, menuEl);
    const menuToggleIcon = buttonToReset.querySelector(ICON_SELECTOR);
    const navbar = menuEl.querySelector('ul');
    const navContainer = menuEl.querySelector(HEADER_NAV_SELECTOR);

    if (expand) {
      navContainer.classList.add(MENU_NAV_EXPANDED_STYLE);
      navbar.classList.add(MENUBAR_SHOWN_STYLE);
      buttonToReset.setAttribute(ARIA_EXPANDED, 'true');
      menuToggleIcon.classList.remove('jazz-icon-menu');
      menuToggleIcon.classList.add(ICON_CLOSE);
    } else {
      navContainer.classList.remove(MENU_NAV_EXPANDED_STYLE);
      navbar.classList.remove(MENUBAR_SHOWN_STYLE);
      buttonToReset.setAttribute(ARIA_EXPANDED, 'false');
      menuToggleIcon.classList.remove(ICON_CLOSE);
      menuToggleIcon.classList.add('jazz-icon-menu');
    }
  }

  displayWindowSize(): void {
    // Main Menu Reset
    document.querySelectorAll(HEADER_NAV_SELECTOR).forEach((header) => {
      header.classList.remove(MENU_NAV_EXPANDED_STYLE);
      header.querySelectorAll('ul').forEach((navbar) => {
        navbar.classList.remove(MENU_NAV_EXPANDED_STYLE);
        navbar.classList.remove(MENUBAR_SHOWN_STYLE);
        navbar.classList.remove(MENU_STICKY_STYLE);
        navbar.querySelectorAll('li').forEach((submenu) => {
          submenu.classList.remove(MENU_STICKY_STYLE);
          submenu.classList.remove(MENU_HIDE_STYLE);
        });
      });
    });

    document.querySelectorAll(MENU_BUTTON_SELECTOR).forEach((button) => {
      button.setAttribute(ARIA_EXPANDED, 'false');
      const menuToggleIcon = button.querySelector(ICON_SELECTOR);
      menuToggleIcon.classList.remove(ICON_CLOSE);
      menuToggleIcon.classList.add(ICON_MENU);
    });

    // Sub Menus Reset
    document.querySelectorAll(MENU_SELECTOR).forEach((menu) => {
      menu.querySelectorAll('ul').forEach((navbar) => {
        navbar.classList.remove(MENU_SUB_NAV_EXPANDED_STYLE);
        navbar.classList.remove(MENUBAR_SUB_SHOWN_STYLE);
      });
    });

    document.querySelectorAll(HEADER_SUB_MENU_SELECTOR).forEach((button) => {
      button.setAttribute(ARIA_EXPANDED, 'false');
    });
  }

  // This retrieves the appropriate button depending on the selector passed in
  getButtonForSelector(btnSelector, button, mainEl): any {
    if (!button.matches(btnSelector)) {
      button = mainEl.querySelector(btnSelector);
    }
    return button;
  }

  closeSubMenus(disableNav: boolean): void {
    // const mainEl = event.btn.closest(MENU_MAIN_MENU_SELECTOR);
    document.querySelectorAll(HEADER_NAV_SELECTOR).forEach((mainEl) => {
      mainEl.querySelectorAll('li').forEach((navbar) => {
        navbar.querySelectorAll('ul').forEach((list) => {
          list.classList.remove(MENU_STICKY_STYLE);
          if (disableNav) {
            list.classList.add(MENU_HIDE_STYLE);
          }
        });
      });

      // tslint:disable-next-line:no-shadowed-variable
      mainEl.querySelectorAll(HEADER_SUB_MENU_SELECTOR).forEach((button) => {
        button.setAttribute(ARIA_EXPANDED, 'false');
      });
    });
  }

  resetSubMenus(): void {
    document.querySelectorAll(HEADER_NAV_SELECTOR).forEach((mainEl) => {
      mainEl.querySelectorAll('li').forEach((navbar) => {
        navbar.querySelectorAll('ul').forEach((list) => {
          list.classList.remove(MENU_STICKY_STYLE);
          list.classList.remove(MENU_HIDE_STYLE);
        });
      });
    });
  }

  onMouseOut(event): void {
    const li = event.target as HTMLElement;
    if (li) {
      li.querySelectorAll('ul').forEach((subnav) => {
        if (subnav.id === MENU_RECENTLY_OPENED_ID) {
          subnav.classList.remove(MENU_HIDE_STYLE);
          subnav.id = '';
        }
      });
    }
  }
}
