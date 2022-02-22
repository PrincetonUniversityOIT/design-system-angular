import { Component, Input } from '@angular/core';
/**
 * @example
 `` `
    <jazz-utility-header-link label="Google" url="https://www.google.com/"></jazz-utility-header-link>
 `` `
 */
export class UtilityHeaderLinkComponent {
    constructor() {
        this.external = false;
    }
}
UtilityHeaderLinkComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-header-link',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
UtilityHeaderLinkComponent.propDecorators = {
    url: [{ type: Input }],
    label: [{ type: Input }],
    external: [{ type: Input }],
    class: [{ type: Input }],
    routerLink: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS1oZWFkZXItbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi91dGlsaXR5LWhlYWRlci91dGlsaXR5LWhlYWRlci1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUcvQzs7Ozs7R0FLRztBQVFILE1BQU0sT0FBTywwQkFBMEI7SUFQdkM7UUFVVyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRzVCLENBQUM7OztZQWJBLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7a0JBRUUsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBAZXhhbXBsZVxuIGBgIGBcbiAgICA8amF6ei11dGlsaXR5LWhlYWRlci1saW5rIGxhYmVsPVwiR29vZ2xlXCIgdXJsPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIj48L2phenotdXRpbGl0eS1oZWFkZXItbGluaz5cbiBgYCBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnamF6ei11dGlsaXR5LWhlYWRlci1saW5rJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVXRpbGl0eUhlYWRlckxpbmtDb21wb25lbnQge1xuICBASW5wdXQoKSB1cmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4dGVybmFsID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzPzogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBSb3V0ZXJMaW5rIHwgc3RyaW5nO1xufVxuIl19