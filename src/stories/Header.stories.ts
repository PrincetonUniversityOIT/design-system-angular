import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterModule, Routes} from '@angular/router';
import {
  HeaderComponent,
  MainMenuComponent,
  MainMenuItemComponent,
  MenuComponent, MenuItemComponent, MenuSubButtonComponent, MenuMainButtonComponent,
  SearchButtonComponent, UtilityMenuComponent, UtilityItemComponent,
  UtilityHeaderComponent,
  UtilityHeaderLinkComponent
} from 'design-system-angular';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'mainMenu1',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'mainMenu2',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'mainMenu3',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'documentation',
    pathMatch: 'full',
    redirectTo: ''
  }
];

const stories = storiesOf('Components/Header', module)
  .addDecorator(
    moduleMetadata({
      imports: [RouterModule.forRoot(routes, {useHash: true})],
      declarations: [
        HeaderComponent,
        MenuComponent,
        MenuItemComponent,
        MenuSubButtonComponent,
        MenuMainButtonComponent,
        SearchButtonComponent,
        MainMenuItemComponent,
        MainMenuComponent,
        UtilityItemComponent,
        UtilityMenuComponent,
        UtilityHeaderComponent,
        UtilityHeaderLinkComponent
      ]
    })
  );

stories.add('Default', () => {
  return {
    template:  `
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
`
  };
});

stories.add('Compact', () => {
  return {
    template:  `
    <jazz-header [title]="'Princeton University Design System'" [siteBrandingName]="'RELATIVITY'" [siteBrandingUrl]="'http://www.princeton.edu'" [siteBrandingSlogan]="'The Princeton University Design System'" [showCompact]='true' [showSearch]='true'>
    <jazz-utility-menu>
      <jazz-utility-item label="Documentation" externalUrl="http://www.google.com"></jazz-utility-item>
      <jazz-utility-item label="Log In" url="/login"></jazz-utility-item>
    </jazz-utility-menu>
    </jazz-header>
`
  };
});

stories.add('Utility Header', () => {
  return {
    template: `
    <style>
    .jazz-utility-header__site-name {
        color: var(--jazz-utility-header-site-name-color) !important;
    }
    </style>
    <jazz-utility-header
        primaryHeading="Text Primary Heading"
        puBrandingTitle="PU Branding Title"
        siteBrandingLink="https://communications.princeton.edu"
        siteBrandingName="Site Branding Name"
        siteBrandingSlogan="Site Branding Slogan"
        siteBrandingTitle="SiteBranding Title"
        [stuckDesktop]="true"
        [stuckMobile]="true"
        utilityLinksHeading="Related Links">
        <jazz-utility-header-link label="Google" url="https://www.google.com/"></jazz-utility-header-link>
        <jazz-utility-header-link label="Princeton" url="https://www.princeton.edu/"></jazz-utility-header-link>
        <jazz-utility-header-link label="Microsoft" url="https://www.microsoft.com/"></jazz-utility-header-link>
    </jazz-utility-header>
    `
  };
});
