import {NgModule} from '@angular/core';
import {MainMenuComponent} from './main-menu/main-menu';
import {MainMenuItemComponent} from './main-menu/main-menu-item';
import {SearchButtonComponent} from './search-button/search-button.component';
import {UtilityMenuComponent} from './utility-menu/utility-menu';
import {UtilityItemComponent} from './utility-menu/utility-menu-item';
import {HeaderComponent} from './header.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MenuModule} from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
  ],
  declarations: [
    MainMenuComponent,
    MainMenuItemComponent,
    SearchButtonComponent,
    UtilityMenuComponent,
    UtilityItemComponent,
    HeaderComponent
  ],
  exports: [
    MainMenuComponent,
    MainMenuItemComponent,
    SearchButtonComponent,
    UtilityMenuComponent,
    UtilityItemComponent,
    HeaderComponent
  ]
})
export class HeaderModule {

}
