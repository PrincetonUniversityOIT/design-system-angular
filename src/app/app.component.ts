import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Princeton Design System';
  activeFlag = false;

  constructor() {}

  ngOnInit(): void {

  }

  isActive(): boolean {
    return this.activeFlag;
  }

  clickMe(): void {
    this.activeFlag = !this.activeFlag;
    console.log('activeFlag', this.activeFlag)
  }
}
