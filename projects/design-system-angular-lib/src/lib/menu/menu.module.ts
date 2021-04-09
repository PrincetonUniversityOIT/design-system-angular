import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {MenuMainButtonComponent} from './menu-main-button/menu-main-button.component';
import {MenuSubButtonComponent} from './menu-sub-button/menu-sub-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    MenuMainButtonComponent,
    MenuSubButtonComponent
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    MenuMainButtonComponent,
    MenuSubButtonComponent
  ]
})
export class MenuModule {

}
