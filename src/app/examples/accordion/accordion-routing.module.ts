import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccordionExampleComponent} from './accordion-example/accordion-example.component';
import {AccordionMainComponent} from './accordion-main.component';
import {AccordionBorderedExampleComponent} from './accordion-bordered-example/accordion-bordered-example.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionMainComponent,
    data: {
      title: 'Accordion'
    },
    children: [
      { path: 'accordionExample', component: AccordionExampleComponent },
      { path: 'accordionBorderedExample', component: AccordionBorderedExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionRoutingModule {}
