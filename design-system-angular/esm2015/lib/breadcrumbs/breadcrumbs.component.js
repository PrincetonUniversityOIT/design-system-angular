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
 * <example-url>http://localhost:4200/jazz-design-system/#/breacrumbs/breadcrumbsExample</example-url>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZDOzs7Ozs7O0dBT0c7QUFPSCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTVcsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUk1QixDQUFDOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7dUJBRUUsS0FBSztvQkFDTCxLQUFLO2tCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7QUFHUjs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQVFILE1BQU0sT0FBTyxvQkFBb0I7SUFJL0IsWUFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwQixDQUFDO0lBRUwsUUFBUTtJQUNSLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxHQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix5c0JBQTJDOzthQUU1Qzs7O1lBNUNPLE1BQU07OzswQkErQ1gsZUFBZSxTQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBPbkluaXQsIFF1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBFYWNoIGxpbmsgaW4gdGhlIEJyZWFkY3J1bWJzIHByb3ZpZGVzIHF1aWNrIG5hdmlnYXRpb24gdG8gcmVsYXRlZCBwYWdlcyBpbiB0aGUgc2l0ZSBoaWVyYXJjaHkuXG4gKlxuICogQGV4YW1wbGVcbiBgYCBgXG4gICAgIDxqYXp6LWJyZWFkY3J1bWIgdXJsPVwiL1wiIGxhYmVsPVwiSG9tZVwiPjwvamF6ei1icmVhZGNydW1iPlxuIGBgIGBcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25DbGFzcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBCcmVhZGNydW1icyBhcmUgYSBoaWVyYXJjaGljYWwgbGlzdCBvZiBsaW5rcyB0aGF0IGluZGljYXRlIHdoZXJlIHRoZSBjdXJyZW50IHBhZ2UgaXMgc2l0dWF0ZWQgd2l0aGluIHRoZSBvdmVyYWxsXG4gKiBpbmZvcm1hdGlvbiBhcmNoaXRlY3R1cmUuXG4gKlxuICogPGV4YW1wbGUtdXJsPmh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9qYXp6LWRlc2lnbi1zeXN0ZW0vIy9icmVhY3J1bWJzL2JyZWFkY3J1bWJzRXhhbXBsZTwvZXhhbXBsZS11cmw+XG4gKiBAZXhhbXBsZVxuIGBgIGBcbiAgICA8amF6ei1icmVhZGNydW1icz5cbiAgICAgICA8amF6ei1icmVhZGNydW1iIHVybD1cIi9cIiBsYWJlbD1cIkhvbWVcIj48L2phenotYnJlYWRjcnVtYj5cbiAgICAgICA8amF6ei1icmVhZGNydW1iIHVybD1cIi9tYWluTWVudTFcIiBsYWJlbD1cIk1haW4gTWVudSAxXCI+PC9qYXp6LWJyZWFkY3J1bWI+XG4gICAgICAgPGphenotYnJlYWRjcnVtYiB1cmw9XCIvbGV2ZWwyaXRlbTFcIiBsYWJlbD1cIkxldmVsIDIgTWVudSAxXCI+PC9qYXp6LWJyZWFkY3J1bWI+XG4gICAgICAgPGphenotYnJlYWRjcnVtYiB1cmw9XCIvbGV2ZWwzaXRlbTFcIiBsYWJlbD1cIkxldmVsIDMgTWVudSAxXCI+PC9qYXp6LWJyZWFkY3J1bWI+XG4gIDwvamF6ei1icmVhZGNydW1icz5cbiBgYCBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKEJyZWFkY3J1bWJDb21wb25lbnQpIHB1YmxpYyBicmVhZGNydW1iczogUXVlcnlMaXN0PEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaXNBY3RpdmVSb3V0ZSBtZXRob2QgY2FuIGJlIHVzZWQgdG8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgcm91dGUgaXMgdGhlIGFjdGl2ZSByb3V0ZS5cbiAgICovXG4gIGlzQWN0aXZlUm91dGUodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuaXNBY3RpdmUodXJsLCB0cnVlKTtcbiAgfVxuXG59XG4iXX0=