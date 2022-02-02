import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
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
    FormFieldComponent,
    FormInputDirective
  ],
  exports: [
    FormFieldComponent,
    FormInputDirective
  ]
})
export class DesignSystemFormsModule {

}
