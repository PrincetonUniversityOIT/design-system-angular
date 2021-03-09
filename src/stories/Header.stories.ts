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

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuComponent, MenuItemComponent, MenuMainButtonComponent, MenuSubButtonComponent],
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

export const Default = Template.bind({});
Default.args = {
  title: 'Princeton University Design System',
  siteBrandingName: 'Relativity',
  siteBrandingSlogan: 'The Princeton University Design System',
  menuItems: mainMenu,
  utilityItems: utilityMenu,
  showSearch: true
};

export const OnlyUtilityMenu = Template.bind({});
OnlyUtilityMenu.args = {
  title: 'Princeton University Design System',
  siteBrandingName: 'Relativity',
  siteBrandingSlogan: 'The Princeton University Design System',
  utilityItems: utilityMenu,
  showSearch: true
};

export const JustSearch = Template.bind({});
JustSearch.args = {
  title: 'Princeton University Design System',
  siteBrandingName: 'Relativity',
  siteBrandingSlogan: 'The Princeton University Design System',
  showSearch: true
};

export const JustHeader = Template.bind({});
JustHeader.args = {
  title: 'Princeton University Design System',
  siteBrandingName: 'Relativity',
  siteBrandingSlogan: 'The Princeton University Design System',
  showSearch: false
};
