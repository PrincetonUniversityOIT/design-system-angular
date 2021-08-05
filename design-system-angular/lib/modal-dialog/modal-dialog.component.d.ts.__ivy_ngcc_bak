import { ElementRef, EventEmitter, OnInit } from '@angular/core';
/**
 * @example
 `` `
   <jazz-modal-dialog [title]="'Sample Dialog'" [buttonLabel]="'Click Me!'" (buttonClicked)="clicked()">
     This is the content of the dialog
   </jazz-modal-dialog>
 `` `
 */
export declare class ModalDialogComponent implements OnInit {
    buttonLabel: string;
    title: string;
    content: string;
    buttonClicked: EventEmitter<void>;
    modalWrapper: ElementRef;
    constructor();
    ngOnInit(): void;
    onAction(event: Event): void;
    private handleKeyEvents;
    private focusOnFirstInput;
    private keepFocusWithin;
    close(): void;
    modalClick(): void;
}
