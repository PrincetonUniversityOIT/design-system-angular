import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccordionModule } from './accordion/accordion.module';
import { AlertModule } from './alert/alert.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { HeaderModule } from './header/header.module';
import { MenuModule } from './menu/menu.module';
import { ModalDialogModule } from './modal-dialog/modal-dialog.module';
import { PagerModule } from './pager/pager.module';
import { TabsModule } from './tabs/tabs.module';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { BreadcrumbComponent, BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PagerComponent } from './pager/pager.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { SearchButtonComponent } from './header/search-button/search-button.component';
import { UtilityItemComponent } from './header/utility-menu/utility-menu-item';
import { UtilityMenuComponent } from './header/utility-menu/utility-menu';
import { MainMenuItemComponent } from './header/main-menu/main-menu-item';
import { MainMenuComponent } from './header/main-menu/main-menu';
import { TabComponent, TabsComponent } from './tabs/tabs.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuMainButtonComponent } from './menu/menu-main-button/menu-main-button.component';
import { MenuSubButtonComponent } from './menu/menu-sub-button/menu-sub-button.component';
import { UtilityHeaderModule } from './utility-header/utility-header.module';
import { UtilityHeaderComponent } from './utility-header/utility-header.component';
import { UtilityHeaderLinkComponent } from './utility-header/utility-header-link.component';
import { DesignSystemFormsModule } from './forms/forms.module';
import { FormFieldComponent } from './forms/form-field.component';
import { FormInputDirective } from './forms/form-input.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export class DesignSystemAngularModule {
}
DesignSystemAngularModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    RouterModule,
                    AccordionModule,
                    AlertModule,
                    BreadcrumbsModule,
                    HeaderModule,
                    MenuModule,
                    ModalDialogModule,
                    PagerModule,
                    TabsModule,
                    UtilityHeaderModule,
                    DesignSystemFormsModule
                ],
                exports: [
                    AccordionComponent,
                    AlertComponent,
                    BreadcrumbComponent,
                    BreadcrumbsComponent,
                    HeaderComponent,
                    MenuComponent,
                    MenuItemComponent,
                    MenuMainButtonComponent,
                    MenuSubButtonComponent,
                    PagerComponent,
                    ModalDialogComponent,
                    SearchButtonComponent,
                    UtilityItemComponent,
                    UtilityMenuComponent,
                    MainMenuItemComponent,
                    MainMenuComponent,
                    TabComponent,
                    TabsComponent,
                    UtilityHeaderComponent,
                    UtilityHeaderLinkComponent,
                    FormFieldComponent,
                    FormInputDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduLXN5c3RlbS1hbmd1bGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsWUFBWSxFQUFFLGFBQWEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQTRDaEUsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBMUNyQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsWUFBWTtvQkFDWixVQUFVO29CQUNWLGlCQUFpQjtvQkFDakIsV0FBVztvQkFDWCxVQUFVO29CQUNWLG1CQUFtQjtvQkFDbkIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixZQUFZO29CQUNaLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QiwwQkFBMEI7b0JBQzFCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO2lCQUNuQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0FjY29yZGlvbk1vZHVsZX0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZSc7XG5pbXBvcnQge0FsZXJ0TW9kdWxlfSBmcm9tICcuL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XG5pbXBvcnQge0JyZWFkY3J1bWJzTW9kdWxlfSBmcm9tICcuL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLm1vZHVsZSc7XG5pbXBvcnQge0hlYWRlck1vZHVsZX0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQge01lbnVNb2R1bGV9IGZyb20gJy4vbWVudS9tZW51Lm1vZHVsZSc7XG5pbXBvcnQge01vZGFsRGlhbG9nTW9kdWxlfSBmcm9tICcuL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7UGFnZXJNb2R1bGV9IGZyb20gJy4vcGFnZXIvcGFnZXIubW9kdWxlJztcbmltcG9ydCB7VGFic01vZHVsZX0gZnJvbSAnLi90YWJzL3RhYnMubW9kdWxlJztcbmltcG9ydCB7QWNjb3JkaW9uQ29tcG9uZW50fSBmcm9tICcuL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7QWxlcnRDb21wb25lbnR9IGZyb20gJy4vYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7QnJlYWRjcnVtYkNvbXBvbmVudCwgQnJlYWRjcnVtYnNDb21wb25lbnR9IGZyb20gJy4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50JztcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7UGFnZXJDb21wb25lbnR9IGZyb20gJy4vcGFnZXIvcGFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7TW9kYWxEaWFsb2dDb21wb25lbnR9IGZyb20gJy4vbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hCdXR0b25Db21wb25lbnR9IGZyb20gJy4vaGVhZGVyL3NlYXJjaC1idXR0b24vc2VhcmNoLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtVdGlsaXR5SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIvdXRpbGl0eS1tZW51L3V0aWxpdHktbWVudS1pdGVtJztcbmltcG9ydCB7VXRpbGl0eU1lbnVDb21wb25lbnR9IGZyb20gJy4vaGVhZGVyL3V0aWxpdHktbWVudS91dGlsaXR5LW1lbnUnO1xuaW1wb3J0IHtNYWluTWVudUl0ZW1Db21wb25lbnR9IGZyb20gJy4vaGVhZGVyL21haW4tbWVudS9tYWluLW1lbnUtaXRlbSc7XG5pbXBvcnQge01haW5NZW51Q29tcG9uZW50fSBmcm9tICcuL2hlYWRlci9tYWluLW1lbnUvbWFpbi1tZW51JztcbmltcG9ydCB7VGFiQ29tcG9uZW50LCBUYWJzQ29tcG9uZW50fSBmcm9tICcuL3RhYnMvdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9tZW51L21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7TWVudU1haW5CdXR0b25Db21wb25lbnR9IGZyb20gJy4vbWVudS9tZW51LW1haW4tYnV0dG9uL21lbnUtbWFpbi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7TWVudVN1YkJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9tZW51L21lbnUtc3ViLWJ1dHRvbi9tZW51LXN1Yi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7VXRpbGl0eUhlYWRlck1vZHVsZX0gZnJvbSAnLi91dGlsaXR5LWhlYWRlci91dGlsaXR5LWhlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHtVdGlsaXR5SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL3V0aWxpdHktaGVhZGVyL3V0aWxpdHktaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1V0aWxpdHlIZWFkZXJMaW5rQ29tcG9uZW50fSBmcm9tICcuL3V0aWxpdHktaGVhZGVyL3V0aWxpdHktaGVhZGVyLWxpbmsuY29tcG9uZW50JztcbmltcG9ydCB7RGVzaWduU3lzdGVtRm9ybXNNb2R1bGV9IGZyb20gJy4vZm9ybXMvZm9ybXMubW9kdWxlJztcbmltcG9ydCB7Rm9ybUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Zvcm1zL2Zvcm0tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybUlucHV0RGlyZWN0aXZlfSBmcm9tICcuL2Zvcm1zL2Zvcm0taW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBBY2NvcmRpb25Nb2R1bGUsXG4gICAgQWxlcnRNb2R1bGUsXG4gICAgQnJlYWRjcnVtYnNNb2R1bGUsXG4gICAgSGVhZGVyTW9kdWxlLFxuICAgIE1lbnVNb2R1bGUsXG4gICAgTW9kYWxEaWFsb2dNb2R1bGUsXG4gICAgUGFnZXJNb2R1bGUsXG4gICAgVGFic01vZHVsZSxcbiAgICBVdGlsaXR5SGVhZGVyTW9kdWxlLFxuICAgIERlc2lnblN5c3RlbUZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBY2NvcmRpb25Db21wb25lbnQsXG4gICAgQWxlcnRDb21wb25lbnQsXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICBCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBNZW51SXRlbUNvbXBvbmVudCxcbiAgICBNZW51TWFpbkJ1dHRvbkNvbXBvbmVudCxcbiAgICBNZW51U3ViQnV0dG9uQ29tcG9uZW50LFxuICAgIFBhZ2VyQ29tcG9uZW50LFxuICAgIE1vZGFsRGlhbG9nQ29tcG9uZW50LFxuICAgIFNlYXJjaEJ1dHRvbkNvbXBvbmVudCxcbiAgICBVdGlsaXR5SXRlbUNvbXBvbmVudCxcbiAgICBVdGlsaXR5TWVudUNvbXBvbmVudCxcbiAgICBNYWluTWVudUl0ZW1Db21wb25lbnQsXG4gICAgTWFpbk1lbnVDb21wb25lbnQsXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnQsXG4gICAgVXRpbGl0eUhlYWRlckNvbXBvbmVudCxcbiAgICBVdGlsaXR5SGVhZGVyTGlua0NvbXBvbmVudCxcbiAgICBGb3JtRmllbGRDb21wb25lbnQsXG4gICAgRm9ybUlucHV0RGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGVzaWduU3lzdGVtQW5ndWxhck1vZHVsZSB7IH1cbiJdfQ==