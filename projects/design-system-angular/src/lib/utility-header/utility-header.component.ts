import {Component, Input, ContentChildren, QueryList} from '@angular/core';
import {UtilityHeaderLinkComponent} from './utility-header-link.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-utility-header',
  template: `
    <header
        role="banner"
        class="jazz-utility-header"
        [class.jazz-stuck-mobile]="stuckMobile"
        [class.jazz-stuck]="stuckDesktop">
        <h1 class="jazz-visually-hidden">{{ primaryHeading }}</h1>
        <div class="jazz-container">
            <div class="jazz-utility-header__branding">
                <a class="jazz-utility-header__pu_logo" href="https://www.princeton.edu/" [title]="puBrandingTitle">
                <img [src]="puBrandingLogo" alt="Princeton University Logo" />
                </a>
                <div class="jazz-div"></div>
                <div class="jazz-utility-header__site-branding">
                    <a class="jazz-utility-header__site-name" [href]="siteBrandingLink" [title]="siteBrandingTitle" rel="home">{{ siteBrandingName }}</a>
                    <div class="jazz-utility-header__site-slogan">{{ siteBrandingSlogan }}</div>
                </div>
            </div>
            <div class="jazz-utility-header__options">
                <section class="jazz-utility-header__nav" [class.jazz-expanded]="menuExpanded">
                    <h2 class="jazz-visually-hidden">{{ utilityLinksHeading }}</h2>
                    <button class="jazz-utility-header__nav-toggle" aria-expanded="false" (click)="toggleMenu()"><i class="jazz-icon jazz-icon-menu" [class.jazz-icon-menu]="!menuExpanded" [class.jazz-icon-close]="menuExpanded" aria-hidden="true"></i><span class="jazz-visually-hidden">{{ menuButtonLabel }}</span></button>
                    <nav class="jazz-nav">
                        <ul>
                            <li *ngFor="let link of links"><a [href]="link.url" [attr.target]="link.external ? '_blank' : null">{{ link.label }}</a></li>
                        </ul>
                    </nav>
                </section>
                <div class="jazz-div"></div>
                <section class="jazz-utility-header__user-options">
                    <h2 class="jazz-visually-hidden">User Options</h2>
                    <ul>
                        <li><a href="javascript:void(0);">Log In</a></li>
                    </ul>
                </section>
            </div>
        </div>
    </header>
  `
})
export class UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */ {

  @ContentChildren(UtilityHeaderLinkComponent) links: QueryList<UtilityHeaderLinkComponent>;

  @Input()
  stuckMobile = true;

  @Input()
  stuckDesktop = true;

  @Input()
  primaryHeading: string;

  @Input()
  puBrandingTitle: string;

  @Input()
  puBrandingLogo = './assets/logos/pu-logo-stacked-white.svg';

  @Input()
  siteBrandingName: string;

  @Input()
  siteBrandingSlogan: string;

  @Input()
  siteBrandingLink: string;

  @Input()
  siteBrandingTitle: string;

  @Input()
  utilityLinksHeading = 'Related Links';

  menuExpanded = false;
  menuButtonLabel = 'Open Navigation Menu';

  toggleMenu(): void {
    this.menuExpanded = !this.menuExpanded;
    this.menuButtonLabel = this.menuExpanded ? 'Close Navigation Menu' : 'Open Navigation Menu';
  }

  // @Input()
  // title: string;
  //
  // @Input()
  // siteBrandingName: string;
  //
  // @Input()
  // siteBrandingSlogan: string;
  //
  // @Input()
  // siteBrandingUrl: string;
  //
  // @Input()
  // siteBrandingLogo: string;
  //
  // @Input()
  // showSearch = true;
  //
  // @Input()
  // showCompact = false;
  //
  // @ContentChild(MainMenuComponent)
  // mainMenu: MainMenuComponent;
  //
  // @ContentChild(UtilityMenuComponent)
  // utilityMenu: UtilityMenuComponent;
  //
  // @HostListener('window:resize', ['$event'])
  // onResize(event): void {
  //   this.displayWindowSize();
  // }
  //
  // constructor(
  //   private cdr: ChangeDetectorRef
  // ) {}
  //
  // ngAfterViewChecked(): void {
  //   this.cdr.detectChanges();
  // }
  //
  // ngAfterContentChecked(): void {
  //   // console.log('utilityMenu', this.utilityMenu);
  // }
  //
  // displayWindowSize(): void {
  //   // Search Reset
  //   document.querySelectorAll(SEARCH_PANEL).forEach((searchbar) => {
  //     searchbar.classList.remove(SEARCH_SHOWN_STYLE);
  //   });
  //
  //   document.querySelectorAll(SEARCH_SELECTOR).forEach((button) => {
  //     button.setAttribute(ARIA_EXPANDED, 'false');
  //     const searchToggleIcon = button.querySelector(ICON_SELECTOR);
  //     searchToggleIcon.classList.remove(ICON_CLOSE);
  //     searchToggleIcon.classList.add(ICON_SEARCH);
  //   });
  // }
  //
  // getSiteBrandingLogo(): string {
  //   if (this.siteBrandingLogo) {
  //     return this.siteBrandingLogo;
  //   }
  //   if (this.showCompact) {
  //       return './assets/logos/pu-logo-stacked-white.svg';
  //   }
  //   return './assets/logos/pu-shield.svg';
  // }
}
