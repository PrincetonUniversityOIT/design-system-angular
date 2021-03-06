import {Component, OnInit} from '@angular/core';
import {MenuItem} from './model/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Princeton Design System';
  mainMenu: MenuItem[] = [];
  utilityMenu: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.mainMenu = [
     {
       label: 'Main Menu 1',
       url: '/mainMenu1',
       subItems:
        [
          {
          label: 'Sub Menu 1',
          url: '/level2item1',
          shownByDefault: true,
          subItems:
            [
              {label: 'Level 3 Menu 1', url: '/level3item1'},
              {label: 'Level 3 Menu 2', url: '/level3item2'},
              {label: 'Level 3 Menu 3', url: '/level3item3'}
            ],
          },
          {
            label: 'Sub Menu 2',
            url: '/level2item2',
            subItems: [
              {label: 'Level 3a Menu 1', url: '/level3aitem1'},
              {label: 'Level 3a Menu 2', url: '/level3aitem2'},
              {label: 'Level 3a Menu 3', url: '/level3aitem3'}
            ]
          },
          {
            label: 'Sub Menu 3',
            url: '/level2item2'
          }
        ]
      },
      {
       label: 'Main Menu 2',
       url: '/mainMenu2',
       subItems:
         [
           {label: 'Level 3 Menu 1', url: '/level3item1'},
           {label: 'Level 3 Menu 2', url: '/level3item2'},
           {label: 'Level 3 Menu 3', url: '/level3item3'}
         ],
         },
     {label: 'Main Menu 3', url: '/mainMenu3'}
   ];

    this.utilityMenu.push(new MenuItem('Documentation', '/documentation'));
    this.utilityMenu.push(new MenuItem('Log In', '/login'));
  }
}
