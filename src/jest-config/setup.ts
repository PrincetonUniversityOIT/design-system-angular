import 'jest-preset-angular';
import './__mocks__/globalMocks';
import '@testing-library/jest-dom';

Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });

// @ts-ignore
export function simulateKeyupEvent(element: HTMLElement, value: string): void {
  const event: KeyboardEvent = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: value
  });
  // Object.defineProperty(event, 'target', { value: { value } });
  element.dispatchEvent(event);
}
