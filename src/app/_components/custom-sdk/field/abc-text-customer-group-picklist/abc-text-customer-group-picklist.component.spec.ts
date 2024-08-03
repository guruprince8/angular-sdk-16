import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupPicklistComponent } from './abc-text-customer-group-picklist.component';

describe('AbcTextCustomerGroupPicklistComponent', () => {
  let component: AbcTextCustomerGroupPicklistComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupPicklistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupPicklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupPicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
