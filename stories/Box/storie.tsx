import { storiesOf } from '@storybook/react';
import Box from './Box';
import * as readmeBox from './Box.md';

const stories = storiesOf('2. Components/Box', module);

stories.add('Default', Box(), {
  readme: { content: readmeBox }
});
