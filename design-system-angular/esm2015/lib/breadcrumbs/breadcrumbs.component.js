import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Each link in the Breadcrumbs provides quick navigation to related pages in the site hierarchy.
 *
 * @example
 `` `
     <jazz-breadcrumb url="/" label="Home"></jazz-breadcrumb>
 `` `
 */
export class BreadcrumbComponent {
    constructor() {
        this.disabled = false;
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-breadcrumb',
                template: ``
            },] }
];
BreadcrumbComponent.propDecorators = {
    disabled: [{ type: Input }],
    label: [{ type: Input }],
    url: [{ type: Input }],
    iconClass: [{ type: Input }]
};
/**
 * Breadcrumbs are a hierarchical list of links that indicate where the current page is situated within the overall
 * information architecture.
 *
 * @example
 `` `
    <jazz-breadcrumbs>
       <jazz-breadcrumb url="/" label="Home"></jazz-breadcrumb>
       <jazz-breadcrumb url="/mainMenu1" label="Main Menu 1"></jazz-breadcrumb>
       <jazz-breadcrumb url="/level2item1" label="Level 2 Menu 1"></jazz-breadcrumb>
       <jazz-breadcrumb url="/level3item1" label="Level 3 Menu 1"></jazz-breadcrumb>
  </jazz-breadcrumbs>
 `` `
 */
export class BreadcrumbsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    /**
     * The isActiveRoute method can be used to check if the current route is the active route.
     */
    isActiveRoute(url) {
        return this.router.isActive(url, true);
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-breadcrumbs',
                template: "<nav class=\"jazz-breadcrumb\" aria-label=\"Breadcrumbs\">\n  <ol>\n    <li *ngFor=\"let crumb of breadcrumbs\">\n      <i *ngIf=\"crumb.iconClass\" class=\"jazz-icon {{crumb.iconClass}}\"></i>\n      <a *ngIf=\"crumb.url && !isActiveRoute(crumb.url)\" [routerLink]=\"crumb.url\" routerLinkActive=\"active\" #crumbLink=\"routerLinkActive\"\n         [routerLinkActiveOptions]=\"{ exact: true }\"\n         [attr.aria-current]=\"crumbLink.isActive ? 'page' : undefined\">{{crumb.label}}\n      </a>\n\n      <span *ngIf=\"isActiveRoute(crumb.url)\"\n            [attr.aria-current]=\"isActiveRoute(crumb.url) ? 'page' : undefined\">\n        {{crumb.label}}\n      </span>\n    </li>\n  </ol>\n</nav>\n",
                styles: [""]
            },] }
];
BreadcrumbsComponent.ctorParameters = () => [
    { type: Router }
];
BreadcrumbsComponent.propDecorators = {
    breadcrumbs: [{ type: ContentChildren, args: [BreadcrumbComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZDOzs7Ozs7O0dBT0c7QUFPSCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTVcsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUk1QixDQUFDOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7dUJBRUUsS0FBSztvQkFDTCxLQUFLO2tCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7QUFHUjs7Ozs7Ozs7Ozs7OztHQWFHO0FBUUgsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BCLENBQUM7SUFFTCxRQUFRO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYSxDQUFDLEdBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHlzQkFBMkM7O2FBRTVDOzs7WUEzQ08sTUFBTTs7OzBCQThDWCxlQUFlLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIE9uSW5pdCwgUXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIEVhY2ggbGluayBpbiB0aGUgQnJlYWRjcnVtYnMgcHJvdmlkZXMgcXVpY2sgbmF2aWdhdGlvbiB0byByZWxhdGVkIHBhZ2VzIGluIHRoZSBzaXRlIGhpZXJhcmNoeS5cbiAqXG4gKiBAZXhhbXBsZVxuIGBgIGBcbiAgICAgPGphenotYnJlYWRjcnVtYiB1cmw9XCIvXCIgbGFiZWw9XCJIb21lXCI+PC9qYXp6LWJyZWFkY3J1bWI+XG4gYGAgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnamF6ei1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbkNsYXNzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJyZWFkY3J1bWJzIGFyZSBhIGhpZXJhcmNoaWNhbCBsaXN0IG9mIGxpbmtzIHRoYXQgaW5kaWNhdGUgd2hlcmUgdGhlIGN1cnJlbnQgcGFnZSBpcyBzaXR1YXRlZCB3aXRoaW4gdGhlIG92ZXJhbGxcbiAqIGluZm9ybWF0aW9uIGFyY2hpdGVjdHVyZS5cbiAqXG4gKiBAZXhhbXBsZVxuIGBgIGBcbiAgICA8amF6ei1icmVhZGNydW1icz5cbiAgICAgICA8amF6ei1icmVhZGNydW1iIHVybD1cIi9cIiBsYWJlbD1cIkhvbWVcIj48L2phenotYnJlYWRjcnVtYj5cbiAgICAgICA8amF6ei1icmVhZGNydW1iIHVybD1cIi9tYWluTWVudTFcIiBsYWJlbD1cIk1haW4gTWVudSAxXCI+PC9qYXp6LWJyZWFkY3J1bWI+XG4gICAgICAgPGphenotYnJlYWRjcnVtYiB1cmw9XCIvbGV2ZWwyaXRlbTFcIiBsYWJlbD1cIkxldmVsIDIgTWVudSAxXCI+PC9qYXp6LWJyZWFkY3J1bWI+XG4gICAgICAgPGphenotYnJlYWRjcnVtYiB1cmw9XCIvbGV2ZWwzaXRlbTFcIiBsYWJlbD1cIkxldmVsIDMgTWVudSAxXCI+PC9qYXp6LWJyZWFkY3J1bWI+XG4gIDwvamF6ei1icmVhZGNydW1icz5cbiBgYCBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKEJyZWFkY3J1bWJDb21wb25lbnQpIHB1YmxpYyBicmVhZGNydW1iczogUXVlcnlMaXN0PEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaXNBY3RpdmVSb3V0ZSBtZXRob2QgY2FuIGJlIHVzZWQgdG8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgcm91dGUgaXMgdGhlIGFjdGl2ZSByb3V0ZS5cbiAgICovXG4gIGlzQWN0aXZlUm91dGUodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuaXNBY3RpdmUodXJsLCB0cnVlKTtcbiAgfVxuXG59XG4iXX0=