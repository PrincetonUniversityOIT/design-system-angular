import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef, Input,
  OnInit,
  QueryList
} from '@angular/core';
import {prefix as PREFIX} from '../config';
import {ARIA_EXPANDED} from '../utility-functions';

const ACCORDION_SELECTOR = `.${PREFIX}-accordion`;

const ACCORDION_BUTTON_SELECTOR            = `.${PREFIX}-accordion__button`;
export const ACCORDION_MULTISELECTABLE_CLASSNAME  = `${PREFIX}-accordion-multiselectable`;
export const ACCORDION_CONTENT_EXPANDED_CLASSNAME = `${PREFIX}-accordion__content--expanded`;

export const ARIA_CONTROLS = 'aria-controls';
export const HIDDEN = 'hidden';

/**
 * An Accordion is a vertically stacked set of headings that each control the visibility of an associated content section.
 *
 * <example-url>http://localhost:4200/jazz-design-system/#/accordion/accordionExample</example-url>
 * @example
 ```
 <jazz-accordion>
 <h2>
 <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content1">
 Sed porttitor lectus nibh?
 </button>
 </h2>
 <div class="jazz-accordion__content" id="content1" hidden>
 Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
 pellentesque nec, egestas non nisi.
 </div>
 <h2>
 <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="true" aria-controls="content2">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta?
 </button>
 </h2>
 <div aria-hidden="false" class="jazz-accordion__content" id="content2">
 Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
 et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
 Cras ultricies ligula sed magna dictum porta.
 </div>
 </jazz-accordion>
 ```
 */

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnInit, AfterContentInit {
  /**
   * This is an array of buttons with the selector "jazzAccordionButtons". Accordion buttons are
   * buttons which are specifically used to expand/collapse accordion panel content. The content to expand or collapsed
   * is identified by the button's aria-controls value which should match the id for that container (div).
   */
  @ContentChildren('jazzAccordionButtons', {descendants: true, read: ElementRef}) accordionButtons: QueryList<ElementRef>;

  @Input()
  showBorder = false;

  @Input()
  multiSelect = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    this.accordionButtons.forEach((btn) => {
      btn.nativeElement.addEventListener('click', this.click);
    });
  }

  /**
   * Delegreater file
   */
  isElement = (value) => {
    return value && typeof value === 'object' && value.nodeType === 1;
  }

  select = (selector: string, context: ParentNode) => {
    if (typeof selector !== 'string') {
      return [];
    }

    if (!context || !this.isElement(context)) {
      context = window.document; // eslint-disable-line no-param-reassign
    }

    const selection = context.querySelectorAll(selector);
    return Array.prototype.slice.call(selection);
  }

  selectClosestTo = (targetSelector: string, closestToSelector: string, context: Element) => {
    const elements = this.select(targetSelector, context);
    return elements.filter((element) => element.closest(closestToSelector) === context);
  }

  getButtonMatchingContent = (button: HTMLElement, accordion: Element) => {
    const matchVal = button.getAttribute('aria-controls');
    return accordion.querySelector(`#${matchVal}`);
  }

  getAccordionButtons = (accordion: Element) => {
    return this.selectClosestTo(ACCORDION_BUTTON_SELECTOR, ACCORDION_SELECTOR, accordion);
  }

  closeExpandedContents = (accordion: Element, clickedButton: Element) => {
    return this.getAccordionButtons(accordion).forEach((button) => {
      if (button !== clickedButton) {
        this.toggleControl(button, false);
        this.getButtonMatchingContent(button, accordion).classList.remove(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
      }
    });
  }

  /**
   * This click method is added as a click listener for all the jazzAccordionButtons buttons.
   */
  click = (event: Event): void => {
    const button = event.target as HTMLElement;
    const accordionEl = button.closest(ACCORDION_SELECTOR);
    const multiselectable = accordionEl.classList.contains(ACCORDION_MULTISELECTABLE_CLASSNAME);

    const expanded = this.toggleControl(button, null);
    const content = this.getButtonMatchingContent(button, accordionEl);

    if (expanded) {
      if (!multiselectable) {
        this.closeExpandedContents(accordionEl, button);
      }
      content.classList.add(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
      // this.accordionButtons.forEach((other) => {
      //   if (other.nativeElement !== button) {
      //     this.toggleControl(other.nativeElement, false);
      //   }
    } else {
      content.classList.remove(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
    }
    event.stopImmediatePropagation();
  }

  /**
   * The toggleControl method hides and shows the content associated with the button.
   */
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

    return safeExpanded;
  }
}
