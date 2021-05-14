import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {MenuItem} from '../../model/menu-item';
import {
  ARIA_EXPANDED,
  MENU_HIDE_STYLE,
  MENU_RECENTLY_OPENED_ID,
  MENU_STICKY_STYLE, MENU_SUB_NAV_EXPANDED_STYLE, MENUBAR_SUB_SHOWN_STYLE
} from '../menu-constants';
import {MenuItemComponent} from "../menu-item/menu-item.component";
import {MainMenuItemComponent} from "../../header/main-menu/main-menu-item";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-sub-button',
  templateUrl: './menu-sub-button.component.html'
})
export class MenuSubButtonComponent implements OnInit {
  @Input()
  menuItem: MainMenuItemComponent;

  @Output()
  closeSubMenus: EventEmitter<void> = new EventEmitter();

  @Output()
  resetSubMenus: EventEmitter<void> = new EventEmitter();

  @ViewChild('subButtonTemplate', {static: true}) subButtonTemplate;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.subButtonTemplate);
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
    const navContainer = navbar.querySelector('ul');
    if (expand) {
      this.closeSubMenus.emit();

      navContainer.classList.add(MENU_STICKY_STYLE);
      navContainer.classList.remove(MENU_HIDE_STYLE);
      navbar.classList.add(MENU_STICKY_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'true');
    } else {
      this.resetSubMenus.emit();

      navContainer.classList.remove(MENU_STICKY_STYLE);
      navContainer.classList.add(MENU_HIDE_STYLE);
      navContainer.id = MENU_RECENTLY_OPENED_ID;
      navbar.classList.remove(MENU_STICKY_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'false');
    }
  }

  showSubMenuCondensed(expand, button): void {
    // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
    const navbar = button.closest('li');
    const navContainer = navbar.querySelector('ul');

    if (expand) {
      navContainer.classList.add(MENU_SUB_NAV_EXPANDED_STYLE);
      navbar.classList.add(MENUBAR_SUB_SHOWN_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'true');
    } else {
      navContainer.classList.remove(MENU_SUB_NAV_EXPANDED_STYLE);
      navbar.classList.remove(MENUBAR_SUB_SHOWN_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'false');
    }
  }
}
