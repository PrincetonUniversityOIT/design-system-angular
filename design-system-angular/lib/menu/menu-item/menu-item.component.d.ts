import { EventEmitter, OnInit, ViewContainerRef } from '@angular/core';
import { MainMenuItemComponent } from '../../header/main-menu/main-menu-item';
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
}
