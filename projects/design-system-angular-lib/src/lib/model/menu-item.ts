export class MenuItem {
  public label: string;
  public url?: string;
  public externalUrl?: string;
  public shownByDefault?: boolean;

  public subItems?: MenuItem[] = [];

  constructor(label: string, url?: string, subItems?: MenuItem[], shownByDefault?: boolean, externalUrl?: string ) {
    this.label = label;
    this.url = url;
    this.externalUrl = externalUrl;
    this.subItems = subItems;
    this.shownByDefault = shownByDefault;
    this.externalUrl = externalUrl;
  }
}
