import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {
  HEADER_NAV_SELECTOR, ICON_CLOSE,
  ICON_SELECTOR,
  MENU_MAIN_MENU_SELECTOR,
  MENU_NAV_EXPANDED_STYLE,
  MENUBAR_SHOWN_STYLE
} from '../menu-constants';

export const ARIA_EXPANDED = 'aria-expanded';

@Component({
  selector: 'app-jazz-menu-main-button',
  templateUrl: './menu-main-button.component.html'
})
export class MenuMainButtonComponent implements OnInit {

  @ViewChild('mainButtonTemplate', {static: true}) mainButtonTemplate;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.mainButtonTemplate);
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
    const menuToggleIcon = button.querySelector(ICON_SELECTOR);
    const navbar = menuEl.querySelector('ul');
    const navContainer = menuEl.querySelector(HEADER_NAV_SELECTOR);

    if (expand) {
      navContainer.classList.add(MENU_NAV_EXPANDED_STYLE);
      navbar.classList.add(MENUBAR_SHOWN_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'true');
      menuToggleIcon.classList.remove('jazz-icon-menu');
      menuToggleIcon.classList.add(ICON_CLOSE);
    } else {
      navContainer.classList.remove(MENU_NAV_EXPANDED_STYLE);
      navbar.classList.remove(MENUBAR_SHOWN_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'false');
      menuToggleIcon.classList.remove(ICON_CLOSE);
      menuToggleIcon.classList.add('jazz-icon-menu');
    }
  }

}
