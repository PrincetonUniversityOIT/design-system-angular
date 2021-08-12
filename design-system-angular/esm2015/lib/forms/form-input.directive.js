import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';
export class FormInputDirective {
    constructor(formControl) {
        this.formControl = formControl;
    }
    get hasError() {
        return this.formControl.dirty && this.formControl.invalid;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9mb3Jtcy9mb3JtLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0zQyxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLFlBQW9CLFdBQXNCO1FBQXRCLGdCQUFXLEdBQVgsV0FBVyxDQUFXO0lBQzFDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNoQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7WUFMUSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Zvcm1JbnB1dF0nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1JbnB1dERpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQ29udHJvbDogTmdDb250cm9sKSB7XG4gIH1cblxuICBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2wuZGlydHkgJiYgdGhpcy5mb3JtQ29udHJvbC5pbnZhbGlkO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpOiBhbnkge1xuICAgIGlmICh0aGlzLmhhc0Vycm9yICYmIHRoaXMuZm9ybUNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbC5lcnJvcnM7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl19