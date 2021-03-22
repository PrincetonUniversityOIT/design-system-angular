import {
  Component,
  HostListener,
  Input,
  AfterViewInit, ChangeDetectorRef, AfterViewChecked, ContentChild
} from '@angular/core';
import {MenuOptions} from '../../model/menu-options';
import {ARIA_EXPANDED} from '../menu/menu-constants';
import {
  ICON_CLOSE,
  ICON_SEARCH,
  ICON_SELECTOR,
  SEARCH_PANEL,
  SEARCH_SELECTOR,
  SEARCH_SHOWN_STYLE
} from './header-constants';
import {MenuItem} from '../../model/menu-item';
import {MainMenuComponent} from './main-menu/main-menu';
import {MainMenuItemComponent} from './main-menu/main-menu-item';
import {UtilityMenuComponent} from './utility-menu/utility-menu';

@Component({
  selector: 'app-jazz-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit, AfterViewChecked {
  @Input()
  menuOptions: MenuOptions;

  @ContentChild(MainMenuComponent) mainMenu: MainMenuComponent;
  @ContentChild(UtilityMenuComponent) utilityMenu: UtilityMenuComponent;

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.displayWindowSize();
  }

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.retrieveMainMenu();
    this.retrieveUtilityMenus();
  }

  retrieveUtilityMenus(): void {
    if (!this.menuOptions.utilityItems && this.utilityMenu && this.utilityMenu.utilityMenuComponents.length > 0) {
      const utilityMenu: MenuItem[] = [];
      this.utilityMenu.utilityMenuComponents.forEach((item) => {
         utilityMenu.push(Object.assign({}, {label: item.label, url: item.url}));
      });
      this.menuOptions.utilityItems = utilityMenu;
    }
  }

  retrieveMainMenu(): void {
    if (!this.menuOptions.menuItems && this.mainMenu && this.mainMenu.menuComponents.length > 0) {
      const mainMenu: MenuItem[] = [];
      this.mainMenu.menuComponents.forEach((item) => {
        mainMenu.push(this.retrieveMenuItems(item));
      });
      this.menuOptions.menuItems = mainMenu;
    }
  }

  retrieveMenuItems(menuComponent: MainMenuItemComponent): MenuItem {
    const menuItem: MenuItem = Object.assign({}, {
      label: menuComponent.label,
      url: menuComponent.url,
      shownByDefault: menuComponent.shownByDefault ? menuComponent.shownByDefault : false,
      subItems: []
    });
    if (menuComponent.menuComponents.length > 0) {
      menuComponent.menuComponents.forEach((comp) => {
        menuItem.subItems.push(this.retrieveMenuItems(comp));
      });
    }
    return menuItem;
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  displayWindowSize(): void {
    // Search Reset
    document.querySelectorAll(SEARCH_PANEL).forEach((searchbar) => {
      searchbar.classList.remove(SEARCH_SHOWN_STYLE);
    });

    document.querySelectorAll(SEARCH_SELECTOR).forEach((button) => {
      button.setAttribute(ARIA_EXPANDED, 'false');
      const searchToggleIcon = button.querySelector(ICON_SELECTOR);
      searchToggleIcon.classList.remove(ICON_CLOSE);
      searchToggleIcon.classList.add(ICON_SEARCH);
    });
  }
}
