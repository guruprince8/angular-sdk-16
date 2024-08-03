import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupCaseWidgetComponent } from './abc-text-customer-group-case-widget.component';

describe('AbcTextCustomerGroupCaseWidgetComponent', () => {
  let component: AbcTextCustomerGroupCaseWidgetComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupCaseWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupCaseWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupCaseWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
