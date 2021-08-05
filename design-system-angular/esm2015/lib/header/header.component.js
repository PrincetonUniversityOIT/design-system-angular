import { Component, HostListener, Input, ChangeDetectorRef, ContentChild } from '@angular/core';
import { ARIA_EXPANDED } from '../menu/menu-constants';
import { ICON_CLOSE, ICON_SEARCH, ICON_SELECTOR, SEARCH_PANEL, SEARCH_SELECTOR, SEARCH_SHOWN_STYLE } from './header-constants';
import { MainMenuComponent } from './main-menu/main-menu';
import { UtilityMenuComponent } from './utility-menu/utility-menu';
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
export class HeaderComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.showSearch = true;
        this.showCompact = false;
    }
    onResize(event) {
        this.displayWindowSize();
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
    ngAfterContentChecked() {
        // console.log('utilityMenu', this.utilityMenu);
    }
    displayWindowSize() {
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
    getSiteBrandingLogo() {
        if (this.siteBrandingLogo) {
            return this.siteBrandingLogo;
        }
        if (this.showCompact) {
            return './assets/logos/pu-logo-stacked-white.svg';
        }
        return './assets/logos/pu-shield.svg';
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-header',
                template: "<header role=\"banner\" class=\"jazz-header\" *ngIf=\"!showCompact\">\n  <h1 class=\"jazz-visually-hidden\">{{title}}</h1>\n  <div class=\"jazz-skip-links\">\n    <a href=\"#main-content\" class=\"jazz-skip-link\">Skip to main content</a>\n    <a href=\"#search\" class=\"jazz-skip-link\">Skip to search options</a>\n  </div>\n  <div class=\"jazz-container\">\n  <div class=\"jazz-header-container\">\n    <div class=\"jazz-header-right-container\">\n      <div class=\"jazz-header__utility-menu jazz-header__utility-menu--hide-small\">\n        <ul *ngIf=\"utilityMenu && utilityMenu.utilityMenuComponents && utilityMenu.utilityMenuComponents.length > 0\">\n          <li *ngFor=\"let utilityItem of utilityMenu.utilityMenuComponents\">\n            <a *ngIf=\"utilityItem.url\" [routerLink]=\"utilityItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n               [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{utilityItem.label}}</a>\n\n            <a *ngIf=\"utilityItem.externalUrl\" href=\"{{utilityItem.externalUrl}}\">{{utilityItem.label}}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"jazz-header__search-bar\" *ngIf=\"showSearch\">\n          <h2 class=\"jazz-visually-hidden\">Search</h2>\n          <jazz-search-button></jazz-search-button>\n          <div class=\"jazz-header__search-bar-panel\">\n            <form action=\"javascript:void(0)\" method=\"get\" accept-charset=\"UTF-8\" role=\"search\">\n              <label class=\"jazz-visually-hidden\" for=\"search-field\">Search</label>\n              <a id=\"search\">\n                <input type=\"search\" id=\"search-field\" placeholder=\"Search\" autocomplete=\"off\" />\n              </a>\n              <button class=\"jazz-button\" type=\"submit\">\n                <span class=\"jazz-visually-hidden\">Search</span>\n              </button>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jazz-header-break\"></div>\n  <div class=\"jazz-header__site-branding\">\n    <div class=\"jazz-header__site-branding-contents\">\n      <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\" tabindex=\"-1\" aria-hidden=\"true\" class=\"jazz-header__site-branding-home-link\">\n        <img src=\"{{ getSiteBrandingLogo() }}\" alt=\"{{ siteBrandingName }}\"/>\n      </a>\n      <div class=\"jazz-header__site-branding-info\">\n        <div class=\"jazz-header__site-branding-name\">\n          <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\">{{ siteBrandingName }}</a>\n        </div>\n        <div class=\"jazz-header__site-branding-slogan\">\n          {{ siteBrandingSlogan }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jazz-header-collapsed-header\">\n    <div class=\"jazz-container\">\n      <div class=\"jazz-header-collapsed-container\">\n        <div class=\"jazz-header-collapsed__pu-branding\">\n          <a href=\"{{ siteBrandingUrl }}\" title=\"{{title}}\"><img src=\"{{getSiteBrandingLogo()}}\" alt=\"{{title}}\" /></a>\n        </div>\n        <div class=\"jazz-header-collapsed__site-branding--divider\">\n        </div>\n        <div class=\"jazz-header-collapsed__site-branding\">\n          <div class=\"jazz-header-collapsed__site-branding-info\">\n            <div class=\"jazz-header-collapsed__site-branding-name\">\n              <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\">{{ siteBrandingName }}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <jazz-menu [menuItems]=\"mainMenu.menuComponents\" [utilityItems]=\"utilityMenu.utilityMenuComponents\">\n\n  </jazz-menu>\n  </div>\n</header>\n\n<header role=\"banner\" class=\"jazz-utility-header\" *ngIf=\"showCompact\">\n  <h1 class=\"jazz-visually-hidden\">{{ title }}</h1>\n  <div class=\"jazz-skip-links\">\n    <a href=\"#main-content\" class=\"jazz-skip-link\">Skip to main content</a>\n    <a href=\"#search\" class=\"jazz-skip-link\">Skip to search options</a>\n  </div>\n  <div class=\"jazz-container\">\n    <div class=\"jazz-utility-header__branding\">\n      <a class=\"jazz-utility-header__pu_logo\" href=\"{{ siteBrandingUrl }}\" title=\"{{ title }}\">\n        <img src=\"{{ getSiteBrandingLogo() }}\" alt=\"{{ title }}\" /></a>\n      <div class=\"jazz-div\"></div>\n      <div class=\"jazz-utility-header__site-branding\">\n        <a class=\"jazz-utility-header__site-name\" href=\"javascript:void(0);\" title=\"{{ siteBrandingName }}\" rel=\"home\">{{ siteBrandingName }}</a>\n        <div class=\"jazz-utility-header__site-slogan\">{{ siteBrandingSlogan }}</div>\n      </div>\n    </div>\n    <div class=\"jazz-utility-header__options\">\n      <section class=\"jazz-utility-header__nav\">\n        <h2 class=\"jazz-visually-hidden\">Related Links</h2>\n        <jazz-menu-main-button [buttonClass]=\"'jazz-utility-header__nav-toggle'\" [showCompact]=\"true\"></jazz-menu-main-button>\n        <nav class=\"jazz-nav\">\n          <ul>\n            <li *ngFor=\"let menuItem of utilityMenu.utilityMenuComponents\">\n              <a *ngIf=\"menuItem.url\" [routerLink]=\"menuItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n                 [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{menuItem.label}}</a>\n              <a *ngIf=\"menuItem.externalUrl\" href=\"{{menuItem.externalUrl}}\">{{menuItem.label}}</a>\n            </li>\n          </ul>\n        </nav>\n      </section>\n      <div class=\"jazz-div\"></div>\n      <section class=\"jazz-utility-header__user-options\">\n        <h2 class=\"jazz-visually-hidden\">User Options</h2>\n        <ul>\n          <li><a href=\"javascript:void(0);\">Log In</a></li>\n        </ul>\n      </section>\n    </div>\n  </div>\n</header>\n"
            },] }
];
HeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
HeaderComponent.propDecorators = {
    title: [{ type: Input }],
    siteBrandingName: [{ type: Input }],
    siteBrandingSlogan: [{ type: Input }],
    siteBrandingUrl: [{ type: Input }],
    siteBrandingLogo: [{ type: Input }],
    showSearch: [{ type: Input }],
    showCompact: [{ type: Input }],
    mainMenu: [{ type: ContentChild, args: [MainMenuComponent,] }],
    utilityMenu: [{ type: ContentChild, args: [UtilityMenuComponent,] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxpQkFBaUIsRUFBb0IsWUFBWSxFQUNsRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLFVBQVUsRUFDVixXQUFXLEVBQ1gsYUFBYSxFQUNiLFlBQVksRUFDWixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ25CLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFFakU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBT0gsTUFBTSxPQUFPLGVBQWU7SUFrQzFCLFlBQ1UsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQmhDLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFHbEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFlakIsQ0FBQztJQU5KLFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQU1ELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsZ0RBQWdEO0lBQ2xELENBQUM7SUFFRCxpQkFBaUI7UUFDZixlQUFlO1FBQ2YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzVELFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDOUI7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsT0FBTywwQ0FBMEMsQ0FBQztTQUNyRDtRQUNELE9BQU8sOEJBQThCLENBQUM7SUFDeEMsQ0FBQzs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qixnc0xBQXNDO2FBQ3ZDOzs7WUFqREMsaUJBQWlCOzs7b0JBb0RoQixLQUFLOytCQUdMLEtBQUs7aUNBR0wsS0FBSzs4QkFHTCxLQUFLOytCQUdMLEtBQUs7eUJBR0wsS0FBSzswQkFHTCxLQUFLO3VCQUdMLFlBQVksU0FBQyxpQkFBaUI7MEJBRzlCLFlBQVksU0FBQyxvQkFBb0I7dUJBR2pDLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdDaGVja2VkLCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudENoZWNrZWRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FSSUFfRVhQQU5ERUR9IGZyb20gJy4uL21lbnUvbWVudS1jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgSUNPTl9DTE9TRSxcbiAgSUNPTl9TRUFSQ0gsXG4gIElDT05fU0VMRUNUT1IsXG4gIFNFQVJDSF9QQU5FTCxcbiAgU0VBUkNIX1NFTEVDVE9SLFxuICBTRUFSQ0hfU0hPV05fU1RZTEVcbn0gZnJvbSAnLi9oZWFkZXItY29uc3RhbnRzJztcbmltcG9ydCB7TWFpbk1lbnVDb21wb25lbnR9IGZyb20gJy4vbWFpbi1tZW51L21haW4tbWVudSc7XG5pbXBvcnQge1V0aWxpdHlNZW51Q29tcG9uZW50fSBmcm9tICcuL3V0aWxpdHktbWVudS91dGlsaXR5LW1lbnUnO1xuXG4vKipcbiAqIEEgaGVhZGVyIHByb3ZpZGVzIGEgd2F5IGZvciBhIHZpc2l0b3IgdG8gdW5kZXJzdGFuZCB0aGUgb3ZlcmFsbCBjb250ZXh0IG9mIHRoZSBwYWdlIG9yIHNjcmVlbiB0aGF0IHRoZXkgYXJlIHZpc2l0aW5nLlxuICogVGhpcyBpcyBhY2NvbXBsaXNoZWQgdGhyb3VnaCBjbGVhciBicmFuZCBpZGVudGl0eSwgaWRlbnRpZmljYXRpb24gb2YgdGhlIHZpc2l0b3LigJlzIGF1dGhlbnRpY2F0aW9uIHN0YXR1cywgYW5kIGFmZm9yZGFuY2VzIGZvclxuICogbmF2aWdhdGlvbiB0byBvdGhlciBzZWN0aW9ucyBvZiB0aGUgc2l0ZS9hcHBsaWNhdGlvbiBhbmQvb3IgIG5hdmlnYXRpb24gdG8gb3RoZXIgY2xvc2VseSByZWxhdGVkIGluZm9ybWF0aW9uICYgdXRpbGl0aWVzLlxuICpcbiAqIEBleGFtcGxlXG4gYGAgYFxuICA8amF6ei1oZWFkZXIgW3RpdGxlXT1cIidQcmluY2V0b24gVW5pdmVyc2l0eSBEZXNpZ24gU3lzdGVtJ1wiXG4gICAgICAgICAgICAgICBbc2l0ZUJyYW5kaW5nTmFtZV09XCInUkVMQVRJVklUWSdcIiBbc2l0ZUJyYW5kaW5nVXJsXT1cIidodHRwOi8vd3d3LnByaW5jZXRvbi5lZHUnXCJcbiAgICAgICAgICAgICAgIFtzaXRlQnJhbmRpbmdTbG9nYW5dPVwiJ1RoZSBQcmluY2V0b24gVW5pdmVyc2l0eSBEZXNpZ24gU3lzdGVtJ1wiIFtzaG93Q29tcGFjdF09J2ZhbHNlJyBbc2hvd1NlYXJjaF09J3RydWUnPlxuICAgICA8amF6ei1tYWluLW1lbnU+XG4gICAgICAgPGphenotbWFpbi1tZW51LWl0ZW0gbGFiZWw9XCJNYWluIE1lbnUgMVwiIHVybD1cIi9tYWluTWVudTFcIj5cbiAgICAgICAgIDxqYXp6LW1haW4tbWVudS1pdGVtIGxhYmVsPVwiTGV2ZWwgMiBNZW51IDFcIiB1cmw9XCIvbGV2ZWwyaXRlbTFcIiBzaG93bkJ5RGVmYXVsdD1cInRydWVcIj5cbiAgICAgICAgICAgPGphenotbWFpbi1tZW51LWl0ZW0gbGFiZWw9XCJMZXZlbCAzIE1lbnUgMVwiIHVybD1cIi9sZXZlbDNpdGVtMVwiPjwvamF6ei1tYWluLW1lbnUtaXRlbT5cbiAgICAgICAgICAgPGphenotbWFpbi1tZW51LWl0ZW0gbGFiZWw9XCJMZXZlbCAzIE1lbnUgMlwiIHVybD1cIi9sZXZlbDNpdGVtMVwiPjwvamF6ei1tYWluLW1lbnUtaXRlbT5cbiAgICAgICAgICAgPGphenotbWFpbi1tZW51LWl0ZW0gbGFiZWw9XCJMZXZlbCAzIE1lbnUgM1wiIHVybD1cIi9sZXZlbDNpdGVtMVwiPjwvamF6ei1tYWluLW1lbnUtaXRlbT5cbiAgICAgICAgIDwvamF6ei1tYWluLW1lbnUtaXRlbT5cbiAgICAgICAgIDxqYXp6LW1haW4tbWVudS1pdGVtIGxhYmVsPVwiTGV2ZWwgMiBNZW51IDJcIiB1cmw9XCIvbGV2ZWwyaXRlbTFcIj48L2phenotbWFpbi1tZW51LWl0ZW0+XG4gICAgICAgICA8amF6ei1tYWluLW1lbnUtaXRlbSBsYWJlbD1cIkxldmVsIDIgTWVudSAzXCIgdXJsPVwiL2xldmVsMml0ZW0xXCI+PC9qYXp6LW1haW4tbWVudS1pdGVtPlxuICAgICAgPC9qYXp6LW1haW4tbWVudS1pdGVtPlxuICAgICAgPGphenotbWFpbi1tZW51LWl0ZW0gbGFiZWw9XCJNYWluIE1lbnUgMlwiIHVybD1cIi9tYWluTWVudTJcIj48L2phenotbWFpbi1tZW51LWl0ZW0+XG4gICAgICA8amF6ei1tYWluLW1lbnUtaXRlbSBsYWJlbD1cIk1haW4gTWVudSAzXCIgZXh0ZXJuYWxVcmw9XCJodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb21cIj48L2phenotbWFpbi1tZW51LWl0ZW0+XG4gICAgIDwvamF6ei1tYWluLW1lbnU+XG4gICAgIDxqYXp6LXV0aWxpdHktbWVudT5cbiAgICAgICA8amF6ei11dGlsaXR5LWl0ZW0gbGFiZWw9XCJEb2N1bWVudGF0aW9uXCIgZXh0ZXJuYWxVcmw9XCJodHRwOi8vd3d3Lmdvb2dsZS5jb21cIj48L2phenotdXRpbGl0eS1pdGVtPlxuICAgICAgIDxqYXp6LXV0aWxpdHktaXRlbSBsYWJlbD1cIkxvZyBJblwiIHVybD1cIi9sb2dpblwiPjwvamF6ei11dGlsaXR5LWl0ZW0+XG4gICAgIDwvamF6ei11dGlsaXR5LW1lbnU+XG4gICA8L2phenotaGVhZGVyPlxuIGBgIGBcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzaXRlQnJhbmRpbmdOYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l0ZUJyYW5kaW5nU2xvZ2FuOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l0ZUJyYW5kaW5nVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l0ZUJyYW5kaW5nTG9nbzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dTZWFyY2ggPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dDb21wYWN0ID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZChNYWluTWVudUNvbXBvbmVudClcbiAgbWFpbk1lbnU6IE1haW5NZW51Q29tcG9uZW50O1xuXG4gIEBDb250ZW50Q2hpbGQoVXRpbGl0eU1lbnVDb21wb25lbnQpXG4gIHV0aWxpdHlNZW51OiBVdGlsaXR5TWVudUNvbXBvbmVudDtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlXaW5kb3dTaXplKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ3V0aWxpdHlNZW51JywgdGhpcy51dGlsaXR5TWVudSk7XG4gIH1cblxuICBkaXNwbGF5V2luZG93U2l6ZSgpOiB2b2lkIHtcbiAgICAvLyBTZWFyY2ggUmVzZXRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFQVJDSF9QQU5FTCkuZm9yRWFjaCgoc2VhcmNoYmFyKSA9PiB7XG4gICAgICBzZWFyY2hiYXIuY2xhc3NMaXN0LnJlbW92ZShTRUFSQ0hfU0hPV05fU1RZTEUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUFSQ0hfU0VMRUNUT1IpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShBUklBX0VYUEFOREVELCAnZmFsc2UnKTtcbiAgICAgIGNvbnN0IHNlYXJjaFRvZ2dsZUljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcihJQ09OX1NFTEVDVE9SKTtcbiAgICAgIHNlYXJjaFRvZ2dsZUljb24uY2xhc3NMaXN0LnJlbW92ZShJQ09OX0NMT1NFKTtcbiAgICAgIHNlYXJjaFRvZ2dsZUljb24uY2xhc3NMaXN0LmFkZChJQ09OX1NFQVJDSCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRTaXRlQnJhbmRpbmdMb2dvKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2l0ZUJyYW5kaW5nTG9nbykge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUJyYW5kaW5nTG9nbztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd0NvbXBhY3QpIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9sb2dvcy9wdS1sb2dvLXN0YWNrZWQtd2hpdGUuc3ZnJztcbiAgICB9XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9sb2dvcy9wdS1zaGllbGQuc3ZnJztcbiAgfVxufVxuIl19