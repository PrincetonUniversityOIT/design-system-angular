import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * The Pager allows users to navigate through a set of items or rows which have been separated into pages.
 *
 * <example-url>http://localhost:4200/jazz-design-system/#/pager/pagerSimpleExample</example-url>
 * @example
  `` `
  <jazz-pager [totalPages]="20" [currentPage]="5" (pagerChange)="changePage($event);"></jazz-pager>
   `` `
 */
export class PagerComponent {
    constructor(ref) {
        this.ref = ref;
        this.pagerChange = new EventEmitter();
    }
    iterablePages() {
        this.totalPages = Number(this.totalPages);
        this.currentPage = Number(this.currentPage);
        const pages = [];
        const delta = 4;
        let maxPages = 9;
        let truncate = true;
        let pageNum = 0;
        if (this.totalPages < maxPages) {
            maxPages = this.totalPages;
            truncate = false;
            pageNum = 0;
        }
        else {
            if (this.currentPage - delta < 0) {
                pageNum = 0;
            }
            else if ((this.currentPage + delta) > (this.totalPages - 1)) {
                pageNum = this.totalPages - maxPages;
            }
            else {
                pageNum = this.currentPage - delta;
            }
        }
        for (let pageIdx = 0; pageIdx < maxPages; pageIdx++) {
            if (truncate) {
                if (pageIdx === 0) {
                    // always show the first page number
                    pages.push(0);
                }
                else if (pageIdx === 1 && pageNum !== 1) {
                    // show '...' if second page is not a 2
                    pages.push(-1);
                }
                else if (pageIdx === maxPages - 1) {
                    // always show the last page number
                    pages.push(this.totalPages - 1);
                }
                else if (pageIdx === maxPages - 2 && pageNum !== this.totalPages - 2) {
                    // show '...' if there is a gap between next to last page and last page
                    pages.push(-1);
                }
                else {
                    pages.push(pageNum);
                }
            }
            else {
                pages.push(pageNum);
            }
            pageNum++;
        }
        return pages;
    }
    /**
     * This is used to set the next page in the pager based on the page that was clicked.
     */
    setPage(page) {
        if (page >= 0 && page <= this.totalPages) {
            this.currentPage = page;
            this.pagerChange.emit(page);
            this.ref.detectChanges();
            // console.log('setPage', page, this.currentPage);
        }
    }
}
PagerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-pager',
                template: "<nav *ngIf=\"totalPages && currentPage\" class=\"jazz-pager\" role=\"navigation\" aria-label=\"pagination\">\n  <ul>\n    <li>\n      <a *ngIf=\"(currentPage != 1)\" href=\"javascript:void(0);\" (click)=\"setPage(currentPage - 1)\" data-page=\"Previous\"><i class=\"jazz-icon jazz-icon-caret-left\"></i>Previous</a>\n      <span *ngIf=\"(currentPage == 1)\" [attr.aria-disabled]=\"true\" data-page=\"Previous\"><i class=\"jazz-icon jazz-icon-caret-left\"></i>Previous</span>\n    </li>\n    <li *ngFor=\"let page of iterablePages()\" attr.aria-current=\"{{ (currentPage == (page + 1)) ?'page': ''}}\">\n      <a *ngIf=\"page >= 0\" href=\"javascript:void(0);\" (click)=\"setPage(page + 1)\"\n         attr.aria-label=\"Go to {{page + 1}}\"\n         attr.data-page=\"{{page + 1}}\">{{page + 1}}\n      </a>\n      <span *ngIf=\"page < 0\">...</span>\n    </li>\n    <li>\n      <a *ngIf=\"(currentPage != totalPages)\" href=\"javascript:void(0);\" (click)=\"setPage(currentPage+ 1)\" data-page=\"Next\">Next<i class=\"jazz-icon jazz-icon-caret-right\"></i></a>\n      <span *ngIf=\"(currentPage == totalPages)\" [attr.aria-disabled]=\"true\" data-page=\"Next\">Next<i class=\"jazz-icon jazz-icon-caret-right\"></i></span>\n    </li>\n  </ul>\n</nav>\n"
            },] }
];
PagerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PagerComponent.propDecorators = {
    totalPages: [{ type: Input, args: ['totalPages',] }],
    currentPage: [{ type: Input, args: ['currentPage',] }],
    pagerChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEY7Ozs7Ozs7O0dBUUc7QUFNSCxNQUFNLE9BQU8sY0FBYztJQVd6QixZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSHpCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJeEQsQ0FBQztJQUVKLGFBQWE7UUFFWCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRTtZQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzQixRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDYjtpQkFBTSxJQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDcEM7U0FDRjtRQUVELEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO29CQUNqQixvQ0FBb0M7b0JBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2Y7cUJBQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7b0JBQ3pDLHVDQUF1QztvQkFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtxQkFBTSxJQUFJLE9BQU8sS0FBSyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUNuQyxtQ0FBbUM7b0JBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDakM7cUJBQU0sSUFBSSxPQUFPLEtBQUssUUFBUSxHQUFHLENBQUMsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7b0JBQ3RFLHVFQUF1RTtvQkFDdkUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNyQjthQUNGO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckI7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6QixrREFBa0Q7U0FDbkQ7SUFDSCxDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLCt1Q0FBcUM7YUFDdEM7OztZQWZPLGlCQUFpQjs7O3lCQWtCdEIsS0FBSyxTQUFDLFlBQVk7MEJBR2xCLEtBQUssU0FBQyxhQUFhOzBCQUduQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBQYWdlciBhbGxvd3MgdXNlcnMgdG8gbmF2aWdhdGUgdGhyb3VnaCBhIHNldCBvZiBpdGVtcyBvciByb3dzIHdoaWNoIGhhdmUgYmVlbiBzZXBhcmF0ZWQgaW50byBwYWdlcy5cbiAqXG4gKiA8ZXhhbXBsZS11cmw+aHR0cDovL2xvY2FsaG9zdDo0MjAwL2phenotZGVzaWduLXN5c3RlbS8jL3BhZ2VyL3BhZ2VyU2ltcGxlRXhhbXBsZTwvZXhhbXBsZS11cmw+XG4gKiBAZXhhbXBsZVxuICBgYCBgXG4gIDxqYXp6LXBhZ2VyIFt0b3RhbFBhZ2VzXT1cIjIwXCIgW2N1cnJlbnRQYWdlXT1cIjVcIiAocGFnZXJDaGFuZ2UpPVwiY2hhbmdlUGFnZSgkZXZlbnQpO1wiPjwvamF6ei1wYWdlcj5cbiAgIGBgIGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LXBhZ2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2VyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCd0b3RhbFBhZ2VzJylcbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlcjtcblxuICBASW5wdXQoJ2N1cnJlbnRQYWdlJylcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBpdGVyYWJsZVBhZ2VzKCk6IG51bWJlcltdIHtcblxuICAgIHRoaXMudG90YWxQYWdlcyA9IE51bWJlcih0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBOdW1iZXIodGhpcy5jdXJyZW50UGFnZSk7XG5cbiAgICBjb25zdCBwYWdlczogbnVtYmVyW10gPSBbXTtcbiAgICBjb25zdCBkZWx0YSA9IDQ7XG4gICAgbGV0IG1heFBhZ2VzID0gOTtcbiAgICBsZXQgdHJ1bmNhdGUgPSB0cnVlO1xuICAgIGxldCBwYWdlTnVtID0gMDtcblxuICAgIGlmICh0aGlzLnRvdGFsUGFnZXMgPCBtYXhQYWdlcykge1xuICAgICAgbWF4UGFnZXMgPSB0aGlzLnRvdGFsUGFnZXM7XG4gICAgICB0cnVuY2F0ZSA9IGZhbHNlO1xuICAgICAgcGFnZU51bSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIC0gZGVsdGEgPCAwKSB7XG4gICAgICAgIHBhZ2VOdW0gPSAwO1xuICAgICAgfSBlbHNlIGlmICggKHRoaXMuY3VycmVudFBhZ2UgKyBkZWx0YSkgPiAodGhpcy50b3RhbFBhZ2VzIC0gMSkpIHtcbiAgICAgICAgcGFnZU51bSA9IHRoaXMudG90YWxQYWdlcyAtIG1heFBhZ2VzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZU51bSA9IHRoaXMuY3VycmVudFBhZ2UgLSBkZWx0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBwYWdlSWR4ID0gMDsgcGFnZUlkeCA8IG1heFBhZ2VzOyBwYWdlSWR4KyspIHtcbiAgICAgIGlmICh0cnVuY2F0ZSkge1xuICAgICAgICBpZiAocGFnZUlkeCA9PT0gMCkge1xuICAgICAgICAgIC8vIGFsd2F5cyBzaG93IHRoZSBmaXJzdCBwYWdlIG51bWJlclxuICAgICAgICAgIHBhZ2VzLnB1c2goMCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZUlkeCA9PT0gMSAmJiBwYWdlTnVtICE9PSAxKSB7XG4gICAgICAgICAgLy8gc2hvdyAnLi4uJyBpZiBzZWNvbmQgcGFnZSBpcyBub3QgYSAyXG4gICAgICAgICAgcGFnZXMucHVzaCgtMSk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZUlkeCA9PT0gbWF4UGFnZXMgLSAxKSB7XG4gICAgICAgICAgLy8gYWx3YXlzIHNob3cgdGhlIGxhc3QgcGFnZSBudW1iZXJcbiAgICAgICAgICBwYWdlcy5wdXNoKHRoaXMudG90YWxQYWdlcyAtIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VJZHggPT09IG1heFBhZ2VzIC0gMiAmJiBwYWdlTnVtICE9PSB0aGlzLnRvdGFsUGFnZXMgLSAyKSB7XG4gICAgICAgICAgLy8gc2hvdyAnLi4uJyBpZiB0aGVyZSBpcyBhIGdhcCBiZXR3ZWVuIG5leHQgdG8gbGFzdCBwYWdlIGFuZCBsYXN0IHBhZ2VcbiAgICAgICAgICBwYWdlcy5wdXNoKC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdlcy5wdXNoKHBhZ2VOdW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlcy5wdXNoKHBhZ2VOdW0pO1xuICAgICAgfVxuICAgICAgcGFnZU51bSsrO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHVzZWQgdG8gc2V0IHRoZSBuZXh0IHBhZ2UgaW4gdGhlIHBhZ2VyIGJhc2VkIG9uIHRoZSBwYWdlIHRoYXQgd2FzIGNsaWNrZWQuXG4gICAqL1xuICBzZXRQYWdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChwYWdlID49IDAgJiYgcGFnZSA8PSB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgdGhpcy5wYWdlckNoYW5nZS5lbWl0KHBhZ2UpO1xuICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NldFBhZ2UnLCBwYWdlLCB0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==