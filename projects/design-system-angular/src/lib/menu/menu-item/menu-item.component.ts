import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {MainMenuItemComponent} from '../../header/main-menu/main-menu-item';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jazz-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @ViewChild('template', {static: true}) template;

  @Input()
  menuItem: MainMenuItemComponent;

  @Output()
  closeSubMenus: EventEmitter<void> = new EventEmitter();

  @Output()
  resetSubMenus: EventEmitter<void> = new EventEmitter();

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  getClass(): string {
    return this.menuItem.shownByDefault ? 'jazz-menubar__submenu--shown-by-default' : '';
  }

  // Storybook arrays for some reason has the original component in the children list
  // This results in an infinite loop
  removeSelf(comp): boolean {
    if (comp === this.menuItem) {
      return true;
    }
    return false;
  }

  close(): void {
    this.closeSubMenus.emit();
  }

  reset(): void {
    this.resetSubMenus.emit();
  }
}
