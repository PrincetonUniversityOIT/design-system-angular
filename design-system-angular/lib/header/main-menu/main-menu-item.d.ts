import { QueryList } from '@angular/core';
export declare class MainMenuItemComponent {
    url?: string;
    externalUrl?: string;
    label: string;
    shownByDefault: boolean;
    menuComponents: QueryList<MainMenuItemComponent>;
}
