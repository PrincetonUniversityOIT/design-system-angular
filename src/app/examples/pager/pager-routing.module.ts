import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagerSimpleExampleComponent} from './pager-simple-example.component';
import {PagerMainComponent} from './pager-main.component';

const routes: Routes = [
  {
    path: '',
    component: PagerMainComponent,
    data: {
      title: 'Pager'
    },
    children: [
      { path: 'pagerSimpleExample', component: PagerSimpleExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagerRoutingModule {}
