import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BreadcrumbsMainComponent} from './breadcrumbs-main.component';
import {BreadcrumbsExampleComponent} from './breadcrumbs-example/breadcrumbs-example.component';
import {BreadcrumbsSimpleExampleComponent} from './breadcrumbs-simple-example/breadcrumbs-simple-example.component';
import {BreadcrumbsIconExampleComponent} from './breadcrumbs-icon-example/breadcrumbs-icon-example.component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsMainComponent,
    data: {
      title: 'Breadcrumbs'
    },
    children: [
      { path: 'breadcrumbsExample', component: BreadcrumbsExampleComponent },
      { path: 'breadcrumbsSimpleExample', component: BreadcrumbsSimpleExampleComponent },
      { path: 'breadcrumbsIconExample', component: BreadcrumbsIconExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbsRoutingModule {}
