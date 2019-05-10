import { storiesOf } from '@storybook/react';
import Sidebar from './Sidebar';
import * as readme from './Sidebar.md';

const stories = storiesOf('2. Components/Sidebar', module);

stories.add('Default', Sidebar(), {
  readme: { content: readme }
})
