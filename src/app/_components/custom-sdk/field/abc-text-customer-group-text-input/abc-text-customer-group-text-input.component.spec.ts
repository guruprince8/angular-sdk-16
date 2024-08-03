import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupTextInputComponent } from './abc-text-customer-group-text-input.component';

describe('AbcTextCustomerGroupTextInputComponent', () => {
  let component: AbcTextCustomerGroupTextInputComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupTextInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
