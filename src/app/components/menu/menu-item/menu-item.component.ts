import {MenuItem} from '../../../model/menu-item';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-jazz-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @ViewChild('template', {static: true}) template;

  @Input()
  menuItem: MenuItem;

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

  close(): void {
    this.closeSubMenus.emit();
  }

  reset(): void {
    this.resetSubMenus.emit();
  }
}
