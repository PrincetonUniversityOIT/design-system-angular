import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

/**
 * Use 'invalid' validation error key to display any validation message
 */
@Component({
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
})
export class FormFieldErrorComponent {
  @Input('form') form: FormGroup;
  @Input('controlName') controlName: string;
  @Input('label') label;
  @Input('messageParms') messageParms: {[key: string]: string | number};

  messageParm = (key: string) => this.messageParms && this.messageParms[key] ? this.messageParms[key] : '';

  hasError(): boolean {
    const field = this.form.get(this.controlName);
    return(field.touched && field.dirty && field.invalid);
  }
}
