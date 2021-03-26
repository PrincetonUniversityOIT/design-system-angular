import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import {Router} from '@angular/router';
import {HIDDEN, UtilityFunctions} from '../utility-functions';

/** Generate unique id for tab list */
let idGenerator = 0;

// TODO: icons

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-tab',
  template: ``
})
export class TabComponent {

  tabindex = 0;

  @Input() disabled = false;
  @Input() label: string;
  @Input() controls: string;
  @Input('aria-label') ariaLabel = null;
  @Input('aria-labelledby') ariaLabelledby = null;
  @Input() selected = false;
  @Input() routeTo: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-tabs',
  template: `
    <div
      [id]="getTabListId()"
      class="jazz-tablist"
      [class.jazz-auto-activate]="autoActivate"
      role="tablist">
      <button #button
        [id]="getTabId(i)"
        role="tab"
        [attr.tabindex]="tab.tabindex"
        [disabled]="tab.disabled"
        [attr.aria-selected]="tab.selected"
        [attr.aria-controls]="tab.controls"
        [attr.aria-label]="tab.ariaLabel || null"
        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"
        (click)="handleClickEvent(tab)"
        (keyup)="handleKeyboardEvent(tab, i, $event)"
        *ngFor="let tab of tabs; let i = index">{{ tab.label }}</button>
    </div>
  `
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChildren('button') buttons: QueryList<ElementRef>;

  // tslint:disable-next-line:variable-name
  private _autoActivate = false;

  @Input()
  get autoActivate(): boolean {
    return this._autoActivate;
  }
  set autoActivate(value: boolean) {
    this._autoActivate = value;
  }

  // @Input()
  // private autoActivate = false;

  // tslint:disable-next-line:variable-name
  private readonly _elementId: number;

  constructor(private router: Router) {
    this._elementId = idGenerator++;
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {

    this.initializeTabs();

    this.tabs.changes.subscribe(
      () => {
        this.initializeTabs();
      }
    );
  }

  initializeTabs(): void {
    let firstSelectedTab: TabComponent = null;
    let firstCurrentRoute: TabComponent = null;
    let firstEnabledTab: TabComponent = null;

    // find first enabled and first selected (and enabled) tab

    for (const tab of this.tabs) {
      if (!firstEnabledTab && !tab.disabled) {
        firstEnabledTab = tab;
      }
      if (!firstSelectedTab && !tab.disabled && tab.selected) {
        firstSelectedTab = tab;
      }
      if (!firstCurrentRoute && !tab.disabled && tab.routeTo && this.router.isActive(tab.routeTo, true)) {
        firstCurrentRoute = tab;
      }
    }

    // select the first selected tab (if it is enabled), otherwise select the first enabled tab or the first route

    if (firstSelectedTab) {
      this.selectTab(firstSelectedTab);
    } else if (firstEnabledTab) {
      this.selectTab(firstEnabledTab);
    } else if (firstCurrentRoute) {
      this.selectTab(firstCurrentRoute);
    }
  }

  getTabListId(): string {
    return 'jazz-tabs-' + this._elementId;
  }

  getTabId(idx: number): string {
    return this.getTabListId() + '-' + idx;
  }

  setControlledElementVisibility(controlledElementId: string, expanded: boolean): void {
    if (controlledElementId) {
      const controlledElement = document.getElementById(controlledElementId);
      if (!controlledElement) {
        throw new Error(`aria-controls is not properly configured: ${controlledElementId}`);
      }
      if (expanded) {
        controlledElement.removeAttribute(HIDDEN);
      } else {
        controlledElement.setAttribute(HIDDEN, '');
      }
    }
  }

  navigateToRoute(routeUrl: string): void {
    this.router.navigateByUrl(routeUrl);
  }

  /**
   * De-select all tabs (buttons) in tablist, except the tab (button) provided.
   *
   * @param tablist
   * @param exceptButton
   */
  deselectAllOtherButtonsInTablist(exceptTab: TabComponent): void {
    this.tabs.forEach((tab) => {
      if (tab !== exceptTab) {
        this.deselectTab(tab);
      }
    });
  }

  selectTab(tab: TabComponent): void {

    this.deselectAllOtherButtonsInTablist(tab);

    // The selected tab is always set to be selected (selected=true).  Selecting an active tab will not de-select it.

    this.setTabSelection(tab, true);
  }

  deselectTab(tab: TabComponent): void {
    this.setTabSelection(tab, false);
  }

  setTabSelection(tab: TabComponent, selected: boolean): void {
    if (tab.routeTo) {
      this.navigateToRoute(tab.routeTo);
    } else {
      this.setControlledElementVisibility(tab.controls, selected);
    }
    if (selected) {
      tab.selected = true;
      tab.tabindex = 0;
    } else {
      tab.selected = false;
      tab.tabindex = -1;
    }
  }

  handleClickEvent(tab: TabComponent): void {
    if (!tab.disabled && !tab.selected) {
      this.selectTab(tab);
    }
  }

  handleKeyboardEvent(eventTab: TabComponent, idx: number, keyEvent: KeyboardEvent): void {

    let focusIdx = -1;

    // identify the tab that should receive focus based on the key that was pressed

    if (keyEvent.key === 'ArrowRight') {
      focusIdx = this.getNextOrFirstEnabledTabIndex(idx);
    } else if (keyEvent.key === 'ArrowLeft') {
      focusIdx = this.getPreviousOrLastEnabledTab(idx);
    } else if (keyEvent.key === 'Home') {
      focusIdx = this.getFirstEnabledTabIndex();
    } else if (keyEvent.key === 'End') {
      focusIdx = this.getLastEnabledTabIndex();
    }

    if (focusIdx !== -1) {

      // if the tablist is configured to automatically select the tab upon focus, then select the tab

      if (this.autoActivate) {
        this.selectTab(this.tabs.toArray()[focusIdx]);
      }

      // set focus to the tab
      this.buttons.toArray()[focusIdx].nativeElement.focus();

      keyEvent.stopImmediatePropagation();
    }
  }

  getNextEnabledTabIndex(tabs: TabComponent[], startIdx: number): number {

    const safeStartIdx = this.clampTabIndex(startIdx);

    for (let i = safeStartIdx; i < tabs.length; i++) {
      const tab = tabs[i];
      if (!tab.disabled) {
        return i;
      }
    }

    return -1;
  }

  getPreviousEnabledTabIndex(tabs: TabComponent[], startIdx: number): number {

    const safeStartIdx = this.clampTabIndex(startIdx);

    for (let i = safeStartIdx; i >= 0; i--) {
      const tab = tabs[i];
      if (!tab.disabled) {
        return i;
      }
    }

    return -1;
  }

  /**
   * Find the first enabled tab (button) in the list of provided tabs (buttons)
   */
  getFirstEnabledTabIndex(): number {
    return this.getNextEnabledTabIndex(this.tabs.toArray(), 0);
  }

  /**
   * Find the last enabled tab (button) in the list of provided tabs (buttons).
   */
  getLastEnabledTabIndex(): number {
    return this.getPreviousEnabledTabIndex(this.tabs.toArray(), this.tabs.length - 1);
  }

  /**
   * Ensure that index is within the appropriate range for the number of tabs that we have.
   *
   * The max function is accounting for the NaN value with the `|| 0` portion of the expression to
   * an infinite loop since Math.max(NaN, 0) === NaN.
   *
   * (per Angular Material Tabs code: https://github.com/angular/components/blob/master/src/material/tabs/tab-group.ts)
   *
   * @param index
   * @private
   */
  private clampTabIndex(index: number | null): number {
    return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
  }

  /**
   * Find the next enabled tab (button) in the list of tabs (buttons) provided.
   *
   * The search will begin at the position in the list where the provided tab (button) is located and the search
   * will wrap around to the beginning of the provided list of tabs (buttons) if no enabled tab (button) is found
   * in the list after the location of the provided tab (button).
   *
   * @param refTab the tab to use as a starting point for finding the next enabled tab
   */
  getNextOrFirstEnabledTabIndex(startIdx: number): number {
    const tabsArr = this.tabs.toArray();
    const idx = this.getNextEnabledTabIndex(tabsArr, startIdx + 1);
    if (idx === -1) {
      return this.getNextEnabledTabIndex(tabsArr, 0);
    } else {
      return idx;
    }
  }

  /**
   * Find the previous enabled tab (button) in the list of tabs (buttons) provided.
   *
   * The search will begin at the position in the list where the provided tab (button) is located and the search
   * will wrap around to the end of the provided list of tabs (buttons) if no enabled tab (button) is found
   * in the list before the location of the provided tab (button).
   *
   * @param tabs
   * @param refButton
   */
  getPreviousOrLastEnabledTab(startIdx: number): number {
    const tabsArr = this.tabs.toArray();
    const idx = this.getPreviousEnabledTabIndex(tabsArr, startIdx - 1);
    if (idx === -1) {
      return this.getPreviousEnabledTabIndex(tabsArr, tabsArr.length - 1);
    } else {
      return idx;
    }
  }
}
