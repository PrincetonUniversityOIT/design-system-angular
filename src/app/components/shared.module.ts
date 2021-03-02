import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {MenuItemComponent} from './menu/menu-item.component';
import {NgModule} from '@angular/core';
import {PagerComponent} from './pager/pager.component';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    PagerComponent,
    AlertComponent
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent
  ]
})
export class SharedModule {

}


