import type { Meta, StoryObj } from '@storybook/angular';

import { configProps, worklistData } from './mock';

import { AbcTextCustomerGroupPageWidgetComponent } from './abc-text-customer-group-page-widget.component';

window.PCore = {
  ...window.PCore,
  getDataApiUtils: () => {
    return {
      getData: () => {
        return Promise.resolve(worklistData);
      }
    } as any;
  }
};

const meta: Meta<AbcTextCustomerGroupPageWidgetComponent> = {
  title: 'AbcTextCustomerGroupPageWidget',
  component: AbcTextCustomerGroupPageWidgetComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupPageWidgetComponent) => ({
    props: {
      ...args,
      pConn$: {
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: value => {
          return value;
        },
        getConfigProps: () => {
          return configProps;
        }
      } as any
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupPageWidgetComponent>;

export const AbcTextCustomerGroupPageWidget: Story = {
  args: {}
};
