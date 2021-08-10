import { Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
import { prefix as PREFIX } from '../config';
import { ARIA_EXPANDED } from '../utility-functions';
const ACCORDION_SELECTOR = `.${PREFIX}-accordion`;
const MULTISELECTABLE = 'aria-multiselectable';
export const ARIA_CONTROLS = 'aria-controls';
export const HIDDEN = 'hidden';
/**
 * An Accordion is a vertically stacked set of headings that each control the visibility of an associated content section.
 *
 * <example-url>http://localhost:4200/jazz-design-system/#/accordion/accordionExample</example-url>
 * @example
   `` `
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
   `` `
 */
export class AccordionComponent {
    constructor() {
        this.showBorder = false;
        this.multiSelect = true;
        /**
         * This click method is added as a click listener for all the jazzAccordionButtons buttons.
         */
        this.click = (event) => {
            const button = event.target;
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
            if (safeExpanded) {
                controlledElement.removeAttribute(HIDDEN);
            }
            else {
                controlledElement.setAttribute(HIDDEN, '');
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
                template: "<div class=\"jazz-accordion {{showBorder?'jazz-accordion--bordered':''}}\"\n     [attr.aria-multiselectable]=\"multiSelect ? true : false\"\n     role=\"region\">\n  <ng-content></ng-content>\n</div>\n"
            },] }
];
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    accordionButtons: [{ type: ContentChildren, args: ['jazzAccordionButtons', { descendants: true, read: ElementRef },] }],
    showBorder: [{ type: Input }],
    multiSelect: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFBRSxLQUFLLEVBRWpCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxJQUFJLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBRS9DLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFjN0I7UUFMQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBYXJCOztXQUVHO1FBQ0QsVUFBSyxHQUFHLENBQUMsS0FBWSxFQUFRLEVBQUU7WUFDN0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUM7WUFDM0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssTUFBTSxDQUFDO1lBRTdFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWxELElBQUksUUFBUSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3RDLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxNQUFNLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDaEQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQTtRQUVEOztXQUVHO1FBQ0gsa0JBQWEsR0FBRyxDQUFDLE1BQWUsRUFBRSxRQUFrQixFQUFPLEVBQUU7WUFFM0QsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBRTVCLElBQUksT0FBTyxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxtQ0FBbUM7Z0JBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLE9BQU8sQ0FBQzthQUMvRDtZQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRTVELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLG1CQUFtQixFQUFFLENBQUMsQ0FBQzthQUNyRjtZQUVELElBQUksWUFBWSxFQUFFO2dCQUNoQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsaUJBQWlCLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM1QztZQUVELE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQTtJQTFEZSxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxHQUFHLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIscU5BQXlDO2FBQzFDOzs7OytCQU9FLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQzt5QkFFN0UsS0FBSzswQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsIElucHV0LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cHJlZml4IGFzIFBSRUZJWH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7QVJJQV9FWFBBTkRFRH0gZnJvbSAnLi4vdXRpbGl0eS1mdW5jdGlvbnMnO1xuXG5jb25zdCBBQ0NPUkRJT05fU0VMRUNUT1IgPSBgLiR7UFJFRklYfS1hY2NvcmRpb25gO1xuY29uc3QgTVVMVElTRUxFQ1RBQkxFID0gJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJztcblxuZXhwb3J0IGNvbnN0IEFSSUFfQ09OVFJPTFMgPSAnYXJpYS1jb250cm9scyc7XG5leHBvcnQgY29uc3QgSElEREVOID0gJ2hpZGRlbic7XG5cbi8qKlxuICogQW4gQWNjb3JkaW9uIGlzIGEgdmVydGljYWxseSBzdGFja2VkIHNldCBvZiBoZWFkaW5ncyB0aGF0IGVhY2ggY29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiBhbiBhc3NvY2lhdGVkIGNvbnRlbnQgc2VjdGlvbi5cbiAqXG4gKiA8ZXhhbXBsZS11cmw+aHR0cDovL2xvY2FsaG9zdDo0MjAwL2phenotZGVzaWduLXN5c3RlbS8jL2FjY29yZGlvbi9hY2NvcmRpb25FeGFtcGxlPC9leGFtcGxlLXVybD5cbiAqIEBleGFtcGxlXG4gICBgYCBgXG4gICA8amF6ei1hY2NvcmRpb24+XG4gICAgIDxoMj5cbiAgICAgICA8YnV0dG9uICNqYXp6QWNjb3JkaW9uQnV0dG9ucyBjbGFzcz1cImphenotYWNjb3JkaW9uX19idXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29udGVudDFcIj5cbiAgICAgICAgIFNlZCBwb3J0dGl0b3IgbGVjdHVzIG5pYmg/XG4gICAgICAgICA8L2J1dHRvbj5cbiAgICAgPC9oMj5cbiAgICAgPGRpdiBjbGFzcz1cImphenotYWNjb3JkaW9uX19jb250ZW50XCIgaWQ9XCJjb250ZW50MVwiIGhpZGRlbj5cbiAgICAgICBDdXJhYml0dXIgYXJjdSBlcmF0LCBhY2N1bXNhbiBpZCBpbXBlcmRpZXQgZXQsIHBvcnR0aXRvciBhdCBzZW0uIFByYWVzZW50IHNhcGllbiBtYXNzYSwgY29udmFsbGlzIGFcbiAgICAgICBwZWxsZW50ZXNxdWUgbmVjLCBlZ2VzdGFzIG5vbiBuaXNpLlxuICAgICA8L2Rpdj5cbiAgICAgPGgyPlxuICAgICAgIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbnRlbnQyXCI+XG4gICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIHVsdHJpY2llcyBsaWd1bGEgc2VkIG1hZ25hIGRpY3R1bSBwb3J0YT9cbiAgICAgICA8L2J1dHRvbj5cbiAgICAgPC9oMj5cbiAgICAgPGRpdiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgY2xhc3M9XCJqYXp6LWFjY29yZGlvbl9fY29udGVudFwiIGlkPVwiY29udGVudDJcIj5cbiAgICAgICBRdWlzcXVlIHZlbGl0IG5pc2ksIHByZXRpdW0gdXQgbGFjaW5pYSBpbiwgZWxlbWVudHVtIGlkIGVuaW0uIEN1cmFiaXR1ciBhcmN1IGVyYXQsIGFjY3Vtc2FuIGlkIGltcGVyZGlldFxuICAgICAgIGV0LCBwb3J0dGl0b3IgYXQgc2VtLiBDdXJhYml0dXIgbm9uIG51bGxhIHNpdCBhbWV0IG5pc2wgdGVtcHVzIGNvbnZhbGxpcyBxdWlzIGFjIGxlY3R1cy5cbiAgICAgICBDcmFzIHVsdHJpY2llcyBsaWd1bGEgc2VkIG1hZ25hIGRpY3R1bSBwb3J0YS5cbiAgICAgPC9kaXY+XG4gIDwvamF6ei1hY2NvcmRpb24+XG4gICBgYCBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIGJ1dHRvbnMgd2l0aCB0aGUgc2VsZWN0b3IgXCJqYXp6QWNjb3JkaW9uQnV0dG9uc1wiLiBBY2NvcmRpb24gYnV0dG9ucyBhcmVcbiAgICogYnV0dG9ucyB3aGljaCBhcmUgc3BlY2lmaWNhbGx5IHVzZWQgdG8gZXhwYW5kL2NvbGxhcHNlIGFjY29yZGlvbiBwYW5lbCBjb250ZW50LiBUaGUgY29udGVudCB0byBleHBhbmQgb3IgY29sbGFwc2VkXG4gICAqIGlzIGlkZW50aWZpZWQgYnkgdGhlIGJ1dHRvbidzIGFyaWEtY29udHJvbHMgdmFsdWUgd2hpY2ggc2hvdWxkIG1hdGNoIHRoZSBpZCBmb3IgdGhhdCBjb250YWluZXIgKGRpdikuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKCdqYXp6QWNjb3JkaW9uQnV0dG9ucycsIHtkZXNjZW5kYW50czogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZn0pIGFjY29yZGlvbkJ1dHRvbnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBzaG93Qm9yZGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgbXVsdGlTZWxlY3QgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZHtcbiAgICB0aGlzLmFjY29yZGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2spO1xuICAgIH0pO1xuICB9XG5cbi8qKlxuICogVGhpcyBjbGljayBtZXRob2QgaXMgYWRkZWQgYXMgYSBjbGljayBsaXN0ZW5lciBmb3IgYWxsIHRoZSBqYXp6QWNjb3JkaW9uQnV0dG9ucyBidXR0b25zLlxuICovXG4gIGNsaWNrID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBhY2NvcmRpb25FbCA9IGJ1dHRvbi5jbG9zZXN0KEFDQ09SRElPTl9TRUxFQ1RPUik7XG4gICAgY29uc3QgbXVsdGlzZWxlY3RhYmxlID0gYWNjb3JkaW9uRWwuZ2V0QXR0cmlidXRlKE1VTFRJU0VMRUNUQUJMRSkgPT09ICd0cnVlJztcblxuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy50b2dnbGVDb250cm9sKGJ1dHRvbiwgbnVsbCk7XG5cbiAgICBpZiAoZXhwYW5kZWQgJiYgIW11bHRpc2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5hY2NvcmRpb25CdXR0b25zLmZvckVhY2goKG90aGVyKSA9PiB7XG4gICAgICAgIGlmIChvdGhlci5uYXRpdmVFbGVtZW50ICE9PSBidXR0b24pIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2wob3RoZXIubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvZ2dsZUNvbnRyb2wgbWV0aG9kIGhpZGVzIGFuZCBzaG93cyB0aGUgY29udGVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGJ1dHRvbi5cbiAgICovXG4gIHRvZ2dsZUNvbnRyb2wgPSAodGFyZ2V0OiBFbGVtZW50LCBleHBhbmRlZD86IGJvb2xlYW4pOiBhbnkgPT4ge1xuXG4gICAgbGV0IHNhZmVFeHBhbmRlZCA9IGV4cGFuZGVkO1xuXG4gICAgaWYgKHR5cGVvZiBzYWZlRXhwYW5kZWQgIT09ICdib29sZWFuJykge1xuICAgICAgLy8gaW52ZXJ0IHRoZSBleGlzdGluZyBidXR0b24gdmFsdWVcbiAgICAgIHNhZmVFeHBhbmRlZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRCkgPT09ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShBUklBX0VYUEFOREVELCBzYWZlRXhwYW5kZWQudG9TdHJpbmcoKSk7XG5cbiAgICBjb25zdCBjb250cm9sbGVkRWxlbWVudElkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBUklBX0NPTlRST0xTKTtcbiAgICBjb25zdCBjb250cm9sbGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRyb2xsZWRFbGVtZW50SWQpO1xuICAgIGlmICghY29udHJvbGxlZEVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgYXJpYS1jb250cm9scyBpcyBub3QgcHJvcGVybHkgY29uZmlndXJlZDogJHtjb250cm9sbGVkRWxlbWVudElkfWApO1xuICAgIH1cblxuICAgIGlmIChzYWZlRXhwYW5kZWQpIHtcbiAgICAgIGNvbnRyb2xsZWRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShISURERU4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250cm9sbGVkRWxlbWVudC5zZXRBdHRyaWJ1dGUoSElEREVOLCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhZmVFeHBhbmRlZDtcbiAgfVxufVxuIl19