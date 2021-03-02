import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from './components/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
