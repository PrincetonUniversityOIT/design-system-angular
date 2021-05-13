import {MenuItem} from './menu-item';

export class HeaderOptions {
  public title: string
  public siteBrandingName: string;
  public siteBrandingSlogan: string;
  public siteBrandingLogo: string;
  public siteBrandingUrl: string;
  public showSearch?: boolean;
  public showCompact?: boolean;
  public menuItems?: MenuItem[];
  public utilityItems?: MenuItem[];

  constructor() {

  }
}
