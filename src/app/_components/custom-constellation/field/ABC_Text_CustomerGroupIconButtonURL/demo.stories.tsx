
/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import AbcTextCustomerGroupIconButtonUrl from './index';
import { configProps } from './mock';

const meta: Meta<typeof AbcTextCustomerGroupIconButtonUrl> = {
  title: 'AbcTextCustomerGroupIconButtonUrl',
  component: AbcTextCustomerGroupIconButtonUrl,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof AbcTextCustomerGroupIconButtonUrl>;

if (!window.PCore) {
  window.PCore = {};
}

const statelistData = {
  data: [
    {
      pyLabel: 'Massachusetts',
      pyStateCode: 'MA'
    },
    {
      pyLabel: 'Rhode Island',
      pyStateCode: 'RI'
    },
    {
      pyLabel: 'Connecticut',
      pyStateCode: 'CT'
    }
  ]
};

export const BaseAbcTextCustomerGroupIconButtonUrl: Story = args => {

  window.PCore.getDataPageUtils = () => {
    return {
      getData: () => {
        return new Promise(resolve => {
          resolve(statelistData);
        });
      },
      getDataAsync: () => {
        return new Promise(resolve => {
          resolve(statelistData);
        });
      }
    };
  };

  const props = {
    countryCode: configProps.countryCode,
    getPConnect: () => {
      return {
        getValue: value => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: value => {
          return value;
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
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  return (
    <>
      <AbcTextCustomerGroupIconButtonUrl {...props} {...args} />
    </>
  );
};

BaseAbcTextCustomerGroupIconButtonUrl.args = {
  countryCode: configProps.countryCode
};
