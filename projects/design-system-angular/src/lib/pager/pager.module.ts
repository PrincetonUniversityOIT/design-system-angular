import {NgModule} from '@angular/core';
import {PagerComponent} from './pager.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PagerComponent
  ],
  exports: [
    PagerComponent
  ]
})
export class PagerModule {

}
