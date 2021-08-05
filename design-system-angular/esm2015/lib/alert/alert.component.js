import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class AlertComponent {
    constructor() {
        this.onClose = new EventEmitter();
    }
    /**
     * The close method can be used to programmatically close the alert.
     */
    close() {
        this.onClose.emit(true);
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-alert',
                template: "<section class=\"jazz-alert-section\">\n  <h2 class=\"jazz-alert-section__heading jazz-visually-hidden\">{{ heading }}</h2>\n  <div class=\"jazz-alert-section__content\">\n    <div class=\"jazz-row\">\n      <h3 class=\"jazz-alert-section__title\">{{ title }}</h3>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <a title=\"Hide alert with title {{ title }} until it is updated\" class=\"jazz-alert-section__close\" role=\"button\" (click)=\"close()\">X</a>\n</section>\n"
            },] }
];
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    heading: [{ type: Input }],
    title: [{ type: Input }],
    content: [{ type: Input }],
    onClose: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFckU7Ozs7Ozs7OztHQVNHO0FBT0gsTUFBTSxPQUFPLGNBQWM7SUFFekI7UUFZQSxZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFacEMsQ0FBQztJQWNqQjs7T0FFRztJQUNILEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDZlQUFxQzthQUN0Qzs7OztzQkFLRSxLQUFLO29CQUdMLEtBQUs7c0JBR0wsS0FBSztzQkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQWxlcnRzIGluZm9ybSB1c2VycyBhYm91dCBpbXBvcnRhbnQgY2hhbmdlcyBvciBjb25kaXRpb25zIGluIHRoZSBpbnRlcmZhY2UuIFVzZSB0aGlzIGNvbXBvbmVudCBpZiB5b3UgbmVlZCB0byBjYXB0dXJlIHVzZXLigJlzIGF0dGVudGlvbiBpbiBhIHByb21pbmVudCB3YXkuXG4gKlxuICogQGV4YW1wbGVcbiAgYGAgYFxuICA8amF6ei1hbGVydCBoZWFkaW5nPSdBbGVydHMnIHRpdGxlPVwiQWxlcnQgVGl0bGVcIiAob25DbG9zZSk9XCJvbkNsb3NlKCRldmVudClcIj5cbiAgICAgPHA+VGhpcyBpcyB0aGUgYWxlcnQgY29udGVudDwvcD5cbiAgPC9qYXp6LWFsZXJ0PlxuICBgYCBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASW5wdXQoKVxuICBoZWFkaW5nOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGhlIGNsb3NlIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBwcm9ncmFtbWF0aWNhbGx5IGNsb3NlIHRoZSBhbGVydC5cbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMub25DbG9zZS5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=