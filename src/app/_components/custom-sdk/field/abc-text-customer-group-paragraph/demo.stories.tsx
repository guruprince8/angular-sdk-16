import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps, rawConfigProps, fieldMetadata } from './mock';

import { AbcTextCustomerGroupParagraphComponent } from './abc-text-customer-group-paragraph.component';

const meta: Meta<AbcTextCustomerGroupParagraphComponent> = {
  title: 'AbcTextCustomerGroupParagraph',
  component: AbcTextCustomerGroupParagraphComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextCustomerGroupParagraphComponent) => ({
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
type Story = StoryObj<AbcTextCustomerGroupParagraphComponent>;

export const AbcTextCustomerGroupParagraph: Story = {
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
