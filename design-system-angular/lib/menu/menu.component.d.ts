import { MainMenuItemComponent } from '../header/main-menu/main-menu-item';
import { UtilityItemComponent } from '../header/utility-menu/utility-menu-item';
export declare class MenuComponent {
    menuItems?: MainMenuItemComponent[];
    utilityItems?: UtilityItemComponent[];
    onResize(event: any): void;
    constructor();
    displayWindowSize(): void;
    getButtonForSelector(btnSelector: any, button: any, mainEl: any): any;
    closeSubMenus(): void;
    resetSubMenus(): void;
    onMouseOut(event: any): void;
}
