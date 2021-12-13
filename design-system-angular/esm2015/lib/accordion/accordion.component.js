import { Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
import { prefix as PREFIX } from '../config';
import { ARIA_EXPANDED } from '../utility-functions';
const ACCORDION_SELECTOR = `.${PREFIX}-accordion`;
const ACCORDION_BUTTON_SELECTOR = `.${PREFIX}-accordion__button`;
export const ACCORDION_MULTISELECTABLE_CLASSNAME = `${PREFIX}-accordion-multiselectable`;
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
export class AccordionComponent {
    constructor() {
        this.showBorder = false;
        this.multiSelect = true;
        /**
         * Delegreater file
         */
        this.isElement = (value) => {
            return value && typeof value === 'object' && value.nodeType === 1;
        };
        this.select = (selector, context) => {
            if (typeof selector !== 'string') {
                return [];
            }
            if (!context || !this.isElement(context)) {
                context = window.document; // eslint-disable-line no-param-reassign
            }
            const selection = context.querySelectorAll(selector);
            return Array.prototype.slice.call(selection);
        };
        this.selectClosestTo = (targetSelector, closestToSelector, context) => {
            const elements = this.select(targetSelector, context);
            return elements.filter((element) => element.closest(closestToSelector) === context);
        };
        this.getButtonMatchingContent = (button, accordion) => {
            const matchVal = button.getAttribute('aria-controls');
            return accordion.querySelector(`#${matchVal}`);
        };
        this.getAccordionButtons = (accordion) => {
            return this.selectClosestTo(ACCORDION_BUTTON_SELECTOR, ACCORDION_SELECTOR, accordion);
        };
        this.closeExpandedContents = (accordion, clickedButton) => {
            return this.getAccordionButtons(accordion).forEach((button) => {
                if (button !== clickedButton) {
                    this.toggleControl(button, false);
                    this.getButtonMatchingContent(button, accordion).classList.remove(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
                }
            });
        };
        /**
         * This click method is added as a click listener for all the jazzAccordionButtons buttons.
         */
        this.click = (event) => {
            const button = event.target;
            const accordionEl = button.closest(ACCORDION_SELECTOR);
            const multiselectable = accordionEl.classList.contains(ACCORDION_MULTISELECTABLE_CLASSNAME);
            const expanded = this.toggleControl(button, null);
            const content = this.getButtonMatchingContent(button, accordionEl);
            if (expanded) {
                if (!multiselectable) {
                    this.closeExpandedContents(accordionEl, button);
                }
                content.classList.add(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
            }
            else {
                content.classList.remove(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
            }
            event.stopImmediatePropagation();
        };
        /**
         * The toggleControl method hides and shows the content associated with the button.
         */
        this.toggleControl = (target, expanded) => {
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
        };
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.accordionButtons.forEach((btn) => {
            btn.nativeElement.addEventListener('click', this.click);
        });
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-accordion',
                template: "<div class=\"jazz-accordion {{ showBorder && 'jazz-accordion--bordered' }} {{ multiSelect && 'jazz-accordion-multiselectable' }}\"\n     role=\"region\">\n  <ng-content></ng-content>\n</div>\n"
            },] }
];
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    accordionButtons: [{ type: ContentChildren, args: ['jazzAccordionButtons', { descendants: true, read: ElementRef },] }],
    showBorder: [{ type: Input }],
    multiSelect: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFBRSxLQUFLLEVBRWpCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxJQUFJLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRWxELE1BQU0seUJBQXlCLEdBQWMsSUFBSSxNQUFNLG9CQUFvQixDQUFDO0FBQzVFLE1BQU0sQ0FBQyxNQUFNLG1DQUFtQyxHQUFJLEdBQUcsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRixNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRyxHQUFHLE1BQU0sK0JBQStCLENBQUM7QUFFN0YsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUM3QyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBT0gsTUFBTSxPQUFPLGtCQUFrQjtJQWM3QjtRQUxBLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFhbkI7O1dBRUc7UUFDSCxjQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNwQixPQUFPLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFBO1FB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LFNBQUMsc0JBQXNCLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7eUJBRTdFLEtBQUs7MEJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLCBJbnB1dCxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3ByZWZpeCBhcyBQUkVGSVh9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge0FSSUFfRVhQQU5ERUR9IGZyb20gJy4uL3V0aWxpdHktZnVuY3Rpb25zJztcblxuY29uc3QgQUNDT1JESU9OX1NFTEVDVE9SID0gYC4ke1BSRUZJWH0tYWNjb3JkaW9uYDtcblxuY29uc3QgQUNDT1JESU9OX0JVVFRPTl9TRUxFQ1RPUiAgICAgICAgICAgID0gYC4ke1BSRUZJWH0tYWNjb3JkaW9uX19idXR0b25gO1xuZXhwb3J0IGNvbnN0IEFDQ09SRElPTl9NVUxUSVNFTEVDVEFCTEVfQ0xBU1NOQU1FICA9IGAke1BSRUZJWH0tYWNjb3JkaW9uLW11bHRpc2VsZWN0YWJsZWA7XG5leHBvcnQgY29uc3QgQUNDT1JESU9OX0NPTlRFTlRfRVhQQU5ERURfQ0xBU1NOQU1FID0gYCR7UFJFRklYfS1hY2NvcmRpb25fX2NvbnRlbnQtLWV4cGFuZGVkYDtcblxuZXhwb3J0IGNvbnN0IEFSSUFfQ09OVFJPTFMgPSAnYXJpYS1jb250cm9scyc7XG5leHBvcnQgY29uc3QgSElEREVOID0gJ2hpZGRlbic7XG5cbi8qKlxuICogQW4gQWNjb3JkaW9uIGlzIGEgdmVydGljYWxseSBzdGFja2VkIHNldCBvZiBoZWFkaW5ncyB0aGF0IGVhY2ggY29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiBhbiBhc3NvY2lhdGVkIGNvbnRlbnQgc2VjdGlvbi5cbiAqXG4gKiA8ZXhhbXBsZS11cmw+aHR0cDovL2xvY2FsaG9zdDo0MjAwL2phenotZGVzaWduLXN5c3RlbS8jL2FjY29yZGlvbi9hY2NvcmRpb25FeGFtcGxlPC9leGFtcGxlLXVybD5cbiAqIEBleGFtcGxlXG4gYGBgXG4gPGphenotYWNjb3JkaW9uPlxuIDxoMj5cbiA8YnV0dG9uICNqYXp6QWNjb3JkaW9uQnV0dG9ucyBjbGFzcz1cImphenotYWNjb3JkaW9uX19idXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29udGVudDFcIj5cbiBTZWQgcG9ydHRpdG9yIGxlY3R1cyBuaWJoP1xuIDwvYnV0dG9uPlxuIDwvaDI+XG4gPGRpdiBjbGFzcz1cImphenotYWNjb3JkaW9uX19jb250ZW50XCIgaWQ9XCJjb250ZW50MVwiIGhpZGRlbj5cbiBDdXJhYml0dXIgYXJjdSBlcmF0LCBhY2N1bXNhbiBpZCBpbXBlcmRpZXQgZXQsIHBvcnR0aXRvciBhdCBzZW0uIFByYWVzZW50IHNhcGllbiBtYXNzYSwgY29udmFsbGlzIGFcbiBwZWxsZW50ZXNxdWUgbmVjLCBlZ2VzdGFzIG5vbiBuaXNpLlxuIDwvZGl2PlxuIDxoMj5cbiA8YnV0dG9uICNqYXp6QWNjb3JkaW9uQnV0dG9ucyBjbGFzcz1cImphenotYWNjb3JkaW9uX19idXR0b25cIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJjb250ZW50MlwiPlxuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgdWx0cmljaWVzIGxpZ3VsYSBzZWQgbWFnbmEgZGljdHVtIHBvcnRhP1xuIDwvYnV0dG9uPlxuIDwvaDI+XG4gPGRpdiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgY2xhc3M9XCJqYXp6LWFjY29yZGlvbl9fY29udGVudFwiIGlkPVwiY29udGVudDJcIj5cbiBRdWlzcXVlIHZlbGl0IG5pc2ksIHByZXRpdW0gdXQgbGFjaW5pYSBpbiwgZWxlbWVudHVtIGlkIGVuaW0uIEN1cmFiaXR1ciBhcmN1IGVyYXQsIGFjY3Vtc2FuIGlkIGltcGVyZGlldFxuIGV0LCBwb3J0dGl0b3IgYXQgc2VtLiBDdXJhYml0dXIgbm9uIG51bGxhIHNpdCBhbWV0IG5pc2wgdGVtcHVzIGNvbnZhbGxpcyBxdWlzIGFjIGxlY3R1cy5cbiBDcmFzIHVsdHJpY2llcyBsaWd1bGEgc2VkIG1hZ25hIGRpY3R1bSBwb3J0YS5cbiA8L2Rpdj5cbiA8L2phenotYWNjb3JkaW9uPlxuIGBgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnamF6ei1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICAvKipcbiAgICogVGhpcyBpcyBhbiBhcnJheSBvZiBidXR0b25zIHdpdGggdGhlIHNlbGVjdG9yIFwiamF6ekFjY29yZGlvbkJ1dHRvbnNcIi4gQWNjb3JkaW9uIGJ1dHRvbnMgYXJlXG4gICAqIGJ1dHRvbnMgd2hpY2ggYXJlIHNwZWNpZmljYWxseSB1c2VkIHRvIGV4cGFuZC9jb2xsYXBzZSBhY2NvcmRpb24gcGFuZWwgY29udGVudC4gVGhlIGNvbnRlbnQgdG8gZXhwYW5kIG9yIGNvbGxhcHNlZFxuICAgKiBpcyBpZGVudGlmaWVkIGJ5IHRoZSBidXR0b24ncyBhcmlhLWNvbnRyb2xzIHZhbHVlIHdoaWNoIHNob3VsZCBtYXRjaCB0aGUgaWQgZm9yIHRoYXQgY29udGFpbmVyIChkaXYpLlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbignamF6ekFjY29yZGlvbkJ1dHRvbnMnLCB7ZGVzY2VuZGFudHM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWZ9KSBhY2NvcmRpb25CdXR0b25zOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQElucHV0KClcbiAgc2hvd0JvcmRlciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIG11bHRpU2VsZWN0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWR7XG4gICAgdGhpcy5hY2NvcmRpb25CdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxlZ3JlYXRlciBmaWxlXG4gICAqL1xuICBpc0VsZW1lbnQgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbiAgfVxuXG4gIHNlbGVjdCA9IChzZWxlY3Rvcjogc3RyaW5nLCBjb250ZXh0OiBQYXJlbnROb2RlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbnRleHQgfHwgIXRoaXMuaXNFbGVtZW50KGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gd2luZG93LmRvY3VtZW50OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2VsZWN0aW9uKTtcbiAgfVxuXG4gIHNlbGVjdENsb3Nlc3RUbyA9ICh0YXJnZXRTZWxlY3Rvcjogc3RyaW5nLCBjbG9zZXN0VG9TZWxlY3Rvcjogc3RyaW5nLCBjb250ZXh0OiBFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnNlbGVjdCh0YXJnZXRTZWxlY3RvciwgY29udGV4dCk7XG4gICAgcmV0dXJuIGVsZW1lbnRzLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5jbG9zZXN0KGNsb3Nlc3RUb1NlbGVjdG9yKSA9PT0gY29udGV4dCk7XG4gIH1cblxuICBnZXRCdXR0b25NYXRjaGluZ0NvbnRlbnQgPSAoYnV0dG9uOiBIVE1MRWxlbWVudCwgYWNjb3JkaW9uOiBFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hWYWwgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgcmV0dXJuIGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKGAjJHttYXRjaFZhbH1gKTtcbiAgfVxuXG4gIGdldEFjY29yZGlvbkJ1dHRvbnMgPSAoYWNjb3JkaW9uOiBFbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Q2xvc2VzdFRvKEFDQ09SRElPTl9CVVRUT05fU0VMRUNUT1IsIEFDQ09SRElPTl9TRUxFQ1RPUiwgYWNjb3JkaW9uKTtcbiAgfVxuXG4gIGNsb3NlRXhwYW5kZWRDb250ZW50cyA9IChhY2NvcmRpb246IEVsZW1lbnQsIGNsaWNrZWRCdXR0b246IEVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY2NvcmRpb25CdXR0b25zKGFjY29yZGlvbikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uICE9PSBjbGlja2VkQnV0dG9uKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbChidXR0b24sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5nZXRCdXR0b25NYXRjaGluZ0NvbnRlbnQoYnV0dG9uLCBhY2NvcmRpb24pLmNsYXNzTGlzdC5yZW1vdmUoQUNDT1JESU9OX0NPTlRFTlRfRVhQQU5ERURfQ0xBU1NOQU1FKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGNsaWNrIG1ldGhvZCBpcyBhZGRlZCBhcyBhIGNsaWNrIGxpc3RlbmVyIGZvciBhbGwgdGhlIGphenpBY2NvcmRpb25CdXR0b25zIGJ1dHRvbnMuXG4gICAqL1xuICBjbGljayA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYWNjb3JkaW9uRWwgPSBidXR0b24uY2xvc2VzdChBQ0NPUkRJT05fU0VMRUNUT1IpO1xuICAgIGNvbnN0IG11bHRpc2VsZWN0YWJsZSA9IGFjY29yZGlvbkVsLmNsYXNzTGlzdC5jb250YWlucyhBQ0NPUkRJT05fTVVMVElTRUxFQ1RBQkxFX0NMQVNTTkFNRSk7XG5cbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMudG9nZ2xlQ29udHJvbChidXR0b24sIG51bGwpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldEJ1dHRvbk1hdGNoaW5nQ29udGVudChidXR0b24sIGFjY29yZGlvbkVsKTtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgaWYgKCFtdWx0aXNlbGVjdGFibGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZUV4cGFuZGVkQ29udGVudHMoYWNjb3JkaW9uRWwsIGJ1dHRvbik7XG4gICAgICB9XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoQUNDT1JESU9OX0NPTlRFTlRfRVhQQU5ERURfQ0xBU1NOQU1FKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKEFDQ09SRElPTl9DT05URU5UX0VYUEFOREVEX0NMQVNTTkFNRSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b2dnbGVDb250cm9sIG1ldGhvZCBoaWRlcyBhbmQgc2hvd3MgdGhlIGNvbnRlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBidXR0b24uXG4gICAqL1xuICB0b2dnbGVDb250cm9sID0gKHRhcmdldDogRWxlbWVudCwgZXhwYW5kZWQ/OiBib29sZWFuKTogYW55ID0+IHtcblxuICAgIGxldCBzYWZlRXhwYW5kZWQgPSBleHBhbmRlZDtcblxuICAgIGlmICh0eXBlb2Ygc2FmZUV4cGFuZGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIC8vIGludmVydCB0aGUgZXhpc3RpbmcgYnV0dG9uIHZhbHVlXG4gICAgICBzYWZlRXhwYW5kZWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFSSUFfRVhQQU5ERUQpID09PSAnZmFsc2UnO1xuICAgIH1cblxuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRCwgc2FmZUV4cGFuZGVkLnRvU3RyaW5nKCkpO1xuXG4gICAgY29uc3QgY29udHJvbGxlZEVsZW1lbnRJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVJJQV9DT05UUk9MUyk7XG4gICAgY29uc3QgY29udHJvbGxlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250cm9sbGVkRWxlbWVudElkKTtcbiAgICBpZiAoIWNvbnRyb2xsZWRFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGFyaWEtY29udHJvbHMgaXMgbm90IHByb3Blcmx5IGNvbmZpZ3VyZWQ6ICR7Y29udHJvbGxlZEVsZW1lbnRJZH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2FmZUV4cGFuZGVkO1xuICB9XG59XG4iXX0=