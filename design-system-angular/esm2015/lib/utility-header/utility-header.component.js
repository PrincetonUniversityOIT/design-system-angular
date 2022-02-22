import { Component, Input, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { UtilityHeaderLinkComponent } from './utility-header-link.component';
/**
 * A header provides a way for a visitor to understand the overall context of the page or screen that they are visiting.
 * This is accomplished through clear brand identity, identification of the visitor’s authentication status, and affordances for
 * navigation to other sections of the site/application and/or  navigation to other closely related information & utilities.
 *
 * @example
  `` `
 <jazz-utility-header
     primaryHeading="Text Primary Heading"
     puBrandingTitle="PU Branding Title"
     siteBrandingLink="https://communications.princeton.edu"
     siteBrandingName="Site Branding Name"
     siteBrandingSlogan="Site Branding Slogan"
     siteBrandingTitle="SiteBranding Title"
     loginUrl="https://www.google.com/"
     logoutUrl="https://www.microsoft.com/"
     username=""
     [stuckDesktop]="true"
     [stuckMobile]="true"
     utilityLinksHeading="Related Links">
       <jazz-utility-header-link label="Google" url="https://www.google.com/"></jazz-utility-header-link>
       <jazz-utility-header-link label="Princeton" url="https://www.princeton.edu/"></jazz-utility-header-link>
       <jazz-utility-header-link label="Microsoft" url="https://www.microsoft.com/"></jazz-utility-header-link>
 </jazz-utility-header>
 `` `
*/
export class UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */ {
    constructor() {
        this.stuckMobile = true;
        this.stuckDesktop = true;
        this.puBrandingLogo = './assets/logos/pu-logo-stacked-white.svg';
        this.utilityLinksHeading = 'Related Links';
        this.menuExpanded = false;
        this.menuButtonLabel = 'Open Navigation Menu';
    }
    toggleMenu() {
        this.menuExpanded = !this.menuExpanded;
        this.menuButtonLabel = this.menuExpanded ? 'Close Navigation Menu' : 'Open Navigation Menu';
    }
}
UtilityHeaderComponent.decorators = [
    { type: Component, args: [{
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
                            <li *ngFor="let link of links">
                              <a *ngIf="link.url" [href]="link.url" class="{{link.class}}" [attr.target]="link.external ? '_blank' : null" (click)="toggleMenu()">{{ link.label }}</a>
                              <a *ngIf="link.routerLink" [routerLink]="link.routerLink" routerLinkActive="active" #menuLink="routerLinkActive">{{link.label}}</a>
                            </li>
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
            },] }
];
UtilityHeaderComponent.propDecorators = {
    links: [{ type: ContentChildren, args: [UtilityHeaderLinkComponent,] }],
    officeOfTemplate: [{ type: Input, args: ['officeOfTemplate',] }],
    userOptionsTemplate: [{ type: Input, args: ['userOptionsTemplate',] }],
    stuckMobile: [{ type: Input }],
    stuckDesktop: [{ type: Input }],
    primaryHeading: [{ type: Input }],
    puBrandingTitle: [{ type: Input }],
    puBrandingLogo: [{ type: Input }],
    siteBrandingName: [{ type: Input }],
    siteBrandingSlogan: [{ type: Input }],
    siteBrandingLink: [{ type: Input }],
    siteBrandingTitle: [{ type: Input }],
    officeOfLink: [{ type: Input }],
    officeOf: [{ type: Input }],
    utilityLinksHeading: [{ type: Input }],
    loginUrl: [{ type: Input }],
    logoutUrl: [{ type: Input }],
    username: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvdXRpbGl0eS1oZWFkZXIvdXRpbGl0eS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGVBQWUsRUFDZixTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeUJFO0FBeURGLE1BQU0sT0FBTyxzQkFBc0IsQ0FBQyxzREFBc0Q7SUF4RDFGO1FBbUVFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBU3BCLG1CQUFjLEdBQUcsMENBQTBDLENBQUM7UUFxQjVELHdCQUFtQixHQUFHLGVBQWUsQ0FBQztRQVd0QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixvQkFBZSxHQUFHLHNCQUFzQixDQUFDO0lBTTNDLENBQUM7SUFKQyxVQUFVO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDOUYsQ0FBQzs7O1lBckhGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbURUO2FBQ0Y7OztvQkFHRSxlQUFlLFNBQUMsMEJBQTBCOytCQUUxQyxLQUFLLFNBQUMsa0JBQWtCO2tDQUd4QixLQUFLLFNBQUMscUJBQXFCOzBCQUczQixLQUFLOzJCQUdMLEtBQUs7NkJBR0wsS0FBSzs4QkFHTCxLQUFLOzZCQUdMLEtBQUs7K0JBR0wsS0FBSztpQ0FHTCxLQUFLOytCQUdMLEtBQUs7Z0NBR0wsS0FBSzsyQkFHTCxLQUFLO3VCQUdMLEtBQUs7a0NBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLEtBQUs7dUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXRpbGl0eUhlYWRlckxpbmtDb21wb25lbnR9IGZyb20gJy4vdXRpbGl0eS1oZWFkZXItbGluay5jb21wb25lbnQnO1xuLyoqXG4gKiBBIGhlYWRlciBwcm92aWRlcyBhIHdheSBmb3IgYSB2aXNpdG9yIHRvIHVuZGVyc3RhbmQgdGhlIG92ZXJhbGwgY29udGV4dCBvZiB0aGUgcGFnZSBvciBzY3JlZW4gdGhhdCB0aGV5IGFyZSB2aXNpdGluZy5cbiAqIFRoaXMgaXMgYWNjb21wbGlzaGVkIHRocm91Z2ggY2xlYXIgYnJhbmQgaWRlbnRpdHksIGlkZW50aWZpY2F0aW9uIG9mIHRoZSB2aXNpdG9y4oCZcyBhdXRoZW50aWNhdGlvbiBzdGF0dXMsIGFuZCBhZmZvcmRhbmNlcyBmb3JcbiAqIG5hdmlnYXRpb24gdG8gb3RoZXIgc2VjdGlvbnMgb2YgdGhlIHNpdGUvYXBwbGljYXRpb24gYW5kL29yICBuYXZpZ2F0aW9uIHRvIG90aGVyIGNsb3NlbHkgcmVsYXRlZCBpbmZvcm1hdGlvbiAmIHV0aWxpdGllcy5cbiAqXG4gKiBAZXhhbXBsZVxuICBgYCBgXG4gPGphenotdXRpbGl0eS1oZWFkZXJcbiAgICAgcHJpbWFyeUhlYWRpbmc9XCJUZXh0IFByaW1hcnkgSGVhZGluZ1wiXG4gICAgIHB1QnJhbmRpbmdUaXRsZT1cIlBVIEJyYW5kaW5nIFRpdGxlXCJcbiAgICAgc2l0ZUJyYW5kaW5nTGluaz1cImh0dHBzOi8vY29tbXVuaWNhdGlvbnMucHJpbmNldG9uLmVkdVwiXG4gICAgIHNpdGVCcmFuZGluZ05hbWU9XCJTaXRlIEJyYW5kaW5nIE5hbWVcIlxuICAgICBzaXRlQnJhbmRpbmdTbG9nYW49XCJTaXRlIEJyYW5kaW5nIFNsb2dhblwiXG4gICAgIHNpdGVCcmFuZGluZ1RpdGxlPVwiU2l0ZUJyYW5kaW5nIFRpdGxlXCJcbiAgICAgbG9naW5Vcmw9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiXG4gICAgIGxvZ291dFVybD1cImh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vXCJcbiAgICAgdXNlcm5hbWU9XCJcIlxuICAgICBbc3R1Y2tEZXNrdG9wXT1cInRydWVcIlxuICAgICBbc3R1Y2tNb2JpbGVdPVwidHJ1ZVwiXG4gICAgIHV0aWxpdHlMaW5rc0hlYWRpbmc9XCJSZWxhdGVkIExpbmtzXCI+XG4gICAgICAgPGphenotdXRpbGl0eS1oZWFkZXItbGluayBsYWJlbD1cIkdvb2dsZVwiIHVybD1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCI+PC9qYXp6LXV0aWxpdHktaGVhZGVyLWxpbms+XG4gICAgICAgPGphenotdXRpbGl0eS1oZWFkZXItbGluayBsYWJlbD1cIlByaW5jZXRvblwiIHVybD1cImh0dHBzOi8vd3d3LnByaW5jZXRvbi5lZHUvXCI+PC9qYXp6LXV0aWxpdHktaGVhZGVyLWxpbms+XG4gICAgICAgPGphenotdXRpbGl0eS1oZWFkZXItbGluayBsYWJlbD1cIk1pY3Jvc29mdFwiIHVybD1cImh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vXCI+PC9qYXp6LXV0aWxpdHktaGVhZGVyLWxpbms+XG4gPC9qYXp6LXV0aWxpdHktaGVhZGVyPlxuIGBgIGBcbiovXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotdXRpbGl0eS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXJcbiAgICAgICAgcm9sZT1cImJhbm5lclwiXG4gICAgICAgIGNsYXNzPVwiamF6ei11dGlsaXR5LWhlYWRlclwiXG4gICAgICAgIFtjbGFzcy5qYXp6LXN0dWNrLW1vYmlsZV09XCJzdHVja01vYmlsZVwiXG4gICAgICAgIFtjbGFzcy5qYXp6LXN0dWNrXT1cInN0dWNrRGVza3RvcFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJqYXp6LXZpc3VhbGx5LWhpZGRlblwiPnt7IHByaW1hcnlIZWFkaW5nIH19PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImphenotY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiamF6ei11dGlsaXR5LWhlYWRlcl9fYnJhbmRpbmdcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImphenotdXRpbGl0eS1oZWFkZXJfX3B1X2xvZ29cIiBocmVmPVwiaHR0cHM6Ly93d3cucHJpbmNldG9uLmVkdS9cIiBbdGl0bGVdPVwicHVCcmFuZGluZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cInB1QnJhbmRpbmdMb2dvXCIgYWx0PVwiUHJpbmNldG9uIFVuaXZlcnNpdHkgTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqYXp6LWRpdlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqYXp6LXV0aWxpdHktaGVhZGVyX19zaXRlLWJyYW5kaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwic2l0ZUJyYW5kaW5nTmFtZVwiIGNsYXNzPVwiamF6ei11dGlsaXR5LWhlYWRlcl9fc2l0ZS1uYW1lXCIgW2hyZWZdPVwic2l0ZUJyYW5kaW5nTGlua1wiIFt0aXRsZV09XCJzaXRlQnJhbmRpbmdUaXRsZVwiIHJlbD1cImhvbWVcIj57eyBzaXRlQnJhbmRpbmdOYW1lIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2l0ZUJyYW5kaW5nU2xvZ2FuXCIgY2xhc3M9XCJqYXp6LXV0aWxpdHktaGVhZGVyX19zaXRlLXNsb2dhblwiPnt7IHNpdGVCcmFuZGluZ1Nsb2dhbiB9fTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhb2ZmaWNlT2ZUZW1wbGF0ZVwiIFtuZ0lmRWxzZV09XCJvZmZpY2VPZlRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJvZmZpY2VPZlwiIGNsYXNzPVwiamF6ei11dGlsaXR5LWhlYWRlcl9fc2l0ZS1uYW1lLW9mZmljZS1vZlwiIFtocmVmXT1cIm9mZmljZU9mTGlua1wiIHRpdGxlPVwiT2ZmaWNlIG9mIHt7b2ZmaWNlT2Z9fVwiIHJlbD1cImhvbWVcIj5PZmZpY2Ugb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImphenotdXRpbGl0eS1oZWFkZXJfX3NpdGUtbmFtZS1vZmZpY2Utb2YtZGVwYXJ0bWVudFwiPnt7b2ZmaWNlT2Z9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImphenotdXRpbGl0eS1oZWFkZXJfX29wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImphenotdXRpbGl0eS1oZWFkZXJfX25hdlwiIFtjbGFzcy5qYXp6LWV4cGFuZGVkXT1cIm1lbnVFeHBhbmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJqYXp6LXZpc3VhbGx5LWhpZGRlblwiPnt7IHV0aWxpdHlMaW5rc0hlYWRpbmcgfX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiamF6ei11dGlsaXR5LWhlYWRlcl9fbmF2LXRvZ2dsZVwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwibWVudUV4cGFuZGVkXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiPjxpIGNsYXNzPVwiamF6ei1pY29uIGphenotaWNvbi1tZW51XCIgW2NsYXNzLmphenotaWNvbi1tZW51XT1cIiFtZW51RXhwYW5kZWRcIiBbY2xhc3MuamF6ei1pY29uLWNsb3NlXT1cIm1lbnVFeHBhbmRlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3BhbiBjbGFzcz1cImphenotdmlzdWFsbHktaGlkZGVuXCI+e3sgbWVudUJ1dHRvbkxhYmVsIH19PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiamF6ei1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGxpbmsgb2YgbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwibGluay51cmxcIiBbaHJlZl09XCJsaW5rLnVybFwiIGNsYXNzPVwie3tsaW5rLmNsYXNzfX1cIiBbYXR0ci50YXJnZXRdPVwibGluay5leHRlcm5hbCA/ICdfYmxhbmsnIDogbnVsbFwiIChjbGljayk9XCJ0b2dnbGVNZW51KClcIj57eyBsaW5rLmxhYmVsIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJsaW5rLnJvdXRlckxpbmtcIiBbcm91dGVyTGlua109XCJsaW5rLnJvdXRlckxpbmtcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgI21lbnVMaW5rPVwicm91dGVyTGlua0FjdGl2ZVwiPnt7bGluay5sYWJlbH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImphenotZGl2XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJqYXp6LXV0aWxpdHktaGVhZGVyX191c2VyLW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiamF6ei12aXN1YWxseS1oaWRkZW5cIj5Vc2VyIE9wdGlvbnM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIXVzZXJPcHRpb25zVGVtcGxhdGVcIiBbbmdJZkVsc2VdPVwidXNlck9wdGlvbnNUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cIiF1c2VybmFtZVwiPjxhIFtocmVmXT1cImxvZ2luVXJsXCI+TG9nIEluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJ1c2VybmFtZVwiPjxhIFtocmVmXT1cImxvZ291dFVybFwiPkxvZyBPdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBVdGlsaXR5SGVhZGVyQ29tcG9uZW50IC8qIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCAqLyB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihVdGlsaXR5SGVhZGVyTGlua0NvbXBvbmVudCkgbGlua3M6IFF1ZXJ5TGlzdDxVdGlsaXR5SGVhZGVyTGlua0NvbXBvbmVudD47XG5cbiAgQElucHV0KCdvZmZpY2VPZlRlbXBsYXRlJylcbiAgb2ZmaWNlT2ZUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoJ3VzZXJPcHRpb25zVGVtcGxhdGUnKVxuICB1c2VyT3B0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHN0dWNrTW9iaWxlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzdHVja0Rlc2t0b3AgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHByaW1hcnlIZWFkaW5nOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVCcmFuZGluZ1RpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVCcmFuZGluZ0xvZ28gPSAnLi9hc3NldHMvbG9nb3MvcHUtbG9nby1zdGFja2VkLXdoaXRlLnN2Zyc7XG5cbiAgQElucHV0KClcbiAgc2l0ZUJyYW5kaW5nTmFtZT86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzaXRlQnJhbmRpbmdTbG9nYW4/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l0ZUJyYW5kaW5nTGluazogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNpdGVCcmFuZGluZ1RpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgb2ZmaWNlT2ZMaW5rPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIG9mZmljZU9mPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHV0aWxpdHlMaW5rc0hlYWRpbmcgPSAnUmVsYXRlZCBMaW5rcyc7XG5cbiAgQElucHV0KClcbiAgbG9naW5Vcmw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBsb2dvdXRVcmw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB1c2VybmFtZTogc3RyaW5nO1xuXG4gIG1lbnVFeHBhbmRlZCA9IGZhbHNlO1xuICBtZW51QnV0dG9uTGFiZWwgPSAnT3BlbiBOYXZpZ2F0aW9uIE1lbnUnO1xuXG4gIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51RXhwYW5kZWQgPSAhdGhpcy5tZW51RXhwYW5kZWQ7XG4gICAgdGhpcy5tZW51QnV0dG9uTGFiZWwgPSB0aGlzLm1lbnVFeHBhbmRlZCA/ICdDbG9zZSBOYXZpZ2F0aW9uIE1lbnUnIDogJ09wZW4gTmF2aWdhdGlvbiBNZW51JztcbiAgfVxufVxuIl19