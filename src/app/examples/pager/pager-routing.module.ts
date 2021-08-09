import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagerMainComponent} from './pager-main.component';
import {PagerExampleComponent} from './pager-example/pager-example.component';
import {PagerSimpleExampleComponent} from './pager-simple-example/pager-simple-example.component';
import {PagerTruncatedLeftExampleComponent} from './pager-truncated-left-example/pager-truncated-left-example.component';
import {PagerTruncatedRightExampleComponent} from './pager-truncated-right-example/pager-truncated-right-example.component';
import {PagerNoTruncationExampleComponent} from './pager-no-truncation-example/pager-no-truncation-example.component';
import {PagerSmallExampleComponent} from './pager-small-example/pager-small-example.component';
import {PagerPrevExampleComponent} from './pager-prev-example/pager-prev-example.component';

const routes: Routes = [
  {
    path: '',
    component: PagerMainComponent,
    data: {
      title: 'Pager'
    },
    children: [
      { path: 'pagerExample', component: PagerExampleComponent },
      { path: 'pagerSimpleExample', component: PagerSimpleExampleComponent },
      { path: 'pagerTruncatedLeftExample', component: PagerTruncatedLeftExampleComponent },
      { path: 'pagerTruncatedRightExample', component: PagerTruncatedRightExampleComponent },
      { path: 'pagerNoTruncationExample', component: PagerNoTruncationExampleComponent },
      { path: 'pagerSmallExample', component: PagerSmallExampleComponent },
      { path: 'pagerPrevExample', component: PagerPrevExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagerRoutingModule {}
