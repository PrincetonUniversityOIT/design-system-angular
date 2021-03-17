import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ARIA_EXPANDED, ICON_CLOSE, ICON_SELECTOR} from '../../menu/menu-constants';
import {
  HEADER_SELECTOR, SEARCH_PANEL, SEARCH_SHOWN_STYLE, ICON_SEARCH
} from './../header-constants';

@Component({
  selector: 'app-jazz-search-button',
  templateUrl: './search-button.component.html'
})
export class SearchButtonComponent implements OnInit {

  @ViewChild('searchButtonTemplate', {static: true}) searchButtonTemplate;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.searchButtonTemplate);
  }

  onSearchClick(event): void {
    const button = event.target as HTMLElement;
    const expandedAttr = button.getAttribute(ARIA_EXPANDED);
    const expand = !(expandedAttr && expandedAttr === 'true');
    this.showSearch(expand, button);
    event.stopImmediatePropagation();
  }

  onMainMenuSearchIconClick(event): void {
    const icon = event.target as HTMLElement;
    const button = icon.closest('button');
    const expandedAttr = button.getAttribute(ARIA_EXPANDED);
    const expand = !(expandedAttr && expandedAttr === 'true');
    this.showSearch(expand, button);
    event.stopImmediatePropagation();
  }

  showSearch(expand, button): void {
    // This makes sure regardless of which button is picked that the search elements are expanded/hidden
    const headerEl = button.closest(HEADER_SELECTOR);
    const searchToggleIcon = button.querySelector(ICON_SELECTOR);
    const searchbar = headerEl.querySelector(SEARCH_PANEL);

    if (expand) {
      searchbar.classList.add(SEARCH_SHOWN_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'true');
      searchToggleIcon.classList.remove(ICON_SEARCH);
      searchToggleIcon.classList.add(ICON_CLOSE);
      const input = searchbar.querySelector("input[type='search']");
      input.focus();
    } else {
      searchbar.classList.remove(SEARCH_SHOWN_STYLE);
      button.setAttribute(ARIA_EXPANDED, 'false');
      searchToggleIcon.classList.remove(ICON_CLOSE);
      searchToggleIcon.classList.add(ICON_SEARCH);
    }
  }
}
