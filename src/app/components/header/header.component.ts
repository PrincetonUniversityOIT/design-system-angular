import {Component, HostListener, Input} from '@angular/core';
import {MenuOptions} from '../../model/menu-options';
import {ARIA_EXPANDED} from '../menu/menu-constants';
import {
  ICON_CLOSE,
  ICON_SEARCH,
  ICON_SELECTOR,
  SEARCH_PANEL,
  SEARCH_SELECTOR,
  SEARCH_SHOWN_STYLE
} from './header-constants';

@Component({
  selector: 'app-jazz-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input()
  menuOptions: MenuOptions;

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.displayWindowSize();
  }

  constructor() {}

  displayWindowSize(): void {
    // Search Reset
    document.querySelectorAll(SEARCH_PANEL).forEach((searchbar) => {
      searchbar.classList.remove(SEARCH_SHOWN_STYLE);
    });

    document.querySelectorAll(SEARCH_SELECTOR).forEach((button) => {
      button.setAttribute(ARIA_EXPANDED, 'false');
      const searchToggleIcon = button.querySelector(ICON_SELECTOR);
      searchToggleIcon.classList.remove(ICON_CLOSE);
      searchToggleIcon.classList.add(ICON_SEARCH);
    });
  }
}
