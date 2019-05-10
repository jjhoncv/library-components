import { storiesOf } from '@storybook/react';
import DatePicker from './DatePicker';
import * as readmeDatePicker from './DatePicker.md';
import DatePickerDisabled from './DatePicker-disabled';
import * as readmeDatePickerDisabled from './DatePicker-disabled.md';
import DatePickerError from './DatePicker-error';
import * as readmeDatePickerError from './DatePicker-error.md';
import DatePickerDate from './DatePicker-date';
import * as readmeDatePickerDate from './DatePicker-date.md';

const stories = storiesOf('2. Components/DatePicker', module);

stories.add('Default', DatePicker(), {
  readme: { content: readmeDatePicker }
});
stories.add('Disabled', DatePickerDisabled(), {
  readme: { content: readmeDatePickerDisabled }
});
stories.add('With Error', DatePickerError(), {
  readme: { content: readmeDatePickerError }
});
stories.add('With Date', DatePickerDate(), {
  readme: { content: readmeDatePickerDate }
});
