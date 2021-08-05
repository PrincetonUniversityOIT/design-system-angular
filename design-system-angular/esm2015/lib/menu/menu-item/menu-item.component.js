import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MainMenuItemComponent } from '../../header/main-menu/main-menu-item';
export class MenuItemComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.closeSubMenus = new EventEmitter();
        this.resetSubMenus = new EventEmitter();
    }
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
    getClass() {
        return this.menuItem.shownByDefault ? 'jazz-menubar__submenu--shown-by-default' : '';
    }
    // Storybook arrays for some reason has the original component in the children list
    // This results in an infinite loop
    removeSelf(comp) {
        if (comp === this.menuItem) {
            return true;
        }
        return false;
    }
    close() {
        this.closeSubMenus.emit();
    }
    reset() {
        this.resetSubMenus.emit();
    }
}
MenuItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-menu-item',
                template: "<ng-template #template>\n  <a *ngIf=\"menuItem.url\" [routerLink]=\"menuItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n    [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{menuItem.label}}</a>\n  <a *ngIf=\"menuItem.externalUrl\" href=\"{{menuItem.externalUrl}}\">{{menuItem.label}}</a>\n  <jazz-sub-button [menuItem]=\"menuItem\" (closeSubMenus)=\"close()\" (resetSubMenus)=\"reset()\"></jazz-sub-button>\n  <ul *ngIf=\"menuItem && menuItem.menuComponents && menuItem.menuComponents.length > 0\" [class]=\"getClass()\">\n    <li *ngFor=\"let levelItem of menuItem.menuComponents\">\n        <jazz-menu-item *ngIf=\"!removeSelf(levelItem)\" [menuItem]=\"levelItem\"></jazz-menu-item>\n    </li>\n  </ul>\n</ng-template>\n"
            },] }
];
MenuItemComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
MenuItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['template', { static: true },] }],
    menuItem: [{ type: Input }],
    closeSubMenus: [{ type: Output }],
    resetSubMenus: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL21lbnUvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFPNUUsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QixZQUNVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTjVDLGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdkQsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUlwRCxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxtRkFBbUY7SUFDbkYsbUNBQW1DO0lBQ25DLFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixxd0JBQXlDO2FBQzFDOzs7WUFQa0UsZ0JBQWdCOzs7dUJBVWhGLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO3VCQUVwQyxLQUFLOzRCQUdMLE1BQU07NEJBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWFpbk1lbnVJdGVtQ29tcG9uZW50fSBmcm9tICcuLi8uLi9oZWFkZXIvbWFpbi1tZW51L21haW4tbWVudS1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZScsIHtzdGF0aWM6IHRydWV9KSB0ZW1wbGF0ZTtcblxuICBASW5wdXQoKVxuICBtZW51SXRlbTogTWFpbk1lbnVJdGVtQ29tcG9uZW50O1xuXG4gIEBPdXRwdXQoKVxuICBjbG9zZVN1Yk1lbnVzOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlc2V0U3ViTWVudXM6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gIH1cblxuICBnZXRDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1lbnVJdGVtLnNob3duQnlEZWZhdWx0ID8gJ2phenotbWVudWJhcl9fc3VibWVudS0tc2hvd24tYnktZGVmYXVsdCcgOiAnJztcbiAgfVxuXG4gIC8vIFN0b3J5Ym9vayBhcnJheXMgZm9yIHNvbWUgcmVhc29uIGhhcyB0aGUgb3JpZ2luYWwgY29tcG9uZW50IGluIHRoZSBjaGlsZHJlbiBsaXN0XG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhbiBpbmZpbml0ZSBsb29wXG4gIHJlbW92ZVNlbGYoY29tcCk6IGJvb2xlYW4ge1xuICAgIGlmIChjb21wID09PSB0aGlzLm1lbnVJdGVtKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZVN1Yk1lbnVzLmVtaXQoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRTdWJNZW51cy5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==