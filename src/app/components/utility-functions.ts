
export class UtilityFunctions {

  static select(selector: string, context: ParentNode): [] {

    if (typeof selector !== 'string') {
      return [];
    }

    if (!context || !this.isElement(context)) {
      context = window.document; // eslint-disable-line no-param-reassign
    }

    const selection = context.querySelectorAll(selector);
    return Array.prototype.slice.call(selection);
  }

  static isElement(value): any {
    return value && typeof value === 'object' && value.nodeType === 1;
  }

  static selectClosestTo(targetSelector: string, closestToSelector: string, context: Element): any {
    const elements: Element[] = UtilityFunctions.select(targetSelector, context);
    return elements.filter((element) => element.closest(closestToSelector) === context);
  }
}
