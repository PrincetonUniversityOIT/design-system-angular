import {DataPage} from '../../model/data-page';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'jazz-pager',
  templateUrl: './pager.component.html'
})
export class PagerComponent {

  @Input('dataPage')
  public dataPage: DataPage<any>;

  @Output()
  public pagerChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  iterablePages(): number[] {

    const totalPages: number = this.dataPage.totalPages;
    const currentPage: number = this.dataPage.number;
    const pages: number[] = [];
    const delta = 4;
    let maxPages = 9;
    let truncate = true;
    let pageNum = 0;

    if (totalPages < maxPages) {
      maxPages = totalPages;
      truncate = false;
      pageNum = 0;
    } else {
      if (currentPage - delta < 0) {
        pageNum = 0;
      } else if (currentPage + delta > totalPages - 1) {
        pageNum = totalPages - maxPages;
      } else {
        pageNum = currentPage - delta;
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
          pages.push(totalPages - 1);
        } else if (pageIdx === maxPages - 2 && pageNum !== totalPages - 2) {
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

  setPage(page: number): void {
    if (page >= 0 && page <= this.dataPage.totalPages) {
      this.dataPage.number = page;
      this.pagerChange.emit(page);
    }
  }
}
