import { Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
import { prefix as PREFIX } from '../config';
import { ARIA_EXPANDED } from '../utility-functions';
const ACCORDION_SELECTOR = `.${PREFIX}-accordion`;
const MULTISELECTABLE = 'aria-multiselectable';
const ACCORDION_BUTTON_SELECTOR = `.${PREFIX}-accordion__button`;
const ACCORDION_MULTISELECTABLE_CLASSNAME = `${PREFIX}-accordion-multiselectable`;
const ACCORDION_CONTENT_EXPANDED_CLASSNAME = `${PREFIX}-accordion__content--expanded`;
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
                // this.accordionButtons.forEach((other) => {
                //   if (other.nativeElement !== button) {
                //     this.toggleControl(other.nativeElement, false);
                //   }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFBRSxLQUFLLEVBRWpCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxJQUFJLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBRS9DLE1BQU0seUJBQXlCLEdBQWMsSUFBSSxNQUFNLG9CQUFvQixDQUFDO0FBQzVFLE1BQU0sbUNBQW1DLEdBQUksR0FBRyxNQUFNLDRCQUE0QixDQUFDO0FBQ25GLE1BQU0sb0NBQW9DLEdBQUcsR0FBRyxNQUFNLCtCQUErQixDQUFDO0FBRXRGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFjN0I7UUFMQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBYW5COztXQUVHO1FBQ0gsY0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO1FBQ3BF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VCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDRNQUF5QzthQUMxQzs7OzsrQkFPRSxlQUFlLFNBQUMsc0JBQXNCLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7eUJBRTdFLEtBQUs7MEJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLCBJbnB1dCxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3ByZWZpeCBhcyBQUkVGSVh9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge0FSSUFfRVhQQU5ERUR9IGZyb20gJy4uL3V0aWxpdHktZnVuY3Rpb25zJztcblxuY29uc3QgQUNDT1JESU9OX1NFTEVDVE9SID0gYC4ke1BSRUZJWH0tYWNjb3JkaW9uYDtcbmNvbnN0IE1VTFRJU0VMRUNUQUJMRSA9ICdhcmlhLW11bHRpc2VsZWN0YWJsZSc7XG5cbmNvbnN0IEFDQ09SRElPTl9CVVRUT05fU0VMRUNUT1IgICAgICAgICAgICA9IGAuJHtQUkVGSVh9LWFjY29yZGlvbl9fYnV0dG9uYDtcbmNvbnN0IEFDQ09SRElPTl9NVUxUSVNFTEVDVEFCTEVfQ0xBU1NOQU1FICA9IGAke1BSRUZJWH0tYWNjb3JkaW9uLW11bHRpc2VsZWN0YWJsZWA7XG5jb25zdCBBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUgPSBgJHtQUkVGSVh9LWFjY29yZGlvbl9fY29udGVudC0tZXhwYW5kZWRgO1xuXG5leHBvcnQgY29uc3QgQVJJQV9DT05UUk9MUyA9ICdhcmlhLWNvbnRyb2xzJztcbmV4cG9ydCBjb25zdCBISURERU4gPSAnaGlkZGVuJztcblxuLyoqXG4gKiBBbiBBY2NvcmRpb24gaXMgYSB2ZXJ0aWNhbGx5IHN0YWNrZWQgc2V0IG9mIGhlYWRpbmdzIHRoYXQgZWFjaCBjb250cm9sIHRoZSB2aXNpYmlsaXR5IG9mIGFuIGFzc29jaWF0ZWQgY29udGVudCBzZWN0aW9uLlxuICpcbiAqIDxleGFtcGxlLXVybD5odHRwOi8vbG9jYWxob3N0OjQyMDAvamF6ei1kZXNpZ24tc3lzdGVtLyMvYWNjb3JkaW9uL2FjY29yZGlvbkV4YW1wbGU8L2V4YW1wbGUtdXJsPlxuICogQGV4YW1wbGVcbiBgYGBcbiA8amF6ei1hY2NvcmRpb24+XG4gPGgyPlxuIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb250ZW50MVwiPlxuIFNlZCBwb3J0dGl0b3IgbGVjdHVzIG5pYmg/XG4gPC9idXR0b24+XG4gPC9oMj5cbiA8ZGl2IGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2NvbnRlbnRcIiBpZD1cImNvbnRlbnQxXCIgaGlkZGVuPlxuIEN1cmFiaXR1ciBhcmN1IGVyYXQsIGFjY3Vtc2FuIGlkIGltcGVyZGlldCBldCwgcG9ydHRpdG9yIGF0IHNlbS4gUHJhZXNlbnQgc2FwaWVuIG1hc3NhLCBjb252YWxsaXMgYVxuIHBlbGxlbnRlc3F1ZSBuZWMsIGVnZXN0YXMgbm9uIG5pc2kuXG4gPC9kaXY+XG4gPGgyPlxuIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbnRlbnQyXCI+XG4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyB1bHRyaWNpZXMgbGlndWxhIHNlZCBtYWduYSBkaWN0dW0gcG9ydGE/XG4gPC9idXR0b24+XG4gPC9oMj5cbiA8ZGl2IGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBjbGFzcz1cImphenotYWNjb3JkaW9uX19jb250ZW50XCIgaWQ9XCJjb250ZW50MlwiPlxuIFF1aXNxdWUgdmVsaXQgbmlzaSwgcHJldGl1bSB1dCBsYWNpbmlhIGluLCBlbGVtZW50dW0gaWQgZW5pbS4gQ3VyYWJpdHVyIGFyY3UgZXJhdCwgYWNjdW1zYW4gaWQgaW1wZXJkaWV0XG4gZXQsIHBvcnR0aXRvciBhdCBzZW0uIEN1cmFiaXR1ciBub24gbnVsbGEgc2l0IGFtZXQgbmlzbCB0ZW1wdXMgY29udmFsbGlzIHF1aXMgYWMgbGVjdHVzLlxuIENyYXMgdWx0cmljaWVzIGxpZ3VsYSBzZWQgbWFnbmEgZGljdHVtIHBvcnRhLlxuIDwvZGl2PlxuIDwvamF6ei1hY2NvcmRpb24+XG4gYGBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIGJ1dHRvbnMgd2l0aCB0aGUgc2VsZWN0b3IgXCJqYXp6QWNjb3JkaW9uQnV0dG9uc1wiLiBBY2NvcmRpb24gYnV0dG9ucyBhcmVcbiAgICogYnV0dG9ucyB3aGljaCBhcmUgc3BlY2lmaWNhbGx5IHVzZWQgdG8gZXhwYW5kL2NvbGxhcHNlIGFjY29yZGlvbiBwYW5lbCBjb250ZW50LiBUaGUgY29udGVudCB0byBleHBhbmQgb3IgY29sbGFwc2VkXG4gICAqIGlzIGlkZW50aWZpZWQgYnkgdGhlIGJ1dHRvbidzIGFyaWEtY29udHJvbHMgdmFsdWUgd2hpY2ggc2hvdWxkIG1hdGNoIHRoZSBpZCBmb3IgdGhhdCBjb250YWluZXIgKGRpdikuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKCdqYXp6QWNjb3JkaW9uQnV0dG9ucycsIHtkZXNjZW5kYW50czogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZn0pIGFjY29yZGlvbkJ1dHRvbnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBzaG93Qm9yZGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgbXVsdGlTZWxlY3QgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZHtcbiAgICB0aGlzLmFjY29yZGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2spO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGVncmVhdGVyIGZpbGVcbiAgICovXG4gIGlzRWxlbWVudCA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xuICB9XG5cbiAgc2VsZWN0ID0gKHNlbGVjdG9yOiBzdHJpbmcsIGNvbnRleHQ6IFBhcmVudE5vZGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGlmICghY29udGV4dCB8fCAhdGhpcy5pc0VsZW1lbnQoY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSB3aW5kb3cuZG9jdW1lbnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWxlY3Rpb24pO1xuICB9XG5cbiAgc2VsZWN0Q2xvc2VzdFRvID0gKHRhcmdldFNlbGVjdG9yOiBzdHJpbmcsIGNsb3Nlc3RUb1NlbGVjdG9yOiBzdHJpbmcsIGNvbnRleHQ6IEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuc2VsZWN0KHRhcmdldFNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICByZXR1cm4gZWxlbWVudHMuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmNsb3Nlc3QoY2xvc2VzdFRvU2VsZWN0b3IpID09PSBjb250ZXh0KTtcbiAgfVxuXG4gIGdldEJ1dHRvbk1hdGNoaW5nQ29udGVudCA9IChidXR0b246IEhUTUxFbGVtZW50LCBhY2NvcmRpb246IEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaFZhbCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICByZXR1cm4gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IoYCMke21hdGNoVmFsfWApO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uQnV0dG9ucyA9IChhY2NvcmRpb246IEVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDbG9zZXN0VG8oQUNDT1JESU9OX0JVVFRPTl9TRUxFQ1RPUiwgQUNDT1JESU9OX1NFTEVDVE9SLCBhY2NvcmRpb24pO1xuICB9XG5cbiAgY2xvc2VFeHBhbmRlZENvbnRlbnRzID0gKGFjY29yZGlvbjogRWxlbWVudCwgY2xpY2tlZEJ1dHRvbjogRWxlbWVudCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldEFjY29yZGlvbkJ1dHRvbnMoYWNjb3JkaW9uKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24gIT09IGNsaWNrZWRCdXR0b24pIHtcbiAgICAgICAgdGhpcy50b2dnbGVDb250cm9sKGJ1dHRvbiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmdldEJ1dHRvbk1hdGNoaW5nQ29udGVudChidXR0b24sIGFjY29yZGlvbikuY2xhc3NMaXN0LnJlbW92ZShBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgY2xpY2sgbWV0aG9kIGlzIGFkZGVkIGFzIGEgY2xpY2sgbGlzdGVuZXIgZm9yIGFsbCB0aGUgamF6ekFjY29yZGlvbkJ1dHRvbnMgYnV0dG9ucy5cbiAgICovXG4gIGNsaWNrID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBhY2NvcmRpb25FbCA9IGJ1dHRvbi5jbG9zZXN0KEFDQ09SRElPTl9TRUxFQ1RPUik7XG4gICAgY29uc3QgbXVsdGlzZWxlY3RhYmxlID0gYWNjb3JkaW9uRWwuY2xhc3NMaXN0LmNvbnRhaW5zKEFDQ09SRElPTl9NVUxUSVNFTEVDVEFCTEVfQ0xBU1NOQU1FKTtcblxuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy50b2dnbGVDb250cm9sKGJ1dHRvbiwgbnVsbCk7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0QnV0dG9uTWF0Y2hpbmdDb250ZW50KGJ1dHRvbiwgYWNjb3JkaW9uRWwpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBpZiAoIW11bHRpc2VsZWN0YWJsZSkge1xuICAgICAgICB0aGlzLmNsb3NlRXhwYW5kZWRDb250ZW50cyhhY2NvcmRpb25FbCwgYnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUpO1xuICAgICAgLy8gdGhpcy5hY2NvcmRpb25CdXR0b25zLmZvckVhY2goKG90aGVyKSA9PiB7XG4gICAgICAvLyAgIGlmIChvdGhlci5uYXRpdmVFbGVtZW50ICE9PSBidXR0b24pIHtcbiAgICAgIC8vICAgICB0aGlzLnRvZ2dsZUNvbnRyb2wob3RoZXIubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuICAgICAgLy8gICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUpO1xuICAgIH1cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG9nZ2xlQ29udHJvbCBtZXRob2QgaGlkZXMgYW5kIHNob3dzIHRoZSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgYnV0dG9uLlxuICAgKi9cbiAgdG9nZ2xlQ29udHJvbCA9ICh0YXJnZXQ6IEVsZW1lbnQsIGV4cGFuZGVkPzogYm9vbGVhbik6IGFueSA9PiB7XG5cbiAgICBsZXQgc2FmZUV4cGFuZGVkID0gZXhwYW5kZWQ7XG5cbiAgICBpZiAodHlwZW9mIHNhZmVFeHBhbmRlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAvLyBpbnZlcnQgdGhlIGV4aXN0aW5nIGJ1dHRvbiB2YWx1ZVxuICAgICAgc2FmZUV4cGFuZGVkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBUklBX0VYUEFOREVEKSA9PT0gJ2ZhbHNlJztcbiAgICB9XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKEFSSUFfRVhQQU5ERUQsIHNhZmVFeHBhbmRlZC50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50SWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFSSUFfQ09OVFJPTFMpO1xuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udHJvbGxlZEVsZW1lbnRJZCk7XG4gICAgaWYgKCFjb250cm9sbGVkRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcmlhLWNvbnRyb2xzIGlzIG5vdCBwcm9wZXJseSBjb25maWd1cmVkOiAke2NvbnRyb2xsZWRFbGVtZW50SWR9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhZmVFeHBhbmRlZDtcbiAgfVxufVxuIl19