import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupEmailComponent } from './abc-text-customer-group-email.component';

const meta: Meta<AbcTextCustomerGroupEmailComponent> = {
  title: 'AbcTextCustomerGroupEmail',
  component: AbcTextCustomerGroupEmailComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupEmailComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupEmailComponent>;

export const AbcTextCustomerGroupEmail: Story = {
  args: {
    label$: configProps.label,
    helperText: configProps.helperText,
    testId: configProps.testId,
    placeholder: configProps.placeholder,
    bReadonly$: configProps.readOnly,
    bDisabled$: configProps.disabled,
    bRequired$: configProps.required,
    displayMode$: configProps.displayMode
  }
};
