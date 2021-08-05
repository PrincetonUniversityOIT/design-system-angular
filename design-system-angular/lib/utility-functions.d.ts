export declare const ARIA_EXPANDED = "aria-expanded";
export declare const ARIA_CONTROLS = "aria-controls";
export declare const HIDDEN = "hidden";
export declare class UtilityFunctions {
    static select(selector: string, context: ParentNode): [];
    static isElement(value: any): any;
    static selectClosestTo(targetSelector: string, closestToSelector: string, context: Element): any;
    static toggleControl(target: HTMLElement, expanded?: boolean, attribute?: string): boolean;
}
