import { EventEmitter, OnInit, ViewContainerRef } from '@angular/core';
import { MainMenuItemComponent } from "../../header/main-menu/main-menu-item";
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
}
