import { ElementRef, EventEmitter, OnInit } from '@angular/core';
/**
 * @example
 `` `
   <jazz-modal-dialog [title]="'Sample Dialog'" [buttonLabel]="'Click Me!'" (buttonClicked)="clicked()">
     This is the content of the dialog
   </jazz-modal-dialog>
 `` `
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ModalDialogComponent, "jazz-modal-dialog", never, { "buttonLabel": "buttonLabel"; "title": "title"; "content": "content"; }, { "buttonClicked": "buttonClicked"; }, never, ["*"]>;
}

//# sourceMappingURL=modal-dialog.component.d.ts.map