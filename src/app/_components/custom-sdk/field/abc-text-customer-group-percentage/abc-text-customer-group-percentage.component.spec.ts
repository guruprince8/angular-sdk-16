import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcTextCustomerGroupPercentageComponent } from './abc-text-customer-group-percentage.component';

describe('AbcTextCustomerGroupPercentageComponent', () => {
  let component: AbcTextCustomerGroupPercentageomponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
