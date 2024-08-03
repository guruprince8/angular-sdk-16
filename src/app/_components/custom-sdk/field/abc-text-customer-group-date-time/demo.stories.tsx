import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupDateTimeComponent } from './abc-text-customer-group-date-time.component';

window.PCore = {
  ...window.PCore,
  getLocaleUtils: (): any => {
    return {
      getLocaleValue: (val) => {
        return val;
      }
    };
  }
};

const meta: Meta<AbcTextCustomerGroupDateTimeComponent> = {
  title: 'AbcTextCustomerGroupDateTime',
  component: AbcTextCustomerGroupDateTimeComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupDateTimeComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupDateTimeComponent>;

export const AbcTextCustomerGroupDateTime: Story = {
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
