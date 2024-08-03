
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import { AppAnnouncement as PegaAppAnnouncement } from '@pega/cosmos-react-work';

import AbcTextCustomerGroupPage from './index';
import { pyHome1Resolved, pyHome1Raw } from './mock';

const meta: Meta<typeof AbcTextCustomerGroupPage> = {
  title: 'AbcTextCustomerGroupPage',
  component: AbcTextCustomerGroupPage,
  excludeStories: /.*Data$/,
};

export default meta;
type Story = StoryObj<typeof AbcTextCustomerGroupPage>;

export const BaseAbcTextCustomerGroupPage: Story = args => {
  if (!window.PCore) {
    window.PCore = {};
  }

  window.PCore.getLocaleUtils = () => {
    return {
      getLocaleValue: val => {
        return val;
      }
    };
  };

  const configProps = pyHome1Resolved.children[0].children[0].config;

  const props = {
    useConfigurableLayout: false,
    icon: pyHome1Raw.config.icon,

    getPConnect: () => {
      return {
        getStateProps: () => {
          return {};
        },
        getActionsApi: () => {
          return {
            getNextWork: () => {
              return new Promise(resolve => {
                resolve({});
              });
            },
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        getChildren: () => {
          return pyHome1Raw.children;
        },
        getComponentName: () => {
          return '';
        },
        getLocalizedValue: value => {
          return value;
        },
        getRawMetadata: () => {
          return pyHome1Raw;
        },
        createComponent: config => {
          if (config.type === 'AppAnnouncement') {
            return (
              <PegaAppAnnouncement
                key='app-announcements'
                heading='Announcements'
                description={configProps.description}
                whatsNewLink={configProps.whatsnewlink}
                image={configProps.image.replace(/ /g, '+')}
                datasource={configProps.datasource}
                label={configProps.label}
                getPConnect={() => {
                  return {
                    getChildren: () => {
                      return pyHome1Resolved.children;
                    }
                  };
                }}
              />
            );
          }
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
  };

  const regionAChildren = pyHome1Raw.children[0].children.map(child => {
    return props.getPConnect().createComponent(child);
  });

  return (
    <>
      <AbcTextCustomerGroupPage {...props} {...args}>{regionAChildren}</AbcTextCustomerGroupPage>
    </>
  );
};

BaseAbcTextCustomerGroupPage.args = {
  title: 'Page Template',
  enableGetNextWork: pyHome1Raw.config.enableGetNextWork,
};
