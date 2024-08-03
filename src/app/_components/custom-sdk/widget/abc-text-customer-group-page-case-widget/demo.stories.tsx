import type { Meta, StoryObj } from '@storybook/angular';

import { configProps, operatorDetails } from './mock';

import { AbcTextCustomerGroupPageCaseWidgetComponent } from './abc-text-customer-group-page-case-widget.component';

window.PCore = {
  ...window.PCore,
  getUserApi: () => {
    return {
      getOperatorDetails: () => {
        return Promise.resolve(operatorDetails);
      }
    };
  },
  getLocaleUtils: () => {
    return {
      getLocaleValue: val => {
        return val;
      }
    } as any;
  }
};

const meta: Meta<AbcTextCustomerGroupPageCaseWidgetComponent> = {
  title: 'AbcTextCustomerGroupPageCaseWidget',
  component: AbcTextCustomerGroupPageCaseWidgetComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupPageCaseWidgetComponent) => ({
    props: {
      ...args,
      pConn$: {
      resolveConfigProps: props => props,
      getConfigProps: () => {
        return configProps;
      }
    } as any
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupPageCaseWidgetComponent>;

export const AbcTextCustomerGroupPageCaseWidget: Story = {
  args: {}
};
