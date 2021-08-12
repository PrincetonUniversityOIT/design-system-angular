import { Component, ContentChildren, ElementRef, Input, NgModule, EventEmitter, Output, ViewContainerRef, ViewChild, ChangeDetectorRef, ContentChild, HostListener, ViewChildren, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/forms';

const _c0 = ["jazzAccordionButtons"];
const _c1 = ["*"];
function BreadcrumbsComponent_li_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i");
} if (rf & 2) {
    const crumb_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMapInterpolate1("jazz-icon ", crumb_r1.iconClass, "");
} }
const _c2 = function () { return { exact: true }; };
function BreadcrumbsComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 5, 6);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = ɵngcc0.ɵɵreference(1);
    const crumb_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", crumb_r1.url)("routerLinkActiveOptions", ɵngcc0.ɵɵpureFunction0(4, _c2));
    ɵngcc0.ɵɵattribute("aria-current", _r6.isActive ? "page" : undefined);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", crumb_r1.label, " ");
} }
function BreadcrumbsComponent_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const crumb_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("aria-current", ctx_r4.isActiveRoute(crumb_r1.url) ? "page" : undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", crumb_r1.label, " ");
} }
function BreadcrumbsComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, BreadcrumbsComponent_li_2_i_1_Template, 1, 3, "i", 2);
    ɵngcc0.ɵɵtemplate(2, BreadcrumbsComponent_li_2_a_2_Template, 3, 5, "a", 3);
    ɵngcc0.ɵɵtemplate(3, BreadcrumbsComponent_li_2_span_3_Template, 2, 2, "span", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const crumb_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", crumb_r1.iconClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", crumb_r1.url && !ctx_r0.isActiveRoute(crumb_r1.url));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isActiveRoute(crumb_r1.url));
} }
const _c3 = ["searchButtonTemplate"];
function SearchButtonComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 1);
    ɵngcc0.ɵɵlistener("click", function SearchButtonComponent_ng_template_0_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onSearchClick($event); });
    ɵngcc0.ɵɵelementStart(1, "i", 2);
    ɵngcc0.ɵɵlistener("click", function SearchButtonComponent_ng_template_0_Template_i_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onMainMenuSearchIconClick($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function HeaderComponent_header_0_ul_12_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 34, 35);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r8 = ɵngcc0.ɵɵreference(1);
    const utilityItem_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", utilityItem_r5.url);
    ɵngcc0.ɵɵattribute("aria-current", _r8.isActive ? "page" : undefined);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(utilityItem_r5.label);
} }
function HeaderComponent_header_0_ul_12_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 36);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const utilityItem_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("href", utilityItem_r5.externalUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(utilityItem_r5.label);
} }
function HeaderComponent_header_0_ul_12_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, HeaderComponent_header_0_ul_12_li_1_a_1_Template, 3, 3, "a", 32);
    ɵngcc0.ɵɵtemplate(2, HeaderComponent_header_0_ul_12_li_1_a_2_Template, 2, 2, "a", 33);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const utilityItem_r5 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", utilityItem_r5.url);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", utilityItem_r5.externalUrl);
} }
function HeaderComponent_header_0_ul_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, HeaderComponent_header_0_ul_12_li_1_Template, 3, 2, "li", 31);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.utilityMenu.utilityMenuComponents);
} }
function HeaderComponent_header_0_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 37);
    ɵngcc0.ɵɵelementStart(1, "h2", 3);
    ɵngcc0.ɵɵtext(2, "Search");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "jazz-search-button");
    ɵngcc0.ɵɵelementStart(4, "div", 38);
    ɵngcc0.ɵɵelementStart(5, "form", 39);
    ɵngcc0.ɵɵelementStart(6, "label", 40);
    ɵngcc0.ɵɵtext(7, "Search");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "a", 41);
    ɵngcc0.ɵɵelement(9, "input", 42);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "button", 43);
    ɵngcc0.ɵɵelementStart(11, "span", 3);
    ɵngcc0.ɵɵtext(12, "Search");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function HeaderComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "header", 2);
    ɵngcc0.ɵɵelementStart(1, "h1", 3);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "a", 5);
    ɵngcc0.ɵɵtext(5, "Skip to main content");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "a", 6);
    ɵngcc0.ɵɵtext(7, "Skip to search options");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 7);
    ɵngcc0.ɵɵelementStart(9, "div", 8);
    ɵngcc0.ɵɵelementStart(10, "div", 9);
    ɵngcc0.ɵɵelementStart(11, "div", 10);
    ɵngcc0.ɵɵtemplate(12, HeaderComponent_header_0_ul_12_Template, 2, 1, "ul", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(13, HeaderComponent_header_0_div_13_Template, 13, 0, "div", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(14, "div", 13);
    ɵngcc0.ɵɵelementStart(15, "div", 14);
    ɵngcc0.ɵɵelementStart(16, "div", 15);
    ɵngcc0.ɵɵelementStart(17, "a", 16);
    ɵngcc0.ɵɵelement(18, "img", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(19, "div", 18);
    ɵngcc0.ɵɵelementStart(20, "div", 19);
    ɵngcc0.ɵɵelementStart(21, "a", 20);
    ɵngcc0.ɵɵtext(22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(23, "div", 21);
    ɵngcc0.ɵɵtext(24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(25, "div", 22);
    ɵngcc0.ɵɵelementStart(26, "div", 7);
    ɵngcc0.ɵɵelementStart(27, "div", 23);
    ɵngcc0.ɵɵelementStart(28, "div", 24);
    ɵngcc0.ɵɵelementStart(29, "a", 25);
    ɵngcc0.ɵɵelement(30, "img", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(31, "div", 26);
    ɵngcc0.ɵɵelementStart(32, "div", 27);
    ɵngcc0.ɵɵelementStart(33, "div", 28);
    ɵngcc0.ɵɵelementStart(34, "div", 29);
    ɵngcc0.ɵɵelementStart(35, "a", 20);
    ɵngcc0.ɵɵtext(36);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(37, "jazz-menu", 30);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
    ɵngcc0.ɵɵadvance(10);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.utilityMenu && ctx_r0.utilityMenu.utilityMenuComponents && ctx_r0.utilityMenu.utilityMenuComponents.length > 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showSearch);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵpropertyInterpolate("href", ctx_r0.siteBrandingUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r0.getSiteBrandingLogo(), ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("alt", ctx_r0.siteBrandingName);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵpropertyInterpolate("href", ctx_r0.siteBrandingUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.siteBrandingName);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.siteBrandingSlogan, " ");
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵpropertyInterpolate("href", ctx_r0.siteBrandingUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r0.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r0.getSiteBrandingLogo(), ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("alt", ctx_r0.title);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵpropertyInterpolate("href", ctx_r0.siteBrandingUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.siteBrandingName);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("menuItems", ctx_r0.mainMenu.menuComponents)("utilityItems", ctx_r0.utilityMenu.utilityMenuComponents);
} }
function HeaderComponent_header_1_li_25_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 34, 35);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r15 = ɵngcc0.ɵɵreference(1);
    const menuItem_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", menuItem_r12.url);
    ɵngcc0.ɵɵattribute("aria-current", _r15.isActive ? "page" : undefined);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(menuItem_r12.label);
} }
function HeaderComponent_header_1_li_25_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 36);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("href", menuItem_r12.externalUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(menuItem_r12.label);
} }
function HeaderComponent_header_1_li_25_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, HeaderComponent_header_1_li_25_a_1_Template, 3, 3, "a", 32);
    ɵngcc0.ɵɵtemplate(2, HeaderComponent_header_1_li_25_a_2_Template, 2, 2, "a", 33);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r12 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", menuItem_r12.url);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", menuItem_r12.externalUrl);
} }
function HeaderComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "header", 44);
    ɵngcc0.ɵɵelementStart(1, "h1", 3);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "a", 5);
    ɵngcc0.ɵɵtext(5, "Skip to main content");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "a", 6);
    ɵngcc0.ɵɵtext(7, "Skip to search options");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 7);
    ɵngcc0.ɵɵelementStart(9, "div", 45);
    ɵngcc0.ɵɵelementStart(10, "a", 46);
    ɵngcc0.ɵɵelement(11, "img", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(12, "div", 47);
    ɵngcc0.ɵɵelementStart(13, "div", 48);
    ɵngcc0.ɵɵelementStart(14, "a", 49);
    ɵngcc0.ɵɵtext(15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(16, "div", 50);
    ɵngcc0.ɵɵtext(17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(18, "div", 51);
    ɵngcc0.ɵɵelementStart(19, "section", 52);
    ɵngcc0.ɵɵelementStart(20, "h2", 3);
    ɵngcc0.ɵɵtext(21, "Related Links");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(22, "jazz-menu-main-button", 53);
    ɵngcc0.ɵɵelementStart(23, "nav", 54);
    ɵngcc0.ɵɵelementStart(24, "ul");
    ɵngcc0.ɵɵtemplate(25, HeaderComponent_header_1_li_25_Template, 3, 2, "li", 31);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(26, "div", 47);
    ɵngcc0.ɵɵelementStart(27, "section", 55);
    ɵngcc0.ɵɵelementStart(28, "h2", 3);
    ɵngcc0.ɵɵtext(29, "User Options");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(30, "ul");
    ɵngcc0.ɵɵelementStart(31, "li");
    ɵngcc0.ɵɵelementStart(32, "a", 56);
    ɵngcc0.ɵɵtext(33, "Log In");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.title);
    ɵngcc0.ɵɵadvance(8);
    ɵngcc0.ɵɵpropertyInterpolate("href", ctx_r1.siteBrandingUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r1.getSiteBrandingLogo(), ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("alt", ctx_r1.title);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r1.siteBrandingName);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.siteBrandingName);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.siteBrandingSlogan);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("buttonClass", "jazz-utility-header__nav-toggle")("showCompact", true);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.utilityMenu.utilityMenuComponents);
} }
function MenuComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 11);
    ɵngcc0.ɵɵlistener("mouseleave", function MenuComponent_ul_7_li_1_Template_li_mouseleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.onMouseOut($event); });
    ɵngcc0.ɵɵelementStart(1, "jazz-menu-item", 12);
    ɵngcc0.ɵɵlistener("closeSubMenus", function MenuComponent_ul_7_li_1_Template_jazz_menu_item_closeSubMenus_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.closeSubMenus(); })("resetSubMenus", function MenuComponent_ul_7_li_1_Template_jazz_menu_item_resetSubMenus_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.resetSubMenus(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const level1item_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("menuItem", level1item_r3);
} }
function MenuComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 9);
    ɵngcc0.ɵɵtemplate(1, MenuComponent_ul_7_li_1_Template, 2, 1, "li", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.menuItems);
} }
function MenuComponent_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "a", 14, 15);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const utilityItem_r9 = ctx.$implicit;
    const _r10 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("routerLink", utilityItem_r9.url);
    ɵngcc0.ɵɵattribute("aria-current", _r10.isActive ? "page" : undefined);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(utilityItem_r9.label);
} }
function MenuComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, MenuComponent_ul_9_li_1_Template, 4, 3, "li", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.utilityItems);
} }
const _c4 = ["template"];
function MenuItemComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 5, 6);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r5 = ɵngcc0.ɵɵreference(1);
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("routerLink", ctx_r2.menuItem.url);
    ɵngcc0.ɵɵattribute("aria-current", _r5.isActive ? "page" : undefined);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.menuItem.label);
} }
function MenuItemComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("href", ctx_r3.menuItem.externalUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.menuItem.label);
} }
function MenuItemComponent_ng_template_0_ul_3_li_1_jazz_menu_item_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "jazz-menu-item", 10);
} if (rf & 2) {
    const levelItem_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("menuItem", levelItem_r7);
} }
function MenuItemComponent_ng_template_0_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, MenuItemComponent_ng_template_0_ul_3_li_1_jazz_menu_item_1_Template, 1, 1, "jazz-menu-item", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const levelItem_r7 = ctx.$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.removeSelf(levelItem_r7));
} }
function MenuItemComponent_ng_template_0_ul_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, MenuItemComponent_ng_template_0_ul_3_li_1_Template, 2, 1, "li", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r4.getClass());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.menuItem.menuComponents);
} }
function MenuItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵtemplate(0, MenuItemComponent_ng_template_0_a_0_Template, 3, 3, "a", 1);
    ɵngcc0.ɵɵtemplate(1, MenuItemComponent_ng_template_0_a_1_Template, 2, 2, "a", 2);
    ɵngcc0.ɵɵelementStart(2, "jazz-sub-button", 3);
    ɵngcc0.ɵɵlistener("closeSubMenus", function MenuItemComponent_ng_template_0_Template_jazz_sub_button_closeSubMenus_2_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.close(); })("resetSubMenus", function MenuItemComponent_ng_template_0_Template_jazz_sub_button_resetSubMenus_2_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.reset(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, MenuItemComponent_ng_template_0_ul_3_Template, 2, 3, "ul", 4);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.menuItem.url);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.menuItem.externalUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("menuItem", ctx_r1.menuItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.menuItem && ctx_r1.menuItem.menuComponents && ctx_r1.menuItem.menuComponents.length > 0);
} }
const _c5 = ["mainButtonTemplate"];
function MenuMainButtonComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 1);
    ɵngcc0.ɵɵlistener("click", function MenuMainButtonComponent_ng_template_0_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onMainMenuClick($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "i", 2);
    ɵngcc0.ɵɵlistener("click", function MenuMainButtonComponent_ng_template_0_Template_i_click_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onMainMenuClick($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 3);
    ɵngcc0.ɵɵtext(4, "Open Navigation Menu");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.buttonClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.getMenuText(), "");
} }
const _c6 = ["subButtonTemplate"];
function MenuSubButtonComponent_ng_template_0_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 2);
    ɵngcc0.ɵɵlistener("click", function MenuSubButtonComponent_ng_template_0_button_0_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(2); return ctx_r3.onSubMenuClick($event); });
    ɵngcc0.ɵɵelementStart(1, "span", 3);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.menuItem.label, " ");
} }
function MenuSubButtonComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MenuSubButtonComponent_ng_template_0_button_0_Template, 3, 1, "button", 1);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.menuItem && ctx_r1.menuItem.menuComponents && ctx_r1.menuItem.menuComponents.length > 0);
} }
const _c7 = ["jazzModalWrapper"];
function PagerComponent_nav_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PagerComponent_nav_0_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.setPage(ctx_r6.currentPage - 1); });
    ɵngcc0.ɵɵelement(1, "i", 8);
    ɵngcc0.ɵɵtext(2, "Previous");
    ɵngcc0.ɵɵelementEnd();
} }
function PagerComponent_nav_0_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵelement(1, "i", 8);
    ɵngcc0.ɵɵtext(2, "Previous");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵattribute("aria-disabled", true);
} }
function PagerComponent_nav_0_li_5_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 12);
    ɵngcc0.ɵɵlistener("click", function PagerComponent_nav_0_li_5_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const page_r8 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.setPage(page_r8 + 1); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵattributeInterpolate1("aria-label", "Go to ", page_r8 + 1, "");
    ɵngcc0.ɵɵattribute("data-page", page_r8 + 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", page_r8 + 1, " ");
} }
function PagerComponent_nav_0_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1, "...");
    ɵngcc0.ɵɵelementEnd();
} }
function PagerComponent_nav_0_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, PagerComponent_nav_0_li_5_a_1_Template, 2, 3, "a", 10);
    ɵngcc0.ɵɵtemplate(2, PagerComponent_nav_0_li_5_span_2_Template, 2, 0, "span", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("aria-current", ctx_r3.currentPage == page_r8 + 1 ? "page" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", page_r8 >= 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", page_r8 < 0);
} }
function PagerComponent_nav_0_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 13);
    ɵngcc0.ɵɵlistener("click", function PagerComponent_nav_0_a_7_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.setPage(ctx_r15.currentPage + 1); });
    ɵngcc0.ɵɵtext(1, "Next");
    ɵngcc0.ɵɵelement(2, "i", 14);
    ɵngcc0.ɵɵelementEnd();
} }
function PagerComponent_nav_0_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1, "Next");
    ɵngcc0.ɵɵelement(2, "i", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵattribute("aria-disabled", true);
} }
function PagerComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nav", 1);
    ɵngcc0.ɵɵelementStart(1, "ul");
    ɵngcc0.ɵɵelementStart(2, "li");
    ɵngcc0.ɵɵtemplate(3, PagerComponent_nav_0_a_3_Template, 3, 0, "a", 2);
    ɵngcc0.ɵɵtemplate(4, PagerComponent_nav_0_span_4_Template, 3, 1, "span", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, PagerComponent_nav_0_li_5_Template, 3, 3, "li", 4);
    ɵngcc0.ɵɵelementStart(6, "li");
    ɵngcc0.ɵɵtemplate(7, PagerComponent_nav_0_a_7_Template, 3, 0, "a", 5);
    ɵngcc0.ɵɵtemplate(8, PagerComponent_nav_0_span_8_Template, 3, 1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.currentPage != 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.currentPage == 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.iterablePages());
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.currentPage != ctx_r0.totalPages);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.currentPage == ctx_r0.totalPages);
} }
const _c8 = ["tabItem"];
function TabsComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 3, 4);
    ɵngcc0.ɵɵlistener("click", function TabsComponent_div_0_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const tab_r3 = ctx.$implicit; const ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.handleClickEvent(tab_r3); })("keyup", function TabsComponent_div_0_button_1_Template_button_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const tab_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.handleKeyboardEvent(tab_r3, i_r4, $event); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("id", ctx_r2.getTabId(i_r4));
    ɵngcc0.ɵɵattribute("tabindex", tab_r3.tabindex)("aria-disabled", tab_r3.disabled)("aria-selected", tab_r3.selected)("aria-controls", tab_r3.controls)("aria-label", tab_r3.ariaLabel || null)("aria-labelledby", !tab_r3.ariaLabel && tab_r3.ariaLabelledby ? tab_r3.ariaLabelledby : null);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(tab_r3.label);
} }
function TabsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, TabsComponent_div_0_button_1_Template, 3, 8, "button", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("jazz-auto-activate", ctx_r0.autoActivate);
    ɵngcc0.ɵɵproperty("id", ctx_r0.getTabListId());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.tabs);
} }
function TabsComponent_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 6, 7);
    ɵngcc0.ɵɵlistener("click", function TabsComponent_div_1_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const tab_r10 = ctx.$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.handleClickEvent(tab_r10); })("keyup", function TabsComponent_div_1_a_1_Template_a_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const tab_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.handleKeyboardEvent(tab_r10, i_r11, $event); });
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("id", ctx_r9.getTabId(i_r11))("routerLink", tab_r10.routeTo);
    ɵngcc0.ɵɵattribute("tabindex", tab_r10.tabindex)("aria-disabled", tab_r10.disabled)("aria-selected", tab_r10.selected)("aria-controls", tab_r10.controls)("aria-label", tab_r10.ariaLabel || null)("aria-labelledby", !tab_r10.ariaLabel && tab_r10.ariaLabelledby ? tab_r10.ariaLabelledby : null);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(tab_r10.label);
} }
function TabsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, TabsComponent_div_1_a_1_Template, 4, 9, "a", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("jazz-auto-activate", ctx_r1.autoActivate);
    ɵngcc0.ɵɵproperty("id", ctx_r1.getTabListId());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.tabs);
} }
function UtilityHeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", ctx_r0.siteBrandingLink, ɵngcc0.ɵɵsanitizeUrl)("title", ctx_r0.siteBrandingTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.siteBrandingName);
} }
function UtilityHeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.siteBrandingSlogan);
} }
function UtilityHeaderComponent_ng_template_11_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 21);
    ɵngcc0.ɵɵtext(1, "Office of ");
    ɵngcc0.ɵɵelement(2, "br");
    ɵngcc0.ɵɵelementStart(3, "div", 22);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate1("title", "Office of ", ctx_r5.officeOf, "");
    ɵngcc0.ɵɵproperty("href", ctx_r5.officeOfLink, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.officeOf);
} }
function UtilityHeaderComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, UtilityHeaderComponent_ng_template_11_a_0_Template, 5, 3, "a", 20);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.officeOf);
} }
function UtilityHeaderComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "a", 23);
    ɵngcc0.ɵɵlistener("click", function UtilityHeaderComponent_li_22_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.toggleMenu(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r6 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(link_r6.class);
    ɵngcc0.ɵɵproperty("href", link_r6.url, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵattribute("target", link_r6.external ? "_blank" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(link_r6.label);
} }
function UtilityHeaderComponent_ng_template_27_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "a", 25);
    ɵngcc0.ɵɵtext(2, "Log In");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", ctx_r9.loginUrl, ɵngcc0.ɵɵsanitizeUrl);
} }
function UtilityHeaderComponent_ng_template_27_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "a", 25);
    ɵngcc0.ɵɵtext(2, "Log Out");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("href", ctx_r10.logoutUrl, ɵngcc0.ɵɵsanitizeUrl);
} }
function UtilityHeaderComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, UtilityHeaderComponent_ng_template_27_li_1_Template, 3, 1, "li", 24);
    ɵngcc0.ɵɵtemplate(2, UtilityHeaderComponent_ng_template_27_li_2_Template, 3, 1, "li", 24);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.username);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.username);
} }
function FormFieldErrorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Max Length: ", ctx_r2.messageParm("maxlength"), "");
} }
function FormFieldErrorComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1, "Max Length Exceeded");
    ɵngcc0.ɵɵelementEnd();
} }
function FormFieldErrorComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Min Length: ", ctx_r4.messageParm("minlength"), "");
} }
function FormFieldErrorComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1, "Min Length Required");
    ɵngcc0.ɵɵelementEnd();
} }
function FormFieldErrorComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Min Value: ", ctx_r6.messageParm("min"), "");
} }
function FormFieldErrorComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1, "Min Value Not Met");
    ɵngcc0.ɵɵelementEnd();
} }
function FormFieldErrorComponent_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.messageParm("email"));
} }
function FormFieldErrorComponent_ng_container_0_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1, "Invalid Date");
    ɵngcc0.ɵɵelementEnd();
} }
function FormFieldErrorComponent_ng_container_0_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1, "Invalid Year");
    ɵngcc0.ɵɵelementEnd();
} }
function FormFieldErrorComponent_ng_container_0_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r11.label, " is Required");
} }
function FormFieldErrorComponent_ng_container_0_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r12.form.get(ctx_r12.controlName).errors["invalid"]);
} }
function FormFieldErrorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, FormFieldErrorComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵtemplate(2, FormFieldErrorComponent_ng_container_0_div_2_Template, 2, 0, "div", 1);
    ɵngcc0.ɵɵtemplate(3, FormFieldErrorComponent_ng_container_0_div_3_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵtemplate(4, FormFieldErrorComponent_ng_container_0_div_4_Template, 2, 0, "div", 1);
    ɵngcc0.ɵɵtemplate(5, FormFieldErrorComponent_ng_container_0_div_5_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵtemplate(6, FormFieldErrorComponent_ng_container_0_div_6_Template, 2, 0, "div", 1);
    ɵngcc0.ɵɵtemplate(7, FormFieldErrorComponent_ng_container_0_div_7_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵtemplate(8, FormFieldErrorComponent_ng_container_0_div_8_Template, 2, 0, "div", 1);
    ɵngcc0.ɵɵtemplate(9, FormFieldErrorComponent_ng_container_0_div_9_Template, 2, 0, "div", 1);
    ɵngcc0.ɵɵtemplate(10, FormFieldErrorComponent_ng_container_0_div_10_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵtemplate(11, FormFieldErrorComponent_ng_container_0_div_11_Template, 2, 1, "div", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("maxlength") && ctx_r0.messageParm("maxlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("maxlength") && !ctx_r0.messageParm("maxlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("minlength") && ctx_r0.messageParm("minlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("minlength") && !ctx_r0.messageParm("minlength"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("min") && ctx_r0.messageParm("min"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("min") && !ctx_r0.messageParm("min"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("email") && !ctx_r0.form.get(ctx_r0.controlName).hasError("required"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("invalidDate"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("invalidYear"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("required") && !ctx_r0.form.get(ctx_r0.controlName).hasError("invalidDate"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.form.get(ctx_r0.controlName).hasError("invalid"));
} }
function FormFieldErrorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
} }
function FormFieldComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(msg_r2);
} }
function FormFieldComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, FormFieldComponent_ng_container_3_span_1_Template, 2, 1, "span", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.errorMessages);
} }
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
const MULTISELECTABLE = 'aria-multiselectable';
const ARIA_CONTROLS = 'aria-controls';
const HIDDEN = 'hidden';
/**
 * An Accordion is a vertically stacked set of headings that each control the visibility of an associated content section.
 *
 * <example-url>http://localhost:4200/jazz-design-system/#/accordion/accordionExample</example-url>
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
class AccordionComponent {
    constructor() {
        this.showBorder = false;
        this.multiSelect = true;
        /**
         * This click method is added as a click listener for all the jazzAccordionButtons buttons.
         */
        this.click = (event) => {
            const button = event.target;
            const accordionEl = button.closest(ACCORDION_SELECTOR);
            const multiselectable = accordionEl.getAttribute(MULTISELECTABLE) === 'true';
            const expanded = this.toggleControl(button, null);
            if (expanded && !multiselectable) {
                this.accordionButtons.forEach((other) => {
                    if (other.nativeElement !== button) {
                        this.toggleControl(other.nativeElement, false);
                    }
                });
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
            if (safeExpanded) {
                controlledElement.removeAttribute(HIDDEN);
            }
            else {
                controlledElement.setAttribute(HIDDEN, '');
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
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(); };
AccordionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["jazz-accordion"]], contentQueries: function AccordionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c0, true, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accordionButtons = _t);
    } }, inputs: { showBorder: "showBorder", multiSelect: "multiSelect" }, ngContentSelectors: _c1, decls: 2, vars: 4, consts: [["role", "region"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("jazz-accordion ", ctx.showBorder ? "jazz-accordion--bordered" : "", "");
        ɵngcc0.ɵɵattribute("aria-multiselectable", ctx.multiSelect ? true : false);
    } }, encapsulation: 2 });
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    accordionButtons: [{ type: ContentChildren, args: ['jazzAccordionButtons', { descendants: true, read: ElementRef },] }],
    showBorder: [{ type: Input }],
    multiSelect: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-accordion',
                template: "<div class=\"jazz-accordion {{showBorder?'jazz-accordion--bordered':''}}\"\n     [attr.aria-multiselectable]=\"multiSelect ? true : false\"\n     role=\"region\">\n  <ng-content></ng-content>\n</div>\n"
            }]
    }], function () { return []; }, { showBorder: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], accordionButtons: [{
            type: ContentChildren,
            args: ['jazzAccordionButtons', { descendants: true, read: ElementRef }]
        }] }); })();

class AccordionModule {
}
AccordionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AccordionModule });
AccordionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AccordionModule, { declarations: [AccordionComponent], exports: [AccordionComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AccordionComponent
                ],
                exports: [
                    AccordionComponent
                ]
            }]
    }], null, null); })();

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
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["jazz-alert"]], inputs: { heading: "heading", title: "title", content: "content" }, outputs: { onClose: "onClose" }, ngContentSelectors: _c1, decls: 10, vars: 3, consts: [[1, "jazz-alert-section"], [1, "jazz-alert-section__heading", "jazz-visually-hidden"], [1, "jazz-alert-section__content"], [1, "jazz-row"], [1, "jazz-alert-section__title"], ["role", "button", 1, "jazz-alert-section__close", 3, "title", "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "section", 0);
        ɵngcc0.ɵɵelementStart(1, "h2", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "h3", 4);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "a", 5);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_a_click_8_listener() { return ctx.close(); });
        ɵngcc0.ɵɵtext(9, "X");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.heading);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate1("title", "Hide alert with title ", ctx.title, " until it is updated");
    } }, encapsulation: 2 });
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    heading: [{ type: Input }],
    title: [{ type: Input }],
    content: [{ type: Input }],
    onClose: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-alert',
                template: "<section class=\"jazz-alert-section\">\n  <h2 class=\"jazz-alert-section__heading jazz-visually-hidden\">{{ heading }}</h2>\n  <div class=\"jazz-alert-section__content\">\n    <div class=\"jazz-row\">\n      <h3 class=\"jazz-alert-section__title\">{{ title }}</h3>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <a title=\"Hide alert with title {{ title }} until it is updated\" class=\"jazz-alert-section__close\" role=\"button\" (click)=\"close()\">X</a>\n</section>\n"
            }]
    }], function () { return []; }, { onClose: [{
            type: Output
        }], heading: [{
            type: Input
        }], title: [{
            type: Input
        }], content: [{
            type: Input
        }] }); })();

class AlertModule {
}
AlertModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AlertModule });
AlertModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AlertModule, { declarations: [AlertComponent], exports: [AlertComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AlertComponent
                ],
                exports: [
                    AlertComponent
                ]
            }]
    }], null, null); })();

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
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["jazz-breadcrumb"]], inputs: { disabled: "disabled", label: "label", url: "url", iconClass: "iconClass" }, decls: 0, vars: 0, template: function BreadcrumbComponent_Template(rf, ctx) { }, encapsulation: 2 });
BreadcrumbComponent.propDecorators = {
    disabled: [{ type: Input }],
    label: [{ type: Input }],
    url: [{ type: Input }],
    iconClass: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-breadcrumb',
                template: ``
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], label: [{
            type: Input
        }], url: [{
            type: Input
        }], iconClass: [{
            type: Input
        }] }); })();
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
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
BreadcrumbsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["jazz-breadcrumbs"]], contentQueries: function BreadcrumbsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, BreadcrumbComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.breadcrumbs = _t);
    } }, decls: 3, vars: 1, consts: [["aria-label", "Breadcrumbs", 1, "jazz-breadcrumb"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["crumbLink", "routerLinkActive"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nav", 0);
        ɵngcc0.ɵɵelementStart(1, "ol");
        ɵngcc0.ɵɵtemplate(2, BreadcrumbsComponent_li_2_Template, 4, 3, "li", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.breadcrumbs);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgIf, ɵngcc1.RouterLinkWithHref, ɵngcc1.RouterLinkActive], styles: [""] });
BreadcrumbsComponent.ctorParameters = () => [
    { type: Router }
];
BreadcrumbsComponent.propDecorators = {
    breadcrumbs: [{ type: ContentChildren, args: [BreadcrumbComponent,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreadcrumbsComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-breadcrumbs',
                template: "<nav class=\"jazz-breadcrumb\" aria-label=\"Breadcrumbs\">\n  <ol>\n    <li *ngFor=\"let crumb of breadcrumbs\">\n      <i *ngIf=\"crumb.iconClass\" class=\"jazz-icon {{crumb.iconClass}}\"></i>\n      <a *ngIf=\"crumb.url && !isActiveRoute(crumb.url)\" [routerLink]=\"crumb.url\" routerLinkActive=\"active\" #crumbLink=\"routerLinkActive\"\n         [routerLinkActiveOptions]=\"{ exact: true }\"\n         [attr.aria-current]=\"crumbLink.isActive ? 'page' : undefined\">{{crumb.label}}\n      </a>\n\n      <span *ngIf=\"isActiveRoute(crumb.url)\"\n            [attr.aria-current]=\"isActiveRoute(crumb.url) ? 'page' : undefined\">\n        {{crumb.label}}\n      </span>\n    </li>\n  </ol>\n</nav>\n",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc1.Router }]; }, { breadcrumbs: [{
            type: ContentChildren,
            args: [BreadcrumbComponent]
        }] }); })();

class BreadcrumbsModule {
}
BreadcrumbsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BreadcrumbsModule });
BreadcrumbsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BreadcrumbsModule_Factory(t) { return new (t || BreadcrumbsModule)(); }, imports: [[
            CommonModule,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BreadcrumbsModule, { declarations: function () { return [BreadcrumbComponent, BreadcrumbsComponent]; }, imports: function () { return [CommonModule,
        RouterModule]; }, exports: function () { return [BreadcrumbComponent, BreadcrumbsComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreadcrumbsModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

class MainMenuItemComponent {
}
MainMenuItemComponent.ɵfac = function MainMenuItemComponent_Factory(t) { return new (t || MainMenuItemComponent)(); };
MainMenuItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MainMenuItemComponent, selectors: [["jazz-main-menu-item"]], contentQueries: function MainMenuItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MainMenuItemComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menuComponents = _t);
    } }, inputs: { url: "url", externalUrl: "externalUrl", label: "label", shownByDefault: "shownByDefault" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function MainMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
MainMenuItemComponent.propDecorators = {
    url: [{ type: Input }],
    externalUrl: [{ type: Input }],
    label: [{ type: Input }],
    shownByDefault: [{ type: Input }],
    menuComponents: [{ type: ContentChildren, args: [MainMenuItemComponent, { descendants: false },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MainMenuItemComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-main-menu-item',
                template: `
      <ng-content></ng-content>
  `
            }]
    }], null, { url: [{
            type: Input
        }], externalUrl: [{
            type: Input
        }], label: [{
            type: Input
        }], shownByDefault: [{
            type: Input
        }], menuComponents: [{
            type: ContentChildren,
            args: [MainMenuItemComponent, { descendants: false }]
        }] }); })();

class MainMenuComponent {
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(); };
MainMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MainMenuComponent, selectors: [["jazz-main-menu"]], contentQueries: function MainMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MainMenuItemComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menuComponents = _t);
    } }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
MainMenuComponent.propDecorators = {
    menuComponents: [{ type: ContentChildren, args: [MainMenuItemComponent, { descendants: false },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MainMenuComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-main-menu',
                template: `
      <ng-content></ng-content>
  `
            }]
    }], null, { menuComponents: [{
            type: ContentChildren,
            args: [MainMenuItemComponent, { descendants: false }]
        }] }); })();

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
SearchButtonComponent.ɵfac = function SearchButtonComponent_Factory(t) { return new (t || SearchButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
SearchButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SearchButtonComponent, selectors: [["jazz-search-button"]], viewQuery: function SearchButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c3, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.searchButtonTemplate = _t.first);
    } }, decls: 2, vars: 0, consts: [["searchButtonTemplate", ""], ["aria-expanded", "false", "aria-label", "Search Toggle", 1, "jazz-header__search-bar-toggle", 3, "click"], ["aria-hidden", "true", 1, "jazz-icon", "jazz-icon-search", 3, "click"]], template: function SearchButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SearchButtonComponent_ng_template_0_Template, 2, 0, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
SearchButtonComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
SearchButtonComponent.propDecorators = {
    searchButtonTemplate: [{ type: ViewChild, args: ['searchButtonTemplate', { static: true },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchButtonComponent, [{
        type: Component,
        args: [{
                selector: 'jazz-search-button',
                template: "<ng-template #searchButtonTemplate>\n  <button class=\"jazz-header__search-bar-toggle\" (click)='onSearchClick($event)'\n          aria-expanded=\"false\" aria-label=\"Search Toggle\">\n    <i class=\"jazz-icon jazz-icon-search\" aria-hidden=\"true\" (click)='onMainMenuSearchIconClick($event)'></i>\n  </button>\n</ng-template>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { searchButtonTemplate: [{
            type: ViewChild,
            args: ['searchButtonTemplate', { static: true }]
        }] }); })();

class UtilityItemComponent {
}
UtilityItemComponent.ɵfac = function UtilityItemComponent_Factory(t) { return new (t || UtilityItemComponent)(); };
UtilityItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UtilityItemComponent, selectors: [["jazz-utility-item"]], inputs: { url: "url", externalUrl: "externalUrl", label: "label" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function UtilityItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
UtilityItemComponent.propDecorators = {
    url: [{ type: Input }],
    externalUrl: [{ type: Input }],
    label: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UtilityItemComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-item',
                template: `
      <ng-content></ng-content>
  `
            }]
    }], null, { url: [{
            type: Input
        }], externalUrl: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();

class UtilityMenuComponent {
}
UtilityMenuComponent.ɵfac = function UtilityMenuComponent_Factory(t) { return new (t || UtilityMenuComponent)(); };
UtilityMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UtilityMenuComponent, selectors: [["jazz-utility-menu"]], contentQueries: function UtilityMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, UtilityItemComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.utilityMenuComponents = _t);
    } }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function UtilityMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
UtilityMenuComponent.propDecorators = {
    utilityMenuComponents: [{ type: ContentChildren, args: [UtilityItemComponent,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UtilityMenuComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-menu',
                template: `
      <ng-content></ng-content>
  `
            }]
    }], null, { utilityMenuComponents: [{
            type: ContentChildren,
            args: [UtilityItemComponent]
        }] }); })();

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
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
HeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["jazz-header"]], contentQueries: function HeaderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MainMenuComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, UtilityMenuComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mainMenu = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.utilityMenu = _t.first);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { showSearch: "showSearch", showCompact: "showCompact", title: "title", siteBrandingName: "siteBrandingName", siteBrandingSlogan: "siteBrandingSlogan", siteBrandingUrl: "siteBrandingUrl", siteBrandingLogo: "siteBrandingLogo" }, decls: 2, vars: 2, consts: [["role", "banner", "class", "jazz-header", 4, "ngIf"], ["role", "banner", "class", "jazz-utility-header", 4, "ngIf"], ["role", "banner", 1, "jazz-header"], [1, "jazz-visually-hidden"], [1, "jazz-skip-links"], ["href", "#main-content", 1, "jazz-skip-link"], ["href", "#search", 1, "jazz-skip-link"], [1, "jazz-container"], [1, "jazz-header-container"], [1, "jazz-header-right-container"], [1, "jazz-header__utility-menu", "jazz-header__utility-menu--hide-small"], [4, "ngIf"], ["class", "jazz-header__search-bar", 4, "ngIf"], [1, "jazz-header-break"], [1, "jazz-header__site-branding"], [1, "jazz-header__site-branding-contents"], ["title", "Home", "rel", "home", "tabindex", "-1", "aria-hidden", "true", 1, "jazz-header__site-branding-home-link", 3, "href"], [3, "src", "alt"], [1, "jazz-header__site-branding-info"], [1, "jazz-header__site-branding-name"], ["title", "Home", "rel", "home", 3, "href"], [1, "jazz-header__site-branding-slogan"], [1, "jazz-header-collapsed-header"], [1, "jazz-header-collapsed-container"], [1, "jazz-header-collapsed__pu-branding"], [3, "href", "title"], [1, "jazz-header-collapsed__site-branding--divider"], [1, "jazz-header-collapsed__site-branding"], [1, "jazz-header-collapsed__site-branding-info"], [1, "jazz-header-collapsed__site-branding-name"], [3, "menuItems", "utilityItems"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], ["menuLink", "routerLinkActive"], [3, "href"], [1, "jazz-header__search-bar"], [1, "jazz-header__search-bar-panel"], ["action", "javascript:void(0)", "method", "get", "accept-charset", "UTF-8", "role", "search"], ["for", "search-field", 1, "jazz-visually-hidden"], ["id", "search"], ["type", "search", "id", "search-field", "placeholder", "Search", "autocomplete", "off"], ["type", "submit", 1, "jazz-button"], ["role", "banner", 1, "jazz-utility-header"], [1, "jazz-utility-header__branding"], [1, "jazz-utility-header__pu_logo", 3, "href", "title"], [1, "jazz-div"], [1, "jazz-utility-header__site-branding"], ["href", "javascript:void(0);", "rel", "home", 1, "jazz-utility-header__site-name", 3, "title"], [1, "jazz-utility-header__site-slogan"], [1, "jazz-utility-header__options"], [1, "jazz-utility-header__nav"], [3, "buttonClass", "showCompact"], [1, "jazz-nav"], [1, "jazz-utility-header__user-options"], ["href", "javascript:void(0);"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, HeaderComponent_header_0_Template, 38, 17, "header", 0);
        ɵngcc0.ɵɵtemplate(1, HeaderComponent_header_1_Template, 34, 11, "header", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.showCompact);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showCompact);
    } }, directives: function () { return [ɵngcc2.NgIf, MenuComponent, ɵngcc2.NgForOf, ɵngcc1.RouterLinkWithHref, ɵngcc1.RouterLinkActive, SearchButtonComponent, MenuMainButtonComponent]; }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-header',
                template: "<header role=\"banner\" class=\"jazz-header\" *ngIf=\"!showCompact\">\n  <h1 class=\"jazz-visually-hidden\">{{title}}</h1>\n  <div class=\"jazz-skip-links\">\n    <a href=\"#main-content\" class=\"jazz-skip-link\">Skip to main content</a>\n    <a href=\"#search\" class=\"jazz-skip-link\">Skip to search options</a>\n  </div>\n  <div class=\"jazz-container\">\n  <div class=\"jazz-header-container\">\n    <div class=\"jazz-header-right-container\">\n      <div class=\"jazz-header__utility-menu jazz-header__utility-menu--hide-small\">\n        <ul *ngIf=\"utilityMenu && utilityMenu.utilityMenuComponents && utilityMenu.utilityMenuComponents.length > 0\">\n          <li *ngFor=\"let utilityItem of utilityMenu.utilityMenuComponents\">\n            <a *ngIf=\"utilityItem.url\" [routerLink]=\"utilityItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n               [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{utilityItem.label}}</a>\n\n            <a *ngIf=\"utilityItem.externalUrl\" href=\"{{utilityItem.externalUrl}}\">{{utilityItem.label}}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"jazz-header__search-bar\" *ngIf=\"showSearch\">\n          <h2 class=\"jazz-visually-hidden\">Search</h2>\n          <jazz-search-button></jazz-search-button>\n          <div class=\"jazz-header__search-bar-panel\">\n            <form action=\"javascript:void(0)\" method=\"get\" accept-charset=\"UTF-8\" role=\"search\">\n              <label class=\"jazz-visually-hidden\" for=\"search-field\">Search</label>\n              <a id=\"search\">\n                <input type=\"search\" id=\"search-field\" placeholder=\"Search\" autocomplete=\"off\" />\n              </a>\n              <button class=\"jazz-button\" type=\"submit\">\n                <span class=\"jazz-visually-hidden\">Search</span>\n              </button>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jazz-header-break\"></div>\n  <div class=\"jazz-header__site-branding\">\n    <div class=\"jazz-header__site-branding-contents\">\n      <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\" tabindex=\"-1\" aria-hidden=\"true\" class=\"jazz-header__site-branding-home-link\">\n        <img src=\"{{ getSiteBrandingLogo() }}\" alt=\"{{ siteBrandingName }}\"/>\n      </a>\n      <div class=\"jazz-header__site-branding-info\">\n        <div class=\"jazz-header__site-branding-name\">\n          <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\">{{ siteBrandingName }}</a>\n        </div>\n        <div class=\"jazz-header__site-branding-slogan\">\n          {{ siteBrandingSlogan }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jazz-header-collapsed-header\">\n    <div class=\"jazz-container\">\n      <div class=\"jazz-header-collapsed-container\">\n        <div class=\"jazz-header-collapsed__pu-branding\">\n          <a href=\"{{ siteBrandingUrl }}\" title=\"{{title}}\"><img src=\"{{getSiteBrandingLogo()}}\" alt=\"{{title}}\" /></a>\n        </div>\n        <div class=\"jazz-header-collapsed__site-branding--divider\">\n        </div>\n        <div class=\"jazz-header-collapsed__site-branding\">\n          <div class=\"jazz-header-collapsed__site-branding-info\">\n            <div class=\"jazz-header-collapsed__site-branding-name\">\n              <a href=\"{{ siteBrandingUrl }}\" title=\"Home\" rel=\"home\">{{ siteBrandingName }}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <jazz-menu [menuItems]=\"mainMenu.menuComponents\" [utilityItems]=\"utilityMenu.utilityMenuComponents\">\n\n  </jazz-menu>\n  </div>\n</header>\n\n<header role=\"banner\" class=\"jazz-utility-header\" *ngIf=\"showCompact\">\n  <h1 class=\"jazz-visually-hidden\">{{ title }}</h1>\n  <div class=\"jazz-skip-links\">\n    <a href=\"#main-content\" class=\"jazz-skip-link\">Skip to main content</a>\n    <a href=\"#search\" class=\"jazz-skip-link\">Skip to search options</a>\n  </div>\n  <div class=\"jazz-container\">\n    <div class=\"jazz-utility-header__branding\">\n      <a class=\"jazz-utility-header__pu_logo\" href=\"{{ siteBrandingUrl }}\" title=\"{{ title }}\">\n        <img src=\"{{ getSiteBrandingLogo() }}\" alt=\"{{ title }}\" /></a>\n      <div class=\"jazz-div\"></div>\n      <div class=\"jazz-utility-header__site-branding\">\n        <a class=\"jazz-utility-header__site-name\" href=\"javascript:void(0);\" title=\"{{ siteBrandingName }}\" rel=\"home\">{{ siteBrandingName }}</a>\n        <div class=\"jazz-utility-header__site-slogan\">{{ siteBrandingSlogan }}</div>\n      </div>\n    </div>\n    <div class=\"jazz-utility-header__options\">\n      <section class=\"jazz-utility-header__nav\">\n        <h2 class=\"jazz-visually-hidden\">Related Links</h2>\n        <jazz-menu-main-button [buttonClass]=\"'jazz-utility-header__nav-toggle'\" [showCompact]=\"true\"></jazz-menu-main-button>\n        <nav class=\"jazz-nav\">\n          <ul>\n            <li *ngFor=\"let menuItem of utilityMenu.utilityMenuComponents\">\n              <a *ngIf=\"menuItem.url\" [routerLink]=\"menuItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n                 [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{menuItem.label}}</a>\n              <a *ngIf=\"menuItem.externalUrl\" href=\"{{menuItem.externalUrl}}\">{{menuItem.label}}</a>\n            </li>\n          </ul>\n        </nav>\n      </section>\n      <div class=\"jazz-div\"></div>\n      <section class=\"jazz-utility-header__user-options\">\n        <h2 class=\"jazz-visually-hidden\">User Options</h2>\n        <ul>\n          <li><a href=\"javascript:void(0);\">Log In</a></li>\n        </ul>\n      </section>\n    </div>\n  </div>\n</header>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { showSearch: [{
            type: Input
        }], showCompact: [{
            type: Input
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }], title: [{
            type: Input
        }], siteBrandingName: [{
            type: Input
        }], siteBrandingSlogan: [{
            type: Input
        }], siteBrandingUrl: [{
            type: Input
        }], siteBrandingLogo: [{
            type: Input
        }], mainMenu: [{
            type: ContentChild,
            args: [MainMenuComponent]
        }], utilityMenu: [{
            type: ContentChild,
            args: [UtilityMenuComponent]
        }] }); })();

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
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["jazz-menu"]], hostBindings: function MenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function MenuComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { menuItems: "menuItems", utilityItems: "utilityItems" }, decls: 10, vars: 3, consts: [["aria-label", "Main Menu", 1, "jazz-menu__main-menu"], [1, "jazz-visually-hidden"], [1, "jazz-container"], [1, "jazz-menu__main-menu-navbar"], ["buttonClass", "jazz-menu__menu-toggle", 3, "showCompact"], [1, "jazz-menu__nav-container"], ["class", "jazz-menubar", "role", "list", 4, "ngIf"], [1, "jazz-header__utility-menu", "jazz-header__utility-menu--hide-large"], [4, "ngIf"], ["role", "list", 1, "jazz-menubar"], [3, "mouseleave", 4, "ngFor", "ngForOf"], [3, "mouseleave"], [3, "menuItem", "closeSubMenus", "resetSubMenus"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"], ["menuLink", "routerLinkActive"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nav", 0);
        ɵngcc0.ɵɵelementStart(1, "h2", 1);
        ɵngcc0.ɵɵtext(2, "Main Menu");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelement(5, "jazz-menu-main-button", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵtemplate(7, MenuComponent_ul_7_Template, 2, 1, "ul", 6);
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵtemplate(9, MenuComponent_ul_9_Template, 2, 1, "ul", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("showCompact", false);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.menuItems && ctx.menuItems.length > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.utilityItems && ctx.utilityItems.length > 0);
    } }, directives: function () { return [MenuMainButtonComponent, ɵngcc2.NgIf, ɵngcc2.NgForOf, MenuItemComponent, ɵngcc1.RouterLinkWithHref, ɵngcc1.RouterLinkActive]; }, encapsulation: 2 });
MenuComponent.ctorParameters = () => [];
MenuComponent.propDecorators = {
    menuItems: [{ type: Input }],
    utilityItems: [{ type: Input }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-menu',
                template: "<nav aria-label=\"Main Menu\" class=\"jazz-menu__main-menu\">\n  <h2 class=\"jazz-visually-hidden\">Main Menu</h2>\n\n  <div class=\"jazz-container\">\n    <div class=\"jazz-menu__main-menu-navbar\">\n      <jazz-menu-main-button buttonClass=\"jazz-menu__menu-toggle\" [showCompact]=\"false\"></jazz-menu-main-button>\n      <div class=\"jazz-menu__nav-container\">\n        <ul *ngIf=\"menuItems && menuItems.length > 0\" class=\"jazz-menubar\" role=\"list\">\n            <li *ngFor=\"let level1item of menuItems\" (mouseleave)=\"onMouseOut($event)\">\n              <jazz-menu-item [menuItem]=\"level1item\" (closeSubMenus)=\"closeSubMenus()\" (resetSubMenus)=\"resetSubMenus()\"></jazz-menu-item>\n            </li>\n        </ul>\n        <div class=\"jazz-header__utility-menu jazz-header__utility-menu--hide-large\">\n          <ul *ngIf=\"utilityItems && utilityItems.length > 0\">\n            <li *ngFor=\"let utilityItem of utilityItems\" >\n              <a [routerLink]=\"utilityItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n                [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{utilityItem.label}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n"
            }]
    }], function () { return []; }, { onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }], menuItems: [{
            type: Input
        }], utilityItems: [{
            type: Input
        }] }); })();

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
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) { return new (t || MenuItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
MenuItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenuItemComponent, selectors: [["jazz-menu-item"]], viewQuery: function MenuItemComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c4, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { menuItem: "menuItem" }, outputs: { closeSubMenus: "closeSubMenus", resetSubMenus: "resetSubMenus" }, decls: 2, vars: 0, consts: [["template", ""], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], [3, "menuItem", "closeSubMenus", "resetSubMenus"], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], ["menuLink", "routerLinkActive"], [3, "href"], [4, "ngFor", "ngForOf"], [3, "menuItem", 4, "ngIf"], [3, "menuItem"]], template: function MenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MenuItemComponent_ng_template_0_Template, 4, 4, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: function () { return [ɵngcc2.NgIf, MenuSubButtonComponent, ɵngcc1.RouterLinkWithHref, ɵngcc1.RouterLinkActive, ɵngcc2.NgForOf, MenuItemComponent]; }, encapsulation: 2 });
MenuItemComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
MenuItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['template', { static: true },] }],
    menuItem: [{ type: Input }],
    closeSubMenus: [{ type: Output }],
    resetSubMenus: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuItemComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-menu-item',
                template: "<ng-template #template>\n  <a *ngIf=\"menuItem.url\" [routerLink]=\"menuItem.url\" routerLinkActive=\"active\" #menuLink=\"routerLinkActive\"\n    [attr.aria-current]=\"menuLink.isActive ? 'page' : undefined\">{{menuItem.label}}</a>\n  <a *ngIf=\"menuItem.externalUrl\" href=\"{{menuItem.externalUrl}}\">{{menuItem.label}}</a>\n  <jazz-sub-button [menuItem]=\"menuItem\" (closeSubMenus)=\"close()\" (resetSubMenus)=\"reset()\"></jazz-sub-button>\n  <ul *ngIf=\"menuItem && menuItem.menuComponents && menuItem.menuComponents.length > 0\" [class]=\"getClass()\">\n    <li *ngFor=\"let levelItem of menuItem.menuComponents\">\n        <jazz-menu-item *ngIf=\"!removeSelf(levelItem)\" [menuItem]=\"levelItem\"></jazz-menu-item>\n    </li>\n  </ul>\n</ng-template>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { closeSubMenus: [{
            type: Output
        }], resetSubMenus: [{
            type: Output
        }], template: [{
            type: ViewChild,
            args: ['template', { static: true }]
        }], menuItem: [{
            type: Input
        }] }); })();

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
MenuMainButtonComponent.ɵfac = function MenuMainButtonComponent_Factory(t) { return new (t || MenuMainButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
MenuMainButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenuMainButtonComponent, selectors: [["jazz-menu-main-button"]], viewQuery: function MenuMainButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c5, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mainButtonTemplate = _t.first);
    } }, inputs: { buttonClass: "buttonClass", showCompact: "showCompact" }, decls: 2, vars: 0, consts: [["mainButtonTemplate", ""], ["aria-expanded", "false", "aria-label", "Navigation Menu Toggle", 3, "click"], ["aria-hidden", "true", 1, "jazz-icon", "jazz-icon-menu", 3, "click"], [1, "jazz-visually-hidden"]], template: function MenuMainButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MenuMainButtonComponent_ng_template_0_Template, 5, 4, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
MenuMainButtonComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
MenuMainButtonComponent.propDecorators = {
    mainButtonTemplate: [{ type: ViewChild, args: ['mainButtonTemplate', { static: true },] }],
    buttonClass: [{ type: Input }],
    showCompact: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuMainButtonComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-menu-main-button',
                template: "<ng-template #mainButtonTemplate>\n  <button class=\"{{ buttonClass }}\" (click)='onMainMenuClick($event)'\n          aria-expanded=\"false\" aria-label=\"Navigation Menu Toggle\">\n    {{getMenuText()}}<i class=\"jazz-icon jazz-icon-menu\" aria-hidden=\"true\" (click)='onMainMenuClick($event)'></i>\n    <span class=\"jazz-visually-hidden\">Open Navigation Menu</span>\n  </button>\n</ng-template>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { mainButtonTemplate: [{
            type: ViewChild,
            args: ['mainButtonTemplate', { static: true }]
        }], buttonClass: [{
            type: Input
        }], showCompact: [{
            type: Input
        }] }); })();

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
MenuSubButtonComponent.ɵfac = function MenuSubButtonComponent_Factory(t) { return new (t || MenuSubButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
MenuSubButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenuSubButtonComponent, selectors: [["jazz-sub-button"]], viewQuery: function MenuSubButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c6, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.subButtonTemplate = _t.first);
    } }, inputs: { menuItem: "menuItem" }, outputs: { closeSubMenus: "closeSubMenus", resetSubMenus: "resetSubMenus" }, decls: 2, vars: 0, consts: [["subButtonTemplate", ""], ["class", "jazz-menu__submenu-toggle", "type", "button", "aria-expanded", "false", 3, "click", 4, "ngIf"], ["type", "button", "aria-expanded", "false", 1, "jazz-menu__submenu-toggle", 3, "click"], [1, "jazz-visually-hidden"]], template: function MenuSubButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MenuSubButtonComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc2.NgIf], encapsulation: 2 });
MenuSubButtonComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
MenuSubButtonComponent.propDecorators = {
    menuItem: [{ type: Input }],
    closeSubMenus: [{ type: Output }],
    resetSubMenus: [{ type: Output }],
    subButtonTemplate: [{ type: ViewChild, args: ['subButtonTemplate', { static: true },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuSubButtonComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-sub-button',
                template: "<ng-template #subButtonTemplate>\n  <button *ngIf='menuItem && menuItem.menuComponents && menuItem.menuComponents.length > 0' class=\"jazz-menu__submenu-toggle\" type=\"button\" aria-expanded=\"false\" (click)='onSubMenuClick($event)'>\n    <span class=\"jazz-visually-hidden\">\n      {{menuItem.label}}\n    </span>\n  </button>\n</ng-template>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { closeSubMenus: [{
            type: Output
        }], resetSubMenus: [{
            type: Output
        }], menuItem: [{
            type: Input
        }], subButtonTemplate: [{
            type: ViewChild,
            args: ['subButtonTemplate', { static: true }]
        }] }); })();

class MenuModule {
}
MenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MenuModule });
MenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            CommonModule,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MenuModule, { declarations: function () { return [MenuComponent, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent]; }, imports: function () { return [CommonModule,
        RouterModule]; }, exports: function () { return [MenuComponent, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

class HeaderModule {
}
HeaderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HeaderModule });
HeaderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            MenuModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HeaderModule, { declarations: function () { return [MainMenuComponent, MainMenuItemComponent, SearchButtonComponent, UtilityMenuComponent, UtilityItemComponent, HeaderComponent]; }, imports: function () { return [CommonModule,
        RouterModule, MenuModule]; }, exports: function () { return [MainMenuComponent, MainMenuItemComponent, SearchButtonComponent, UtilityMenuComponent, UtilityItemComponent, HeaderComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeaderModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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
ModalDialogComponent.ɵfac = function ModalDialogComponent_Factory(t) { return new (t || ModalDialogComponent)(); };
ModalDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalDialogComponent, selectors: [["jazz-modal-dialog"]], viewQuery: function ModalDialogComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalWrapper = _t.first);
    } }, inputs: { buttonLabel: "buttonLabel", title: "title", content: "content" }, outputs: { buttonClicked: "buttonClicked" }, ngContentSelectors: _c1, decls: 16, vars: 2, consts: [["role", "region", 1, "jazz-modal"], [1, "jazz-btn", "jazz-modal__button", 3, "click"], ["role", "presentation", 1, "jazz-modal-wrapper", 3, "keydown"], ["jazzModalWrapper", ""], ["role", "dialog", "aria-label", "Test Dialog with Script", "aria-modal", "true", 1, "jazz-modal-window", "jazz-modal--sm"], [1, "jazz-modal-title"], ["aria-label", "Close modal dialog", 1, "jazz-modal__button", "jazz-modal-button__close", "jazz-modal-button--transparent", 3, "click"], ["aria-labelledBy", "jazz-modal-title", 1, "jazz-modal-content"], [1, "jazz-modal-button-container"]], template: function ModalDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵlistener("click", function ModalDialogComponent_Template_button_click_1_listener($event) { return ctx.onAction($event); });
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2, 3);
        ɵngcc0.ɵɵlistener("keydown", function ModalDialogComponent_Template_div_keydown_3_listener($event) { return ctx.onAction($event); });
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementStart(8, "button", 6);
        ɵngcc0.ɵɵlistener("click", function ModalDialogComponent_Template_button_click_8_listener() { return ctx.close(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 7);
        ɵngcc0.ɵɵprojection(10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 8);
        ɵngcc0.ɵɵelementStart(12, "button", 1);
        ɵngcc0.ɵɵlistener("click", function ModalDialogComponent_Template_button_click_12_listener() { return ctx.close(); });
        ɵngcc0.ɵɵtext(13, "Cancel");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "button", 1);
        ɵngcc0.ɵɵlistener("click", function ModalDialogComponent_Template_button_click_14_listener() { return ctx.modalClick(); });
        ɵngcc0.ɵɵtext(15, "OK");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.buttonLabel);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.title, " ");
    } }, encapsulation: 2 });
ModalDialogComponent.ctorParameters = () => [];
ModalDialogComponent.propDecorators = {
    buttonLabel: [{ type: Input }],
    title: [{ type: Input }],
    content: [{ type: Input }],
    buttonClicked: [{ type: Output }],
    modalWrapper: [{ type: ViewChild, args: ['jazzModalWrapper',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalDialogComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-modal-dialog',
                template: "<div class=\"jazz-modal\" role=\"region\">\n  <button class=\"jazz-btn jazz-modal__button\" (click)=\"onAction($event)\">{{ buttonLabel }}</button>\n  <div #jazzModalWrapper role=\"presentation\" class=\"jazz-modal-wrapper\" (keydown)=\"onAction($event)\">\n    <div role=\"dialog\" aria-label=\"Test Dialog with Script\" aria-modal=\"true\" class=\"jazz-modal-window jazz-modal--sm\">\n      <div class=\"jazz-modal-title\">\n        {{ title }}\n        <button class=\"jazz-modal__button jazz-modal-button__close jazz-modal-button--transparent\"\n                aria-label=\"Close modal dialog\" (click)=\"close()\"></button>\n      </div>\n      <div class=\"jazz-modal-content\" aria-labelledBy=\"jazz-modal-title\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"jazz-modal-button-container\">\n        <button class=\"jazz-btn jazz-modal__button\" (click)=\"close()\">Cancel</button>\n        <button class=\"jazz-btn jazz-modal__button\" (click)=\"modalClick()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }]
    }], function () { return []; }, { buttonClicked: [{
            type: Output
        }], buttonLabel: [{
            type: Input
        }], title: [{
            type: Input
        }], content: [{
            type: Input
        }], modalWrapper: [{
            type: ViewChild,
            args: ['jazzModalWrapper']
        }] }); })();

class ModalDialogModule {
}
ModalDialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ModalDialogModule });
ModalDialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ModalDialogModule_Factory(t) { return new (t || ModalDialogModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ModalDialogModule, { declarations: [ModalDialogComponent], exports: [ModalDialogComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalDialogModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ModalDialogComponent
                ],
                exports: [
                    ModalDialogComponent
                ]
            }]
    }], null, null); })();

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
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PagerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PagerComponent, selectors: [["jazz-pager"]], inputs: { totalPages: "totalPages", currentPage: "currentPage" }, outputs: { pagerChange: "pagerChange" }, decls: 1, vars: 1, consts: [["class", "jazz-pager", "role", "navigation", "aria-label", "pagination", 4, "ngIf"], ["role", "navigation", "aria-label", "pagination", 1, "jazz-pager"], ["href", "javascript:void(0);", "data-page", "Previous", 3, "click", 4, "ngIf"], ["data-page", "Previous", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", "data-page", "Next", 3, "click", 4, "ngIf"], ["data-page", "Next", 4, "ngIf"], ["href", "javascript:void(0);", "data-page", "Previous", 3, "click"], [1, "jazz-icon", "jazz-icon-caret-left"], ["data-page", "Previous"], ["href", "javascript:void(0);", 3, "click", 4, "ngIf"], [4, "ngIf"], ["href", "javascript:void(0);", 3, "click"], ["href", "javascript:void(0);", "data-page", "Next", 3, "click"], [1, "jazz-icon", "jazz-icon-caret-right"], ["data-page", "Next"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, PagerComponent_nav_0_Template, 9, 5, "nav", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.totalPages && ctx.currentPage);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf], encapsulation: 2 });
PagerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PagerComponent.propDecorators = {
    totalPages: [{ type: Input, args: ['totalPages',] }],
    currentPage: [{ type: Input, args: ['currentPage',] }],
    pagerChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PagerComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-pager',
                template: "<nav *ngIf=\"totalPages && currentPage\" class=\"jazz-pager\" role=\"navigation\" aria-label=\"pagination\">\n  <ul>\n    <li>\n      <a *ngIf=\"(currentPage != 1)\" href=\"javascript:void(0);\" (click)=\"setPage(currentPage - 1)\" data-page=\"Previous\"><i class=\"jazz-icon jazz-icon-caret-left\"></i>Previous</a>\n      <span *ngIf=\"(currentPage == 1)\" [attr.aria-disabled]=\"true\" data-page=\"Previous\"><i class=\"jazz-icon jazz-icon-caret-left\"></i>Previous</span>\n    </li>\n    <li *ngFor=\"let page of iterablePages()\" attr.aria-current=\"{{ (currentPage == (page + 1)) ?'page': ''}}\">\n      <a *ngIf=\"page >= 0\" href=\"javascript:void(0);\" (click)=\"setPage(page + 1)\"\n         attr.aria-label=\"Go to {{page + 1}}\"\n         attr.data-page=\"{{page + 1}}\">{{page + 1}}\n      </a>\n      <span *ngIf=\"page < 0\">...</span>\n    </li>\n    <li>\n      <a *ngIf=\"(currentPage != totalPages)\" href=\"javascript:void(0);\" (click)=\"setPage(currentPage+ 1)\" data-page=\"Next\">Next<i class=\"jazz-icon jazz-icon-caret-right\"></i></a>\n      <span *ngIf=\"(currentPage == totalPages)\" [attr.aria-disabled]=\"true\" data-page=\"Next\">Next<i class=\"jazz-icon jazz-icon-caret-right\"></i></span>\n    </li>\n  </ul>\n</nav>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { pagerChange: [{
            type: Output
        }], totalPages: [{
            type: Input,
            args: ['totalPages']
        }], currentPage: [{
            type: Input,
            args: ['currentPage']
        }] }); })();

class PagerModule {
}
PagerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PagerModule });
PagerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PagerModule_Factory(t) { return new (t || PagerModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PagerModule, { declarations: function () { return [PagerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [PagerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PagerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    PagerComponent
                ],
                exports: [
                    PagerComponent
                ]
            }]
    }], null, null); })();

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
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(); };
TabComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabComponent, selectors: [["jazz-tab"]], inputs: { disabled: "disabled", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], selected: "selected", label: "label", controls: "controls", routeTo: "routeTo" }, decls: 0, vars: 0, template: function TabComponent_Template(rf, ctx) { }, encapsulation: 2 });
TabComponent.propDecorators = {
    disabled: [{ type: Input }],
    label: [{ type: Input }],
    controls: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    selected: [{ type: Input }],
    routeTo: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-tab',
                template: ``
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: Input,
            args: ['aria-labelledby']
        }], selected: [{
            type: Input
        }], label: [{
            type: Input
        }], controls: [{
            type: Input
        }], routeTo: [{
            type: Input
        }] }); })();
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
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
TabsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabsComponent, selectors: [["jazz-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabs = _t);
    } }, viewQuery: function TabsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c8, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabItems = _t);
    } }, inputs: { autoActivate: "autoActivate", useButtons: "useButtons" }, decls: 2, vars: 2, consts: [["class", "jazz-tablist", "role", "tablist", 3, "id", "jazz-auto-activate", 4, "ngIf"], ["role", "tablist", 1, "jazz-tablist", 3, "id"], ["role", "tab", 3, "id", "click", "keyup", 4, "ngFor", "ngForOf"], ["role", "tab", 3, "id", "click", "keyup"], ["tabItem", ""], ["role", "tab", "routerLinkActive", "active", 3, "id", "routerLink", "click", "keyup", 4, "ngFor", "ngForOf"], ["role", "tab", "routerLinkActive", "active", 3, "id", "routerLink", "click", "keyup"], ["tabItem", "", "buttonLink", "routerLinkActive"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TabsComponent_div_0_Template, 2, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(1, TabsComponent_div_1_Template, 2, 4, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.useButtons);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.useButtons);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc1.RouterLinkWithHref, ɵngcc1.RouterLinkActive], encapsulation: 2 });
TabsComponent.ctorParameters = () => [
    { type: Router }
];
TabsComponent.propDecorators = {
    tabs: [{ type: ContentChildren, args: [TabComponent,] }],
    tabItems: [{ type: ViewChildren, args: ['tabItem',] }],
    autoActivate: [{ type: Input }],
    useButtons: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabsComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.Router }]; }, { autoActivate: [{
            type: Input
        }], useButtons: [{
            type: Input
        }], tabs: [{
            type: ContentChildren,
            args: [TabComponent]
        }], tabItems: [{
            type: ViewChildren,
            args: ['tabItem']
        }] }); })();

class TabsModule {
}
TabsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabsModule });
TabsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[
            RouterModule,
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabsModule, { declarations: function () { return [TabComponent, TabsComponent]; }, imports: function () { return [RouterModule,
        CommonModule]; }, exports: function () { return [TabComponent, TabsComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabsModule, [{
        type: NgModule,
        args: [{
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
                ]
            }]
    }], null, null); })();

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
UtilityHeaderLinkComponent.ɵfac = function UtilityHeaderLinkComponent_Factory(t) { return new (t || UtilityHeaderLinkComponent)(); };
UtilityHeaderLinkComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UtilityHeaderLinkComponent, selectors: [["jazz-utility-header-link"]], inputs: { external: "external", url: "url", label: "label", class: "class", routerLink: "routerLink" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function UtilityHeaderLinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
UtilityHeaderLinkComponent.propDecorators = {
    url: [{ type: Input }],
    label: [{ type: Input }],
    external: [{ type: Input }],
    class: [{ type: Input }],
    routerLink: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UtilityHeaderLinkComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-header-link',
                template: `
      <ng-content></ng-content>
  `
            }]
    }], function () { return []; }, { external: [{
            type: Input
        }], url: [{
            type: Input
        }], label: [{
            type: Input
        }], class: [{
            type: Input
        }], routerLink: [{
            type: Input
        }] }); })();

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
UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */.ɵfac = function UtilityHeaderComponent_Factory(t) { return new (t || UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */)(); };
UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */, selectors: [["jazz-utility-header"]], contentQueries: function UtilityHeaderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, UtilityHeaderLinkComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.links = _t);
    } }, inputs: { stuckMobile: "stuckMobile", stuckDesktop: "stuckDesktop", puBrandingLogo: "puBrandingLogo", utilityLinksHeading: "utilityLinksHeading", officeOfTemplate: "officeOfTemplate", userOptionsTemplate: "userOptionsTemplate", primaryHeading: "primaryHeading", puBrandingTitle: "puBrandingTitle", siteBrandingName: "siteBrandingName", siteBrandingSlogan: "siteBrandingSlogan", siteBrandingLink: "siteBrandingLink", siteBrandingTitle: "siteBrandingTitle", officeOfLink: "officeOfLink", officeOf: "officeOf", loginUrl: "loginUrl", logoutUrl: "logoutUrl", username: "username" }, decls: 28, vars: 23, consts: [["role", "banner", 1, "jazz-utility-header"], [1, "jazz-visually-hidden"], [1, "jazz-container"], [1, "jazz-utility-header__branding"], ["href", "https://www.princeton.edu/", 1, "jazz-utility-header__pu_logo", 3, "title"], ["alt", "Princeton University Logo", 3, "src"], [1, "jazz-div"], [1, "jazz-utility-header__site-branding"], ["class", "jazz-utility-header__site-name", "rel", "home", 3, "href", "title", 4, "ngIf"], ["class", "jazz-utility-header__site-slogan", 4, "ngIf"], [3, "ngIf", "ngIfElse"], [1, "jazz-utility-header__options"], [1, "jazz-utility-header__nav"], [1, "jazz-utility-header__nav-toggle", 3, "click"], ["aria-hidden", "true", 1, "jazz-icon", "jazz-icon-menu"], [1, "jazz-nav"], [4, "ngFor", "ngForOf"], [1, "jazz-utility-header__user-options"], ["rel", "home", 1, "jazz-utility-header__site-name", 3, "href", "title"], [1, "jazz-utility-header__site-slogan"], ["class", "jazz-utility-header__site-name-office-of", "rel", "home", 3, "href", "title", 4, "ngIf"], ["rel", "home", 1, "jazz-utility-header__site-name-office-of", 3, "href", "title"], [1, "jazz-utility-header__site-name-office-of-department"], [3, "href", "click"], [4, "ngIf"], [3, "href"]], template: function UtilityHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "header", 0);
        ɵngcc0.ɵɵelementStart(1, "h1", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "a", 4);
        ɵngcc0.ɵɵelement(6, "img", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(7, "div", 6);
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵtemplate(9, UtilityHeaderComponent_a_9_Template, 2, 3, "a", 8);
        ɵngcc0.ɵɵtemplate(10, UtilityHeaderComponent_div_10_Template, 2, 1, "div", 9);
        ɵngcc0.ɵɵtemplate(11, UtilityHeaderComponent_ng_template_11_Template, 1, 1, "ng-template", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 11);
        ɵngcc0.ɵɵelementStart(13, "section", 12);
        ɵngcc0.ɵɵelementStart(14, "h2", 1);
        ɵngcc0.ɵɵtext(15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "button", 13);
        ɵngcc0.ɵɵlistener("click", function UtilityHeaderComponent_Template_button_click_16_listener() { return ctx.toggleMenu(); });
        ɵngcc0.ɵɵelement(17, "i", 14);
        ɵngcc0.ɵɵelementStart(18, "span", 1);
        ɵngcc0.ɵɵtext(19);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "nav", 15);
        ɵngcc0.ɵɵelementStart(21, "ul");
        ɵngcc0.ɵɵtemplate(22, UtilityHeaderComponent_li_22_Template, 3, 6, "li", 16);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(23, "div", 6);
        ɵngcc0.ɵɵelementStart(24, "section", 17);
        ɵngcc0.ɵɵelementStart(25, "h2", 1);
        ɵngcc0.ɵɵtext(26, "User Options");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(27, UtilityHeaderComponent_ng_template_27_Template, 3, 2, "ng-template", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("jazz-stuck-mobile", ctx.stuckMobile)("jazz-stuck", ctx.stuckDesktop);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.primaryHeading);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("title", ctx.puBrandingTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.puBrandingLogo, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.siteBrandingName);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.siteBrandingSlogan);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.officeOfTemplate)("ngIfElse", ctx.officeOfTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("jazz-expanded", ctx.menuExpanded);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.utilityLinksHeading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.menuExpanded);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("jazz-icon-menu", !ctx.menuExpanded)("jazz-icon-close", ctx.menuExpanded);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.menuButtonLabel);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.links);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.userOptionsTemplate)("ngIfElse", ctx.userOptionsTemplate);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return []; }, { stuckMobile: [{
            type: Input
        }], stuckDesktop: [{
            type: Input
        }], puBrandingLogo: [{
            type: Input
        }], utilityLinksHeading: [{
            type: Input
        }], links: [{
            type: ContentChildren,
            args: [UtilityHeaderLinkComponent]
        }], officeOfTemplate: [{
            type: Input,
            args: ['officeOfTemplate']
        }], userOptionsTemplate: [{
            type: Input,
            args: ['userOptionsTemplate']
        }], primaryHeading: [{
            type: Input
        }], puBrandingTitle: [{
            type: Input
        }], siteBrandingName: [{
            type: Input
        }], siteBrandingSlogan: [{
            type: Input
        }], siteBrandingLink: [{
            type: Input
        }], siteBrandingTitle: [{
            type: Input
        }], officeOfLink: [{
            type: Input
        }], officeOf: [{
            type: Input
        }], loginUrl: [{
            type: Input
        }], logoutUrl: [{
            type: Input
        }], username: [{
            type: Input
        }] }); })();

class UtilityHeaderModule {
}
UtilityHeaderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: UtilityHeaderModule });
UtilityHeaderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function UtilityHeaderModule_Factory(t) { return new (t || UtilityHeaderModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(UtilityHeaderModule, { declarations: function () { return [UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */, UtilityHeaderLinkComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */, UtilityHeaderLinkComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UtilityHeaderModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/**
 * Use 'invalid' validation error key to display any validation message
 */
class FormFieldErrorComponent {
    constructor() {
        this.messageParm = (key) => this.messageParms && this.messageParms[key] ? this.messageParms[key] : '';
    }
    hasError() {
        const field = this.form.get(this.controlName);
        return (field.touched && field.dirty && field.invalid);
    }
}
FormFieldErrorComponent.ɵfac = function FormFieldErrorComponent_Factory(t) { return new (t || FormFieldErrorComponent)(); };
FormFieldErrorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormFieldErrorComponent, selectors: [["field-error"]], inputs: { form: "form", controlName: "controlName", label: "label", messageParms: "messageParms" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "field-error", 4, "ngIf"], [1, "field-error"]], template: function FormFieldErrorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, FormFieldErrorComponent_ng_container_0_Template, 12, 11, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, FormFieldErrorComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.form.get(ctx.controlName).touched && ctx.form.get(ctx.controlName).dirty);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hasError());
    } }, directives: [ɵngcc2.NgIf], encapsulation: 2 });
FormFieldErrorComponent.propDecorators = {
    form: [{ type: Input, args: ['form',] }],
    controlName: [{ type: Input, args: ['controlName',] }],
    label: [{ type: Input, args: ['label',] }],
    messageParms: [{ type: Input, args: ['messageParms',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormFieldErrorComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'field-error',
                template: `
    <ng-container *ngIf="form.get(controlName).touched && form.get(controlName).dirty">
      <div class="field-error" *ngIf="form.get(controlName).hasError('maxlength') && messageParm('maxlength')">Max Length: {{messageParm('maxlength')}}</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('maxlength') && !messageParm('maxlength')">Max Length Exceeded</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('minlength') && messageParm('minlength')">Min Length: {{messageParm('minlength')}}</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('minlength') && !messageParm('minlength')">Min Length Required</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('min') && messageParm('min')">Min Value: {{messageParm('min')}}</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('min') && !messageParm('min')">Min Value Not Met</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('email') && !form.get(controlName).hasError('required')">{{messageParm('email')}}</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('invalidDate')">Invalid Date</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('invalidYear')">Invalid Year</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('required') && !form.get(controlName).hasError('invalidDate')">{{label}} is Required</div>
      <div class="field-error" *ngIf="form.get(controlName).hasError('invalid')">{{form.get(controlName).errors['invalid']}}</div>
    </ng-container>
    <div *ngIf="!hasError()">&nbsp;</div>
  `
            }]
    }], function () { return []; }, { form: [{
            type: Input,
            args: ['form']
        }], controlName: [{
            type: Input,
            args: ['controlName']
        }], label: [{
            type: Input,
            args: ['label']
        }], messageParms: [{
            type: Input,
            args: ['messageParms']
        }] }); })();

class FormInputDirective {
    constructor(formControl) {
        this.formControl = formControl;
    }
    get hasError() {
        return this.formControl.dirty && this.formControl.invalid;
    }
    get errors() {
        if (this.hasError && this.formControl.errors) {
            return this.formControl.errors;
        }
        return '';
    }
}
FormInputDirective.ɵfac = function FormInputDirective_Factory(t) { return new (t || FormInputDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NgControl)); };
FormInputDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FormInputDirective, selectors: [["", "formInput", ""]] });
FormInputDirective.ctorParameters = () => [
    { type: NgControl }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormInputDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[formInput]'
            }]
    }], function () { return [{ type: ɵngcc3.NgControl }]; }, null); })();

const FORM_FIELD_GLOBAL_MSGS = {
    maxlength: 'Maximum field length has been exceeded.',
    minlength: 'Minimum field length requirement has not been met.',
    min: 'The specified value is below the minimum value required.',
    invalidDate: 'Date is not valid.',
    invalidYear: 'Year is not valid.',
    required: 'This field is required.',
    pattern: 'Invalid format.'
};
class FormFieldComponent {
    constructor() {
        this.messageConfig = {};
        this.disabled = '';
    }
    get labelClass() {
        return this.required + ' ' + this.disabled;
    }
    get divClass() {
        return this.hasError() ? 'jazz-form-field--error' : 'jazz-form-field';
    }
    ngOnInit() {
    }
    enable(enable = true) {
        this.disabled = enable ? '' : 'disabled';
    }
    hasError() {
        if (!this.formInput) {
            throw new Error('You have probably forgotten to put the formInput directive on one of the elements inside of the form-field tag.');
        }
        return this.formInput.hasError;
    }
    get errorMessages() {
        if (!this.formInput) {
            throw new Error('You have probably forgotten to put the formInput directive on one of the elements inside of the form-field tag.');
        }
        const errors = this.formInput.errors;
        const messages = [];
        const errorKeys = Object.keys(errors);
        errorKeys.forEach((errorKey) => {
            if (this.messageConfig[errorKey]) {
                messages.push(this.messageConfig[errorKey]);
            }
            else if (FORM_FIELD_GLOBAL_MSGS[errorKey]) {
                messages.push(FORM_FIELD_GLOBAL_MSGS[errorKey]);
            }
            else {
                messages.push(errorKey);
            }
        });
        return messages;
    }
}
FormFieldComponent.ɵfac = function FormFieldComponent_Factory(t) { return new (t || FormFieldComponent)(); };
FormFieldComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormFieldComponent, selectors: [["form-field"]], contentQueries: function FormFieldComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, FormInputDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.formInput = _t.first);
    } }, inputs: { messageConfig: "messageConfig", for: "for", label: "label", required: "required" }, ngContentSelectors: _c1, decls: 5, vars: 6, consts: [[3, "for"], [4, "ngIf"], ["class", "jazz-form-field-error-msg", "role", "alert", 4, "ngFor", "ngForOf"], ["role", "alert", 1, "jazz-form-field-error-msg"]], template: function FormFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "label", 0);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, FormFieldComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.divClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.for);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasError);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf], encapsulation: 2 });
FormFieldComponent.propDecorators = {
    for: [{ type: Input }],
    label: [{ type: Input }],
    required: [{ type: Input }],
    messageConfig: [{ type: Input }],
    formInput: [{ type: ContentChild, args: [FormInputDirective,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormFieldComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'form-field',
                template: `
    <div class="{{ divClass }}">
      <label for="{{ for }}">{{label}}</label>
      <ng-container *ngIf="hasError">
        <span class="jazz-form-field-error-msg" role="alert" *ngFor="let msg of errorMessages">{{msg}}</span>
      </ng-container>
      <ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return []; }, { messageConfig: [{
            type: Input
        }], for: [{
            type: Input
        }], label: [{
            type: Input
        }], required: [{
            type: Input
        }], formInput: [{
            type: ContentChild,
            args: [FormInputDirective]
        }] }); })();

class DesignSystemFormsModule {
}
DesignSystemFormsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DesignSystemFormsModule });
DesignSystemFormsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DesignSystemFormsModule_Factory(t) { return new (t || DesignSystemFormsModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DesignSystemFormsModule, { declarations: function () { return [FormFieldErrorComponent, FormFieldComponent, FormInputDirective]; }, imports: function () { return [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule]; }, exports: function () { return [FormFieldErrorComponent, FormFieldComponent, FormInputDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DesignSystemFormsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    FormFieldErrorComponent,
                    FormFieldComponent,
                    FormInputDirective
                ],
                exports: [
                    FormFieldErrorComponent,
                    FormFieldComponent,
                    FormInputDirective
                ]
            }]
    }], null, null); })();

class DesignSystemAngularModule {
}
DesignSystemAngularModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DesignSystemAngularModule });
DesignSystemAngularModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DesignSystemAngularModule_Factory(t) { return new (t || DesignSystemAngularModule)(); }, imports: [[
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
            UtilityHeaderModule,
            DesignSystemFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DesignSystemAngularModule, { imports: function () { return [CommonModule,
        RouterModule, AccordionModule, AlertModule, BreadcrumbsModule, HeaderModule, MenuModule, ModalDialogModule, PagerModule, TabsModule, UtilityHeaderModule, DesignSystemFormsModule]; }, exports: function () { return [AccordionComponent, AlertComponent, BreadcrumbComponent, BreadcrumbsComponent, HeaderComponent, MenuComponent, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent, PagerComponent, ModalDialogComponent, SearchButtonComponent, UtilityItemComponent, UtilityMenuComponent, MainMenuItemComponent, MainMenuComponent, TabComponent, TabsComponent, UtilityHeaderComponent /* implements AfterViewChecked, AfterContentChecked */, UtilityHeaderLinkComponent, FormFieldComponent, FormFieldErrorComponent, FormInputDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DesignSystemAngularModule, [{
        type: NgModule,
        args: [{
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
                    UtilityHeaderModule,
                    DesignSystemFormsModule
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
                    UtilityHeaderLinkComponent,
                    FormFieldComponent,
                    FormFieldErrorComponent,
                    FormInputDirective
                ]
            }]
    }], null, null); })();

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

export { ARIA_CONTROLS, ARIA_EXPANDED, AccordionComponent, AlertComponent, BreadcrumbComponent, BreadcrumbsComponent, DesignSystemAngularModule, HIDDEN, HeaderComponent, MainMenuComponent, MainMenuItemComponent, MenuComponent, MenuItem, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent, ModalDialogComponent, PagerComponent, SearchButtonComponent, TabComponent, TabsComponent, UtilityHeaderComponent, UtilityHeaderLinkComponent, UtilityItemComponent, UtilityMenuComponent, AccordionModule as ɵa, AlertModule as ɵb, BreadcrumbsModule as ɵc, HeaderModule as ɵd, MenuModule as ɵe, ModalDialogModule as ɵf, PagerModule as ɵg, TabsModule as ɵh, UtilityHeaderModule as ɵi, DesignSystemFormsModule as ɵj, FormFieldErrorComponent as ɵk, FormFieldComponent as ɵl, FormInputDirective as ɵm };

//# sourceMappingURL=princeton-design-design-system-angular.js.map