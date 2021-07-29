import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Alerts inform users about important changes or conditions in the interface. Use this component if you need to capture user’s attention in a prominent way.
 *
 * @example
  `` `
  <jazz-alert heading='Alerts' title="Alert Title" (onClose)="onClose($event)">
     <p>This is the alert content</p>
  </jazz-alert>
  `` `
 */

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

  /**
   * The close method can be used to programmatically close the alert.
   */
  close(): void {
    this.onClose.emit(true);
  }
}
