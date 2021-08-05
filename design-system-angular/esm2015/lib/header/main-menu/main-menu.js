import { Component, ContentChildren, QueryList } from '@angular/core';
import { MainMenuItemComponent } from './main-menu-item';
export class MainMenuComponent {
}
MainMenuComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-main-menu',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
MainMenuComponent.propDecorators = {
    menuComponents: [{ type: ContentChildren, args: [MainMenuItemComponent, { descendants: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvaGVhZGVyL21haW4tbWVudS9tYWluLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBU3ZELE1BQU0sT0FBTyxpQkFBaUI7OztZQVA3QixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7OzZCQUVFLGVBQWUsU0FBQyxxQkFBcUIsRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYWluTWVudUl0ZW1Db21wb25lbnR9IGZyb20gJy4vbWFpbi1tZW51LWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotbWFpbi1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVDb21wb25lbnQge1xuICBAQ29udGVudENoaWxkcmVuKE1haW5NZW51SXRlbUNvbXBvbmVudCwge2Rlc2NlbmRhbnRzOiBmYWxzZX0pIG1lbnVDb21wb25lbnRzOiBRdWVyeUxpc3Q8TWFpbk1lbnVJdGVtQ29tcG9uZW50Pjtcbn1cbiJdfQ==