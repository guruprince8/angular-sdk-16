import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const types = ['fromNow', 'customFormat'];



// value should be in ISO 8601 format.
function DateFormatter(
  value: any,
  { type = types[1], format = "DD/MM/YYYY", tzone = null } = {}
) {
  if (!value) return value;
  switch (type) {
    case types[1]:
      if (tzone) return dayjs(value).tz(tzone).format(format);
      return dayjs(value).format(format);
    case types[0]:
      return dayjs(value).from(dayjs());
    default:
      return value;
  }
}

// value should be in hh:mm:ss format (00:00:00 - 23:59:59).
function TimeFormatter(value: any, options: any) {
  if (!value) return value;
  const { locale = "en-US" } = options;
  const timeOnlyRegex = /^(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/;
  if (value.length === 8 && timeOnlyRegex.test(value)) {
    const tempDate = new Date();
    const hours = parseInt(value.substr(0, 2), 10);
    const minutes = parseInt(value.substr(3, 2), 10);
    const seconds = parseInt(value.substr(6, 2), 10);
    tempDate.setHours(hours);
    tempDate.setMinutes(minutes);
    tempDate.setSeconds(seconds);
    return tempDate.toLocaleTimeString(locale);
  }
  return DateFormatter(value, options);
}

export default {
  Date: (value: any, options: any) => DateFormatter(value, { type: 'customFormat', ...options }),
  'Date-Time-Default': (value: any, options: any) =>
    DateFormatter(value, { ...options, type: 'customFormat', format: 'lll' }),
  'Time-Default': (value: any, options: any) =>
    TimeFormatter(value, {
      ...options,
      type: 'customFormat',
      format: 'hh:mm A'
    })
};
