import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList
} from '@angular/core';
import {prefix as PREFIX} from '../config';
import {ARIA_EXPANDED} from "../utility-functions";

const ACCORDION_SELECTOR = `.${PREFIX}-accordion`;
const MULTISELECTABLE = 'aria-multiselectable';

export const ARIA_CONTROLS = 'aria-controls';
export const HIDDEN = 'hidden';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnInit, AfterContentInit {
  @ContentChildren('jazzAccordionButtons', {descendants: true, read: ElementRef}) accordionButtons: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    this.accordionButtons.forEach((btn) => {
      btn.nativeElement.addEventListener('click', this.click);
    });
  }

  click = (event: Event): void => {
    const button = event.target as HTMLElement;
    const accordionEl = button.closest(ACCORDION_SELECTOR);
    const multiselectable = accordionEl.getAttribute(MULTISELECTABLE) === 'true';

    const expanded = this.toggleControl(button, null);

    if (expanded && !multiselectable) {
      this.accordionButtons.forEach((other) => {
        if (other.nativeElement !== button) {
          this.toggleControl(other.nativeElement, false);
        }
      });
    }
    event.stopImmediatePropagation();
  }

  toggleControl = (target: Element, expanded?: boolean): any => {

    let safeExpanded = expanded;

    if (typeof safeExpanded !== 'boolean') {
      // invert the existing button value
      safeExpanded = target.getAttribute(ARIA_EXPANDED) === 'false';
    }

    target.setAttribute(ARIA_EXPANDED, safeExpanded.toString());

    const controlledElementId = target.getAttribute(ARIA_CONTROLS);
    const controlledElement = document.getElementById(controlledElementId);
    if (!controlledElement) {
      throw new Error(`aria-controls is not properly configured: ${controlledElementId}`);
    }

    if (safeExpanded) {
      controlledElement.removeAttribute(HIDDEN);
    } else {
      controlledElement.setAttribute(HIDDEN, '');
    }

    return safeExpanded;
  }
}
