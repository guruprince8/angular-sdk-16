// Statically load all "local" components that aren't yet in the npm package

import { AbcTextBoldTextInputComponent } from './src/app/_components/custom-sdk/field/abc-text-bold-text-input/abc-text-bold-text-input.component';
/* import end - DO NOT REMOVE */

// localSdkComponentMap is the JSON object where we'll store the components that are
// found locally. If not found here, we'll look in the Pega-provided component map

const localSdkComponentMap = {
  ABC_Text_BoldTextInput: AbcTextBoldTextInputComponent
  /* map end - DO NOT REMOVE */
};

export default localSdkComponentMap;
