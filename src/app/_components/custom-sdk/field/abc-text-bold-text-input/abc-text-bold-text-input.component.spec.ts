import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbcTextBoldTextInputComponent } from './abc-text-bold-text-input.component';

describe('AbcTextBoldTextInputComponent', () => {
  let component: AbcTextBoldTextInputComponent;
  let fixture: ComponentFixture<AbcTextBoldTextInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTextBoldTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTextBoldTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
