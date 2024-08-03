import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupPhoneComponent } from './abc-text-customer-group-phone.component';

const meta: Meta<AbcTextCustomerGroupPhoneComponent> = {
  title: 'AbcTextCustomerGroupPhone',
  component: AbcTextCustomerGroupPhoneComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupPhoneComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupPhoneComponent>;

export const AbcTextCustomerGroupPhone: Story = {
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
