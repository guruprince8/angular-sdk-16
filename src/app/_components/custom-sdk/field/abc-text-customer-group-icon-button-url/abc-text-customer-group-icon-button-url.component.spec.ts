
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupIconButtonUrlComponent } from './abc-text-customer-group-icon-button-url.component';

describe('AbcTextCustomerGroupIconButtonUrlComponent', () => {
  let component: AbcTextCustomerGroupIconButtonUrlComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupIconButtonUrlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupIconButtonUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupIconButtonUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
