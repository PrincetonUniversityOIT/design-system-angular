import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-utility-header-link',
  template: `
      <ng-content></ng-content>
  `,
})
export class UtilityHeaderLinkComponent {
  @Input() url?: string;
  @Input() label: string;
  @Input() external = false;
  @Input() routerLink: RouterLink;
}
