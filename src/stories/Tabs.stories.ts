import {moduleMetadata, storiesOf} from '@storybook/angular';
import {APP_BASE_HREF} from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';
import {Component} from '@angular/core';
import {TabComponent, TabsComponent} from 'design-system-angular';

@Component({
  // tslint:disable-next-line:component-selector
  // selector: 'jazz-tab',
  template: `<h2>Panel 1</h2>`
})
export class Panel1Component {
}

@Component({
  // tslint:disable-next-line:component-selector
  // selector: 'jazz-tab',
  template: `<h2>Panel 2</h2>`
})
export class Panel2Component {
}

const stories = storiesOf('Components/Tabs', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TabsComponent, TabComponent, Panel1Component, Panel2Component],
      imports: [
        RouterModule.forRoot([
          { path: 'panel1', component: Panel1Component },
          { path: 'panel2', component: Panel2Component },
        ], {
          useHash: true,
        })
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'},
      ]
    })
  );

stories.add('Default', () => {
  return {
    template:  `
<jazz-tabs>
    <jazz-tab label="Tab 1"></jazz-tab>
    <jazz-tab label="Tab 2"></jazz-tab>
</jazz-tabs>
`
  };
});

stories.add('Default (Links)', () => {
  return {
    template:  `
<jazz-tabs [useButtons]="false">
    <jazz-tab label="Tab 1"></jazz-tab>
    <jazz-tab label="Tab 2"></jazz-tab>
</jazz-tabs>
`
  };
});

stories.add('Controlled Sections', () => {
    return {
      template:  `
<jazz-tabs>
    <jazz-tab label="Tab 1" controls="panel1"></jazz-tab>
    <jazz-tab label="Tab Disabled" disabled="true"></jazz-tab>
    <jazz-tab label="Tab 2" controls="panel2"></jazz-tab>
</jazz-tabs>
<div id="panel1">
Panel 1
</div>
<div id="panel2">
Panel 2
</div>
`
    };
});

stories.add('Controlled Sections (Links)', () => {
  return {
    template:  `
<jazz-tabs [useButtons]="false">
    <jazz-tab label="Tab 1" controls="panel1"></jazz-tab>
    <jazz-tab label="Tab Disabled" disabled="true"></jazz-tab>
    <jazz-tab label="Tab 2" controls="panel2"></jazz-tab>
</jazz-tabs>
<div id="panel1">
Panel 1
</div>
<div id="panel2">
Panel 2
</div>
`
  };
});

stories.add('Routing Support', () => {
  return {
    template:  `
<jazz-tabs>
    <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
    <jazz-tab label="Tab 2" routeTo="/panel2"></jazz-tab>
</jazz-tabs>
<router-outlet></router-outlet>
`
  };
});

stories.add('Routing Support (Links)', () => {
  return {
    template:  `
<jazz-tabs [useButtons]="false">
    <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
    <jazz-tab label="Tab 2" routeTo="/panel2"></jazz-tab>
</jazz-tabs>
<router-outlet></router-outlet>
`
  };
});

stories.add('Routing Support (Selection)', () => {
  return {
    template:  `
<jazz-tabs>
    <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
    <jazz-tab label="Tab 2" routeTo="/panel2" selected="true"></jazz-tab>
</jazz-tabs>
<router-outlet></router-outlet>
`
  };
});

stories.add('Routing Support (Links with Selection)', () => {
  return {
    template:  `
<jazz-tabs [useButtons]="false">
    <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
    <jazz-tab label="Tab 2" routeTo="/panel2" selected="true"></jazz-tab>
</jazz-tabs>
<router-outlet></router-outlet>
`
  };
});

stories.add('Routing Support (Selection/Auto Activate)', () => {
  return {
    template:  `
<jazz-tabs [autoActivate]="true">
    <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
    <jazz-tab label="Tab Disabled" disabled="true"></jazz-tab>
    <jazz-tab label="Tab 2" routeTo="/panel2" selected="true"></jazz-tab>
</jazz-tabs>
<router-outlet></router-outlet>
`
  };
});

stories.add('Routing Support (Selection/Auto Activate/Links)', () => {
  return {
    template:  `
<jazz-tabs [autoActivate]="true" [useButtons]="false">
    <jazz-tab label="Tab 1" routeTo="/panel1"></jazz-tab>
    <jazz-tab label="Tab Disabled" disabled="true"></jazz-tab>
    <jazz-tab label="Tab 2" routeTo="/panel2" selected="true"></jazz-tab>
</jazz-tabs>
<router-outlet></router-outlet>
`
  };
});
