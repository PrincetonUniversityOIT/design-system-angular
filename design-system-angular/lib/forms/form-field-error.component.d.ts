import { FormGroup } from '@angular/forms';
/**
 * Use 'invalid' validation error key to display any validation message
 */
import * as ɵngcc0 from '@angular/core';
export declare class FormFieldErrorComponent {
    form: FormGroup;
    controlName: string;
    label: any;
    messageParms: {
        [key: string]: string | number;
    };
    messageParm: (key: string) => string | number;
    hasError(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormFieldErrorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormFieldErrorComponent, "field-error", never, { "form": "form"; "controlName": "controlName"; "label": "label"; "messageParms": "messageParms"; }, {}, never, never>;
}

//# sourceMappingURL=form-field-error.component.d.ts.map