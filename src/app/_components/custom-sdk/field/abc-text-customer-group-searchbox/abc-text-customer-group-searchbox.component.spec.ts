import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupSearchboxComponent } from './abc-text-customer-group-searchbox.component';

describe('AbcTextCustomerGroupSearchboxComponent', () => {
  let component: AbcTextCustomerGroupSearchboxComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupSearchboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
