import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';
import { DatapageService } from '@pega/angular-sdk-components';
import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupSearchboxComponent } from './abc-text-customer-group-searchbox.component';

class MockingDatapageService {
  getDataPageData = () => Promise.resolve({});
}

const meta: Meta<AbcTextCustomerGroupSearchboxComponent> = {
  title: 'AbcTextCustomerGroupSearchbox',
  decorators: [
    moduleMetadata({
      providers: [{ provide: DatapageService, useClass: MockingDatapageService }]
    })
  ],
  component: AbcTextCustomerGroupSearchboxComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupSearchboxComponent) => ({
    props: {
      ...args,
      pConn$: {
      resolveConfigProps: props => props,
      getConfigProps: () => {
        return configProps;
      },
      getContextName: () => {
        return 'app/primary_1/workarea_3';
      },
      getStateProps: () => {
        return stateProps;
      },
      getDataObject: () => {
        return;
      },
      getActionsApi: () => {
        return {
          updateFieldValue: () => {
            /* nothing */
          },
          triggerFieldChange: () => {
            /* nothing */
          }
        };
      }
    } as any,
    formGroup$: new FormBuilder().group({})
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupSearchboxComponent>;

export const AbcTextCustomerGroupSearchbox: Story = {
  args: {
    label$: configProps.label,
    helperText: configProps.helperText,
    testId: configProps.testId,
    bReadonly$: configProps.readOnly,
    bDisabled$: configProps.disabled,
    bRequired$: configProps.required,
    displayMode$: configProps.displayMode
  }
};
