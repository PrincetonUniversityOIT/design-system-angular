import {NgModule} from '@angular/core';
import {BreadcrumbComponent, BreadcrumbsComponent} from './breadcrumbs.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbComponent,
    BreadcrumbsComponent
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule {

}
