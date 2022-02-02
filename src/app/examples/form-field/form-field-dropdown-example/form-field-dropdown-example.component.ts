import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-field-dropdown-example',
  templateUrl: './form-field-dropdown-example.component.html'
})
export class FormFieldDropdownExampleComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup;

  ngOnInit(): void {

    const controlsConfig = {
      field3: new FormControl(undefined, {validators: [Validators.required]})
    };

    this.form = this.formBuilder.group(controlsConfig);
  }

}
