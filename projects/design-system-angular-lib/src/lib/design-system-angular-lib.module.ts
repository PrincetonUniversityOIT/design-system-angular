import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AccordionModule} from './accordion/accordion.module';
import {AlertModule} from './alert/alert.module';
import {BreadcrumbsModule} from './breadcrumbs/breadcrumbs.module';
import {ButtonModule} from './button/button.module';
import {HeaderModule} from './header/header.module';
import {MenuModule} from './menu/menu.module';
import {ModalDialogModule} from './modal-dialog/modal-dialog.module';
import {PagerModule} from './pager/pager.module';
import {TabsModule} from './tabs/tabs.module';
import {AccordionComponent} from './accordion/accordion.component';
import {AlertComponent} from './alert/alert.component';
import {BreadcrumbComponent, BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {ButtonComponent} from './button/button.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {PagerComponent} from './pager/pager.component';
import {ModalDialogComponent} from './modal-dialog/modal-dialog.component';
import {SearchButtonComponent} from './header/search-button/search-button.component';
import {UtilityItemComponent} from './header/utility-menu/utility-menu-item';
import {UtilityMenuComponent} from './header/utility-menu/utility-menu';
import {MainMenuItemComponent} from './header/main-menu/main-menu-item';
import {MainMenuComponent} from './header/main-menu/main-menu';
import {TabComponent, TabsComponent} from './tabs/tabs.component';
import {MenuItemComponent} from './menu/menu-item/menu-item.component';
import {MenuMainButtonComponent} from './menu/menu-main-button/menu-main-button.component';
import {MenuSubButtonComponent} from './menu/menu-sub-button/menu-sub-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule,
    AlertModule,
    BreadcrumbsModule,
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
    BreadcrumbComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    MenuMainButtonComponent,
    MenuSubButtonComponent,
    PagerComponent,
    ModalDialogComponent,
    SearchButtonComponent,
    UtilityItemComponent,
    UtilityMenuComponent,
    MainMenuItemComponent,
    MainMenuComponent,
    TabComponent,
    TabsComponent
  ]
})
export class DesignSystemAngularLibModule { }
