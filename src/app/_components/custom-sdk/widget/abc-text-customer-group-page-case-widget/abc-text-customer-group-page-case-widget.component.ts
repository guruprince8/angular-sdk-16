import { Component, ElementRef, OnInit, Input, Renderer2, ChangeDetectorRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Utils } from '@pega/angular-sdk-components';

@Component({
  selector: 'app-abc-text-customer-group-page-case-widget',
  templateUrl: './abc-text-customer-group-page-case-widget.component.html',
  styleUrls: ['./abc-text-customer-group-page-case-widget.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule]
})
export class AbcTextCustomerGroupPageCaseWidgetComponent implements OnInit, OnChanges, OnDestroy {
  @Input() pConn$: typeof PConnect;
  @Input() displayLabel;
  fields$: any[] = [];
  bShowPopover$: boolean;
  date$: string;
  name$: string;
  label$: string;
  id$: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
    private utils: Utils
  ) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'click', el => {
      const clickedInside = this.el.nativeElement.contains(el.target);

      if (!clickedInside) {
        this.bShowPopover$ = false;
      }
    });

    this.bShowPopover$ = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { pConn$ } = changes;
    if (pConn$.previousValue !== pConn$.currentValue) {
      this.updateSelf();
    }
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
  }

  updateSelf(): void {
    const configProps$ = this.pConn$.getConfigProps() as any;
    this.displayLabel = this.displayLabel?.toLowerCase();
    const label = configProps$?.label?.toLowerCase();
    if (label === 'create operator' || this.displayLabel === 'create operator') {
      this.name$ = configProps$.createOperator.userName;
      this.id$ = configProps$.createOperator.userId;
      this.label$ = configProps$.createLabel;
    } else if (label === 'update operator' || this.displayLabel === 'update operator') {
      this.name$ = configProps$.updateOperator.userName;
      this.id$ = configProps$.updateOperator.userId;
      this.label$ = configProps$.updateLabel;
    } else if (label === 'resolve operator' || this.displayLabel === 'resolve operator') {
      this.name$ = configProps$.resolveOperator.userName;
      this.id$ = configProps$.resolveOperator.userId;
      this.label$ = configProps$.resolveLabel;
    } else {
      this.name$ = configProps$?.value.userName;
      this.id$ = configProps$?.value.userId;
      this.label$ = configProps$.label;
    }
    this.date$ = this.utils.generateDate(configProps$?.updateDateTime, 'DateTime-Since');
  }

  showOperator() {
    const operatorPreviewPromise = PCore.getUserApi().getOperatorDetails(this.id$);
    const localizedVal = PCore.getLocaleUtils().getLocaleValue;
    const localeCategory = 'Operator';
    const fillerString = '---';

    operatorPreviewPromise.then((res: any) => {
      if (res.data && res.data.pyOperatorInfo && res.data.pyOperatorInfo.pyUserName) {
        this.fields$ = [
          {
            id: 'pyPosition',
            name: localizedVal('Position', localeCategory),
            value: res.data.pyOperatorInfo.pyPosition != '' ? res.data.pyOperatorInfo.pyPosition : fillerString
          },
          {
            id: 'pyOrganization',
            name: localizedVal('Organization', localeCategory),
            value: res.data.pyOperatorInfo.pyOrganization != '' ? res.data.pyOperatorInfo.pyOrganization : fillerString
          },
          {
            id: 'ReportToUserName',
            name: localizedVal('Reports to', localeCategory),
            value: res.data.pyOperatorInfo.pyReportToUserName != '' ? res.data.pyOperatorInfo.pyReportToUserName : fillerString
          },
          {
            id: 'pyTelephone',
            name: localizedVal('Telephone', localeCategory),
            value: res.data.pyOperatorInfo.pyTelephone != '' ? res.data.pyOperatorInfo.pyTelephone : fillerString
          },
          {
            id: 'pyEmailAddress',
            name: localizedVal('Email address', localeCategory),
            value: res.data.pyOperatorInfo.pyEmailAddress != '' ? res.data.pyOperatorInfo.pyEmailAddress : fillerString
          }
        ];

        this.bShowPopover$ = true;
        this.cdRef.detectChanges();
      } else {
        console.log(
          `Operator: PCore.getUserApi().getOperatorDetails(${this.id$}); returned empty res.data.pyOperatorInfo.pyUserName - adding default`
        );
        this.fields$ = [
          {
            id: 'pyPosition',
            name: localizedVal('Position', localeCategory),
            value: fillerString
          },
          {
            id: 'pyOrganization',
            name: localizedVal('Organization', localeCategory),
            value: fillerString
          },
          {
            id: 'ReportToUserName',
            name: localizedVal('Reports to', localeCategory),
            value: fillerString
          },
          {
            id: 'pyTelephone',
            name: localizedVal('Telephone', localeCategory),
            value: fillerString
          },
          {
            id: 'pyEmailAddress',
            name: localizedVal('Email address', localeCategory),
            value: fillerString
          }
        ];
      }
    });
  }
}
