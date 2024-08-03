import type { Meta, StoryObj } from '@storybook/angular';
import { children } from './mock';

import { AbcTextCustomerGroupPageComponent } from './abc-text-customer-group-page.component';

const meta: Meta<AbcTextCustomerGroupPageComponent> = {
  title: 'AbcTextCustomerGroupPage',
  component: AbcTextCustomerGroupPageComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupPageComponent) => ({
    props: {
      ...args,
      pConn$: {
      getChildren: () => {
        return [
          {
            getPConnect: () => {
              return {
                getComponentName: () => {
                  return 'Region';
                },
                getChildren: () => {
                  return children;
                }
              };
            }
          }
        ];
      },
      getConfigProps: () => {
        return {
          title: 'Annoucements',
          operator: ''
        };
      },
      resolveConfigProps: () => {
        return {
          title: 'Annoucements',
          operator: ''
        };
      }
    } as any
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupPageComponent>;

export const AbcTextCustomerGroupPage: Story = {
  args: {
    title$: 'Announcements'
  }
};
