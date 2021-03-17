// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HeaderComponent} from '../app/components/header/header.component';
import {MenuItem} from '../app/model/menu-item';
import {RouterModule} from '@angular/router';
import {MenuMainButtonComponent} from '../app/components/menu/menu-main-button/menu-main-button.component';
import {MenuSubButtonComponent} from '../app/components/menu/menu-sub-button/menu-sub-button.component';
import {MenuItemComponent} from '../app/components/menu/menu-item/menu-item.component';
import {MenuComponent} from '../app/components/menu/menu.component';
import {MenuOptions} from '../app/model/menu-options';
import {SearchButtonComponent} from '../app/components/header/search-button/search-button.component';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuComponent, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent, SearchButtonComponent],
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
subMenu1.push(new MenuItem('Sub Menu 1', '/level2item1', subMenu2));
subMenu1.push(new MenuItem('Sub Menu 2', '/level2item2'));
subMenu1.push(new MenuItem('Sub Menu 3', '/level2item2'));

const mainMenu: MenuItem[] = [];
mainMenu.push(new MenuItem('Main Menu 1', '/level1item1', subMenu1 ));
mainMenu.push(new MenuItem('Main Menu 2', '/level1item2'));
mainMenu.push(new MenuItem('Main Menu 3', '/level1item3'));

const utilityMenu: MenuItem[] = [];
utilityMenu.push(new MenuItem('Documentation', '/documentation'));
utilityMenu.push(new MenuItem('Log In', '/login'));

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

const menuOptions = new MenuOptions();
menuOptions.title = 'Princeton University Design System';
menuOptions.siteBrandingName = 'RELATIVITY';
menuOptions.siteBrandingSlogan = 'The Princeton University Design System';
menuOptions.showCompact = false;
menuOptions.showSearch = true;
menuOptions.menuItems = mainMenu;
menuOptions.utilityItems = utilityMenu;

const menuOptionsOnlyUtility = Object.assign({}, menuOptions);
menuOptionsOnlyUtility.menuItems = [];
menuOptionsOnlyUtility.showSearch = false;

const justSearch = Object.assign({}, menuOptions);;
justSearch.showSearch = true;
justSearch.menuItems = [];
justSearch.utilityItems = [];

const justHeader = Object.assign({}, menuOptions);;
justHeader.showSearch = false;
justHeader.menuItems = [];
justHeader.utilityItems = [];

export const Default = Template.bind({});
Default.args = {
  menuOptions
};

export const OnlyUtilityMenu = Template.bind({});
OnlyUtilityMenu.args = {
  menuOptions: menuOptionsOnlyUtility
};

export const JustSearch = Template.bind({});
JustSearch.args = {
  menuOptions: justSearch
};

export const JustHeader = Template.bind({});
JustHeader.args = {
  menuOptions: justHeader
};
