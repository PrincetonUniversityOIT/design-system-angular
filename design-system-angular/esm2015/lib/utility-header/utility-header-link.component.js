import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS1oZWFkZXItbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi91dGlsaXR5LWhlYWRlci91dGlsaXR5LWhlYWRlci1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7Ozs7O0dBS0c7QUFRSCxNQUFNLE9BQU8sMEJBQTBCO0lBUHZDO1FBVVcsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUc1QixDQUFDOzs7WUFiQSxTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7O2tCQUVFLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKlxuICogQGV4YW1wbGVcbiBgYCBgXG4gICAgPGphenotdXRpbGl0eS1oZWFkZXItbGluayBsYWJlbD1cIkdvb2dsZVwiIHVybD1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCI+PC9qYXp6LXV0aWxpdHktaGVhZGVyLWxpbms+XG4gYGAgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotdXRpbGl0eS1oZWFkZXItbGluaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxpdHlIZWFkZXJMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBleHRlcm5hbCA9IGZhbHNlO1xuICBASW5wdXQoKSBjbGFzcz86IHN0cmluZztcbiAgQElucHV0KCkgcm91dGVyTGluazogUm91dGVyTGluaztcbn1cbiJdfQ==