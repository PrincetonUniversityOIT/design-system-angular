import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenu1Component } from './main-menu1.component';

describe('MainMenu1Component', () => {
  let component: MainMenu1Component;
  let fixture: ComponentFixture<MainMenu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenu1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
