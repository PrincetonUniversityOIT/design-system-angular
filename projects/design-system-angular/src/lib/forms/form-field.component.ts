import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {FormInputDirective} from './form-input.directive';

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

@Component({
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
})
export class FormFieldComponent implements OnInit {

  @Input() for: string;
  @Input() label: string;
  @Input() required: string;
  @Input() messageConfig: {[index: string]: string} = {};

  @ContentChild(FormInputDirective) formInput: FormInputDirective;

  get labelClass(): string {
    return this.required + ' ' + this.disabled;
  }

  get divClass(): string {
    return this.hasError() ? 'jazz-form-field--error' : 'jazz-form-field' ;
  }

  get disabled(): boolean {
    return this.formInput.disabled;
  }

  ngOnInit(): void {
  }

  hasError(): boolean {
    if (!this.formInput) {
      throw new Error('You have probably forgotten to put the formInput directive on one of the elements inside of the form-field tag.');
    }
    return this.formInput.hasError;
  }

  get errorMessages(): any[] {
    if (!this.formInput) {
      throw new Error('You have probably forgotten to put the formInput directive on one of the elements inside of the form-field tag.');
    }

    const errors = this.formInput.errors;
    const messages = [];

    const errorKeys = Object.keys(errors);
    errorKeys.forEach( (errorKey) => {
      if (this.messageConfig[errorKey]) {
        messages.push(this.messageConfig[errorKey]);
      } else if (FORM_FIELD_GLOBAL_MSGS[errorKey]) {
        messages.push(FORM_FIELD_GLOBAL_MSGS[errorKey]);
      } else {
        messages.push(errorKey);
      }
    });

    return messages;
  }
}
