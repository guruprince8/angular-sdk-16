import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupDecimalComponent } from './abc-text-customer-group-decimal.component';

const meta: Meta<AbcTextCustomerGroupDecimalComponent> = {
  title: 'AbcTextCustomerGroupDecimal',
  component: AbcTextCustomerGroupDecimalComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupDecimalComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupDecimalComponent>;

export const AbcTextCustomerGroupDecimal: Story = {
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
