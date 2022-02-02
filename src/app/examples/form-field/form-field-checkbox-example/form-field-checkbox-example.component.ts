import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-field-checkbox-example',
  templateUrl: './form-field-checkbox-example.component.html'
})
export class FormFieldCheckboxExampleComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup;

  ngOnInit(): void {

    const controlsConfig = {
      field5: new FormControl(undefined, {validators: [Validators.required]})
    };

    this.form = this.formBuilder.group(controlsConfig);
  }

}
