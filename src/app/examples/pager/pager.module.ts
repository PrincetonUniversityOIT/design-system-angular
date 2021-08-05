import {NgModule} from '@angular/core';
import {DesignSystemAngularModule} from 'design-system-angular';
import {PagerSimpleExampleComponent} from './pager-simple-example.component';
import {PagerRoutingModule} from './pager-routing.module';
import {PagerMainComponent} from './pager-main.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemAngularModule,
    PagerRoutingModule
  ],
  declarations: [
    PagerMainComponent,
    PagerSimpleExampleComponent
  ],
  exports: [
    PagerSimpleExampleComponent
  ]
})
export class PagerModule {
}
