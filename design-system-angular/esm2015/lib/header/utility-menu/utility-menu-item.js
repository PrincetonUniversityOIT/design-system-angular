import { Component, Input } from '@angular/core';
export class UtilityItemComponent {
}
UtilityItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-utility-item',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
UtilityItemComponent.propDecorators = {
    url: [{ type: Input }],
    externalUrl: [{ type: Input }],
    label: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9oZWFkZXIvdXRpbGl0eS1tZW51L3V0aWxpdHktbWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUy9DLE1BQU0sT0FBTyxvQkFBb0I7OztZQVBoQyxTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7O2tCQUVFLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdqYXp6LXV0aWxpdHktaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxpdHlJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSBleHRlcm5hbFVybD86IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbn1cbiJdfQ==