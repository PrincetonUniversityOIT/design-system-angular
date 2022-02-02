import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-field-radio-example',
  templateUrl: './form-field-radio-example.component.html'
})
export class FormFieldRadioExampleComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup;

  ngOnInit(): void {

    const controlsConfig = {
      field4: new FormControl(undefined, {validators: [Validators.required]})
    };

    this.form = this.formBuilder.group(controlsConfig);
  }

}
