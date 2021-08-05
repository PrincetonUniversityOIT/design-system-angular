import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent, TabComponent } from './tabs.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {Component, ViewChild} from '@angular/core';
import {simulateKeyupEvent} from '../../../../../src/jest-config/setup';


@Component({
  template: `
    <jazz-tabs>
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
    <jazz-tabs [autoActivate]=true>
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
    <jazz-tabs>
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
    <jazz-tabs>
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
    <jazz-tabs>
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
    <jazz-tabs>
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

    it('should not throw an error when a selected tab button does not define what it controls', () => {
      const fixture = initComponent(InitTestHost1Component);
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('should assign tablist and tab roles', () => {

      initComponent(InitTestHost1Component);

      const tablist = document.querySelector('.jazz-tablist');
      expect(tablist).toHaveAttribute('role', 'tablist');
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('role', 'tab');
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
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');
      expect(buttons.length).toEqual(4);
      buttons.forEach((button) => {
        if (button.getAttribute('aria-selected') === 'true') {
          expect(button).toHaveAttribute('tabindex', '0');
        } else {
          expect(button).toHaveAttribute('tabindex', '-1');
        }
      });
    });
  });

  describe('Tab button click behavior', () => {
    it('should select a tab button when that tab button is clicked', () => {

      const fixture = initComponent(InitTestHost1Component);

      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const button3 = buttons.item(3);
      expect(button3).not.toHaveAttribute('aria-selected', 'true');

      button3.click();
      fixture.detectChanges();

      expect(button3).toHaveAttribute('aria-selected', 'true');
    });

    it('should not de-select an active tab button when it is clicked', () => {

      const fixture = initComponent(InitTestHost1Component);

      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const button = buttons.item(1);
      expect(button).toHaveAttribute('aria-selected', 'true');

      button.click();
      fixture.detectChanges();

      expect(button).toHaveAttribute('aria-selected', 'true');
    });

    it('should remove selection of a tab button when another tab button is clicked', () => {

      const fixture = initComponent(InitTestHost1Component);

      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const buttonLast = buttons.item(buttons.length - 1);
      const buttonOriginallySelected = buttons.item(1);
      expect(buttonLast).not.toHaveAttribute('aria-selected', 'true');
      expect(buttonOriginallySelected).toHaveAttribute('aria-selected', 'true');

      buttonLast.click();

      fixture.detectChanges();

      expect(buttonLast).toHaveAttribute('aria-selected', 'true');
      expect(buttonOriginallySelected).not.toHaveAttribute('aria-selected', 'true');
    });

    it('should show the section associated with the button that is clicked', () => {

      const fixture = initComponent(PanelTestHost1Component);

      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const panel1 = document.getElementById('panel1');
      const panel2 = document.getElementById('panel2');
      const panel3 = document.getElementById('panel3');
      const panelDisabled = document.getElementById('panel_disabled');

      expect(panel1).not.toBeVisible();
      expect(panel2).toBeVisible();
      expect(panel3).not.toBeVisible();
      expect(panelDisabled).not.toBeVisible();

      const button3 = buttons.item(3);
      button3.click();

      fixture.detectChanges();

      expect(panel1).not.toBeVisible();
      expect(panel2).not.toBeVisible();
      expect(panel3).toBeVisible();
      expect(panelDisabled).not.toBeVisible();
    });
  });

  describe('tab button right arrow key behavior', () => {
    describe('auto active is disabled', () => {
      it('should set focus to the next tab button without changing the selected tab button', () => {

        const fixture = initComponent(InitTestHost1Component);

        const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

        const button1 = buttons.item(0);
        const button2 = buttons.item(1);
        button1.click();
        fixture.detectChanges();
        button1.focus();
        fixture.detectChanges();
        expect(button1).toHaveFocus();
        expect(button1).toHaveAttribute('aria-selected', 'true');

        simulateKeyupEvent(button1, 'ArrowRight');

        fixture.detectChanges();

        expect(button2).toHaveFocus();
        expect(button1).toHaveAttribute('aria-selected', 'true');
        expect(button2).toHaveAttribute('aria-selected', 'false');
      });

      it('should not skip over disabled tab buttons and not change the selected tab button', () => {

        const fixture = initComponent(InitTestHost1Component);
        const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

        const button1 = buttons.item(1);
        const button2 = buttons.item(3);
        const buttonDisabled = buttons.item(2);

        button1.click();
        fixture.detectChanges();
        button1.focus();
        fixture.detectChanges();
        expect(button1).toHaveFocus();
        expect(button1).toHaveAttribute('aria-selected', 'true');

        simulateKeyupEvent(button1, 'ArrowRight');
        fixture.detectChanges();

        expect(buttonDisabled).toHaveFocus();
        expect(button1).toHaveAttribute('aria-selected', 'true');
        expect(button2).toHaveAttribute('aria-selected', 'false');
      });
    });

    describe('auto active is enabled', () => {
      it('should set focus to the next tab button without changing the selected tab button', () => {

        const fixture = initComponent(InitTestHost1Component);
        fixture.componentInstance.autoActivate = true;
        const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

        const button1 = buttons.item(0);
        const button2 = buttons.item(1);
        button1.focus();
        fixture.detectChanges();
        expect(button1).toHaveFocus();

        simulateKeyupEvent(button1, 'ArrowRight');
        fixture.detectChanges();

        expect(button2).toHaveFocus();
        expect(button1).toHaveAttribute('aria-selected', 'false');
        expect(button2).toHaveAttribute('aria-selected', 'true');
      });

      it('should not skip over disabled tab buttons and not change the selected tab button', () => {

        const fixture = initComponent(InitTestHost1Component);
        fixture.componentInstance.tabs.autoActivate = true;
        fixture.detectChanges();
        const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

        const button1 = buttons.item(1);
        const button2 = buttons.item(3);
        const buttonDisabled = buttons.item(2);

        button1.focus();
        fixture.detectChanges();
        expect(button1).toHaveFocus();
        expect(button1).toHaveAttribute('aria-selected', 'true');

        simulateKeyupEvent(button1, 'ArrowRight');
        fixture.detectChanges();

        expect(buttonDisabled).toHaveFocus();
        expect(button1).toHaveAttribute('aria-selected', 'true');
        expect(button2).toHaveAttribute('aria-selected', 'false');
      });
    });
  });

  describe('tab button left arrow key behavior', () => {
    it('should navigate to the previous tab button', () => {

      const fixture = initComponent(InitTestHost1Component);
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const button1 = buttons.item(0);
      const button2 = buttons.item(1);
      button2.click();
      fixture.detectChanges();
      button2.focus();
      fixture.detectChanges();
      expect(button2).toHaveFocus();
      expect(button2).toHaveAttribute('aria-selected', 'true');

      simulateKeyupEvent(button2, 'ArrowLeft');
      fixture.detectChanges();

      expect(button1).toHaveFocus();
    });

    it('should not skip over disabled tab buttons', () => {

      const fixture = initComponent(InitTestHost1Component);
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const button1 = buttons.item(3);
      const button2 = buttons.item(1);
      const buttonDisabled = buttons.item(2);

      button1.focus();
      fixture.detectChanges();
      expect(button1).toHaveFocus();

      simulateKeyupEvent(button1, 'ArrowLeft');
      fixture.detectChanges();

      expect(buttonDisabled).toHaveFocus();
    });
  });

  describe('tab button Home key behavior', () => {
    it('should navigate to the first tab button', () => {

      const fixture = initComponent(InitTestHost1Component);
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const button1 = buttons.item(1);
      const button2 = buttons.item(0);
      button1.click();
      fixture.detectChanges();
      button1.focus();
      fixture.detectChanges();
      expect(button1).toHaveFocus();
      expect(button1).toHaveAttribute('aria-selected', 'true');

      simulateKeyupEvent(button1, 'Home');
      fixture.detectChanges();

      expect(button2).toHaveFocus();
    });

    it('should choose the first tab (even disabled) when the first tab is disabled', () => {
      const fixture = initComponent(FirstTabDisabledComponent);
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const button1 = buttons.item(2);
      const button2 = buttons.item(1);
      const buttonDisabled = buttons.item(0);
      button2.click();
      fixture.detectChanges();
      expect(button2).toHaveAttribute('aria-selected', 'true');
      button1.focus();
      expect(button1).toHaveFocus();

      simulateKeyupEvent(button1, 'Home');
      fixture.detectChanges();

      expect(buttonDisabled).toHaveFocus();
    });
  });

  describe('tab button End key behavior', () => {
    it('should navigate to the last tab button', () => {
      const fixture = initComponent(InitTestHost1Component);
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const button1 = buttons.item(1);
      const button2 = buttons.item(3);
      button1.click();
      fixture.detectChanges();
      button1.focus();
      fixture.detectChanges();
      expect(button1).toHaveFocus();
      expect(button1).toHaveAttribute('aria-selected', 'true');

      simulateKeyupEvent(button1, 'End');
      fixture.detectChanges();

      expect(button2).toHaveFocus();
    });

    it('should choose the last tab even when the last tab is disabled', () => {

      const fixture = initComponent(FirstAndLastTabsDisabledComponent);
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.jazz-tablist button');

      const button1 = buttons.item(1);
      const button2 = buttons.item(2);
      const buttonDisabled = buttons.item(3);
      button1.click();
      fixture.detectChanges();
      button1.focus();
      fixture.detectChanges();
      expect(button1).toHaveFocus();
      expect(button1).toHaveAttribute('aria-selected', 'true');

      simulateKeyupEvent(button1, 'End');
      fixture.detectChanges();

      expect(buttonDisabled).toHaveFocus();
    });
  });
});
