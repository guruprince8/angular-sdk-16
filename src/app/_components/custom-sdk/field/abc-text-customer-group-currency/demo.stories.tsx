import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupCurrencyComponent } from './abc-text-customer-group-currency.component';

window.PCore = {
  ...window.PCore,
  getEnvironmentInfo: (): any => {
    return {
      getUseLocale: () => {
        return 'en-GB';
      },
      getLocale: () => {
        return 'en-GB';
      }
    };
  }
};

const meta: Meta<AbcTextCustomerGroupCurrencyComponent> = {
  title: 'AbcTextCustomerGroupCurrency',
  component: AbcTextCustomerGroupCurrencyComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupCurrencyComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupCurrencyComponent>;

export const AbcTextCustomerGroupCurrency: Story = {
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
