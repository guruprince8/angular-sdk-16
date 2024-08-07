import { useEffect, useState } from 'react';
import { DateTimeInput, FieldValueList, DateTimeDisplay, Text, withConfiguration } from "@pega/cosmos-react-core";
import type { PConnFieldProps } from './PConnProps';
import './create-nonce';

// includes in bundle
import DateTimeFormatter from "./date-time";
import {datetimedisplayformatter,formatExists}   from "./date";
import {
  getFullYear,
  getMaxDate,
  getMinDate,
  parseClockFormat,
  correctDateTimeToSeconds,
  datetimeFireChangeBlurEvents
} from "./date-utils";
import { suggestionsHandler } from './suggestions-handler';


import StyledAbcTextCustomerGroupDateTimeWrapper from './styles';
import type { DateTimeFormat, DateTimeVariant } from '@pega/cosmos-react-core/lib/components/DateTime/DateTime.types';
import type { ClockFormat } from '@pega/cosmos-react-core/lib/components/DateTime/Input/utils';


// interface for props
interface AbcTextCustomerGroupDateTimeProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  displayAsStatus?: boolean;
  isTableFormatter?: boolean;
  hasSuggestions?: boolean;
  variant?: any;
  formatter?: string;
  withSeconds: boolean;
  nextYearRange: string;
  previousYearRange: string;
  showWeekNumber: boolean;
  pickerInterval: string;
  clockFormat: number;
}

// interface for StateProps object
interface StateProps {
  value: string;
  hasSuggestions: boolean;
}

interface ConfigProps {
  formatter?: string;
}

interface ActionsProps {
  onFocus: any;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function AbcTextCustomerGroupDateTime (props: AbcTextCustomerGroupDateTimeProps)  {
  const {
    getPConnect,
    value,
    validatemessage,
    label,
    hideLabel = false,
    helperText,
    withSeconds,
    nextYearRange,
    previousYearRange,
    showWeekNumber = false,
    pickerInterval = '30',
    testId,
    additionalProps = {},
    displayMode,
    variant = 'inline',
    hasSuggestions = false
  } = props;
  let { formatter } = props;
  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const actionsProps = pConn.getActionsApi() as unknown as ActionsProps;
  const stateProps = pConn.getStateProps() as StateProps;
  const propName: string = stateProps.value;

  const environmentInfo = PCore.getEnvironmentInfo();
  const timezone = environmentInfo && environmentInfo.getTimeZone();

  let { readOnly = false, required = false, disabled = false } = props;
  [readOnly, required, disabled] = [readOnly, required, disabled].map(
    (prop) => prop === true || (typeof prop === 'string' && prop === 'true')
  );

  const [status, setStatus] = useState(hasSuggestions ? 'pending' : undefined);

  // cast status
  let myStatus: 'success' | 'warning' | 'error' | 'pending';
  // eslint-disable-next-line prefer-const
  myStatus = status as 'success' | 'warning' | 'error' | 'pending';

  useEffect(() => {
    if (validatemessage !== '') {
      setStatus('error');
    }
    if (hasSuggestions) {
      setStatus('pending');
    } else if (!hasSuggestions && myStatus !== 'success') {
      setStatus(validatemessage !== '' ? 'error' : undefined);
    }
  }, [validatemessage, hasSuggestions, myStatus]);

  let { clockFormat = 0 } = props;
  clockFormat = parseClockFormat(clockFormat);

  // calculate min and max range of calendar
  const currentYear = getFullYear("");
  const yearFromValue = getFullYear(value);
  const maxDate = getMaxDate(parseInt(nextYearRange, 10), currentYear, yearFromValue);
  const minDate = getMinDate(parseInt(previousYearRange, 10), currentYear, yearFromValue);

  const onResolveSuggestionHandler = (accepted: boolean) => {
    suggestionsHandler(accepted, pConn, setStatus);
  };

  function handleBlur(onBlurValue: any) {
    const { valueAsISOString: datetimeTZ, state: errorState } = onBlurValue;
    const datetimeGMT = DateTimeFormatter.convertFromTimezone(datetimeTZ, timezone);

    const datetimeGMTCorrectedToSeconds = datetimeGMT
      ? correctDateTimeToSeconds(datetimeGMT, withSeconds)
      : datetimeGMT;

    datetimeFireChangeBlurEvents(errorState, value, datetimeGMTCorrectedToSeconds, actions, propName, pConn);
    const isValueChanged =
      !(value === undefined && datetimeGMTCorrectedToSeconds === '') && value !== datetimeGMTCorrectedToSeconds;
    if (hasSuggestions && isValueChanged) {
      pConn.ignoreSuggestion("");
    }
  }

  function handleChange(onChangeValue: any) {
    const { valueAsISOString: datetimeTZ } = onChangeValue;
    const datetimeGMT = DateTimeFormatter.convertFromTimezone(datetimeTZ, timezone);
    const datetimeGMTCorrectedToSeconds = datetimeGMT
      ? correctDateTimeToSeconds(datetimeGMT, withSeconds)
      : datetimeGMT;
    if (hasSuggestions && value !== datetimeGMTCorrectedToSeconds) {
      setStatus(undefined);
    }
    pConn.clearErrorMessages({
      category: "",
      property: propName,
      context: ""
    });
  }

  if (displayMode === 'LABELS_LEFT' || displayMode === 'STACKED_LARGE_VAL' || displayMode === 'DISPLAY_ONLY') {
    let variantValue = 'datetime' as DateTimeVariant;
    let formatValue = withSeconds ? 'long' : 'short' as DateTimeFormat;

    const configProps = pConn.getConfigProps() as ConfigProps;

    const runtimeformatter = configProps?.formatter;

    if (formatter !== runtimeformatter) {
      formatter = runtimeformatter;
    }
    if (formatExists(formatter)) {
      // @ts-ignore
      const { variantVal, formatVal } = datetimedisplayformatter(formatter);
      variantValue = variantVal as DateTimeVariant;
      formatValue = withSeconds && formatter === 'Time-Only' ? 'long' : formatVal as DateTimeFormat;
    }
    const displayComp = (
      <DateTimeDisplay
        variant={variantValue}
        format={formatValue}
        value={
          formatter === 'DateTime-Since' ? value : DateTimeFormatter.convertToTimezone(value, { timezone }) || undefined
        }
        clockFormat={clockFormat as ClockFormat || undefined}
      />
    );
    switch (displayMode) {
      case 'DISPLAY_ONLY': {
        return ( <StyledAbcTextCustomerGroupDateTimeWrapper> {displayComp} </StyledAbcTextCustomerGroupDateTimeWrapper>);
      }
      case 'LABELS_LEFT': {
        return (
          <StyledAbcTextCustomerGroupDateTimeWrapper>
          <FieldValueList
            variant={hideLabel ? 'stacked' : variant}
            data-testid={testId}
            fields={[{ id: '1', name: hideLabel ? '' : label, value: displayComp }]}
          />
          </StyledAbcTextCustomerGroupDateTimeWrapper>
        );
      }
      case 'STACKED_LARGE_VAL': {
        return (
          <StyledAbcTextCustomerGroupDateTimeWrapper>
          <FieldValueList
            variant='stacked'
            data-testid={testId}
            fields={[
              {
                id: '2',
                name: hideLabel ? '' : label,
                value: (
                  <Text variant='h1' as='span'>
                    {displayComp}
                  </Text>
                )
              }
            ]}
          />
          </StyledAbcTextCustomerGroupDateTimeWrapper>
        );
      }
      // no default
    }
  }


  return (
    <StyledAbcTextCustomerGroupDateTimeWrapper>
    <DateTimeInput
      {...additionalProps}
      label={label}
      labelHidden={hideLabel}
      info={validatemessage || helperText}
      status={status}
      value={DateTimeFormatter.convertToTimezone(value, { timezone }) || undefined}
      withSeconds={withSeconds}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      pickerInterval={pickerInterval}
      clockFormat={clockFormat || undefined}
      showWeekNumber={showWeekNumber}
      min={minDate}
      max={maxDate}
      data-testid={testId}
      onFocus={actionsProps.onFocus}
      onChange={handleChange}
      onBlur={handleBlur}
      onResolveSuggestion={onResolveSuggestionHandler}
    />
    </StyledAbcTextCustomerGroupDateTimeWrapper>
  );
}

export default withConfiguration(AbcTextCustomerGroupDateTime);
