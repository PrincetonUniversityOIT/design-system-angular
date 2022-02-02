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
    get labelClass(): string;
    get divClass(): string;
    get disabled(): boolean;
    ngOnInit(): void;
    hasError(): boolean;
    get errorMessages(): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FormFieldComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<FormFieldComponent, "form-field", never, { "messageConfig": "messageConfig"; "for": "for"; "label": "label"; "required": "required"; }, {}, ["formInput"], ["*"]>;
}

//# sourceMappingURL=form-field.component.d.ts.map