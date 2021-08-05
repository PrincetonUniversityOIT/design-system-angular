import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuMainButtonComponent } from './menu-main-button/menu-main-button.component';
import { MenuSubButtonComponent } from './menu-sub-button/menu-sub-button.component';
export class MenuModule {
}
MenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule
                ],
                declarations: [
                    MenuComponent,
                    MenuItemComponent,
                    MenuMainButtonComponent,
                    MenuSubButtonComponent
                ],
                exports: [
                    MenuComponent,
                    MenuItemComponent,
                    MenuMainButtonComponent,
                    MenuSubButtonComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9tZW51L21lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFvQm5GLE1BQU0sT0FBTyxVQUFVOzs7WUFsQnRCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QixzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gJy4vbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVNYWluQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL21lbnUtbWFpbi1idXR0b24vbWVudS1tYWluLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51U3ViQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL21lbnUtc3ViLWJ1dHRvbi9tZW51LXN1Yi1idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBNZW51SXRlbUNvbXBvbmVudCxcbiAgICBNZW51TWFpbkJ1dHRvbkNvbXBvbmVudCxcbiAgICBNZW51U3ViQnV0dG9uQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNZW51Q29tcG9uZW50LFxuICAgIE1lbnVJdGVtQ29tcG9uZW50LFxuICAgIE1lbnVNYWluQnV0dG9uQ29tcG9uZW50LFxuICAgIE1lbnVTdWJCdXR0b25Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51TW9kdWxlIHtcblxufVxuIl19