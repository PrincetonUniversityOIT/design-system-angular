import {NgModule} from '@angular/core';
import {DesignSystemAngularModule} from 'design-system-angular';
import {PagerRoutingModule} from './pager-routing.module';
import {PagerMainComponent} from './pager-main.component';
import {CommonModule} from '@angular/common';
import {PagerExampleComponent} from './pager-example/pager-example.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemAngularModule,
    PagerRoutingModule
  ],
  declarations: [
    PagerMainComponent,
    PagerExampleComponent
  ],
  exports: [
    PagerExampleComponent
  ]
})
export class PagerModule {
}
