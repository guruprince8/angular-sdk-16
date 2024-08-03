import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupIntegerComponent } from './abc-text-customer-group-integer.component';

describe('AbcTextCustomerGroupIntegerComponent', () => {
  let component: AbcTextCustomerGroupIntegerComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupIntegerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupIntegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
