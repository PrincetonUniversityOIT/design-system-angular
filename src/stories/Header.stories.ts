import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterModule, Routes} from '@angular/router';
import {
  HeaderComponent,
  MainMenuComponent,
  MainMenuItemComponent,
  MenuComponent, MenuItemComponent, MenuSubButtonComponent,
  SearchButtonComponent, UtilityMenuComponent
} from 'design-system-angular';
import {UtilityItemComponent} from '../../projects/design-system-angular/src/lib/header/utility-menu/utility-menu-item';
import {MenuMainButtonComponent} from '../../projects/design-system-angular/src/lib/menu/menu-main-button/menu-main-button.component';

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
      declarations: [HeaderComponent, MenuComponent, MenuItemComponent, MenuSubButtonComponent, MenuMainButtonComponent,
        SearchButtonComponent,  MainMenuItemComponent, MainMenuComponent, UtilityItemComponent, UtilityMenuComponent]
    })
  );

stories.add('Default', () => {
  return {
    template:  `
    <jazz-header [title]="'Princeton University Design System'"
        [siteBrandingName]="'RELATIVITY'"
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
    <jazz-header [title]="'Princeton University Design System'" [siteBrandingName]="'RELATIVITY'" [siteBrandingSlogan]="'The Princeton University Design System'" [showCompact]='true' [showSearch]='true'>
    <jazz-utility-menu>
      <jazz-utility-item label="Documentation" externalUrl="http://www.google.com"></jazz-utility-item>
      <jazz-utility-item label="Log In" url="/login"></jazz-utility-item>
    </jazz-utility-menu>
    </jazz-header>
`
  };
});
