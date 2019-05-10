import { storiesOf } from '@storybook/react';
import InputDefault from './Input-default';
import * as readmeDefault from './Input-default.md';
import InputDisabled from './Input-disabled';
import * as readmeDisabled from './Input-disabled.md';
import InputNumber from './Input-number';
import * as readmeNumber from './Input-number.md';
import InputPassword from './Input-password';
import * as readmePassword from './Input-password.md';
import InputIcon from './Input-icon';
import * as readmeIcon from './Input-icon.md';
import InputError from './Input-error';
import * as readmeError from './Input-error.md';

const stories = storiesOf('2. Components/Input', module);

stories.add('Default', InputDefault(), {
  readme: { content: readmeDefault }
});
stories.add('Disabled', InputDisabled(), {
  readme: { content: readmeDisabled }
});
stories.add('Number', InputNumber(), {
  readme: { content: readmeNumber }
});
stories.add('Password', InputPassword(), {
  readme: { content: readmePassword }
});
stories.add('With Icon', InputIcon(), {
  readme: { content: readmeIcon }
});
stories.add('With Error', InputError(), {
  readme: { content: readmeError }
});
