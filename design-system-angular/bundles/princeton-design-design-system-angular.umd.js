(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@princeton-design/design-system-angular', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['princeton-design'] = global['princeton-design'] || {}, global['princeton-design']['design-system-angular'] = {}), global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    var prefix = 'jazz';

    var ARIA_EXPANDED$2 = 'aria-expanded';
    var ARIA_CONTROLS$1 = 'aria-controls';
    var HIDDEN$1 = 'hidden';
    var UtilityFunctions = /** @class */ (function () {
        function UtilityFunctions() {
        }
        UtilityFunctions.select = function (selector, context) {
            if (typeof selector !== 'string') {
                return [];
            }
            if (!context || !this.isElement(context)) {
                context = window.document; // eslint-disable-line no-param-reassign
            }
            var selection = context.querySelectorAll(selector);
            return Array.prototype.slice.call(selection);
        };
        UtilityFunctions.isElement = function (value) {
            return value && typeof value === 'object' && value.nodeType === 1;
        };
        UtilityFunctions.selectClosestTo = function (targetSelector, closestToSelector, context) {
            var elements = UtilityFunctions.select(targetSelector, context);
            return elements.filter(function (element) { return element.closest(closestToSelector) === context; });
        };
        UtilityFunctions.toggleControl = function (target, expanded, attribute) {
            var safeAttribute = attribute || ARIA_EXPANDED$2;
            var safeExpanded = expanded;
            if (typeof safeExpanded !== 'boolean') {
                // invert the existing button value
                safeExpanded = target.getAttribute(safeAttribute) === 'false';
            }
            target.setAttribute(safeAttribute, safeExpanded.toString());
            var controlledElementId = target.getAttribute(ARIA_CONTROLS$1);
            if (controlledElementId) {
                var controlledElement = document.getElementById(controlledElementId);
                if (!controlledElement) {
                    throw new Error("aria-controls is not properly configured: " + controlledElementId);
                }
                if (safeExpanded) {
                    controlledElement.removeAttribute(HIDDEN$1);
                }
                else {
                    controlledElement.setAttribute(HIDDEN$1, '');
                }
            }
            return safeExpanded;
        };
        return UtilityFunctions;
    }());

    var ACCORDION_SELECTOR = "." + prefix + "-accordion";
    var MULTISELECTABLE = 'aria-multiselectable';
    var ARIA_CONTROLS = 'aria-controls';
    var HIDDEN = 'hidden';
    /**
     * An Accordion is a vertically stacked set of headings that each control the visibility of an associated content section.
     *
     * <example-url>http://localhost:4200/#/accordion/accordionExample</example-url>
     * @example
       `` `
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
       `` `
     */
    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent() {
            var _this = this;
            /**
             * This click method is added as a click listener for all the jazzAccordionButtons buttons.
             */
            this.click = function (event) {
                var button = event.target;
                var accordionEl = button.closest(ACCORDION_SELECTOR);
                var multiselectable = accordionEl.getAttribute(MULTISELECTABLE) === 'true';
                var expanded = _this.toggleControl(button, null);
                if (expanded && !multiselectable) {
                    _this.accordionButtons.forEach(function (other) {
                        if (other.nativeElement !== button) {
                            _this.toggleControl(other.nativeElement, false);
                        }
                    });
                }
                event.stopImmediatePropagation();
            };
            /**
             * The toggleControl method hides and shows the content associated with the button.
             */
            this.toggleControl = function (target, expanded) {
                var safeExpanded = expanded;
                if (typeof safeExpanded !== 'boolean') {
                    // invert the existing button value
                    safeExpanded = target.getAttribute(ARIA_EXPANDED$2) === 'false';
                }
                target.setAttribute(ARIA_EXPANDED$2, safeExpanded.toString());
                var controlledElementId = target.getAttribute(ARIA_CONTROLS);
                var controlledElement = document.getElementById(controlledElementId);
                if (!controlledElement) {
                    throw new Error("aria-controls is not properly configured: " + controlledElementId);
                }
                if (safeExpanded) {
                    controlledElement.removeAttribute(HIDDEN);
                }
                else {
                    controlledElement.setAttribute(HIDDEN, '');
                }
                return safeExpanded;
            };
        }
        AccordionComponent.prototype.ngOnInit = function () {
        };
        AccordionComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.accordionButtons.forEach(function (btn) {
                btn.nativeElement.addEventListener('click', _this.click);
            });
        };
        return AccordionComponent;
    }());
    AccordionComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-accordion',
                    template: "<div class=\"jazz-accordion\" role=\"region\">\n  <ng-content></ng-content>\n</div>\n"
                },] }
    ];
    AccordionComponent.ctorParameters = function () { return []; };
    AccordionComponent.propDecorators = {
        accordionButtons: [{ type: core.ContentChildren, args: ['jazzAccordionButtons', { descendants: true, read: core.ElementRef },] }]
    };

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        return AccordionModule;
    }());
    AccordionModule.decorators = [
        { type: core.NgModule, args: [{
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
    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
            this.onClose = new core.EventEmitter();
        }
        /**
         * The close method can be used to programmatically close the alert.
         */
        AlertComponent.prototype.close = function () {
            this.onClose.emit(true);
        };
        return AlertComponent;
    }());
    AlertComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-alert',
                    template: "<section class=\"jazz-alert-section\">\n  <h2 class=\"jazz-alert-section__heading jazz-visually-hidden\">{{ heading }}</h2>\n  <div class=\"jazz-alert-section__content\">\n    <div class=\"jazz-row\">\n      <h3 class=\"jazz-alert-section__title\">{{ title }}</h3>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <a title=\"Hide alert with title {{ title }} until it is updated\" class=\"jazz-alert-section__close\" role=\"button\" (click)=\"close()\">X</a>\n</section>\n"
                },] }
    ];
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        heading: [{ type: core.Input }],
        title: [{ type: core.Input }],
        content: [{ type: core.Input }],
        onClose: [{ type: core.Output }]
    };

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.decorators = [
        { type: core.NgModule, args: [{
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
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent() {
            this.disabled = false;
        }
        return BreadcrumbComponent;
    }());
    BreadcrumbComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-breadcrumb',
                    template: ""
                },] }
    ];
    BreadcrumbComponent.propDecorators = {
        disabled: [{ type: core.Input }],
        label: [{ type: core.Input }],
        url: [{ type: core.Input }]
    };
    /**
     * Breadcrumbs are a hierarchical list of links that indicate where the current page is situated within the overall
     * information architecture.
     *
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
    var BreadcrumbsComponent = /** @class */ (function () {
        function BreadcrumbsComponent(router) {
            this.router = router;
        }
        BreadcrumbsComponent.prototype.ngOnInit = function () {
        };
        /**
         * The isActiveRoute method can be used to check if the current route is the active route.
         */
        BreadcrumbsComponent.prototype.isActiveRoute = function (url) {
            return this.router.isActive(url, true);
        };
        return BreadcrumbsComponent;
    }());
    BreadcrumbsComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-breadcrumbs',
                    template: "<nav class=\"jazz-breadcrumb\" aria-label=\"Breadcrumbs\">\n  <ol>\n    <li *ngFor=\"let crumb of breadcrumbs\">\n      <a *ngIf=\"crumb.url && !isActiveRoute(crumb.url)\" [routerLink]=\"crumb.url\" routerLinkActive=\"active\" #crumbLink=\"routerLinkActive\"\n         [routerLinkActiveOptions]=\"{ exact: true }\"\n         [attr.aria-current]=\"crumbLink.isActive ? 'page' : undefined\">{{crumb.label}}\n      </a>\n\n      <span *ngIf=\"isActiveRoute(crumb.url)\"\n            [attr.aria-current]=\"isActiveRoute(crumb.url) ? 'page' : undefined\">\n        {{crumb.label}}\n      </span>\n    </li>\n  </ol>\n</nav>\n",
                    styles: [""]
                },] }
    ];
    BreadcrumbsComponent.ctorParameters = function () { return [
        { type: router.Router }
    ]; };
    BreadcrumbsComponent.propDecorators = {
        breadcrumbs: [{ type: core.ContentChildren, args: [BreadcrumbComponent,] }]
    };

    var BreadcrumbsModule = /** @class */ (function () {
        function BreadcrumbsModule() {
        }
        return BreadcrumbsModule;
    }());
    BreadcrumbsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule
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

    var MainMenuItemComponent = /** @class */ (function () {
        function MainMenuItemComponent() {
        }
        return MainMenuItemComponent;
    }());
    MainMenuItemComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-main-menu-item',
                    template: "\n      <ng-content></ng-content>\n  "
                },] }
    ];
    MainMenuItemComponent.propDecorators = {
        url: [{ type: core.Input }],
        externalUrl: [{ type: core.Input }],
        label: [{ type: core.Input }],
        shownByDefault: [{ type: core.Input }],
        menuComponents: [{ type: core.ContentChildren, args: [MainMenuItemComponent, { descendants: false },] }]
    };

    var MainMenuComponent = /** @class */ (function () {
        function MainMenuComponent() {
        }
        return MainMenuComponent;
    }());
    MainMenuComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-main-menu',
                    template: "\n      <ng-content></ng-content>\n  "
                },] }
    ];
    MainMenuComponent.propDecorators = {
        menuComponents: [{ type: core.ContentChildren, args: [MainMenuItemComponent, { descendants: false },] }]
    };

    var ARIA_EXPANDED$1 = 'aria-expanded';
    // Main Menu Selectors
    var MENU_SELECTOR = "." + prefix + "-menubar";
    var MENU_BUTTON_SELECTOR = "." + prefix + "-menu__menu-toggle";
    var HEADER_NAV_SELECTOR = "." + prefix + "-menu__nav-container";
    var MENU_MAIN_MENU_SELECTOR = "." + prefix + "-menu__main-menu-navbar";
    // Submenu Selectors
    var HEADER_SUB_MENU_SELECTOR = "." + prefix + "-menu__submenu-toggle";
    // Used to conditionally hide and show menu to handle hovers + click open
    var MENU_STICKY_STYLE = prefix + "-menubar--stuck";
    var MENU_HIDE_STYLE = prefix + "-menubar--hide";
    // Styles to show menu in low resolution view
    var MENU_NAV_EXPANDED_STYLE = prefix + "-menu__nav-container--expanded";
    var MENU_SUB_NAV_EXPANDED_STYLE = prefix + "-menu__subnav-container--expanded";
    // Styles to show menu in high resolution view
    var MENUBAR_SHOWN_STYLE = prefix + "-menubar--shown";
    var MENUBAR_SUB_SHOWN_STYLE = prefix + "-menubar_submenu--shown";
    // Icons
    var ICON_SELECTOR$1 = "." + prefix + "-icon";
    var ICON_CLOSE$1 = prefix + "-icon-close";
    var ICON_MENU = prefix + "-icon-menu";
    // Id used to identify recently closed sub nav
    var MENU_RECENTLY_OPENED_ID = prefix + "-menu:recentlyOpened";

    // Main Menu Selectors
    var HEADER_SELECTOR = "." + prefix + "-header";
    // Search Selectors
    var SEARCH_PANEL = "." + prefix + "-header__search-bar-panel";
    var SEARCH_SELECTOR = "." + prefix + "-header__search-bar-toggle";
    // Styles to show menu in high resolution view
    var SEARCH_SHOWN_STYLE = prefix + "-header__search-bar-panel--shown";
    // Icons
    var ICON_SELECTOR = "." + prefix + "-icon";
    var ICON_CLOSE = prefix + "-icon-close";
    var ICON_SEARCH = prefix + "-icon-search";

    var SearchButtonComponent = /** @class */ (function () {
        function SearchButtonComponent(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        SearchButtonComponent.prototype.ngOnInit = function () {
            this.viewContainerRef.createEmbeddedView(this.searchButtonTemplate);
        };
        SearchButtonComponent.prototype.onSearchClick = function (event) {
            var button = event.target;
            var expandedAttr = button.getAttribute(ARIA_EXPANDED$1);
            var expand = !(expandedAttr && expandedAttr === 'true');
            this.showSearch(expand, button);
            event.stopImmediatePropagation();
        };
        SearchButtonComponent.prototype.onMainMenuSearchIconClick = function (event) {
            var icon = event.target;
            var button = icon.closest('button');
            var expandedAttr = button.getAttribute(ARIA_EXPANDED$1);
            var expand = !(expandedAttr && expandedAttr === 'true');
            this.showSearch(expand, button);
            event.stopImmediatePropagation();
        };
        SearchButtonComponent.prototype.showSearch = function (expand, button) {
            // This makes sure regardless of which button is picked that the search elements are expanded/hidden
            var headerEl = button.closest(HEADER_SELECTOR);
            var searchToggleIcon = button.querySelector(ICON_SELECTOR$1);
            var searchbar = headerEl.querySelector(SEARCH_PANEL);
            if (expand) {
                searchbar.classList.add(SEARCH_SHOWN_STYLE);
                button.setAttribute(ARIA_EXPANDED$1, 'true');
                searchToggleIcon.classList.remove(ICON_SEARCH);
                searchToggleIcon.classList.add(ICON_CLOSE$1);
                var input = searchbar.querySelector("input[type='search']");
                input.focus();
            }
            else {
                searchbar.classList.remove(SEARCH_SHOWN_STYLE);
                button.setAttribute(ARIA_EXPANDED$1, 'false');
                searchToggleIcon.classList.remove(ICON_CLOSE$1);
                searchToggleIcon.classList.add(ICON_SEARCH);
            }
        };
        return SearchButtonComponent;
    }());
    SearchButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'jazz-search-button',
                    template: "<ng-template #searchButtonTemplate>\n  <button class=\"jazz-header__search-bar-toggle\" (click)='onSearchClick($event)'\n          aria-expanded=\"false\" aria-label=\"Search Toggle\">\n    <i class=\"jazz-icon jazz-icon-search\" aria-hidden=\"true\" (click)='onMainMenuSearchIconClick($event)'></i>\n  </button>\n</ng-template>\n"
                },] }
    ];
    SearchButtonComponent.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };
    SearchButtonComponent.propDecorators = {
        searchButtonTemplate: [{ type: core.ViewChild, args: ['searchButtonTemplate', { static: true },] }]
    };

    var UtilityItemComponent = /** @class */ (function () {
        function UtilityItemComponent() {
        }
        return UtilityItemComponent;
    }());
    UtilityItemComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-utility-item',
                    template: "\n      <ng-content></ng-content>\n  "
                },] }
    ];
    UtilityItemComponent.propDecorators = {
        url: [{ type: core.Input }],
        externalUrl: [{ type: core.Input }],
        label: [{ type: core.Input }]
    };

    var UtilityMenuComponent = /** @class */ (function () {
        function UtilityMenuComponent() {
        }
        return UtilityMenuComponent;
    }());
    UtilityMenuComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-utility-menu',
                    template: "\n      <ng-content></ng-content>\n  "
                },] }
    ];
    UtilityMenuComponent.propDecorators = {
        utilityMenuComponents: [{ type: core.ContentChildren, args: [UtilityItemComponent,] }]
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
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(cdr) {
            this.cdr = cdr;
            this.showSearch = true;
            this.showCompact = false;
        }
        HeaderComponent.prototype.onResize = function (event) {
            this.displayWindowSize();
        };
        HeaderComponent.prototype.ngAfterViewChecked = function () {
            this.cdr.detectChanges();
        };
        HeaderComponent.prototype.ngAfterContentChecked = function () {
            // console.log('utilityMenu', this.utilityMenu);
        };
        HeaderComponent.prototype.displayWindowSize = function () {
            // Search Reset
            document.querySelectorAll(SEARCH_PANEL).forEach(function (searchbar) {
                searchbar.classList.remove(SEARCH_SHOWN_STYLE);
            });
            document.querySelectorAll(SEARCH_SELECTOR).forEach(function (button) {
                button.setAttribute(ARIA_EXPANDED$1, 'false');
                var searchToggleIcon = button.querySelector(ICON_SELECTOR);
                searchToggleIcon.classList.remove(ICON_CLOSE);
                searchToggleIcon.classList.add(ICON_SEARCH);
            });
        };
        HeaderComponent.prototype.getSiteBrandingLogo = function () {
            if (this.siteBrandingLogo) {
                return this.siteBrandingLogo;
            }
            if (this.showCompact) {
                return './assets/logos/pu-logo-stacked-white.svg';
            }
            return './assets/logos/pu-shield.svg';
        };
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-header',
                    template: "<header role=\"banner\" class=\"jazz-header\" *ngIf=\"!showCompact\">\n  <h1 class=\"jazz-visually-hidden\">{{title}}</h1>\n  <div class=\"jazz-skip-links\">\n    <a href=\"#main-content\" class=\"jazz-skip-link\">Skip to main content</a>\n    <a href=\"#search\" class=\"jazz-skip-link\">Skip to search options</a>\n  </div>\n  <div class=\"jazz-container\">\n  <div class=\"jazz-header-container\">\n    <div class=\"jazz-header-right-container\">\n      <div class=\"jazz-header__utility-menu jazz-header__utility-menu--hide-small\">\n        <ul *ngIf=\"utilityMenu && utilityMenu.utilityMenuComponents && utilityMenu.utilityMenuComponents.length > 0\">\n          <li *ngFor=\"let utilityItem of utilityMenu.utilityMenuComponents\">\n            <a *ngIf=\"utilityItem.url\" [routerLink]=\"utilityItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n               [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{utilityItem.label}}</a>\n\n            <a *ngIf=\"utilityItem.externalUrl\" href=\"{{utilityItem.externalUrl}}\">{{utilityItem.label}}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"jazz-header__search-bar\" *ngIf=\"showSearch\">\n          <h2 class=\"jazz-visually-hidden\">Search</h2>\n          <jazz-search-button></jazz-search-button>\n          <div class=\"jazz-header__search-bar-panel\">\n            <form action=\"javascript:void(0)\" method=\"get\" accept-charset=\"UTF-8\" role=\"search\">\n              <label class=\"jazz-visually-hidden\" for=\"search-field\">Search</label>\n              <a id=\"search\">\n                <input type=\"search\" id=\"search-field\" placeholder=\"Search\" autocomplete=\"off\" />\n              </a>\n              <button class=\"jazz-button\" type=\"submit\">\n                <span class=\"jazz-visually-hidden\">Search</span>\n              </button>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jazz-header-break\"></div>\n  <div class=\"jazz-header__site-branding\">\n    <div class=\"jazz-header__site-branding-contents\">\n      <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\" tabindex=\"-1\" aria-hidden=\"true\" class=\"jazz-header__site-branding-home-link\">\n        <img src=\"{{ getSiteBrandingLogo() }}\" alt=\"{{ siteBrandingName }}\"/>\n      </a>\n      <div class=\"jazz-header__site-branding-info\">\n        <div class=\"jazz-header__site-branding-name\">\n          <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\">{{ siteBrandingName }}</a>\n        </div>\n        <div class=\"jazz-header__site-branding-slogan\">\n          {{ siteBrandingSlogan }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jazz-header-collapsed-header\">\n    <div class=\"jazz-container\">\n      <div class=\"jazz-header-collapsed-container\">\n        <div class=\"jazz-header-collapsed__pu-branding\">\n          <a href=\"{{ siteBrandingUrl }}\" title=\"{{title}}\"><img src=\"{{getSiteBrandingLogo()}}\" alt=\"{{title}}\" /></a>\n        </div>\n        <div class=\"jazz-header-collapsed__site-branding--divider\">\n        </div>\n        <div class=\"jazz-header-collapsed__site-branding\">\n          <div class=\"jazz-header-collapsed__site-branding-info\">\n            <div class=\"jazz-header-collapsed__site-branding-name\">\n              <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\">{{ siteBrandingName }}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <jazz-menu [menuItems]=\"mainMenu.menuComponents\" [utilityItems]=\"utilityMenu.utilityMenuComponents\">\n\n  </jazz-menu>\n  </div>\n</header>\n\n<header role=\"banner\" class=\"jazz-utility-header\" *ngIf=\"showCompact\">\n  <h1 class=\"jazz-visually-hidden\">{{ title }}</h1>\n  <div class=\"jazz-skip-links\">\n    <a href=\"#main-content\" class=\"jazz-skip-link\">Skip to main content</a>\n    <a href=\"#search\" class=\"jazz-skip-link\">Skip to search options</a>\n  </div>\n  <div class=\"jazz-container\">\n    <div class=\"jazz-utility-header__branding\">\n      <a class=\"jazz-utility-header__pu_logo\" href=\"{{ siteBrandingUrl }}\" title=\"{{ title }}\">\n        <img src=\"{{ getSiteBrandingLogo() }}\" alt=\"{{ title }}\" /></a>\n      <div class=\"jazz-div\"></div>\n      <div class=\"jazz-utility-header__site-branding\">\n        <a class=\"jazz-utility-header__site-name\" href=\"javascript:void(0);\" title=\"{{ siteBrandingName }}\" rel=\"home\">{{ siteBrandingName }}</a>\n        <div class=\"jazz-utility-header__site-slogan\">{{ siteBrandingSlogan }}</div>\n      </div>\n    </div>\n    <div class=\"jazz-utility-header__options\">\n      <section class=\"jazz-utility-header__nav\">\n        <h2 class=\"jazz-visually-hidden\">Related Links</h2>\n        <jazz-menu-main-button [buttonClass]=\"'jazz-utility-header__nav-toggle'\" [showCompact]=\"true\"></jazz-menu-main-button>\n        <nav class=\"jazz-nav\">\n          <ul>\n            <li *ngFor=\"let menuItem of utilityMenu.utilityMenuComponents\">\n              <a *ngIf=\"menuItem.url\" [routerLink]=\"menuItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n                 [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{menuItem.label}}</a>\n              <a *ngIf=\"menuItem.externalUrl\" href=\"{{menuItem.externalUrl}}\">{{menuItem.label}}</a>\n            </li>\n          </ul>\n        </nav>\n      </section>\n      <div class=\"jazz-div\"></div>\n      <section class=\"jazz-utility-header__user-options\">\n        <h2 class=\"jazz-visually-hidden\">User Options</h2>\n        <ul>\n          <li><a href=\"javascript:void(0);\">Log In</a></li>\n        </ul>\n      </section>\n    </div>\n  </div>\n</header>\n"
                },] }
    ];
    HeaderComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    HeaderComponent.propDecorators = {
        title: [{ type: core.Input }],
        siteBrandingName: [{ type: core.Input }],
        siteBrandingSlogan: [{ type: core.Input }],
        siteBrandingUrl: [{ type: core.Input }],
        siteBrandingLogo: [{ type: core.Input }],
        showSearch: [{ type: core.Input }],
        showCompact: [{ type: core.Input }],
        mainMenu: [{ type: core.ContentChild, args: [MainMenuComponent,] }],
        utilityMenu: [{ type: core.ContentChild, args: [UtilityMenuComponent,] }],
        onResize: [{ type: core.HostListener, args: ['window:resize', ['$event'],] }]
    };

    var MenuComponent = /** @class */ (function () {
        function MenuComponent() {
        }
        MenuComponent.prototype.onResize = function (event) {
            this.displayWindowSize();
        };
        MenuComponent.prototype.displayWindowSize = function () {
            // Main Menu Reset
            document.querySelectorAll(HEADER_NAV_SELECTOR).forEach(function (header) {
                header.classList.remove(MENU_NAV_EXPANDED_STYLE);
                header.querySelectorAll('ul').forEach(function (navbar) {
                    navbar.classList.remove(MENU_NAV_EXPANDED_STYLE);
                    navbar.classList.remove(MENUBAR_SHOWN_STYLE);
                    navbar.classList.remove(MENU_STICKY_STYLE);
                    navbar.querySelectorAll('li').forEach(function (submenu) {
                        submenu.classList.remove(MENU_STICKY_STYLE);
                        submenu.classList.remove(MENU_HIDE_STYLE);
                    });
                });
            });
            document.querySelectorAll(MENU_BUTTON_SELECTOR).forEach(function (button) {
                button.setAttribute(ARIA_EXPANDED$1, 'false');
                var menuToggleIcon = button.querySelector(ICON_SELECTOR$1);
                menuToggleIcon.classList.remove(ICON_CLOSE$1);
                menuToggleIcon.classList.add(ICON_MENU);
            });
            // Sub Menus Reset
            document.querySelectorAll(MENU_SELECTOR).forEach(function (menu) {
                menu.querySelectorAll('ul').forEach(function (navbar) {
                    navbar.classList.remove(MENU_SUB_NAV_EXPANDED_STYLE);
                    navbar.classList.remove(MENUBAR_SUB_SHOWN_STYLE);
                });
            });
            document.querySelectorAll(HEADER_SUB_MENU_SELECTOR).forEach(function (button) {
                button.setAttribute(ARIA_EXPANDED$1, 'false');
            });
        };
        // This retrieves the appropriate button depending on the selector passed in
        MenuComponent.prototype.getButtonForSelector = function (btnSelector, button, mainEl) {
            if (!button.matches(btnSelector)) {
                button = mainEl.querySelector(btnSelector);
            }
            return button;
        };
        MenuComponent.prototype.closeSubMenus = function () {
            // const mainEl = event.btn.closest(MENU_MAIN_MENU_SELECTOR);
            document.querySelectorAll(HEADER_NAV_SELECTOR).forEach(function (mainEl) {
                mainEl.querySelectorAll('li').forEach(function (navbar) {
                    navbar.querySelectorAll('ul').forEach(function (list) {
                        list.classList.remove(MENU_STICKY_STYLE);
                        list.classList.add(MENU_HIDE_STYLE);
                    });
                });
                // tslint:disable-next-line:no-shadowed-variable
                mainEl.querySelectorAll(HEADER_SUB_MENU_SELECTOR).forEach(function (button) {
                    button.setAttribute(ARIA_EXPANDED$1, 'false');
                });
            });
        };
        MenuComponent.prototype.resetSubMenus = function () {
            document.querySelectorAll(HEADER_NAV_SELECTOR).forEach(function (mainEl) {
                mainEl.querySelectorAll('li').forEach(function (navbar) {
                    navbar.querySelectorAll('ul').forEach(function (list) {
                        list.classList.remove(MENU_STICKY_STYLE);
                        list.classList.remove(MENU_HIDE_STYLE);
                    });
                });
            });
        };
        MenuComponent.prototype.onMouseOut = function (event) {
            var li = event.target;
            if (li) {
                li.querySelectorAll('ul').forEach(function (subnav) {
                    if (subnav.id === MENU_RECENTLY_OPENED_ID) {
                        subnav.classList.remove(MENU_HIDE_STYLE);
                        subnav.id = '';
                    }
                });
            }
        };
        return MenuComponent;
    }());
    MenuComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-menu',
                    template: "<nav aria-label=\"Main Menu\" class=\"jazz-menu__main-menu\">\n  <h2 class=\"jazz-visually-hidden\">Main Menu</h2>\n\n  <div class=\"jazz-container\">\n    <div class=\"jazz-menu__main-menu-navbar\">\n      <jazz-menu-main-button buttonClass=\"jazz-menu__menu-toggle\" [showCompact]=\"false\"></jazz-menu-main-button>\n      <div class=\"jazz-menu__nav-container\">\n        <ul *ngIf=\"menuItems && menuItems.length > 0\" class=\"jazz-menubar\" role=\"list\">\n            <li *ngFor=\"let level1item of menuItems\" (mouseleave)=\"onMouseOut($event)\">\n              <jazz-menu-item [menuItem]=\"level1item\" (closeSubMenus)=\"closeSubMenus()\" (resetSubMenus)=\"resetSubMenus()\"></jazz-menu-item>\n            </li>\n        </ul>\n        <div class=\"jazz-header__utility-menu jazz-header__utility-menu--hide-large\">\n          <ul *ngIf=\"utilityItems && utilityItems.length > 0\">\n            <li *ngFor=\"let utilityItem of utilityItems\" >\n              <a [routerLink]=\"utilityItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n                [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{utilityItem.label}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n"
                },] }
    ];
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        menuItems: [{ type: core.Input }],
        utilityItems: [{ type: core.Input }],
        onResize: [{ type: core.HostListener, args: ['window:resize', ['$event'],] }]
    };

    var MenuItemComponent = /** @class */ (function () {
        function MenuItemComponent(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
            this.closeSubMenus = new core.EventEmitter();
            this.resetSubMenus = new core.EventEmitter();
        }
        MenuItemComponent.prototype.ngOnInit = function () {
            this.viewContainerRef.createEmbeddedView(this.template);
        };
        MenuItemComponent.prototype.getClass = function () {
            return this.menuItem.shownByDefault ? 'jazz-menubar__submenu--shown-by-default' : '';
        };
        // Storybook arrays for some reason has the original component in the children list
        // This results in an infinite loop
        MenuItemComponent.prototype.removeSelf = function (comp) {
            if (comp === this.menuItem) {
                return true;
            }
            return false;
        };
        MenuItemComponent.prototype.close = function () {
            this.closeSubMenus.emit();
        };
        MenuItemComponent.prototype.reset = function () {
            this.resetSubMenus.emit();
        };
        return MenuItemComponent;
    }());
    MenuItemComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-menu-item',
                    template: "<ng-template #template>\n  <a *ngIf=\"menuItem.url\" [routerLink]=\"menuItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n    [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{menuItem.label}}</a>\n  <a *ngIf=\"menuItem.externalUrl\" href=\"{{menuItem.externalUrl}}\">{{menuItem.label}}</a>\n  <jazz-sub-button [menuItem]=\"menuItem\" (closeSubMenus)=\"close()\" (resetSubMenus)=\"reset()\"></jazz-sub-button>\n  <ul *ngIf=\"menuItem && menuItem.menuComponents && menuItem.menuComponents.length > 0\" [class]=\"getClass()\">\n    <li *ngFor=\"let levelItem of menuItem.menuComponents\">\n        <jazz-menu-item *ngIf=\"!removeSelf(levelItem)\" [menuItem]=\"levelItem\"></jazz-menu-item>\n    </li>\n  </ul>\n</ng-template>\n"
                },] }
    ];
    MenuItemComponent.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };
    MenuItemComponent.propDecorators = {
        template: [{ type: core.ViewChild, args: ['template', { static: true },] }],
        menuItem: [{ type: core.Input }],
        closeSubMenus: [{ type: core.Output }],
        resetSubMenus: [{ type: core.Output }]
    };

    var ARIA_EXPANDED = 'aria-expanded';
    var MenuMainButtonComponent = /** @class */ (function () {
        function MenuMainButtonComponent(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        MenuMainButtonComponent.prototype.ngOnInit = function () {
            this.viewContainerRef.createEmbeddedView(this.mainButtonTemplate);
        };
        MenuMainButtonComponent.prototype.onMainMenuClick = function (event) {
            var icon = event.target;
            var button = icon.closest('button');
            var expandedAttr = button.getAttribute(ARIA_EXPANDED);
            var expand = !(expandedAttr && expandedAttr === 'true');
            if (!this.showCompact) {
                this.showMenu(expand, button);
            }
            else {
                this.showUtilityMenu(expand, button);
            }
            event.stopImmediatePropagation();
        };
        // tslint:disable-next-line:typedef
        MenuMainButtonComponent.prototype.showMenu = function (expand, button) {
            // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
            var menuEl = button.closest(MENU_MAIN_MENU_SELECTOR);
            var menuToggleIcon = button.querySelector(ICON_SELECTOR$1);
            var navbar = menuEl.querySelector('ul');
            var navContainer = menuEl.querySelector(HEADER_NAV_SELECTOR);
            var spanEl = button.querySelector('span');
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
        };
        MenuMainButtonComponent.prototype.showUtilityMenu = function (expand, button) {
            var sectionEl = button.closest('.jazz-utility-header__nav');
            var iconEl = button.querySelector(ICON_SELECTOR$1);
            var spanEl = button.querySelector('span');
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
        };
        MenuMainButtonComponent.prototype.getMenuText = function () {
            return this.showCompact ? '' : 'Menu';
        };
        return MenuMainButtonComponent;
    }());
    MenuMainButtonComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-menu-main-button',
                    template: "<ng-template #mainButtonTemplate>\n  <button class=\"{{ buttonClass }}\" (click)='onMainMenuClick($event)'\n          aria-expanded=\"false\" aria-label=\"Navigation Menu Toggle\">\n    {{getMenuText()}}<i class=\"jazz-icon jazz-icon-menu\" aria-hidden=\"true\" (click)='onMainMenuClick($event)'></i>\n    <span class=\"jazz-visually-hidden\">Open Navigation Menu</span>\n  </button>\n</ng-template>\n"
                },] }
    ];
    MenuMainButtonComponent.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };
    MenuMainButtonComponent.propDecorators = {
        mainButtonTemplate: [{ type: core.ViewChild, args: ['mainButtonTemplate', { static: true },] }],
        buttonClass: [{ type: core.Input }],
        showCompact: [{ type: core.Input }]
    };

    var MenuSubButtonComponent = /** @class */ (function () {
        function MenuSubButtonComponent(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
            this.closeSubMenus = new core.EventEmitter();
            this.resetSubMenus = new core.EventEmitter();
        }
        MenuSubButtonComponent.prototype.ngOnInit = function () {
            this.viewContainerRef.createEmbeddedView(this.subButtonTemplate);
        };
        MenuSubButtonComponent.prototype.onSubMenuClick = function (event) {
            var button = event.target;
            var expandedAttr = button.getAttribute(ARIA_EXPANDED$1);
            var expand = !(expandedAttr && expandedAttr === 'true');
            this.showSubMenu(expand, button);
        };
        MenuSubButtonComponent.prototype.showSubMenu = function (expand, button) {
            var mq = window.matchMedia('(min-width: 900px)');
            if (mq.matches) {
                this.showSubMenuFull(expand, button);
            }
            else {
                this.showSubMenuCondensed(expand, button);
            }
        };
        MenuSubButtonComponent.prototype.showSubMenuFull = function (expand, button) {
            // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
            var navbar = button.closest('li');
            var navContainer = navbar.querySelector('ul');
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
        };
        MenuSubButtonComponent.prototype.showSubMenuCondensed = function (expand, button) {
            // This makes sure regardless of which button is picked that the menu elements are expanded/hidden
            var navbar = button.closest('li');
            var navContainer = navbar.querySelector('ul');
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
        };
        return MenuSubButtonComponent;
    }());
    MenuSubButtonComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-sub-button',
                    template: "<ng-template #subButtonTemplate>\n  <button *ngIf='menuItem && menuItem.menuComponents && menuItem.menuComponents.length > 0' class=\"jazz-menu__submenu-toggle\" type=\"button\" aria-expanded=\"false\" (click)='onSubMenuClick($event)'>\n    <span class=\"jazz-visually-hidden\">\n      {{menuItem.label}}\n    </span>\n  </button>\n</ng-template>\n"
                },] }
    ];
    MenuSubButtonComponent.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };
    MenuSubButtonComponent.propDecorators = {
        menuItem: [{ type: core.Input }],
        closeSubMenus: [{ type: core.Output }],
        resetSubMenus: [{ type: core.Output }],
        subButtonTemplate: [{ type: core.ViewChild, args: ['subButtonTemplate', { static: true },] }]
    };

    var MenuModule = /** @class */ (function () {
        function MenuModule() {
        }
        return MenuModule;
    }());
    MenuModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule
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

    var HeaderModule = /** @class */ (function () {
        function HeaderModule() {
        }
        return HeaderModule;
    }());
    HeaderModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule,
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

    var INPUT_SELECTORS_EXCL_CLOSE = 'a[href]:not([disabled]), button:not([disabled]):not(.jazz-modal-button__close), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
    var INPUT_SELECTORS = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
    /**
     * @example
     `` `
       <jazz-modal-dialog [title]="'Sample Dialog'" [buttonLabel]="'Click Me!'" (buttonClicked)="clicked()">
         This is the content of the dialog
       </jazz-modal-dialog>
     `` `
     */
    var ModalDialogComponent = /** @class */ (function () {
        function ModalDialogComponent() {
            this.buttonClicked = new core.EventEmitter();
        }
        ModalDialogComponent.prototype.ngOnInit = function () {
        };
        ModalDialogComponent.prototype.onAction = function (event) {
            if (!this.handleKeyEvents(event)) {
                return;
            }
            this.modalWrapper.nativeElement.classList.toggle('jazz-modal__wrapper--visible');
            if (this.modalWrapper.nativeElement.classList.contains('jazz-modal__wrapper--visible')) {
                this.focusOnFirstInput();
            }
            event.stopImmediatePropagation();
        };
        ModalDialogComponent.prototype.handleKeyEvents = function (event) {
            if (event instanceof KeyboardEvent) {
                var keyEvent = event;
                var isTabPressed = (keyEvent.key === 'Tab');
                var isEscPressed = (keyEvent.key === 'Escape');
                var isEnterPressed = (keyEvent.key === 'Enter');
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
        };
        ModalDialogComponent.prototype.focusOnFirstInput = function () {
            var focusableEls = UtilityFunctions.select(INPUT_SELECTORS_EXCL_CLOSE, this.modalWrapper.nativeElement);
            if (focusableEls.length > 0) {
                focusableEls[0].focus();
            }
        };
        ModalDialogComponent.prototype.keepFocusWithin = function (keyEvent) {
            var focusableEls = UtilityFunctions.select(INPUT_SELECTORS, this.modalWrapper.nativeElement);
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];
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
        };
        ModalDialogComponent.prototype.close = function () {
            this.modalWrapper.nativeElement.classList.remove('jazz-modal__wrapper--visible');
        };
        ModalDialogComponent.prototype.modalClick = function () {
            this.close();
            this.buttonClicked.emit();
        };
        return ModalDialogComponent;
    }());
    ModalDialogComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-modal-dialog',
                    template: "<div class=\"jazz-modal\" role=\"region\">\n  <button class=\"jazz-btn jazz-modal__button\" (click)=\"onAction($event)\">{{ buttonLabel }}</button>\n  <div #jazzModalWrapper role=\"presentation\" class=\"jazz-modal-wrapper\" (keydown)=\"onAction($event)\">\n    <div role=\"dialog\" aria-label=\"Test Dialog with Script\" aria-modal=\"true\" class=\"jazz-modal-window jazz-modal--sm\">\n      <div class=\"jazz-modal-title\">\n        {{ title }}\n        <button class=\"jazz-modal__button jazz-modal-button__close jazz-modal-button--transparent\"\n                aria-label=\"Close modal dialog\" (click)=\"close()\"></button>\n      </div>\n      <div class=\"jazz-modal-content\" aria-labelledBy=\"jazz-modal-title\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"jazz-modal-button-container\">\n        <button class=\"jazz-btn jazz-modal__button\" (click)=\"close()\">Cancel</button>\n        <button class=\"jazz-btn jazz-modal__button\" (click)=\"modalClick()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"
                },] }
    ];
    ModalDialogComponent.ctorParameters = function () { return []; };
    ModalDialogComponent.propDecorators = {
        buttonLabel: [{ type: core.Input }],
        title: [{ type: core.Input }],
        content: [{ type: core.Input }],
        buttonClicked: [{ type: core.Output }],
        modalWrapper: [{ type: core.ViewChild, args: ['jazzModalWrapper',] }]
    };

    var ModalDialogModule = /** @class */ (function () {
        function ModalDialogModule() {
        }
        return ModalDialogModule;
    }());
    ModalDialogModule.decorators = [
        { type: core.NgModule, args: [{
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
     * <example-url>http://localhost:4200/#/pager/pagerSimpleExample</example-url>
     * @example
      `` `
      <jazz-pager [totalPages]="20" [currentPage]="5" (pagerChange)="changePage($event);"></jazz-pager>
       `` `
     */
    var PagerComponent = /** @class */ (function () {
        function PagerComponent(ref) {
            this.ref = ref;
            this.pagerChange = new core.EventEmitter();
        }
        PagerComponent.prototype.iterablePages = function () {
            this.totalPages = Number(this.totalPages);
            this.currentPage = Number(this.currentPage);
            var pages = [];
            var delta = 4;
            var maxPages = 9;
            var truncate = true;
            var pageNum = 0;
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
            for (var pageIdx = 0; pageIdx < maxPages; pageIdx++) {
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
        };
        /**
         * This is used to set the next page in the pager based on the page that was clicked.
         */
        PagerComponent.prototype.setPage = function (page) {
            if (page >= 0 && page <= this.totalPages) {
                this.currentPage = page;
                this.pagerChange.emit(page);
                this.ref.detectChanges();
                // console.log('setPage', page, this.currentPage);
            }
        };
        return PagerComponent;
    }());
    PagerComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-pager',
                    template: "<nav *ngIf=\"totalPages && currentPage\" class=\"jazz-pager\" role=\"navigation\" aria-label=\"pagination\">\n  <ul>\n    <li>\n      <a *ngIf=\"(currentPage != 1)\" href=\"javascript:void(0);\" (click)=\"setPage(currentPage - 1)\" data-page=\"Previous\"><i class=\"jazz-icon jazz-icon-caret-left\"></i>Previous</a>\n      <span *ngIf=\"(currentPage == 1)\" [attr.aria-disabled]=\"true\" data-page=\"Previous\"><i class=\"jazz-icon jazz-icon-caret-left\"></i>Previous</span>\n    </li>\n    <li *ngFor=\"let page of iterablePages()\" attr.aria-current=\"{{ (currentPage == (page + 1)) ?'page': ''}}\">\n      <a *ngIf=\"page >= 0\" href=\"javascript:void(0);\" (click)=\"setPage(page + 1)\"\n         attr.aria-label=\"Go to {{page + 1}}\"\n         attr.data-page=\"{{page + 1}}\">{{page + 1}}\n      </a>\n      <span *ngIf=\"page < 0\">...</span>\n    </li>\n    <li>\n      <a *ngIf=\"(currentPage != totalPages)\" href=\"javascript:void(0);\" (click)=\"setPage(currentPage+ 1)\" data-page=\"Next\">Next<i class=\"jazz-icon jazz-icon-caret-right\"></i></a>\n      <span *ngIf=\"(currentPage == totalPages)\" [attr.aria-disabled]=\"true\" data-page=\"Next\">Next<i class=\"jazz-icon jazz-icon-caret-right\"></i></span>\n    </li>\n  </ul>\n</nav>\n"
                },] }
    ];
    PagerComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    PagerComponent.propDecorators = {
        totalPages: [{ type: core.Input, args: ['totalPages',] }],
        currentPage: [{ type: core.Input, args: ['currentPage',] }],
        pagerChange: [{ type: core.Output }]
    };

    var PagerModule = /** @class */ (function () {
        function PagerModule() {
        }
        return PagerModule;
    }());
    PagerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        PagerComponent
                    ],
                    exports: [
                        PagerComponent
                    ]
                },] }
    ];

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Generate unique id for tab list
     *
     * @ignore
     */
    var idGenerator = 0;
    /**
     * The TabComponent represents a single tab in a list of tabs.
     *
     * This component mostly serves as a data structure, but also helps to expose the API through the jazz-tab element.
     * @example
     `` `
         <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
     `` `
     */
    var TabComponent = /** @class */ (function () {
        function TabComponent() {
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
        return TabComponent;
    }());
    TabComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-tab',
                    template: ""
                },] }
    ];
    TabComponent.propDecorators = {
        disabled: [{ type: core.Input }],
        label: [{ type: core.Input }],
        controls: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input, args: ['aria-label',] }],
        ariaLabelledby: [{ type: core.Input, args: ['aria-labelledby',] }],
        selected: [{ type: core.Input }],
        routeTo: [{ type: core.Input }]
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
    var TabsComponent = /** @class */ (function () {
        function TabsComponent(router) {
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
        Object.defineProperty(TabsComponent.prototype, "autoActivate", {
            /**
             * Controls if a tab will become selected when it receives focus.
             */
            get: function () {
                return this._autoActivate;
            },
            set: function (value) {
                this._autoActivate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsComponent.prototype, "useButtons", {
            /**
             * Controls if a tab will use buttons or links
             */
            get: function () {
                return this._useButtons;
            },
            set: function (value) {
                this._useButtons = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Returns the list of TabComponent components that are part of this tab list.
         */
        TabsComponent.prototype.getTabs = function () {
            return this.tabs.toArray();
        };
        TabsComponent.prototype.ngOnInit = function () {
        };
        /**
         * During this Angular lifecycle phase, the tabs are initialized and a subscription is established for listening for tab changes.
         */
        TabsComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.initializeTabs();
            this._tabsChangeSubscription = this.tabs.changes.subscribe(function () {
                _this.initializeTabs();
            });
        };
        /**
         * Subscriptions are released and resource handles are destroyed.
         */
        TabsComponent.prototype.ngOnDestroy = function () {
            this._tabsChangeSubscription.unsubscribe();
        };
        /**
         * Initializes the tabs by identifying the tab that should be selected.
         *
         * The logic accounts for the case where multiple tabs are marked as selected by selecting only the first tab that is marked as selected.
         * The logic also accounts for the case where the selected tab is disabled (selected tabs cannot be disabled) by selecting the first
         * tab in the list of tabs.
         *
         * @ignore
         */
        TabsComponent.prototype.initializeTabs = function () {
            var e_1, _a;
            var firstSelectedTab = null;
            var firstCurrentRoute = null;
            var firstEnabledTab = null;
            try {
                // find first enabled and first selected (and enabled) tab
                for (var _b = __values(this.tabs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var tab = _c.value;
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
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
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
        };
        /**
         * Generates the HTML id for the tab list wrapping element.
         *
         * @ignore
         */
        TabsComponent.prototype.getTabListId = function () {
            return 'jazz-tabs-' + this._elementId;
        };
        /**
         * Generates the id of an individual tab.
         *
         * @ignore
         */
        TabsComponent.prototype.getTabId = function (idx) {
            return this.getTabListId() + '-' + idx;
        };
        /**
         * Changes the visibility of the specified element (which is controlled by the selected tab).
         *
         * @ignore
         * @param controlledElementId the HTML id of the controlled element
         * @param shown indicates if the element should be expanded (shown) or not (hidden)
         * @private
         */
        TabsComponent.prototype.setControlledElementVisibility = function (controlledElementId, shown) {
            if (controlledElementId) {
                var controlledElement = document.getElementById(controlledElementId);
                if (!controlledElement) {
                    throw new Error("aria-controls is not properly configured: " + controlledElementId);
                }
                if (shown) {
                    controlledElement.removeAttribute(HIDDEN$1);
                }
                else {
                    controlledElement.setAttribute(HIDDEN$1, '');
                }
            }
        };
        /**
         * De-select all tabs in tablist, except the tab provided.
         *
         * @ignore
         * @param exceptTab
         */
        TabsComponent.prototype.deselectAllOtherButtonsInTablist = function (exceptTab) {
            var _this = this;
            this.tabs.forEach(function (tab) {
                if (tab !== exceptTab) {
                    _this.deselectTab(tab);
                }
            });
        };
        /**
         * Selects the specified tab.  By selecting a tab, all other tabs are deselected.
         *
         * @param tab the tab to be selected
         */
        TabsComponent.prototype.selectTab = function (tab) {
            this.deselectAllOtherButtonsInTablist(tab);
            // The selected tab is always set to be selected (selected=true).  Selecting an active tab will not de-select it.
            this.setTabSelection(tab, true);
        };
        /**
         * Delselects the specified tab.
         *
         * @param tab the tab to be deselected
         */
        TabsComponent.prototype.deselectTab = function (tab) {
            this.setTabSelection(tab, false);
        };
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
        TabsComponent.prototype.setTabSelection = function (tab, selected) {
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
        };
        /**
         * Handles click events on individual tabs.  If the tab is not already selected, then it will be selected.
         *
         * @ignore
         * @param tab
         * @private
         */
        TabsComponent.prototype.handleClickEvent = function (tab) {
            if (!tab.disabled && !tab.selected) {
                this.selectTab(tab);
            }
        };
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
        TabsComponent.prototype.handleKeyboardEvent = function (eventTab, idx, keyEvent) {
            var focusIdx = -1;
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
                    var nextTab = this.tabs.toArray()[focusIdx];
                    if (!nextTab.disabled) {
                        this.selectTab(this.tabs.toArray()[focusIdx]);
                    }
                }
                // set focus to the tab
                this.tabItems.toArray()[focusIdx].nativeElement.focus();
                keyEvent.stopImmediatePropagation();
            }
        };
        /**
         * Finds the next tab, starting at the specified index in the tab list.
         *
         * @ignore
         * @param tabs
         * @param startIdx
         * @private
         */
        TabsComponent.prototype.getNextTabIndex = function (tabs, startIdx) {
            var safeStartIdx = this.clampTabIndex(startIdx);
            for (var i = safeStartIdx; i < tabs.length; i++) {
                return i;
            }
            return -1;
        };
        /**
         * Finds the previous tab, starting at the specified index in the tab list.
         *
         * @ignore
         * @param tabs
         * @param startIdx
         */
        TabsComponent.prototype.getPreviousTabIndex = function (tabs, startIdx) {
            var safeStartIdx = this.clampTabIndex(startIdx);
            for (var i = safeStartIdx; i >= 0; i--) {
                return i;
            }
            return -1;
        };
        /**
         * Finds the first tab in the list of provided tabs
         *
         * @ignore
         */
        TabsComponent.prototype.getFirstTabIndex = function () {
            return this.getNextTabIndex(this.tabs.toArray(), 0);
        };
        /**
         * Finds the last tab in the list of provided tabs.
         *
         * @ignore
         */
        TabsComponent.prototype.getLastTabIndex = function () {
            return this.getPreviousTabIndex(this.tabs.toArray(), this.tabs.length - 1);
        };
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
        TabsComponent.prototype.clampTabIndex = function (index) {
            return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
        };
        /**
         * Find the next tab in the list of tabs provided.
         *
         * The search will begin at the position in the list where the provided tab is located and the search
         * will wrap around to the beginning of the provided list of tabs.
         *
         * @param startIdx the index of the tab to use as a starting point for finding the next tab
         * @ignore
         */
        TabsComponent.prototype.getNextOrFirstTabIndex = function (startIdx) {
            var tabsArr = this.tabs.toArray();
            var idx = this.getNextTabIndex(tabsArr, startIdx + 1);
            if (idx === -1) {
                return this.getNextTabIndex(tabsArr, 0);
            }
            else {
                return idx;
            }
        };
        /**
         * Find the previous tab in the list of tabs provided.
         *
         * The search will begin at the position in the list where the provided tab is located and the search
         * will wrap around to the end of the provided list of tabs.
         *
         * @param startIdx
         * @ignore
         */
        TabsComponent.prototype.getPreviousOrLastTab = function (startIdx) {
            var tabsArr = this.tabs.toArray();
            var idx = this.getPreviousTabIndex(tabsArr, startIdx - 1);
            if (idx === -1) {
                return this.getPreviousTabIndex(tabsArr, tabsArr.length - 1);
            }
            else {
                return idx;
            }
        };
        return TabsComponent;
    }());
    TabsComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-tabs',
                    template: "\n    <div *ngIf=\"useButtons\"\n      [id]=\"getTabListId()\"\n      class=\"jazz-tablist\"\n      [class.jazz-auto-activate]=\"autoActivate\"\n      role=\"tablist\">\n      <button #tabItem\n        [id]=\"getTabId(i)\"\n        role=\"tab\"\n        [attr.tabindex]=\"tab.tabindex\"\n        [attr.aria-disabled]=\"tab.disabled\"\n        [attr.aria-selected]=\"tab.selected\"\n        [attr.aria-controls]=\"tab.controls\"\n        [attr.aria-label]=\"tab.ariaLabel || null\"\n        [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n        (click)=\"handleClickEvent(tab)\"\n        (keyup)=\"handleKeyboardEvent(tab, i, $event)\"\n        *ngFor=\"let tab of tabs; let i = index\">{{ tab.label }}</button>\n    </div>\n\n    <div *ngIf=\"!useButtons\"\n         [id]=\"getTabListId()\"\n         class=\"jazz-tablist\"\n         [class.jazz-auto-activate]=\"autoActivate\"\n         role=\"tablist\">\n      <a #tabItem\n              [id]=\"getTabId(i)\"\n              role=\"tab\"\n              [attr.tabindex]=\"tab.tabindex\"\n              [attr.aria-disabled]=\"tab.disabled\"\n              [attr.aria-selected]=\"tab.selected\"\n              [attr.aria-controls]=\"tab.controls\"\n              [routerLink]=\"tab.routeTo\"\n              routerLinkActive=\"active\"\n              #buttonLink=\"routerLinkActive\"\n              [attr.aria-label]=\"tab.ariaLabel || null\"\n              [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n              (click)=\"handleClickEvent(tab)\"\n              (keyup)=\"handleKeyboardEvent(tab, i, $event)\"\n              *ngFor=\"let tab of tabs; let i = index\">{{ tab.label }}</a>\n    </div>\n  "
                },] }
    ];
    TabsComponent.ctorParameters = function () { return [
        { type: router.Router }
    ]; };
    TabsComponent.propDecorators = {
        tabs: [{ type: core.ContentChildren, args: [TabComponent,] }],
        tabItems: [{ type: core.ViewChildren, args: ['tabItem',] }],
        autoActivate: [{ type: core.Input }],
        useButtons: [{ type: core.Input }]
    };

    var TabsModule = /** @class */ (function () {
        function TabsModule() {
        }
        return TabsModule;
    }());
    TabsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        router.RouterModule,
                        common.CommonModule
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
    var UtilityHeaderLinkComponent = /** @class */ (function () {
        function UtilityHeaderLinkComponent() {
            this.external = false;
        }
        return UtilityHeaderLinkComponent;
    }());
    UtilityHeaderLinkComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-utility-header-link',
                    template: "\n      <ng-content></ng-content>\n  "
                },] }
    ];
    UtilityHeaderLinkComponent.propDecorators = {
        url: [{ type: core.Input }],
        label: [{ type: core.Input }],
        external: [{ type: core.Input }],
        class: [{ type: core.Input }],
        routerLink: [{ type: core.Input }]
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
    var UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */ = /** @class */ (function () {
        function UtilityHeaderComponent() {
            this.stuckMobile = true;
            this.stuckDesktop = true;
            this.puBrandingLogo = './assets/logos/pu-logo-stacked-white.svg';
            this.utilityLinksHeading = 'Related Links';
            this.menuExpanded = false;
            this.menuButtonLabel = 'Open Navigation Menu';
        }
        UtilityHeaderComponent.prototype.toggleMenu = function () {
            this.menuExpanded = !this.menuExpanded;
            this.menuButtonLabel = this.menuExpanded ? 'Close Navigation Menu' : 'Open Navigation Menu';
        };
        return UtilityHeaderComponent;
    }());
    UtilityHeaderComponent.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'jazz-utility-header',
                    template: "\n    <header\n        role=\"banner\"\n        class=\"jazz-utility-header\"\n        [class.jazz-stuck-mobile]=\"stuckMobile\"\n        [class.jazz-stuck]=\"stuckDesktop\">\n        <h1 class=\"jazz-visually-hidden\">{{ primaryHeading }}</h1>\n        <div class=\"jazz-container\">\n            <div class=\"jazz-utility-header__branding\">\n                <a class=\"jazz-utility-header__pu_logo\" href=\"https://www.princeton.edu/\" [title]=\"puBrandingTitle\">\n                <img [src]=\"puBrandingLogo\" alt=\"Princeton University Logo\" />\n                </a>\n                <div class=\"jazz-div\"></div>\n                <div class=\"jazz-utility-header__site-branding\">\n                    <a *ngIf=\"siteBrandingName\" class=\"jazz-utility-header__site-name\" [href]=\"siteBrandingLink\" [title]=\"siteBrandingTitle\" rel=\"home\">{{ siteBrandingName }}</a>\n                    <div *ngIf=\"siteBrandingSlogan\" class=\"jazz-utility-header__site-slogan\">{{ siteBrandingSlogan }}</div>\n\n                    <ng-template [ngIf]=\"!officeOfTemplate\" [ngIfElse]=\"officeOfTemplate\">\n                      <a *ngIf=\"officeOf\" class=\"jazz-utility-header__site-name-office-of\" [href]=\"officeOfLink\" title=\"Office of {{officeOf}}\" rel=\"home\">Office of\n                          <br/>\n                          <div class=\"jazz-utility-header__site-name-office-of-department\">{{officeOf}}</div>\n                      </a>\n                    </ng-template>\n                </div>\n            </div>\n            <div class=\"jazz-utility-header__options\">\n                <section class=\"jazz-utility-header__nav\" [class.jazz-expanded]=\"menuExpanded\">\n                    <h2 class=\"jazz-visually-hidden\">{{ utilityLinksHeading }}</h2>\n                    <button class=\"jazz-utility-header__nav-toggle\" [attr.aria-expanded]=\"menuExpanded\" (click)=\"toggleMenu()\"><i class=\"jazz-icon jazz-icon-menu\" [class.jazz-icon-menu]=\"!menuExpanded\" [class.jazz-icon-close]=\"menuExpanded\" aria-hidden=\"true\"></i><span class=\"jazz-visually-hidden\">{{ menuButtonLabel }}</span></button>\n                    <nav class=\"jazz-nav\">\n                        <ul>\n                            <li *ngFor=\"let link of links\"><a [href]=\"link.url\" class=\"{{link.class}}\" [attr.target]=\"link.external ? '_blank' : null\" (click)=\"toggleMenu()\">{{ link.label }}</a></li>\n                        </ul>\n                    </nav>\n                </section>\n                <div class=\"jazz-div\"></div>\n                <section class=\"jazz-utility-header__user-options\">\n                    <h2 class=\"jazz-visually-hidden\">User Options</h2>\n                    <ng-template [ngIf]=\"!userOptionsTemplate\" [ngIfElse]=\"userOptionsTemplate\">\n                      <ul>\n                        <li *ngIf=\"!username\"><a [href]=\"loginUrl\">Log In</a></li>\n                        <li *ngIf=\"username\"><a [href]=\"logoutUrl\">Log Out</a></li>\n                      </ul>\n                    </ng-template>\n                </section>\n            </div>\n        </div>\n    </header>\n  "
                },] }
    ];
    UtilityHeaderComponent.propDecorators = {
        links: [{ type: core.ContentChildren, args: [UtilityHeaderLinkComponent,] }],
        officeOfTemplate: [{ type: core.Input, args: ['officeOfTemplate',] }],
        userOptionsTemplate: [{ type: core.Input, args: ['userOptionsTemplate',] }],
        stuckMobile: [{ type: core.Input }],
        stuckDesktop: [{ type: core.Input }],
        primaryHeading: [{ type: core.Input }],
        puBrandingTitle: [{ type: core.Input }],
        puBrandingLogo: [{ type: core.Input }],
        siteBrandingName: [{ type: core.Input }],
        siteBrandingSlogan: [{ type: core.Input }],
        siteBrandingLink: [{ type: core.Input }],
        siteBrandingTitle: [{ type: core.Input }],
        officeOfLink: [{ type: core.Input }],
        officeOf: [{ type: core.Input }],
        utilityLinksHeading: [{ type: core.Input }],
        loginUrl: [{ type: core.Input }],
        logoutUrl: [{ type: core.Input }],
        username: [{ type: core.Input }]
    };

    var UtilityHeaderModule = /** @class */ (function () {
        function UtilityHeaderModule() {
        }
        return UtilityHeaderModule;
    }());
    UtilityHeaderModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        UtilityHeaderComponent,
                        UtilityHeaderLinkComponent
                    ],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [
                        UtilityHeaderComponent,
                        UtilityHeaderLinkComponent
                    ]
                },] }
    ];

    var DesignSystemAngularModule = /** @class */ (function () {
        function DesignSystemAngularModule() {
        }
        return DesignSystemAngularModule;
    }());
    DesignSystemAngularModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule,
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

    var MenuItem = /** @class */ (function () {
        function MenuItem(label, url, subItems, shownByDefault, externalUrl) {
            this.subItems = [];
            this.label = label;
            this.url = url;
            this.externalUrl = externalUrl;
            this.subItems = subItems;
            this.shownByDefault = shownByDefault;
            this.externalUrl = externalUrl;
        }
        return MenuItem;
    }());

    /*
     * Public API Surface of design-system-angular
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ARIA_CONTROLS = ARIA_CONTROLS;
    exports.ARIA_EXPANDED = ARIA_EXPANDED;
    exports.AccordionComponent = AccordionComponent;
    exports.AlertComponent = AlertComponent;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbsComponent = BreadcrumbsComponent;
    exports.DesignSystemAngularModule = DesignSystemAngularModule;
    exports.HIDDEN = HIDDEN;
    exports.HeaderComponent = HeaderComponent;
    exports.MainMenuComponent = MainMenuComponent;
    exports.MainMenuItemComponent = MainMenuItemComponent;
    exports.MenuComponent = MenuComponent;
    exports.MenuItem = MenuItem;
    exports.MenuItemComponent = MenuItemComponent;
    exports.MenuMainButtonComponent = MenuMainButtonComponent;
    exports.MenuSubButtonComponent = MenuSubButtonComponent;
    exports.ModalDialogComponent = ModalDialogComponent;
    exports.PagerComponent = PagerComponent;
    exports.SearchButtonComponent = SearchButtonComponent;
    exports.TabComponent = TabComponent;
    exports.TabsComponent = TabsComponent;
    exports.UtilityHeaderComponent = UtilityHeaderComponent;
    exports.UtilityHeaderLinkComponent = UtilityHeaderLinkComponent;
    exports.UtilityItemComponent = UtilityItemComponent;
    exports.UtilityMenuComponent = UtilityMenuComponent;
    exports.ɵa = AccordionModule;
    exports.ɵb = AlertModule;
    exports.ɵc = BreadcrumbsModule;
    exports.ɵd = HeaderModule;
    exports.ɵe = MenuModule;
    exports.ɵf = ModalDialogModule;
    exports.ɵg = PagerModule;
    exports.ɵh = TabsModule;
    exports.ɵi = UtilityHeaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=princeton-design-design-system-angular.umd.js.map
