import { Component, OnInit, Input, forwardRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { AngularPConnectData, AngularPConnectService } from '@pega/angular-sdk-components';
import { ComponentMapperComponent } from '@pega/angular-sdk-components';

interface AbcTextCustomerGroupPageProps {
  // If any, enter additional props that only exist on this component
  title: string;
  operator?: string;
}

@Component({
  selector: 'app-abc-text-customer-group-page',
  templateUrl: './abc-text-customer-group-page.component.html',
  styleUrls: ['./abc-text-customer-group-page.component.scss'],
  standalone: true,
  imports: [CommonModule, forwardRef(() => ComponentMapperComponent)]
})
export class AbcTextCustomerGroupPageComponent implements OnInit, OnDestroy {
  @Input() pConn$: typeof PConnect;
  @Input() formGroup$: FormGroup;

  // Used with AngularPConnect
  angularPConnectData: AngularPConnectData = {};

  configProps$: AbcTextCustomerGroupPageProps;
  arChildren$: any[];
  title$: string;

  constructor(private angularPConnect: AngularPConnectService) {}

  ngOnInit() {
    this.angularPConnectData = this.angularPConnect.registerAndSubscribeComponent(this, this.onStateChange);

    this.configProps$ = this.pConn$.resolveConfigProps(this.pConn$.getConfigProps()) as AbcTextCustomerGroupPageProps;
    this.arChildren$ = this.pConn$.getChildren() as any[];

    this.title$ = this.configProps$.title;
    const operator = this.configProps$.operator;

    if (operator && operator != '') {
      this.title$ += `, ${operator}`;
    }

    // when showing a page, similar to updating root, need to cause viewContainer to call "initContainer"
    sessionStorage.setItem('hasViewContainer', 'false');
  }

  ngOnDestroy(): void {
    if (this.angularPConnectData.unsubscribeFn) {
      this.angularPConnectData.unsubscribeFn();
    }
  }

  onStateChange() {
    // Should always check the bridge to see if the component should update itself (re-render)
    const bUpdateSelf = this.angularPConnect.shouldComponentUpdate(this);

    // ONLY call updateSelf when the component should update
    //    AND removing the "gate" that was put there since shouldComponentUpdate
    //      should be the real "gate"
    if (bUpdateSelf) {
      // turn off spinner
      // this.psService.sendMessage(false);
    }
  }
}
