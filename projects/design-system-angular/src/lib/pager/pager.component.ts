import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * The Pager allows users to navigate through a set of items or rows which have been separated into pages.
 *
 * @example
  `` `
  <jazz-pager [totalPages]="20" [currentPage]="5" (pagerChange)="changePage($event);"></jazz-pager>
   `` `
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-pager',
  templateUrl: './pager.component.html'
})
export class PagerComponent {

  @Input('totalPages')
  public totalPages: number;

  @Input('currentPage')
  public currentPage: number;

  @Output()
  public pagerChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  iterablePages(): number[] {

    const pages: number[] = [];
    const delta = 4;
    let maxPages = 9;
    let truncate = true;
    let pageNum = 0;

    if (this.totalPages < maxPages) {
      maxPages = this.totalPages;
      truncate = false;
      pageNum = 0;
    } else {
      if (this.currentPage - delta < 0) {
        pageNum = 0;
      } else if (this.currentPage + delta > this.totalPages - 1) {
        pageNum = this.totalPages - maxPages;
      } else {
        pageNum = this.currentPage - delta;
      }
    }

    for (let pageIdx = 0; pageIdx < maxPages; pageIdx++) {
      if (truncate) {
        if (pageIdx === 0) {
          // always show the first page number
          pages.push(0);
        } else if (pageIdx === 1 && pageNum !== 1) {
          // show '...' if second page is not a 2
          pages.push(-1);
        } else if (pageIdx === maxPages - 1) {
          // always show the last page number
          pages.push(this.totalPages - 1);
        } else if (pageIdx === maxPages - 2 && pageNum !== this.totalPages - 2) {
          // show '...' if there is a gap between next to last page and last page
          pages.push(-1);
        } else {
          pages.push(pageNum);
        }
      } else {
        pages.push(pageNum);
      }
      pageNum++;
    }

    return pages;
  }

  /**
   * This is used to set the next page in the pager based on the page that was clicked.
   */
  setPage(page: number): void {
    if (page >= 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.pagerChange.emit(page);
    }
  }
}
