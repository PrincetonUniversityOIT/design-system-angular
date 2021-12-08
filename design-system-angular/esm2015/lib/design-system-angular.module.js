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
export class DesignSystemAngularModule {
}
DesignSystemAngularModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    AccordionModule,
                    AlertModule,
                    BreadcrumbsModule,
                    HeaderModule,
                    MenuModule,
                    ModalDialogModule,
                    PagerModule,
                    TabsModule,
                    UtilityHeaderModule
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
                    UtilityHeaderLinkComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduLXN5c3RlbS1hbmd1bGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsWUFBWSxFQUFFLGFBQWEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBdUMxRixNQUFNLE9BQU8seUJBQXlCOzs7WUFyQ3JDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLDBCQUEwQjtpQkFDM0I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBY2NvcmRpb25Nb2R1bGV9IGZyb20gJy4vYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUnO1xuaW1wb3J0IHtBbGVydE1vZHVsZX0gZnJvbSAnLi9hbGVydC9hbGVydC5tb2R1bGUnO1xuaW1wb3J0IHtCcmVhZGNydW1ic01vZHVsZX0gZnJvbSAnLi9icmVhZGNydW1icy9icmVhZGNydW1icy5tb2R1bGUnO1xuaW1wb3J0IHtIZWFkZXJNb2R1bGV9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHtNZW51TW9kdWxlfSBmcm9tICcuL21lbnUvbWVudS5tb2R1bGUnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ01vZHVsZX0gZnJvbSAnLi9tb2RhbC1kaWFsb2cvbW9kYWwtZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQge1BhZ2VyTW9kdWxlfSBmcm9tICcuL3BhZ2VyL3BhZ2VyLm1vZHVsZSc7XG5pbXBvcnQge1RhYnNNb2R1bGV9IGZyb20gJy4vdGFicy90YWJzLm1vZHVsZSc7XG5pbXBvcnQge0FjY29yZGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0FsZXJ0Q29tcG9uZW50fSBmcm9tICcuL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQge0JyZWFkY3J1bWJDb21wb25lbnQsIEJyZWFkY3J1bWJzQ29tcG9uZW50fSBmcm9tICcuL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gJy4vbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1BhZ2VyQ29tcG9uZW50fSBmcm9tICcuL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQge01vZGFsRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci9zZWFyY2gtYnV0dG9uL3NlYXJjaC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7VXRpbGl0eUl0ZW1Db21wb25lbnR9IGZyb20gJy4vaGVhZGVyL3V0aWxpdHktbWVudS91dGlsaXR5LW1lbnUtaXRlbSc7XG5pbXBvcnQge1V0aWxpdHlNZW51Q29tcG9uZW50fSBmcm9tICcuL2hlYWRlci91dGlsaXR5LW1lbnUvdXRpbGl0eS1tZW51JztcbmltcG9ydCB7TWFpbk1lbnVJdGVtQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci9tYWluLW1lbnUvbWFpbi1tZW51LWl0ZW0nO1xuaW1wb3J0IHtNYWluTWVudUNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIvbWFpbi1tZW51L21haW4tbWVudSc7XG5pbXBvcnQge1RhYkNvbXBvbmVudCwgVGFic0NvbXBvbmVudH0gZnJvbSAnLi90YWJzL3RhYnMuY29tcG9uZW50JztcbmltcG9ydCB7TWVudUl0ZW1Db21wb25lbnR9IGZyb20gJy4vbWVudS9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVNYWluQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL21lbnUvbWVudS1tYWluLWJ1dHRvbi9tZW51LW1haW4tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVTdWJCdXR0b25Db21wb25lbnR9IGZyb20gJy4vbWVudS9tZW51LXN1Yi1idXR0b24vbWVudS1zdWItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1V0aWxpdHlIZWFkZXJNb2R1bGV9IGZyb20gJy4vdXRpbGl0eS1oZWFkZXIvdXRpbGl0eS1oZWFkZXIubW9kdWxlJztcbmltcG9ydCB7VXRpbGl0eUhlYWRlckNvbXBvbmVudH0gZnJvbSAnLi91dGlsaXR5LWhlYWRlci91dGlsaXR5LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtVdGlsaXR5SGVhZGVyTGlua0NvbXBvbmVudH0gZnJvbSAnLi91dGlsaXR5LWhlYWRlci91dGlsaXR5LWhlYWRlci1saW5rLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEFjY29yZGlvbk1vZHVsZSxcbiAgICBBbGVydE1vZHVsZSxcbiAgICBCcmVhZGNydW1ic01vZHVsZSxcbiAgICBIZWFkZXJNb2R1bGUsXG4gICAgTWVudU1vZHVsZSxcbiAgICBNb2RhbERpYWxvZ01vZHVsZSxcbiAgICBQYWdlck1vZHVsZSxcbiAgICBUYWJzTW9kdWxlLFxuICAgIFV0aWxpdHlIZWFkZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBBbGVydENvbXBvbmVudCxcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBNZW51Q29tcG9uZW50LFxuICAgIE1lbnVJdGVtQ29tcG9uZW50LFxuICAgIE1lbnVNYWluQnV0dG9uQ29tcG9uZW50LFxuICAgIE1lbnVTdWJCdXR0b25Db21wb25lbnQsXG4gICAgUGFnZXJDb21wb25lbnQsXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXG4gICAgU2VhcmNoQnV0dG9uQ29tcG9uZW50LFxuICAgIFV0aWxpdHlJdGVtQ29tcG9uZW50LFxuICAgIFV0aWxpdHlNZW51Q29tcG9uZW50LFxuICAgIE1haW5NZW51SXRlbUNvbXBvbmVudCxcbiAgICBNYWluTWVudUNvbXBvbmVudCxcbiAgICBUYWJDb21wb25lbnQsXG4gICAgVGFic0NvbXBvbmVudCxcbiAgICBVdGlsaXR5SGVhZGVyQ29tcG9uZW50LFxuICAgIFV0aWxpdHlIZWFkZXJMaW5rQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGVzaWduU3lzdGVtQW5ndWxhck1vZHVsZSB7IH1cbiJdfQ==