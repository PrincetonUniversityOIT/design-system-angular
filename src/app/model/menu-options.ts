import {MenuItem} from './menu-item';

export class MenuOptions {
  public title: string
  public siteBrandingName: string;
  public siteBrandingSlogan: string;
  public showSearch?: boolean;
  public showCompact?: boolean;
  public menuItems?: MenuItem[];
  public utilityItems?: MenuItem[];

  constructor() {

  }
}
