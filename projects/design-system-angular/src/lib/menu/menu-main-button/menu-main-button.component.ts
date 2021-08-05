import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {
  HEADER_NAV_SELECTOR, ICON_CLOSE, ICON_MENU,
  ICON_SELECTOR,
  MENU_MAIN_MENU_SELECTOR,
  MENU_NAV_EXPANDED_STYLE,
  MENUBAR_SHOWN_STYLE
} from '../menu-constants';

export const ARIA_EXPANDED = 'aria-expanded';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-menu-main-button',
  templateUrl: './menu-main-button.component.html'
})
export class MenuMainButtonComponent implements OnInit {

  @ViewChild('mainButtonTemplate', {static: true}) mainButtonTemplate;

  @Input()
  buttonClass: string;

  @Input()
  showCompact: boolean;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.mainButtonTemplate);
  }

  onMainMenuClick(event): void {
    const icon = event.target as HTMLElement;
    const button = icon.closest('button');
    const expandedAttr = button.getAttribute(ARIA_EXPANDED);
    const expand = !(expandedAttr && expandedAttr === 'true');
    if (!this.showCompact) {
      this.showMenu(expand, button);
    } else {
      this.showUtilityMenu(expand, button);
    }
    event.stopImmediatePropagation();
  }

  // tslint:disable-next-line:typedef
  showMenu(expand, button) {
    // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
    const menuEl = button.closest(MENU_MAIN_MENU_SELECTOR);
    const menuToggleIcon = button.querySelector(ICON_SELECTOR);
    const navbar = menuEl.querySelector('ul');
    const navContainer = menuEl.querySelector(HEADER_NAV_SELECTOR);
    const spanEl = button.querySelector('span');

    if (expand) {
      navContainer.classList.add(MENU_NAV_EXPANDED_STYLE);
      navbar.classList.add(MENUBAR_SHOWN_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'true');
      menuToggleIcon.classList.remove(ICON_MENU);
      menuToggleIcon.classList.add(ICON_CLOSE);
      spanEl.innerText = 'Open Navigation Menu';
    } else {
      navContainer.classList.remove(MENU_NAV_EXPANDED_STYLE);
      navbar.classList.remove(MENUBAR_SHOWN_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'false');
      menuToggleIcon.classList.remove(ICON_CLOSE);
      menuToggleIcon.classList.add(ICON_MENU);
      spanEl.innerText = 'Close Navigation Menu';
    }
  }

  showUtilityMenu(expand, button): void {
    const sectionEl = button.closest('.jazz-utility-header__nav');
    const iconEl = button.querySelector(ICON_SELECTOR);
    const spanEl = button.querySelector('span');

    if (sectionEl) {
      if (expand) {
        button.setAttribute(ARIA_EXPANDED, 'true');
        sectionEl.classList.add('jazz-expanded');
        iconEl.classList.remove(ICON_MENU);
        iconEl.classList.add(ICON_CLOSE);
        spanEl.innerText = 'Close Navigation Menu';
      } else {
        button.setAttribute(ARIA_EXPANDED, 'false');
        sectionEl.classList.remove('jazz-expanded');
        iconEl.classList.remove(ICON_CLOSE);
        iconEl.classList.add(ICON_MENU);
        spanEl.innerText = 'Open Navigation Menu';
      }
    }
  }

  getMenuText(): string {
    return this.showCompact ? '' : 'Menu';
  }

}
