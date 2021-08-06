import {Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Princeton Design System';
  activeFlag = false;

  constructor() {
  }

  isActive(): boolean {
    return this.activeFlag;
  }

  clickMe(): void {
    this.activeFlag = !this.activeFlag;
    console.log('activeFlag', this.activeFlag)
  }
}
