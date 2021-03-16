import {MenuItem} from '../../model/menu-item';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jazz-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input()
  title: string;

  @Input()
  siteBrandingName: string;

  @Input()
  siteBrandingSlogan: string;

  @Input()
  menuItems?: MenuItem[];

  @Input()
  utilityItems?: MenuItem[];

  @Input()
  showSearch?: boolean = false;

  @Input()
  showCompact?: boolean = false;

  constructor() {}

}
