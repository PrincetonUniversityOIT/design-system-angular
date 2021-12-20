import { QueryList, TemplateRef } from '@angular/core';
import { UtilityHeaderLinkComponent } from './utility-header-link.component';
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
import * as ɵngcc0 from '@angular/core';
export declare class UtilityHeaderComponent {
    links: QueryList<UtilityHeaderLinkComponent>;
    officeOfTemplate: TemplateRef<any>;
    userOptionsTemplate: TemplateRef<any>;
    stuckMobile: boolean;
    stuckDesktop: boolean;
    primaryHeading: string;
    puBrandingTitle: string;
    puBrandingLogo: string;
    siteBrandingName?: string;
    siteBrandingSlogan?: string;
    siteBrandingLink: string;
    siteBrandingTitle: string;
    officeOfLink?: string;
    officeOf?: string;
    utilityLinksHeading: string;
    loginUrl: string;
    logoutUrl: string;
    username: string;
    menuExpanded: boolean;
    menuButtonLabel: string;
    toggleMenu(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<UtilityHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<UtilityHeaderComponent, "jazz-utility-header", never, { "stuckMobile": "stuckMobile"; "stuckDesktop": "stuckDesktop"; "puBrandingLogo": "puBrandingLogo"; "utilityLinksHeading": "utilityLinksHeading"; "officeOfTemplate": "officeOfTemplate"; "userOptionsTemplate": "userOptionsTemplate"; "primaryHeading": "primaryHeading"; "puBrandingTitle": "puBrandingTitle"; "siteBrandingName": "siteBrandingName"; "siteBrandingSlogan": "siteBrandingSlogan"; "siteBrandingLink": "siteBrandingLink"; "siteBrandingTitle": "siteBrandingTitle"; "officeOfLink": "officeOfLink"; "officeOf": "officeOf"; "loginUrl": "loginUrl"; "logoutUrl": "logoutUrl"; "username": "username"; }, {}, ["links"], never>;
}

//# sourceMappingURL=utility-header.component.d.ts.map