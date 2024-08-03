import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupTwoColumnFormComponent } from './abc-text-customer-group-two-column-form.component';

describe('AbcTextCustomerGroupTwoColumnFormComponent', () => {
  let component: AbcTextCustomerGroupTwoColumnFormComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupTwoColumnFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupTwoColumnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupTwoColumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
