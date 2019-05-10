import { storiesOf } from '@storybook/react';

import Header from './Header';
import * as readmeHeader from './Header.md';

const stories = storiesOf('2. Components/Header', module);

stories.add('Default', Header(), {
  readme: { content: readmeHeader }
});
