import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupTimeOfDayComponent } from './abc-text-customer-group-time-of-day.component';

const meta: Meta<AbcTextCustomerGroupTimeOfDayComponent> = {
  title: 'AbcTextCustomerGroupTimeOfDay',
  component: AbcTextCustomerGroupTimeOfDayComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupTimeOfDayComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupTimeOfDayComponent>;

export const AbcTextCustomerGroupTimeOfDay: Story = {
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
