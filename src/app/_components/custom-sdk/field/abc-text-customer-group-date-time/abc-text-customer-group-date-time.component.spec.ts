import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcTextCustomerGroupDateTimeComponent } from './abc-text-customer-group-date-time.component';

describe('AbcTextCustomerGroupDateTimeComponent', () => {
  let component: AbcTextCustomerGroupDateTimeComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupDateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupDateTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
