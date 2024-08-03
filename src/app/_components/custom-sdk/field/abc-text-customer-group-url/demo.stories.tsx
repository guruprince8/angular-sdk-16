import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupUrlComponent } from './abc-text-customer-group-url.component';

const meta: Meta<AbcTextCustomerGroupUrlComponent> = {
  title: 'AbcTextCustomerGroupUrl',
  component: AbcTextCustomerGroupUrlComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupUrlComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupUrlComponent>;

export const AbcTextCustomerGroupUrl: Story = {
  args: {
    label$: configProps.label,
    helperText: configProps.helperText,
    placeholder: configProps.placeholder,
    bReadonly$: configProps.readOnly,
    bDisabled$: configProps.disabled,
    bRequired$: configProps.required,
    displayMode$: configProps.displayMode
  }
};
