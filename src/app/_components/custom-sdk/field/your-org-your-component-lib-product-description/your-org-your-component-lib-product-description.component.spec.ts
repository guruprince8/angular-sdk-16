import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { YourOrgYourComponentLibProductDescriptionComponent } from './your-org-your-component-lib-product-description.component';

describe('YourOrgYourComponentLibProductDescriptionComponent', () => {
  let component: YourOrgYourComponentLibProductDescriptionComponent;
  let fixture: ComponentFixture<YourOrgYourComponentLibProductDescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YourOrgYourComponentLibProductDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourOrgYourComponentLibProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
