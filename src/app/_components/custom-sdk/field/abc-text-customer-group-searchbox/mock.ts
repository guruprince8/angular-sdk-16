export const configProps = {
  datasource: [
    { key: 'Sr', value: 'Sr' },
    { key: 'Jr', value: 'Jr' },
    { key: 'III', value: 'III' },
    { key: 'IV', value: 'IV' },
    { key: 'V', value: 'V' }
  ],
  datasourceMetadata: {
    classID: 'DIXL-MediaCo-Work-NewService',
    displayAs: 'pxAutoComplete',
    label: 'Suffix',
    type: 'Text',
    datasource: {
      records: [
        { key: 'Sr', value: 'Sr' },
        { key: 'Jr', value: 'Jr' },
        { key: 'III', value: 'III' },
        { key: 'IV', value: 'IV' },
        { key: 'V', value: 'V' }
      ],
      tableType: 'PromptList'
    }
  },
  deferDatasource: true,
  hasSuggestions: false,
  helperText: 'Picklist-Autocomplete Helper Text',
  label: 'Picklist-Autocomplete Sample',
  listType: 'associated',
  placeholder: 'Select...',
  testId: '56E6DDD1CB6CEC596B433440DFB21C17',
  value: undefined,
  displayMode: '',
  readOnly: false,
  disabled: false,
  required: true
};

export const stateProps = {
  value: '.Suffix'
};
