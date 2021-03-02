import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenu3Component } from './main-menu3.component';

describe('MainMenu3Component', () => {
  let component: MainMenu3Component;
  let fixture: ComponentFixture<MainMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenu3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
