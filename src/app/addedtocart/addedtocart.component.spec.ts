import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedtocartComponent } from './addedtocart.component';

describe('AddedtocartComponent', () => {
  let component: AddedtocartComponent;
  let fixture: ComponentFixture<AddedtocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedtocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedtocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
