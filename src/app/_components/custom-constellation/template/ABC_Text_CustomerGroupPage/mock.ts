
// @ts-nocheck
export const pyHome1Raw = {
  name: 'pyHome1',
  type: 'View',
  config: {
    type: 'landingpage',
    template: 'OneColumnPage',
    icon: 'home-solid',
    title: '@ENV APPLICATION_DESC',
    ruleClass: 'DIXL-MediaCo-UIPages',
    localeReference: '@LR DIXL-MEDIACO-UIPAGES!PAGE!PYHOME1',
    enableGetNextWork: true,
    context: 'pyPortal'
  },
  children: [
    {
      name: 'A',
      type: 'Region',
      children: [
        {
          type: 'AppAnnouncement',
          config: {
            label: '@L App announcement',
            description:
              "We've launched a brand new experience to accelerate your workflow. Check out the guides to help you get the most of Cosmos.",
            whatsnewlink: 'https://design.pega.com',
            image:
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOSAxMSI+PHRpdGxlPlBlZ2EgdGV4dC1vbmx5IGxvZ288L3RpdGxlPjxwYXRoIHN0eWxlPSJmaWxsLW9wYWNpdHk6IC4yNTsiIGZpbGw9IiNmZmYiIGQ9Ik03LjcyIDMuODJjMCAyLjI1LTEuNzggMy40MS00IDMuNDFoLTEuNnYzSDBWLjQyaDMuOTRjMi4zNiAwIDMuNzggMS4zOSAzLjc4IDMuNHptLTQtMS40N2gtMS42djNoMS43QTEuNDcgMS40NyAwIDAgMCA1LjUgMy44MmMwLS45MS0uNjUtMS40Ny0xLjc1LTEuNDd6bTcuNjggNS45MWg1LjN2Mkg5LjI5Vi40Mmg3LjM4djEuOTNoLTUuMjR2Mmg0LjI0djEuOWgtNC4yNHpNMjMuMTggMGE1IDUgMCAwIDEgMy41NyAxLjI4TDI1LjYzIDIuOGEzLjc4IDMuNzggMCAwIDAtMS4wNS0uNjNBNC4zMiA0LjMyIDAgMCAwIDIzLjMxIDIgMy4xNyAzLjE3IDAgMCAwIDIwIDUuMjdhMy4xNiAzLjE2IDAgMCAwIDEgMi4zOSAzLjA3IDMuMDcgMCAwIDAgMi4xNy44NCA0LjYgNC42IDAgMCAwIDIuMDktLjVWNi4xOWgtMi4yVjQuMzhoNC4yNXY0LjU2YTUuNDEgNS40MSAwIDAgMS00LjA4IDEuNTdBNS4zNSA1LjM1IDAgMCAxIDE5LjQzIDlhNS4wNSA1LjA1IDAgMCAxLTEuNTYtMy43NCA1LjIxIDUuMjEgMCAwIDEgMS41Ni0zLjc2QTUuMzEgNS4zMSAwIDAgMSAyMy4xOCAwem0xMS4yOS40Mmw0LjEzIDkuNzloLTIuMjVMMzUuNDggOGgtNC4wNmwtLjkgMi4xOGgtMi4yTDMyLjUxLjQyem0uMjUgNS43MkwzMy40NCAzbC0xLjI5IDMuMTR6bTMtNWEuNzEuNzEgMCAwIDEtLjc0Ljc1LjcxLjcxIDAgMCAxLS43My0uNzUuNzMuNzMgMCAwIDEgLjc1LS43Mi43Mi43MiAwIDAgMSAuNzUuNzF6TTM3IC41M2EuNTkuNTkgMCAwIDAtLjYuNi42MS42MSAwIDEgMCAxLjIxIDAgLjYuNiAwIDAgMC0uNjEtLjZ6bS0uMjQgMVYuNzFIMzdjLjEyIDAgLjE4LjA2LjI1LjA2YS4yMS4yMSAwIDAgMSAuMDcuMTguMTkuMTkgMCAwIDEtLjA3LjE4cy0uMDcuMDgtLjEzLjA4bC4yNi4zNmgtLjJMMzcgMS4yOGgtLjF2LjI5em0uMTMtLjQ0aC4yM2EuMjYuMjYgMCAwIDAgLjA3LS4wOWgtLjA2Yy0uMDUtLjE3LS4wNS0uMTctLjEzLS4xN2gtLjF6Ii8+PC9zdmc+',
            datasource: {
              source: '@DATASOURCE D_pyAnnouncements.pxResults',
              fields: {
                name: '@P .pyLabel'
              }
            }
          }
        }
      ]
    }
  ],
  classID: 'DIXL-MediaCo-UIPages'
};

export const pyHome1Resolved = {
  name: 'pyHome1',
  type: 'View',
  config: {
    type: 'landingpage',
    template: 'OneColumnPage',
    icon: 'home-solid',
    title: '@ENV APPLICATION_DESC',
    ruleClass: 'DIXL-MediaCo-UIPages',
    localeReference: '@LR DIXL-MEDIACO-UIPAGES!PAGE!PYHOME1',
    enableGetNextWork: true,
    context: 'pyPortal'
  },
  children: [
    {
      name: 'A',
      type: 'Region',
      getPConnect: () => {
        return {
          getComponentName: () => {
            return '';
          },
          getComponent: () => {
            return pyHome1Resolved.children[0];
          },
          getConfigProps: () => {
            return {};
          }
        };
      },
      children: [
        {
          type: 'AppAnnouncement',
          config: {
            label: '@L App announcement',
            description:
              "We've launched a brand new experience to accelerate your workflow. Check out the guides to help you get the most of Cosmos.",
            whatsnewlink: 'https://design.pega.com',
            image:
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOSAxMSI+PHRpdGxlPlBlZ2EgdGV4dC1vbmx5IGxvZ288L3RpdGxlPjxwYXRoIHN0eWxlPSJmaWxsLW9wYWNpdHk6IC4yNTsiIGZpbGw9IiNmZmYiIGQ9Ik03LjcyIDMuODJjMCAyLjI1LTEuNzggMy40MS00IDMuNDFoLTEuNnYzSDBWLjQyaDMuOTRjMi4zNiAwIDMuNzggMS4zOSAzLjc4IDMuNHptLTQtMS40N2gtMS42djNoMS43QTEuNDcgMS40NyAwIDAgMCA1LjUgMy44MmMwLS45MS0uNjUtMS40Ny0xLjc1LTEuNDd6bTcuNjggNS45MWg1LjN2Mkg5LjI5Vi40Mmg3LjM4djEuOTNoLTUuMjR2Mmg0LjI0djEuOWgtNC4yNHpNMjMuMTggMGE1IDUgMCAwIDEgMy41NyAxLjI4TDI1LjYzIDIuOGEzLjc4IDMuNzggMCAwIDAtMS4wNS0uNjNBNC4zMiA0LjMyIDAgMCAwIDIzLjMxIDIgMy4xNyAzLjE3IDAgMCAwIDIwIDUuMjdhMy4xNiAzLjE2IDAgMCAwIDEgMi4zOSAzLjA3IDMuMDcgMCAwIDAgMi4xNy44NCA0LjYgNC42IDAgMCAwIDIuMDktLjVWNi4xOWgtMi4yVjQuMzhoNC4yNXY0LjU2YTUuNDEgNS40MSAwIDAgMS00LjA4IDEuNTdBNS4zNSA1LjM1IDAgMCAxIDE5LjQzIDlhNS4wNSA1LjA1IDAgMCAxLTEuNTYtMy43NCA1LjIxIDUuMjEgMCAwIDEgMS41Ni0zLjc2QTUuMzEgNS4zMSAwIDAgMSAyMy4xOCAwem0xMS4yOS40Mmw0LjEzIDkuNzloLTIuMjVMMzUuNDggOGgtNC4wNmwtLjkgMi4xOGgtMi4yTDMyLjUxLjQyem0uMjUgNS43MkwzMy40NCAzbC0xLjI5IDMuMTR6bTMtNWEuNzEuNzEgMCAwIDEtLjc0Ljc1LjcxLjcxIDAgMCAxLS43My0uNzUuNzMuNzMgMCAwIDEgLjc1LS43Mi43Mi43MiAwIDAgMSAuNzUuNzF6TTM3IC41M2EuNTkuNTkgMCAwIDAtLjYuNi42MS42MSAwIDEgMCAxLjIxIDAgLjYuNiAwIDAgMC0uNjEtLjZ6bS0uMjQgMVYuNzFIMzdjLjEyIDAgLjE4LjA2LjI1LjA2YS4yMS4yMSAwIDAgMSAuMDcuMTguMTkuMTkgMCAwIDEtLjA3LjE4cy0uMDcuMDgtLjEzLjA4bC4yNi4zNmgtLjJMMzcgMS4yOGgtLjF2LjI5em0uMTMtLjQ0aC4yM2EuMjYuMjYgMCAwIDAgLjA3LS4wOWgtLjA2Yy0uMDUtLjE3LS4wNS0uMTctLjEzLS4xN2gtLjF6Ii8+PC9zdmc+',
            datasource: {
              source: '@DATASOURCE D_pyAnnouncements.pxResults',
              fields: {
                name: '@P .pyLabel'
              }
            }
          }
        }
      ]
    }
  ],
  classID: 'DIXL-MediaCo-UIPages'
};
