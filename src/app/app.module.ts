import {CUSTOM_ELEMENTS_SCHEMA, Directive, HostBinding, Input, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {MainMenu1Component} from './main-menu/main-menu1/main-menu1.component';
import {MainMenu2Component} from './main-menu/main-menu2/main-menu2.component';
import {MainMenu3Component} from './main-menu/main-menu3/main-menu3.component';
import {AppRoutingModule} from './app.routing';
import {MainPageComponent} from './main-page/main-page.component';
import {Level2Menu1Component} from './main-menu/level2-menu1/level2-menu1.component';
import {Level3Menu1Component} from './main-menu/level3-menu1/level3-menu1.component';
import {DocumentationComponent} from './main-menu/documentation-menu/documentation.component';
import {DesignSystemAngularModule} from 'design-system-angular';
import {HomeComponent} from './home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    DesignSystemAngularModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenu1Component,
    MainMenu2Component,
    MainMenu3Component,
    MainPageComponent,
    Level2Menu1Component,
    Level3Menu1Component,
    DocumentationComponent
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
