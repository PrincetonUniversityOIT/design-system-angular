export class MenuItem {
  public readonly label: string
  public readonly url: string;
  public readonly shownByDefault?: boolean;

  public subItems?: MenuItem[] = [];

  constructor(label: string, url: string, subItems?: MenuItem[], shownByDefault?: boolean ) {
    this.label = label;
    this.url = url;
    this.subItems = subItems;
    this.shownByDefault = shownByDefault;
  }
}
