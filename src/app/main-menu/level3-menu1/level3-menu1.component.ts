import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {

    const controlsConfig = {
     field1: new FormControl(undefined, {validators: [Validators.required]}),
     field2: new FormControl(undefined, {validators: [Validators.required]})
    };

    this.form = this.formBuilder.group(controlsConfig);
  }
}
