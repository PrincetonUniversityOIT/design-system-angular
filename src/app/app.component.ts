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
    const subMenu3: MenuItem[] = [];
    subMenu3.push(new MenuItem('Level 3a Menu 1', '/level3aitem1', true ));
    subMenu3.push(new MenuItem('Level 3a Menu 2', '/level3aitem2', false ));
    subMenu3.push(new MenuItem('Level 3a Menu 3', '/level3aitem3', false ));

    const subMenu2: MenuItem[] = [];
    subMenu2.push(new MenuItem('Level 3 Menu 1', '/level3item1', true ));
    subMenu2.push(new MenuItem('Level 3 Menu 2', '/level3item2', false ));
    subMenu2.push(new MenuItem('Level 3 Menu 3', '/level3item3', false ));

    const subMenu1: MenuItem[] = [];
    subMenu1.push(new MenuItem('Sub Menu 1', '/level2item1', true, subMenu2, true));
    subMenu1.push(new MenuItem('Sub Menu 2', '/level2item2', false, subMenu3));
    subMenu1.push(new MenuItem('Sub Menu 3', '/level2item2', false ));

    this.mainMenu.push(new MenuItem('Main Menu 1', '/mainMenu1', true, subMenu1));
    this.mainMenu.push(new MenuItem('Main Menu 2', '/mainMenu2', false, subMenu2));
    this.mainMenu.push(new MenuItem('Main Menu 3', '/mainMenu3', false));

    this.utilityMenu.push(new MenuItem('Documentation', '/documentation', true));
    this.utilityMenu.push(new MenuItem('Log In', '/login', false));
  }
}
