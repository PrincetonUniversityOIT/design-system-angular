import {Component, ContentChildren, QueryList} from '@angular/core';
import {MainMenuItemComponent} from './main-menu-item';

@Component({
  selector: 'app-jazz-main-menu',
  template: `
      <ng-content></ng-content>
  `,
})
export class MainMenuComponent {
  @ContentChildren(MainMenuItemComponent, {descendants: false}) menuComponents: QueryList<MainMenuItemComponent>;
}
