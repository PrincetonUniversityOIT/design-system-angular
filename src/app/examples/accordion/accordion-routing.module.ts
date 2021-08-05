import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccordionExampleComponent} from './accordion-example.component';
import {AccordionMainComponent} from './accordion-main.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionMainComponent,
    data: {
      title: 'Accordion'
    },
    children: [
      { path: 'accordionExample', component: AccordionExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionRoutingModule {}
