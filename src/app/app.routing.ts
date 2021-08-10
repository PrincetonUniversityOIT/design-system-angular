import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainMenu1Component} from './main-menu/main-menu1/main-menu1.component';
import {MainMenu2Component} from './main-menu/main-menu2/main-menu2.component';
import {MainMenu3Component} from './main-menu/main-menu3/main-menu3.component';
import {MainPageComponent} from './main-page/main-page.component';
import {Level2Menu1Component} from './main-menu/level2-menu1/level2-menu1.component';
import {Level3Menu1Component} from './main-menu/level3-menu1/level3-menu1.component';
import {DocumentationComponent} from './main-menu/documentation-menu/documentation.component';
import {HomeComponent} from './home.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MainPageComponent },
      { path: 'mainMenu1', component: MainMenu1Component },
      { path: 'mainMenu2', component: MainMenu2Component },
      { path: 'mainMenu3', component: MainMenu3Component },
      { path: 'level2item1', component: Level2Menu1Component },
      { path: 'level3item1', component: Level3Menu1Component },
      { path: 'documentation', component: DocumentationComponent },
    ],
    component: HomeComponent
  },
  {
    path: 'pager',
    loadChildren: () => import('./examples/pager/pager.module').then(m => m.PagerModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./examples/accordion/accordion.module').then(m => m.AccordionModule)
  },
  {
    path: 'breadcrumbs',
    loadChildren: () => import('./examples/breadcrumbs/breadcrumbs.module').then(m => m.BreadcrumbsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule  {
}
