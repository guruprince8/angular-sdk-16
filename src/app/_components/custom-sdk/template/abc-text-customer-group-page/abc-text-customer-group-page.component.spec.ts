import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupPageComponent } from './abc-text-customer-group-page.component';

describe('AbcTextCustomerGroupPageComponent', () => {
  let component: AbcTextCustomerGroupPageComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
