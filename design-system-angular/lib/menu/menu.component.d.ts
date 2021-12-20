import { MainMenuItemComponent } from '../header/main-menu/main-menu-item';
import { UtilityItemComponent } from '../header/utility-menu/utility-menu-item';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MenuComponent, "jazz-menu", never, { "menuItems": "menuItems"; "utilityItems": "utilityItems"; }, {}, never, never>;
}

//# sourceMappingURL=menu.component.d.ts.map