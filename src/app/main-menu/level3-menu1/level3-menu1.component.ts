import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-level3-menu1',
  templateUrl: './level3-menu1.component.html',
  styleUrls: ['./level3-menu1.component.css']
})
export class Level3Menu1Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup;
  disableForm = false;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {

    const controlsConfig = {
     field1: new FormControl(undefined, {validators: [Validators.required]}),
     field2: new FormControl(undefined, {validators: [Validators.maxLength(10)]}),
     field3: new FormControl(undefined, {validators: [Validators.required]}),
     field4: new FormControl(undefined, {validators: [Validators.required]}),
     field5: new FormControl(undefined, {validators: []}),
     field6: new FormControl(undefined, {validators: []}),
     field7: new FormControl(undefined, {validators: []}),
     field8: new FormControl(undefined, {validators: []}, ),
     field9: new FormControl(undefined, {validators: []})
    };

    this.form = this.formBuilder.group(controlsConfig, {validators: [this.validateBothFields]});

  }

  toggle(): void {
    if (this.disableForm) {
      this.form.enable();
    } else {
      this.form.disable();
    }
    this.disableForm = !this.disableForm;
  }

  toggleField2(): void {
    if (this.form.get('field2').disabled) {
      this.form.get('field2').enable();
    } else {
      this.form.get('field2').disable();
    }
  }

  disableText(): string {
    return this.disableForm ? 'Enable All' : 'Disable All';
  }

  disableField2Text(): string {
    return this.form.get('field2').disabled ? 'Enable Field 2' : 'Disable Field 2';
  }

  validateBothFields: ValidatorFn = (formGroup: FormGroup) => {
    const field8Control: AbstractControl = formGroup.get('field8');
    const field9Control: AbstractControl = formGroup.get('field9');

    field8Control.setErrors(null);

    // Both fields not entered is valid
    if ( !this.isDefined(field8Control.value) &&
         !this.isDefined(field9Control.value) ) {
        return null;
    }

    // If field8 is entered and field9 is empty then field8 is invalid
    if ( (this.isDefined(field8Control.value) && field8Control.value !== '') &&
         !(this.isDefined(field9Control.value) && field9Control.value !== '') )  {
      field8Control.setErrors({field9NotEntered: true});
      return {bothFieldsNotEntered: true};
    }

    return null;
  }

  isDefined(value): boolean {
    return value !== undefined && value !== null;
  }

  public findInvalidControls(): any {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        // console.log('invalid: ' + name);
        invalid.push(name);
      }
    }
    return invalid;
  }

  public findErrors(): any {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        const errorKeys = Object.keys(controls[name].errors);
        errorKeys.forEach( (errorKey) => {
              console.log('key:', errorKey);
        });
      }
    }
    return invalid;
  }
}
