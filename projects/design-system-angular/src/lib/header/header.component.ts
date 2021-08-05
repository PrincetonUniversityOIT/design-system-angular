import {
  Component,
  HostListener,
  Input,
  ChangeDetectorRef, AfterViewChecked, ContentChild, AfterContentChecked
} from '@angular/core';
import {ARIA_EXPANDED} from '../menu/menu-constants';
import {
  ICON_CLOSE,
  ICON_SEARCH,
  ICON_SELECTOR,
  SEARCH_PANEL,
  SEARCH_SELECTOR,
  SEARCH_SHOWN_STYLE
} from './header-constants';
import {MainMenuComponent} from './main-menu/main-menu';
import {UtilityMenuComponent} from './utility-menu/utility-menu';

/**
 * A header provides a way for a visitor to understand the overall context of the page or screen that they are visiting.
 * This is accomplished through clear brand identity, identification of the visitor’s authentication status, and affordances for
 * navigation to other sections of the site/application and/or  navigation to other closely related information & utilities.
 *
 * @example
 `` `
  <jazz-header [title]="'Princeton University Design System'"
               [siteBrandingName]="'RELATIVITY'" [siteBrandingUrl]="'http://www.princeton.edu'"
               [siteBrandingSlogan]="'The Princeton University Design System'" [showCompact]='false' [showSearch]='true'>
     <jazz-main-menu>
       <jazz-main-menu-item label="Main Menu 1" url="/mainMenu1">
         <jazz-main-menu-item label="Level 2 Menu 1" url="/level2item1" shownByDefault="true">
           <jazz-main-menu-item label="Level 3 Menu 1" url="/level3item1"></jazz-main-menu-item>
           <jazz-main-menu-item label="Level 3 Menu 2" url="/level3item1"></jazz-main-menu-item>
           <jazz-main-menu-item label="Level 3 Menu 3" url="/level3item1"></jazz-main-menu-item>
         </jazz-main-menu-item>
         <jazz-main-menu-item label="Level 2 Menu 2" url="/level2item1"></jazz-main-menu-item>
         <jazz-main-menu-item label="Level 2 Menu 3" url="/level2item1"></jazz-main-menu-item>
      </jazz-main-menu-item>
      <jazz-main-menu-item label="Main Menu 2" url="/mainMenu2"></jazz-main-menu-item>
      <jazz-main-menu-item label="Main Menu 3" externalUrl="http://www.microsoft.com"></jazz-main-menu-item>
     </jazz-main-menu>
     <jazz-utility-menu>
       <jazz-utility-item label="Documentation" externalUrl="http://www.google.com"></jazz-utility-item>
       <jazz-utility-item label="Log In" url="/login"></jazz-utility-item>
     </jazz-utility-menu>
   </jazz-header>
 `` `
 */

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewChecked, AfterContentChecked {

  @Input()
  title: string;

  @Input()
  siteBrandingName: string;

  @Input()
  siteBrandingSlogan: string;

  @Input()
  siteBrandingUrl: string;

  @Input()
  siteBrandingLogo: string;

  @Input()
  showSearch = true;

  @Input()
  showCompact = false;

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

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngAfterContentChecked(): void {
    // console.log('utilityMenu', this.utilityMenu);
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

  getSiteBrandingLogo(): string {
    if (this.siteBrandingLogo) {
      return this.siteBrandingLogo;
    }
    if (this.showCompact) {
        return './assets/logos/pu-logo-stacked-white.svg';
    }
    return './assets/logos/pu-shield.svg';
  }
}
