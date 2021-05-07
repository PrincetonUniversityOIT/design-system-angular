import { PagerComponent } from './pager.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from "@angular/platform-browser";
import {debug} from "ng-packagr/lib/utils/log";

describe('PagerComponent', () => {
  let component: PagerComponent;
  let fixture: ComponentFixture<PagerComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a simple pager', () => {
    component.currentPage = 5;
    component.totalPages = 10;

    expect(component.currentPage).toEqual(5);
    expect(component.iterablePages()).toEqual([0, -1, 3, 4, 5, 6,  7, 8, 9 ]);

    component.setPage(6);
    expect(component.currentPage).toEqual(6);
    expect(component.iterablePages()).toEqual([0, -1, 3, 4, 5, 6,  7, 8, 9 ]);
  });

  it('should create a double truncated pager', () => {
    component.currentPage = 7;
    component.totalPages = 20;

    expect(component.currentPage).toEqual(7);
    expect(component.iterablePages()).toEqual([0, -1,  5,  6, 7, 8,  9, -1, 19]);

    component.setPage(6);
    expect(component.currentPage).toEqual(6);
    expect(component.iterablePages()).toEqual([0, -1,  4,  5, 6, 7,  8, -1, 19]);
  });

  it('should render properly for simple pager', () => {
    component.currentPage = 5;
    component.totalPages = 10;

    fixture.whenStable().then(
      () => {
        fixture.detectChanges(); // missed
        const pager = fixture.debugElement.query(By.css('.jazz-pager'));
        const pagerHTML = pager.nativeElement.innerHTML;
        expect(pagerHTML).toMatchSnapshot();
      }
    );
  });

  it('should render properly for a double truncated pager', () => {
    component.currentPage = 7;
    component.totalPages = 20;

    fixture.whenStable().then(
      () => {
        fixture.detectChanges(); // missed
        const pager = fixture.debugElement.query(By.css('.jazz-pager'));
        const pagerHTML = pager.nativeElement.innerHTML;
        expect(pagerHTML).toMatchSnapshot();
      }
    );
  });

});
