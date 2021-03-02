import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenu2Component } from './main-menu2.component';

describe('MainMenu2Component', () => {
  let component: MainMenu2Component;
  let fixture: ComponentFixture<MainMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenu2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
