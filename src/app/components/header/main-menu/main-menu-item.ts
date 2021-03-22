import {Component, ContentChildren, Input, QueryList} from '@angular/core';

@Component({
  selector: 'app-jazz-main-menu-item',
  template: `
      <ng-content></ng-content>
  `,
})
export class MainMenuItemComponent {
  @Input() url: string;
  @Input() label: string;
  @Input() shownByDefault: boolean;
  @ContentChildren(MainMenuItemComponent) menuComponents: QueryList<MainMenuItemComponent>;
}
