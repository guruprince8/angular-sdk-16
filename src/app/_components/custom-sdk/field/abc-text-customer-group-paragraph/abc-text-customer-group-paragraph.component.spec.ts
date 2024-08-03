import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextCustomerGroupParagraphComponent } from './abc-text-customer-group-paragraph.component';

describe('AbcTextCustomerGroupParagraphComponent', () => {
  let component: AbcTextCustomerGroupParagraphComponent;
  let fixture: ComponentFixture<AbcTextCustomerGroupParagraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextCustomerGroupParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextCustomerGroupParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
