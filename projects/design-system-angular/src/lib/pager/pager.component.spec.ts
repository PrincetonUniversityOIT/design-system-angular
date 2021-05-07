import {PagerComponent} from './pager.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('PagerComponent', () => {
  let component: PagerComponent;
  let fixture: ComponentFixture<PagerComponent>;

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

    component.currentPage = 5;
    component.totalPages = 10;

    expect(component.currentPage).toEqual(5);
    expect(component.iterablePages()).toEqual([0, -1, 3, 4, 5, 6,  7, 8, 9 ]);

    component.setPage(6);
    expect(component.currentPage).toEqual(6);
    expect(component.iterablePages()).toEqual([0, -1, 3, 4, 5, 6,  7, 8, 9 ]);
  });

  it('should move page forward after clicking next', () => {
    component.currentPage = 7;
    component.totalPages = 20;

    fixture.whenStable().then(
      () => {
        fixture.detectChanges();

        jest.spyOn(component, 'setPage');

        const pager = fixture.debugElement.query(By.css('.jazz-pager'));
        const items = pager.children[0].children;

        const link = items[items.length - 1].nativeElement.querySelector('a');
        link.click();

        expect(component.setPage).toHaveBeenCalled();
        expect(component.currentPage).toEqual(8);
        expect(component.iterablePages()).toEqual([ 0, -1,  6,  7, 8, 9, 10, -1, 19]);
      }
    );
  });

  it('should move page backward after clicking previous', () => {
    component.currentPage = 7;
    component.totalPages = 20;

    fixture.whenStable().then(
      () => {
        fixture.detectChanges();

        jest.spyOn(component, 'setPage');

        const pager = fixture.debugElement.query(By.css('.jazz-pager'));
        const items = pager.children[0].children;

        const link = items[0].nativeElement.querySelector('a');
        link.click();

        expect(component.setPage).toHaveBeenCalled();
        expect(component.currentPage).toEqual(6);
        expect(component.iterablePages()).toEqual([  0, -1,  4,  5, 6, 7,  8, -1, 19]);
      }
    );
  });

  it('should create a simple pager and show the previous page link as disabled if the current page = 1', () => {
    component.currentPage = 1;
    component.totalPages = 10;

    fixture.whenStable().then(
      () => {
        fixture.detectChanges();

        const pager = fixture.debugElement.query(By.css('.jazz-pager'));
        const items = pager.children[0].children;

        const span = items[0].children[0].nativeElement;
        expect(span.getAttribute('data-page')).toEqual('Previous');
        expect(span.getAttribute('aria-disabled')).toEqual('true');
      }
    );
  });

  it('should create a simple pager and show the next page link as disabled if the current page = max page', () => {
    component.currentPage = 10;
    component.totalPages = 10;

    fixture.whenStable().then(
      () => {
        fixture.detectChanges();

        const pager = fixture.debugElement.query(By.css('.jazz-pager'));
        const items = pager.children[0].children;

        const span = items[items.length - 1].children[0].nativeElement;
        expect(span.getAttribute('data-page')).toEqual('Next');
        expect(span.getAttribute('aria-disabled')).toEqual('true');
      }
    );
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
        fixture.detectChanges();

        const pager = fixture.debugElement.query(By.css('.jazz-pager'));
        const pagerHTML = pager.nativeElement.innerHTML;
        expect(pagerHTML).toMatchSnapshot();
      }
    );
  });

});
