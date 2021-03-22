import {Component, ContentChildren, QueryList} from '@angular/core';
import {UtilityItemComponent} from './utility-menu-item';

@Component({
  selector: 'app-jazz-utility-menu',
  template: `
      <ng-content></ng-content>
  `,
})
export class UtilityMenuComponent {
  @ContentChildren(UtilityItemComponent) utilityMenuComponents: QueryList<UtilityItemComponent>;
}
