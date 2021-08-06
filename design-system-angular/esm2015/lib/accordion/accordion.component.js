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
                template: "<div class=\"jazz-accordion {{showBorder?'jazz-accordion--bordered':''}}\" role=\"region\">\n  <ng-content></ng-content>\n</div>\n"
            },] }
];
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    accordionButtons: [{ type: ContentChildren, args: ['jazzAccordionButtons', { descendants: true, read: ElementRef },] }],
    showBorder: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFBRSxLQUFLLEVBRWpCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxJQUFJLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDO0FBRS9DLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFXN0I7UUFGQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBYXJCOztXQUVHO1FBQ0QsVUFBSyxHQUFHLENBQUMsS0FBWSxFQUFRLEVBQUU7WUFDN0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUM7WUFDM0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssTUFBTSxDQUFDO1lBRTdFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWxELElBQUksUUFBUSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3RDLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxNQUFNLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDaEQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQTtRQUVEOztXQUVHO1FBQ0gsa0JBQWEsR0FBRyxDQUFDLE1BQWUsRUFBRSxRQUFrQixFQUFPLEVBQUU7WUFFM0QsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBRTVCLElBQUksT0FBTyxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxtQ0FBbUM7Z0JBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLE9BQU8sQ0FBQzthQUMvRDtZQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRTVELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLG1CQUFtQixFQUFFLENBQUMsQ0FBQzthQUNyRjtZQUVELElBQUksWUFBWSxFQUFFO2dCQUNoQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsaUJBQWlCLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM1QztZQUVELE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQTtJQTFEZSxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxHQUFHLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsOElBQXlDO2FBQzFDOzs7OytCQU9FLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQzt5QkFFN0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLCBJbnB1dCxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3ByZWZpeCBhcyBQUkVGSVh9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge0FSSUFfRVhQQU5ERUR9IGZyb20gJy4uL3V0aWxpdHktZnVuY3Rpb25zJztcblxuY29uc3QgQUNDT1JESU9OX1NFTEVDVE9SID0gYC4ke1BSRUZJWH0tYWNjb3JkaW9uYDtcbmNvbnN0IE1VTFRJU0VMRUNUQUJMRSA9ICdhcmlhLW11bHRpc2VsZWN0YWJsZSc7XG5cbmV4cG9ydCBjb25zdCBBUklBX0NPTlRST0xTID0gJ2FyaWEtY29udHJvbHMnO1xuZXhwb3J0IGNvbnN0IEhJRERFTiA9ICdoaWRkZW4nO1xuXG4vKipcbiAqIEFuIEFjY29yZGlvbiBpcyBhIHZlcnRpY2FsbHkgc3RhY2tlZCBzZXQgb2YgaGVhZGluZ3MgdGhhdCBlYWNoIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgb2YgYW4gYXNzb2NpYXRlZCBjb250ZW50IHNlY3Rpb24uXG4gKlxuICogPGV4YW1wbGUtdXJsPmh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8jL2FjY29yZGlvbi9hY2NvcmRpb25FeGFtcGxlPC9leGFtcGxlLXVybD5cbiAqIEBleGFtcGxlXG4gICBgYCBgXG4gICA8amF6ei1hY2NvcmRpb24+XG4gICAgIDxoMj5cbiAgICAgICA8YnV0dG9uICNqYXp6QWNjb3JkaW9uQnV0dG9ucyBjbGFzcz1cImphenotYWNjb3JkaW9uX19idXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29udGVudDFcIj5cbiAgICAgICAgIFNlZCBwb3J0dGl0b3IgbGVjdHVzIG5pYmg/XG4gICAgICAgICA8L2J1dHRvbj5cbiAgICAgPC9oMj5cbiAgICAgPGRpdiBjbGFzcz1cImphenotYWNjb3JkaW9uX19jb250ZW50XCIgaWQ9XCJjb250ZW50MVwiIGhpZGRlbj5cbiAgICAgICBDdXJhYml0dXIgYXJjdSBlcmF0LCBhY2N1bXNhbiBpZCBpbXBlcmRpZXQgZXQsIHBvcnR0aXRvciBhdCBzZW0uIFByYWVzZW50IHNhcGllbiBtYXNzYSwgY29udmFsbGlzIGFcbiAgICAgICBwZWxsZW50ZXNxdWUgbmVjLCBlZ2VzdGFzIG5vbiBuaXNpLlxuICAgICA8L2Rpdj5cbiAgICAgPGgyPlxuICAgICAgIDxidXR0b24gI2phenpBY2NvcmRpb25CdXR0b25zIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2J1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbnRlbnQyXCI+XG4gICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIHVsdHJpY2llcyBsaWd1bGEgc2VkIG1hZ25hIGRpY3R1bSBwb3J0YT9cbiAgICAgICA8L2J1dHRvbj5cbiAgICAgPC9oMj5cbiAgICAgPGRpdiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgY2xhc3M9XCJqYXp6LWFjY29yZGlvbl9fY29udGVudFwiIGlkPVwiY29udGVudDJcIj5cbiAgICAgICBRdWlzcXVlIHZlbGl0IG5pc2ksIHByZXRpdW0gdXQgbGFjaW5pYSBpbiwgZWxlbWVudHVtIGlkIGVuaW0uIEN1cmFiaXR1ciBhcmN1IGVyYXQsIGFjY3Vtc2FuIGlkIGltcGVyZGlldFxuICAgICAgIGV0LCBwb3J0dGl0b3IgYXQgc2VtLiBDdXJhYml0dXIgbm9uIG51bGxhIHNpdCBhbWV0IG5pc2wgdGVtcHVzIGNvbnZhbGxpcyBxdWlzIGFjIGxlY3R1cy5cbiAgICAgICBDcmFzIHVsdHJpY2llcyBsaWd1bGEgc2VkIG1hZ25hIGRpY3R1bSBwb3J0YS5cbiAgICAgPC9kaXY+XG4gIDwvamF6ei1hY2NvcmRpb24+XG4gICBgYCBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIGJ1dHRvbnMgd2l0aCB0aGUgc2VsZWN0b3IgXCJqYXp6QWNjb3JkaW9uQnV0dG9uc1wiLiBBY2NvcmRpb24gYnV0dG9ucyBhcmVcbiAgICogYnV0dG9ucyB3aGljaCBhcmUgc3BlY2lmaWNhbGx5IHVzZWQgdG8gZXhwYW5kL2NvbGxhcHNlIGFjY29yZGlvbiBwYW5lbCBjb250ZW50LiBUaGUgY29udGVudCB0byBleHBhbmQgb3IgY29sbGFwc2VkXG4gICAqIGlzIGlkZW50aWZpZWQgYnkgdGhlIGJ1dHRvbidzIGFyaWEtY29udHJvbHMgdmFsdWUgd2hpY2ggc2hvdWxkIG1hdGNoIHRoZSBpZCBmb3IgdGhhdCBjb250YWluZXIgKGRpdikuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKCdqYXp6QWNjb3JkaW9uQnV0dG9ucycsIHtkZXNjZW5kYW50czogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZn0pIGFjY29yZGlvbkJ1dHRvbnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBzaG93Qm9yZGVyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lke1xuICAgIHRoaXMuYWNjb3JkaW9uQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGljayk7XG4gICAgfSk7XG4gIH1cblxuLyoqXG4gKiBUaGlzIGNsaWNrIG1ldGhvZCBpcyBhZGRlZCBhcyBhIGNsaWNrIGxpc3RlbmVyIGZvciBhbGwgdGhlIGphenpBY2NvcmRpb25CdXR0b25zIGJ1dHRvbnMuXG4gKi9cbiAgY2xpY2sgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFjY29yZGlvbkVsID0gYnV0dG9uLmNsb3Nlc3QoQUNDT1JESU9OX1NFTEVDVE9SKTtcbiAgICBjb25zdCBtdWx0aXNlbGVjdGFibGUgPSBhY2NvcmRpb25FbC5nZXRBdHRyaWJ1dGUoTVVMVElTRUxFQ1RBQkxFKSA9PT0gJ3RydWUnO1xuXG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLnRvZ2dsZUNvbnRyb2woYnV0dG9uLCBudWxsKTtcblxuICAgIGlmIChleHBhbmRlZCAmJiAhbXVsdGlzZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmFjY29yZGlvbkJ1dHRvbnMuZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgICAgaWYgKG90aGVyLm5hdGl2ZUVsZW1lbnQgIT09IGJ1dHRvbikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbChvdGhlci5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG9nZ2xlQ29udHJvbCBtZXRob2QgaGlkZXMgYW5kIHNob3dzIHRoZSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgYnV0dG9uLlxuICAgKi9cbiAgdG9nZ2xlQ29udHJvbCA9ICh0YXJnZXQ6IEVsZW1lbnQsIGV4cGFuZGVkPzogYm9vbGVhbik6IGFueSA9PiB7XG5cbiAgICBsZXQgc2FmZUV4cGFuZGVkID0gZXhwYW5kZWQ7XG5cbiAgICBpZiAodHlwZW9mIHNhZmVFeHBhbmRlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAvLyBpbnZlcnQgdGhlIGV4aXN0aW5nIGJ1dHRvbiB2YWx1ZVxuICAgICAgc2FmZUV4cGFuZGVkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBUklBX0VYUEFOREVEKSA9PT0gJ2ZhbHNlJztcbiAgICB9XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKEFSSUFfRVhQQU5ERUQsIHNhZmVFeHBhbmRlZC50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50SWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFSSUFfQ09OVFJPTFMpO1xuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udHJvbGxlZEVsZW1lbnRJZCk7XG4gICAgaWYgKCFjb250cm9sbGVkRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcmlhLWNvbnRyb2xzIGlzIG5vdCBwcm9wZXJseSBjb25maWd1cmVkOiAke2NvbnRyb2xsZWRFbGVtZW50SWR9YCk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVFeHBhbmRlZCkge1xuICAgICAgY29udHJvbGxlZEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKEhJRERFTik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xsZWRFbGVtZW50LnNldEF0dHJpYnV0ZShISURERU4sICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2FmZUV4cGFuZGVkO1xuICB9XG59XG4iXX0=