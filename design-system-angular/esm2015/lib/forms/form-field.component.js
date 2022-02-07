import { Component, ContentChild, Input } from '@angular/core';
import { FormInputDirective } from './form-input.directive';
const FORM_FIELD_GLOBAL_MSGS = {
    maxlength: 'Maximum field length has been exceeded.',
    minlength: 'Minimum field length requirement has not been met.',
    min: 'The specified value is below the minimum value required.',
    max: 'The specified value is above the maximum value required.',
    invalidDate: 'Date is not valid.',
    invalidYear: 'Year is not valid.',
    required: 'This field is required.',
    pattern: 'Invalid format.'
};
export class FormFieldComponent {
    constructor() {
        this.messageConfig = {};
    }
    get labelClass() {
        return this.required + ' ' + this.disabled;
    }
    get divClass() {
        return this.hasError() ? 'jazz-form-field--error' : 'jazz-form-field';
    }
    get disabled() {
        return this.formInput.disabled;
    }
    ngOnInit() {
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
    <div class="{{ divClass }}" [attr.disabled]="disabled ? true : null">
      <label [attr.required]="required" for="{{ for }}">{{label}}</label>
      <ng-content></ng-content>
      <ng-container *ngIf="hasError()">
        <span class="jazz-form-field-error-msg" role="alert" *ngFor="let msg of errorMessages">{{msg}}</span>
      </ng-container>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9mb3Jtcy9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsTUFBTSxzQkFBc0IsR0FBRztJQUM3QixTQUFTLEVBQUUseUNBQXlDO0lBQ3BELFNBQVMsRUFBRSxvREFBb0Q7SUFDL0QsR0FBRyxFQUFFLDBEQUEwRDtJQUMvRCxHQUFHLEVBQUUsMERBQTBEO0lBQy9ELFdBQVcsRUFBRSxvQkFBb0I7SUFDakMsV0FBVyxFQUFFLG9CQUFvQjtJQUNqQyxRQUFRLEVBQUUseUJBQXlCO0lBQ25DLE9BQU8sRUFBRSxpQkFBaUI7Q0FDM0IsQ0FBQztBQWVGLE1BQU0sT0FBTyxrQkFBa0I7SUFiL0I7UUFrQlcsa0JBQWEsR0FBOEIsRUFBRSxDQUFDO0lBK0N6RCxDQUFDO0lBM0NDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBRTtJQUN6RSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpSEFBaUgsQ0FBQyxDQUFDO1NBQ3BJO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpSEFBaUgsQ0FBQyxDQUFDO1NBQ3BJO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDckMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXBCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDN0M7aUJBQU0sSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2FBQ0Y7OztrQkFHRSxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUVMLFlBQVksU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUlucHV0RGlyZWN0aXZlfSBmcm9tICcuL2Zvcm0taW5wdXQuZGlyZWN0aXZlJztcblxuY29uc3QgRk9STV9GSUVMRF9HTE9CQUxfTVNHUyA9IHtcbiAgbWF4bGVuZ3RoOiAnTWF4aW11bSBmaWVsZCBsZW5ndGggaGFzIGJlZW4gZXhjZWVkZWQuJyxcbiAgbWlubGVuZ3RoOiAnTWluaW11bSBmaWVsZCBsZW5ndGggcmVxdWlyZW1lbnQgaGFzIG5vdCBiZWVuIG1ldC4nLFxuICBtaW46ICdUaGUgc3BlY2lmaWVkIHZhbHVlIGlzIGJlbG93IHRoZSBtaW5pbXVtIHZhbHVlIHJlcXVpcmVkLicsXG4gIG1heDogJ1RoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYWJvdmUgdGhlIG1heGltdW0gdmFsdWUgcmVxdWlyZWQuJyxcbiAgaW52YWxpZERhdGU6ICdEYXRlIGlzIG5vdCB2YWxpZC4nLFxuICBpbnZhbGlkWWVhcjogJ1llYXIgaXMgbm90IHZhbGlkLicsXG4gIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxuICBwYXR0ZXJuOiAnSW52YWxpZCBmb3JtYXQuJ1xufTtcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwie3sgZGl2Q2xhc3MgfX1cIiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCA/IHRydWUgOiBudWxsXCI+XG4gICAgICA8bGFiZWwgW2F0dHIucmVxdWlyZWRdPVwicmVxdWlyZWRcIiBmb3I9XCJ7eyBmb3IgfX1cIj57e2xhYmVsfX08L2xhYmVsPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0Vycm9yKClcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJqYXp6LWZvcm0tZmllbGQtZXJyb3ItbXNnXCIgcm9sZT1cImFsZXJ0XCIgKm5nRm9yPVwibGV0IG1zZyBvZiBlcnJvck1lc3NhZ2VzXCI+e3ttc2d9fTwvc3Bhbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2VDb25maWc6IHtbaW5kZXg6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICBAQ29udGVudENoaWxkKEZvcm1JbnB1dERpcmVjdGl2ZSkgZm9ybUlucHV0OiBGb3JtSW5wdXREaXJlY3RpdmU7XG5cbiAgZ2V0IGxhYmVsQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCArICcgJyArIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgZGl2Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5oYXNFcnJvcigpID8gJ2phenotZm9ybS1maWVsZC0tZXJyb3InIDogJ2phenotZm9ybS1maWVsZCcgO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm1JbnB1dC5kaXNhYmxlZDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmZvcm1JbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSBwcm9iYWJseSBmb3Jnb3R0ZW4gdG8gcHV0IHRoZSBmb3JtSW5wdXQgZGlyZWN0aXZlIG9uIG9uZSBvZiB0aGUgZWxlbWVudHMgaW5zaWRlIG9mIHRoZSBmb3JtLWZpZWxkIHRhZy4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybUlucHV0Lmhhc0Vycm9yO1xuICB9XG5cbiAgZ2V0IGVycm9yTWVzc2FnZXMoKTogYW55W10ge1xuICAgIGlmICghdGhpcy5mb3JtSW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgcHJvYmFibHkgZm9yZ290dGVuIHRvIHB1dCB0aGUgZm9ybUlucHV0IGRpcmVjdGl2ZSBvbiBvbmUgb2YgdGhlIGVsZW1lbnRzIGluc2lkZSBvZiB0aGUgZm9ybS1maWVsZCB0YWcuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5mb3JtSW5wdXQuZXJyb3JzO1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG5cbiAgICBjb25zdCBlcnJvcktleXMgPSBPYmplY3Qua2V5cyhlcnJvcnMpO1xuICAgIGVycm9yS2V5cy5mb3JFYWNoKCAoZXJyb3JLZXkpID0+IHtcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2VDb25maWdbZXJyb3JLZXldKSB7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5tZXNzYWdlQ29uZmlnW2Vycm9yS2V5XSk7XG4gICAgICB9IGVsc2UgaWYgKEZPUk1fRklFTERfR0xPQkFMX01TR1NbZXJyb3JLZXldKSB7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2goRk9STV9GSUVMRF9HTE9CQUxfTVNHU1tlcnJvcktleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZXMucHVzaChlcnJvcktleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cbn1cbiJdfQ==