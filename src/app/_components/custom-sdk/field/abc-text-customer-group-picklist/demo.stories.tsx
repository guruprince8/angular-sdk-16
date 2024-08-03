import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupPicklistComponent } from './abc-text-customer-group-picklist.component';

const meta: Meta<AbcTextCustomerGroupPicklistComponent> = {
  title: 'AbcTextCustomerGroupPicklist',
  component: AbcTextCustomerGroupPicklistComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupPicklistComponent) => ({
    props: {
      ...args,
      pConn$: {
      resolveConfigProps: (props) => props,
      getConfigProps: () => {
        return configProps;
      },
      getStateProps: () => {
        return stateProps;
      },
      getDataObject: () => {
        return {};
      },
      getLocalizedValue: (val) => {
        return val;
      },
      getCaseInfo: () => {
        return {
          getClassName: () => {
            return undefined;
          }
        };
      },
      getLocaleRuleNameFromKeys: () => {
        return undefined;
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
type Story = StoryObj<AbcTextCustomerGroupPicklistComponent>;

export const AbcTextCustomerGroupPicklist: Story = {
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
