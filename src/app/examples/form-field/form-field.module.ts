import {NgModule} from '@angular/core';
import {DesignSystemAngularModule} from 'design-system-angular';
import {CommonModule} from '@angular/common';
import {FormFieldRoutingModule} from './form-field-routing.module';
import {FormFieldMainComponent} from './form-field-main.component';
import {FormFieldExampleComponent} from './form-field-example/form-field-example.component';
import {FormFieldTextExampleComponent} from './form-field-text-example/form-field-text-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormFieldCheckboxExampleComponent} from "./form-field-checkbox-example/form-field-checkbox-example.component";
import {FormFieldDropdownExampleComponent} from "./form-field-dropdown-example/form-field-dropdown-example.component";
import {FormFieldRadioExampleComponent} from "./form-field-radio-example/form-field-radio-example.component";
import {FormFieldTextAreaExampleComponent} from "./form-field-text-area-example/form-field-text-area-example.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DesignSystemAngularModule,
    FormFieldRoutingModule
  ],
  declarations: [
    FormFieldMainComponent,
    FormFieldExampleComponent,
    FormFieldTextExampleComponent,
    FormFieldCheckboxExampleComponent,
    FormFieldDropdownExampleComponent,
    FormFieldRadioExampleComponent,
    FormFieldTextAreaExampleComponent
  ],
  exports: [
    FormFieldExampleComponent,
    FormFieldTextExampleComponent,
    FormFieldCheckboxExampleComponent,
    FormFieldDropdownExampleComponent,
    FormFieldRadioExampleComponent,
    FormFieldTextAreaExampleComponent
  ]
})
export class FormFieldModule {
}
