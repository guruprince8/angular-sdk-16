/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';
import { configProps, stateProps } from './mock';
import AbcTextCustomerGroupTimeOfDay from './index';

const meta: Meta<typeof AbcTextCustomerGroupTimeOfDay> = {
  title: 'AbcTextCustomerGroupTimeOfDay',
  component: AbcTextCustomerGroupTimeOfDay,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof AbcTextCustomerGroupTimeOfDay>;

export const BaseAbcTextCustomerGroupTimeOfDay: Story = args => {
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
        clearErrorMessages: () => {/* nothing */}
      };
    }
  };

  return (
    <>
      <AbcTextCustomerGroupTimeOfDay {...props} {...args} />
    </>
  );
};

BaseAbcTextCustomerGroupTimeOfDay.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  withSeconds: configProps.withSeconds,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  displayMode: configProps.displayMode,
  variant: configProps.variant,
  validatemessage: configProps.validatemessage
};
