import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  TemplateRef
} from '@angular/core';
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
                    <a *ngIf="siteBrandingName" class="jazz-utility-header__site-name" [href]="siteBrandingLink" [title]="siteBrandingTitle" rel="home">{{ siteBrandingName }}</a>
                    <div *ngIf="siteBrandingSlogan" class="jazz-utility-header__site-slogan">{{ siteBrandingSlogan }}</div>

                    <ng-template [ngIf]="!officeOfTemplate" [ngIfElse]="officeOfTemplate">
                      <a *ngIf="officeOf" class="jazz-utility-header__site-name-office-of" [href]="officeOfLink" title="Office of {{officeOf}}" rel="home">Office of
                          <br/>
                          <div class="jazz-utility-header__site-name-office-of-department">{{officeOf}}</div>
                      </a>
                    </ng-template>
                </div>
            </div>
            <div class="jazz-utility-header__options">
                <section class="jazz-utility-header__nav" [class.jazz-expanded]="menuExpanded">
                    <h2 class="jazz-visually-hidden">{{ utilityLinksHeading }}</h2>
                    <button class="jazz-utility-header__nav-toggle" [attr.aria-expanded]="menuExpanded" (click)="toggleMenu()"><i class="jazz-icon jazz-icon-menu" [class.jazz-icon-menu]="!menuExpanded" [class.jazz-icon-close]="menuExpanded" aria-hidden="true"></i><span class="jazz-visually-hidden">{{ menuButtonLabel }}</span></button>
                    <nav class="jazz-nav">
                        <ul>
                            <li *ngFor="let link of links"><a [href]="link.url" class="{{link.class}}" [attr.target]="link.external ? '_blank' : null" (click)="toggleMenu()">{{ link.label }}</a></li>
                        </ul>
                    </nav>
                </section>
                <div class="jazz-div"></div>
                <section class="jazz-utility-header__user-options">
                    <h2 class="jazz-visually-hidden">User Options</h2>
                    <ng-template [ngIf]="!userOptionsTemplate" [ngIfElse]="userOptionsTemplate">
                      <ul>
                        <li *ngIf="!username"><a [href]="loginUrl">Log In</a></li>
                        <li *ngIf="username"><a [href]="logoutUrl">Log Out</a></li>
                      </ul>
                    </ng-template>
                </section>
            </div>
        </div>
    </header>
  `
})
export class UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */ {

  @ContentChildren(UtilityHeaderLinkComponent) links: QueryList<UtilityHeaderLinkComponent>;

  @Input('officeOfTemplate')
  officeOfTemplate: TemplateRef<any>;

  @Input('userOptionsTemplate')
  userOptionsTemplate: TemplateRef<any>;

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
  siteBrandingName?: string;

  @Input()
  siteBrandingSlogan?: string;

  @Input()
  siteBrandingLink: string;

  @Input()
  siteBrandingTitle: string;

  @Input()
  officeOfLink?: string;

  @Input()
  officeOf?: string;

  @Input()
  utilityLinksHeading = 'Related Links';

  @Input()
  loginUrl: string;

  @Input()
  logoutUrl: string;

  @Input()
  username: string;

  menuExpanded = false;
  menuButtonLabel = 'Open Navigation Menu';

  toggleMenu(): void {
    this.menuExpanded = !this.menuExpanded;
    this.menuButtonLabel = this.menuExpanded ? 'Close Navigation Menu' : 'Open Navigation Menu';
  }
}
