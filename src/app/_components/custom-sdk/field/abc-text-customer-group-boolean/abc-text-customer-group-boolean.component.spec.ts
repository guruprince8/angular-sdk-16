import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupBooleanComponent } from './abc-text-customer-group-boolean.component';

describe('AbcTextCustomerGroupBooleanComponent', () => {
  let component: AbcTextCustomerGroupBooleanComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupBooleanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
