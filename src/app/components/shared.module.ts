import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {HeaderComponent} from './header/header.component';
import {NgModule} from '@angular/core';
import {PagerComponent} from './pager/pager.component';
import {AlertComponent} from './alert/alert.component';
import {AccordionComponent } from './accordion/accordion.component';
import {RouterModule} from '@angular/router';
import {MenuModule} from './menu/menu.module';
import {ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import {MainMenuItemComponent} from './header/main-menu/main-menu-item';
import {MainMenuComponent} from './header/main-menu/main-menu';
import {UtilityMenuComponent} from './header/utility-menu/utility-menu';
import {UtilityItemComponent} from './header/utility-menu/utility-menu-item';
import {AccordionModule} from './accordion/accordion.module';
import {AlertModule} from './alert/alert.module';
import {ButtonModule} from './button/button.module';
import {HeaderModule} from './header/header.module';
import {SearchButtonComponent} from './header/search-button/search-button.component';
import {ModalDialogModule} from './modal-dialog/modal-dialog.module';
import {PagerModule} from './pager/pager.module';
import {TabsModule} from './tabs/tabs.module';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule,
    AlertModule,
    ButtonModule,
    HeaderModule,
    MenuModule,
    ModalDialogModule,
    PagerModule,
    TabsModule
  ],
  exports: [
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    PagerComponent,
    ModalDialogComponent,
    SearchButtonComponent,
    UtilityItemComponent,
    UtilityMenuComponent,
    MainMenuItemComponent,
    MainMenuComponent
  ]
})
export class SharedModule {

}
