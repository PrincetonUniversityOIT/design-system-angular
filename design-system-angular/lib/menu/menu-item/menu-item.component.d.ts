import { EventEmitter, OnInit, ViewContainerRef } from '@angular/core';
import { MainMenuItemComponent } from '../../header/main-menu/main-menu-item';
import * as ɵngcc0 from '@angular/core';
export declare class MenuItemComponent implements OnInit {
    private viewContainerRef;
    template: any;
    menuItem: MainMenuItemComponent;
    closeSubMenus: EventEmitter<void>;
    resetSubMenus: EventEmitter<void>;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    getClass(): string;
    removeSelf(comp: any): boolean;
    close(): void;
    reset(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MenuItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MenuItemComponent, "jazz-menu-item", never, { "menuItem": "menuItem"; }, { "closeSubMenus": "closeSubMenus"; "resetSubMenus": "resetSubMenus"; }, never, never>;
}

//# sourceMappingURL=menu-item.component.d.ts.map