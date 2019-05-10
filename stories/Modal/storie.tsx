import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import * as readme from './Modal.md';

const stories = storiesOf('2. Components/Modal', module);

stories.add('Default', Modal(),{
  readme: { content: readme }
});

