import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupTextComponent } from './abc-text-customer-group-text.component';

const meta: Meta<AbcTextCustomerGroupTextComponent> = {
  title: 'AbcTextCustomerGroupText',
  component: AbcTextCustomerGroupTextComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupTextComponent) => ({
    props: {
      ...args,
      pConn$: {
      resolveConfigProps: props => props,
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
type Story = StoryObj<AbcTextCustomerGroupTextComponent>;

export const AbcTextCustomerGroupText: Story = {
  args: {
    label$: configProps.label,
    helperText: configProps.helperText,
    testId: configProps.testId,
    placeholder: configProps.placeholder,
    bReadonly$: configProps.readOnly,
    bDisabled$: configProps.disabled,
    bRequired$: configProps.required,
    bHideLabel$: configProps.hideLabel,
  }
};
