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
                template: "<div class=\"jazz-accordion\n     {{ showBorder && 'jazz-accordion--bordered' }}\n     {{ multiSelect && 'jazz-accordion-multiselectable' }}\"\n     role=\"region\">\n  <ng-content></ng-content>\n</div>\n"
            },] }
];
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    accordionButtons: [{ type: ContentChildren, args: ['jazzAccordionButtons', { descendants: true, read: ElementRef },] }],
    showBorder: [{ type: Input }],
    multiSelect: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFBRSxLQUFLLEVBRWpCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxJQUFJLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBYSxrQkFBa0IsR0FBcUIsSUFBSSxNQUFNLFlBQVksQ0FBQztBQUMzRSxNQUFhLHlCQUF5QixHQUFjLElBQUksTUFBTSxvQkFBb0IsQ0FBQztBQUNuRixNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBSSxHQUFHLE1BQU0sNEJBQTRCLENBQUM7QUFDMUYsTUFBTSxDQUFDLE1BQU0sb0NBQW9DLEdBQUcsR0FBRyxNQUFNLCtCQUErQixDQUFDO0FBRTdGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFVLFFBQVEsQ0FBQztBQUV0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFjN0I7UUFMQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBYW5COztXQUVHO1FBQ0gsY0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQTtR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ZSxTQUFDLHNCQUFzQixFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO3lCQUU3RSxLQUFLOzBCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZiwgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtwcmVmaXggYXMgUFJFRklYfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtBUklBX0VYUEFOREVEfSBmcm9tICcuLi91dGlsaXR5LWZ1bmN0aW9ucyc7XG5cbmNvbnN0ICAgICAgICBBQ0NPUkRJT05fU0VMRUNUT1IgICAgICAgICAgICAgICAgICAgPSBgLiR7UFJFRklYfS1hY2NvcmRpb25gO1xuY29uc3QgICAgICAgIEFDQ09SRElPTl9CVVRUT05fU0VMRUNUT1IgICAgICAgICAgICA9IGAuJHtQUkVGSVh9LWFjY29yZGlvbl9fYnV0dG9uYDtcbmV4cG9ydCBjb25zdCBBQ0NPUkRJT05fTVVMVElTRUxFQ1RBQkxFX0NMQVNTTkFNRSAgPSBgJHtQUkVGSVh9LWFjY29yZGlvbi1tdWx0aXNlbGVjdGFibGVgO1xuZXhwb3J0IGNvbnN0IEFDQ09SRElPTl9DT05URU5UX0VYUEFOREVEX0NMQVNTTkFNRSA9IGAke1BSRUZJWH0tYWNjb3JkaW9uX19jb250ZW50LS1leHBhbmRlZGA7XG5cbmV4cG9ydCBjb25zdCBBUklBX0NPTlRST0xTID0gJ2FyaWEtY29udHJvbHMnO1xuZXhwb3J0IGNvbnN0IEhJRERFTiAgICAgICAgPSAnaGlkZGVuJztcblxuLyoqXG4gKiBBbiBBY2NvcmRpb24gaXMgYSB2ZXJ0aWNhbGx5IHN0YWNrZWQgc2V0IG9mIGhlYWRpbmdzIHRoYXQgZWFjaCBjb250cm9sIHRoZSB2aXNpYmlsaXR5IG9mIGFuIGFzc29jaWF0ZWQgY29udGVudCBzZWN0aW9uLlxuICpcbiAqIDxleGFtcGxlLXVybD5odHRwOi8vbG9jYWxob3N0OjQyMDAvamF6ei1kZXNpZ24tc3lzdGVtLyMvYWNjb3JkaW9uL2FjY29yZGlvbkV4YW1wbGU8L2V4YW1wbGUtdXJsPlxuICogQGV4YW1wbGVcbiBgYGBcbiA8amF6ei1hY2NvcmRpb24+XG4gPGgyPlxuIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb250ZW50MVwiPlxuIFNlZCBwb3J0dGl0b3IgbGVjdHVzIG5pYmg/XG4gPC9idXR0b24+XG4gPC9oMj5cbiA8ZGl2IGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2NvbnRlbnRcIiBpZD1cImNvbnRlbnQxXCIgaGlkZGVuPlxuIEN1cmFiaXR1ciBhcmN1IGVyYXQsIGFjY3Vtc2FuIGlkIGltcGVyZGlldCBldCwgcG9ydHRpdG9yIGF0IHNlbS4gUHJhZXNlbnQgc2FwaWVuIG1hc3NhLCBjb252YWxsaXMgYVxuIHBlbGxlbnRlc3F1ZSBuZWMsIGVnZXN0YXMgbm9uIG5pc2kuXG4gPC9kaXY+XG4gPGgyPlxuIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbnRlbnQyXCI+XG4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyB1bHRyaWNpZXMgbGlndWxhIHNlZCBtYWduYSBkaWN0dW0gcG9ydGE/XG4gPC9idXR0b24+XG4gPC9oMj5cbiA8ZGl2IGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBjbGFzcz1cImphenotYWNjb3JkaW9uX19jb250ZW50XCIgaWQ9XCJjb250ZW50MlwiPlxuIFF1aXNxdWUgdmVsaXQgbmlzaSwgcHJldGl1bSB1dCBsYWNpbmlhIGluLCBlbGVtZW50dW0gaWQgZW5pbS4gQ3VyYWJpdHVyIGFyY3UgZXJhdCwgYWNjdW1zYW4gaWQgaW1wZXJkaWV0XG4gZXQsIHBvcnR0aXRvciBhdCBzZW0uIEN1cmFiaXR1ciBub24gbnVsbGEgc2l0IGFtZXQgbmlzbCB0ZW1wdXMgY29udmFsbGlzIHF1aXMgYWMgbGVjdHVzLlxuIENyYXMgdWx0cmljaWVzIGxpZ3VsYSBzZWQgbWFnbmEgZGljdHVtIHBvcnRhLlxuIDwvZGl2PlxuIDwvamF6ei1hY2NvcmRpb24+XG4gYGBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIGJ1dHRvbnMgd2l0aCB0aGUgc2VsZWN0b3IgXCJqYXp6QWNjb3JkaW9uQnV0dG9uc1wiLiBBY2NvcmRpb24gYnV0dG9ucyBhcmVcbiAgICogYnV0dG9ucyB3aGljaCBhcmUgc3BlY2lmaWNhbGx5IHVzZWQgdG8gZXhwYW5kL2NvbGxhcHNlIGFjY29yZGlvbiBwYW5lbCBjb250ZW50LiBUaGUgY29udGVudCB0byBleHBhbmQgb3IgY29sbGFwc2VkXG4gICAqIGlzIGlkZW50aWZpZWQgYnkgdGhlIGJ1dHRvbidzIGFyaWEtY29udHJvbHMgdmFsdWUgd2hpY2ggc2hvdWxkIG1hdGNoIHRoZSBpZCBmb3IgdGhhdCBjb250YWluZXIgKGRpdikuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKCdqYXp6QWNjb3JkaW9uQnV0dG9ucycsIHtkZXNjZW5kYW50czogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZn0pIGFjY29yZGlvbkJ1dHRvbnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBzaG93Qm9yZGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgbXVsdGlTZWxlY3QgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZHtcbiAgICB0aGlzLmFjY29yZGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2spO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGVncmVhdGVyIGZpbGVcbiAgICovXG4gIGlzRWxlbWVudCA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xuICB9XG5cbiAgc2VsZWN0ID0gKHNlbGVjdG9yOiBzdHJpbmcsIGNvbnRleHQ6IFBhcmVudE5vZGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGlmICghY29udGV4dCB8fCAhdGhpcy5pc0VsZW1lbnQoY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSB3aW5kb3cuZG9jdW1lbnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWxlY3Rpb24pO1xuICB9XG5cbiAgc2VsZWN0Q2xvc2VzdFRvID0gKHRhcmdldFNlbGVjdG9yOiBzdHJpbmcsIGNsb3Nlc3RUb1NlbGVjdG9yOiBzdHJpbmcsIGNvbnRleHQ6IEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuc2VsZWN0KHRhcmdldFNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICByZXR1cm4gZWxlbWVudHMuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmNsb3Nlc3QoY2xvc2VzdFRvU2VsZWN0b3IpID09PSBjb250ZXh0KTtcbiAgfVxuXG4gIGdldEJ1dHRvbk1hdGNoaW5nQ29udGVudCA9IChidXR0b246IEhUTUxFbGVtZW50LCBhY2NvcmRpb246IEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaFZhbCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICByZXR1cm4gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IoYCMke21hdGNoVmFsfWApO1xuICB9XG5cbiAgZ2V0QWNjb3JkaW9uQnV0dG9ucyA9IChhY2NvcmRpb246IEVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDbG9zZXN0VG8oQUNDT1JESU9OX0JVVFRPTl9TRUxFQ1RPUiwgQUNDT1JESU9OX1NFTEVDVE9SLCBhY2NvcmRpb24pO1xuICB9XG5cbiAgY2xvc2VFeHBhbmRlZENvbnRlbnRzID0gKGFjY29yZGlvbjogRWxlbWVudCwgY2xpY2tlZEJ1dHRvbjogRWxlbWVudCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldEFjY29yZGlvbkJ1dHRvbnMoYWNjb3JkaW9uKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24gIT09IGNsaWNrZWRCdXR0b24pIHtcbiAgICAgICAgdGhpcy50b2dnbGVDb250cm9sKGJ1dHRvbiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmdldEJ1dHRvbk1hdGNoaW5nQ29udGVudChidXR0b24sIGFjY29yZGlvbikuY2xhc3NMaXN0LnJlbW92ZShBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgY2xpY2sgbWV0aG9kIGlzIGFkZGVkIGFzIGEgY2xpY2sgbGlzdGVuZXIgZm9yIGFsbCB0aGUgamF6ekFjY29yZGlvbkJ1dHRvbnMgYnV0dG9ucy5cbiAgICovXG4gIGNsaWNrID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBhY2NvcmRpb25FbCA9IGJ1dHRvbi5jbG9zZXN0KEFDQ09SRElPTl9TRUxFQ1RPUik7XG4gICAgY29uc3QgbXVsdGlzZWxlY3RhYmxlID0gYWNjb3JkaW9uRWwuY2xhc3NMaXN0LmNvbnRhaW5zKEFDQ09SRElPTl9NVUxUSVNFTEVDVEFCTEVfQ0xBU1NOQU1FKTtcblxuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy50b2dnbGVDb250cm9sKGJ1dHRvbiwgbnVsbCk7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0QnV0dG9uTWF0Y2hpbmdDb250ZW50KGJ1dHRvbiwgYWNjb3JkaW9uRWwpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBpZiAoIW11bHRpc2VsZWN0YWJsZSkge1xuICAgICAgICB0aGlzLmNsb3NlRXhwYW5kZWRDb250ZW50cyhhY2NvcmRpb25FbCwgYnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChBQ0NPUkRJT05fQ09OVEVOVF9FWFBBTkRFRF9DTEFTU05BTUUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoQUNDT1JESU9OX0NPTlRFTlRfRVhQQU5ERURfQ0xBU1NOQU1FKTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvZ2dsZUNvbnRyb2wgbWV0aG9kIGhpZGVzIGFuZCBzaG93cyB0aGUgY29udGVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGJ1dHRvbi5cbiAgICovXG4gIHRvZ2dsZUNvbnRyb2wgPSAodGFyZ2V0OiBFbGVtZW50LCBleHBhbmRlZD86IGJvb2xlYW4pOiBhbnkgPT4ge1xuXG4gICAgbGV0IHNhZmVFeHBhbmRlZCA9IGV4cGFuZGVkO1xuXG4gICAgaWYgKHR5cGVvZiBzYWZlRXhwYW5kZWQgIT09ICdib29sZWFuJykge1xuICAgICAgLy8gaW52ZXJ0IHRoZSBleGlzdGluZyBidXR0b24gdmFsdWVcbiAgICAgIHNhZmVFeHBhbmRlZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRCkgPT09ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShBUklBX0VYUEFOREVELCBzYWZlRXhwYW5kZWQudG9TdHJpbmcoKSk7XG5cbiAgICBjb25zdCBjb250cm9sbGVkRWxlbWVudElkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBUklBX0NPTlRST0xTKTtcbiAgICBjb25zdCBjb250cm9sbGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRyb2xsZWRFbGVtZW50SWQpO1xuICAgIGlmICghY29udHJvbGxlZEVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgYXJpYS1jb250cm9scyBpcyBub3QgcHJvcGVybHkgY29uZmlndXJlZDogJHtjb250cm9sbGVkRWxlbWVudElkfWApO1xuICAgIH1cblxuICAgIHJldHVybiBzYWZlRXhwYW5kZWQ7XG4gIH1cbn1cbiJdfQ==