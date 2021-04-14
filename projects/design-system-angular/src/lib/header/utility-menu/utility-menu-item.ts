import {Component, Input} from '@angular/core';

@Component({
  selector: 'jazz-utility-item',
  template: `
      <ng-content></ng-content>
  `,
})
export class UtilityItemComponent {
  @Input() url?: string;
  @Input() externalUrl?: string;
  @Input() label: string;
}