import { storiesOf } from '@storybook/react';

import HeaderImage from './HeaderImage';
import * as readmeHeaderImage from './HeaderImage.md';

const stories = storiesOf('2. Components/HeaderImage', module);

stories.add('Default', HeaderImage(), {
  readme: { content: readmeHeaderImage }
});
