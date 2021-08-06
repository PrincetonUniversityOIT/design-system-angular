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
 * <example-url>http://localhost:4200/#/accordion/accordionExample</example-url>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFBRSxLQUFLLEVBRWpCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxJQUFJLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBRS9DLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFjN0I7UUFMQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBYXJCOztXQUVHO1FBQ0QsVUFBSyxHQUFHLENBQUMsS0FBWSxFQUFRLEVBQUU7WUFDN0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUM7WUFDM0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssTUFBTSxDQUFDO1lBRTdFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWxELElBQUksUUFBUSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3RDLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxNQUFNLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDaEQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQTtRQUVEOztXQUVHO1FBQ0gsa0JBQWEsR0FBRyxDQUFDLE1BQWUsRUFBRSxRQUFrQixFQUFPLEVBQUU7WUFFM0QsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBRTVCLElBQUksT0FBTyxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxtQ0FBbUM7Z0JBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLE9BQU8sQ0FBQzthQUMvRDtZQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRTVELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLG1CQUFtQixFQUFFLENBQUMsQ0FBQzthQUNyRjtZQUVELElBQUksWUFBWSxFQUFFO2dCQUNoQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsaUJBQWlCLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM1QztZQUVELE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQTtJQTFEZSxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxHQUFHLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIscU5BQXlDO2FBQzFDOzs7OytCQU9FLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQzt5QkFFN0UsS0FBSzswQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsIElucHV0LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cHJlZml4IGFzIFBSRUZJWH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7QVJJQV9FWFBBTkRFRH0gZnJvbSAnLi4vdXRpbGl0eS1mdW5jdGlvbnMnO1xuXG5jb25zdCBBQ0NPUkRJT05fU0VMRUNUT1IgPSBgLiR7UFJFRklYfS1hY2NvcmRpb25gO1xuY29uc3QgTVVMVElTRUxFQ1RBQkxFID0gJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJztcblxuZXhwb3J0IGNvbnN0IEFSSUFfQ09OVFJPTFMgPSAnYXJpYS1jb250cm9scyc7XG5leHBvcnQgY29uc3QgSElEREVOID0gJ2hpZGRlbic7XG5cbi8qKlxuICogQW4gQWNjb3JkaW9uIGlzIGEgdmVydGljYWxseSBzdGFja2VkIHNldCBvZiBoZWFkaW5ncyB0aGF0IGVhY2ggY29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiBhbiBhc3NvY2lhdGVkIGNvbnRlbnQgc2VjdGlvbi5cbiAqXG4gKiA8ZXhhbXBsZS11cmw+aHR0cDovL2xvY2FsaG9zdDo0MjAwLyMvYWNjb3JkaW9uL2FjY29yZGlvbkV4YW1wbGU8L2V4YW1wbGUtdXJsPlxuICogQGV4YW1wbGVcbiAgIGBgIGBcbiAgIDxqYXp6LWFjY29yZGlvbj5cbiAgICAgPGgyPlxuICAgICAgIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb250ZW50MVwiPlxuICAgICAgICAgU2VkIHBvcnR0aXRvciBsZWN0dXMgbmliaD9cbiAgICAgICAgIDwvYnV0dG9uPlxuICAgICA8L2gyPlxuICAgICA8ZGl2IGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2NvbnRlbnRcIiBpZD1cImNvbnRlbnQxXCIgaGlkZGVuPlxuICAgICAgIEN1cmFiaXR1ciBhcmN1IGVyYXQsIGFjY3Vtc2FuIGlkIGltcGVyZGlldCBldCwgcG9ydHRpdG9yIGF0IHNlbS4gUHJhZXNlbnQgc2FwaWVuIG1hc3NhLCBjb252YWxsaXMgYVxuICAgICAgIHBlbGxlbnRlc3F1ZSBuZWMsIGVnZXN0YXMgbm9uIG5pc2kuXG4gICAgIDwvZGl2PlxuICAgICA8aDI+XG4gICAgICAgPGJ1dHRvbiAjamF6ekFjY29yZGlvbkJ1dHRvbnMgY2xhc3M9XCJqYXp6LWFjY29yZGlvbl9fYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiY29udGVudDJcIj5cbiAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgdWx0cmljaWVzIGxpZ3VsYSBzZWQgbWFnbmEgZGljdHVtIHBvcnRhP1xuICAgICAgIDwvYnV0dG9uPlxuICAgICA8L2gyPlxuICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBjbGFzcz1cImphenotYWNjb3JkaW9uX19jb250ZW50XCIgaWQ9XCJjb250ZW50MlwiPlxuICAgICAgIFF1aXNxdWUgdmVsaXQgbmlzaSwgcHJldGl1bSB1dCBsYWNpbmlhIGluLCBlbGVtZW50dW0gaWQgZW5pbS4gQ3VyYWJpdHVyIGFyY3UgZXJhdCwgYWNjdW1zYW4gaWQgaW1wZXJkaWV0XG4gICAgICAgZXQsIHBvcnR0aXRvciBhdCBzZW0uIEN1cmFiaXR1ciBub24gbnVsbGEgc2l0IGFtZXQgbmlzbCB0ZW1wdXMgY29udmFsbGlzIHF1aXMgYWMgbGVjdHVzLlxuICAgICAgIENyYXMgdWx0cmljaWVzIGxpZ3VsYSBzZWQgbWFnbmEgZGljdHVtIHBvcnRhLlxuICAgICA8L2Rpdj5cbiAgPC9qYXp6LWFjY29yZGlvbj5cbiAgIGBgIGBcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgYW4gYXJyYXkgb2YgYnV0dG9ucyB3aXRoIHRoZSBzZWxlY3RvciBcImphenpBY2NvcmRpb25CdXR0b25zXCIuIEFjY29yZGlvbiBidXR0b25zIGFyZVxuICAgKiBidXR0b25zIHdoaWNoIGFyZSBzcGVjaWZpY2FsbHkgdXNlZCB0byBleHBhbmQvY29sbGFwc2UgYWNjb3JkaW9uIHBhbmVsIGNvbnRlbnQuIFRoZSBjb250ZW50IHRvIGV4cGFuZCBvciBjb2xsYXBzZWRcbiAgICogaXMgaWRlbnRpZmllZCBieSB0aGUgYnV0dG9uJ3MgYXJpYS1jb250cm9scyB2YWx1ZSB3aGljaCBzaG91bGQgbWF0Y2ggdGhlIGlkIGZvciB0aGF0IGNvbnRhaW5lciAoZGl2KS5cbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oJ2phenpBY2NvcmRpb25CdXR0b25zJywge2Rlc2NlbmRhbnRzOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmfSkgYWNjb3JkaW9uQnV0dG9uczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBJbnB1dCgpXG4gIHNob3dCb3JkZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBtdWx0aVNlbGVjdCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lke1xuICAgIHRoaXMuYWNjb3JkaW9uQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGljayk7XG4gICAgfSk7XG4gIH1cblxuLyoqXG4gKiBUaGlzIGNsaWNrIG1ldGhvZCBpcyBhZGRlZCBhcyBhIGNsaWNrIGxpc3RlbmVyIGZvciBhbGwgdGhlIGphenpBY2NvcmRpb25CdXR0b25zIGJ1dHRvbnMuXG4gKi9cbiAgY2xpY2sgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFjY29yZGlvbkVsID0gYnV0dG9uLmNsb3Nlc3QoQUNDT1JESU9OX1NFTEVDVE9SKTtcbiAgICBjb25zdCBtdWx0aXNlbGVjdGFibGUgPSBhY2NvcmRpb25FbC5nZXRBdHRyaWJ1dGUoTVVMVElTRUxFQ1RBQkxFKSA9PT0gJ3RydWUnO1xuXG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLnRvZ2dsZUNvbnRyb2woYnV0dG9uLCBudWxsKTtcblxuICAgIGlmIChleHBhbmRlZCAmJiAhbXVsdGlzZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmFjY29yZGlvbkJ1dHRvbnMuZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgICAgaWYgKG90aGVyLm5hdGl2ZUVsZW1lbnQgIT09IGJ1dHRvbikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbChvdGhlci5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG9nZ2xlQ29udHJvbCBtZXRob2QgaGlkZXMgYW5kIHNob3dzIHRoZSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgYnV0dG9uLlxuICAgKi9cbiAgdG9nZ2xlQ29udHJvbCA9ICh0YXJnZXQ6IEVsZW1lbnQsIGV4cGFuZGVkPzogYm9vbGVhbik6IGFueSA9PiB7XG5cbiAgICBsZXQgc2FmZUV4cGFuZGVkID0gZXhwYW5kZWQ7XG5cbiAgICBpZiAodHlwZW9mIHNhZmVFeHBhbmRlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAvLyBpbnZlcnQgdGhlIGV4aXN0aW5nIGJ1dHRvbiB2YWx1ZVxuICAgICAgc2FmZUV4cGFuZGVkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBUklBX0VYUEFOREVEKSA9PT0gJ2ZhbHNlJztcbiAgICB9XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKEFSSUFfRVhQQU5ERUQsIHNhZmVFeHBhbmRlZC50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50SWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFSSUFfQ09OVFJPTFMpO1xuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udHJvbGxlZEVsZW1lbnRJZCk7XG4gICAgaWYgKCFjb250cm9sbGVkRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcmlhLWNvbnRyb2xzIGlzIG5vdCBwcm9wZXJseSBjb25maWd1cmVkOiAke2NvbnRyb2xsZWRFbGVtZW50SWR9YCk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVFeHBhbmRlZCkge1xuICAgICAgY29udHJvbGxlZEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKEhJRERFTik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xsZWRFbGVtZW50LnNldEF0dHJpYnV0ZShISURERU4sICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2FmZUV4cGFuZGVkO1xuICB9XG59XG4iXX0=