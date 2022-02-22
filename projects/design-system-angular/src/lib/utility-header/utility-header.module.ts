import {NgModule} from '@angular/core';
import {UtilityHeaderComponent} from './utility-header.component';
import {UtilityHeaderLinkComponent} from './utility-header-link.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    UtilityHeaderComponent,
    UtilityHeaderLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UtilityHeaderComponent,
    UtilityHeaderLinkComponent
  ]
})
export class UtilityHeaderModule {

}
