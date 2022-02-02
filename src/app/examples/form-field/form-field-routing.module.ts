import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormFieldMainComponent} from './form-field-main.component';
import {FormFieldExampleComponent} from './form-field-example/form-field-example.component';
import {FormFieldTextExampleComponent} from './form-field-text-example/form-field-text-example.component';
import {FormFieldTextAreaExampleComponent} from './form-field-text-area-example/form-field-text-area-example.component';
import {FormFieldCheckboxExampleComponent} from './form-field-checkbox-example/form-field-checkbox-example.component';
import {FormFieldDropdownExampleComponent} from './form-field-dropdown-example/form-field-dropdown-example.component';
import {FormFieldRadioExampleComponent} from './form-field-radio-example/form-field-radio-example.component';

const routes: Routes = [
  {
    path: '',
    component: FormFieldMainComponent,
    data: {
      title: 'Form Field'
    },
    children: [
      { path: 'formFieldExample', component: FormFieldExampleComponent },
      { path: 'formFieldTextExample', component: FormFieldTextExampleComponent },
      { path: 'formFieldTextAreaExample', component: FormFieldTextAreaExampleComponent },
      { path: 'formFieldCheckboxExample', component: FormFieldCheckboxExampleComponent },
      { path: 'formFieldDropdownExample', component: FormFieldDropdownExampleComponent },
      { path: 'formFieldRadioExample', component: FormFieldRadioExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormFieldRoutingModule {}
