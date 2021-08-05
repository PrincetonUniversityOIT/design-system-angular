export declare class MenuItem {
    label: string;
    url?: string;
    externalUrl?: string;
    shownByDefault?: boolean;
    subItems?: MenuItem[];
    constructor(label: string, url?: string, subItems?: MenuItem[], shownByDefault?: boolean, externalUrl?: string);
}
