import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupTextInputComponent } from './abc-text-customer-group-text-input.component';

const meta: Meta<AbcTextCustomerGroupTextInputComponent> = {
  title: 'AbcTextCustomerGroupTextInput',
  component: AbcTextCustomerGroupTextInputComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupTextInputComponent) => ({
    props: {
      ...args,
      pConn$: {
      resolveConfigProps: (props) => props,
      getConfigProps: () => {
        return configProps;
      },
      getStateProps: () => {
        return stateProps;
      }
    } as any,
    formGroup$: new FormBuilder().group({})
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupTextInputComponent>;

export const AbcTextCustomerGroupTextInput: Story = {
  args: {
    label$: configProps.label,
    helperText: configProps.helperText,
    placeholder: configProps.placeholder,
    testId: configProps.testId,
    bReadonly$: configProps.readOnly,
    bDisabled$: configProps.disabled,
    bRequired$: configProps.required,
    displayMode$: configProps.displayMode
  }
};
