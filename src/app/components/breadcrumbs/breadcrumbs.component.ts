import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-breadcrumb',
  template: ``
})
export class BreadcrumbComponent {
  @Input() disabled = false;
  @Input() label: string;
  @Input() url: string;
}

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

  isActiveRoute(url: string): boolean {
    return this.router.isActive(url, true);
  }

}
