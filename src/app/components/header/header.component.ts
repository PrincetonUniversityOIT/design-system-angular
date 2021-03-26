import {
  Component,
  HostListener,
  Input,
  AfterViewInit, ChangeDetectorRef, AfterViewChecked, ContentChild, OnInit
} from '@angular/core';
import {HeaderOptions} from '../../model/header-options';
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
export class HeaderComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input()
  headerOptions?: HeaderOptions;

  @Input()
  title?: string;

  @Input()
  siteBrandingName?: string;

  @Input()
  siteBrandingSlogan?: string;

  @Input()
  showSearch?: boolean = true;

  @Input()
  showCompact?: boolean = false;

  @ContentChild(MainMenuComponent)
  mainMenu: MainMenuComponent;

  @ContentChild(UtilityMenuComponent)
  utilityMenu: UtilityMenuComponent;

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.displayWindowSize();
  }

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.checkInputs();
  }

  checkInputs(): void {
    if (this.headerOptions &&  (this.siteBrandingName || this.siteBrandingSlogan || this.title || this.showSearch || this.showCompact)) {
       console.warn('Please specify either the headerOptions or the individual properties for the header');
    }

    if (!this.headerOptions) {
       this.headerOptions = Object.assign({}, {
            title: this.title,
            siteBrandingName: this.siteBrandingName,
            siteBrandingSlogan: this.siteBrandingSlogan,
            showSearch: this.showSearch,
            showCompact: this.showCompact
       });
    }
  }

  ngAfterViewInit(): void {
    this.retrieveMainMenu();
    this.retrieveUtilityMenus();
  }

  retrieveUtilityMenus(): void {
    if (!this.headerOptions.utilityItems && this.utilityMenu && this.utilityMenu.utilityMenuComponents.length > 0) {
      const utilityMenu: MenuItem[] = [];
      this.utilityMenu.utilityMenuComponents.forEach((item) => {
         utilityMenu.push(Object.assign({}, {label: item.label, url: item.url, externalUrl: item.externalUrl}));
      });
      this.headerOptions.utilityItems = utilityMenu;
    }
  }

  retrieveMainMenu(): void {
    if (!this.headerOptions.menuItems && this.mainMenu && this.mainMenu.menuComponents.length > 0) {
      const mainMenu: MenuItem[] = [];
      this.mainMenu.menuComponents.forEach((item) => {
        mainMenu.push(this.retrieveMenuItems(item));
      });
      this.headerOptions.menuItems = mainMenu;
    }
  }

  retrieveMenuItems(menuComponent: MainMenuItemComponent): MenuItem {
    const menuItem: MenuItem = Object.assign(new MenuItem(menuComponent.label), {
      shownByDefault: menuComponent.shownByDefault ? menuComponent.shownByDefault : false,
      url: menuComponent.url,
      externalUrl: menuComponent.externalUrl,
      subItems: []
    });
    if (menuComponent.menuComponents.length > 0) {
      const removeSelf = menuComponent.menuComponents.filter(x => x !== menuComponent);
      removeSelf.forEach((comp) => {
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
