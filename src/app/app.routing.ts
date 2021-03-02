import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainMenu1Component} from './main-menu/main-menu1/main-menu1.component';
import {MainMenu2Component} from './main-menu/main-menu2/main-menu2.component';
import {MainMenu3Component} from './main-menu/main-menu3/main-menu3.component';
import {MainPageComponent} from './main-page/main-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'mainMenu1',
    component: MainMenu1Component
  },
  {
    path: 'mainMenu2',
    component: MainMenu2Component
  },
  {
    path: 'mainMenu3',
    component: MainMenu3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule  {
}
