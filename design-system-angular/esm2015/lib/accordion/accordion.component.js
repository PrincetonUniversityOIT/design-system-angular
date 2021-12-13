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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFBRSxLQUFLLEVBRWpCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxJQUFJLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRWxELE1BQU0seUJBQXlCLEdBQWMsSUFBSSxNQUFNLG9CQUFvQixDQUFDO0FBQzVFLE1BQU0sQ0FBQyxNQUFNLG1DQUFtQyxHQUFJLEdBQUcsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRixNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRyxHQUFHLE1BQU0sK0JBQStCLENBQUM7QUFFN0YsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUM3QyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBT0gsTUFBTSxPQUFPLGtCQUFrQjtJQWM3QjtRQUxBLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFhbkI7O1dBRUc7UUFDSCxjQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNwQixPQUFPLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFBO1FB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OUMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNE1BQXlDO2FBQzFDOzs7OytCQU9FLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQzt5QkFFN0UsS0FBSzswQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsIElucHV0LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cHJlZml4IGFzIFBSRUZJWH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7QVJJQV9FWFBBTkRFRH0gZnJvbSAnLi4vdXRpbGl0eS1mdW5jdGlvbnMnO1xuXG5jb25zdCBBQ0NPUkRJT05fU0VMRUNUT1IgPSBgLiR7UFJFRklYfS1hY2NvcmRpb25gO1xuXG5jb25zdCBBQ0NPUkRJT05fQlVUVE9OX1NFTEVDVE9SICAgICAgICAgICAgPSBgLiR7UFJFRklYfS1hY2NvcmRpb25fX2J1dHRvbmA7XG5leHBvcnQgY29uc3QgQUNDT1JESU9OX01VTFRJU0VMRUNUQUJMRV9DTEFTU05BTUUgID0gYCR7UFJFRklYfS1hY2NvcmRpb24tbXVsdGlzZWxlY3RhYmxlYDtcbmV4cG9ydCBjb25zdCBBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUgPSBgJHtQUkVGSVh9LWFjY29yZGlvbl9fY29udGVudC0tZXhwYW5kZWRgO1xuXG5leHBvcnQgY29uc3QgQVJJQV9DT05UUk9MUyA9ICdhcmlhLWNvbnRyb2xzJztcbmV4cG9ydCBjb25zdCBISURERU4gPSAnaGlkZGVuJztcblxuLyoqXG4gKiBBbiBBY2NvcmRpb24gaXMgYSB2ZXJ0aWNhbGx5IHN0YWNrZWQgc2V0IG9mIGhlYWRpbmdzIHRoYXQgZWFjaCBjb250cm9sIHRoZSB2aXNpYmlsaXR5IG9mIGFuIGFzc29jaWF0ZWQgY29udGVudCBzZWN0aW9uLlxuICpcbiAqIDxleGFtcGxlLXVybD5odHRwOi8vbG9jYWxob3N0OjQyMDAvamF6ei1kZXNpZ24tc3lzdGVtLyMvYWNjb3JkaW9uL2FjY29yZGlvbkV4YW1wbGU8L2V4YW1wbGUtdXJsPlxuICogQGV4YW1wbGVcbiBgYGBcbiA8amF6ei1hY2NvcmRpb24+XG4gPGgyPlxuIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb250ZW50MVwiPlxuIFNlZCBwb3J0dGl0b3IgbGVjdHVzIG5pYmg/XG4gPC9idXR0b24+XG4gPC9oMj5cbiA8ZGl2IGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2NvbnRlbnRcIiBpZD1cImNvbnRlbnQxXCIgaGlkZGVuPlxuIEN1cmFiaXR1ciBhcmN1IGVyYXQsIGFjY3Vtc2FuIGlkIGltcGVyZGlldCBldCwgcG9ydHRpdG9yIGF0IHNlbS4gUHJhZXNlbnQgc2FwaWVuIG1hc3NhLCBjb252YWxsaXMgYVxuIHBlbGxlbnRlc3F1ZSBuZWMsIGVnZXN0YXMgbm9uIG5pc2kuXG4gPC9kaXY+XG4gPGgyPlxuIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbnRlbnQyXCI+XG4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyB1bHRyaWNpZXMgbGlndWxhIHNlZCBtYWduYSBkaWN0dW0gcG9ydGE/XG4gPC9idXR0b24+XG4gPC9oMj5cbiA8ZGl2IGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBjbGFzcz1cImphenotYWNjb3JkaW9uX19jb250ZW50XCIgaWQ9XCJjb250ZW50MlwiPlxuIFF1aXNxdWUgdmVsaXQgbmlzaSwgcHJldGl1bSB1dCBsYWNpbmlhIGluLCBlbGVtZW50dW0gaWQgZW5pbS4gQ3VyYWJpdHVyIGFyY3UgZXJhdCwgYWNjdW1zYW4gaWQgaW1wZXJkaWV0XG4gZXQsIHBvcnR0aXRvciBhdCBzZW0uIEN1cmFiaXR1ciBub24gbnVsbGEgc2l0IGFtZXQgbmlzbCB0ZW1wdXMgY29udmFsbGlzIHF1aXMgYWMgbGVjdHVzLlxuIENyYXMgdWx0cmljaWVzIGxpZ3VsYSBzZWQgbWFnbmEgZGljdHVtIHBvcnRhLlxuIDwvZGl2PlxuIDwvamF6ei1hY2NvcmRpb24+XG4gYGBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIGJ1dHRvbnMgd2l0aCB0aGUgc2VsZWN0b3IgXCJqYXp6QWNjb3JkaW9uQnV0dG9uc1wiLiBBY2NvcmRpb24gYnV0dG9ucyBhcmVcbiAgICogYnV0dG9ucyB3aGljaCBhcmUgc3BlY2lmaWNhbGx5IHVzZWQgdG8gZXhwYW5kL2NvbGxhcHNlIGFjY29yZGlvbiBwYW5lbCBjb250ZW50LiBUaGUgY29udGVudCB0byBleHBhbmQgb3IgY29sbGFwc2VkXG4gICAqIGlzIGlkZW50aWZpZWQgYnkgdGhlIGJ1dHRvbidzIGFyaWEtY29udHJvbHMgdmFsdWUgd2hpY2ggc2hvdWxkIG1hdGNoIHRoZSBpZCBmb3IgdGhhdCBjb250YWluZXIgKGRpdikuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKCdqYXp6QWNjb3JkaW9uQnV0dG9ucycsIHtkZXNjZW5kYW50czogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZn0pIGFjY29yZGlvbkJ1dHRvbnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBzaG93Qm9yZGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgbXVsdGlTZWxlY3QgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZHtcbiAgICB0aGlzLmFjY29yZGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2spO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGVncmVhdGVyIGZpbGVcbiAgICovXG4gIGlzRWxlbWVudCA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xuICB9XG5cbiAgc2VsZWN0ID0gKHNlbGVjdG9yOiBzdHJpbmcsIGNvbnRleHQ6IFBhcmVudE5vZGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGlmICghY29udGV4dCB8fCAhdGhpcy5pc0VsZW1lbnQoY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSB3aW5kb3cuZG9jdW1lbnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWxlY3Rpb24pO1xuICB9XG5cbiAgc2VsZWN0Q2xvc2VzdFRvID0gKHRhcmdldFNlbGVjdG9yOiBzdHJpbmcsIGNsb3Nlc3RUb1NlbGVjdG9yOiBzdHJpbmcsIGNvbnRleHQ6IEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuc2VsZWN0KHRhcmdldFNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICByZXR1cm4gZWxlbWVudHMuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmNsb3Nlc3QoY2xvc2VzdFRvU2VsZWN0b3IpID09PSBjb250ZXh0KTtcbiAgfVxuXG4gIGdldEJ1dHRvbk1hdGNoaW5nQ29udGVudCA9IChidXR0b246IEhUTUxFbGVtZW50LCBhY2NvcmRpb246IEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaFZhbCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICByZXR1cm4gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IoYCMke21hdGNoVmFsfWApO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uQnV0dG9ucyA9IChhY2NvcmRpb246IEVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDbG9zZXN0VG8oQUNDT1JESU9OX0JVVFRPTl9TRUxFQ1RPUiwgQUNDT1JESU9OX1NFTEVDVE9SLCBhY2NvcmRpb24pO1xuICB9XG5cbiAgY2xvc2VFeHBhbmRlZENvbnRlbnRzID0gKGFjY29yZGlvbjogRWxlbWVudCwgY2xpY2tlZEJ1dHRvbjogRWxlbWVudCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldEFjY29yZGlvbkJ1dHRvbnMoYWNjb3JkaW9uKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24gIT09IGNsaWNrZWRCdXR0b24pIHtcbiAgICAgICAgdGhpcy50b2dnbGVDb250cm9sKGJ1dHRvbiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmdldEJ1dHRvbk1hdGNoaW5nQ29udGVudChidXR0b24sIGFjY29yZGlvbikuY2xhc3NMaXN0LnJlbW92ZShBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgY2xpY2sgbWV0aG9kIGlzIGFkZGVkIGFzIGEgY2xpY2sgbGlzdGVuZXIgZm9yIGFsbCB0aGUgamF6ekFjY29yZGlvbkJ1dHRvbnMgYnV0dG9ucy5cbiAgICovXG4gIGNsaWNrID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBhY2NvcmRpb25FbCA9IGJ1dHRvbi5jbG9zZXN0KEFDQ09SRElPTl9TRUxFQ1RPUik7XG4gICAgY29uc3QgbXVsdGlzZWxlY3RhYmxlID0gYWNjb3JkaW9uRWwuY2xhc3NMaXN0LmNvbnRhaW5zKEFDQ09SRElPTl9NVUxUSVNFTEVDVEFCTEVfQ0xBU1NOQU1FKTtcblxuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy50b2dnbGVDb250cm9sKGJ1dHRvbiwgbnVsbCk7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0QnV0dG9uTWF0Y2hpbmdDb250ZW50KGJ1dHRvbiwgYWNjb3JkaW9uRWwpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBpZiAoIW11bHRpc2VsZWN0YWJsZSkge1xuICAgICAgICB0aGlzLmNsb3NlRXhwYW5kZWRDb250ZW50cyhhY2NvcmRpb25FbCwgYnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUpO1xuICAgICAgLy8gdGhpcy5hY2NvcmRpb25CdXR0b25zLmZvckVhY2goKG90aGVyKSA9PiB7XG4gICAgICAvLyAgIGlmIChvdGhlci5uYXRpdmVFbGVtZW50ICE9PSBidXR0b24pIHtcbiAgICAgIC8vICAgICB0aGlzLnRvZ2dsZUNvbnRyb2wob3RoZXIubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuICAgICAgLy8gICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUpO1xuICAgIH1cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG9nZ2xlQ29udHJvbCBtZXRob2QgaGlkZXMgYW5kIHNob3dzIHRoZSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgYnV0dG9uLlxuICAgKi9cbiAgdG9nZ2xlQ29udHJvbCA9ICh0YXJnZXQ6IEVsZW1lbnQsIGV4cGFuZGVkPzogYm9vbGVhbik6IGFueSA9PiB7XG5cbiAgICBsZXQgc2FmZUV4cGFuZGVkID0gZXhwYW5kZWQ7XG5cbiAgICBpZiAodHlwZW9mIHNhZmVFeHBhbmRlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAvLyBpbnZlcnQgdGhlIGV4aXN0aW5nIGJ1dHRvbiB2YWx1ZVxuICAgICAgc2FmZUV4cGFuZGVkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBUklBX0VYUEFOREVEKSA9PT0gJ2ZhbHNlJztcbiAgICB9XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKEFSSUFfRVhQQU5ERUQsIHNhZmVFeHBhbmRlZC50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50SWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFSSUFfQ09OVFJPTFMpO1xuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udHJvbGxlZEVsZW1lbnRJZCk7XG4gICAgaWYgKCFjb250cm9sbGVkRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcmlhLWNvbnRyb2xzIGlzIG5vdCBwcm9wZXJseSBjb25maWd1cmVkOiAke2NvbnRyb2xsZWRFbGVtZW50SWR9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhZmVFeHBhbmRlZDtcbiAgfVxufVxuIl19