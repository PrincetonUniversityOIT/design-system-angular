import { EventEmitter, OnInit, ViewContainerRef } from '@angular/core';
import { MainMenuItemComponent } from "../../header/main-menu/main-menu-item";
import * as ɵngcc0 from '@angular/core';
export declare class MenuSubButtonComponent implements OnInit {
    private viewContainerRef;
    menuItem: MainMenuItemComponent;
    closeSubMenus: EventEmitter<void>;
    resetSubMenus: EventEmitter<void>;
    subButtonTemplate: any;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    onSubMenuClick(event: any): void;
    showSubMenu(expand: any, button: any): void;
    showSubMenuFull(expand: any, button: any): void;
    showSubMenuCondensed(expand: any, button: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MenuSubButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MenuSubButtonComponent, "jazz-sub-button", never, { "menuItem": "menuItem"; }, { "closeSubMenus": "closeSubMenus"; "resetSubMenus": "resetSubMenus"; }, never, never>;
}

//# sourceMappingURL=menu-sub-button.component.d.ts.map