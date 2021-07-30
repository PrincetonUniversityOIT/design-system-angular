import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {DesignSystemAngularModule, PagerComponent} from 'design-system-angular';
// import { ComponentsModule, ComponentsComponent } from 'components';

@NgModule({
  imports: [
    BrowserModule,
    DesignSystemAngularModule
    // ComponentsModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector){}

  // tslint:disable-next-line:typedef
  ngDoBootstrap(){
    const element = createCustomElement(PagerComponent, { injector: this.injector })
    customElements.define('jazz-pager-component', element);
  }
}
