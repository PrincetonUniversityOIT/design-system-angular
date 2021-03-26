import {CUSTOM_ELEMENTS_SCHEMA, Directive, HostBinding, Input, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './components/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {MainMenu1Component} from './main-menu/main-menu1/main-menu1.component';
import {MainMenu2Component} from './main-menu/main-menu2/main-menu2.component';
import {MainMenu3Component} from './main-menu/main-menu3/main-menu3.component';
import {AppRoutingModule} from './app.routing';
import {MainPageComponent} from './main-page/main-page.component';
// import {DocumentationComponent} from './main-menu/documentation/documentation.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    MainMenu1Component,
    MainMenu2Component,
    MainMenu3Component,
    MainPageComponent
    // ,
    // DocumentationComponent
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
