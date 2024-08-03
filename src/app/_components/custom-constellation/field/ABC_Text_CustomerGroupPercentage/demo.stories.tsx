
/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import { configProps, stateProps, fieldMetadata } from './mock';

import AbcTextCustomerGroupPercentage from './index';

const meta: Meta<typeof AbcTextCustomerGroupPercentage> = {
  title: 'AbcTextCustomerGroupPercentage',
  component: AbcTextCustomerGroupPercentage,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof AbcTextCustomerGroupPercentage>;

export const BaseAbcTextCustomerGroupPercentage: Story = args => {

  const props = {
    value: configProps.value,
    hasSuggestions: configProps.hasSuggestions,
    fieldMetadata,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
  };

  return (
    <>
      <AbcTextCustomerGroupPercentage {...props} {...args} />
    </>
  );
};

BaseAbcTextCustomerGroupPercentage.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  placeholder: configProps.placeholder,
  showGroupSeparators: configProps.showGroupSeparators,
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
