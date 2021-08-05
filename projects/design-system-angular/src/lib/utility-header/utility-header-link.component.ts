import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

/**
 * @example
 `` `
    <jazz-utility-header-link label="Google" url="https://www.google.com/"></jazz-utility-header-link>
 `` `
 */
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
  @Input() class?: string;
  @Input() routerLink: RouterLink;
}
