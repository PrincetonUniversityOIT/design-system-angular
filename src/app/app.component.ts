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
    subMenu3.push(new MenuItem('Level 3a Menu 1', '/level3aitem1'));
    subMenu3.push(new MenuItem('Level 3a Menu 2', '/level3aitem2' ));
    subMenu3.push(new MenuItem('Level 3a Menu 3', '/level3aitem3' ));

    const subMenu2: MenuItem[] = [];
    subMenu2.push(new MenuItem('Level 3 Menu 1', '/level3item1'));
    subMenu2.push(new MenuItem('Level 3 Menu 2', '/level3item2'));
    subMenu2.push(new MenuItem('Level 3 Menu 3', '/level3item3'));

    const subMenu1: MenuItem[] = [];
    subMenu1.push(new MenuItem('Sub Menu 1', '/level2item1', subMenu2, true));
    subMenu1.push(new MenuItem('Sub Menu 2', '/level2item2', subMenu3));
    subMenu1.push(new MenuItem('Sub Menu 3', '/level2item2'));

    this.mainMenu.push(new MenuItem('Main Menu 1', '/mainMenu1', subMenu1));
    this.mainMenu.push(new MenuItem('Main Menu 2', '/mainMenu2', subMenu2));
    this.mainMenu.push(new MenuItem('Main Menu 3', '/mainMenu3'));

    this.utilityMenu.push(new MenuItem('Documentation', '/documentation'));
    this.utilityMenu.push(new MenuItem('Log In', '/login'));
  }
}
