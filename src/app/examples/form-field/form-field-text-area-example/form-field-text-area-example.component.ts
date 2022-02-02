import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-field-text-area-example',
  templateUrl: './form-field-text-area-example.component.html'
})
export class FormFieldTextAreaExampleComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup;

  ngOnInit(): void {

    const controlsConfig = {
      field2: new FormControl(undefined, {validators: [Validators.required]})
    };

    this.form = this.formBuilder.group(controlsConfig);
  }

}
