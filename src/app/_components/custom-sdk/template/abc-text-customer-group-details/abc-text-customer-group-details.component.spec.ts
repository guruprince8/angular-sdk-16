import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupDetailsComponent } from './abc-text-customer-group-details.component';

describe('AbcTextCustomerGroupDetailsComponent', () => {
  let component: AbcTextCustomerGroupDetailsComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
