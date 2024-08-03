import type { Meta, StoryObj } from '@storybook/angular';

import { pyReviewRaw } from './mock';

import { AbcTextCustomerGroupTwoColumnDetailsComponent } from './abc-text-customer-group-two-column-details.component';

const meta: Meta<AbcTextCustomerGroupTwoColumnDetailsComponent> = {
  title: 'AbcTextCustomerGroupTwoColumnDetails',
  component: AbcTextCustomerGroupTwoColumnDetailsComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupTwoColumnDetailsComponent) => ({
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
      setAction: () => {},
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
      },
      setInheritedProp: () => {
        /* nothing */
      }
    } as any
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupTwoColumnDetailsComponent>;

export const AbcTextCustomerGroupTwoColumnDetails: Story = {
  args: {
    showHighlightedData: false
  }
};
