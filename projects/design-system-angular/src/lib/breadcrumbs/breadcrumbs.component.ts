import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {Router} from '@angular/router';

/**
 * Each link in the Breadcrumbs provides quick navigation to related pages in the site hierarchy.
 *
 * @example
 `` `
     <jazz-breadcrumb url="/" label="Home"></jazz-breadcrumb>
 `` `
 */

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-breadcrumb',
  template: ``
})
export class BreadcrumbComponent {
  @Input() disabled = false;
  @Input() label: string;
  @Input() url: string;
  @Input() iconClass?: string;
}

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

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  @ContentChildren(BreadcrumbComponent) public breadcrumbs: QueryList<BreadcrumbComponent>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * The isActiveRoute method can be used to check if the current route is the active route.
   */
  isActiveRoute(url: string): boolean {
    return this.router.isActive(url, true);
  }

}
