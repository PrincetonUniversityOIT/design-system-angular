import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormFieldErrorComponent } from './form-field-error.component';
import { FormFieldComponent } from './form-field.component';
import { FormInputDirective } from './form-input.directive';
export class DesignSystemFormsModule {
}
DesignSystemFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    FormFieldErrorComponent,
                    FormFieldComponent,
                    FormInputDirective
                ],
                exports: [
                    FormFieldErrorComponent,
                    FormFieldComponent,
                    FormInputDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvZm9ybXMvZm9ybXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFvQjFELE1BQU0sT0FBTyx1QkFBdUI7OztZQWxCbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Rm9ybUZpZWxkRXJyb3JDb21wb25lbnR9IGZyb20gJy4vZm9ybS1maWVsZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3JtRmllbGRDb21wb25lbnR9IGZyb20gJy4vZm9ybS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3JtSW5wdXREaXJlY3RpdmV9IGZyb20gJy4vZm9ybS1pbnB1dC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZvcm1GaWVsZEVycm9yQ29tcG9uZW50LFxuICAgIEZvcm1GaWVsZENvbXBvbmVudCxcbiAgICBGb3JtSW5wdXREaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZvcm1GaWVsZEVycm9yQ29tcG9uZW50LFxuICAgIEZvcm1GaWVsZENvbXBvbmVudCxcbiAgICBGb3JtSW5wdXREaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEZXNpZ25TeXN0ZW1Gb3Jtc01vZHVsZSB7XG5cbn1cbiJdfQ==