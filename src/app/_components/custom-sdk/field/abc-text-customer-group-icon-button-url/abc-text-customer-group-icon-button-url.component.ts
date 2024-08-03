import { Component, OnInit, Input, ChangeDetectorRef, forwardRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AngularPConnectData, AngularPConnectService } from '@pega/angular-sdk-components';
import { Utils } from '@pega/angular-sdk-components';
import { ComponentMapperComponent } from '@pega/angular-sdk-components';
import { PConnFieldProps } from '@pega/angular-sdk-components';

interface AbcTextCustomerGroupIconButtonUrlProps extends PConnFieldProps {
  // If any, enter additional props that only exist on URL here
  countryCode: string;
}

@Component({
  selector: 'app-abc-text-customer-group-icon-button-url',
  templateUrl: './abc-text-customer-group-icon-button-url.component.html',
  styleUrls: ['./abc-text-customer-group-icon-button-url.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    forwardRef(() => ComponentMapperComponent)
  ]
})
export class AbcTextCustomerGroupIconButtonUrlComponent implements OnInit, OnDestroy {
  @Input() pConn$: typeof PConnect;
  @Input() formGroup$: FormGroup;

  // Used with AngularPConnect
  angularPConnectData: AngularPConnectData = {};
  configProps$: AbcTextCustomerGroupIconButtonUrlProps;

  label$ = '';
  value$ = '';
  controlName$: string;
  bHasForm$ = true;
  componentReference = '';
  displayMode$?: string = '';
  tooltip$ = '';
  showTable$ = false;
  tableLabel$ = '';
  stateNameLabel$ = '';
  stateCodeLabel$ = '';
  waitingForData = false;
  repeatList$: MatTableDataSource<any>;
  fields$: any[];
  displayedColumns$ = ['stateName', 'stateCode'];
  countryCode = 'USA';

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
      // this.formGroup$.addControl(this.controlName$, this.fieldControl);
      // this.fieldControl.setValue(this.value$);
      this.bHasForm$ = true;
    } else {
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
    this.configProps$ = this.pConn$.resolveConfigProps(this.pConn$.getConfigProps()) as AbcTextCustomerGroupIconButtonUrlProps;

    if (this.configProps$.value != undefined) {
      this.value$ = this.configProps$.value;
    }
    if (this.configProps$.countryCode != undefined) {
      this.countryCode = this.configProps$.countryCode;
    }

    // localized labels
    this.label$ = this.pConn$.getLocalizedValue('State list for', '', '');
    this.label$ = this.label$.concat(' ').concat(this.countryCode);
    this.tooltip$ = this.pConn$.getLocalizedValue('Click to show/hide state list', '', '');
    this.tableLabel$ = this.pConn$.getLocalizedValue('State list', '', '');
    this.stateNameLabel$ = this.pConn$.getLocalizedValue('State name', '', '');
    this.stateCodeLabel$ = this.pConn$.getLocalizedValue('State code', '', '');

    this.displayMode$ = this.configProps$.displayMode;

    this.componentReference = (this.pConn$.getStateProps() as any).value;

  }

  buttonClick() {
    if (!this.showTable$) {
      this.showTable$ = true;

      this.configProps$ = this.pConn$.getConfigProps();
      // @ts-ignore - second parameter pageReference for getValue method should be optional
      const dataViewName = 'D_pyStateList';
      const context = this.pConn$.getContextName();

      this.waitingForData = true;

      const stateListData = PCore.getDataApiUtils().getData(
        dataViewName,
        { dataViewParameters: [{ pyCountry: this.countryCode }] } as any,
        context
      ) as Promise<any>;

      stateListData
        .then((stateJSON: any) => {
          this.fields$ = [{ stateName: 'pyLabel', stateCode: 'pyStateCode' }];

          const tableDataResults = this.updateData(stateJSON.data.data, this.fields$);

          this.repeatList$ = new MatTableDataSource(tableDataResults);

          this.waitingForData = false;
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      this.showTable$ = false;
    }
  }

  updateData(listData: any[], fieldData: any[]): any[] {
    const returnList: any[] = new Array<any>();
    listData.forEach(row => {
      // copy
      const rowData = JSON.parse(JSON.stringify(row));

      const newRow = { stateName: '', stateCode: '' };

      for (const field of fieldData) {
        const stateName = this.pConn$.getLocalizedValue(rowData[field.stateName], '', '');
        const stateCode = rowData[field.stateCode];

        newRow.stateName = stateName;
        newRow.stateCode = stateCode;
      }
      returnList.push(newRow);
    });
    return returnList;
  }

  getErrorMessage() {
   return '';
  }
}
