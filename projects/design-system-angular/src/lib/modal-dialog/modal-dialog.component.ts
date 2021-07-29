import {
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {UtilityFunctions} from '../utility-functions';

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
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-modal-dialog',
  templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent implements OnInit {

  @Input()
  buttonLabel: string;

  @Input()
  title: string;

  @Input()
  content: string;

  @Output()
  buttonClicked: EventEmitter<void> = new EventEmitter();

  @ViewChild('jazzModalWrapper')
  modalWrapper: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAction(event: Event): void {
    if (!this.handleKeyEvents(event)) {
      return;
    }

    this.modalWrapper.nativeElement.classList.toggle('jazz-modal__wrapper--visible');
    if (this.modalWrapper.nativeElement.classList.contains('jazz-modal__wrapper--visible')) {
      this.focusOnFirstInput();
    }

    event.stopImmediatePropagation();
  }

  private handleKeyEvents(event: Event): boolean {
    if (event instanceof KeyboardEvent) {
      const keyEvent: KeyboardEvent = event as KeyboardEvent;
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

  private focusOnFirstInput(): void {
    const focusableEls: HTMLElement[] = UtilityFunctions.select(INPUT_SELECTORS_EXCL_CLOSE, this.modalWrapper.nativeElement);
    if (focusableEls.length > 0) {
      focusableEls[0].focus();
    }
  }

  private keepFocusWithin(keyEvent): void {
    const focusableEls: HTMLElement[] = UtilityFunctions.select(INPUT_SELECTORS, this.modalWrapper.nativeElement);
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    if (keyEvent.shiftKey ) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        keyEvent.preventDefault();
      }
    } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        keyEvent.preventDefault();
      }
    }
  }

  close(): void {
    this.modalWrapper.nativeElement.classList.remove('jazz-modal__wrapper--visible');
  }

  modalClick(): void {
    this.close();
    this.buttonClicked.emit();
  }
}
