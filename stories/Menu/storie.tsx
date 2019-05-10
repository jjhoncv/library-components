import { storiesOf } from '@storybook/react';
import Menu from './Menu';
import * as readme from './Menu.md';

const stories = storiesOf('2. Components/Menu', module);

stories.add('Default', Menu(), {
  readme: { content: readme }
})
