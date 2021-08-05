import { NgModule } from '@angular/core';
import { TabComponent, TabsComponent } from './tabs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
export class TabsModule {
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule,
                    CommonModule
                ],
                // Don't export all components because some are only to be used internally.
                exports: [
                    TabComponent,
                    TabsComponent
                ],
                declarations: [
                    TabComponent,
                    TabsComponent
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi90YWJzL3RhYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBRSxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBaUI3QyxNQUFNLE9BQU8sVUFBVTs7O1lBZnRCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELDJFQUEyRTtnQkFDM0UsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osWUFBWTtvQkFDWixhQUFhO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFiQ29tcG9uZW50LCBUYWJzQ29tcG9uZW50fSBmcm9tICcuL3RhYnMuY29tcG9uZW50JztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIC8vIERvbid0IGV4cG9ydCBhbGwgY29tcG9uZW50cyBiZWNhdXNlIHNvbWUgYXJlIG9ubHkgdG8gYmUgdXNlZCBpbnRlcm5hbGx5LlxuICBleHBvcnRzOiBbXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnRcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7fVxuIl19