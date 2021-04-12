export const ARIA_EXPANDED = 'aria-expanded';
export const ARIA_CONTROLS = 'aria-controls';
export const HIDDEN = 'hidden';

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

  static toggleControl(target: HTMLElement, expanded?: boolean, attribute?: string): boolean {

    const safeAttribute: string = attribute || ARIA_EXPANDED;

    let safeExpanded = expanded;

    if (typeof safeExpanded !== 'boolean') {
      // invert the existing button value
      safeExpanded = target.getAttribute(safeAttribute) === 'false';
    }

    target.setAttribute(safeAttribute, safeExpanded.toString());

    const controlledElementId = target.getAttribute(ARIA_CONTROLS);
    if (controlledElementId) {
      const controlledElement = document.getElementById(controlledElementId);
      if (!controlledElement) {
        throw new Error(`aria-controls is not properly configured: ${controlledElementId}`);
      }
      if (safeExpanded) {
        controlledElement.removeAttribute(HIDDEN);
      } else {
        controlledElement.setAttribute(HIDDEN, '');
      }
    }

    return safeExpanded;
  }
}
