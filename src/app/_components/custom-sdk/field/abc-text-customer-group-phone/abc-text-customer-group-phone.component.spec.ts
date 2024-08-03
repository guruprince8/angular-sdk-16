import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupPhoneComponent } from './abc-text-customer-group-phone.component';

describe('AbcTextCustomerGroupPhoneComponent', () => {
  let component: AbcTextCustomerGroupPhoneComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupPhoneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
