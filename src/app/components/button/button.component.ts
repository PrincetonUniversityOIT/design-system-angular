import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Is this button disabled?
   */
  @Input()
  disabled = false;

  /**
   * Optional click handler
   */
  @Output()
  click = new EventEmitter<Event>();

  public get classes(): string[] {
    // const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    //
    // return ['storybook-button', `storybook-button--${this.size}`, mode];
    return ['jazz-btn'];
  }

  public getDisabled(): string {
    return this.disabled ? 'disabled' : '';
  }


}

