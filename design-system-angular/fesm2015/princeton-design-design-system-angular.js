import { Component, ContentChildren, ElementRef, Input, NgModule, EventEmitter, Output, ViewContainerRef, ViewChild, ChangeDetectorRef, ContentChild, HostListener, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

const prefix = 'jazz';

const ARIA_EXPANDED$2 = 'aria-expanded';
const ARIA_CONTROLS$1 = 'aria-controls';
const HIDDEN$1 = 'hidden';
class UtilityFunctions {
    static select(selector, context) {
        if (typeof selector !== 'string') {
            return [];
        }
        if (!context || !this.isElement(context)) {
            context = window.document; // eslint-disable-line no-param-reassign
        }
        const selection = context.querySelectorAll(selector);
        return Array.prototype.slice.call(selection);
    }
    static isElement(value) {
        return value && typeof value === 'object' && value.nodeType === 1;
    }
    static selectClosestTo(targetSelector, closestToSelector, context) {
        const elements = UtilityFunctions.select(targetSelector, context);
        return elements.filter((element) => element.closest(closestToSelector) === context);
    }
    static toggleControl(target, expanded, attribute) {
        const safeAttribute = attribute || ARIA_EXPANDED$2;
        let safeExpanded = expanded;
        if (typeof safeExpanded !== 'boolean') {
            // invert the existing button value
            safeExpanded = target.getAttribute(safeAttribute) === 'false';
        }
        target.setAttribute(safeAttribute, safeExpanded.toString());
        const controlledElementId = target.getAttribute(ARIA_CONTROLS$1);
        if (controlledElementId) {
            const controlledElement = document.getElementById(controlledElementId);
            if (!controlledElement) {
                throw new Error(`aria-controls is not properly configured: ${controlledElementId}`);
            }
            if (safeExpanded) {
                controlledElement.removeAttribute(HIDDEN$1);
            }
            else {
                controlledElement.setAttribute(HIDDEN$1, '');
            }
        }
        return safeExpanded;
    }
}

const ACCORDION_SELECTOR = `.${prefix}-accordion`;
const ACCORDION_BUTTON_SELECTOR = `.${prefix}-accordion__button`;
const ACCORDION_MULTISELECTABLE_CLASSNAME = `${prefix}-accordion-multiselectable`;
const ACCORDION_CONTENT_EXPANDED_CLASSNAME = `${prefix}-accordion__content--expanded`;
const ARIA_CONTROLS = 'aria-controls';
const HIDDEN = 'hidden';
/**
 * An Accordion is a vertically stacked set of headings that each control the visibility of an associated content section.
 *
 * <example-url>http://localhost:4200/jazz-design-system/#/accordion/accordionExample</example-url>
 * @example
 ```
 <jazz-accordion>
 <h2>
 <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content1">
 Sed porttitor lectus nibh?
 </button>
 </h2>
 <div class="jazz-accordion__content" id="content1" hidden>
 Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
 pellentesque nec, egestas non nisi.
 </div>
 <h2>
 <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="true" aria-controls="content2">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta?
 </button>
 </h2>
 <div aria-hidden="false" class="jazz-accordion__content" id="content2">
 Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
 et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
 Cras ultricies ligula sed magna dictum porta.
 </div>
 </jazz-accordion>
 ```
 */
class AccordionComponent {
    constructor() {
        this.showBorder = false;
        this.multiSelect = true;
        /**
         * Delegreater file
         */
        this.isElement = (value) => {
            return value && typeof value === 'object' && value.nodeType === 1;
        };
        this.select = (selector, context) => {
            if (typeof selector !== 'string') {
                return [];
            }
            if (!context || !this.isElement(context)) {
                context = window.document; // eslint-disable-line no-param-reassign
            }
            const selection = context.querySelectorAll(selector);
            return Array.prototype.slice.call(selection);
        };
        this.selectClosestTo = (targetSelector, closestToSelector, context) => {
            const elements = this.select(targetSelector, context);
            return elements.filter((element) => element.closest(closestToSelector) === context);
        };
        this.getButtonMatchingContent = (button, accordion) => {
            const matchVal = button.getAttribute('aria-controls');
            return accordion.querySelector(`#${matchVal}`);
        };
        this.getAccordionButtons = (accordion) => {
            return this.selectClosestTo(ACCORDION_BUTTON_SELECTOR, ACCORDION_SELECTOR, accordion);
        };
        this.closeExpandedContents = (accordion, clickedButton) => {
            return this.getAccordionButtons(accordion).forEach((button) => {
                if (button !== clickedButton) {
                    this.toggleControl(button, false);
                    this.getButtonMatchingContent(button, accordion).classList.remove(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
                }
            });
        };
        /**
         * This click method is added as a click listener for all the jazzAccordionButtons buttons.
         */
        this.click = (event) => {
            const button = event.target;
            const accordionEl = button.closest(ACCORDION_SELECTOR);
            const multiselectable = accordionEl.classList.contains(ACCORDION_MULTISELECTABLE_CLASSNAME);
            const expanded = this.toggleControl(button, null);
            const content = this.getButtonMatchingContent(button, accordionEl);
            if (expanded) {
                if (!multiselectable) {
                    this.closeExpandedContents(accordionEl, button);
                }
                content.classList.add(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
            }
            else {
                content.classList.remove(ACCORDION_CONTENT_EXPANDED_CLASSNAME);
            }
            event.stopImmediatePropagation();
        };
        /**
         * The toggleControl method hides and shows the content associated with the button.
         */
        this.toggleControl = (target, expanded) => {
            let safeExpanded = expanded;
            if (typeof safeExpanded !== 'boolean') {
                // invert the existing button value
                safeExpanded = target.getAttribute(ARIA_EXPANDED$2) === 'false';
            }
            target.setAttribute(ARIA_EXPANDED$2, safeExpanded.toString());
            const controlledElementId = target.getAttribute(ARIA_CONTROLS);
            const controlledElement = document.getElementById(controlledElementId);
            if (!controlledElement) {
                throw new Error(`aria-controls is not properly configured: ${controlledElementId}`);
            }
            return safeExpanded;
        };
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.accordionButtons.forEach((btn) => {
            btn.nativeElement.addEventListener('click', this.click);
        });
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-accordion',
                template: "<div class=\"jazz-accordion\n     {{ showBorder && 'jazz-accordion--bordered' }}\n     {{ multiSelect && 'jazz-accordion-multiselectable' }}\"\n     role=\"region\">\n  <ng-content></ng-content>\n</div>\n"
            },] }
];
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    accordionButtons: [{ type: ContentChildren, args: ['jazzAccordionButtons', { descendants: true, read: ElementRef },] }],
    showBorder: [{ type: Input }],
    multiSelect: [{ type: Input }]
};

class AccordionModule {
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AccordionComponent
                ],
                exports: [
                    AccordionComponent
                ]
            },] }
];

/**
 * Alerts inform users about important changes or conditions in the interface. Use this component if you need to capture user’s attention in a prominent way.
 *
 * @example
  `` `
  <jazz-alert heading='Alerts' title="Alert Title" (onClose)="onClose($event)">
     <p>This is the alert content</p>
  </jazz-alert>
  `` `
 */
class AlertComponent {
    constructor() {
        this.onClose = new EventEmitter();
    }
    /**
     * The close method can be used to programmatically close the alert.
     */
    close() {
        this.onClose.emit(true);
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-alert',
                template: "<section class=\"jazz-alert-section\">\n  <h2 class=\"jazz-alert-section__heading jazz-visually-hidden\">{{ heading }}</h2>\n  <div class=\"jazz-alert-section__content\">\n    <div class=\"jazz-row\">\n      <h3 class=\"jazz-alert-section__title\">{{ title }}</h3>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <a title=\"Hide alert with title {{ title }} until it is updated\" class=\"jazz-alert-section__close\" role=\"button\" (click)=\"close()\">X</a>\n</section>\n"
            },] }
];
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    heading: [{ type: Input }],
    title: [{ type: Input }],
    content: [{ type: Input }],
    onClose: [{ type: Output }]
};

class AlertModule {
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AlertComponent
                ],
                exports: [
                    AlertComponent
                ]
            },] }
];

/**
 * Each link in the Breadcrumbs provides quick navigation to related pages in the site hierarchy.
 *
 * @example
 `` `
     <jazz-breadcrumb url="/" label="Home"></jazz-breadcrumb>
 `` `
 */
class BreadcrumbComponent {
    constructor() {
        this.disabled = false;
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-breadcrumb',
                template: ``
            },] }
];
BreadcrumbComponent.propDecorators = {
    disabled: [{ type: Input }],
    label: [{ type: Input }],
    url: [{ type: Input }],
    iconClass: [{ type: Input }]
};
/**
 * Breadcrumbs are a hierarchical list of links that indicate where the current page is situated within the overall
 * information architecture.
 *
 * <example-url>http://localhost:4200/jazz-design-system/#/breacrumbs/breadcrumbsExample</example-url>
 * @example
 `` `
    <jazz-breadcrumbs>
       <jazz-breadcrumb url="/" label="Home"></jazz-breadcrumb>
       <jazz-breadcrumb url="/mainMenu1" label="Main Menu 1"></jazz-breadcrumb>
       <jazz-breadcrumb url="/level2item1" label="Level 2 Menu 1"></jazz-breadcrumb>
       <jazz-breadcrumb url="/level3item1" label="Level 3 Menu 1"></jazz-breadcrumb>
  </jazz-breadcrumbs>
 `` `
 */
class BreadcrumbsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    /**
     * The isActiveRoute method can be used to check if the current route is the active route.
     */
    isActiveRoute(url) {
        return this.router.isActive(url, true);
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-breadcrumbs',
                template: "<nav class=\"jazz-breadcrumb\" aria-label=\"Breadcrumbs\">\n  <ol>\n    <li *ngFor=\"let crumb of breadcrumbs\">\n      <i *ngIf=\"crumb.iconClass\" class=\"jazz-icon {{crumb.iconClass}}\"></i>\n      <a *ngIf=\"crumb.url && !isActiveRoute(crumb.url)\" [routerLink]=\"crumb.url\" routerLinkActive=\"active\" #crumbLink=\"routerLinkActive\"\n         [routerLinkActiveOptions]=\"{ exact: true }\"\n         [attr.aria-current]=\"crumbLink.isActive ? 'page' : undefined\">{{crumb.label}}\n      </a>\n\n      <span *ngIf=\"isActiveRoute(crumb.url)\"\n            [attr.aria-current]=\"isActiveRoute(crumb.url) ? 'page' : undefined\">\n        {{crumb.label}}\n      </span>\n    </li>\n  </ol>\n</nav>\n",
                styles: [""]
            },] }
];
BreadcrumbsComponent.ctorParameters = () => [
    { type: Router }
];
BreadcrumbsComponent.propDecorators = {
    breadcrumbs: [{ type: ContentChildren, args: [BreadcrumbComponent,] }]
};

class BreadcrumbsModule {
}
BreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule
                ],
                declarations: [
                    BreadcrumbComponent,
                    BreadcrumbsComponent
                ],
                exports: [
                    BreadcrumbComponent,
                    BreadcrumbsComponent
                ]
            },] }
];

class MainMenuItemComponent {
}
MainMenuItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-main-menu-item',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
MainMenuItemComponent.propDecorators = {
    url: [{ type: Input }],
    externalUrl: [{ type: Input }],
    label: [{ type: Input }],
    shownByDefault: [{ type: Input }],
    menuComponents: [{ type: ContentChildren, args: [MainMenuItemComponent, { descendants: false },] }]
};

class MainMenuComponent {
}
MainMenuComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-main-menu',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
MainMenuComponent.propDecorators = {
    menuComponents: [{ type: ContentChildren, args: [MainMenuItemComponent, { descendants: false },] }]
};

const ARIA_EXPANDED$1 = 'aria-expanded';
// Main Menu Selectors
const MENU_SELECTOR = `.${prefix}-menubar`;
const MENU_BUTTON_SELECTOR = `.${prefix}-menu__menu-toggle`;
const HEADER_NAV_SELECTOR = `.${prefix}-menu__nav-container`;
const MENU_MAIN_MENU_SELECTOR = `.${prefix}-menu__main-menu-navbar`;
// Submenu Selectors
const HEADER_SUB_MENU_SELECTOR = `.${prefix}-menu__submenu-toggle`;
// Used to conditionally hide and show menu to handle hovers + click open
const MENU_STICKY_STYLE = `${prefix}-menubar--stuck`;
const MENU_HIDE_STYLE = `${prefix}-menubar--hide`;
// Styles to show menu in low resolution view
const MENU_NAV_EXPANDED_STYLE = `${prefix}-menu__nav-container--expanded`;
const MENU_SUB_NAV_EXPANDED_STYLE = `${prefix}-menu__subnav-container--expanded`;
// Styles to show menu in high resolution view
const MENUBAR_SHOWN_STYLE = `${prefix}-menubar--shown`;
const MENUBAR_SUB_SHOWN_STYLE = `${prefix}-menubar_submenu--shown`;
// Icons
const ICON_SELECTOR$1 = `.${prefix}-icon`;
const ICON_CLOSE$1 = `${prefix}-icon-close`;
const ICON_MENU = `${prefix}-icon-menu`;
// Id used to identify recently closed sub nav
const MENU_RECENTLY_OPENED_ID = `${prefix}-menu:recentlyOpened`;

// Main Menu Selectors
const HEADER_SELECTOR = `.${prefix}-header`;
// Search Selectors
const SEARCH_PANEL = `.${prefix}-header__search-bar-panel`;
const SEARCH_SELECTOR = `.${prefix}-header__search-bar-toggle`;
// Styles to show menu in high resolution view
const SEARCH_SHOWN_STYLE = `${prefix}-header__search-bar-panel--shown`;
// Icons
const ICON_SELECTOR = `.${prefix}-icon`;
const ICON_CLOSE = `${prefix}-icon-close`;
const ICON_SEARCH = `${prefix}-icon-search`;

class SearchButtonComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.searchButtonTemplate);
    }
    onSearchClick(event) {
        const button = event.target;
        const expandedAttr = button.getAttribute(ARIA_EXPANDED$1);
        const expand = !(expandedAttr && expandedAttr === 'true');
        this.showSearch(expand, button);
        event.stopImmediatePropagation();
    }
    onMainMenuSearchIconClick(event) {
        const icon = event.target;
        const button = icon.closest('button');
        const expandedAttr = button.getAttribute(ARIA_EXPANDED$1);
        const expand = !(expandedAttr && expandedAttr === 'true');
        this.showSearch(expand, button);
        event.stopImmediatePropagation();
    }
    showSearch(expand, button) {
        // This makes sure regardless of which button is picked that the search elements are expanded/hidden
        const headerEl = button.closest(HEADER_SELECTOR);
        const searchToggleIcon = button.querySelector(ICON_SELECTOR$1);
        const searchbar = headerEl.querySelector(SEARCH_PANEL);
        if (expand) {
            searchbar.classList.add(SEARCH_SHOWN_STYLE);
            button.setAttribute(ARIA_EXPANDED$1, 'true');
            searchToggleIcon.classList.remove(ICON_SEARCH);
            searchToggleIcon.classList.add(ICON_CLOSE$1);
            const input = searchbar.querySelector("input[type='search']");
            input.focus();
        }
        else {
            searchbar.classList.remove(SEARCH_SHOWN_STYLE);
            button.setAttribute(ARIA_EXPANDED$1, 'false');
            searchToggleIcon.classList.remove(ICON_CLOSE$1);
            searchToggleIcon.classList.add(ICON_SEARCH);
        }
    }
}
SearchButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'jazz-search-button',
                template: "<ng-template #searchButtonTemplate>\n  <button class=\"jazz-header__search-bar-toggle\" (click)='onSearchClick($event)'\n          aria-expanded=\"false\" aria-label=\"Search Toggle\">\n    <i class=\"jazz-icon jazz-icon-search\" aria-hidden=\"true\" (click)='onMainMenuSearchIconClick($event)'></i>\n  </button>\n</ng-template>\n"
            },] }
];
SearchButtonComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
SearchButtonComponent.propDecorators = {
    searchButtonTemplate: [{ type: ViewChild, args: ['searchButtonTemplate', { static: true },] }]
};

class UtilityItemComponent {
}
UtilityItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-item',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
UtilityItemComponent.propDecorators = {
    url: [{ type: Input }],
    externalUrl: [{ type: Input }],
    label: [{ type: Input }]
};

class UtilityMenuComponent {
}
UtilityMenuComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-menu',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
UtilityMenuComponent.propDecorators = {
    utilityMenuComponents: [{ type: ContentChildren, args: [UtilityItemComponent,] }]
};

/**
 * A header provides a way for a visitor to understand the overall context of the page or screen that they are visiting.
 * This is accomplished through clear brand identity, identification of the visitor’s authentication status, and affordances for
 * navigation to other sections of the site/application and/or  navigation to other closely related information & utilities.
 *
 * @example
 `` `
  <jazz-header [title]="'Princeton University Design System'"
               [siteBrandingName]="'RELATIVITY'" [siteBrandingUrl]="'http://www.princeton.edu'"
               [siteBrandingSlogan]="'The Princeton University Design System'" [showCompact]='false' [showSearch]='true'>
     <jazz-main-menu>
       <jazz-main-menu-item label="Main Menu 1" url="/mainMenu1">
         <jazz-main-menu-item label="Level 2 Menu 1" url="/level2item1" shownByDefault="true">
           <jazz-main-menu-item label="Level 3 Menu 1" url="/level3item1"></jazz-main-menu-item>
           <jazz-main-menu-item label="Level 3 Menu 2" url="/level3item1"></jazz-main-menu-item>
           <jazz-main-menu-item label="Level 3 Menu 3" url="/level3item1"></jazz-main-menu-item>
         </jazz-main-menu-item>
         <jazz-main-menu-item label="Level 2 Menu 2" url="/level2item1"></jazz-main-menu-item>
         <jazz-main-menu-item label="Level 2 Menu 3" url="/level2item1"></jazz-main-menu-item>
      </jazz-main-menu-item>
      <jazz-main-menu-item label="Main Menu 2" url="/mainMenu2"></jazz-main-menu-item>
      <jazz-main-menu-item label="Main Menu 3" externalUrl="http://www.microsoft.com"></jazz-main-menu-item>
     </jazz-main-menu>
     <jazz-utility-menu>
       <jazz-utility-item label="Documentation" externalUrl="http://www.google.com"></jazz-utility-item>
       <jazz-utility-item label="Log In" url="/login"></jazz-utility-item>
     </jazz-utility-menu>
   </jazz-header>
 `` `
 */
class HeaderComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.showSearch = true;
        this.showCompact = false;
    }
    onResize(event) {
        this.displayWindowSize();
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
    ngAfterContentChecked() {
        // console.log('utilityMenu', this.utilityMenu);
    }
    displayWindowSize() {
        // Search Reset
        document.querySelectorAll(SEARCH_PANEL).forEach((searchbar) => {
            searchbar.classList.remove(SEARCH_SHOWN_STYLE);
        });
        document.querySelectorAll(SEARCH_SELECTOR).forEach((button) => {
            button.setAttribute(ARIA_EXPANDED$1, 'false');
            const searchToggleIcon = button.querySelector(ICON_SELECTOR);
            searchToggleIcon.classList.remove(ICON_CLOSE);
            searchToggleIcon.classList.add(ICON_SEARCH);
        });
    }
    getSiteBrandingLogo() {
        if (this.siteBrandingLogo) {
            return this.siteBrandingLogo;
        }
        if (this.showCompact) {
            return './assets/logos/pu-logo-stacked-white.svg';
        }
        return './assets/logos/pu-shield.svg';
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-header',
                template: "<header role=\"banner\" class=\"jazz-header\" *ngIf=\"!showCompact\">\n  <h1 class=\"jazz-visually-hidden\">{{title}}</h1>\n  <div class=\"jazz-skip-links\">\n    <a href=\"#main-content\" class=\"jazz-skip-link\">Skip to main content</a>\n    <a href=\"#search\" class=\"jazz-skip-link\">Skip to search options</a>\n  </div>\n  <div class=\"jazz-container\">\n  <div class=\"jazz-header-container\">\n    <div class=\"jazz-header-right-container\">\n      <div class=\"jazz-header__utility-menu jazz-header__utility-menu--hide-small\">\n        <ul *ngIf=\"utilityMenu && utilityMenu.utilityMenuComponents && utilityMenu.utilityMenuComponents.length > 0\">\n          <li *ngFor=\"let utilityItem of utilityMenu.utilityMenuComponents\">\n            <a *ngIf=\"utilityItem.url\" [routerLink]=\"utilityItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n               [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{utilityItem.label}}</a>\n\n            <a *ngIf=\"utilityItem.externalUrl\" href=\"{{utilityItem.externalUrl}}\">{{utilityItem.label}}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"jazz-header__search-bar\" *ngIf=\"showSearch\">\n          <h2 class=\"jazz-visually-hidden\">Search</h2>\n          <jazz-search-button></jazz-search-button>\n          <div class=\"jazz-header__search-bar-panel\">\n            <form action=\"javascript:void(0)\" method=\"get\" accept-charset=\"UTF-8\" role=\"search\">\n              <label class=\"jazz-visually-hidden\" for=\"search-field\">Search</label>\n              <a id=\"search\">\n                <input type=\"search\" id=\"search-field\" placeholder=\"Search\" autocomplete=\"off\" />\n              </a>\n              <button class=\"jazz-button\" type=\"submit\">\n                <span class=\"jazz-visually-hidden\">Search</span>\n              </button>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jazz-header-break\"></div>\n  <div class=\"jazz-header__site-branding\">\n    <div class=\"jazz-header__site-branding-contents\">\n      <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\" tabindex=\"-1\" aria-hidden=\"true\" class=\"jazz-header__site-branding-home-link\">\n        <img src=\"{{ getSiteBrandingLogo() }}\" alt=\"{{ siteBrandingName }}\"/>\n      </a>\n      <div class=\"jazz-header__site-branding-info\">\n        <div class=\"jazz-header__site-branding-name\">\n          <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\">{{ siteBrandingName }}</a>\n        </div>\n        <div class=\"jazz-header__site-branding-slogan\">\n          {{ siteBrandingSlogan }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jazz-header-collapsed-header\">\n    <div class=\"jazz-container\">\n      <div class=\"jazz-header-collapsed-container\">\n        <div class=\"jazz-header-collapsed__pu-branding\">\n          <a href=\"{{ siteBrandingUrl }}\" title=\"{{title}}\"><img src=\"{{getSiteBrandingLogo()}}\" alt=\"{{title}}\" /></a>\n        </div>\n        <div class=\"jazz-header-collapsed__site-branding--divider\">\n        </div>\n        <div class=\"jazz-header-collapsed__site-branding\">\n          <div class=\"jazz-header-collapsed__site-branding-info\">\n            <div class=\"jazz-header-collapsed__site-branding-name\">\n              <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\">{{ siteBrandingName }}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <jazz-menu [menuItems]=\"mainMenu.menuComponents\" [utilityItems]=\"utilityMenu.utilityMenuComponents\">\n\n  </jazz-menu>\n  </div>\n</header>\n\n<header role=\"banner\" class=\"jazz-utility-header\" *ngIf=\"showCompact\">\n  <h1 class=\"jazz-visually-hidden\">{{ title }}</h1>\n  <div class=\"jazz-skip-links\">\n    <a href=\"#main-content\" class=\"jazz-skip-link\">Skip to main content</a>\n    <a href=\"#search\" class=\"jazz-skip-link\">Skip to search options</a>\n  </div>\n  <div class=\"jazz-container\">\n    <div class=\"jazz-utility-header__branding\">\n      <a class=\"jazz-utility-header__pu_logo\" href=\"{{ siteBrandingUrl }}\" title=\"{{ title }}\">\n        <img src=\"{{ getSiteBrandingLogo() }}\" alt=\"{{ title }}\" /></a>\n      <div class=\"jazz-div\"></div>\n      <div class=\"jazz-utility-header__site-branding\">\n        <a class=\"jazz-utility-header__site-name\" href=\"javascript:void(0);\" title=\"{{ siteBrandingName }}\" rel=\"home\">{{ siteBrandingName }}</a>\n        <div class=\"jazz-utility-header__site-slogan\">{{ siteBrandingSlogan }}</div>\n      </div>\n    </div>\n    <div class=\"jazz-utility-header__options\">\n      <section class=\"jazz-utility-header__nav\">\n        <h2 class=\"jazz-visually-hidden\">Related Links</h2>\n        <jazz-menu-main-button [buttonClass]=\"'jazz-utility-header__nav-toggle'\" [showCompact]=\"true\"></jazz-menu-main-button>\n        <nav class=\"jazz-nav\">\n          <ul>\n            <li *ngFor=\"let menuItem of utilityMenu.utilityMenuComponents\">\n              <a *ngIf=\"menuItem.url\" [routerLink]=\"menuItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n                 [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{menuItem.label}}</a>\n              <a *ngIf=\"menuItem.externalUrl\" href=\"{{menuItem.externalUrl}}\">{{menuItem.label}}</a>\n            </li>\n          </ul>\n        </nav>\n      </section>\n      <div class=\"jazz-div\"></div>\n      <section class=\"jazz-utility-header__user-options\">\n        <h2 class=\"jazz-visually-hidden\">User Options</h2>\n        <ul>\n          <li><a href=\"javascript:void(0);\">Log In</a></li>\n        </ul>\n      </section>\n    </div>\n  </div>\n</header>\n"
            },] }
];
HeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
HeaderComponent.propDecorators = {
    title: [{ type: Input }],
    siteBrandingName: [{ type: Input }],
    siteBrandingSlogan: [{ type: Input }],
    siteBrandingUrl: [{ type: Input }],
    siteBrandingLogo: [{ type: Input }],
    showSearch: [{ type: Input }],
    showCompact: [{ type: Input }],
    mainMenu: [{ type: ContentChild, args: [MainMenuComponent,] }],
    utilityMenu: [{ type: ContentChild, args: [UtilityMenuComponent,] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

class MenuComponent {
    constructor() { }
    onResize(event) {
        this.displayWindowSize();
    }
    displayWindowSize() {
        // Main Menu Reset
        document.querySelectorAll(HEADER_NAV_SELECTOR).forEach((header) => {
            header.classList.remove(MENU_NAV_EXPANDED_STYLE);
            header.querySelectorAll('ul').forEach((navbar) => {
                navbar.classList.remove(MENU_NAV_EXPANDED_STYLE);
                navbar.classList.remove(MENUBAR_SHOWN_STYLE);
                navbar.classList.remove(MENU_STICKY_STYLE);
                navbar.querySelectorAll('li').forEach((submenu) => {
                    submenu.classList.remove(MENU_STICKY_STYLE);
                    submenu.classList.remove(MENU_HIDE_STYLE);
                });
            });
        });
        document.querySelectorAll(MENU_BUTTON_SELECTOR).forEach((button) => {
            button.setAttribute(ARIA_EXPANDED$1, 'false');
            const menuToggleIcon = button.querySelector(ICON_SELECTOR$1);
            menuToggleIcon.classList.remove(ICON_CLOSE$1);
            menuToggleIcon.classList.add(ICON_MENU);
        });
        // Sub Menus Reset
        document.querySelectorAll(MENU_SELECTOR).forEach((menu) => {
            menu.querySelectorAll('ul').forEach((navbar) => {
                navbar.classList.remove(MENU_SUB_NAV_EXPANDED_STYLE);
                navbar.classList.remove(MENUBAR_SUB_SHOWN_STYLE);
            });
        });
        document.querySelectorAll(HEADER_SUB_MENU_SELECTOR).forEach((button) => {
            button.setAttribute(ARIA_EXPANDED$1, 'false');
        });
    }
    // This retrieves the appropriate button depending on the selector passed in
    getButtonForSelector(btnSelector, button, mainEl) {
        if (!button.matches(btnSelector)) {
            button = mainEl.querySelector(btnSelector);
        }
        return button;
    }
    closeSubMenus() {
        // const mainEl = event.btn.closest(MENU_MAIN_MENU_SELECTOR);
        document.querySelectorAll(HEADER_NAV_SELECTOR).forEach((mainEl) => {
            mainEl.querySelectorAll('li').forEach((navbar) => {
                navbar.querySelectorAll('ul').forEach((list) => {
                    list.classList.remove(MENU_STICKY_STYLE);
                    list.classList.add(MENU_HIDE_STYLE);
                });
            });
            // tslint:disable-next-line:no-shadowed-variable
            mainEl.querySelectorAll(HEADER_SUB_MENU_SELECTOR).forEach((button) => {
                button.setAttribute(ARIA_EXPANDED$1, 'false');
            });
        });
    }
    resetSubMenus() {
        document.querySelectorAll(HEADER_NAV_SELECTOR).forEach((mainEl) => {
            mainEl.querySelectorAll('li').forEach((navbar) => {
                navbar.querySelectorAll('ul').forEach((list) => {
                    list.classList.remove(MENU_STICKY_STYLE);
                    list.classList.remove(MENU_HIDE_STYLE);
                });
            });
        });
    }
    onMouseOut(event) {
        const li = event.target;
        if (li) {
            li.querySelectorAll('ul').forEach((subnav) => {
                if (subnav.id === MENU_RECENTLY_OPENED_ID) {
                    subnav.classList.remove(MENU_HIDE_STYLE);
                    subnav.id = '';
                }
            });
        }
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-menu',
                template: "<nav aria-label=\"Main Menu\" class=\"jazz-menu__main-menu\">\n  <h2 class=\"jazz-visually-hidden\">Main Menu</h2>\n\n  <div class=\"jazz-container\">\n    <div class=\"jazz-menu__main-menu-navbar\">\n      <jazz-menu-main-button buttonClass=\"jazz-menu__menu-toggle\" [showCompact]=\"false\"></jazz-menu-main-button>\n      <div class=\"jazz-menu__nav-container\">\n        <ul *ngIf=\"menuItems && menuItems.length > 0\" class=\"jazz-menubar\" role=\"list\">\n            <li *ngFor=\"let level1item of menuItems\" (mouseleave)=\"onMouseOut($event)\">\n              <jazz-menu-item [menuItem]=\"level1item\" (closeSubMenus)=\"closeSubMenus()\" (resetSubMenus)=\"resetSubMenus()\"></jazz-menu-item>\n            </li>\n        </ul>\n        <div class=\"jazz-header__utility-menu jazz-header__utility-menu--hide-large\">\n          <ul *ngIf=\"utilityItems && utilityItems.length > 0\">\n            <li *ngFor=\"let utilityItem of utilityItems\" >\n              <a [routerLink]=\"utilityItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n                [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{utilityItem.label}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n"
            },] }
];
MenuComponent.ctorParameters = () => [];
MenuComponent.propDecorators = {
    menuItems: [{ type: Input }],
    utilityItems: [{ type: Input }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

class MenuItemComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.closeSubMenus = new EventEmitter();
        this.resetSubMenus = new EventEmitter();
    }
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
    getClass() {
        return this.menuItem.shownByDefault ? 'jazz-menubar__submenu--shown-by-default' : '';
    }
    // Storybook arrays for some reason has the original component in the children list
    // This results in an infinite loop
    removeSelf(comp) {
        if (comp === this.menuItem) {
            return true;
        }
        return false;
    }
    close() {
        this.closeSubMenus.emit();
    }
    reset() {
        this.resetSubMenus.emit();
    }
}
MenuItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-menu-item',
                template: "<ng-template #template>\n  <a *ngIf=\"menuItem.url\" [routerLink]=\"menuItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n    [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{menuItem.label}}</a>\n  <a *ngIf=\"menuItem.externalUrl\" href=\"{{menuItem.externalUrl}}\">{{menuItem.label}}</a>\n  <jazz-sub-button [menuItem]=\"menuItem\" (closeSubMenus)=\"close()\" (resetSubMenus)=\"reset()\"></jazz-sub-button>\n  <ul *ngIf=\"menuItem && menuItem.menuComponents && menuItem.menuComponents.length > 0\" [class]=\"getClass()\">\n    <li *ngFor=\"let levelItem of menuItem.menuComponents\">\n        <jazz-menu-item *ngIf=\"!removeSelf(levelItem)\" [menuItem]=\"levelItem\"></jazz-menu-item>\n    </li>\n  </ul>\n</ng-template>\n"
            },] }
];
MenuItemComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
MenuItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['template', { static: true },] }],
    menuItem: [{ type: Input }],
    closeSubMenus: [{ type: Output }],
    resetSubMenus: [{ type: Output }]
};

const ARIA_EXPANDED = 'aria-expanded';
class MenuMainButtonComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.mainButtonTemplate);
    }
    onMainMenuClick(event) {
        const icon = event.target;
        const button = icon.closest('button');
        const expandedAttr = button.getAttribute(ARIA_EXPANDED);
        const expand = !(expandedAttr && expandedAttr === 'true');
        if (!this.showCompact) {
            this.showMenu(expand, button);
        }
        else {
            this.showUtilityMenu(expand, button);
        }
        event.stopImmediatePropagation();
    }
    // tslint:disable-next-line:typedef
    showMenu(expand, button) {
        // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
        const menuEl = button.closest(MENU_MAIN_MENU_SELECTOR);
        const menuToggleIcon = button.querySelector(ICON_SELECTOR$1);
        const navbar = menuEl.querySelector('ul');
        const navContainer = menuEl.querySelector(HEADER_NAV_SELECTOR);
        const spanEl = button.querySelector('span');
        if (expand) {
            navContainer.classList.add(MENU_NAV_EXPANDED_STYLE);
            navbar.classList.add(MENUBAR_SHOWN_STYLE);
            button.setAttribute(ARIA_EXPANDED, 'true');
            menuToggleIcon.classList.remove(ICON_MENU);
            menuToggleIcon.classList.add(ICON_CLOSE$1);
            spanEl.innerText = 'Open Navigation Menu';
        }
        else {
            navContainer.classList.remove(MENU_NAV_EXPANDED_STYLE);
            navbar.classList.remove(MENUBAR_SHOWN_STYLE);
            button.setAttribute(ARIA_EXPANDED, 'false');
            menuToggleIcon.classList.remove(ICON_CLOSE$1);
            menuToggleIcon.classList.add(ICON_MENU);
            spanEl.innerText = 'Close Navigation Menu';
        }
    }
    showUtilityMenu(expand, button) {
        const sectionEl = button.closest('.jazz-utility-header__nav');
        const iconEl = button.querySelector(ICON_SELECTOR$1);
        const spanEl = button.querySelector('span');
        if (sectionEl) {
            if (expand) {
                button.setAttribute(ARIA_EXPANDED, 'true');
                sectionEl.classList.add('jazz-expanded');
                iconEl.classList.remove(ICON_MENU);
                iconEl.classList.add(ICON_CLOSE$1);
                spanEl.innerText = 'Close Navigation Menu';
            }
            else {
                button.setAttribute(ARIA_EXPANDED, 'false');
                sectionEl.classList.remove('jazz-expanded');
                iconEl.classList.remove(ICON_CLOSE$1);
                iconEl.classList.add(ICON_MENU);
                spanEl.innerText = 'Open Navigation Menu';
            }
        }
    }
    getMenuText() {
        return this.showCompact ? '' : 'Menu';
    }
}
MenuMainButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-menu-main-button',
                template: "<ng-template #mainButtonTemplate>\n  <button class=\"{{ buttonClass }}\" (click)='onMainMenuClick($event)'\n          aria-expanded=\"false\" aria-label=\"Navigation Menu Toggle\">\n    {{getMenuText()}}<i class=\"jazz-icon jazz-icon-menu\" aria-hidden=\"true\" (click)='onMainMenuClick($event)'></i>\n    <span class=\"jazz-visually-hidden\">Open Navigation Menu</span>\n  </button>\n</ng-template>\n"
            },] }
];
MenuMainButtonComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
MenuMainButtonComponent.propDecorators = {
    mainButtonTemplate: [{ type: ViewChild, args: ['mainButtonTemplate', { static: true },] }],
    buttonClass: [{ type: Input }],
    showCompact: [{ type: Input }]
};

class MenuSubButtonComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.closeSubMenus = new EventEmitter();
        this.resetSubMenus = new EventEmitter();
    }
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.subButtonTemplate);
    }
    onSubMenuClick(event) {
        const button = event.target;
        const expandedAttr = button.getAttribute(ARIA_EXPANDED$1);
        const expand = !(expandedAttr && expandedAttr === 'true');
        this.showSubMenu(expand, button);
    }
    showSubMenu(expand, button) {
        const mq = window.matchMedia('(min-width: 900px)');
        if (mq.matches) {
            this.showSubMenuFull(expand, button);
        }
        else {
            this.showSubMenuCondensed(expand, button);
        }
    }
    showSubMenuFull(expand, button) {
        // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
        const navbar = button.closest('li');
        const navContainer = navbar.querySelector('ul');
        if (expand) {
            this.closeSubMenus.emit();
            navContainer.classList.add(MENU_STICKY_STYLE);
            navContainer.classList.remove(MENU_HIDE_STYLE);
            navbar.classList.add(MENU_STICKY_STYLE);
            button.setAttribute(ARIA_EXPANDED$1, 'true');
        }
        else {
            this.resetSubMenus.emit();
            navContainer.classList.remove(MENU_STICKY_STYLE);
            navContainer.classList.add(MENU_HIDE_STYLE);
            navContainer.id = MENU_RECENTLY_OPENED_ID;
            navbar.classList.remove(MENU_STICKY_STYLE);
            button.setAttribute(ARIA_EXPANDED$1, 'false');
        }
    }
    showSubMenuCondensed(expand, button) {
        // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
        const navbar = button.closest('li');
        const navContainer = navbar.querySelector('ul');
        if (expand) {
            navContainer.classList.add(MENU_SUB_NAV_EXPANDED_STYLE);
            navbar.classList.add(MENUBAR_SUB_SHOWN_STYLE);
            button.setAttribute(ARIA_EXPANDED$1, 'true');
        }
        else {
            navContainer.classList.remove(MENU_SUB_NAV_EXPANDED_STYLE);
            navbar.classList.remove(MENUBAR_SUB_SHOWN_STYLE);
            button.setAttribute(ARIA_EXPANDED$1, 'false');
        }
    }
}
MenuSubButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-sub-button',
                template: "<ng-template #subButtonTemplate>\n  <button *ngIf='menuItem && menuItem.menuComponents && menuItem.menuComponents.length > 0' class=\"jazz-menu__submenu-toggle\" type=\"button\" aria-expanded=\"false\" (click)='onSubMenuClick($event)'>\n    <span class=\"jazz-visually-hidden\">\n      {{menuItem.label}}\n    </span>\n  </button>\n</ng-template>\n"
            },] }
];
MenuSubButtonComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
MenuSubButtonComponent.propDecorators = {
    menuItem: [{ type: Input }],
    closeSubMenus: [{ type: Output }],
    resetSubMenus: [{ type: Output }],
    subButtonTemplate: [{ type: ViewChild, args: ['subButtonTemplate', { static: true },] }]
};

class MenuModule {
}
MenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule
                ],
                declarations: [
                    MenuComponent,
                    MenuItemComponent,
                    MenuMainButtonComponent,
                    MenuSubButtonComponent
                ],
                exports: [
                    MenuComponent,
                    MenuItemComponent,
                    MenuMainButtonComponent,
                    MenuSubButtonComponent
                ]
            },] }
];

class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MenuModule
                ],
                declarations: [
                    MainMenuComponent,
                    MainMenuItemComponent,
                    SearchButtonComponent,
                    UtilityMenuComponent,
                    UtilityItemComponent,
                    HeaderComponent
                ],
                exports: [
                    MainMenuComponent,
                    MainMenuItemComponent,
                    SearchButtonComponent,
                    UtilityMenuComponent,
                    UtilityItemComponent,
                    HeaderComponent
                ]
            },] }
];

const INPUT_SELECTORS_EXCL_CLOSE = 'a[href]:not([disabled]), button:not([disabled]):not(.jazz-modal-button__close), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
const INPUT_SELECTORS = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
/**
 * @example
 `` `
   <jazz-modal-dialog [title]="'Sample Dialog'" [buttonLabel]="'Click Me!'" (buttonClicked)="clicked()">
     This is the content of the dialog
   </jazz-modal-dialog>
 `` `
 */
class ModalDialogComponent {
    constructor() {
        this.buttonClicked = new EventEmitter();
    }
    ngOnInit() {
    }
    onAction(event) {
        if (!this.handleKeyEvents(event)) {
            return;
        }
        this.modalWrapper.nativeElement.classList.toggle('jazz-modal__wrapper--visible');
        if (this.modalWrapper.nativeElement.classList.contains('jazz-modal__wrapper--visible')) {
            this.focusOnFirstInput();
        }
        event.stopImmediatePropagation();
    }
    handleKeyEvents(event) {
        if (event instanceof KeyboardEvent) {
            const keyEvent = event;
            const isTabPressed = (keyEvent.key === 'Tab');
            const isEscPressed = (keyEvent.key === 'Escape');
            const isEnterPressed = (keyEvent.key === 'Enter');
            // Handle tab navigation to keep it within the window
            if (isTabPressed) {
                this.keepFocusWithin(keyEvent);
                return false;
            }
            // Only allow Enter and Escape Key Press
            if (!isEnterPressed && !isEscPressed) {
                return false;
            }
        }
        return true;
    }
    focusOnFirstInput() {
        const focusableEls = UtilityFunctions.select(INPUT_SELECTORS_EXCL_CLOSE, this.modalWrapper.nativeElement);
        if (focusableEls.length > 0) {
            focusableEls[0].focus();
        }
    }
    keepFocusWithin(keyEvent) {
        const focusableEls = UtilityFunctions.select(INPUT_SELECTORS, this.modalWrapper.nativeElement);
        const firstFocusableEl = focusableEls[0];
        const lastFocusableEl = focusableEls[focusableEls.length - 1];
        if (keyEvent.shiftKey) /* shift + tab */ {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                keyEvent.preventDefault();
            }
        }
        else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                keyEvent.preventDefault();
            }
        }
    }
    close() {
        this.modalWrapper.nativeElement.classList.remove('jazz-modal__wrapper--visible');
    }
    modalClick() {
        this.close();
        this.buttonClicked.emit();
    }
}
ModalDialogComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-modal-dialog',
                template: "<div class=\"jazz-modal\" role=\"region\">\n  <button class=\"jazz-btn jazz-modal__button\" (click)=\"onAction($event)\">{{ buttonLabel }}</button>\n  <div #jazzModalWrapper role=\"presentation\" class=\"jazz-modal-wrapper\" (keydown)=\"onAction($event)\">\n    <div role=\"dialog\" aria-label=\"Test Dialog with Script\" aria-modal=\"true\" class=\"jazz-modal-window jazz-modal--sm\">\n      <div class=\"jazz-modal-title\">\n        {{ title }}\n        <button class=\"jazz-modal__button jazz-modal-button__close jazz-modal-button--transparent\"\n                aria-label=\"Close modal dialog\" (click)=\"close()\"></button>\n      </div>\n      <div class=\"jazz-modal-content\" aria-labelledBy=\"jazz-modal-title\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"jazz-modal-button-container\">\n        <button class=\"jazz-btn jazz-modal__button\" (click)=\"close()\">Cancel</button>\n        <button class=\"jazz-btn jazz-modal__button\" (click)=\"modalClick()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"
            },] }
];
ModalDialogComponent.ctorParameters = () => [];
ModalDialogComponent.propDecorators = {
    buttonLabel: [{ type: Input }],
    title: [{ type: Input }],
    content: [{ type: Input }],
    buttonClicked: [{ type: Output }],
    modalWrapper: [{ type: ViewChild, args: ['jazzModalWrapper',] }]
};

class ModalDialogModule {
}
ModalDialogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ModalDialogComponent
                ],
                exports: [
                    ModalDialogComponent
                ]
            },] }
];

/**
 * The Pager allows users to navigate through a set of items or rows which have been separated into pages.
 *
 * <example-url>http://localhost:4200/jazz-design-system/#/pager/pagerSimpleExample</example-url>
 * @example
  `` `
  <jazz-pager [totalPages]="20" [currentPage]="5" (pagerChange)="changePage($event);"></jazz-pager>
   `` `
 */
class PagerComponent {
    constructor(ref) {
        this.ref = ref;
        this.pagerChange = new EventEmitter();
    }
    iterablePages() {
        this.totalPages = Number(this.totalPages);
        this.currentPage = Number(this.currentPage);
        const pages = [];
        const delta = 4;
        let maxPages = 9;
        let truncate = true;
        let pageNum = 0;
        if (this.totalPages < maxPages) {
            maxPages = this.totalPages;
            truncate = false;
            pageNum = 0;
        }
        else {
            if (this.currentPage - delta < 0) {
                pageNum = 0;
            }
            else if ((this.currentPage + delta) > (this.totalPages - 1)) {
                pageNum = this.totalPages - maxPages;
            }
            else {
                pageNum = this.currentPage - delta;
            }
        }
        for (let pageIdx = 0; pageIdx < maxPages; pageIdx++) {
            if (truncate) {
                if (pageIdx === 0) {
                    // always show the first page number
                    pages.push(0);
                }
                else if (pageIdx === 1 && pageNum !== 1) {
                    // show '...' if second page is not a 2
                    pages.push(-1);
                }
                else if (pageIdx === maxPages - 1) {
                    // always show the last page number
                    pages.push(this.totalPages - 1);
                }
                else if (pageIdx === maxPages - 2 && pageNum !== this.totalPages - 2) {
                    // show '...' if there is a gap between next to last page and last page
                    pages.push(-1);
                }
                else {
                    pages.push(pageNum);
                }
            }
            else {
                pages.push(pageNum);
            }
            pageNum++;
        }
        return pages;
    }
    /**
     * This is used to set the next page in the pager based on the page that was clicked.
     */
    setPage(page) {
        if (page >= 0 && page <= this.totalPages) {
            this.currentPage = page;
            this.pagerChange.emit(page);
            this.ref.detectChanges();
            // console.log('setPage', page, this.currentPage);
        }
    }
}
PagerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-pager',
                template: "<nav *ngIf=\"totalPages && currentPage\" class=\"jazz-pager\" role=\"navigation\" aria-label=\"pagination\">\n  <ul>\n    <li>\n      <a *ngIf=\"(currentPage != 1)\" href=\"javascript:void(0);\" (click)=\"setPage(currentPage - 1)\" data-page=\"Previous\"><i class=\"jazz-icon jazz-icon-caret-left\"></i>Previous</a>\n      <span *ngIf=\"(currentPage == 1)\" [attr.aria-disabled]=\"true\" data-page=\"Previous\"><i class=\"jazz-icon jazz-icon-caret-left\"></i>Previous</span>\n    </li>\n    <li *ngFor=\"let page of iterablePages()\" attr.aria-current=\"{{ (currentPage == (page + 1)) ?'page': ''}}\">\n      <a *ngIf=\"page >= 0\" href=\"javascript:void(0);\" (click)=\"setPage(page + 1)\"\n         attr.aria-label=\"Go to {{page + 1}}\"\n         attr.data-page=\"{{page + 1}}\">{{page + 1}}\n      </a>\n      <span *ngIf=\"page < 0\">...</span>\n    </li>\n    <li>\n      <a *ngIf=\"(currentPage != totalPages)\" href=\"javascript:void(0);\" (click)=\"setPage(currentPage+ 1)\" data-page=\"Next\">Next<i class=\"jazz-icon jazz-icon-caret-right\"></i></a>\n      <span *ngIf=\"(currentPage == totalPages)\" [attr.aria-disabled]=\"true\" data-page=\"Next\">Next<i class=\"jazz-icon jazz-icon-caret-right\"></i></span>\n    </li>\n  </ul>\n</nav>\n"
            },] }
];
PagerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PagerComponent.propDecorators = {
    totalPages: [{ type: Input, args: ['totalPages',] }],
    currentPage: [{ type: Input, args: ['currentPage',] }],
    pagerChange: [{ type: Output }]
};

class PagerModule {
}
PagerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    PagerComponent
                ],
                exports: [
                    PagerComponent
                ]
            },] }
];

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
class TabComponent {
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
class TabsComponent {
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
                controlledElement.removeAttribute(HIDDEN$1);
            }
            else {
                controlledElement.setAttribute(HIDDEN$1, '');
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

class TabsModule {
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule,
                    CommonModule
                ],
                // Don't export all components because some are only to be used internally.
                exports: [
                    TabComponent,
                    TabsComponent
                ],
                declarations: [
                    TabComponent,
                    TabsComponent
                ],
            },] }
];

/**
 * @example
 `` `
    <jazz-utility-header-link label="Google" url="https://www.google.com/"></jazz-utility-header-link>
 `` `
 */
class UtilityHeaderLinkComponent {
    constructor() {
        this.external = false;
    }
}
UtilityHeaderLinkComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-header-link',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
UtilityHeaderLinkComponent.propDecorators = {
    url: [{ type: Input }],
    label: [{ type: Input }],
    external: [{ type: Input }],
    class: [{ type: Input }],
    routerLink: [{ type: Input }]
};

/**
 * A header provides a way for a visitor to understand the overall context of the page or screen that they are visiting.
 * This is accomplished through clear brand identity, identification of the visitor’s authentication status, and affordances for
 * navigation to other sections of the site/application and/or  navigation to other closely related information & utilities.
 *
 * @example
  `` `
 <jazz-utility-header
     primaryHeading="Text Primary Heading"
     puBrandingTitle="PU Branding Title"
     siteBrandingLink="https://communications.princeton.edu"
     siteBrandingName="Site Branding Name"
     siteBrandingSlogan="Site Branding Slogan"
     siteBrandingTitle="SiteBranding Title"
     loginUrl="https://www.google.com/"
     logoutUrl="https://www.microsoft.com/"
     username=""
     [stuckDesktop]="true"
     [stuckMobile]="true"
     utilityLinksHeading="Related Links">
       <jazz-utility-header-link label="Google" url="https://www.google.com/"></jazz-utility-header-link>
       <jazz-utility-header-link label="Princeton" url="https://www.princeton.edu/"></jazz-utility-header-link>
       <jazz-utility-header-link label="Microsoft" url="https://www.microsoft.com/"></jazz-utility-header-link>
 </jazz-utility-header>
 `` `
*/
class UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */ {
    constructor() {
        this.stuckMobile = true;
        this.stuckDesktop = true;
        this.puBrandingLogo = './assets/logos/pu-logo-stacked-white.svg';
        this.utilityLinksHeading = 'Related Links';
        this.menuExpanded = false;
        this.menuButtonLabel = 'Open Navigation Menu';
    }
    toggleMenu() {
        this.menuExpanded = !this.menuExpanded;
        this.menuButtonLabel = this.menuExpanded ? 'Close Navigation Menu' : 'Open Navigation Menu';
    }
}
UtilityHeaderComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-header',
                template: `
    <header
        role="banner"
        class="jazz-utility-header"
        [class.jazz-stuck-mobile]="stuckMobile"
        [class.jazz-stuck]="stuckDesktop">
        <h1 class="jazz-visually-hidden">{{ primaryHeading }}</h1>
        <div class="jazz-container">
            <div class="jazz-utility-header__branding">
                <a class="jazz-utility-header__pu_logo" href="https://www.princeton.edu/" [title]="puBrandingTitle">
                <img [src]="puBrandingLogo" alt="Princeton University Logo" />
                </a>
                <div class="jazz-div"></div>
                <div class="jazz-utility-header__site-branding">
                    <a *ngIf="siteBrandingName" class="jazz-utility-header__site-name" [href]="siteBrandingLink" [title]="siteBrandingTitle" rel="home">{{ siteBrandingName }}</a>
                    <div *ngIf="siteBrandingSlogan" class="jazz-utility-header__site-slogan">{{ siteBrandingSlogan }}</div>

                    <ng-template [ngIf]="!officeOfTemplate" [ngIfElse]="officeOfTemplate">
                      <a *ngIf="officeOf" class="jazz-utility-header__site-name-office-of" [href]="officeOfLink" title="Office of {{officeOf}}" rel="home">Office of
                          <br/>
                          <div class="jazz-utility-header__site-name-office-of-department">{{officeOf}}</div>
                      </a>
                    </ng-template>
                </div>
            </div>
            <div class="jazz-utility-header__options">
                <section class="jazz-utility-header__nav" [class.jazz-expanded]="menuExpanded">
                    <h2 class="jazz-visually-hidden">{{ utilityLinksHeading }}</h2>
                    <button class="jazz-utility-header__nav-toggle" [attr.aria-expanded]="menuExpanded" (click)="toggleMenu()"><i class="jazz-icon jazz-icon-menu" [class.jazz-icon-menu]="!menuExpanded" [class.jazz-icon-close]="menuExpanded" aria-hidden="true"></i><span class="jazz-visually-hidden">{{ menuButtonLabel }}</span></button>
                    <nav class="jazz-nav">
                        <ul>
                            <li *ngFor="let link of links"><a [href]="link.url" class="{{link.class}}" [attr.target]="link.external ? '_blank' : null" (click)="toggleMenu()">{{ link.label }}</a></li>
                        </ul>
                    </nav>
                </section>
                <div class="jazz-div"></div>
                <section class="jazz-utility-header__user-options">
                    <h2 class="jazz-visually-hidden">User Options</h2>
                    <ng-template [ngIf]="!userOptionsTemplate" [ngIfElse]="userOptionsTemplate">
                      <ul>
                        <li *ngIf="!username"><a [href]="loginUrl">Log In</a></li>
                        <li *ngIf="username"><a [href]="logoutUrl">Log Out</a></li>
                      </ul>
                    </ng-template>
                </section>
            </div>
        </div>
    </header>
  `
            },] }
];
UtilityHeaderComponent.propDecorators = {
    links: [{ type: ContentChildren, args: [UtilityHeaderLinkComponent,] }],
    officeOfTemplate: [{ type: Input, args: ['officeOfTemplate',] }],
    userOptionsTemplate: [{ type: Input, args: ['userOptionsTemplate',] }],
    stuckMobile: [{ type: Input }],
    stuckDesktop: [{ type: Input }],
    primaryHeading: [{ type: Input }],
    puBrandingTitle: [{ type: Input }],
    puBrandingLogo: [{ type: Input }],
    siteBrandingName: [{ type: Input }],
    siteBrandingSlogan: [{ type: Input }],
    siteBrandingLink: [{ type: Input }],
    siteBrandingTitle: [{ type: Input }],
    officeOfLink: [{ type: Input }],
    officeOf: [{ type: Input }],
    utilityLinksHeading: [{ type: Input }],
    loginUrl: [{ type: Input }],
    logoutUrl: [{ type: Input }],
    username: [{ type: Input }]
};

class UtilityHeaderModule {
}
UtilityHeaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    UtilityHeaderComponent,
                    UtilityHeaderLinkComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    UtilityHeaderComponent,
                    UtilityHeaderLinkComponent
                ]
            },] }
];

class DesignSystemAngularModule {
}
DesignSystemAngularModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    AccordionModule,
                    AlertModule,
                    BreadcrumbsModule,
                    HeaderModule,
                    MenuModule,
                    ModalDialogModule,
                    PagerModule,
                    TabsModule,
                    UtilityHeaderModule
                ],
                exports: [
                    AccordionComponent,
                    AlertComponent,
                    BreadcrumbComponent,
                    BreadcrumbsComponent,
                    HeaderComponent,
                    MenuComponent,
                    MenuItemComponent,
                    MenuMainButtonComponent,
                    MenuSubButtonComponent,
                    PagerComponent,
                    ModalDialogComponent,
                    SearchButtonComponent,
                    UtilityItemComponent,
                    UtilityMenuComponent,
                    MainMenuItemComponent,
                    MainMenuComponent,
                    TabComponent,
                    TabsComponent,
                    UtilityHeaderComponent,
                    UtilityHeaderLinkComponent
                ]
            },] }
];

class MenuItem {
    constructor(label, url, subItems, shownByDefault, externalUrl) {
        this.subItems = [];
        this.label = label;
        this.url = url;
        this.externalUrl = externalUrl;
        this.subItems = subItems;
        this.shownByDefault = shownByDefault;
        this.externalUrl = externalUrl;
    }
}

/*
 * Public API Surface of design-system-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ACCORDION_CONTENT_EXPANDED_CLASSNAME, ACCORDION_MULTISELECTABLE_CLASSNAME, ARIA_CONTROLS, ARIA_EXPANDED, AccordionComponent, AlertComponent, BreadcrumbComponent, BreadcrumbsComponent, DesignSystemAngularModule, HIDDEN, HeaderComponent, MainMenuComponent, MainMenuItemComponent, MenuComponent, MenuItem, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent, ModalDialogComponent, PagerComponent, SearchButtonComponent, TabComponent, TabsComponent, UtilityHeaderComponent, UtilityHeaderLinkComponent, UtilityItemComponent, UtilityMenuComponent, AccordionModule as ɵa, AlertModule as ɵb, BreadcrumbsModule as ɵc, HeaderModule as ɵd, MenuModule as ɵe, ModalDialogModule as ɵf, PagerModule as ɵg, TabsModule as ɵh, UtilityHeaderModule as ɵi, prefix as ɵj };
//# sourceMappingURL=princeton-design-design-system-angular.js.map
