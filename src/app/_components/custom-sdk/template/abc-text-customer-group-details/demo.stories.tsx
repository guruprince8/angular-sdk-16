import type { Meta, StoryObj } from '@storybook/angular';

import { pyReviewRaw } from './mock';

import { AbcTextCustomerGroupDetailsComponent } from './abc-text-customer-group-details.component';

const meta: Meta<AbcTextCustomerGroupDetailsComponent> = {
  title: 'AbcTextCustomerGroupDetails',
  component: AbcTextCustomerGroupDetailsComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupDetailsComponent) => ({
    props: {
      ...args,
      pConn$: {
      resolveConfigProps: (props) => props,
      getRawMetadata: () => {
        return pyReviewRaw.config;
      },
      getChildren: () => {
        return pyReviewRaw.children;
      },
      isEditable: () => true,
      setAction: () => {
        /* nothing */
      },
      getActions: () => {
        return {
          onChange: () => {},
          onBlur: () => {}
        };
      },
      populateAdditionalProps: () => {
        /* nothing */
      },
      getConfigProps: () => {
        /* nothing */
      }
    } as any
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupDetailsComponent>;

export const AbcTextCustomerGroupDetails: Story = {
  args: {
    showHighlightedData: false
  }
};
