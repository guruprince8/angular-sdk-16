export const pyReviewRaw = {
  name: "pyReview",
  type: "View",
  config: {
    template: "Details",
    ruleClass: "MyCo-MyCompon-Work-MyComponents",
    showLabel: true,
    label: "@L Details",
    localeReference: "@LR MYCO-MYCOMPON-WORK-MYCOMPONENTS!VIEW!PYREVIEW",
    showHighlightedData: true,
    highlightedData: [
      {
        type: "TextInput",
        config: {
          value: "@P .pyStatusWork",
          label: "@L Work Status",
          displayMode: "STACKED_LARGE_VAL",
          displayAsStatus: true,
        },
      },
      {
        type: "TextInput",
        config: {
          value: "@P .pyID",
          label: "@L Case ID",
          displayMode: "STACKED_LARGE_VAL",
        },
      },
      {
        type: "DateTime",
        config: {
          value: "@P .pxCreateDateTime",
          label: "@L Create date/time",
          displayMode: "STACKED_LARGE_VAL",
        },
      },
      {
        type: "UserReference",
        config: {
          label: "@L Create Operator",
          value: "@USER .pxCreateOperator",
          placeholder: "Select...",
          displayMode: "STACKED_LARGE_VAL",
        },
      },
    ],
    inheritedProps: [
      {
        prop: "label",
        value: "@L Details",
      },
      {
        prop: "showLabel",
        value: true,
      },
    ],
  },
  children: [
    {
      name: "A",
      type: "Region",
      getPConnect: () => {
        return {
          getChildren: () => {
            return [
              {
                getPConnect: () => {
                  return {
                    getComponentName: () => {
                      return 'TextInput'
                    },
                    getConfigProps: () => {
                      return {
                        readOnly: undefined,
                        placeholder: "First Name",
                        value: "John",
                        label: "First Name",
                        hasSuggestions: false,
                        displayMode: "LABELS_LEFT"
                      }
                    }
                  }
                }
              },
              {
                getPConnect: () => {
                  return {
                    getComponentName: () => {
                      return 'TextInput'
                    },
                    getConfigProps: () => {
                      return {
                        readOnly: undefined,
                        placeholder: "Middle Name",
                        value: "",
                        label: "Middle Name",
                        hasSuggestions: false,
                        displayMode: "LABELS_LEFT"
                      }
                    }
                  }
                }
              },
              {
                getPConnect: () => {
                  return {
                    getComponentName: () => {
                      return 'TextInput'
                    },
                    getConfigProps: () => {
                      return {
                        readOnly: undefined,
                        placeholder: "Last Name",
                        value: "Doe",
                        label: "Last Name",
                        hasSuggestions: false,
                        displayMode: "LABELS_LEFT"
                      }
                    }
                  }
                }
              },
              {
                getPConnect: () => {
                  return {
                    getComponentName: () => {
                      return 'Email'
                    },
                    getConfigProps: () => {
                      return {
                        value: "john@doe.com",
                        label: "Email",
                        required: true,
                        testId: "CE8AE9DA5B7CD6C3DF2929543A9AF92D",
                        hasSuggestions: false,
                        displayMode: "LABELS_LEFT",
                      }
                    }
                  }
                }
              },
              {
                getPConnect: () => {
                  return {
                    getComponentName: () => {
                      return 'phone'
                    },
                    getConfigProps: () => {
                      return {
                        readOnly: undefined,
                        value: "+16397975093",
                        label: "Phone",
                        displayMode: "LABELS_LEFT",
                        hasSuggestions: false,
                      }
                    }
                  }
                }
              },
              {
                getPConnect: () => {
                  return {
                    getComponentName: () => {
                      return 'currency'
                    },
                    getConfigProps: () => {
                      return {
                        readOnly: undefined,
                        value: "90.99",
                        label: "Price",
                        displayMode: "LABELS_LEFT",
                        hasSuggestions: false,
                      }
                    }
                  }
                }
              },
              {
                getPConnect: () => {
                  return {
                    getComponentName: () => {
                      return 'radio'
                    },
                    getConfigProps: () => {
                      return {
                        readOnly: undefined,
                        value: "1000 Mbps",
                        label: "Internet Plan",
                        displayMode: "LABELS_LEFT",
                        hasSuggestions: false,
                      }
                    }
                  }
                }
              },
            ];
          },
        };
      },
    },
  ],
}
