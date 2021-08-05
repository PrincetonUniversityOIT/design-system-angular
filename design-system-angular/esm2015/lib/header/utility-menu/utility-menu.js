import { Component, ContentChildren, QueryList } from '@angular/core';
import { UtilityItemComponent } from './utility-menu-item';
export class UtilityMenuComponent {
}
UtilityMenuComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-menu',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
UtilityMenuComponent.propDecorators = {
    utilityMenuComponents: [{ type: ContentChildren, args: [UtilityItemComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvaGVhZGVyL3V0aWxpdHktbWVudS91dGlsaXR5LW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBU3pELE1BQU0sT0FBTyxvQkFBb0I7OztZQVBoQyxTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7O29DQUVFLGVBQWUsU0FBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVdGlsaXR5SXRlbUNvbXBvbmVudH0gZnJvbSAnLi91dGlsaXR5LW1lbnUtaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnamF6ei11dGlsaXR5LW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBVdGlsaXR5TWVudUNvbXBvbmVudCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oVXRpbGl0eUl0ZW1Db21wb25lbnQpIHV0aWxpdHlNZW51Q29tcG9uZW50czogUXVlcnlMaXN0PFV0aWxpdHlJdGVtQ29tcG9uZW50Pjtcbn1cbiJdfQ==