import { OnInit, QueryList } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Each link in the Breadcrumbs provides quick navigation to related pages in the site hierarchy.
 *
 * @example
 `` `
     <jazz-breadcrumb url="/" label="Home"></jazz-breadcrumb>
 `` `
 */
import * as ɵngcc0 from '@angular/core';
export declare class BreadcrumbComponent {
    disabled: boolean;
    label: string;
    url: string;
    iconClass?: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BreadcrumbComponent, "jazz-breadcrumb", never, { "disabled": "disabled"; "label": "label"; "url": "url"; "iconClass": "iconClass"; }, {}, never, never>;
}
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
export declare class BreadcrumbsComponent implements OnInit {
    private router;
    breadcrumbs: QueryList<BreadcrumbComponent>;
    constructor(router: Router);
    ngOnInit(): void;
    /**
     * The isActiveRoute method can be used to check if the current route is the active route.
     */
    isActiveRoute(url: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BreadcrumbsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BreadcrumbsComponent, "jazz-breadcrumbs", never, {}, {}, ["breadcrumbs"], never>;
}

//# sourceMappingURL=breadcrumbs.component.d.ts.map