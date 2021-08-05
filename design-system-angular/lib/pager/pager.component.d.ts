import { ChangeDetectorRef, EventEmitter } from '@angular/core';
/**
 * The Pager allows users to navigate through a set of items or rows which have been separated into pages.
 *
 * <example-url>http://localhost:4200/#/pager/pagerSimpleExample</example-url>
 * @example
  `` `
  <jazz-pager [totalPages]="20" [currentPage]="5" (pagerChange)="changePage($event);"></jazz-pager>
   `` `
 */
import * as ɵngcc0 from '@angular/core';
export declare class PagerComponent {
    private ref;
    totalPages: number;
    currentPage: number;
    pagerChange: EventEmitter<any>;
    constructor(ref: ChangeDetectorRef);
    iterablePages(): number[];
    /**
     * This is used to set the next page in the pager based on the page that was clicked.
     */
    setPage(page: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PagerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PagerComponent, "jazz-pager", never, { "totalPages": "totalPages"; "currentPage": "currentPage"; }, { "pagerChange": "pagerChange"; }, never, never>;
}

//# sourceMappingURL=pager.component.d.ts.map