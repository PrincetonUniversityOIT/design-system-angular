export class MenuItem {
  public readonly label: string
  public readonly url: string;
  public readonly current: boolean;

  public readonly subItems: MenuItem[] = [];

  constructor(label: string, url: string, current: boolean, subItems?: MenuItem[]) {
    this.label = label;
    this.url = url;
    this.current = current;
    this.subItems = subItems;
  }
}
