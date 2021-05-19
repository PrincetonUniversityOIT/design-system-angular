import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityHeaderComponent } from './utility-header.component';
import { UtilityHeaderLinkComponent} from './utility-header-link.component';
import {Component} from '@angular/core';

@Component({
  selector: 'lib-links-mock',
  template: `
    <jazz-utility-header>
      <jazz-utility-header-link label="Link 1" url="http://link1/"></jazz-utility-header-link>
      <jazz-utility-header-link label="Link 2" url="http://link2/" *ngIf="false"></jazz-utility-header-link>
      <jazz-utility-header-link label="Link 3" url="http://link3/" [external]="true"></jazz-utility-header-link>
    </jazz-utility-header>
  `
})
export class TestLinkMockComponent { }

describe('UtilityHeaderComponent', () => {
  let component: UtilityHeaderComponent;
  let fixture: ComponentFixture<UtilityHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UtilityHeaderComponent,
        UtilityHeaderLinkComponent,
        TestLinkMockComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set jazz-stuck and jazz-stuck-mobile by default', () => {
    const header = fixture.nativeElement.querySelector('header.jazz-utility-header');
    expect(header).toHaveClass('jazz-stuck');
    expect(header).toHaveClass('jazz-stuck-mobile');
  });

  it('should not set jazz-stuck and jazz-stuck-mobile when disabled', () => {
    component.stuckDesktop = false;
    component.stuckMobile = false;
    fixture.detectChanges();
    const header = fixture.nativeElement.querySelector('header.jazz-utility-header');
    expect(header).not.toHaveClass('jazz-stuck');
    expect(header).not.toHaveClass('jazz-stuck-mobile');
  });

  it('should open and close menu when toggle button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button.jazz-utility-header__nav-toggle');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    const buttonIcon = button.querySelector('i.jazz-icon');
    expect(buttonIcon).toHaveClass('jazz-icon-menu');
    const buttonSpan = button.querySelector('span');
    expect(buttonSpan).toHaveTextContent('Open Navigation Menu');
    const section = fixture.nativeElement.querySelector('section.jazz-utility-header__nav');
    expect(section).not.toHaveClass('jazz-expanded');

    // open the menu with a click

    button.click();
    fixture.detectChanges();
    expect(section).toHaveClass('jazz-expanded');
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(buttonIcon).toHaveClass('jazz-icon-close');
    expect(buttonSpan).toHaveTextContent('Close Navigation Menu');

    // close the menu with a click

    button.click();
    fixture.detectChanges();
    expect(section).not.toHaveClass('jazz-expanded');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(buttonIcon).toHaveClass('jazz-icon-menu');
    expect(buttonSpan).toHaveTextContent('Open Navigation Menu');
  });
});

describe('UtilityHeaderComponentTemplate', () => {
  let component: TestLinkMockComponent;
  let fixture: ComponentFixture<TestLinkMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UtilityHeaderComponent,
        UtilityHeaderLinkComponent,
        TestLinkMockComponent
      ]
    })
      .compileComponents();
  });

  it('should translate link tags into links', () => {
    fixture = TestBed.createComponent(TestLinkMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const links = fixture.nativeElement.querySelectorAll('section.jazz-utility-header__nav > nav.jazz-nav > ul > li > a');
    // the middle link will be hidden by an *ngIf
    expect(links.length).toEqual(2);
    expect(links[0]).toHaveAttribute('href', 'http://link1/');
    expect(links[0]).toHaveTextContent('Link 1');
    expect(links[0]).not.toHaveAttribute('target');
    expect(links[1]).toHaveAttribute('href', 'http://link3/');
    expect(links[1]).toHaveTextContent('Link 3');
    expect(links[1]).toHaveAttribute('target', '_blank');
  });
});
