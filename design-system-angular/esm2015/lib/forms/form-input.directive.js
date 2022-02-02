import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';
export class FormInputDirective {
    constructor(formControl) {
        this.formControl = formControl;
    }
    get hasError() {
        return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
    }
    get disabled() {
        return this.formControl.disabled ? true : false;
    }
    get errors() {
        if (this.hasError && this.formControl.errors) {
            return this.formControl.errors;
        }
        return '';
    }
}
FormInputDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[formInput]'
            },] }
];
FormInputDirective.ctorParameters = () => [
    { type: NgControl }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9mb3Jtcy9mb3JtLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0zQyxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLFlBQW9CLFdBQXNCO1FBQXRCLGdCQUFXLEdBQVgsV0FBVyxDQUFXO0lBQzFDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUM1QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGFBQWE7YUFDeEI7OztZQUxRLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZm9ybUlucHV0XSdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUlucHV0RGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1Db250cm9sOiBOZ0NvbnRyb2wpIHtcbiAgfVxuXG4gIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbC5pbnZhbGlkICYmICh0aGlzLmZvcm1Db250cm9sLmRpcnR5IHx8IHRoaXMuZm9ybUNvbnRyb2wudG91Y2hlZCk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBnZXQgZXJyb3JzKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuaGFzRXJyb3IgJiYgdGhpcy5mb3JtQ29udHJvbC5lcnJvcnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1Db250cm9sLmVycm9ycztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iXX0=