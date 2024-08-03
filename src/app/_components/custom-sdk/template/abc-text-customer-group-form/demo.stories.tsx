import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';
import { DatapageService } from '@pega/angular-sdk-components';
import { children } from './mock';

import { AbcTextCustomerGroupFormComponent } from './abc-text-customer-group-form.component';

class MockingDatapageService {
  getDataPageData = () => Promise.resolve({});
}

window.PCore = {
  ...window.PCore,
  getConstants: (): any => {
    return {
      CASE_INFO: {
        INSTRUCTIONS: 'caseInfo.assignments[0].instructions'
      }
    };
  },
  setBehaviorOverride: () => {},
  getStore: () => {
    return {
      subscribe: () => {}
    };
  }
};

const meta: Meta<AbcTextCustomerGroupFormComponent> = {
  title: 'AbcTextCustomerGroupForm',
  decorators: [
    moduleMetadata({
      providers: [{ provide: DatapageService, useClass: MockingDatapageService }]
    })
  ],
  component: AbcTextCustomerGroupFormComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupFormComponent) => ({
    props: {
      ...args,
      pConn$: {
      getChildren: () => {
        return [
          {
            getPConnect: () => {
              return {
                getChildren: () => {
                  return children;
                }
              };
            }
          }
        ];
      },
      getValue: (): any => {
        /* nothing */
      },
      getCurrentView: (): any => {
        /* nothing */
      },
      getCurrentClassID: (): any => {
        /* nothing */
      },
      isEditable: () => true,
      setAction: () => {
        /* nothing */
      },
      getActions: () => {
        return {
          onChange: () => {},
          onBlur: () => {}
        };
      },
      populateAdditionalProps: () => {
        /* nothing */
      },
      getConfigProps: () => {
        return {
          NumCols: '1'
        };
      },
      getInheritedProps: (): any => {
        /* nothing */
      }
    } as any,
    formGroup$: new FormBuilder().group({})
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupFormComponent>;

export const AbcTextCustomerGroupForm: Story = {
  args: {
    label: 'Form',
    showLabel: false
  }
};
