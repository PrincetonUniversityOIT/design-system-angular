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
subMenu2.push(new MenuItem('Level 3 Menu 1', '/level3item1', true ));
subMenu2.push(new MenuItem('Level 3 Menu 2', '/level3item2', false ));
subMenu2.push(new MenuItem('Level 3 Menu 3', '/level3item3', false ));

const subMenu1: MenuItem[] = [];
subMenu1.push(new MenuItem('Sub Menu 1', '/level2item1', true, subMenu2));
subMenu1.push(new MenuItem('Sub Menu 2', '/level2item2', false ));
subMenu1.push(new MenuItem('Sub Menu 3', '/level2item2', false ));

const mainMenu: MenuItem[] = [];
mainMenu.push(new MenuItem('Main Menu 1', '/level1item1', true, subMenu1 ));
mainMenu.push(new MenuItem('Main Menu 2', '/level1item2', false));
mainMenu.push(new MenuItem('Main Menu 3', '/level1item3', false));

const utilityMenu: MenuItem[] = [];
utilityMenu.push(new MenuItem('Documentation', '/documentation', true));
utilityMenu.push(new MenuItem('Log In', '/login', false));

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
  utilityItems: utilityMenu
};

// export const ProvideContent = () => ({
//   moduleMetadata: {
//     declarations: [HeaderComponent],
//     decorators: [
//       moduleMetadata({
//         declarations: [MenuComponent, MenuItemComponent],
//         imports: [CommonModule]
//       })
//     ]
//   },
//   props: {
//     title: 'Princeton University Design System',
//     siteBrandingName: 'Relativity',
//     siteBrandingSlogan: 'The Princeton University Design System'
//   },
//   template: `<app-jazz-header [title]="title" [siteBrandingName]="siteBrandingName" [siteBrandingSlogan]="siteBrandingSlogan">
//     <nav aria-label="Main Menu" class="jazz-menu__main-menu">
//       <h2 class="jazz-visually-hidden">Main Menu</h2>
//       <div class="jazz-container">
//         <div class="jazz-menu__main-menu-navbar">
//           <button class="jazz-menu__menu-toggle jazz-menu__menu-toggle-absolute" (click)='onMainMenuClick($event)'
//                   aria-expanded="false" aria-label="Navigation Menu Toggle">
//                   Menu<i class="jazz-icon jazz-icon-menu" aria-hidden="true" (click)='onMainMenuIconClick($event)'></i>
//           </button>
//           <div class="jazz-menu__nav-container">
//           <ul class="jazz-menubar" role="list">
//           <li aria-current="true">
//               <a href="javascript:void(0);" aria-current="page">Content Types</a>
//               <button class="jazz-menu__submenu-toggle" type="button" aria-expanded="false">
//                   <span class="jazz-visually-hidden">
//                       Content Types
//                       SubMenu
//                   </span>
//               </button>
//               <ul>
//                   <li>
//                       <a href="javascript:void(0);">Page</a>
//                       <button type="button" class="jazz-menu__submenu-toggle" aria-expanded="false">
//                           <span class="jazz-visually-hidden">
//                               Page
//                               SubMenu
//                           </span>
//                       </button>
//                       <ul class="jazz-menubar__submenu--shown-by-default">
//                           <li><a href="javascript:void(0);">Page List</a></li>
//                           <li><a href="javascript:void(0);" aria-current="page">Sub Page</a></li>
//                       </ul>
//                    </li>
//                   <li aria-current="page"><a href="javascript:void(0);">Alert</a></li>
//               </ul>
//           </li>
//           <li>
//               <a href="javascript:void(0);">Blocks</a>
//               <button type="button" class="jazz-menu__submenu-toggle" aria-expanded="false">
//                   <span class="jazz-visually-hidden">
//                       Blocks
//                       SubMenu
//                   </span>
//               </button>
//               <ul>
//                   <li><a href="javascript:void(0);">Accordion</a></li>
//                   <li><a href="javascript:void(0);">Content Slider</a></li>
//               </ul>
//           </li>
//         </ul>
//            </div>
//         </div>
//       </div>
//     </nav>
//     </app-jazz-header>`,
// });
