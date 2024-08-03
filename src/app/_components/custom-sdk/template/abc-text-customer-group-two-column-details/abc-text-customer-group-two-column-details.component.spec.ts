import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupTwoColumnDetailsComponent } from './abc-text-customer-group-two-column-details.component';

describe('AbcTextCustomerGroupTwoColumnDetailsComponent', () => {
  let component: AbcTextCustomerGroupTwoColumnDetailsComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupTwoColumnDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupTwoColumnDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupTwoColumnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
