/* eslint-disable no-useless-return */
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
      getPConnect: () => {
        return {
          resolveConfigProps: () => {
            return {
              name: "A",
              type: "Region",
              children: [
                {
                  config: {value: 'John', label: 'First Name'},
                  type: "TextInput"
                },
                {
                  config: {value: 'Doe', label: 'Last Name'},
                  type: "TextInput"
                },
                {
                  config: {value: '+16397975093', label: 'Phone'},
                  type: "Phone"
                },
                {
                  config: {value: '100 Mbps', label: 'Internet Plan'},
                  type: "TextInput"
                },
                {
                  config: {value: 'Texas', label: 'State'},
                  type: "TextInput"
                },
                {
                  config: {value: '', label: 'City'},
                  type: "TextInput"
                }
              ]
            }

          },
          getRawMetadata: () => {
            return {};
          }
        }
      }
    },
    {
      getPConnect: () => {
        return {
          resolveConfigProps: () => {
            return {
              name: "B",
              type: "Region",
              children: [
                {
                  config: {value: '', label: 'Middle Name'},
                  type: "TextInput"
                },
                {
                  config: {value: 'john@doe.com', label: 'Email'},
                  type: "Email"
                },
                {
                  config: {value: '$90.99', label: 'Price'},
                  type: "TextInput"
                },
                {
                  config: {value: false, label: 'Internet Package'},
                  type: "Checkbox"
                },
                {
                  config: {value: '2023-12-29', label: 'Service date'},
                  type: "Date"
                }
              ]
            }

          },
          getRawMetadata: () => {
            return {};
          }
        }
      }
    }
  ],
}
