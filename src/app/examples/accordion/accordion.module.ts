import {NgModule} from '@angular/core';
import {DesignSystemAngularModule} from 'design-system-angular';
import {CommonModule} from '@angular/common';
import {AccordionRoutingModule} from './accordion-routing.module';
import {AccordionMainComponent} from './accordion-main.component';
import {AccordionExampleComponent} from './accordion-example/accordion-example.component';
import {AccordionBorderedExampleComponent} from './accordion-bordered-example/accordion-bordered-example.component';
import {AccordionBorderlessExampleComponent} from './accordion-borderless-example/accordion-borderless-example.component';
import {AccordionSingleExampleComponent} from './accordion-single-example/accordion-single-example.component';
import {AccordionOverflowExampleComponent} from './accordion-overflow-example/accordion-overflow-example.component';

@NgModule({
  imports: [
    CommonModule,
    DesignSystemAngularModule,
    AccordionRoutingModule
  ],
  declarations: [
    AccordionMainComponent,
    AccordionExampleComponent,
    AccordionBorderedExampleComponent,
    AccordionBorderlessExampleComponent,
    AccordionSingleExampleComponent,
    AccordionOverflowExampleComponent
  ],
  exports: [
    AccordionExampleComponent,
    AccordionBorderedExampleComponent,
    AccordionBorderlessExampleComponent,
    AccordionSingleExampleComponent,
    AccordionOverflowExampleComponent
  ]
})
export class AccordionModule {
}
