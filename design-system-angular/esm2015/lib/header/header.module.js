import { NgModule } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu';
import { MainMenuItemComponent } from './main-menu/main-menu-item';
import { SearchButtonComponent } from './search-button/search-button.component';
import { UtilityMenuComponent } from './utility-menu/utility-menu';
import { UtilityItemComponent } from './utility-menu/utility-menu-item';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
export class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MenuModule
                ],
                declarations: [
                    MainMenuComponent,
                    MainMenuItemComponent,
                    SearchButtonComponent,
                    UtilityMenuComponent,
                    UtilityItemComponent,
                    HeaderComponent
                ],
                exports: [
                    MainMenuComponent,
                    MainMenuItemComponent,
                    SearchButtonComponent,
                    UtilityMenuComponent,
                    UtilityItemComponent,
                    HeaderComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBeUIvQyxNQUFNLE9BQU8sWUFBWTs7O1lBdkJ4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixlQUFlO2lCQUNoQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01haW5NZW51Q29tcG9uZW50fSBmcm9tICcuL21haW4tbWVudS9tYWluLW1lbnUnO1xuaW1wb3J0IHtNYWluTWVudUl0ZW1Db21wb25lbnR9IGZyb20gJy4vbWFpbi1tZW51L21haW4tbWVudS1pdGVtJztcbmltcG9ydCB7U2VhcmNoQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL3NlYXJjaC1idXR0b24vc2VhcmNoLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtVdGlsaXR5TWVudUNvbXBvbmVudH0gZnJvbSAnLi91dGlsaXR5LW1lbnUvdXRpbGl0eS1tZW51JztcbmltcG9ydCB7VXRpbGl0eUl0ZW1Db21wb25lbnR9IGZyb20gJy4vdXRpbGl0eS1tZW51L3V0aWxpdHktbWVudS1pdGVtJztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TWVudU1vZHVsZX0gZnJvbSAnLi4vbWVudS9tZW51Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1lbnVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWFpbk1lbnVDb21wb25lbnQsXG4gICAgTWFpbk1lbnVJdGVtQ29tcG9uZW50LFxuICAgIFNlYXJjaEJ1dHRvbkNvbXBvbmVudCxcbiAgICBVdGlsaXR5TWVudUNvbXBvbmVudCxcbiAgICBVdGlsaXR5SXRlbUNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1haW5NZW51Q29tcG9uZW50LFxuICAgIE1haW5NZW51SXRlbUNvbXBvbmVudCxcbiAgICBTZWFyY2hCdXR0b25Db21wb25lbnQsXG4gICAgVXRpbGl0eU1lbnVDb21wb25lbnQsXG4gICAgVXRpbGl0eUl0ZW1Db21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTW9kdWxlIHtcblxufVxuIl19