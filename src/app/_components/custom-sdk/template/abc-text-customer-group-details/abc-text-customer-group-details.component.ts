import { Component, OnInit, Input, forwardRef, OnDestroy } from '@angular/core';
import { AngularPConnectData, AngularPConnectService, ComponentMapperComponent } from '@pega/angular-sdk-components';

@Component({
  selector: 'app-abc-text-customer-group-details',
  templateUrl: './abc-text-customer-group-details.component.html',
  styleUrls: ['./abc-text-customer-group-details.component.scss'],
  standalone: true,
  imports: [forwardRef(() => ComponentMapperComponent)]
})
export class AbcTextCustomerGroupDetailsComponent implements OnInit, OnDestroy {
  constructor(private angularPConnect: AngularPConnectService) {}

  @Input() pConn$: typeof PConnect;

  highlightedDataArr: any[] = [];
  showHighlightedData: boolean;
  arFields$: any[] = [];

  // Used with AngularPConnect
  angularPConnectData: AngularPConnectData = {};

  ngOnInit(): void {
    // First thing in initialization is registering and subscribing to the AngularPConnect service
    this.angularPConnectData = this.angularPConnect.registerAndSubscribeComponent(this, this.onStateChange);

    // this.updateSelf();
    this.checkAndUpdate();
  }

  ngOnDestroy() {
    if (this.angularPConnectData.unsubscribeFn) {
      this.angularPConnectData.unsubscribeFn();
    }
  }

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

  updateSelf() {
    const rawMetaData: any = this.pConn$.resolveConfigProps((this.pConn$.getRawMetadata() as any).config);
    this.showHighlightedData = rawMetaData?.showHighlightedData;

    if (this.showHighlightedData) {
      const highlightedData = rawMetaData?.highlightedData;
      this.highlightedDataArr = highlightedData.map(field => {
        field.config.displayMode = 'STACKED_LARGE_VAL';

        if (field.config.value === '@P .pyStatusWork') {
          field.type = 'TextInput';
          field.config.displayAsStatus = true;
        }

        return field;
      });
    }

    const kids = this.pConn$.getChildren() as any[];
    for (const kid of kids) {
      this.arFields$ = [];
      const pKid = kid.getPConnect();
      const fields = pKid.getChildren();
      fields?.forEach(field => {
        const thePConn = field.getPConnect();
        const theCompType = thePConn.getComponentName().toLowerCase();
        if (theCompType === 'reference' || theCompType === 'group') {
          const configProps = thePConn.getConfigProps();
          configProps.readOnly = true;
          configProps.displayMode = 'LABELS_LEFT';
          const propToUse = { ...thePConn.getInheritedProps() };
          configProps.label = propToUse?.label;
          const options = {
            context: thePConn.getContextName(),
            pageReference: thePConn.getPageReference(),
            referenceList: thePConn.getReferenceList()
          };
          const viewContConfig = {
            meta: {
              ...thePConn.getMetadata(),
              type: theCompType,
              config: configProps
            },
            options
          };
          const theViewCont = PCore.createPConnect(viewContConfig);
          const data = {
            type: theCompType,
            pConn: theViewCont?.getPConnect()
          };
          this.arFields$.push(data);
        } else {
          const data = {
            type: theCompType,
            config: thePConn.getConfigProps()
          };
          this.arFields$.push(data);
        }
      });
    }
  }
}
