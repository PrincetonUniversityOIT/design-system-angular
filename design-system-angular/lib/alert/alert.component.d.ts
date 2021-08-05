import { EventEmitter } from '@angular/core';
/**
 * Alerts inform users about important changes or conditions in the interface. Use this component if you need to capture user’s attention in a prominent way.
 *
 * @example
  `` `
  <jazz-alert heading='Alerts' title="Alert Title" (onClose)="onClose($event)">
     <p>This is the alert content</p>
  </jazz-alert>
  `` `
 */
import * as ɵngcc0 from '@angular/core';
export declare class AlertComponent {
    constructor();
    heading: string;
    title: string;
    content: string;
    onClose: EventEmitter<boolean>;
    /**
     * The close method can be used to programmatically close the alert.
     */
    close(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AlertComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AlertComponent, "jazz-alert", never, { "heading": "heading"; "title": "title"; "content": "content"; }, { "onClose": "onClose"; }, never, ["*"]>;
}

//# sourceMappingURL=alert.component.d.ts.map