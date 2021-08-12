import { Component, ContentChild, Input } from '@angular/core';
import { FormInputDirective } from './form-input.directive';
const FORM_FIELD_GLOBAL_MSGS = {
    maxlength: 'Maximum field length has been exceeded.',
    minlength: 'Minimum field length requirement has not been met.',
    min: 'The specified value is below the minimum value required.',
    invalidDate: 'Date is not valid.',
    invalidYear: 'Year is not valid.',
    required: 'This field is required.',
    pattern: 'Invalid format.'
};
export class FormFieldComponent {
    constructor() {
        this.messageConfig = {};
        this.disabled = '';
    }
    get labelClass() {
        return this.required + ' ' + this.disabled;
    }
    get divClass() {
        return this.hasError() ? 'jazz-form-field--error' : 'jazz-form-field';
    }
    ngOnInit() {
    }
    enable(enable = true) {
        this.disabled = enable ? '' : 'disabled';
    }
    hasError() {
        if (!this.formInput) {
            throw new Error('You have probably forgotten to put the formInput directive on one of the elements inside of the form-field tag.');
        }
        return this.formInput.hasError;
    }
    get errorMessages() {
        if (!this.formInput) {
            throw new Error('You have probably forgotten to put the formInput directive on one of the elements inside of the form-field tag.');
        }
        const errors = this.formInput.errors;
        const messages = [];
        const errorKeys = Object.keys(errors);
        errorKeys.forEach((errorKey) => {
            if (this.messageConfig[errorKey]) {
                messages.push(this.messageConfig[errorKey]);
            }
            else if (FORM_FIELD_GLOBAL_MSGS[errorKey]) {
                messages.push(FORM_FIELD_GLOBAL_MSGS[errorKey]);
            }
            else {
                messages.push(errorKey);
            }
        });
        return messages;
    }
}
FormFieldComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-field',
                template: `
    <div class="{{ divClass }}">
      <label for="{{ for }}">{{label}}</label>
      <ng-container *ngIf="hasError">
        <span class="jazz-form-field-error-msg" role="alert" *ngFor="let msg of errorMessages">{{msg}}</span>
      </ng-container>
      <ng-content></ng-content>
    </div>
  `
            },] }
];
FormFieldComponent.propDecorators = {
    for: [{ type: Input }],
    label: [{ type: Input }],
    required: [{ type: Input }],
    messageConfig: [{ type: Input }],
    formInput: [{ type: ContentChild, args: [FormInputDirective,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9mb3Jtcy9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsTUFBTSxzQkFBc0IsR0FBRztJQUM3QixTQUFTLEVBQUUseUNBQXlDO0lBQ3BELFNBQVMsRUFBRSxvREFBb0Q7SUFDL0QsR0FBRyxFQUFFLDBEQUEwRDtJQUMvRCxXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLFdBQVcsRUFBRSxvQkFBb0I7SUFDakMsUUFBUSxFQUFFLHlCQUF5QjtJQUNuQyxPQUFPLEVBQUUsaUJBQWlCO0NBQzNCLENBQUM7QUFlRixNQUFNLE9BQU8sa0JBQWtCO0lBYi9CO1FBa0JXLGtCQUFhLEdBQThCLEVBQUUsQ0FBQztRQUkvQyxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBNEN4QixDQUFDO0lBMUNDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBRTtJQUN6RSxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzNDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpSEFBaUgsQ0FBQyxDQUFDO1NBQ3BJO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpSEFBaUgsQ0FBQyxDQUFDO1NBQ3BJO1FBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDckMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXBCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDN0M7aUJBQU0sSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2FBQ0Y7OztrQkFHRSxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUVMLFlBQVksU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUlucHV0RGlyZWN0aXZlfSBmcm9tICcuL2Zvcm0taW5wdXQuZGlyZWN0aXZlJztcblxuY29uc3QgRk9STV9GSUVMRF9HTE9CQUxfTVNHUyA9IHtcbiAgbWF4bGVuZ3RoOiAnTWF4aW11bSBmaWVsZCBsZW5ndGggaGFzIGJlZW4gZXhjZWVkZWQuJyxcbiAgbWlubGVuZ3RoOiAnTWluaW11bSBmaWVsZCBsZW5ndGggcmVxdWlyZW1lbnQgaGFzIG5vdCBiZWVuIG1ldC4nLFxuICBtaW46ICdUaGUgc3BlY2lmaWVkIHZhbHVlIGlzIGJlbG93IHRoZSBtaW5pbXVtIHZhbHVlIHJlcXVpcmVkLicsXG4gIGludmFsaWREYXRlOiAnRGF0ZSBpcyBub3QgdmFsaWQuJyxcbiAgaW52YWxpZFllYXI6ICdZZWFyIGlzIG5vdCB2YWxpZC4nLFxuICByZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgcGF0dGVybjogJ0ludmFsaWQgZm9ybWF0Lidcbn07XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInt7IGRpdkNsYXNzIH19XCI+XG4gICAgICA8bGFiZWwgZm9yPVwie3sgZm9yIH19XCI+e3tsYWJlbH19PC9sYWJlbD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFcnJvclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImphenotZm9ybS1maWVsZC1lcnJvci1tc2dcIiByb2xlPVwiYWxlcnRcIiAqbmdGb3I9XCJsZXQgbXNnIG9mIGVycm9yTWVzc2FnZXNcIj57e21zZ319PC9zcGFuPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZUNvbmZpZzoge1tpbmRleDogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gIEBDb250ZW50Q2hpbGQoRm9ybUlucHV0RGlyZWN0aXZlKSBmb3JtSW5wdXQ6IEZvcm1JbnB1dERpcmVjdGl2ZTtcblxuICBwcml2YXRlIGRpc2FibGVkID0gJyc7XG5cbiAgZ2V0IGxhYmVsQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCArICcgJyArIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgZGl2Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5oYXNFcnJvcigpID8gJ2phenotZm9ybS1maWVsZC0tZXJyb3InIDogJ2phenotZm9ybS1maWVsZCcgO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBlbmFibGUoZW5hYmxlID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBlbmFibGUgPyAnJyA6ICdkaXNhYmxlZCc7XG4gIH1cblxuICBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZm9ybUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHByb2JhYmx5IGZvcmdvdHRlbiB0byBwdXQgdGhlIGZvcm1JbnB1dCBkaXJlY3RpdmUgb24gb25lIG9mIHRoZSBlbGVtZW50cyBpbnNpZGUgb2YgdGhlIGZvcm0tZmllbGQgdGFnLicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtSW5wdXQuaGFzRXJyb3I7XG4gIH1cblxuICBnZXQgZXJyb3JNZXNzYWdlcygpOiBhbnlbXSB7XG4gICAgaWYgKCF0aGlzLmZvcm1JbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSBwcm9iYWJseSBmb3Jnb3R0ZW4gdG8gcHV0IHRoZSBmb3JtSW5wdXQgZGlyZWN0aXZlIG9uIG9uZSBvZiB0aGUgZWxlbWVudHMgaW5zaWRlIG9mIHRoZSBmb3JtLWZpZWxkIHRhZy4nKTtcbiAgICB9XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5mb3JtSW5wdXQuZXJyb3JzO1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG5cbiAgICBjb25zdCBlcnJvcktleXMgPSBPYmplY3Qua2V5cyhlcnJvcnMpO1xuICAgIGVycm9yS2V5cy5mb3JFYWNoKCAoZXJyb3JLZXkpID0+IHtcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2VDb25maWdbZXJyb3JLZXldKSB7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5tZXNzYWdlQ29uZmlnW2Vycm9yS2V5XSk7XG4gICAgICB9IGVsc2UgaWYgKEZPUk1fRklFTERfR0xPQkFMX01TR1NbZXJyb3JLZXldKSB7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2goRk9STV9GSUVMRF9HTE9CQUxfTVNHU1tlcnJvcktleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZXMucHVzaChlcnJvcktleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cbn1cbiJdfQ==