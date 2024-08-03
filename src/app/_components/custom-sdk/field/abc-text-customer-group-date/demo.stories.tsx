import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupDateComponent } from './abc-text-customer-group-date.component';
window.PCore = {
  ...window.PCore,
  getLocaleUtils: (): any => {
    return {
      getLocaleValue: (value) => {
        return value;
      }
    };
  }
};

const meta: Meta<AbcTextCustomerGroupDateComponent> = {
  title: 'AbcTextCustomerGroupDate',
  component: AbcTextCustomerGroupDateComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupDateComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupDateComponent>;

export const AbcTextCustomerGroupDate: Story = {
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
