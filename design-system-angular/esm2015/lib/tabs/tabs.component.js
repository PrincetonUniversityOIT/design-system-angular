import { Component, ContentChildren, Input, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { HIDDEN } from '../utility-functions';
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
export class TabComponent {
    constructor() {
        /**
         * The tabindex of this tab.  This value should never be set by the user because it is controlled by the TabsComponent.
         *
         * @ignore
         */
        this.tabindex = 0;
        /**
         * Indicates if the tab is disabled.
         */
        this.disabled = false;
        /**
         * The HTML aria-label for this tab.
         */
        this.ariaLabel = null;
        /**
         * The HTML aria-labelledby for this tab.
         */
        this.ariaLabelledby = null;
        /**
         * Indicates if the tab is selected.  Only one tab in a set of tabs should be selected at any given time.
         */
        this.selected = false;
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-tab',
                template: ``
            },] }
];
TabComponent.propDecorators = {
    disabled: [{ type: Input }],
    label: [{ type: Input }],
    controls: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    selected: [{ type: Input }],
    routeTo: [{ type: Input }]
};
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
export class TabsComponent {
    constructor(router) {
        this.router = router;
        /**
         * Internal variable for tracking if this component will automatically select tabs when they receive focus.
         *
         * @ignore
         */
        // tslint:disable-next-line:variable-name
        this._autoActivate = false;
        /**
         * Internal variable for tracking if this component will show buttons or links
         *
         * @ignore
         */
        // tslint:disable-next-line:variable-name
        this._useButtons = true;
        this._elementId = idGenerator++;
    }
    /**
     * Controls if a tab will become selected when it receives focus.
     */
    get autoActivate() {
        return this._autoActivate;
    }
    set autoActivate(value) {
        this._autoActivate = value;
    }
    /**
     * Controls if a tab will use buttons or links
     */
    get useButtons() {
        return this._useButtons;
    }
    set useButtons(value) {
        this._useButtons = value;
    }
    /**
     * Returns the list of TabComponent components that are part of this tab list.
     */
    getTabs() {
        return this.tabs.toArray();
    }
    ngOnInit() {
    }
    /**
     * During this Angular lifecycle phase, the tabs are initialized and a subscription is established for listening for tab changes.
     */
    ngAfterContentInit() {
        this.initializeTabs();
        this._tabsChangeSubscription = this.tabs.changes.subscribe(() => {
            this.initializeTabs();
        });
    }
    /**
     * Subscriptions are released and resource handles are destroyed.
     */
    ngOnDestroy() {
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
    initializeTabs() {
        let firstSelectedTab = null;
        let firstCurrentRoute = null;
        let firstEnabledTab = null;
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
        }
        else if (firstCurrentRoute) {
            this.selectTab(firstCurrentRoute);
        }
        else if (firstEnabledTab) {
            this.selectTab(firstEnabledTab);
        }
    }
    /**
     * Generates the HTML id for the tab list wrapping element.
     *
     * @ignore
     */
    getTabListId() {
        return 'jazz-tabs-' + this._elementId;
    }
    /**
     * Generates the id of an individual tab.
     *
     * @ignore
     */
    getTabId(idx) {
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
    setControlledElementVisibility(controlledElementId, shown) {
        if (controlledElementId) {
            const controlledElement = document.getElementById(controlledElementId);
            if (!controlledElement) {
                throw new Error(`aria-controls is not properly configured: ${controlledElementId}`);
            }
            if (shown) {
                controlledElement.removeAttribute(HIDDEN);
            }
            else {
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
    deselectAllOtherButtonsInTablist(exceptTab) {
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
    selectTab(tab) {
        this.deselectAllOtherButtonsInTablist(tab);
        // The selected tab is always set to be selected (selected=true).  Selecting an active tab will not de-select it.
        this.setTabSelection(tab, true);
    }
    /**
     * Delselects the specified tab.
     *
     * @param tab the tab to be deselected
     */
    deselectTab(tab) {
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
    setTabSelection(tab, selected) {
        if (tab.routeTo && selected) {
            this.router.navigateByUrl(tab.routeTo);
        }
        else {
            this.setControlledElementVisibility(tab.controls, selected);
        }
        if (selected) {
            tab.selected = true;
            tab.tabindex = 0;
        }
        else {
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
    handleClickEvent(tab) {
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
    handleKeyboardEvent(eventTab, idx, keyEvent) {
        let focusIdx = -1;
        // identify the tab that should receive focus based on the key that was pressed
        if (keyEvent.key === 'ArrowRight') {
            focusIdx = this.getNextOrFirstTabIndex(idx);
        }
        else if (keyEvent.key === 'ArrowLeft') {
            focusIdx = this.getPreviousOrLastTab(idx);
        }
        else if (keyEvent.key === 'Home') {
            focusIdx = this.getFirstTabIndex();
        }
        else if (keyEvent.key === 'End') {
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
    getNextTabIndex(tabs, startIdx) {
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
    getPreviousTabIndex(tabs, startIdx) {
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
    getFirstTabIndex() {
        return this.getNextTabIndex(this.tabs.toArray(), 0);
    }
    /**
     * Finds the last tab in the list of provided tabs.
     *
     * @ignore
     */
    getLastTabIndex() {
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
    clampTabIndex(index) {
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
    getNextOrFirstTabIndex(startIdx) {
        const tabsArr = this.tabs.toArray();
        const idx = this.getNextTabIndex(tabsArr, startIdx + 1);
        if (idx === -1) {
            return this.getNextTabIndex(tabsArr, 0);
        }
        else {
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
    getPreviousOrLastTab(startIdx) {
        const tabsArr = this.tabs.toArray();
        const idx = this.getPreviousTabIndex(tabsArr, startIdx - 1);
        if (idx === -1) {
            return this.getPreviousTabIndex(tabsArr, tabsArr.length - 1);
        }
        else {
            return idx;
        }
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
TabsComponent.ctorParameters = () => [
    { type: Router }
];
TabsComponent.propDecorators = {
    tabs: [{ type: ContentChildren, args: [TabComponent,] }],
    tabItems: [{ type: ViewChildren, args: ['tabItem',] }],
    autoActivate: [{ type: Input }],
    useButtons: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi90YWJzL3RhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLEtBQUssRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHNUM7Ozs7R0FJRztBQUNILElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztBQUdwQjs7Ozs7Ozs7R0FRRztBQU1ILE1BQU0sT0FBTyxZQUFZO0lBTHpCO1FBT0U7Ozs7V0FJRztRQUNILGFBQVEsR0FBRyxDQUFDLENBQUM7UUFFYjs7V0FFRztRQUNNLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFZMUI7O1dBRUc7UUFDa0IsY0FBUyxHQUFHLElBQUksQ0FBQztRQUV0Qzs7V0FFRztRQUN1QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUVoRDs7V0FFRztRQUNNLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFNNUIsQ0FBQzs7O1lBaERBLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7dUJBYUUsS0FBSztvQkFLTCxLQUFLO3VCQUtMLEtBQUs7d0JBS0wsS0FBSyxTQUFDLFlBQVk7NkJBS2xCLEtBQUssU0FBQyxpQkFBaUI7dUJBS3ZCLEtBQUs7c0JBS0wsS0FBSzs7QUFHUjs7Ozs7Ozs7Ozs7O0dBWUc7QUErQ0gsTUFBTSxPQUFPLGFBQWE7SUE0RXhCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBckRsQzs7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QUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUM7U0FDWjtJQUNILENBQUM7OztZQS9jRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDVDthQUNGOzs7WUFqSU8sTUFBTTs7O21CQXlJWCxlQUFlLFNBQUMsWUFBWTt1QkFRNUIsWUFBWSxTQUFDLFNBQVM7MkJBbUN0QixLQUFLO3lCQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtISURERU59IGZyb20gJy4uL3V0aWxpdHktZnVuY3Rpb25zJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWQgZm9yIHRhYiBsaXN0XG4gKlxuICogQGlnbm9yZVxuICovXG5sZXQgaWRHZW5lcmF0b3IgPSAwO1xuXG5cbi8qKlxuICogVGhlIFRhYkNvbXBvbmVudCByZXByZXNlbnRzIGEgc2luZ2xlIHRhYiBpbiBhIGxpc3Qgb2YgdGFicy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBtb3N0bHkgc2VydmVzIGFzIGEgZGF0YSBzdHJ1Y3R1cmUsIGJ1dCBhbHNvIGhlbHBzIHRvIGV4cG9zZSB0aGUgQVBJIHRocm91Z2ggdGhlIGphenotdGFiIGVsZW1lbnQuXG4gKiBAZXhhbXBsZVxuIGBgIGBcbiAgICAgPGphenotdGFiIGxhYmVsPVwiVGFiIDFcIiByb3V0ZVRvPVwiL3BhbmVsMVwiPjwvamF6ei10YWI+XG4gYGAgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotdGFiJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFRoZSB0YWJpbmRleCBvZiB0aGlzIHRhYi4gIFRoaXMgdmFsdWUgc2hvdWxkIG5ldmVyIGJlIHNldCBieSB0aGUgdXNlciBiZWNhdXNlIGl0IGlzIGNvbnRyb2xsZWQgYnkgdGhlIFRhYnNDb21wb25lbnQuXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRhYmluZGV4ID0gMDtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSB0YWIgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgZm9yIHRoZSB0YWIuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRNTCBpZCBvZiB0aGUgZWxlbWVudC9zZWN0aW9uIHdpdGhpbiB0aGUgSFRNTCBkb2N1bWVudCB0aGF0IGlzIGNvbnRyb2xsZWQgYnkgdGhpcyB0YWIuXG4gICAqL1xuICBASW5wdXQoKSBjb250cm9sczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRNTCBhcmlhLWxhYmVsIGZvciB0aGlzIHRhYi5cbiAgICovXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBIVE1MIGFyaWEtbGFiZWxsZWRieSBmb3IgdGhpcyB0YWIuXG4gICAqL1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5ID0gbnVsbDtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSB0YWIgaXMgc2VsZWN0ZWQuICBPbmx5IG9uZSB0YWIgaW4gYSBzZXQgb2YgdGFicyBzaG91bGQgYmUgc2VsZWN0ZWQgYXQgYW55IGdpdmVuIHRpbWUuXG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgdXJsIHJvdXRlIHRvIHJvdXRlVG8gd2hlbiB0aGlzIHRhYiBpcyBzZWxlY3RlZC5cbiAgICovXG4gIEBJbnB1dCgpIHJvdXRlVG86IHN0cmluZztcbn1cblxuLyoqXG4gKiBUaGUgVGFic0NvbXBvbmVudCByZXByZXNlbnRzIHRoZSB3cmFwcGVyIGFyb3VuZCBpbmRpdmlkdWFsIHRhYnMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIHRoZSByZW5kZXJpbmcgb2YgYm90aCB0aGUgd3JhcHBpbmcgc3RydWN0dXJlIGFuZCB0aGUgaW5kaXZpZHVhbCB0YWJzLlxuICogQGV4YW1wbGVcbiBgYCBgXG4gIDxqYXp6LXRhYnMgW2F1dG9BY3RpdmF0ZV09XCJ0cnVlXCI+XG4gICAgIDxqYXp6LXRhYiBsYWJlbD1cIlRhYiAxXCIgcm91dGVUbz1cIi9wYW5lbDFcIj48L2phenotdGFiPlxuICAgICA8amF6ei10YWIgbGFiZWw9XCJUYWIgRGlzYWJsZWRcIiBkaXNhYmxlZD1cInRydWVcIj48L2phenotdGFiPlxuICAgICA8amF6ei10YWIgbGFiZWw9XCJUYWIgMlwiIHJvdXRlVG89XCIvcGFuZWwyXCIgc2VsZWN0ZWQ9XCJ0cnVlXCI+PC9qYXp6LXRhYj5cbiAgPC9qYXp6LXRhYnM+XG4gYGAgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotdGFicycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cInVzZUJ1dHRvbnNcIlxuICAgICAgW2lkXT1cImdldFRhYkxpc3RJZCgpXCJcbiAgICAgIGNsYXNzPVwiamF6ei10YWJsaXN0XCJcbiAgICAgIFtjbGFzcy5qYXp6LWF1dG8tYWN0aXZhdGVdPVwiYXV0b0FjdGl2YXRlXCJcbiAgICAgIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICA8YnV0dG9uICN0YWJJdGVtXG4gICAgICAgIFtpZF09XCJnZXRUYWJJZChpKVwiXG4gICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICBbYXR0ci50YWJpbmRleF09XCJ0YWIudGFiaW5kZXhcIlxuICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwidGFiLnNlbGVjdGVkXCJcbiAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJ0YWIuY29udHJvbHNcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInRhYi5hcmlhTGFiZWwgfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCIoIXRhYi5hcmlhTGFiZWwgJiYgdGFiLmFyaWFMYWJlbGxlZGJ5KSA/IHRhYi5hcmlhTGFiZWxsZWRieSA6IG51bGxcIlxuICAgICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2tFdmVudCh0YWIpXCJcbiAgICAgICAgKGtleXVwKT1cImhhbmRsZUtleWJvYXJkRXZlbnQodGFiLCBpLCAkZXZlbnQpXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyBsZXQgaSA9IGluZGV4XCI+e3sgdGFiLmxhYmVsIH19PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiIXVzZUJ1dHRvbnNcIlxuICAgICAgICAgW2lkXT1cImdldFRhYkxpc3RJZCgpXCJcbiAgICAgICAgIGNsYXNzPVwiamF6ei10YWJsaXN0XCJcbiAgICAgICAgIFtjbGFzcy5qYXp6LWF1dG8tYWN0aXZhdGVdPVwiYXV0b0FjdGl2YXRlXCJcbiAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICA8YSAjdGFiSXRlbVxuICAgICAgICAgICAgICBbaWRdPVwiZ2V0VGFiSWQoaSlcIlxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwidGFiLnRhYmluZGV4XCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInRhYi5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwidGFiLmNvbnRyb2xzXCJcbiAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwidGFiLnJvdXRlVG9cIlxuICAgICAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgI2J1dHRvbkxpbms9XCJyb3V0ZXJMaW5rQWN0aXZlXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJ0YWIuYXJpYUxhYmVsIHx8IG51bGxcIlxuICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiKCF0YWIuYXJpYUxhYmVsICYmIHRhYi5hcmlhTGFiZWxsZWRieSkgPyB0YWIuYXJpYUxhYmVsbGVkYnkgOiBudWxsXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrRXZlbnQodGFiKVwiXG4gICAgICAgICAgICAgIChrZXl1cCk9XCJoYW5kbGVLZXlib2FyZEV2ZW50KHRhYiwgaSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgbGV0IGkgPSBpbmRleFwiPnt7IHRhYi5sYWJlbCB9fTwvYT5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBUYWJDb21wb25lbnQgb2JqZWN0cyB0aGF0IGFyZSBjb250YWluZWQgaW4gdGhpcyB0YWIgbGlzdC5cbiAgICpcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHB1YmxpYyB0YWJzOiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgdGFiIGVsZW1lbnRzIHRoYXQgYXJlIGNvbnRhaW5lZCBpbiB0aGlzIHRhYiBsaXN0LlxuICAgKlxuICAgKiBAaWdub3JlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBAVmlld0NoaWxkcmVuKCd0YWJJdGVtJykgcHJpdmF0ZSB0YWJJdGVtczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF90YWJzQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHZhcmlhYmxlIGZvciB0cmFja2luZyBpZiB0aGlzIGNvbXBvbmVudCB3aWxsIGF1dG9tYXRpY2FsbHkgc2VsZWN0IHRhYnMgd2hlbiB0aGV5IHJlY2VpdmUgZm9jdXMuXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX2F1dG9BY3RpdmF0ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGxpc3Qgb2YgdGFicyBmb3IgdXNlIGluIGdlbmVyYXRpbmcgdGhlIEhUTUwgaWQgb2YgdGhlIHdyYXBwaW5nIGVsZW1lbnQuXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudElkOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHZhcmlhYmxlIGZvciB0cmFja2luZyBpZiB0aGlzIGNvbXBvbmVudCB3aWxsIHNob3cgYnV0dG9ucyBvciBsaW5rc1xuICAgKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3VzZUJ1dHRvbnMgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBDb250cm9scyBpZiBhIHRhYiB3aWxsIGJlY29tZSBzZWxlY3RlZCB3aGVuIGl0IHJlY2VpdmVzIGZvY3VzLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9BY3RpdmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0FjdGl2YXRlO1xuICB9XG4gIHNldCBhdXRvQWN0aXZhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvQWN0aXZhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9scyBpZiBhIHRhYiB3aWxsIHVzZSBidXR0b25zIG9yIGxpbmtzXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdXNlQnV0dG9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlQnV0dG9ucztcbiAgfVxuICBzZXQgdXNlQnV0dG9ucyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3VzZUJ1dHRvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIFRhYkNvbXBvbmVudCBjb21wb25lbnRzIHRoYXQgYXJlIHBhcnQgb2YgdGhpcyB0YWIgbGlzdC5cbiAgICovXG4gIGdldFRhYnMoKTogVGFiQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLnRhYnMudG9BcnJheSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuX2VsZW1lbnRJZCA9IGlkR2VuZXJhdG9yKys7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBEdXJpbmcgdGhpcyBBbmd1bGFyIGxpZmVjeWNsZSBwaGFzZSwgdGhlIHRhYnMgYXJlIGluaXRpYWxpemVkIGFuZCBhIHN1YnNjcmlwdGlvbiBpcyBlc3RhYmxpc2hlZCBmb3IgbGlzdGVuaW5nIGZvciB0YWIgY2hhbmdlcy5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZVRhYnMoKTtcblxuICAgIHRoaXMuX3RhYnNDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnMuY2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRhYnMoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbnMgYXJlIHJlbGVhc2VkIGFuZCByZXNvdXJjZSBoYW5kbGVzIGFyZSBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl90YWJzQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHRhYnMgYnkgaWRlbnRpZnlpbmcgdGhlIHRhYiB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZC5cbiAgICpcbiAgICogVGhlIGxvZ2ljIGFjY291bnRzIGZvciB0aGUgY2FzZSB3aGVyZSBtdWx0aXBsZSB0YWJzIGFyZSBtYXJrZWQgYXMgc2VsZWN0ZWQgYnkgc2VsZWN0aW5nIG9ubHkgdGhlIGZpcnN0IHRhYiB0aGF0IGlzIG1hcmtlZCBhcyBzZWxlY3RlZC5cbiAgICogVGhlIGxvZ2ljIGFsc28gYWNjb3VudHMgZm9yIHRoZSBjYXNlIHdoZXJlIHRoZSBzZWxlY3RlZCB0YWIgaXMgZGlzYWJsZWQgKHNlbGVjdGVkIHRhYnMgY2Fubm90IGJlIGRpc2FibGVkKSBieSBzZWxlY3RpbmcgdGhlIGZpcnN0XG4gICAqIHRhYiBpbiB0aGUgbGlzdCBvZiB0YWJzLlxuICAgKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxpemVUYWJzKCk6IHZvaWQge1xuICAgIGxldCBmaXJzdFNlbGVjdGVkVGFiOiBUYWJDb21wb25lbnQgPSBudWxsO1xuICAgIGxldCBmaXJzdEN1cnJlbnRSb3V0ZTogVGFiQ29tcG9uZW50ID0gbnVsbDtcbiAgICBsZXQgZmlyc3RFbmFibGVkVGFiOiBUYWJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgLy8gZmluZCBmaXJzdCBlbmFibGVkIGFuZCBmaXJzdCBzZWxlY3RlZCAoYW5kIGVuYWJsZWQpIHRhYlxuXG4gICAgZm9yIChjb25zdCB0YWIgb2YgdGhpcy50YWJzKSB7XG4gICAgICBpZiAoIWZpcnN0RW5hYmxlZFRhYiAmJiAhdGFiLmRpc2FibGVkKSB7XG4gICAgICAvLyBpZiAoIWZpcnN0RW5hYmxlZFRhYikge1xuICAgICAgICBmaXJzdEVuYWJsZWRUYWIgPSB0YWI7XG4gICAgICB9XG4gICAgICBpZiAoIWZpcnN0U2VsZWN0ZWRUYWIgJiYgIXRhYi5kaXNhYmxlZCAmJiB0YWIuc2VsZWN0ZWQpIHtcbiAgICAgIC8vIGlmICghZmlyc3RTZWxlY3RlZFRhYiAmJiAhdGFiLmRpc2FibGVkKSB7XG4gICAgICAgIGZpcnN0U2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICB9XG4gICAgICBpZiAoIWZpcnN0Q3VycmVudFJvdXRlICYmICF0YWIuZGlzYWJsZWQgJiYgdGFiLnJvdXRlVG8gJiYgdGhpcy5yb3V0ZXIuaXNBY3RpdmUodGFiLnJvdXRlVG8sIHRydWUpKSB7XG4gICAgICAgIGZpcnN0Q3VycmVudFJvdXRlID0gdGFiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNlbGVjdCB0aGUgZmlyc3Qgc2VsZWN0ZWQgdGFiIChpZiBpdCBpcyBlbmFibGVkKSwgb3RoZXJ3aXNlIHNlbGVjdCB0aGUgZmlyc3QgZW5hYmxlZCB0YWIgb3IgdGhlIGZpcnN0IHJvdXRlXG5cbiAgICBpZiAoZmlyc3RTZWxlY3RlZFRhYikge1xuICAgICAgdGhpcy5zZWxlY3RUYWIoZmlyc3RTZWxlY3RlZFRhYik7XG4gICAgfSBlbHNlIGlmIChmaXJzdEN1cnJlbnRSb3V0ZSkge1xuICAgICAgdGhpcy5zZWxlY3RUYWIoZmlyc3RDdXJyZW50Um91dGUpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RFbmFibGVkVGFiKSB7XG4gICAgICB0aGlzLnNlbGVjdFRhYihmaXJzdEVuYWJsZWRUYWIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIEhUTUwgaWQgZm9yIHRoZSB0YWIgbGlzdCB3cmFwcGluZyBlbGVtZW50LlxuICAgKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwdWJsaWMgZ2V0VGFiTGlzdElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdqYXp6LXRhYnMtJyArIHRoaXMuX2VsZW1lbnRJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIGlkIG9mIGFuIGluZGl2aWR1YWwgdGFiLlxuICAgKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIGdldFRhYklkKGlkeDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUYWJMaXN0SWQoKSArICctJyArIGlkeDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudCAod2hpY2ggaXMgY29udHJvbGxlZCBieSB0aGUgc2VsZWN0ZWQgdGFiKS5cbiAgICpcbiAgICogQGlnbm9yZVxuICAgKiBAcGFyYW0gY29udHJvbGxlZEVsZW1lbnRJZCB0aGUgSFRNTCBpZCBvZiB0aGUgY29udHJvbGxlZCBlbGVtZW50XG4gICAqIEBwYXJhbSBzaG93biBpbmRpY2F0ZXMgaWYgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGV4cGFuZGVkIChzaG93bikgb3Igbm90IChoaWRkZW4pXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHNldENvbnRyb2xsZWRFbGVtZW50VmlzaWJpbGl0eShjb250cm9sbGVkRWxlbWVudElkOiBzdHJpbmcsIHNob3duOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGNvbnRyb2xsZWRFbGVtZW50SWQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2xsZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udHJvbGxlZEVsZW1lbnRJZCk7XG4gICAgICBpZiAoIWNvbnRyb2xsZWRFbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgYXJpYS1jb250cm9scyBpcyBub3QgcHJvcGVybHkgY29uZmlndXJlZDogJHtjb250cm9sbGVkRWxlbWVudElkfWApO1xuICAgICAgfVxuICAgICAgaWYgKHNob3duKSB7XG4gICAgICAgIGNvbnRyb2xsZWRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShISURERU4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udHJvbGxlZEVsZW1lbnQuc2V0QXR0cmlidXRlKEhJRERFTiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZS1zZWxlY3QgYWxsIHRhYnMgaW4gdGFibGlzdCwgZXhjZXB0IHRoZSB0YWIgcHJvdmlkZWQuXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIGV4Y2VwdFRhYlxuICAgKi9cbiAgcHJpdmF0ZSBkZXNlbGVjdEFsbE90aGVyQnV0dG9uc0luVGFibGlzdChleGNlcHRUYWI6IFRhYkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGlmICh0YWIgIT09IGV4Y2VwdFRhYikge1xuICAgICAgICB0aGlzLmRlc2VsZWN0VGFiKHRhYik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIHRhYi4gIEJ5IHNlbGVjdGluZyBhIHRhYiwgYWxsIG90aGVyIHRhYnMgYXJlIGRlc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB0YWIgdGhlIHRhYiB0byBiZSBzZWxlY3RlZFxuICAgKi9cbiAgc2VsZWN0VGFiKHRhYjogVGFiQ29tcG9uZW50KTogdm9pZCB7XG5cbiAgICB0aGlzLmRlc2VsZWN0QWxsT3RoZXJCdXR0b25zSW5UYWJsaXN0KHRhYik7XG5cbiAgICAvLyBUaGUgc2VsZWN0ZWQgdGFiIGlzIGFsd2F5cyBzZXQgdG8gYmUgc2VsZWN0ZWQgKHNlbGVjdGVkPXRydWUpLiAgU2VsZWN0aW5nIGFuIGFjdGl2ZSB0YWIgd2lsbCBub3QgZGUtc2VsZWN0IGl0LlxuXG4gICAgdGhpcy5zZXRUYWJTZWxlY3Rpb24odGFiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxzZWxlY3RzIHRoZSBzcGVjaWZpZWQgdGFiLlxuICAgKlxuICAgKiBAcGFyYW0gdGFiIHRoZSB0YWIgdG8gYmUgZGVzZWxlY3RlZFxuICAgKi9cbiAgZGVzZWxlY3RUYWIodGFiOiBUYWJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRhYlNlbGVjdGlvbih0YWIsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0YWIgc2VsZWN0aW9uIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgdGFiIGFuZCBzZWxlY3Rpb24gaW5kaWNhdG9yIChib29sZWFuKS5cbiAgICpcbiAgICogSWYgdGhlIHRhYiBoYXMgYSBVUkwgc3BlY2lmaWVkICh3aXRoIHRoZSByb3V0ZVRvIHBhcmFtZXRlciksIHRoZW4gdGhlIHJvdXRlciBpcyB1c2VkIHRvIG5hdmlnYXRlIHRvIHRoYXQgcm91dGUgaWYgdGhlIHRhYiBpcyB0byBiZVxuICAgKiBzZWxlY3RlZC4gIE90aGVyd2lzZSwgdGhlIGVsZW1lbnQgdGhhdCBpcyBjb250cm9sbGVkIGJ5IHRoaXMgdGFiIHdpbGwgaGF2ZSBpdHMgdmlzaWJpbGl0eSBzZXQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIFRoZSB0YWIgaXMgbWFya2VkIGFzIHNlbGVjdGVkL2Rlc2VsZWN0ZWQgYXMgYXBwcm9wcmlhdGUgYW5kIGl0cyB0YWJpbmRleCBpcyBzZXQgdG8gY29udHJvbCBmb2N1c2FiaWxpdHkgYmFzZWQgb24gaWYgdGhlIHRhYiBpc1xuICAgKiBzZWxlY3RlZCAod2lsbCByZWNlaXZlIGZvY3VzIHVzaW5nIHRoZSBrZXlib2FyZCkgb3Igbm90ICh3aWxsIG5vdCByZWNlaXZlIGZvY3VzIHVzaW5nIHRoZSBrZXlib2FyZCkuXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIHRhYlxuICAgKiBAcGFyYW0gc2VsZWN0ZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc2V0VGFiU2VsZWN0aW9uKHRhYjogVGFiQ29tcG9uZW50LCBzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0YWIucm91dGVUbyAmJiBzZWxlY3RlZCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0YWIucm91dGVUbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0Q29udHJvbGxlZEVsZW1lbnRWaXNpYmlsaXR5KHRhYi5jb250cm9scywgc2VsZWN0ZWQpO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRhYi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB0YWIudGFiaW5kZXggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWIuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRhYi50YWJpbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIHRhYnMuICBJZiB0aGUgdGFiIGlzIG5vdCBhbHJlYWR5IHNlbGVjdGVkLCB0aGVuIGl0IHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIHRhYlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVDbGlja0V2ZW50KHRhYjogVGFiQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKCF0YWIuZGlzYWJsZWQgJiYgIXRhYi5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RUYWIodGFiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBrZXlib2FyZCBldmVudHMgb24gdGhlIGluZGl2aWR1YWwgdGFicywgc3BlY2lmaWNhbGx5OiBBcnJvd1JpZ2h0LCBBcnJvd0xlZnQsIEhvbWUsIGFuZCBFbmQuICBUaGVzZSBrZXlib2FyZCBldmVudHMgY29udHJvbFxuICAgKiB3aGljaCB0YWIgaGFzIGZvY3VzLlxuICAgKlxuICAgKiBJZiB0aGlzIHRhYiBsaXN0IGlzIGNvbmZpZ3VyZWQgdG8gYXV0b0FjdGl2ZSwgdGhlbiB0aGUgYXBwcm9wcmlhdGUgdGFiIHdpbGwgYmUgc2VsZWN0ZWQgd2hlbiBpdCByZWNlaXZlcyBmb2N1cy5cbiAgICpcbiAgICogQGlnbm9yZVxuICAgKiBAcGFyYW0gZXZlbnRUYWJcbiAgICogQHBhcmFtIGlkeFxuICAgKiBAcGFyYW0ga2V5RXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlS2V5Ym9hcmRFdmVudChldmVudFRhYjogVGFiQ29tcG9uZW50LCBpZHg6IG51bWJlciwga2V5RXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcblxuICAgIGxldCBmb2N1c0lkeCA9IC0xO1xuXG4gICAgLy8gaWRlbnRpZnkgdGhlIHRhYiB0aGF0IHNob3VsZCByZWNlaXZlIGZvY3VzIGJhc2VkIG9uIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZFxuXG4gICAgaWYgKGtleUV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBmb2N1c0lkeCA9IHRoaXMuZ2V0TmV4dE9yRmlyc3RUYWJJbmRleChpZHgpO1xuICAgIH0gZWxzZSBpZiAoa2V5RXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgZm9jdXNJZHggPSB0aGlzLmdldFByZXZpb3VzT3JMYXN0VGFiKGlkeCk7XG4gICAgfSBlbHNlIGlmIChrZXlFdmVudC5rZXkgPT09ICdIb21lJykge1xuICAgICAgZm9jdXNJZHggPSB0aGlzLmdldEZpcnN0VGFiSW5kZXgoKTtcbiAgICB9IGVsc2UgaWYgKGtleUV2ZW50LmtleSA9PT0gJ0VuZCcpIHtcbiAgICAgIGZvY3VzSWR4ID0gdGhpcy5nZXRMYXN0VGFiSW5kZXgoKTtcbiAgICB9XG5cbiAgICBpZiAoZm9jdXNJZHggIT09IC0xKSB7XG5cbiAgICAgIC8vIGlmIHRoZSB0YWJsaXN0IGlzIGNvbmZpZ3VyZWQgdG8gYXV0b21hdGljYWxseSBzZWxlY3QgdGhlIHRhYiB1cG9uIGZvY3VzLCB0aGVuIHNlbGVjdCB0aGUgdGFiXG5cbiAgICAgIGlmICh0aGlzLmF1dG9BY3RpdmF0ZSkge1xuICAgICAgICBjb25zdCBuZXh0VGFiID0gdGhpcy50YWJzLnRvQXJyYXkoKVtmb2N1c0lkeF07XG4gICAgICAgIGlmICghbmV4dFRhYi5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMudGFicy50b0FycmF5KClbZm9jdXNJZHhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgZm9jdXMgdG8gdGhlIHRhYlxuICAgICAgdGhpcy50YWJJdGVtcy50b0FycmF5KClbZm9jdXNJZHhdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAga2V5RXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBuZXh0IHRhYiwgc3RhcnRpbmcgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBpbiB0aGUgdGFiIGxpc3QuXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIHRhYnNcbiAgICogQHBhcmFtIHN0YXJ0SWR4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGdldE5leHRUYWJJbmRleCh0YWJzOiBUYWJDb21wb25lbnRbXSwgc3RhcnRJZHg6IG51bWJlcik6IG51bWJlciB7XG5cbiAgICBjb25zdCBzYWZlU3RhcnRJZHggPSB0aGlzLmNsYW1wVGFiSW5kZXgoc3RhcnRJZHgpO1xuXG4gICAgZm9yIChsZXQgaSA9IHNhZmVTdGFydElkeDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgcHJldmlvdXMgdGFiLCBzdGFydGluZyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGluIHRoZSB0YWIgbGlzdC5cbiAgICpcbiAgICogQGlnbm9yZVxuICAgKiBAcGFyYW0gdGFic1xuICAgKiBAcGFyYW0gc3RhcnRJZHhcbiAgICovXG4gIHByaXZhdGUgZ2V0UHJldmlvdXNUYWJJbmRleCh0YWJzOiBUYWJDb21wb25lbnRbXSwgc3RhcnRJZHg6IG51bWJlcik6IG51bWJlciB7XG5cbiAgICBjb25zdCBzYWZlU3RhcnRJZHggPSB0aGlzLmNsYW1wVGFiSW5kZXgoc3RhcnRJZHgpO1xuXG4gICAgZm9yIChsZXQgaSA9IHNhZmVTdGFydElkeDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgZmlyc3QgdGFiIGluIHRoZSBsaXN0IG9mIHByb3ZpZGVkIHRhYnNcbiAgICpcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRGaXJzdFRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmV4dFRhYkluZGV4KHRoaXMudGFicy50b0FycmF5KCksIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBsYXN0IHRhYiBpbiB0aGUgbGlzdCBvZiBwcm92aWRlZCB0YWJzLlxuICAgKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIGdldExhc3RUYWJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFByZXZpb3VzVGFiSW5kZXgodGhpcy50YWJzLnRvQXJyYXkoKSwgdGhpcy50YWJzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZSB0aGF0IGluZGV4IGlzIHdpdGhpbiB0aGUgYXBwcm9wcmlhdGUgcmFuZ2UgZm9yIHRoZSBudW1iZXIgb2YgdGFicyB0aGF0IHdlIGhhdmUuXG4gICAqXG4gICAqIFRoZSBtYXggZnVuY3Rpb24gaXMgYWNjb3VudGluZyBmb3IgdGhlIE5hTiB2YWx1ZSB3aXRoIHRoZSBgfHwgMGAgcG9ydGlvbiBvZiB0aGUgZXhwcmVzc2lvbiB0b1xuICAgKiBhbiBpbmZpbml0ZSBsb29wIHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTi5cbiAgICpcbiAgICogKHBlciBBbmd1bGFyIE1hdGVyaWFsIFRhYnMgY29kZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9ibG9iL21hc3Rlci9zcmMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAudHMpXG4gICAqXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGNsYW1wVGFiSW5kZXgoaW5kZXg6IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnRhYnMubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIG5leHQgdGFiIGluIHRoZSBsaXN0IG9mIHRhYnMgcHJvdmlkZWQuXG4gICAqXG4gICAqIFRoZSBzZWFyY2ggd2lsbCBiZWdpbiBhdCB0aGUgcG9zaXRpb24gaW4gdGhlIGxpc3Qgd2hlcmUgdGhlIHByb3ZpZGVkIHRhYiBpcyBsb2NhdGVkIGFuZCB0aGUgc2VhcmNoXG4gICAqIHdpbGwgd3JhcCBhcm91bmQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgcHJvdmlkZWQgbGlzdCBvZiB0YWJzLlxuICAgKlxuICAgKiBAcGFyYW0gc3RhcnRJZHggdGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gdXNlIGFzIGEgc3RhcnRpbmcgcG9pbnQgZm9yIGZpbmRpbmcgdGhlIG5leHQgdGFiXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgZ2V0TmV4dE9yRmlyc3RUYWJJbmRleChzdGFydElkeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YWJzQXJyID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICBjb25zdCBpZHggPSB0aGlzLmdldE5leHRUYWJJbmRleCh0YWJzQXJyLCBzdGFydElkeCArIDEpO1xuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXROZXh0VGFiSW5kZXgodGFic0FyciwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIHByZXZpb3VzIHRhYiBpbiB0aGUgbGlzdCBvZiB0YWJzIHByb3ZpZGVkLlxuICAgKlxuICAgKiBUaGUgc2VhcmNoIHdpbGwgYmVnaW4gYXQgdGhlIHBvc2l0aW9uIGluIHRoZSBsaXN0IHdoZXJlIHRoZSBwcm92aWRlZCB0YWIgaXMgbG9jYXRlZCBhbmQgdGhlIHNlYXJjaFxuICAgKiB3aWxsIHdyYXAgYXJvdW5kIHRvIHRoZSBlbmQgb2YgdGhlIHByb3ZpZGVkIGxpc3Qgb2YgdGFicy5cbiAgICpcbiAgICogQHBhcmFtIHN0YXJ0SWR4XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgZ2V0UHJldmlvdXNPckxhc3RUYWIoc3RhcnRJZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGFic0FyciA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5nZXRQcmV2aW91c1RhYkluZGV4KHRhYnNBcnIsIHN0YXJ0SWR4IC0gMSk7XG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFByZXZpb3VzVGFiSW5kZXgodGFic0FyciwgdGFic0Fyci5sZW5ndGggLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==