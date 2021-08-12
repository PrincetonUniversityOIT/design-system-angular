import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FormFieldErrorComponent} from './form-field-error.component';
import {FormFieldComponent} from './form-field.component';
import {FormInputDirective} from './form-input.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormFieldErrorComponent,
    FormFieldComponent,
    FormInputDirective
  ],
  exports: [
    FormFieldErrorComponent,
    FormFieldComponent,
    FormInputDirective
  ]
})
export class DesignSystemFormsModule {

}
