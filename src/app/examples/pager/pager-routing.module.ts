import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagerMainComponent} from './pager-main.component';
import {PagerExampleComponent} from './pager-example/pager-example.component';

const routes: Routes = [
  {
    path: '',
    component: PagerMainComponent,
    data: {
      title: 'Pager'
    },
    children: [
      { path: 'pagerExample', component: PagerExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagerRoutingModule {}
