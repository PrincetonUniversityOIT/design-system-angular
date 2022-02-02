import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formInput]'
})
export class FormInputDirective {

  constructor(private formControl: NgControl) {
  }

  get hasError(): boolean {
    return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
  }

  get disabled(): boolean {
    return this.formControl.disabled ? true : false;
  }

  get errors(): any {
    if (this.hasError && this.formControl.errors) {
      return this.formControl.errors;
    }
    return '';
  }
}
