import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {MenuItemComponent} from './menu/menu-item.component';
import {NgModule} from '@angular/core';
import {PagerComponent} from './pager/pager.component';
import {AlertComponent} from './alert/alert.component';
import {AccordionComponent } from './accordion/accordion.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    PagerComponent
  ],
  exports: [
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    PagerComponent
  ]
})
export class SharedModule {

}
