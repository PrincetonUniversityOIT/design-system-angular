import {NgModule} from '@angular/core';
import {DesignSystemAngularModule} from 'design-system-angular';
import {CommonModule} from '@angular/common';
import {AccordionRoutingModule} from './accordion-routing.module';
import {AccordionMainComponent} from './accordion-main.component';
import {AccordionExampleComponent} from './accordion-example/accordion-example.component';
import {AccordionBorderedExampleComponent} from './accordion-bordered-example/accordion-bordered-example.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemAngularModule,
    AccordionRoutingModule
  ],
  declarations: [
    AccordionMainComponent,
    AccordionExampleComponent,
    AccordionBorderedExampleComponent
  ],
  exports: [
    AccordionExampleComponent
  ]
})
export class AccordionModule {
}
