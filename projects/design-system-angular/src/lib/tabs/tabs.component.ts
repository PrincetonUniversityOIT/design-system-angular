import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  Input, OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {Router} from '@angular/router';
import {HIDDEN} from '../utility-functions';
import {Subscription} from 'rxjs';

/**
 * Generate unique id for tab list
 *
 * @ignore
 */
let idGenerator = 0;


/**
 * The TabComponent represents a single tab in a list of tabs.
 *
 * This component mostly serves as a data structure, but also helps to expose the API through the jazz-tab element.
 * @example
 `` `
     <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
 `` `
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-tab',
  template: ``
})
export class TabComponent {

  /**
   * The tabindex of this tab.  This value should never be set by the user because it is controlled by the TabsComponent.
   *
   * @ignore
   */
  tabindex = 0;

  /**
   * Indicates if the tab is disabled.
   */
  @Input() disabled = false;

  /**
   * The label for the tab.
   */
  @Input() label: string;

  /**
   * The HTML id of the element/section within the HTML document that is controlled by this tab.
   */
  @Input() controls: string;

  /**
   * The HTML aria-label for this tab.
   */
  @Input('aria-label') ariaLabel = null;

  /**
   * The HTML aria-labelledby for this tab.
   */
  @Input('aria-labelledby') ariaLabelledby = null;

  /**
   * Indicates if the tab is selected.  Only one tab in a set of tabs should be selected at any given time.
   */
  @Input() selected = false;

  /**
   * The url route to routeTo when this tab is selected.
   */
  @Input() routeTo: string;
}

/**
 * The TabsComponent represents the wrapper around individual tabs.
 *
 * This component is responsible for the rendering of both the wrapping structure and the individual tabs.
 * @example
 `` `
  <jazz-tabs [autoActivate]="true">
     <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
     <jazz-tab label="Tab Disabled" disabled="true"></jazz-tab>
     <jazz-tab label="Tab 2" routeTo="/panel2" selected="true"></jazz-tab>
  </jazz-tabs>
 `` `
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-tabs',
  template: `
    <div *ngIf="useButtons"
      [id]="getTabListId()"
      class="jazz-tablist"
      [class.jazz-auto-activate]="autoActivate"
      role="tablist">
      <button #tabItem
        [id]="getTabId(i)"
        role="tab"
        [attr.tabindex]="tab.tabindex"
        [attr.aria-disabled]="tab.disabled"
        [attr.aria-selected]="tab.selected"
        [attr.aria-controls]="tab.controls"
        [attr.aria-label]="tab.ariaLabel || null"
        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"
        (click)="handleClickEvent(tab)"
        (keyup)="handleKeyboardEvent(tab, i, $event)"
        *ngFor="let tab of tabs; let i = index">{{ tab.label }}</button>
    </div>

    <div *ngIf="!useButtons"
         [id]="getTabListId()"
         class="jazz-tablist"
         [class.jazz-auto-activate]="autoActivate"
         role="tablist">
      <a #tabItem
              [id]="getTabId(i)"
              role="tab"
              [attr.tabindex]="tab.tabindex"
              [attr.aria-disabled]="tab.disabled"
              [attr.aria-selected]="tab.selected"
              [attr.aria-controls]="tab.controls"
              [routerLink]="tab.routeTo"
              routerLinkActive="active"
              #buttonLink="routerLinkActive"
              [attr.aria-label]="tab.ariaLabel || null"
              [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"
              (click)="handleClickEvent(tab)"
              (keyup)="handleKeyboardEvent(tab, i, $event)"
              *ngFor="let tab of tabs; let i = index">{{ tab.label }}</a>
    </div>
  `
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {

  /**
   * The list of TabComponent objects that are contained in this tab list.
   *
   * @ignore
   */
  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

  /**
   * The list of tab elements that are contained in this tab list.
   *
   * @ignore
   * @private
   */
  @ViewChildren('tabItem') private tabItems: QueryList<ElementRef>;

  /**
   * @ignore
   */
  // tslint:disable-next-line:variable-name
  private _tabsChangeSubscription: Subscription;

  /**
   * Internal variable for tracking if this component will automatically select tabs when they receive focus.
   *
   * @ignore
   */
  // tslint:disable-next-line:variable-name
  private _autoActivate = false;

  /**
   * The id of the list of tabs for use in generating the HTML id of the wrapping element.
   *
   * @ignore
   */
    // tslint:disable-next-line:variable-name
  private readonly _elementId: number;

  /**
   * Internal variable for tracking if this component will show buttons or links
   *
   * @ignore
   */
    // tslint:disable-next-line:variable-name
  private _useButtons = true;

  /**
   * Controls if a tab will become selected when it receives focus.
   */
  @Input()
  get autoActivate(): boolean {
    return this._autoActivate;
  }
  set autoActivate(value: boolean) {
    this._autoActivate = value;
  }

  /**
   * Controls if a tab will use buttons or links
   */
  @Input()
  get useButtons(): boolean {
    return this._useButtons;
  }
  set useButtons(value: boolean) {
    this._useButtons = value;
  }

  /**
   * Returns the list of TabComponent components that are part of this tab list.
   */
  getTabs(): TabComponent[] {
    return this.tabs.toArray();
  }

  constructor(private router: Router) {
    this._elementId = idGenerator++;
  }

  ngOnInit(): void {
  }

  /**
   * During this Angular lifecycle phase, the tabs are initialized and a subscription is established for listening for tab changes.
   */
  ngAfterContentInit(): void {

    this.initializeTabs();

    this._tabsChangeSubscription = this.tabs.changes.subscribe(
      () => {
        this.initializeTabs();
      }
    );
  }

  /**
   * Subscriptions are released and resource handles are destroyed.
   */
  ngOnDestroy(): void {
    this._tabsChangeSubscription.unsubscribe();
  }

  /**
   * Initializes the tabs by identifying the tab that should be selected.
   *
   * The logic accounts for the case where multiple tabs are marked as selected by selecting only the first tab that is marked as selected.
   * The logic also accounts for the case where the selected tab is disabled (selected tabs cannot be disabled) by selecting the first
   * tab in the list of tabs.
   *
   * @ignore
   */
  private initializeTabs(): void {
    let firstSelectedTab: TabComponent = null;
    let firstCurrentRoute: TabComponent = null;
    let firstEnabledTab: TabComponent = null;

    // find first enabled and first selected (and enabled) tab

    for (const tab of this.tabs) {
      if (!firstEnabledTab && !tab.disabled) {
      // if (!firstEnabledTab) {
        firstEnabledTab = tab;
      }
      if (!firstSelectedTab && !tab.disabled && tab.selected) {
      // if (!firstSelectedTab && !tab.disabled) {
        firstSelectedTab = tab;
      }
      if (!firstCurrentRoute && !tab.disabled && tab.routeTo && this.router.isActive(tab.routeTo, true)) {
        firstCurrentRoute = tab;
      }
    }

    // select the first selected tab (if it is enabled), otherwise select the first enabled tab or the first route

    if (firstSelectedTab) {
      this.selectTab(firstSelectedTab);
    } else if (firstCurrentRoute) {
      this.selectTab(firstCurrentRoute);
    } else if (firstEnabledTab) {
      this.selectTab(firstEnabledTab);
    }
  }

  /**
   * Generates the HTML id for the tab list wrapping element.
   *
   * @ignore
   */
  public getTabListId(): string {
    return 'jazz-tabs-' + this._elementId;
  }

  /**
   * Generates the id of an individual tab.
   *
   * @ignore
   */
  private getTabId(idx: number): string {
    return this.getTabListId() + '-' + idx;
  }

  /**
   * Changes the visibility of the specified element (which is controlled by the selected tab).
   *
   * @ignore
   * @param controlledElementId the HTML id of the controlled element
   * @param shown indicates if the element should be expanded (shown) or not (hidden)
   * @private
   */
  private setControlledElementVisibility(controlledElementId: string, shown: boolean): void {
    if (controlledElementId) {
      const controlledElement = document.getElementById(controlledElementId);
      if (!controlledElement) {
        throw new Error(`aria-controls is not properly configured: ${controlledElementId}`);
      }
      if (shown) {
        controlledElement.removeAttribute(HIDDEN);
      } else {
        controlledElement.setAttribute(HIDDEN, '');
      }
    }
  }

  /**
   * De-select all tabs in tablist, except the tab provided.
   *
   * @ignore
   * @param exceptTab
   */
  private deselectAllOtherButtonsInTablist(exceptTab: TabComponent): void {
    this.tabs.forEach((tab) => {
      if (tab !== exceptTab) {
        this.deselectTab(tab);
      }
    });
  }

  /**
   * Selects the specified tab.  By selecting a tab, all other tabs are deselected.
   *
   * @param tab the tab to be selected
   */
  selectTab(tab: TabComponent): void {

    this.deselectAllOtherButtonsInTablist(tab);

    // The selected tab is always set to be selected (selected=true).  Selecting an active tab will not de-select it.

    this.setTabSelection(tab, true);
  }

  /**
   * Delselects the specified tab.
   *
   * @param tab the tab to be deselected
   */
  deselectTab(tab: TabComponent): void {
    this.setTabSelection(tab, false);
  }

  /**
   * Sets the tab selection based on the specified tab and selection indicator (boolean).
   *
   * If the tab has a URL specified (with the routeTo parameter), then the router is used to navigate to that route if the tab is to be
   * selected.  Otherwise, the element that is controlled by this tab will have its visibility set accordingly.
   *
   * The tab is marked as selected/deselected as appropriate and its tabindex is set to control focusability based on if the tab is
   * selected (will receive focus using the keyboard) or not (will not receive focus using the keyboard).
   *
   * @ignore
   * @param tab
   * @param selected
   * @private
   */
  private setTabSelection(tab: TabComponent, selected: boolean): void {
    if (tab.routeTo && selected) {
      this.router.navigateByUrl(tab.routeTo);
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

  /**
   * Handles click events on individual tabs.  If the tab is not already selected, then it will be selected.
   *
   * @ignore
   * @param tab
   * @private
   */
  private handleClickEvent(tab: TabComponent): void {
    if (!tab.disabled && !tab.selected) {
      this.selectTab(tab);
    }
  }

  /**
   * Handles keyboard events on the individual tabs, specifically: ArrowRight, ArrowLeft, Home, and End.  These keyboard events control
   * which tab has focus.
   *
   * If this tab list is configured to autoActive, then the appropriate tab will be selected when it receives focus.
   *
   * @ignore
   * @param eventTab
   * @param idx
   * @param keyEvent
   * @private
   */
  private handleKeyboardEvent(eventTab: TabComponent, idx: number, keyEvent: KeyboardEvent): void {

    let focusIdx = -1;

    // identify the tab that should receive focus based on the key that was pressed

    if (keyEvent.key === 'ArrowRight') {
      focusIdx = this.getNextOrFirstTabIndex(idx);
    } else if (keyEvent.key === 'ArrowLeft') {
      focusIdx = this.getPreviousOrLastTab(idx);
    } else if (keyEvent.key === 'Home') {
      focusIdx = this.getFirstTabIndex();
    } else if (keyEvent.key === 'End') {
      focusIdx = this.getLastTabIndex();
    }

    if (focusIdx !== -1) {

      // if the tablist is configured to automatically select the tab upon focus, then select the tab

      if (this.autoActivate) {
        const nextTab = this.tabs.toArray()[focusIdx];
        if (!nextTab.disabled) {
          this.selectTab(this.tabs.toArray()[focusIdx]);
        }
      }

      // set focus to the tab
      this.tabItems.toArray()[focusIdx].nativeElement.focus();

      keyEvent.stopImmediatePropagation();
    }
  }

  /**
   * Finds the next tab, starting at the specified index in the tab list.
   *
   * @ignore
   * @param tabs
   * @param startIdx
   * @private
   */
  private getNextTabIndex(tabs: TabComponent[], startIdx: number): number {

    const safeStartIdx = this.clampTabIndex(startIdx);

    for (let i = safeStartIdx; i < tabs.length; i++) {
      return i;
    }

    return -1;
  }

  /**
   * Finds the previous tab, starting at the specified index in the tab list.
   *
   * @ignore
   * @param tabs
   * @param startIdx
   */
  private getPreviousTabIndex(tabs: TabComponent[], startIdx: number): number {

    const safeStartIdx = this.clampTabIndex(startIdx);

    for (let i = safeStartIdx; i >= 0; i--) {
      return i;
    }

    return -1;
  }

  /**
   * Finds the first tab in the list of provided tabs
   *
   * @ignore
   */
  private getFirstTabIndex(): number {
    return this.getNextTabIndex(this.tabs.toArray(), 0);
  }

  /**
   * Finds the last tab in the list of provided tabs.
   *
   * @ignore
   */
  private getLastTabIndex(): number {
    return this.getPreviousTabIndex(this.tabs.toArray(), this.tabs.length - 1);
  }

  /**
   * Ensure that index is within the appropriate range for the number of tabs that we have.
   *
   * The max function is accounting for the NaN value with the `|| 0` portion of the expression to
   * an infinite loop since Math.max(NaN, 0) === NaN.
   *
   * (per Angular Material Tabs code: https://github.com/angular/components/blob/master/src/material/tabs/tab-group.ts)
   *
   * @ignore
   * @param index
   * @private
   */
  private clampTabIndex(index: number | null): number {
    return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
  }

  /**
   * Find the next tab in the list of tabs provided.
   *
   * The search will begin at the position in the list where the provided tab is located and the search
   * will wrap around to the beginning of the provided list of tabs.
   *
   * @param startIdx the index of the tab to use as a starting point for finding the next tab
   * @ignore
   */
  private getNextOrFirstTabIndex(startIdx: number): number {
    const tabsArr = this.tabs.toArray();
    const idx = this.getNextTabIndex(tabsArr, startIdx + 1);
    if (idx === -1) {
      return this.getNextTabIndex(tabsArr, 0);
    } else {
      return idx;
    }
  }

  /**
   * Find the previous tab in the list of tabs provided.
   *
   * The search will begin at the position in the list where the provided tab is located and the search
   * will wrap around to the end of the provided list of tabs.
   *
   * @param startIdx
   * @ignore
   */
  private getPreviousOrLastTab(startIdx: number): number {
    const tabsArr = this.tabs.toArray();
    const idx = this.getPreviousTabIndex(tabsArr, startIdx - 1);
    if (idx === -1) {
      return this.getPreviousTabIndex(tabsArr, tabsArr.length - 1);
    } else {
      return idx;
    }
  }
}
