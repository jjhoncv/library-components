import { storiesOf } from '@storybook/react';
import Select from './Select';
import * as readme from './Select.md';
import SelectDisabled from './Select-disabled';
import * as readmeSelectDisabled from './Select-disabled.md';
import SelectPlaceholder from './Select-placeholder';
import * as readmeSelectPlaceholder from './Select-placeholder.md';
import SelectError from './Select-error';
import * as readmeSelectError from './Select-error.md';


const stories = storiesOf('2. Components/Select', module);

stories.add('Default', Select(),{
  readme: { content: readme }
});
stories.add('Disabled', SelectDisabled(),{
  readme: { content: readmeSelectDisabled }
});
stories.add('With Placeholder', SelectPlaceholder(),{
  readme: { content: readmeSelectPlaceholder }
});
stories.add('With Error', SelectError(),{
  readme: { content: readmeSelectError }
});

