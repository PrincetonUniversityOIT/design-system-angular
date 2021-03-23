import {moduleMetadata, storiesOf} from '@storybook/angular';
import {MenuComponent} from '../app/components/menu/menu.component';
import {MenuItemComponent} from '../app/components/menu/menu-item/menu-item.component';
import {MenuMainButtonComponent} from '../app/components/menu/menu-main-button/menu-main-button.component';
import {MenuSubButtonComponent} from '../app/components/menu/menu-sub-button/menu-sub-button.component';
import {SearchButtonComponent} from '../app/components/header/search-button/search-button.component';
import {MainMenuItemComponent} from '../app/components/header/main-menu/main-menu-item';
import {MainMenuComponent} from '../app/components/header/main-menu/main-menu';
import {UtilityMenuComponent} from '../app/components/header/utility-menu/utility-menu';
import {UtilityItemComponent} from '../app/components/header/utility-menu/utility-menu-item';
import {HeaderComponent} from '../app/components/header/header.component';
import {RouterModule, Routes} from '@angular/router';

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

const stories = storiesOf('Components/HeaderHTML', module)
  .addDecorator(
    moduleMetadata({
      imports: [RouterModule.forRoot(routes, {useHash: true})],
      declarations: [HeaderComponent, MenuComponent, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent,
        SearchButtonComponent,  MainMenuItemComponent, MainMenuComponent, UtilityMenuComponent, UtilityItemComponent]
    })
  );

stories.add('Default', () => {
  return {
    template:  `
    <app-jazz-header [title]="'Princeton University Design System'" [siteBrandingName]="'RELATIVITY'" [siteBrandingSlogan]="'The Princeton University Design System'" [showCompact]='false' [showSearch]='true'>
      <app-jazz-main-menu>
        <app-jazz-main-menu-item label="Main Menu 1" url="/mainMenu1">
            <app-jazz-main-menu-item label="Level 2 Menu 1" url="/level2item1" shownByDefault="true">
              <app-jazz-main-menu-item label="Level 3 Menu 1" url="/level3item1"></app-jazz-main-menu-item>
              <app-jazz-main-menu-item label="Level 3 Menu 2" url="/level3item1"></app-jazz-main-menu-item>
              <app-jazz-main-menu-item label="Level 3 Menu 3" url="/level3item1"></app-jazz-main-menu-item>
            </app-jazz-main-menu-item>
            <app-jazz-main-menu-item label="Level 2 Menu 2" url="/level2item1"></app-jazz-main-menu-item>
            <app-jazz-main-menu-item label="Level 2 Menu 3" url="/level2item1"></app-jazz-main-menu-item>
        </app-jazz-main-menu-item>
        <app-jazz-main-menu-item label="Main Menu 2" url="/mainMenu2"></app-jazz-main-menu-item>
        <app-jazz-main-menu-item label="Main Menu 3" url="/mainMenu3"></app-jazz-main-menu-item>
    </app-jazz-main-menu>
    <app-jazz-utility-menu>
      <app-jazz-utility-item label="Documentation" url="/documentation"></app-jazz-utility-item>
      <app-jazz-utility-item label="Log In" url="/login"></app-jazz-utility-item>
    </app-jazz-utility-menu>
    </app-jazz-header>
`
  };
});

stories.add('Compact', () => {
  return {
    template:  `
    <app-jazz-header [title]="'Princeton University Design System'" [siteBrandingName]="'RELATIVITY'" [siteBrandingSlogan]="'The Princeton University Design System'" [showCompact]='true' [showSearch]='true'>
      <app-jazz-main-menu>
        <app-jazz-main-menu-item label="Main Menu 1" url="/mainMenu1">
            <app-jazz-main-menu-item label="Level 2 Menu 1" url="/level2item1" shownByDefault="true">
              <app-jazz-main-menu-item label="Level 3 Menu 1" url="/level3item1"></app-jazz-main-menu-item>
              <app-jazz-main-menu-item label="Level 3 Menu 2" url="/level3item1"></app-jazz-main-menu-item>
              <app-jazz-main-menu-item label="Level 3 Menu 3" url="/level3item1"></app-jazz-main-menu-item>
            </app-jazz-main-menu-item>
            <app-jazz-main-menu-item label="Level 2 Menu 2" url="/level2item1"></app-jazz-main-menu-item>
            <app-jazz-main-menu-item label="Level 2 Menu 3" url="/level2item1"></app-jazz-main-menu-item>
        </app-jazz-main-menu-item>
        <app-jazz-main-menu-item label="Main Menu 2" url="/mainMenu2"></app-jazz-main-menu-item>
        <app-jazz-main-menu-item label="Main Menu 3" url="/mainMenu3"></app-jazz-main-menu-item>
    </app-jazz-main-menu>
    </app-jazz-header>
`
  };
});
