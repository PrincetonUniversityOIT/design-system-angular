import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Router } from '@angular/router';
/**
 * The TabComponent represents a single tab in a list of tabs.
 *
 * This component mostly serves as a data structure, but also helps to expose the API through the jazz-tab element.
 * @example
 `` `
     <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
 `` `
 */
import * as ɵngcc0 from '@angular/core';
export declare class TabComponent {
    /**
     * The tabindex of this tab.  This value should never be set by the user because it is controlled by the TabsComponent.
     *
     * @ignore
     */
    tabindex: number;
    /**
     * Indicates if the tab is disabled.
     */
    disabled: boolean;
    /**
     * The label for the tab.
     */
    label: string;
    /**
     * The HTML id of the element/section within the HTML document that is controlled by this tab.
     */
    controls: string;
    /**
     * The HTML aria-label for this tab.
     */
    ariaLabel: any;
    /**
     * The HTML aria-labelledby for this tab.
     */
    ariaLabelledby: any;
    /**
     * Indicates if the tab is selected.  Only one tab in a set of tabs should be selected at any given time.
     */
    selected: boolean;
    /**
     * The url route to routeTo when this tab is selected.
     */
    routeTo: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabComponent, "jazz-tab", never, { "disabled": "disabled"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "selected": "selected"; "label": "label"; "controls": "controls"; "routeTo": "routeTo"; }, {}, never, never>;
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
export declare class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
    private router;
    /**
     * The list of TabComponent objects that are contained in this tab list.
     *
     * @ignore
     */
    tabs: QueryList<TabComponent>;
    /**
     * The list of tab elements that are contained in this tab list.
     *
     * @ignore
     * @private
     */
    private tabItems;
    /**
     * @ignore
     */
    private _tabsChangeSubscription;
    /**
     * Internal variable for tracking if this component will automatically select tabs when they receive focus.
     *
     * @ignore
     */
    private _autoActivate;
    /**
     * The id of the list of tabs for use in generating the HTML id of the wrapping element.
     *
     * @ignore
     */
    private readonly _elementId;
    /**
     * Internal variable for tracking if this component will show buttons or links
     *
     * @ignore
     */
    private _useButtons;
    /**
     * Controls if a tab will become selected when it receives focus.
     */
    get autoActivate(): boolean;
    set autoActivate(value: boolean);
    /**
     * Controls if a tab will use buttons or links
     */
    get useButtons(): boolean;
    set useButtons(value: boolean);
    /**
     * Returns the list of TabComponent components that are part of this tab list.
     */
    getTabs(): TabComponent[];
    constructor(router: Router);
    ngOnInit(): void;
    /**
     * During this Angular lifecycle phase, the tabs are initialized and a subscription is established for listening for tab changes.
     */
    ngAfterContentInit(): void;
    /**
     * Subscriptions are released and resource handles are destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Initializes the tabs by identifying the tab that should be selected.
     *
     * The logic accounts for the case where multiple tabs are marked as selected by selecting only the first tab that is marked as selected.
     * The logic also accounts for the case where the selected tab is disabled (selected tabs cannot be disabled) by selecting the first
     * tab in the list of tabs.
     *
     * @ignore
     */
    private initializeTabs;
    /**
     * Generates the HTML id for the tab list wrapping element.
     *
     * @ignore
     */
    getTabListId(): string;
    /**
     * Generates the id of an individual tab.
     *
     * @ignore
     */
    private getTabId;
    /**
     * Changes the visibility of the specified element (which is controlled by the selected tab).
     *
     * @ignore
     * @param controlledElementId the HTML id of the controlled element
     * @param shown indicates if the element should be expanded (shown) or not (hidden)
     * @private
     */
    private setControlledElementVisibility;
    /**
     * De-select all tabs in tablist, except the tab provided.
     *
     * @ignore
     * @param exceptTab
     */
    private deselectAllOtherButtonsInTablist;
    /**
     * Selects the specified tab.  By selecting a tab, all other tabs are deselected.
     *
     * @param tab the tab to be selected
     */
    selectTab(tab: TabComponent): void;
    /**
     * Delselects the specified tab.
     *
     * @param tab the tab to be deselected
     */
    deselectTab(tab: TabComponent): void;
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
    private setTabSelection;
    /**
     * Handles click events on individual tabs.  If the tab is not already selected, then it will be selected.
     *
     * @ignore
     * @param tab
     * @private
     */
    private handleClickEvent;
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
    private handleKeyboardEvent;
    /**
     * Finds the next tab, starting at the specified index in the tab list.
     *
     * @ignore
     * @param tabs
     * @param startIdx
     * @private
     */
    private getNextTabIndex;
    /**
     * Finds the previous tab, starting at the specified index in the tab list.
     *
     * @ignore
     * @param tabs
     * @param startIdx
     */
    private getPreviousTabIndex;
    /**
     * Finds the first tab in the list of provided tabs
     *
     * @ignore
     */
    private getFirstTabIndex;
    /**
     * Finds the last tab in the list of provided tabs.
     *
     * @ignore
     */
    private getLastTabIndex;
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
    private clampTabIndex;
    /**
     * Find the next tab in the list of tabs provided.
     *
     * The search will begin at the position in the list where the provided tab is located and the search
     * will wrap around to the beginning of the provided list of tabs.
     *
     * @param startIdx the index of the tab to use as a starting point for finding the next tab
     * @ignore
     */
    private getNextOrFirstTabIndex;
    /**
     * Find the previous tab in the list of tabs provided.
     *
     * The search will begin at the position in the list where the provided tab is located and the search
     * will wrap around to the end of the provided list of tabs.
     *
     * @param startIdx
     * @ignore
     */
    private getPreviousOrLastTab;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabsComponent, "jazz-tabs", never, { "autoActivate": "autoActivate"; "useButtons": "useButtons"; }, {}, ["tabs"], never>;
}

//# sourceMappingURL=tabs.component.d.ts.map