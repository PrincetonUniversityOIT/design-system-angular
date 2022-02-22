import { NgModule } from '@angular/core';
import { UtilityHeaderComponent } from './utility-header.component';
import { UtilityHeaderLinkComponent } from './utility-header-link.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
export class UtilityHeaderModule {
}
UtilityHeaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    UtilityHeaderComponent,
                    UtilityHeaderLinkComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [
                    UtilityHeaderComponent,
                    UtilityHeaderLinkComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvdXRpbGl0eS1oZWFkZXIvdXRpbGl0eS1oZWFkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQWdCN0MsTUFBTSxPQUFPLG1CQUFtQjs7O1lBZC9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0QiwwQkFBMEI7aUJBQzNCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtvQkFDdEIsMEJBQTBCO2lCQUMzQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1V0aWxpdHlIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vdXRpbGl0eS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7VXRpbGl0eUhlYWRlckxpbmtDb21wb25lbnR9IGZyb20gJy4vdXRpbGl0eS1oZWFkZXItbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBVdGlsaXR5SGVhZGVyQ29tcG9uZW50LFxuICAgIFV0aWxpdHlIZWFkZXJMaW5rQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBVdGlsaXR5SGVhZGVyQ29tcG9uZW50LFxuICAgIFV0aWxpdHlIZWFkZXJMaW5rQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVXRpbGl0eUhlYWRlck1vZHVsZSB7XG5cbn1cbiJdfQ==