import {NgModule} from '@angular/core';
import {DesignSystemAngularModule} from 'design-system-angular';
import {PagerRoutingModule} from './pager-routing.module';
import {PagerMainComponent} from './pager-main.component';
import {CommonModule} from '@angular/common';
import {PagerExampleComponent} from './pager-example/pager-example.component';
import {PagerSimpleExampleComponent} from './pager-simple-example/pager-simple-example.component';
import {PagerTruncatedLeftExampleComponent} from './pager-truncated-left-example/pager-truncated-left-example.component';
import {PagerTruncatedRightExampleComponent} from './pager-truncated-right-example/pager-truncated-right-example.component';
import {PagerNoTruncationExampleComponent} from './pager-no-truncation-example/pager-no-truncation-example.component';
import {PagerSmallExampleComponent} from './pager-small-example/pager-small-example.component';
import {PagerPrevExampleComponent} from './pager-prev-example/pager-prev-example.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemAngularModule,
    PagerRoutingModule
  ],
  declarations: [
    PagerMainComponent,
    PagerExampleComponent,
    PagerSimpleExampleComponent,
    PagerTruncatedLeftExampleComponent,
    PagerTruncatedRightExampleComponent,
    PagerNoTruncationExampleComponent,
    PagerSmallExampleComponent,
    PagerPrevExampleComponent
  ],
  exports: [
    PagerExampleComponent,
    PagerSimpleExampleComponent,
    PagerTruncatedLeftExampleComponent,
    PagerTruncatedRightExampleComponent,
    PagerNoTruncationExampleComponent,
    PagerSmallExampleComponent,
    PagerPrevExampleComponent
  ]
})
export class PagerModule {
}
