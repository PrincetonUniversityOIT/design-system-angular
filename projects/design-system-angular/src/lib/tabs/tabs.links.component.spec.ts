import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent, TabComponent } from './tabs.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {Component, ViewChild} from '@angular/core';
import {simulateKeyupEvent} from '../../../../../src/jest-config/setup';


@Component({
  template: `
    <jazz-tabs [useButtons]=false>
      <jazz-tab label="Tab Label 1"></jazz-tab>
      <jazz-tab label="Tab Label 2" selected="true"></jazz-tab>
      <jazz-tab label="Tab Disabled" disabled="true"></jazz-tab>
      <jazz-tab label="Tab Label 3"></jazz-tab>
    </jazz-tabs>
  `
})
class InitTestHost1Component {
  @ViewChild(TabsComponent) tabs: TabsComponent;
}

@Component({
  template: `
    <jazz-tabs [autoActivate]=true [useButtons]=false>
      <jazz-tab label="Tab Label 1"></jazz-tab>
      <jazz-tab label="Tab Label 2" selected="true"></jazz-tab>
      <jazz-tab label="Tab Disabled" disabled="true"></jazz-tab>
      <jazz-tab label="Tab Label 3"></jazz-tab>
    </jazz-tabs>
  `
})
class TestAutoActivateComponent {
  @ViewChild(TabsComponent) tabs: TabsComponent;
}

@Component({
  template: `
    <jazz-tabs [useButtons]=false>
      <jazz-tab label="Tab Label 1"></jazz-tab>
      <jazz-tab label="Tab Label 2" selected="true"></jazz-tab>
      <jazz-tab label="Tab Label 3" disabled="true"></jazz-tab>
      <jazz-tab label="Tab Label 4" disabled="true"></jazz-tab>
    </jazz-tabs>
  `
})
class LastTwoTabsDisabledComponent {
  @ViewChild(TabsComponent) tabs: TabsComponent;
}

@Component({
  template: `
    <jazz-tabs [useButtons]=false>
      <jazz-tab label="Tab Label 1" disabled="true"></jazz-tab>
      <jazz-tab label="Tab Label 2" selected="true"></jazz-tab>
      <jazz-tab label="Tab Label 3"></jazz-tab>
      <jazz-tab label="Tab Label 4" disabled="true"></jazz-tab>
    </jazz-tabs>
  `
})
class FirstAndLastTabsDisabledComponent {
  @ViewChild(TabsComponent) tabs: TabsComponent;
}

@Component({
  template: `
    <jazz-tabs [useButtons]=false>
      <jazz-tab label="Tab Label 1" disabled="true"></jazz-tab>
      <jazz-tab label="Tab Label 2" selected="true"></jazz-tab>
      <jazz-tab label="Tab Label 3"></jazz-tab>
      <jazz-tab label="Tab Label 4"></jazz-tab>
    </jazz-tabs>
  `
})
class FirstTabDisabledComponent {
  @ViewChild(TabsComponent) tabs: TabsComponent;
}

@Component({
  template: `
    <jazz-tabs [useButtons]=false>
      <jazz-tab controls="panel1" label="Tab Label 1"></jazz-tab>
      <jazz-tab controls="panel2" [selected]=true label="Tab Label 2"></jazz-tab>
      <jazz-tab controls="panel_disabled" disabled="true" label="Tab Disabled"></jazz-tab>
      <jazz-tab controls="panel3" label="Tab Label 3"></jazz-tab>
    </jazz-tabs>
    <div id="panel1">Panel 1</div>
    <div id="panel2" hidden>Panel 2</div>
    <div id="panel3">Panel 3</div>
    <div id="panel_disabled">Panel Disabled</div>
  `
})
class PanelTestHost1Component {
  @ViewChild(TabsComponent) tabs: TabsComponent;
}

@Component({
  // tslint:disable-next-line:component-selector
  template: `<h2>Panel 1</h2>`
})
export class Panel1Component {
}

@Component({
  // tslint:disable-next-line:component-selector
  template: `<h2>Panel 2</h2>`
})
export class Panel2Component {
}

function initComponent(angularComponent: any): ComponentFixture<any> {
  const fixture = TestBed.createComponent(angularComponent);
  // component = fixture.componentInstance;
  const router = TestBed.inject(Router);
  fixture.detectChanges();
  jest
    .spyOn(router, 'navigate')
    .mockImplementation(() => of(true).toPromise());

  return fixture;
}

describe('Tabs', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InitTestHost1Component,
        PanelTestHost1Component,
        LastTwoTabsDisabledComponent,
        FirstAndLastTabsDisabledComponent,
        FirstTabDisabledComponent,
        TestAutoActivateComponent,
        TabsComponent,
        TabComponent,
        Panel1Component,
        Panel2Component
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: Panel1Component },
          { path: 'panel1', component: Panel1Component },
          { path: 'panel2', component: Panel2Component }
        ])
      ]
    })
    .compileComponents();
  });

  describe('Tab initialization behavior', () => {

    it('should not throw an error when a selected tab link does not define what it controls', () => {
      const fixture = initComponent(InitTestHost1Component);
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('should assign tablist and tab roles', () => {

      initComponent(InitTestHost1Component);

      const tablist = document.querySelector('.jazz-tablist');
      expect(tablist).toHaveAttribute('role', 'tablist');
      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');
      links.forEach((link) => {
        expect(link).toHaveAttribute('role', 'tab');
      });
    });

    it('should show the section associated with the active tab and hide other tabs', async () => {

      initComponent(PanelTestHost1Component);

      const panel1 = document.getElementById('panel1');
      const panel2 = document.getElementById('panel2');
      const panel3 = document.getElementById('panel3');
      const panelDisabled = document.getElementById('panel_disabled');

      expect(panel1).not.toBeVisible();
      expect(panel2).toBeVisible();
      expect(panel3).not.toBeVisible();
      expect(panelDisabled).not.toBeVisible();
    });

    it('should make the active tab focusable and all other tabs not focusable', () => {

      initComponent(InitTestHost1Component);

      const tablist = document.querySelector('.jazz-tablist');
      expect(tablist).toHaveAttribute('role', 'tablist');
      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');
      expect(links.length).toEqual(4);
      links.forEach((link) => {
        if (link.getAttribute('aria-selected') === 'true') {
          expect(link).toHaveAttribute('tabindex', '0');
        } else {
          expect(link).toHaveAttribute('tabindex', '-1');
        }
      });
    });
  });

  describe('Tab link click behavior', () => {
    it('should select a tab link when that tab link is clicked', () => {

      const fixture = initComponent(InitTestHost1Component);

      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const link3 = links.item(3);
      expect(link3).not.toHaveAttribute('aria-selected', 'true');

      link3.click();
      fixture.detectChanges();

      expect(link3).toHaveAttribute('aria-selected', 'true');
    });

    it('should not de-select an active tab link when it is clicked', () => {

      const fixture = initComponent(InitTestHost1Component);

      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const link = links.item(1);
      expect(link).toHaveAttribute('aria-selected', 'true');

      link.click();
      fixture.detectChanges();

      expect(link).toHaveAttribute('aria-selected', 'true');
    });

    it('should remove selection of a tab link when another tab link is clicked', () => {

      const fixture = initComponent(InitTestHost1Component);

      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const linkLast = links.item(links.length - 1);
      const linkOriginallySelected = links.item(1);
      expect(linkLast).not.toHaveAttribute('aria-selected', 'true');
      expect(linkOriginallySelected).toHaveAttribute('aria-selected', 'true');

      linkLast.click();

      fixture.detectChanges();

      expect(linkLast).toHaveAttribute('aria-selected', 'true');
      expect(linkOriginallySelected).not.toHaveAttribute('aria-selected', 'true');
    });

    it('should show the section associated with the link that is clicked', () => {

      const fixture = initComponent(PanelTestHost1Component);

      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const panel1 = document.getElementById('panel1');
      const panel2 = document.getElementById('panel2');
      const panel3 = document.getElementById('panel3');
      const panelDisabled = document.getElementById('panel_disabled');

      expect(panel1).not.toBeVisible();
      expect(panel2).toBeVisible();
      expect(panel3).not.toBeVisible();
      expect(panelDisabled).not.toBeVisible();

      const link3 = links.item(3);
      link3.click();

      fixture.detectChanges();

      expect(panel1).not.toBeVisible();
      expect(panel2).not.toBeVisible();
      expect(panel3).toBeVisible();
      expect(panelDisabled).not.toBeVisible();
    });
  });

  describe('tab link right arrow key behavior', () => {
    describe('auto active is disabled', () => {
      it('should set focus to the next tab link without changing the selected tab link', () => {

        const fixture = initComponent(InitTestHost1Component);

        const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

        const link1 = links.item(0);
        const link2 = links.item(1);
        link1.click();
        fixture.detectChanges();
        link1.focus();
        fixture.detectChanges();
        expect(link1).toHaveFocus();
        expect(link1).toHaveAttribute('aria-selected', 'true');

        simulateKeyupEvent(link1, 'ArrowRight');

        fixture.detectChanges();

        expect(link2).toHaveFocus();
        expect(link1).toHaveAttribute('aria-selected', 'true');
        expect(link2).toHaveAttribute('aria-selected', 'false');
      });

      it('should not skip over disabled tab links and not change the selected tab link', () => {

        const fixture = initComponent(InitTestHost1Component);
        const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

        const link1 = links.item(1);
        const link2 = links.item(3);
        const linkDisabled = links.item(2);

        link1.click();
        fixture.detectChanges();
        link1.focus();
        fixture.detectChanges();
        expect(link1).toHaveFocus();
        expect(link1).toHaveAttribute('aria-selected', 'true');

        simulateKeyupEvent(link1, 'ArrowRight');
        fixture.detectChanges();

        expect(linkDisabled).toHaveFocus();
        expect(link1).toHaveAttribute('aria-selected', 'true');
        expect(link2).toHaveAttribute('aria-selected', 'false');
      });
    });

    describe('auto active is enabled', () => {
      it('should set focus to the next tab link without changing the selected tab link', () => {

        const fixture = initComponent(InitTestHost1Component);
        fixture.componentInstance.autoActivate = true;
        const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

        const link1 = links.item(0);
        const link2 = links.item(1);
        link1.focus();
        fixture.detectChanges();
        expect(link1).toHaveFocus();

        simulateKeyupEvent(link1, 'ArrowRight');
        fixture.detectChanges();

        expect(link2).toHaveFocus();
        expect(link1).toHaveAttribute('aria-selected', 'false');
        expect(link2).toHaveAttribute('aria-selected', 'true');
      });

      it('should not skip over disabled tab links and not change the selected tab link', () => {

        const fixture = initComponent(InitTestHost1Component);
        fixture.componentInstance.tabs.autoActivate = true;
        fixture.detectChanges();
        const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

        const link1 = links.item(1);
        const link2 = links.item(3);
        const linkDisabled = links.item(2);

        link1.focus();
        fixture.detectChanges();
        expect(link1).toHaveFocus();
        expect(link1).toHaveAttribute('aria-selected', 'true');

        simulateKeyupEvent(link1, 'ArrowRight');
        fixture.detectChanges();

        expect(linkDisabled).toHaveFocus();
        expect(link1).toHaveAttribute('aria-selected', 'true');
        expect(link2).toHaveAttribute('aria-selected', 'false');
      });

    });
  });

  describe('tab link left arrow key behavior', () => {
    it('should navigate to the previous tab link', () => {

      const fixture = initComponent(InitTestHost1Component);
      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const link1 = links.item(0);
      const link2 = links.item(1);
      link2.click();
      fixture.detectChanges();
      link2.focus();
      fixture.detectChanges();
      expect(link2).toHaveFocus();
      expect(link2).toHaveAttribute('aria-selected', 'true');

      simulateKeyupEvent(link2, 'ArrowLeft');
      fixture.detectChanges();

      expect(link1).toHaveFocus();
    });

    it('should not skip over disabled tab links', () => {

      const fixture = initComponent(InitTestHost1Component);
      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const link1 = links.item(3);
      const link2 = links.item(1);
      const linkDisabled = links.item(2);

      link1.focus();
      fixture.detectChanges();
      expect(link1).toHaveFocus();

      simulateKeyupEvent(link1, 'ArrowLeft');
      fixture.detectChanges();

      expect(linkDisabled).toHaveFocus();
    });

  });

  describe('tab link Home key behavior', () => {
    it('should navigate to the first tab link', () => {

      const fixture = initComponent(InitTestHost1Component);
      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const link1 = links.item(1);
      const link2 = links.item(0);
      link1.click();
      fixture.detectChanges();
      link1.focus();
      fixture.detectChanges();
      expect(link1).toHaveFocus();
      expect(link1).toHaveAttribute('aria-selected', 'true');

      simulateKeyupEvent(link1, 'Home');
      fixture.detectChanges();

      expect(link2).toHaveFocus();
    });

    it('should choose the first tab (even disabled) when the first tab is disabled', () => {
      const fixture = initComponent(FirstTabDisabledComponent);
      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const link1 = links.item(2);
      const link2 = links.item(1);
      const linkDisabled = links.item(0);
      link2.click();
      fixture.detectChanges();
      expect(link2).toHaveAttribute('aria-selected', 'true');
      link1.focus();
      expect(link1).toHaveFocus();

      simulateKeyupEvent(link1, 'Home');
      fixture.detectChanges();

      expect(linkDisabled).toHaveFocus();
    });
  });

  describe('tab link End key behavior', () => {
    it('should navigate to the last tab link', () => {
      const fixture = initComponent(InitTestHost1Component);
      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const link1 = links.item(1);
      const link2 = links.item(3);
      link1.click();
      fixture.detectChanges();
      link1.focus();
      fixture.detectChanges();
      expect(link1).toHaveFocus();
      expect(link1).toHaveAttribute('aria-selected', 'true');

      simulateKeyupEvent(link1, 'End');
      fixture.detectChanges();

      expect(link2).toHaveFocus();
    });

    it('should choose the last tab even when the last tab is disabled', () => {

      const fixture = initComponent(FirstAndLastTabsDisabledComponent);
      const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist a');

      const link1 = links.item(1);
      const link2 = links.item(2);
      const linkDisabled = links.item(3);
      link1.click();
      fixture.detectChanges();
      link1.focus();
      fixture.detectChanges();
      expect(link1).toHaveFocus();
      expect(link1).toHaveAttribute('aria-selected', 'true');

      simulateKeyupEvent(link1, 'End');
      fixture.detectChanges();

      expect(linkDisabled).toHaveFocus();
    });
  });
});
