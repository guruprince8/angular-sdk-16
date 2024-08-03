import type { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder } from '@angular/forms';

import { configProps, stateProps } from './mock';

import { AbcTextBoldTextInputComponent } from './abc-text-bold-text-input.component';

const meta: Meta<AbcTextBoldTextInputComponent> = {
  title: 'AbcTextBoldTextInput',
  component: AbcTextBoldTextInputComponent,
  excludeStories: /.*Data$/,
  render: (args: AbcTextBoldTextInputComponent) => ({
    props: {
      ...args,
      pConn$: {
      resolveConfigProps: props => props,
      getConfigProps: () => {
        return configProps;
      },
      getStateProps: () => {
        return stateProps;
      }
    } as any,
    formGroup$: new FormBuilder().group({})
    }
  })
};

export default meta;
type Story = StoryObj<AbcTextBoldTextInputComponent>;

export const AbcTextBoldTextInput: Story = {
  args: {
    label$: configProps.label,
    helperText: configProps.helperText,
    testId: configProps.testId,
    placeholder: configProps.placeholder,
    bReadonly$: configProps.readOnly,
    bDisabled$: configProps.disabled,
    bRequired$: configProps.required,
    bHideLabel$: configProps.hideLabel,
  }
};
