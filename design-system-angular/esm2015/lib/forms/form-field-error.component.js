import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
/**
 * Use 'invalid' validation error key to display any validation message
 */
export class FormFieldErrorComponent {
    constructor() {
        this.messageParm = (key) => this.messageParms && this.messageParms[key] ? this.messageParms[key] : '';
    }
    hasError() {
        const field = this.form.get(this.controlName);
        return (field.touched && field.dirty && field.invalid);
    }
}
FormFieldErrorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'field-error',
                template: `
    <ng-container *ngIf="form.get(controlName).touched && form.get(controlName).dirty">
      <div class="field-error" *ngIf="form.get(controlName).hasError('maxlength') && messageParm('maxlength')">Max Length: {{messageParm('maxlength')}}</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('maxlength') && !messageParm('maxlength')">Max Length Exceeded</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('minlength') && messageParm('minlength')">Min Length: {{messageParm('minlength')}}</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('minlength') && !messageParm('minlength')">Min Length Required</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('min') && messageParm('min')">Min Value: {{messageParm('min')}}</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('min') && !messageParm('min')">Min Value Not Met</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('email') && !form.get(controlName).hasError('required')">{{messageParm('email')}}</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('invalidDate')">Invalid Date</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('invalidYear')">Invalid Year</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('required') && !form.get(controlName).hasError('invalidDate')">{{label}} is Required</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('invalid')">{{form.get(controlName).errors['invalid']}}</div>
    </ng-container>
    <div *ngIf="!hasError()">&nbsp;</div>
  `
            },] }
];
FormFieldErrorComponent.propDecorators = {
    form: [{ type: Input, args: ['form',] }],
    controlName: [{ type: Input, args: ['controlName',] }],
    label: [{ type: Input, args: ['label',] }],
    messageParms: [{ type: Input, args: ['messageParms',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9mb3Jtcy9mb3JtLWZpZWxkLWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekM7O0dBRUc7QUFxQkgsTUFBTSxPQUFPLHVCQUF1QjtJQXBCcEM7UUEwQkUsZ0JBQVcsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFNM0csQ0FBQztJQUpDLFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsT0FBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO2FBQ0Y7OzttQkFFRSxLQUFLLFNBQUMsTUFBTTswQkFDWixLQUFLLFNBQUMsYUFBYTtvQkFDbkIsS0FBSyxTQUFDLE9BQU87MkJBQ2IsS0FBSyxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIFVzZSAnaW52YWxpZCcgdmFsaWRhdGlvbiBlcnJvciBrZXkgdG8gZGlzcGxheSBhbnkgdmFsaWRhdGlvbiBtZXNzYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZmllbGQtZXJyb3InLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtLmdldChjb250cm9sTmFtZSkudG91Y2hlZCAmJiBmb3JtLmdldChjb250cm9sTmFtZSkuZGlydHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1lcnJvclwiICpuZ0lmPVwiZm9ybS5nZXQoY29udHJvbE5hbWUpLmhhc0Vycm9yKCdtYXhsZW5ndGgnKSAmJiBtZXNzYWdlUGFybSgnbWF4bGVuZ3RoJylcIj5NYXggTGVuZ3RoOiB7e21lc3NhZ2VQYXJtKCdtYXhsZW5ndGgnKX19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtZXJyb3JcIiAqbmdJZj1cImZvcm0uZ2V0KGNvbnRyb2xOYW1lKS5oYXNFcnJvcignbWF4bGVuZ3RoJykgJiYgIW1lc3NhZ2VQYXJtKCdtYXhsZW5ndGgnKVwiPk1heCBMZW5ndGggRXhjZWVkZWQ8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1lcnJvclwiICpuZ0lmPVwiZm9ybS5nZXQoY29udHJvbE5hbWUpLmhhc0Vycm9yKCdtaW5sZW5ndGgnKSAmJiBtZXNzYWdlUGFybSgnbWlubGVuZ3RoJylcIj5NaW4gTGVuZ3RoOiB7e21lc3NhZ2VQYXJtKCdtaW5sZW5ndGgnKX19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtZXJyb3JcIiAqbmdJZj1cImZvcm0uZ2V0KGNvbnRyb2xOYW1lKS5oYXNFcnJvcignbWlubGVuZ3RoJykgJiYgIW1lc3NhZ2VQYXJtKCdtaW5sZW5ndGgnKVwiPk1pbiBMZW5ndGggUmVxdWlyZWQ8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1lcnJvclwiICpuZ0lmPVwiZm9ybS5nZXQoY29udHJvbE5hbWUpLmhhc0Vycm9yKCdtaW4nKSAmJiBtZXNzYWdlUGFybSgnbWluJylcIj5NaW4gVmFsdWU6IHt7bWVzc2FnZVBhcm0oJ21pbicpfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1lcnJvclwiICpuZ0lmPVwiZm9ybS5nZXQoY29udHJvbE5hbWUpLmhhc0Vycm9yKCdtaW4nKSAmJiAhbWVzc2FnZVBhcm0oJ21pbicpXCI+TWluIFZhbHVlIE5vdCBNZXQ8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1lcnJvclwiICpuZ0lmPVwiZm9ybS5nZXQoY29udHJvbE5hbWUpLmhhc0Vycm9yKCdlbWFpbCcpICYmICFmb3JtLmdldChjb250cm9sTmFtZSkuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj57e21lc3NhZ2VQYXJtKCdlbWFpbCcpfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1lcnJvclwiICpuZ0lmPVwiZm9ybS5nZXQoY29udHJvbE5hbWUpLmhhc0Vycm9yKCdpbnZhbGlkRGF0ZScpXCI+SW52YWxpZCBEYXRlPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtZXJyb3JcIiAqbmdJZj1cImZvcm0uZ2V0KGNvbnRyb2xOYW1lKS5oYXNFcnJvcignaW52YWxpZFllYXInKVwiPkludmFsaWQgWWVhcjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWVycm9yXCIgKm5nSWY9XCJmb3JtLmdldChjb250cm9sTmFtZSkuaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgIWZvcm0uZ2V0KGNvbnRyb2xOYW1lKS5oYXNFcnJvcignaW52YWxpZERhdGUnKVwiPnt7bGFiZWx9fSBpcyBSZXF1aXJlZDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWVycm9yXCIgKm5nSWY9XCJmb3JtLmdldChjb250cm9sTmFtZSkuaGFzRXJyb3IoJ2ludmFsaWQnKVwiPnt7Zm9ybS5nZXQoY29udHJvbE5hbWUpLmVycm9yc1snaW52YWxpZCddfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2ICpuZ0lmPVwiIWhhc0Vycm9yKClcIj4mbmJzcDs8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgnZm9ybScpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCdjb250cm9sTmFtZScpIGNvbnRyb2xOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDtcbiAgQElucHV0KCdtZXNzYWdlUGFybXMnKSBtZXNzYWdlUGFybXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJ9O1xuXG4gIG1lc3NhZ2VQYXJtID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLm1lc3NhZ2VQYXJtcyAmJiB0aGlzLm1lc3NhZ2VQYXJtc1trZXldID8gdGhpcy5tZXNzYWdlUGFybXNba2V5XSA6ICcnO1xuXG4gIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5mb3JtLmdldCh0aGlzLmNvbnRyb2xOYW1lKTtcbiAgICByZXR1cm4oZmllbGQudG91Y2hlZCAmJiBmaWVsZC5kaXJ0eSAmJiBmaWVsZC5pbnZhbGlkKTtcbiAgfVxufVxuIl19