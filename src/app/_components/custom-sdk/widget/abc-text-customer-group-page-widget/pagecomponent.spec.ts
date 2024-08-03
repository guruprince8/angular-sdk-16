import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupPageWidgetComponent } from './abc-text-customer-group-page-widget.component';

describe('AbcTextCustomerGroupPageWidgetComponent', () => {
  let component: AbcTextCustomerGroupPageWidgetComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupPageWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupPageWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupPageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
