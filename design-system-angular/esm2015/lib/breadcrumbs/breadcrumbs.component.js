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
    url: [{ type: Input }]
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
                template: "<nav class=\"jazz-breadcrumb\" aria-label=\"Breadcrumbs\">\n  <ol>\n    <li *ngFor=\"let crumb of breadcrumbs\">\n      <a *ngIf=\"crumb.url && !isActiveRoute(crumb.url)\" [routerLink]=\"crumb.url\" routerLinkActive=\"active\" #crumbLink=\"routerLinkActive\"\n         [routerLinkActiveOptions]=\"{ exact: true }\"\n         [attr.aria-current]=\"crumbLink.isActive ? 'page' : undefined\">{{crumb.label}}\n      </a>\n\n      <span *ngIf=\"isActiveRoute(crumb.url)\"\n            [attr.aria-current]=\"isActiveRoute(crumb.url) ? 'page' : undefined\">\n        {{crumb.label}}\n      </span>\n    </li>\n  </ol>\n</nav>\n",
                styles: [""]
            },] }
];
BreadcrumbsComponent.ctorParameters = () => [
    { type: Router }
];
BreadcrumbsComponent.propDecorators = {
    breadcrumbs: [{ type: ContentChildren, args: [BreadcrumbComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZDOzs7Ozs7O0dBT0c7QUFPSCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTVcsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUc1QixDQUFDOzs7WUFUQSxTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7dUJBRUUsS0FBSztvQkFDTCxLQUFLO2tCQUNMLEtBQUs7O0FBR1I7Ozs7Ozs7Ozs7Ozs7R0FhRztBQVFILE1BQU0sT0FBTyxvQkFBb0I7SUFJL0IsWUFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwQixDQUFDO0lBRUwsUUFBUTtJQUNSLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxHQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix3bkJBQTJDOzthQUU1Qzs7O1lBMUNPLE1BQU07OzswQkE2Q1gsZUFBZSxTQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBPbkluaXQsIFF1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBFYWNoIGxpbmsgaW4gdGhlIEJyZWFkY3J1bWJzIHByb3ZpZGVzIHF1aWNrIG5hdmlnYXRpb24gdG8gcmVsYXRlZCBwYWdlcyBpbiB0aGUgc2l0ZSBoaWVyYXJjaHkuXG4gKlxuICogQGV4YW1wbGVcbiBgYCBgXG4gICAgIDxqYXp6LWJyZWFkY3J1bWIgdXJsPVwiL1wiIGxhYmVsPVwiSG9tZVwiPjwvamF6ei1icmVhZGNydW1iPlxuIGBgIGBcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnJlYWRjcnVtYnMgYXJlIGEgaGllcmFyY2hpY2FsIGxpc3Qgb2YgbGlua3MgdGhhdCBpbmRpY2F0ZSB3aGVyZSB0aGUgY3VycmVudCBwYWdlIGlzIHNpdHVhdGVkIHdpdGhpbiB0aGUgb3ZlcmFsbFxuICogaW5mb3JtYXRpb24gYXJjaGl0ZWN0dXJlLlxuICpcbiAqIEBleGFtcGxlXG4gYGAgYFxuICAgIDxqYXp6LWJyZWFkY3J1bWJzPlxuICAgICAgIDxqYXp6LWJyZWFkY3J1bWIgdXJsPVwiL1wiIGxhYmVsPVwiSG9tZVwiPjwvamF6ei1icmVhZGNydW1iPlxuICAgICAgIDxqYXp6LWJyZWFkY3J1bWIgdXJsPVwiL21haW5NZW51MVwiIGxhYmVsPVwiTWFpbiBNZW51IDFcIj48L2phenotYnJlYWRjcnVtYj5cbiAgICAgICA8amF6ei1icmVhZGNydW1iIHVybD1cIi9sZXZlbDJpdGVtMVwiIGxhYmVsPVwiTGV2ZWwgMiBNZW51IDFcIj48L2phenotYnJlYWRjcnVtYj5cbiAgICAgICA8amF6ei1icmVhZGNydW1iIHVybD1cIi9sZXZlbDNpdGVtMVwiIGxhYmVsPVwiTGV2ZWwgMyBNZW51IDFcIj48L2phenotYnJlYWRjcnVtYj5cbiAgPC9qYXp6LWJyZWFkY3J1bWJzPlxuIGBgIGBcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotYnJlYWRjcnVtYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQnJlYWRjcnVtYkNvbXBvbmVudCkgcHVibGljIGJyZWFkY3J1bWJzOiBRdWVyeUxpc3Q8QnJlYWRjcnVtYkNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpc0FjdGl2ZVJvdXRlIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBjaGVjayBpZiB0aGUgY3VycmVudCByb3V0ZSBpcyB0aGUgYWN0aXZlIHJvdXRlLlxuICAgKi9cbiAgaXNBY3RpdmVSb3V0ZSh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5pc0FjdGl2ZSh1cmwsIHRydWUpO1xuICB9XG5cbn1cbiJdfQ==