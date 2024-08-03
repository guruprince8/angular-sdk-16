/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import { configProps, stateProps } from './mock';
import AbcTextCustomerGroupDateTime from './index';

const meta: Meta<typeof AbcTextCustomerGroupDateTime> = {
  title: 'AbcTextCustomerGroupDateTime',
  component: AbcTextCustomerGroupDateTime,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof AbcTextCustomerGroupDateTime>;


if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getEnvironmentInfo = () => {
  return {
    getTimeZone: () => {
      return '';
    },
    getLocale: () => {
      return 'en-GB';
    }
  };
};

export const BaseAbcTextCustomerGroupDateTime: Story = args => {
  const props = {
    value: configProps.value,
    additionalProps: configProps.additionalProps,
    hasSuggestions: configProps.hasSuggestions,
    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        getValidationApi: () => {
          return {
            validate: () => {/* nothing */}
          };
        },
        getStateProps: () => {
          return stateProps;
        },
        getConfigProps: () => {
          return configProps;
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        clearErrorMessages: () => {/* nothing */}
      };
    }
  };

  return (
    <>
      <AbcTextCustomerGroupDateTime {...props} {...args} />
    </>
  );
};

BaseAbcTextCustomerGroupDateTime.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  withSeconds: configProps.withSeconds,
  showWeekNumber: configProps.showWeekNumber,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  nextYearRange: configProps.nextYearRange,
  previousYearRange: configProps.previousYearRange,
  displayMode: configProps.displayMode,
  variant: configProps.variant,
  validatemessage: configProps.validatemessage
};
