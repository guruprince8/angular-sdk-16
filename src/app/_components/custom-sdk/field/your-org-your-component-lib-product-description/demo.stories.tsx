import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps, rawConfigProps, fieldMetadata } from './mock';

import { YourOrgYourComponentLibProductDescriptionComponent } from './your-org-your-component-lib-product-description.component';

const meta: Meta<YourOrgYourComponentLibProductDescriptionComponent> = {
  title: 'YourOrgYourComponentLibProductDescription',
  component: YourOrgYourComponentLibProductDescriptionComponent,
  excludeStories: /.*Data$/,
  render: (args: YourOrgYourComponentLibProductDescriptionComponent) => ({
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
      getRawConfigProps: () => {
        return rawConfigProps;
      },
      getFieldMetadata: () => {
        return fieldMetadata;
      }
    } as any,
    formGroup$: new FormBuilder().group({})
    }
  })
};

export default meta;
type Story = StoryObj<YourOrgYourComponentLibProductDescriptionComponent>;

export const YourOrgYourComponentLibProductDescription: Story = {
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
