
import {MenuItem} from '../../model/menu-item';
import { prefix as PREFIX } from '../../config';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';

export const ARIA_EXPANDED = 'aria-expanded';

// Submenu Selectors
const HEADER_SUB_MENU_SELECTOR = `.${PREFIX}-menu__submenu-toggle`;

// Used to conditionally hide and show menu to handle hovers + click open
const MENU_STICKY_STYLE = `${PREFIX}-menubar--stuck`;
const MENU_HIDE_STYLE = `${PREFIX}-menubar--hide`;

// Styles to show menu in low resolution view
const MENU_SUB_NAV_EXPANDED_STYLE = `${PREFIX}-menu__subnav-container--expanded`;

// Styles to show menu in high resolution view
const MENUBAR_SUB_SHOWN_STYLE = `${PREFIX}-menubar_submenu--shown`;

// Id used to identify recently closed sub nav
const MENU_RECENTLY_OPENED_ID = `${PREFIX}-menu:recentlyOpened`;

@Component({
  selector: 'app-jazz-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @ViewChild('template', {static: true}) template;

  @Input()
  menuItem: MenuItem;

  @Output()
  closeSubMenus: EventEmitter<boolean> = new EventEmitter();

  @Output()
  resetSubMenus: EventEmitter<void> = new EventEmitter();

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  onSubMenuClick(event): void {
    const button = event.target as HTMLElement;
    const expandedAttr = button.getAttribute(ARIA_EXPANDED);
    const expand = !(expandedAttr && expandedAttr === 'true');
    this.showSubMenu(expand, button);
  }

  showSubMenu(expand, button): void {
    const mq = window.matchMedia('(min-width: 900px)');
    if (mq.matches) {
      this.showSubMenuFull(expand, button);
    } else {
      this.showSubMenuCondensed(expand, button);
    }
  }

  showSubMenuFull(expand, button): void {
    // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
    const navbar = button.closest('li');
    const buttonToReset = this.getButtonForSelector(HEADER_SUB_MENU_SELECTOR, button, navbar);
    const navContainer = navbar.querySelector('ul');
    if (expand) {
      this.closeSubMenus.emit(true);

      navContainer.classList.add(MENU_STICKY_STYLE);
      navContainer.classList.remove(MENU_HIDE_STYLE);
      navbar.classList.add(MENU_STICKY_STYLE);
      buttonToReset.setAttribute(ARIA_EXPANDED, 'true');
    } else {
      this.resetSubMenus.emit();

      navContainer.classList.remove(MENU_STICKY_STYLE);
      navContainer.classList.add(MENU_HIDE_STYLE);
      navContainer.id = MENU_RECENTLY_OPENED_ID;
      navbar.classList.remove(MENU_STICKY_STYLE);
      buttonToReset.setAttribute(ARIA_EXPANDED, 'false');
    }
  }

  showSubMenuCondensed(expand, button): void {
    // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
    const navbar = button.closest('li');
    const buttonToReset = this.getButtonForSelector(HEADER_SUB_MENU_SELECTOR, button, navbar);
    const navContainer = navbar.querySelector('ul');

    if (expand) {
      navContainer.classList.add(MENU_SUB_NAV_EXPANDED_STYLE);
      navbar.classList.add(MENUBAR_SUB_SHOWN_STYLE);
      buttonToReset.setAttribute(ARIA_EXPANDED, 'true');
    } else {
      navContainer.classList.remove(MENU_SUB_NAV_EXPANDED_STYLE);
      navbar.classList.remove(MENUBAR_SUB_SHOWN_STYLE);
      buttonToReset.setAttribute(ARIA_EXPANDED, 'false');
    }
  }

  // This retrieves the appropriate button depending on the selector passed in
  getButtonForSelector(btnSelector, button, mainEl): any {
    if (!button.matches(btnSelector)) {
      button = mainEl.querySelector(btnSelector);
    }
    return button;
  }
}
