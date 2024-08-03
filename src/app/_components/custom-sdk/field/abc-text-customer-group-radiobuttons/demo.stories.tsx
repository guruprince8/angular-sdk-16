import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';
import { configProps, stateProps } from './mock';

import { AbcTextCustomerGroupRadiobuttonsComponent } from './abc-text-customer-group-radiobuttons.component';

const meta: Meta<AbcTextCustomerGroupRadiobuttonsComponent> = {
  title: 'AbcTextCustomerGroupRadiobuttons',
  component: AbcTextCustomerGroupRadiobuttonsComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupRadiobuttonsComponent) => ({
    props: {
      ...args,
      pConn$: {
      resolveConfigProps: props => props,
      getConfigProps: () => {
        return configProps;
      },
      getContextName: () => {
        return 'app/primary_1/workarea_3';
      },
      getStateProps: () => {
        return stateProps;
      },
      getDataObject: () => {
        return;
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
      },
      getCaseInfo: () => {
        return {
          getClassName: () => {
            return 'DIXL-MediaCo-Work-NewService';
          }
        };
      },
      getLocalizedValue: val => {
        return val;
      },
      getLocaleRuleNameFromKeys: () => {
        return undefined;
      }
    } as any,
    formGroup$: new FormBuilder().group({})
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupRadiobuttonsComponent>;

export const AbcTextCustomerGroupRadiobuttons: Story = {
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
