import { OnInit } from '@angular/core';
import { FormInputDirective } from './form-input.directive';
import * as ɵngcc0 from '@angular/core';
export declare class FormFieldComponent implements OnInit {
    for: string;
    label: string;
    required: string;
    messageConfig: {
        [index: string]: string;
    };
    formInput: FormInputDirective;
    private disabled;
    get labelClass(): string;
    get divClass(): string;
    ngOnInit(): void;
    enable(enable?: boolean): void;
    hasError(): boolean;
    get errorMessages(): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormFieldComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormFieldComponent, "form-field", never, { "messageConfig": "messageConfig"; "for": "for"; "label": "label"; "required": "required"; }, {}, ["formInput"], ["*"]>;
}

//# sourceMappingURL=form-field.component.d.ts.map