import {moduleMetadata, storiesOf} from '@storybook/angular';
import {BreadcrumbComponent, BreadcrumbsComponent} from '../app/components/breadcrumbs/breadcrumbs.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'mainMenu1',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'level2item1',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'level3item1',
    pathMatch: 'full',
    redirectTo: ''
  }
];

const stories = storiesOf('Components/Breadcrumbs', module)
  .addDecorator(
    moduleMetadata({
      imports: [RouterModule.forRoot(routes, {useHash: true})],
      declarations: [BreadcrumbComponent, BreadcrumbsComponent]
    })
  );

stories.add('Just Styles', () => {
  return {
    template:  `
       <nav class="jazz-breadcrumb" aria-label="Breadcrumbs">
        <ol>
          <li>
            <a href="javascript:void(0)">Home</a>
          </li>
          <li>
            <a href="#">Another Link</a>
          </li>
          <li>
            <a href="#">Yet Another Link Level</a>
          </li>
          <li aria-current="page">And finally here were are the page description</li>
        </ol>
       </nav>`
  };
});

stories.add('Component', () => {
  return {
    template:  `
      <jazz-breadcrumbs>
            <jazz-breadcrumb url="/" label="Home"></jazz-breadcrumb>
            <jazz-breadcrumb url="/mainMenu1" label="Main Menu 1"></jazz-breadcrumb>
            <jazz-breadcrumb url="/level2item1" label="Level 2 Menu 1"></jazz-breadcrumb>
            <jazz-breadcrumb url="/level3item1" label="Level 3 Menu 1"></jazz-breadcrumb>
      </jazz-breadcrumbs>
      `
  };
});
