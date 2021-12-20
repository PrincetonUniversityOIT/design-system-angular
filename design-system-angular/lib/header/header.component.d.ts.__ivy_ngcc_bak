import { ChangeDetectorRef, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu';
import { UtilityMenuComponent } from './utility-menu/utility-menu';
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
export declare class HeaderComponent implements AfterViewChecked, AfterContentChecked {
    private cdr;
    title: string;
    siteBrandingName: string;
    siteBrandingSlogan: string;
    siteBrandingUrl: string;
    siteBrandingLogo: string;
    showSearch: boolean;
    showCompact: boolean;
    mainMenu: MainMenuComponent;
    utilityMenu: UtilityMenuComponent;
    onResize(event: any): void;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewChecked(): void;
    ngAfterContentChecked(): void;
    displayWindowSize(): void;
    getSiteBrandingLogo(): string;
}
