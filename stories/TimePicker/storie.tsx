import { storiesOf } from '@storybook/react';

import TimePicker from './TimePicker';
import * as readmeTimePicker from './TimePicker.md';
import TimePickerTime from './TimePicker-time';
import * as readmeTimePickerTime from './TimePicker-time.md';
import TimePickerDisabled from './TimePicker-disabled';
import * as readmeTimePickerDisabled from './TimePicker-disabled.md';
import TimePickerError from './TimePicker-error';
import * as readmeTimePickerError from './TimePicker-error.md';

const stories = storiesOf('2. Components/TimePicker', module);

stories.add('Default', TimePicker(), {
  readme: { content: readmeTimePicker }
});
stories.add('Disabled', TimePickerDisabled(), {
  readme: { content: readmeTimePickerDisabled }
});
stories.add('With Error', TimePickerError(), {
  readme: { content: readmeTimePickerError }
});
stories.add('With Time', TimePickerTime(), {
  readme: { content: readmeTimePickerTime }
});
