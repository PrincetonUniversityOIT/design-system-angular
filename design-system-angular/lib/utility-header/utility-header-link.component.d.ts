import { RouterLink } from '@angular/router';
/**
 * @example
 `` `
    <jazz-utility-header-link label="Google" url="https://www.google.com/"></jazz-utility-header-link>
 `` `
 */
export declare class UtilityHeaderLinkComponent {
    url?: string;
    label: string;
    external: boolean;
    class?: string;
    routerLink: RouterLink;
}
