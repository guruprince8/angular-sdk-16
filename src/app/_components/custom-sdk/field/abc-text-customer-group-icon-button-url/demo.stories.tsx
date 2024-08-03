import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateListData, stateProps } from './mock';

import { AbcTextCustomerGroupIconButtonUrlComponent } from './abc-text-customer-group-icon-button-url.component';

window.PCore = {
  ...window.PCore,
  getConstants: () => {
    return {
      CASE_INFO: {
        CASE_INFO_ID: 'caseInfo.ID'
      }
    } as any;
  },
  getDataApiUtils: () => {
    return {
      getData: () => {
        return Promise.resolve(stateListData);
      }
    } as any;
  }
};

const meta: Meta<AbcTextCustomerGroupIconButtonUrlComponent> = {
  title: 'AbcTextCustomerGroupIconButtonUrl',
  component: AbcTextCustomerGroupIconButtonUrlComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupIconButtonUrlComponent) => ({
    props: {
      ...args,
      pConn$: {
        resolveConfigProps: props => props,
        getConfigProps: () => {
          return configProps;
        },
        getValue: value => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getStateProps: () => {
          return stateProps;
        },
        getLocalizedValue: value => {
          return value;
        }
    } as any,
    formGroup$: new FormBuilder().group({})
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupIconButtonUrlComponent>;

export const AbcTextCustomerGroupIconButtonUrl: Story = {
  args: {
    countryCode: 'USA'
  }
};
