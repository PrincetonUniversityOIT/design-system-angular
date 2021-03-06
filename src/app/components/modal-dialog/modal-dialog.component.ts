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

@Component({
  selector: 'app-jazz-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
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
    console.log('onAction')

    if (!this.handleKeyEvents(event)) {
      return;
    }

    this.modalWrapper.nativeElement.classList.toggle('jazz-modal__wrapper--visible');
    if (this.modalWrapper.nativeElement.classList.contains('jazz-modal__wrapper--visible')) {
      this.focusOnFirstInput();
    }

    event.stopImmediatePropagation();
  }

  handleKeyEvents(event: Event): boolean {
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

  focusOnFirstInput(): void {
    const focusableEls: HTMLElement[] = UtilityFunctions.select(INPUT_SELECTORS_EXCL_CLOSE, this.modalWrapper.nativeElement);
    if (focusableEls.length > 0) {
      focusableEls[0].focus();
    }
  }

  keepFocusWithin(keyEvent): void {
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
    console.log('close')
    this.modalWrapper.nativeElement.classList.remove('jazz-modal__wrapper--visible');
  }

  modalClick(): void {
    this.close();
    this.buttonClicked.emit();
  }
}
