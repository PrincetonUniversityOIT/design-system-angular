// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
  HeaderComponent, HeaderOptions,
  MainMenuComponent,
  MainMenuItemComponent,
  MenuComponent, MenuItem, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent,
  SearchButtonComponent, UtilityItemComponent, UtilityMenuComponent
} from 'design-system-angular';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuComponent, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent, SearchButtonComponent,
        MainMenuItemComponent, MainMenuComponent, UtilityMenuComponent, UtilityItemComponent],
      imports: [CommonModule, RouterModule.forRoot([])],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }),
  ],
} as Meta;


const subMenu2: MenuItem[] = [];
subMenu2.push(new MenuItem('Level 3 Menu 1', '/level3item1' ));
subMenu2.push(new MenuItem('Level 3 Menu 2', '/level3item2' ));
subMenu2.push(new MenuItem('Level 3 Menu 3', '/level3item3' ));

const subMenu1: MenuItem[] = [];
subMenu1.push(new MenuItem('Level 2 Menu 1', '/level2item1', subMenu2));
subMenu1.push(new MenuItem('Level 2 Menu 2', '/level2item2'));
subMenu1.push(new MenuItem('Level 2 Menu 3', '/level2item2'));

const mainMenu: MenuItem[] = [];
mainMenu.push(new MenuItem('Main Menu 1', '/level1item1', subMenu1 ));
mainMenu.push(new MenuItem('Main Menu 2', '/level1item2'));
mainMenu.push(new MenuItem('Main Menu 3', '/level1item3'));

const utilityMenu: MenuItem[] = [];
const utilityMenu1 = new MenuItem('Documentation');
utilityMenu1.externalUrl = 'http://www.google.com';

const utilityMenu2 = new MenuItem('Log In');
utilityMenu2.url = '/login';

utilityMenu.push(utilityMenu1);
utilityMenu.push(utilityMenu2);

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

const headerOptions = new HeaderOptions();
headerOptions.title = 'Princeton University Design System';
headerOptions.siteBrandingName = 'RELATIVITY';
headerOptions.siteBrandingSlogan = 'The Princeton University Design System';
headerOptions.showCompact = false;
headerOptions.showSearch = true;
headerOptions.menuItems = mainMenu;
headerOptions.utilityItems = utilityMenu;

const headerOptionsOnlyUtility = Object.assign({}, headerOptions);
headerOptionsOnlyUtility.menuItems = [];
headerOptionsOnlyUtility.showSearch = false;

const justSearch = Object.assign({}, headerOptions);
justSearch.showSearch = true;
justSearch.menuItems = [];
justSearch.utilityItems = [];

const justHeader = Object.assign({}, headerOptions);
justHeader.showSearch = false;
justHeader.menuItems = [];
justHeader.utilityItems = [];

const compact = Object.assign({}, headerOptions);
compact.menuItems = [];
compact.showSearch = false;
compact.showCompact = true;

export const Default = Template.bind({});
Default.args = {
  headerOptions
};

export const OnlyUtilityMenu = Template.bind({});
OnlyUtilityMenu.args = {
  headerOptions: headerOptionsOnlyUtility
};

export const JustSearch = Template.bind({});
JustSearch.args = {
  headerOptions: justSearch
};

export const JustHeader = Template.bind({});
JustHeader.args = {
  headerOptions: justHeader
};

export const Compact = Template.bind({});
Compact.args = {
  headerOptions: compact
};
