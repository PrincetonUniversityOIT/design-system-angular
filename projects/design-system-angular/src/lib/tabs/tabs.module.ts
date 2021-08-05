import {NgModule} from '@angular/core';
import {TabComponent, TabsComponent} from './tabs.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  // Don't export all components because some are only to be used internally.
  exports: [
    TabComponent,
    TabsComponent
  ],
  declarations: [
    TabComponent,
    TabsComponent
  ],
})
export class TabsModule {}
