import { FULL_DATE_FORMAT_OPTIONS } from './consts';

function toDate(date: Date | string | number): Date {
  const parsed = date instanceof Date ? date : new Date(date);
  if (isNaN(parsed.getTime())) {
    throw new Error(`Invalid date provided: ${date}`);
  }
  return parsed;
}

export function fullDateFormatter(date: Date | string | number): string {
  return toDate(date).toLocaleString('en-US', FULL_DATE_FORMAT_OPTIONS);
}
