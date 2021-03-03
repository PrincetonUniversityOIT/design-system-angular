import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {HeaderComponent} from './header/header.component';
import {NgModule} from '@angular/core';
import {PagerComponent} from './pager/pager.component';
import {AlertComponent} from './alert/alert.component';
import {AccordionComponent } from './accordion/accordion.component';
import {RouterModule} from '@angular/router';
import {MenuModule} from './menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
  ],
  declarations: [
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    HeaderComponent,
    PagerComponent
  ],
  exports: [
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    HeaderComponent,
    PagerComponent
  ]
})
export class SharedModule {

}
