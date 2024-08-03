import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupPageCaseWidgetComponent } from './abc-text-customer-group-page-case-widget.component';

describe('AbcTextCustomerGroupPageCaseWidgetComponent', () => {
  let component: AbcTextCustomerGroupPageCaseWidgetComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupPageCaseWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupPageCaseWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupPageCaseWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
