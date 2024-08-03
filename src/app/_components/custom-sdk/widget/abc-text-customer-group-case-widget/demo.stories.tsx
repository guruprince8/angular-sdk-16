import type { Meta, StoryObj } from '@storybook/angular';

import { configProps, historyData } from './mock';

import { AbcTextCustomerGroupCaseWidgetComponent } from './abc-text-customer-group-case-widget.component';

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
        return Promise.resolve(historyData);
      }
    } as any;
  }
};

const meta: Meta<AbcTextCustomerGroupCaseWidgetComponent> = {
  title: 'AbcTextCustomerGroupCaseWidget',
  component: AbcTextCustomerGroupCaseWidgetComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupCaseWidgetComponent) => ({
    props: {
      ...args,
      pConn$: {
      getConfigProps: () => {
        return configProps;
      },
      getValue: (value) => {
        return value;
      },
      getContextName: () => {
        return 'app/primary_1';
      },
      getLocalizedValue: (value) => {
        return value;
      }
    } as any
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupCaseWidgetComponent>;

export const AbcTextCustomerGroupCaseWidget: Story = {
  args: {}
};
