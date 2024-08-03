import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupRadiobuttonsComponent } from './abc-text-customer-group-radiobuttons.component';

describe('AbcTextCustomerGroupRadiobuttonsComponent', () => {
  let component: AbcTextCustomerGroupRadiobuttonsComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupRadiobuttonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupRadiobuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupRadiobuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
