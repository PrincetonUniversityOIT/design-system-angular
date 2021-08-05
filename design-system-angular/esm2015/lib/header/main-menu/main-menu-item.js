import { Component, ContentChildren, Input, QueryList } from '@angular/core';
export class MainMenuItemComponent {
}
MainMenuItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'jazz-main-menu-item',
                template: `
      <ng-content></ng-content>
  `
            },] }
];
MainMenuItemComponent.propDecorators = {
    url: [{ type: Input }],
    externalUrl: [{ type: Input }],
    label: [{ type: Input }],
    shownByDefault: [{ type: Input }],
    menuComponents: [{ type: ContentChildren, args: [MainMenuItemComponent, { descendants: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXNpZ24tc3lzdGVtLWFuZ3VsYXIvc3JjL2xpYi9oZWFkZXIvbWFpbi1tZW51L21haW4tbWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTNUUsTUFBTSxPQUFPLHFCQUFxQjs7O1lBUGpDLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7a0JBRUUsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxlQUFlLFNBQUMscUJBQXFCLEVBQUUsRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2phenotbWFpbi1tZW51LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluTWVudUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSB1cmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4dGVybmFsVXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93bkJ5RGVmYXVsdDogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZHJlbihNYWluTWVudUl0ZW1Db21wb25lbnQsIHtkZXNjZW5kYW50czogZmFsc2V9KSBtZW51Q29tcG9uZW50czogUXVlcnlMaXN0PE1haW5NZW51SXRlbUNvbXBvbmVudD47XG59XG4iXX0=