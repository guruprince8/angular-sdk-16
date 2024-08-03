export const children = [
    {
        getPConnect: () => {
          return {
            getActionsApi: () => {
              return {
                updateFieldValue: () => {/* nothing */},
                triggerFieldChange: () => {/* nothing */}
              };
            },
            getStateProps: () => {
              return { value: '.firstname' };
            },
            isEditable: () => true,
            setAction: () => {},
            getActions: () => {
              return {
                  onChange: () => {},
                  onBlur: () => {}
              }
            },
            getComponentName: () => {
              return "TextInput";
            },
            populateAdditionalProps: () => {},
            resolveConfigProps: () => {
              return {
                readOnly: undefined,
                placeholder: 'First Name',
                value: 'John',
                label: 'First Name',
                hasSuggestions: false
              }
            },
            getConfigProps: () => {
              return {
                readOnly: undefined,
                placeholder: 'First Name',
                value: 'John',
                label: 'First Name',
                hasSuggestions: false
              }
            }
          };
        }
      },
      {
        getPConnect: () => {
          return {
            getActionsApi: () => {
              return {
                updateFieldValue: () => {/* nothing */},
                triggerFieldChange: () => {/* nothing */}
              };
            },
            getStateProps: () => {
              return { value: '.middlename' };
            },
            isEditable: () => true,
            setAction: () => {},
            getActions: () => {
              return {
                  onChange: () => {},
                  onBlur: () => {}
              }
            },
            getComponentName: () => {
              return "TextInput";
            },
            populateAdditionalProps: () => {},
            resolveConfigProps: () => {
              return {
                readOnly: false,
                placeholder: 'Middle Name',
                value: '',
                label: 'Middle Name',
                hasSuggestions: false
              }
            },
            getConfigProps: () => {
              return {
                readOnly: false,
                placeholder: 'Middle Name',
                value: '',
                label: 'Middle Name',
                hasSuggestions: false
              }
            }
          };
        }
      },
      {
        getPConnect: () => {
          return {
            getActionsApi: () => {
              return {
                updateFieldValue: () => {/* nothing */},
                triggerFieldChange: () => {/* nothing */}
              };
            },
            getStateProps: () => {
              return { value: '.lastname' };
            },
            isEditable: () => true,
            setAction: () => {},
            getActions: () => {
              return {
                  onChange: () => {},
                  onBlur: () => {}
              }
            },
            getComponentName: () => {
              return "TextInput";
            },
            populateAdditionalProps: () => {},
            resolveConfigProps: () => {
              return {
                readOnly: false,
                placeholder: 'Last Name',
                value: 'Doe',
                label: 'Last Name',
                hasSuggestions: false
              }
            },
            getConfigProps: () => {
              return {
                readOnly: false,
                placeholder: 'Last Name',
                value: 'Doe',
                label: 'Last Name',
                hasSuggestions: false
              }
            }
          };
        }
      },
      {
        getPConnect: () => {
          return {
            getActionsApi: () => {
              return {
                updateFieldValue: () => {/* nothing */},
                triggerFieldChange: () => {/* nothing */}
              };
            },
            getStateProps: () => {
              return { value: '.email' };
            },
            isEditable: () => true,
            setAction: () => {},
            getActions: () => {
              return {
                  onChange: () => {},
                  onBlur: () => {}
              }
            },
            getComponentName: () => {
              return "Email";
            },
            populateAdditionalProps: () => {},
            resolveConfigProps: () => {
              return {
                readOnly: false,
                placeholder: 'Email',
                value: 'john@doe.com',
                label: 'Email',
                hasSuggestions: false
              }
            },
            getConfigProps: () => {
              return {
                readOnly: false,
                placeholder: 'Email',
                value: 'john@doe.com',
                label: 'Email',
                hasSuggestions: false
              }
            }
          };
        }
      },
      {
        getPConnect: () => {
          return {
            getActionsApi: () => {
              return {
                updateFieldValue: () => {/* nothing */},
                triggerFieldChange: () => {/* nothing */}
              };
            },
            getStateProps: () => {
              return { value: '.phone' };
            },
            isEditable: () => true,
            setAction: () => {},
            getActions: () => {
              return {
                  onChange: () => {},
                  onBlur: () => {}
              }
            },
            getComponentName: () => {
              return "Phone";
            },
            populateAdditionalProps: () => {},
            resolveConfigProps: () => {
              return {
                readOnly: false,
                placeholder: 'Phone',
                value: '2015550123',
                label: '',
                hasSuggestions: false
              }
            },
            getConfigProps: () => {
              return {
                readOnly: false,
                placeholder: 'Phone',
                value: '2015550123',
                label: 'Phone Number',
                hasSuggestions: false
              }
            }
          };
        }
      },
      {
        getPConnect: () => {
          return {
            getActionsApi: () => {
              return {
                updateFieldValue: () => {/* nothing */},
                triggerFieldChange: () => {/* nothing */}
              };
            },
            getStateProps: () => {
              return {
                datasource: ".Suffix",
                hasSuggestions: false,
                placeholder: "Select...",
                value: ".Suffix"
              };
            },
            isEditable: () => true,
            setAction: () => {},
            getActions: () => {
              return {
                  onChange: () => {},
                  onBlur: () => {}
              }
            },
            getComponentName: () => {
              return "AutoComplete";
            },
            populateAdditionalProps: () => {},
            resolveConfigProps: () => {
              return {
                value: '',
                label: 'Suffix',
                placeholder: 'Select...',
                listType: 'associated',
                datasource: [
                  {
                    key: 'Sr',
                    value: 'Sr'
                  },
                  {
                    key: 'Jr',
                    value: 'Jr'
                  },
                  {
                    key: 'III',
                    value: 'III'
                  },
                  {
                    key: 'IV',
                    value: 'IV'
                  },
                  {
                    key: 'V',
                    value: 'V'
                  }
                ],
                testId: '56E6DDD1CB6CEC596B433440DFB21C17',
                hasSuggestions: false,
                deferDatasource: false,
              }
            },
            getConfigProps: () => {
              return {
                value: '',
                label: 'Suffix',
                placeholder: 'Select...',
                listType: 'associated',
                datasource: [
                  {
                    key: 'Sr',
                    value: 'Sr'
                  },
                  {
                    key: 'Jr',
                    value: 'Jr'
                  },
                  {
                    key: 'III',
                    value: 'III'
                  },
                  {
                    key: 'IV',
                    value: 'IV'
                  },
                  {
                    key: 'V',
                    value: 'V'
                  }
                ],
                testId: '56E6DDD1CB6CEC596B433440DFB21C17',
                hasSuggestions: false,
                deferDatasource: false,
              }
            },
            getContextName: () => {
              return 'app/primary_1/workarea_9';
            },
            getDataObject: () => {}
          };
        }
      },
]

