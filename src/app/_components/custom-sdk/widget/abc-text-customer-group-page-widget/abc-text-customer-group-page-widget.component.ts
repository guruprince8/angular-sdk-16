import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Utils } from '@pega/angular-sdk-components';

interface AbcTextCustomerGroupPageWidgetProps {
  // If any, enter additional props that only exist on this component
  header?: string;
  description?: string;
  whatsnewlink?: string;
  label?: string;
  datasource?: any;
}

@Component({
  selector: 'app-abc-text-customer-group-page-widget',
  templateUrl: './abc-text-customer-group-page-widget.component.html',
  styleUrls: ['./abc-text-customer-group-page-widget.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule]
})
export class AbcTextCustomerGroupPageWidgetComponent implements OnInit {
  @Input() pConn$: typeof PConnect;

  configProps$: AbcTextCustomerGroupPageWidgetProps;
  details$: any[];
  fields$: any[];
  displayedColumns: any[];

  workList: MatTableDataSource<any>;
  waitingForData = false;

  constructor(private utils: Utils) {}

  ngOnInit(): void {
    this.configProps$ = this.pConn$.getConfigProps();
    const { datasource } = this.configProps$;

    if (datasource?.source) {
      this.details$ = datasource.source.map(item => item.name);
    }

    // going to get data for worklist to put into a table
    // data comes from calling a PCore function to get
    // get data from a data page and a PConnect function
    // to get getContextName

    const dataViewName = 'D_pyMyWorkList';
    const context = this.pConn$.getContextName();
    this.waitingForData = true;
    const workListData = PCore.getDataApiUtils().getData(dataViewName, {}, context) as Promise<any>;

    workListData
      .then((response: any) => {
        if (response.data.data !== null) {
          this.fields$ = [
            {
              label: this.pConn$.getLocalizedValue('Case type', '', ''),
              type: 'TextInput',
              fieldName: 'pxProcessName'
            }, // 2nd and 3rd args empty string until typedef marked correctly
            {
              label: this.pConn$.getLocalizedValue('Key', '', ''),
              type: 'TextInput',
              fieldName: 'pxRefObjectInsName'
            }, // 2nd and 3rd args empty string until typedef marked correctly
            {
              label: this.pConn$.getLocalizedValue('Status', '', ''),
              type: 'TextInput',
              fieldName: 'pyAssignmentStatus'
            }, // 2nd and 3rd args empty string until typedef marked correctly
            {
              label: this.pConn$.getLocalizedValue('Stage', '', ''),
              type: 'TextInput',
              fieldName: 'pxTaskLabel'
            } // 2nd and 3rd args empty string until typedef marked correctly
          ];
          const tableDataResults = this.updateData(response.data.data, this.fields$);
          this.displayedColumns = this.getDisplayColumns(this.fields$);
          this.workList = new MatTableDataSource(tableDataResults);
          this.waitingForData = false;
        } else {
          this.workList = new MatTableDataSource();
          this.waitingForData = false;
        }
      })
      .catch((error: any) => {
        this.workList = new MatTableDataSource();
        this.waitingForData = false;
        console.log(error);
      });
  }

  updateData(listData: any[], fieldData: any[]): any[] {
    const returnList: any[] = new Array<any>();
    listData.forEach(row => {
      const rowData = JSON.parse(JSON.stringify(row));

      for (const field of fieldData) {
        const fieldName = field.fieldName;
        let formattedDate;

        switch (field.type) {
          case 'Date':
            formattedDate = this.utils.generateDate(rowData[fieldName], 'Date-Short-YYYY');
            rowData[fieldName] = formattedDate;
            break;
          case 'DateTime':
            formattedDate = this.utils.generateDateTime(rowData[fieldName], 'DateTime-Short-YYYY');
            rowData[fieldName] = formattedDate;
            break;
          default:
            break;
        }
      }
      returnList.push(rowData);
    });
    return returnList;
  }

  getDisplayColumns(fields: any[] = []) {
    return fields.map(field => {
      return field.fieldName;
    });
  }
}
