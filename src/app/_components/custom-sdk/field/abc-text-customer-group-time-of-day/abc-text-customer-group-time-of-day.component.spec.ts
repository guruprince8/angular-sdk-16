import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupTimeOfDayComponent } from './abc-text-customer-group-time-of-day.component';

describe('AbcTextCustomerGroupTimeOfDayComponent', () => {
  let component: AbcTextCustomerGroupTimeOfDayComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupTimeOfDayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupTimeOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupTimeOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
