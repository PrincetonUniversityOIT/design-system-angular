import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { UtilityFunctions } from '../utility-functions';
const INPUT_SELECTORS_EXCL_CLOSE = 'a[href]:not([disabled]), button:not([disabled]):not(.jazz-modal-button__close), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
const INPUT_SELECTORS = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
/**
 * @example
 `` `
   <jazz-modal-dialog [title]="'Sample Dialog'" [buttonLabel]="'Click Me!'" (buttonClicked)="clicked()">
     This is the content of the dialog
   </jazz-modal-dialog>
 `` `
 */
export class ModalDialogComponent {
    constructor() {
        this.buttonClicked = new EventEmitter();
    }
    ngOnInit() {
    }
    onAction(event) {
        if (!this.handleKeyEvents(event)) {
            return;
        }
        this.modalWrapper.nativeElement.classList.toggle('jazz-modal__wrapper--visible');
        if (this.modalWrapper.nativeElement.classList.contains('jazz-modal__wrapper--visible')) {
            this.focusOnFirstInput();
        }
        event.stopImmediatePropagation();
    }
    handleKeyEvents(event) {
        if (event instanceof KeyboardEvent) {
            const keyEvent = event;
            const isTabPressed = (keyEvent.key === 'Tab');
            const isEscPressed = (keyEvent.key === 'Escape');
            const isEnterPressed = (keyEvent.key === 'Enter');
            // Handle tab navigation to keep it within the window
            if (isTabPressed) {
                this.keepFocusWithin(keyEvent);
                return false;
            }
            // Only allow Enter and Escape Key Press
            if (!isEnterPressed && !isEscPressed) {
                return false;
            }
        }
        return true;
    }
    focusOnFirstInput() {
        const focusableEls = UtilityFunctions.select(INPUT_SELECTORS_EXCL_CLOSE, this.modalWrapper.nativeElement);
        if (focusableEls.length > 0) {
            focusableEls[0].focus();
        }
    }
    keepFocusWithin(keyEvent) {
        const focusableEls = UtilityFunctions.select(INPUT_SELECTORS, this.modalWrapper.nativeElement);
        const firstFocusableEl = focusableEls[0];
        const lastFocusableEl = focusableEls[focusableEls.length - 1];
        if (keyEvent.shiftKey) /* shift + tab */ {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                keyEvent.preventDefault();
            }
        }
        else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                keyEvent.preventDefault();
            }
        }
    }
    close() {
        this.modalWrapper.nativeElement.classList.remove('jazz-modal__wrapper--visible');
    }
    modalClick() {
        this.close();
        this.buttonClicked.emit();
    }
}
ModalDialogComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-modal-dialog',
                template: "<div class=\"jazz-modal\" role=\"region\">\n  <button class=\"jazz-btn jazz-modal__button\" (click)=\"onAction($event)\">{{ buttonLabel }}</button>\n  <div #jazzModalWrapper role=\"presentation\" class=\"jazz-modal-wrapper\" (keydown)=\"onAction($event)\">\n    <div role=\"dialog\" aria-label=\"Test Dialog with Script\" aria-modal=\"true\" class=\"jazz-modal-window jazz-modal--sm\">\n      <div class=\"jazz-modal-title\">\n        {{ title }}\n        <button class=\"jazz-modal__button jazz-modal-button__close jazz-modal-button--transparent\"\n                aria-label=\"Close modal dialog\" (click)=\"close()\"></button>\n      </div>\n      <div class=\"jazz-modal-content\" aria-labelledBy=\"jazz-modal-title\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"jazz-modal-button-container\">\n        <button class=\"jazz-btn jazz-modal__button\" (click)=\"close()\">Cancel</button>\n        <button class=\"jazz-btn jazz-modal__button\" (click)=\"modalClick()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"
            },] }
];
ModalDialogComponent.ctorParameters = () => [];
ModalDialogComponent.propDecorators = {
    buttonLabel: [{ type: Input }],
    title: [{ type: Input }],
    content: [{ type: Input }],
    buttonClicked: [{ type: Output }],
    modalWrapper: [{ type: ViewChild, args: ['jazzModalWrapper',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsTUFBTSwwQkFBMEIsR0FBRyxtUEFBbVAsQ0FBQztBQUN2UixNQUFNLGVBQWUsR0FBRyxvTkFBb04sQ0FBQztBQUU3Tzs7Ozs7OztHQU9HO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQWlCL0I7UUFMQSxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBS3ZDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDakYsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDdEYsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7UUFFRCxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sZUFBZSxDQUFDLEtBQVk7UUFDbEMsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO1lBQ2xDLE1BQU0sUUFBUSxHQUFrQixLQUFzQixDQUFDO1lBQ3ZELE1BQU0sWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUM5QyxNQUFNLFlBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDakQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBRWxELHFEQUFxRDtZQUNyRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELHdDQUF3QztZQUN4QyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNwQyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSxZQUFZLEdBQWtCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pILElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFRO1FBQzlCLE1BQU0sWUFBWSxHQUFrQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUcsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFHLGlCQUFpQixDQUFDO1lBQ3hDLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxnQkFBZ0IsRUFBRTtnQkFDL0MsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QixRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDM0I7U0FDRjthQUFNLFNBQVMsQ0FBQztZQUNmLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxlQUFlLEVBQUU7Z0JBQzlDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6QixRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUE3RkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsdWlDQUE0QzthQUM3Qzs7OzswQkFHRSxLQUFLO29CQUdMLEtBQUs7c0JBR0wsS0FBSzs0QkFHTCxNQUFNOzJCQUdOLFNBQVMsU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1V0aWxpdHlGdW5jdGlvbnN9IGZyb20gJy4uL3V0aWxpdHktZnVuY3Rpb25zJztcblxuY29uc3QgSU5QVVRfU0VMRUNUT1JTX0VYQ0xfQ0xPU0UgPSAnYVtocmVmXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KC5qYXp6LW1vZGFsLWJ1dHRvbl9fY2xvc2UpLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSc7XG5jb25zdCBJTlBVVF9TRUxFQ1RPUlMgPSAnYVtocmVmXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJztcblxuLyoqXG4gKiBAZXhhbXBsZVxuIGBgIGBcbiAgIDxqYXp6LW1vZGFsLWRpYWxvZyBbdGl0bGVdPVwiJ1NhbXBsZSBEaWFsb2cnXCIgW2J1dHRvbkxhYmVsXT1cIidDbGljayBNZSEnXCIgKGJ1dHRvbkNsaWNrZWQpPVwiY2xpY2tlZCgpXCI+XG4gICAgIFRoaXMgaXMgdGhlIGNvbnRlbnQgb2YgdGhlIGRpYWxvZ1xuICAgPC9qYXp6LW1vZGFsLWRpYWxvZz5cbiBgYCBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnamF6ei1tb2RhbC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgYnV0dG9uTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgYnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2phenpNb2RhbFdyYXBwZXInKVxuICBtb2RhbFdyYXBwZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQWN0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYW5kbGVLZXlFdmVudHMoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RhbFdyYXBwZXIubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdqYXp6LW1vZGFsX193cmFwcGVyLS12aXNpYmxlJyk7XG4gICAgaWYgKHRoaXMubW9kYWxXcmFwcGVyLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqYXp6LW1vZGFsX193cmFwcGVyLS12aXNpYmxlJykpIHtcbiAgICAgIHRoaXMuZm9jdXNPbkZpcnN0SW5wdXQoKTtcbiAgICB9XG5cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5RXZlbnRzKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGNvbnN0IGtleUV2ZW50OiBLZXlib2FyZEV2ZW50ID0gZXZlbnQgYXMgS2V5Ym9hcmRFdmVudDtcbiAgICAgIGNvbnN0IGlzVGFiUHJlc3NlZCA9IChrZXlFdmVudC5rZXkgPT09ICdUYWInKTtcbiAgICAgIGNvbnN0IGlzRXNjUHJlc3NlZCA9IChrZXlFdmVudC5rZXkgPT09ICdFc2NhcGUnKTtcbiAgICAgIGNvbnN0IGlzRW50ZXJQcmVzc2VkID0gKGtleUV2ZW50LmtleSA9PT0gJ0VudGVyJyk7XG5cbiAgICAgIC8vIEhhbmRsZSB0YWIgbmF2aWdhdGlvbiB0byBrZWVwIGl0IHdpdGhpbiB0aGUgd2luZG93XG4gICAgICBpZiAoaXNUYWJQcmVzc2VkKSB7XG4gICAgICAgIHRoaXMua2VlcEZvY3VzV2l0aGluKGtleUV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGFsbG93IEVudGVyIGFuZCBFc2NhcGUgS2V5IFByZXNzXG4gICAgICBpZiAoIWlzRW50ZXJQcmVzc2VkICYmICFpc0VzY1ByZXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZm9jdXNPbkZpcnN0SW5wdXQoKTogdm9pZCB7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxzOiBIVE1MRWxlbWVudFtdID0gVXRpbGl0eUZ1bmN0aW9ucy5zZWxlY3QoSU5QVVRfU0VMRUNUT1JTX0VYQ0xfQ0xPU0UsIHRoaXMubW9kYWxXcmFwcGVyLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGlmIChmb2N1c2FibGVFbHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9jdXNhYmxlRWxzWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBrZWVwRm9jdXNXaXRoaW4oa2V5RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBmb2N1c2FibGVFbHM6IEhUTUxFbGVtZW50W10gPSBVdGlsaXR5RnVuY3Rpb25zLnNlbGVjdChJTlBVVF9TRUxFQ1RPUlMsIHRoaXMubW9kYWxXcmFwcGVyLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlRWwgPSBmb2N1c2FibGVFbHNbMF07XG4gICAgY29uc3QgbGFzdEZvY3VzYWJsZUVsID0gZm9jdXNhYmxlRWxzW2ZvY3VzYWJsZUVscy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChrZXlFdmVudC5zaGlmdEtleSApIC8qIHNoaWZ0ICsgdGFiICovIHtcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEZvY3VzYWJsZUVsKSB7XG4gICAgICAgIGxhc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgICAgICBrZXlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSAvKiB0YWIgKi8ge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbCkge1xuICAgICAgICBmaXJzdEZvY3VzYWJsZUVsLmZvY3VzKCk7XG4gICAgICAgIGtleUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFdyYXBwZXIubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdqYXp6LW1vZGFsX193cmFwcGVyLS12aXNpYmxlJyk7XG4gIH1cblxuICBtb2RhbENsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLmJ1dHRvbkNsaWNrZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=