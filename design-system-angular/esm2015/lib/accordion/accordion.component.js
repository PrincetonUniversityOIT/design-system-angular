import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
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
                template: "<div class=\"jazz-accordion\" role=\"region\">\n  <ng-content></ng-content>\n</div>\n"
            },] }
];
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    accordionButtons: [{ type: ContentChildren, args: ['jazzAccordionButtons', { descendants: true, read: ElementRef },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0tYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFFVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxNQUFNLFlBQVksQ0FBQztBQUNsRCxNQUFNLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztBQUUvQyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQzdDLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFPSCxNQUFNLE9BQU8sa0JBQWtCO0lBUTdCO1FBV0Y7O1dBRUc7UUFDRCxVQUFLLEdBQUcsQ0FBQyxLQUFZLEVBQVEsRUFBRTtZQUM3QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBcUIsQ0FBQztZQUMzQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkQsTUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxNQUFNLENBQUM7WUFFN0UsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFbEQsSUFBSSxRQUFRLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDdEMsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLE1BQU0sRUFBRTt3QkFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUNoRDtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFBO1FBRUQ7O1dBRUc7UUFDSCxrQkFBYSxHQUFHLENBQUMsTUFBZSxFQUFFLFFBQWtCLEVBQU8sRUFBRTtZQUUzRCxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUM7WUFFNUIsSUFBSSxPQUFPLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLG1DQUFtQztnQkFDbkMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssT0FBTyxDQUFDO2FBQy9EO1lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFNUQsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9ELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO2FBQ3JGO1lBRUQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQyxDQUFBO0lBMURlLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3BDLEdBQUcsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixpR0FBeUM7YUFDMUM7Ozs7K0JBT0UsZUFBZSxTQUFDLHNCQUFzQixFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtwcmVmaXggYXMgUFJFRklYfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtBUklBX0VYUEFOREVEfSBmcm9tICcuLi91dGlsaXR5LWZ1bmN0aW9ucyc7XG5cbmNvbnN0IEFDQ09SRElPTl9TRUxFQ1RPUiA9IGAuJHtQUkVGSVh9LWFjY29yZGlvbmA7XG5jb25zdCBNVUxUSVNFTEVDVEFCTEUgPSAnYXJpYS1tdWx0aXNlbGVjdGFibGUnO1xuXG5leHBvcnQgY29uc3QgQVJJQV9DT05UUk9MUyA9ICdhcmlhLWNvbnRyb2xzJztcbmV4cG9ydCBjb25zdCBISURERU4gPSAnaGlkZGVuJztcblxuLyoqXG4gKiBBbiBBY2NvcmRpb24gaXMgYSB2ZXJ0aWNhbGx5IHN0YWNrZWQgc2V0IG9mIGhlYWRpbmdzIHRoYXQgZWFjaCBjb250cm9sIHRoZSB2aXNpYmlsaXR5IG9mIGFuIGFzc29jaWF0ZWQgY29udGVudCBzZWN0aW9uLlxuICpcbiAqIDxleGFtcGxlLXVybD5odHRwOi8vbG9jYWxob3N0OjQyMDAvIy9hY2NvcmRpb24vYWNjb3JkaW9uRXhhbXBsZTwvZXhhbXBsZS11cmw+XG4gKiBAZXhhbXBsZVxuICAgYGAgYFxuICAgPGphenotYWNjb3JkaW9uPlxuICAgICA8aDI+XG4gICAgICAgPGJ1dHRvbiAjamF6ekFjY29yZGlvbkJ1dHRvbnMgY2xhc3M9XCJqYXp6LWFjY29yZGlvbl9fYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbnRlbnQxXCI+XG4gICAgICAgICBTZWQgcG9ydHRpdG9yIGxlY3R1cyBuaWJoP1xuICAgICAgICAgPC9idXR0b24+XG4gICAgIDwvaDI+XG4gICAgIDxkaXYgY2xhc3M9XCJqYXp6LWFjY29yZGlvbl9fY29udGVudFwiIGlkPVwiY29udGVudDFcIiBoaWRkZW4+XG4gICAgICAgQ3VyYWJpdHVyIGFyY3UgZXJhdCwgYWNjdW1zYW4gaWQgaW1wZXJkaWV0IGV0LCBwb3J0dGl0b3IgYXQgc2VtLiBQcmFlc2VudCBzYXBpZW4gbWFzc2EsIGNvbnZhbGxpcyBhXG4gICAgICAgcGVsbGVudGVzcXVlIG5lYywgZWdlc3RhcyBub24gbmlzaS5cbiAgICAgPC9kaXY+XG4gICAgIDxoMj5cbiAgICAgICA8YnV0dG9uICNqYXp6QWNjb3JkaW9uQnV0dG9ucyBjbGFzcz1cImphenotYWNjb3JkaW9uX19idXR0b25cIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJjb250ZW50MlwiPlxuICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyB1bHRyaWNpZXMgbGlndWxhIHNlZCBtYWduYSBkaWN0dW0gcG9ydGE/XG4gICAgICAgPC9idXR0b24+XG4gICAgIDwvaDI+XG4gICAgIDxkaXYgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGNsYXNzPVwiamF6ei1hY2NvcmRpb25fX2NvbnRlbnRcIiBpZD1cImNvbnRlbnQyXCI+XG4gICAgICAgUXVpc3F1ZSB2ZWxpdCBuaXNpLCBwcmV0aXVtIHV0IGxhY2luaWEgaW4sIGVsZW1lbnR1bSBpZCBlbmltLiBDdXJhYml0dXIgYXJjdSBlcmF0LCBhY2N1bXNhbiBpZCBpbXBlcmRpZXRcbiAgICAgICBldCwgcG9ydHRpdG9yIGF0IHNlbS4gQ3VyYWJpdHVyIG5vbiBudWxsYSBzaXQgYW1ldCBuaXNsIHRlbXB1cyBjb252YWxsaXMgcXVpcyBhYyBsZWN0dXMuXG4gICAgICAgQ3JhcyB1bHRyaWNpZXMgbGlndWxhIHNlZCBtYWduYSBkaWN0dW0gcG9ydGEuXG4gICAgIDwvZGl2PlxuICA8L2phenotYWNjb3JkaW9uPlxuICAgYGAgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnamF6ei1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICAvKipcbiAgICogVGhpcyBpcyBhbiBhcnJheSBvZiBidXR0b25zIHdpdGggdGhlIHNlbGVjdG9yIFwiamF6ekFjY29yZGlvbkJ1dHRvbnNcIi4gQWNjb3JkaW9uIGJ1dHRvbnMgYXJlXG4gICAqIGJ1dHRvbnMgd2hpY2ggYXJlIHNwZWNpZmljYWxseSB1c2VkIHRvIGV4cGFuZC9jb2xsYXBzZSBhY2NvcmRpb24gcGFuZWwgY29udGVudC4gVGhlIGNvbnRlbnQgdG8gZXhwYW5kIG9yIGNvbGxhcHNlZFxuICAgKiBpcyBpZGVudGlmaWVkIGJ5IHRoZSBidXR0b24ncyBhcmlhLWNvbnRyb2xzIHZhbHVlIHdoaWNoIHNob3VsZCBtYXRjaCB0aGUgaWQgZm9yIHRoYXQgY29udGFpbmVyIChkaXYpLlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbignamF6ekFjY29yZGlvbkJ1dHRvbnMnLCB7ZGVzY2VuZGFudHM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWZ9KSBhY2NvcmRpb25CdXR0b25zOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lke1xuICAgIHRoaXMuYWNjb3JkaW9uQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGljayk7XG4gICAgfSk7XG4gIH1cblxuLyoqXG4gKiBUaGlzIGNsaWNrIG1ldGhvZCBpcyBhZGRlZCBhcyBhIGNsaWNrIGxpc3RlbmVyIGZvciBhbGwgdGhlIGphenpBY2NvcmRpb25CdXR0b25zIGJ1dHRvbnMuXG4gKi9cbiAgY2xpY2sgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFjY29yZGlvbkVsID0gYnV0dG9uLmNsb3Nlc3QoQUNDT1JESU9OX1NFTEVDVE9SKTtcbiAgICBjb25zdCBtdWx0aXNlbGVjdGFibGUgPSBhY2NvcmRpb25FbC5nZXRBdHRyaWJ1dGUoTVVMVElTRUxFQ1RBQkxFKSA9PT0gJ3RydWUnO1xuXG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLnRvZ2dsZUNvbnRyb2woYnV0dG9uLCBudWxsKTtcblxuICAgIGlmIChleHBhbmRlZCAmJiAhbXVsdGlzZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmFjY29yZGlvbkJ1dHRvbnMuZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgICAgaWYgKG90aGVyLm5hdGl2ZUVsZW1lbnQgIT09IGJ1dHRvbikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbChvdGhlci5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG9nZ2xlQ29udHJvbCBtZXRob2QgaGlkZXMgYW5kIHNob3dzIHRoZSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgYnV0dG9uLlxuICAgKi9cbiAgdG9nZ2xlQ29udHJvbCA9ICh0YXJnZXQ6IEVsZW1lbnQsIGV4cGFuZGVkPzogYm9vbGVhbik6IGFueSA9PiB7XG5cbiAgICBsZXQgc2FmZUV4cGFuZGVkID0gZXhwYW5kZWQ7XG5cbiAgICBpZiAodHlwZW9mIHNhZmVFeHBhbmRlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAvLyBpbnZlcnQgdGhlIGV4aXN0aW5nIGJ1dHRvbiB2YWx1ZVxuICAgICAgc2FmZUV4cGFuZGVkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBUklBX0VYUEFOREVEKSA9PT0gJ2ZhbHNlJztcbiAgICB9XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKEFSSUFfRVhQQU5ERUQsIHNhZmVFeHBhbmRlZC50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50SWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFSSUFfQ09OVFJPTFMpO1xuICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udHJvbGxlZEVsZW1lbnRJZCk7XG4gICAgaWYgKCFjb250cm9sbGVkRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcmlhLWNvbnRyb2xzIGlzIG5vdCBwcm9wZXJseSBjb25maWd1cmVkOiAke2NvbnRyb2xsZWRFbGVtZW50SWR9YCk7XG4gICAgfVxuXG4gICAgaWYgKHNhZmVFeHBhbmRlZCkge1xuICAgICAgY29udHJvbGxlZEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKEhJRERFTik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xsZWRFbGVtZW50LnNldEF0dHJpYnV0ZShISURERU4sICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2FmZUV4cGFuZGVkO1xuICB9XG59XG4iXX0=