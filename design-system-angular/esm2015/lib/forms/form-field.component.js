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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9mb3Jtcy9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsTUFBTSxzQkFBc0IsR0FBRztJQUM3QixTQUFTLEVBQUUseUNBQXlDO0lBQ3BELFNBQVMsRUFBRSxvREFBb0Q7SUFDL0QsR0FBRyxFQUFFLDBEQUEwRDtJQUMvRCxXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLFdBQVcsRUFBRSxvQkFBb0I7SUFDakMsUUFBUSxFQUFFLHlCQUF5QjtJQUNuQyxPQUFPLEVBQUUsaUJBQWlCO0NBQzNCLENBQUM7QUFlRixNQUFNLE9BQU8sa0JBQWtCO0lBYi9CO1FBa0JXLGtCQUFhLEdBQThCLEVBQUUsQ0FBQztJQStDekQsQ0FBQztJQTNDQyxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUU7SUFDekUsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsaUhBQWlILENBQUMsQ0FBQztTQUNwSTtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsaUhBQWlILENBQUMsQ0FBQztTQUNwSTtRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVwQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNLElBQUksc0JBQXNCLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNqRDtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDthQUNGOzs7a0JBR0UsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFFTCxZQUFZLFNBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1JbnB1dERpcmVjdGl2ZX0gZnJvbSAnLi9mb3JtLWlucHV0LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IEZPUk1fRklFTERfR0xPQkFMX01TR1MgPSB7XG4gIG1heGxlbmd0aDogJ01heGltdW0gZmllbGQgbGVuZ3RoIGhhcyBiZWVuIGV4Y2VlZGVkLicsXG4gIG1pbmxlbmd0aDogJ01pbmltdW0gZmllbGQgbGVuZ3RoIHJlcXVpcmVtZW50IGhhcyBub3QgYmVlbiBtZXQuJyxcbiAgbWluOiAnVGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBiZWxvdyB0aGUgbWluaW11bSB2YWx1ZSByZXF1aXJlZC4nLFxuICBpbnZhbGlkRGF0ZTogJ0RhdGUgaXMgbm90IHZhbGlkLicsXG4gIGludmFsaWRZZWFyOiAnWWVhciBpcyBub3QgdmFsaWQuJyxcbiAgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicsXG4gIHBhdHRlcm46ICdJbnZhbGlkIGZvcm1hdC4nXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ7eyBkaXZDbGFzcyB9fVwiIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIj5cbiAgICAgIDxsYWJlbCBbYXR0ci5yZXF1aXJlZF09XCJyZXF1aXJlZFwiIGZvcj1cInt7IGZvciB9fVwiPnt7bGFiZWx9fTwvbGFiZWw+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRXJyb3IoKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImphenotZm9ybS1maWVsZC1lcnJvci1tc2dcIiByb2xlPVwiYWxlcnRcIiAqbmdGb3I9XCJsZXQgbXNnIG9mIGVycm9yTWVzc2FnZXNcIj57e21zZ319PC9zcGFuPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZUNvbmZpZzoge1tpbmRleDogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gIEBDb250ZW50Q2hpbGQoRm9ybUlucHV0RGlyZWN0aXZlKSBmb3JtSW5wdXQ6IEZvcm1JbnB1dERpcmVjdGl2ZTtcblxuICBnZXQgbGFiZWxDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkICsgJyAnICsgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBkaXZDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmhhc0Vycm9yKCkgPyAnamF6ei1mb3JtLWZpZWxkLS1lcnJvcicgOiAnamF6ei1mb3JtLWZpZWxkJyA7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUlucHV0LmRpc2FibGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZm9ybUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHByb2JhYmx5IGZvcmdvdHRlbiB0byBwdXQgdGhlIGZvcm1JbnB1dCBkaXJlY3RpdmUgb24gb25lIG9mIHRoZSBlbGVtZW50cyBpbnNpZGUgb2YgdGhlIGZvcm0tZmllbGQgdGFnLicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtSW5wdXQuaGFzRXJyb3I7XG4gIH1cblxuICBnZXQgZXJyb3JNZXNzYWdlcygpOiBhbnlbXSB7XG4gICAgaWYgKCF0aGlzLmZvcm1JbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSBwcm9iYWJseSBmb3Jnb3R0ZW4gdG8gcHV0IHRoZSBmb3JtSW5wdXQgZGlyZWN0aXZlIG9uIG9uZSBvZiB0aGUgZWxlbWVudHMgaW5zaWRlIG9mIHRoZSBmb3JtLWZpZWxkIHRhZy4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmZvcm1JbnB1dC5lcnJvcnM7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcblxuICAgIGNvbnN0IGVycm9yS2V5cyA9IE9iamVjdC5rZXlzKGVycm9ycyk7XG4gICAgZXJyb3JLZXlzLmZvckVhY2goIChlcnJvcktleSkgPT4ge1xuICAgICAgaWYgKHRoaXMubWVzc2FnZUNvbmZpZ1tlcnJvcktleV0pIHtcbiAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLm1lc3NhZ2VDb25maWdbZXJyb3JLZXldKTtcbiAgICAgIH0gZWxzZSBpZiAoRk9STV9GSUVMRF9HTE9CQUxfTVNHU1tlcnJvcktleV0pIHtcbiAgICAgICAgbWVzc2FnZXMucHVzaChGT1JNX0ZJRUxEX0dMT0JBTF9NU0dTW2Vycm9yS2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlcy5wdXNoKGVycm9yS2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXNzYWdlcztcbiAgfVxufVxuIl19