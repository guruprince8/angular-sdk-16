import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupBooleanComponent } from './abc-text-customer-group-boolean.component';

const meta: Meta<AbcTextCustomerGroupBooleanComponent> = {
  title: 'AbcTextCustomerGroupBoolean',
  component: AbcTextCustomerGroupBooleanComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupBooleanComponent) => ({
    props: {
      ...args,
      pConn$: 
      
      {
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
type Story = StoryObj<AbcTextCustomerGroupBooleanComponent>;

export const AbcTextCustomerGroupBoolean: Story = {
  args: {
    label$: configProps.label,
    caption$: configProps.caption,
    helperText: configProps.helperText,
    testId: configProps.testId,
    bReadonly$: configProps.readOnly,
    bDisabled$: configProps.disabled,
    bRequired$: configProps.required,
    displayMode$: configProps.displayMode
  }
};
