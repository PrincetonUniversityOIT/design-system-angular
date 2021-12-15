import { AfterContentInit, ElementRef, OnInit, QueryList } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare const ACCORDION_MULTISELECTABLE_CLASSNAME: string;
export declare const ACCORDION_CONTENT_EXPANDED_CLASSNAME: string;
export declare const ARIA_CONTROLS = "aria-controls";
export declare const HIDDEN = "hidden";
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
export declare class AccordionComponent implements OnInit, AfterContentInit {
    /**
     * This is an array of buttons with the selector "jazzAccordionButtons". Accordion buttons are
     * buttons which are specifically used to expand/collapse accordion panel content. The content to expand or collapsed
     * is identified by the button's aria-controls value which should match the id for that container (div).
     */
    accordionButtons: QueryList<ElementRef>;
    showBorder: boolean;
    multiSelect: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    /**
     * Delegreater file
     */
    isElement: (value: any) => boolean;
    select: (selector: string, context: ParentNode) => any;
    selectClosestTo: (targetSelector: string, closestToSelector: string, context: Element) => any;
    getButtonMatchingContent: (button: HTMLElement, accordion: Element) => Element;
    getAccordionButtons: (accordion: Element) => any;
    closeExpandedContents: (accordion: Element, clickedButton: Element) => any;
    /**
     * This click method is added as a click listener for all the jazzAccordionButtons buttons.
     */
    click: (event: Event) => void;
    /**
     * The toggleControl method hides and shows the content associated with the button.
     */
    toggleControl: (target: Element, expanded?: boolean) => any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AccordionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AccordionComponent, "jazz-accordion", never, { "showBorder": "showBorder"; "multiSelect": "multiSelect"; }, {}, ["accordionButtons"], ["*"]>;
}

//# sourceMappingURL=accordion.component.d.ts.map