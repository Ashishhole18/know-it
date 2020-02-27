import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsearchComponent } from './showsearch.component';

describe('ShowsearchComponent', () => {
  let component: ShowsearchComponent;
  let fixture: ComponentFixture<ShowsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
