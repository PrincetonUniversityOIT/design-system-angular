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
