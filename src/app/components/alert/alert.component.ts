import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  constructor() { }

  @Input()
  heading: string;

  @Input()
  title: string;

  @Input()
  content: string;

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  close(): void {
    this.onClose.emit(true);
  }
}
