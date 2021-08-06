import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccordionExampleComponent} from './accordion-example/accordion-example.component';
import {AccordionMainComponent} from './accordion-main.component';
import {AccordionBorderedExampleComponent} from './accordion-bordered-example/accordion-bordered-example.component';
import {AccordionBorderlessExampleComponent} from './accordion-borderless-example/accordion-borderless-example.component';
import {AccordionSingleExampleComponent} from './accordion-single-example/accordion-single-example.component';
import {AccordionOverflowExampleComponent} from './accordion-overflow-example/accordion-overflow-example.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionMainComponent,
    data: {
      title: 'Accordion'
    },
    children: [
      { path: 'accordionExample', component: AccordionExampleComponent },
      { path: 'accordionBorderedExample', component: AccordionBorderedExampleComponent },
      { path: 'accordionBorderlessExample', component: AccordionBorderlessExampleComponent },
      { path: 'accordionSingleExample', component: AccordionSingleExampleComponent },
      { path: 'accordionOverflowExample', component: AccordionOverflowExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionRoutingModule {}
