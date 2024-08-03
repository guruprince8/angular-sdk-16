import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupCurrencyComponent } from './abc-text-customer-group-currency.component';

describe('AbcTextCustomerGroupCurrencyComponent', () => {
  let component: AbcTextCustomerGroupCurrencyComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupCurrencyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
