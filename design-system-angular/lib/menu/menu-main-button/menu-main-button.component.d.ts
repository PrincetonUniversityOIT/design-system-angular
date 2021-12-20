import { OnInit, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare const ARIA_EXPANDED = "aria-expanded";
export declare class MenuMainButtonComponent implements OnInit {
    private viewContainerRef;
    mainButtonTemplate: any;
    buttonClass: string;
    showCompact: boolean;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    onMainMenuClick(event: any): void;
    showMenu(expand: any, button: any): void;
    showUtilityMenu(expand: any, button: any): void;
    getMenuText(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MenuMainButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MenuMainButtonComponent, "jazz-menu-main-button", never, { "buttonClass": "buttonClass"; "showCompact": "showCompact"; }, {}, never, never>;
}

//# sourceMappingURL=menu-main-button.component.d.ts.map