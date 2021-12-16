import { OnInit, ViewContainerRef } from '@angular/core';
export declare class SearchButtonComponent implements OnInit {
    private viewContainerRef;
    searchButtonTemplate: any;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    onSearchClick(event: any): void;
    onMainMenuSearchIconClick(event: any): void;
    showSearch(expand: any, button: any): void;
}
