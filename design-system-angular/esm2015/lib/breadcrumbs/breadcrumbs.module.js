import { NgModule } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbsComponent } from './breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
export class BreadcrumbsModule {
}
BreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule
                ],
                declarations: [
                    BreadcrumbComponent,
                    BreadcrumbsComponent
                ],
                exports: [
                    BreadcrumbComponent,
                    BreadcrumbsComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFFLG9CQUFvQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQWdCN0MsTUFBTSxPQUFPLGlCQUFpQjs7O1lBZDdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JyZWFkY3J1bWJDb21wb25lbnQsIEJyZWFkY3J1bWJzQ29tcG9uZW50fSBmcm9tICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJzQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJzQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNNb2R1bGUge1xuXG59XG4iXX0=