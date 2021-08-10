import {NgModule} from '@angular/core';
import {DesignSystemAngularModule} from 'design-system-angular';
import {CommonModule} from '@angular/common';
import {BreadcrumbsRoutingModule} from './breadcrumbs-routing.module';
import {BreadcrumbsMainComponent} from './breadcrumbs-main.component';
import {BreadcrumbsExampleComponent} from './breadcrumbs-example/breadcrumbs-example.component';
import {BreadcrumbsSimpleExampleComponent} from './breadcrumbs-simple-example/breadcrumbs-simple-example.component';
import {BreadcrumbsIconExampleComponent} from './breadcrumbs-icon-example/breadcrumbs-icon-example.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemAngularModule,
    BreadcrumbsRoutingModule
  ],
  declarations: [
    BreadcrumbsMainComponent,
    BreadcrumbsExampleComponent,
    BreadcrumbsSimpleExampleComponent,
    BreadcrumbsIconExampleComponent
  ],
  exports: [
    BreadcrumbsExampleComponent,
    BreadcrumbsSimpleExampleComponent,
    BreadcrumbsIconExampleComponent
  ]
})
export class BreadcrumbsModule {
}
