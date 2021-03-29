import {MenuItem} from '../../model/menu-item';
import {Component, HostListener, Input} from '@angular/core';
import {
  ARIA_EXPANDED,
  HEADER_NAV_SELECTOR, HEADER_SUB_MENU_SELECTOR, ICON_CLOSE, ICON_MENU, ICON_SELECTOR, MENU_BUTTON_SELECTOR,
  MENU_HIDE_STYLE, MENU_MAIN_MENU_SELECTOR,
  MENU_NAV_EXPANDED_STYLE, MENU_RECENTLY_OPENED_ID, MENU_SELECTOR,
  MENU_STICKY_STYLE, MENU_SUB_NAV_EXPANDED_STYLE,
  MENUBAR_SHOWN_STYLE, MENUBAR_SUB_SHOWN_STYLE
} from './menu-constants';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @Input()
  menuItems?: MenuItem[];

  @Input()
  utilityItems?: MenuItem[];

  @Input()
  mainMenuItems?: MenuItem[];

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.displayWindowSize();
  }

  constructor() {}

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

  closeSubMenus(): void {
    // const mainEl = event.btn.closest(MENU_MAIN_MENU_SELECTOR);
    document.querySelectorAll(HEADER_NAV_SELECTOR).forEach((mainEl) => {
      mainEl.querySelectorAll('li').forEach((navbar) => {
        navbar.querySelectorAll('ul').forEach((list) => {
          list.classList.remove(MENU_STICKY_STYLE);
          list.classList.add(MENU_HIDE_STYLE);
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
