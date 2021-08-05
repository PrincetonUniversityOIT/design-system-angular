import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * The Pager allows users to navigate through a set of items or rows which have been separated into pages.
 *
 * <example-url>http://localhost:4200/#/pager/pagerSimpleExample</example-url>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVzaWduLXN5c3RlbS1hbmd1bGFyL3NyYy9saWIvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEY7Ozs7Ozs7O0dBUUc7QUFNSCxNQUFNLE9BQU8sY0FBYztJQVd6QixZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSHpCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJeEQsQ0FBQztJQUVKLGFBQWE7UUFFWCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRTtZQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzQixRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDYjtpQkFBTSxJQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDcEM7U0FDRjtRQUVELEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO29CQUNqQixvQ0FBb0M7b0JBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2Y7cUJBQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7b0JBQ3pDLHVDQUF1QztvQkFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtxQkFBTSxJQUFJLE9BQU8sS0FBSyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUNuQyxtQ0FBbUM7b0JBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDakM7cUJBQU0sSUFBSSxPQUFPLEtBQUssUUFBUSxHQUFHLENBQUMsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7b0JBQ3RFLHVFQUF1RTtvQkFDdkUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNyQjthQUNGO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckI7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6QixrREFBa0Q7U0FDbkQ7SUFDSCxDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLCt1Q0FBcUM7YUFDdEM7OztZQWZPLGlCQUFpQjs7O3lCQWtCdEIsS0FBSyxTQUFDLFlBQVk7MEJBR2xCLEtBQUssU0FBQyxhQUFhOzBCQUduQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBQYWdlciBhbGxvd3MgdXNlcnMgdG8gbmF2aWdhdGUgdGhyb3VnaCBhIHNldCBvZiBpdGVtcyBvciByb3dzIHdoaWNoIGhhdmUgYmVlbiBzZXBhcmF0ZWQgaW50byBwYWdlcy5cbiAqXG4gKiA8ZXhhbXBsZS11cmw+aHR0cDovL2xvY2FsaG9zdDo0MjAwLyMvcGFnZXIvcGFnZXJTaW1wbGVFeGFtcGxlPC9leGFtcGxlLXVybD5cbiAqIEBleGFtcGxlXG4gIGBgIGBcbiAgPGphenotcGFnZXIgW3RvdGFsUGFnZXNdPVwiMjBcIiBbY3VycmVudFBhZ2VdPVwiNVwiIChwYWdlckNoYW5nZSk9XCJjaGFuZ2VQYWdlKCRldmVudCk7XCI+PC9qYXp6LXBhZ2VyPlxuICAgYGAgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotcGFnZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3RvdGFsUGFnZXMnKVxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xuXG4gIEBJbnB1dCgnY3VycmVudFBhZ2UnKVxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIGl0ZXJhYmxlUGFnZXMoKTogbnVtYmVyW10ge1xuXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gTnVtYmVyKHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IE51bWJlcih0aGlzLmN1cnJlbnRQYWdlKTtcblxuICAgIGNvbnN0IHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IGRlbHRhID0gNDtcbiAgICBsZXQgbWF4UGFnZXMgPSA5O1xuICAgIGxldCB0cnVuY2F0ZSA9IHRydWU7XG4gICAgbGV0IHBhZ2VOdW0gPSAwO1xuXG4gICAgaWYgKHRoaXMudG90YWxQYWdlcyA8IG1heFBhZ2VzKSB7XG4gICAgICBtYXhQYWdlcyA9IHRoaXMudG90YWxQYWdlcztcbiAgICAgIHRydW5jYXRlID0gZmFsc2U7XG4gICAgICBwYWdlTnVtID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgLSBkZWx0YSA8IDApIHtcbiAgICAgICAgcGFnZU51bSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKCAodGhpcy5jdXJyZW50UGFnZSArIGRlbHRhKSA+ICh0aGlzLnRvdGFsUGFnZXMgLSAxKSkge1xuICAgICAgICBwYWdlTnVtID0gdGhpcy50b3RhbFBhZ2VzIC0gbWF4UGFnZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlTnVtID0gdGhpcy5jdXJyZW50UGFnZSAtIGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IHBhZ2VJZHggPSAwOyBwYWdlSWR4IDwgbWF4UGFnZXM7IHBhZ2VJZHgrKykge1xuICAgICAgaWYgKHRydW5jYXRlKSB7XG4gICAgICAgIGlmIChwYWdlSWR4ID09PSAwKSB7XG4gICAgICAgICAgLy8gYWx3YXlzIHNob3cgdGhlIGZpcnN0IHBhZ2UgbnVtYmVyXG4gICAgICAgICAgcGFnZXMucHVzaCgwKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYWdlSWR4ID09PSAxICYmIHBhZ2VOdW0gIT09IDEpIHtcbiAgICAgICAgICAvLyBzaG93ICcuLi4nIGlmIHNlY29uZCBwYWdlIGlzIG5vdCBhIDJcbiAgICAgICAgICBwYWdlcy5wdXNoKC0xKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYWdlSWR4ID09PSBtYXhQYWdlcyAtIDEpIHtcbiAgICAgICAgICAvLyBhbHdheXMgc2hvdyB0aGUgbGFzdCBwYWdlIG51bWJlclxuICAgICAgICAgIHBhZ2VzLnB1c2godGhpcy50b3RhbFBhZ2VzIC0gMSk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZUlkeCA9PT0gbWF4UGFnZXMgLSAyICYmIHBhZ2VOdW0gIT09IHRoaXMudG90YWxQYWdlcyAtIDIpIHtcbiAgICAgICAgICAvLyBzaG93ICcuLi4nIGlmIHRoZXJlIGlzIGEgZ2FwIGJldHdlZW4gbmV4dCB0byBsYXN0IHBhZ2UgYW5kIGxhc3QgcGFnZVxuICAgICAgICAgIHBhZ2VzLnB1c2goLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZ2VzLnB1c2gocGFnZU51bSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2VzLnB1c2gocGFnZU51bSk7XG4gICAgICB9XG4gICAgICBwYWdlTnVtKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCB0byBzZXQgdGhlIG5leHQgcGFnZSBpbiB0aGUgcGFnZXIgYmFzZWQgb24gdGhlIHBhZ2UgdGhhdCB3YXMgY2xpY2tlZC5cbiAgICovXG4gIHNldFBhZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHBhZ2UgPj0gMCAmJiBwYWdlIDw9IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICB0aGlzLnBhZ2VyQ2hhbmdlLmVtaXQocGFnZSk7XG4gICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0UGFnZScsIHBhZ2UsIHRoaXMuY3VycmVudFBhZ2UpO1xuICAgIH1cbiAgfVxufVxuIl19