import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';
import { DatapageService } from '@pega/angular-sdk-components';
import { children } from './mock';

import { AbcTextCustomerGroupTwoColumnFormComponent } from './abc-text-customer-group-two-column-form.component';

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

const meta: Meta<AbcTextCustomerGroupTwoColumnFormComponent> = {
  title: 'AbcTextCustomerGroupTwoColumnForm',
  decorators: [
    moduleMetadata({
      providers: [{ provide: DatapageService, useClass: MockingDatapageService }]
    })
  ],
  component: AbcTextCustomerGroupTwoColumnFormComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupTwoColumnFormComponent) => ({
    props: {
      ...args,
      pConn$: {
      getChildren: () => {
        return children;
      },
      resolveConfigProps: () => {},
      getValue: () => {
        /* nothing */
      },
      getCurrentView: () => {
        /* nothing */
      },
      getCurrentClassID: () => {
        /* nothing */
      },
      isEditable: () => true,
      setAction: () => {},
      getActions: () => {
        return {
          onChange: () => {},
          onBlur: () => {}
        };
      },
      populateAdditionalProps: () => {},
      getConfigProps: () => {
        return {
          NumCols: '1'
        };
      },
      getInheritedProps: () => {
        /* nothing */
      }
    } as any,
    formGroup$: new FormBuilder().group({})
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextCustomerGroupTwoColumnFormComponent>;

export const AbcTextCustomerGroupTwoColumnForm: Story = {
  args: {

  }
};
