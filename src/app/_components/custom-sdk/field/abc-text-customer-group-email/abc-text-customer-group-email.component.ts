import { Component, OnInit, Input, ChangeDetectorRef, forwardRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { interval } from 'rxjs';
import { AngularPConnectData, AngularPConnectService } from '@pega/angular-sdk-components';
import { Utils } from '@pega/angular-sdk-components';
import { ComponentMapperComponent } from '@pega/angular-sdk-components';
import { PConnFieldProps } from '@pega/angular-sdk-components';

interface AbcTextCustomerGroupEmailProps extends PConnFieldProps {
  // If any, enter additional props that only exist on Email here
}

@Component({
  selector: 'app-abc-text-customer-group-email',
  templateUrl: './abc-text-customer-group-email.component.html',
  styleUrls: ['./abc-text-customer-group-email.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, forwardRef(() => ComponentMapperComponent)]
})
export class AbcTextCustomerGroupEmailComponent implements OnInit, OnDestroy {
  @Input() pConn$: typeof PConnect;
  @Input() formGroup$: FormGroup;

  // Used with AngularPConnect
  angularPConnectData: AngularPConnectData = {};
  configProps$: AbcTextCustomerGroupEmailProps;

  label$ = '';
  value$: string;
  bRequired$ = false;
  bReadonly$ = false;
  bDisabled$ = false;
  bVisible$ = true;
  displayMode$?: string = '';
  controlName$: string;
  bHasForm$ = true;
  componentReference = '';
  testId: string;
  helperText: string;
  placeholder: string;

  fieldControl = new FormControl('', null);

  constructor(
    private angularPConnect: AngularPConnectService,
    private cdRef: ChangeDetectorRef,
    private utils: Utils
  ) {}

  ngOnInit(): void {
    // First thing in initialization is registering and subscribing to the AngularPConnect service
    this.angularPConnectData = this.angularPConnect.registerAndSubscribeComponent(this, this.onStateChange);
    this.controlName$ = this.angularPConnect.getComponentID(this);

    // Then, continue on with other initialization

    // call updateSelf when initializing
    // this.updateSelf();
    this.checkAndUpdate();

    if (this.formGroup$) {
      // add control to formGroup
      this.formGroup$.addControl(this.controlName$, this.fieldControl);
      this.fieldControl.setValue(this.value$);
      this.bHasForm$ = true;
    } else {
      this.bReadonly$ = true;
      this.bHasForm$ = false;
    }
  }

  ngOnDestroy(): void {
    if (this.formGroup$) {
      this.formGroup$.removeControl(this.controlName$);
    }

    if (this.angularPConnectData.unsubscribeFn) {
      this.angularPConnectData.unsubscribeFn();
    }
  }

  // Callback passed when subscribing to store change
  onStateChange() {
    this.checkAndUpdate();
  }

  checkAndUpdate() {
    // Should always check the bridge to see if the component should
    // update itself (re-render)
    const bUpdateSelf = this.angularPConnect.shouldComponentUpdate(this);

    // ONLY call updateSelf when the component should update
    if (bUpdateSelf) {
      this.updateSelf();
    }
  }

  // updateSelf
  updateSelf(): void {
    // moved this from ngOnInit() and call this from there instead...
    this.configProps$ = this.pConn$.resolveConfigProps(this.pConn$.getConfigProps()) as AbcTextCustomerGroupEmailProps;
    this.testId = this.configProps$.testId;
    this.label$ = this.configProps$.label;
    this.displayMode$ = this.configProps$.displayMode;

    if (this.configProps$.value != undefined) {
      this.value$ = this.configProps$.value;
    }
    this.helperText = this.configProps$.helperText;
    this.placeholder = this.configProps$.placeholder || '';

    // timeout and detectChanges to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      if (this.configProps$.required != null) {
        this.bRequired$ = this.utils.getBooleanValue(this.configProps$.required);
      }
      this.cdRef.detectChanges();
    });

    if (this.configProps$.visibility != null) {
      this.bVisible$ = this.utils.getBooleanValue(this.configProps$.visibility);
    }

    // disabled
    if (this.configProps$.disabled != undefined) {
      this.bDisabled$ = this.utils.getBooleanValue(this.configProps$.disabled);
    }

    if (this.bDisabled$) {
      this.fieldControl.disable();
    } else {
      this.fieldControl.enable();
    }

    if (this.configProps$.readOnly != null) {
      this.bReadonly$ = this.utils.getBooleanValue(this.configProps$.readOnly);
    }

    this.componentReference = (this.pConn$.getStateProps() as any).value;

    // trigger display of error message with field control
    if (this.angularPConnectData.validateMessage != null && this.angularPConnectData.validateMessage != '') {
      const timer = interval(100).subscribe(() => {
        this.fieldControl.setErrors({ message: true });
        this.fieldControl.markAsTouched();

        timer.unsubscribe();
      });
    }
  }

  fieldOnChange(event: any) {
    this.angularPConnectData.actions?.onChange(this, event);
  }

  fieldOnBlur(event: any) {
    // PConnect wants to use eventHandler for onBlur
    this.angularPConnectData.actions?.onBlur(this, event);
  }

  getErrorMessage() {
    let errMessage = '';

    // look for validation messages for json, pre-defined or just an error pushed from workitem (400)
    if (this.fieldControl.hasError('message')) {
      errMessage = this.angularPConnectData.validateMessage ?? '';
      return errMessage;
    }
    if (this.fieldControl.hasError('required')) {
      errMessage = 'You must enter a value';
    } else if (this.fieldControl.errors) {
      errMessage = this.fieldControl.errors.toString();
    }

    return errMessage;
  }
}