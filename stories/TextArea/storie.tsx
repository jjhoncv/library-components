import { storiesOf } from '@storybook/react';

import TextArea from './TextArea';
import * as readmeTextArea from './TextArea.md';
import TextAreaDisabled from './TextArea-disabled';
import * as readmeTextAreaDisabled from './TextArea-disabled.md';
import TextAreaError from './TextArea-error';
import * as readmeTextAreaError from './TextArea-error.md';
import TextAreaText from './TextArea-text';
import * as readmeTextAreaText from './TextArea-text.md';

const stories = storiesOf('2. Components/TextArea', module);

stories.add('Default', TextArea(), {
  readme: { content: readmeTextArea }
});
stories.add('Disabled', TextAreaDisabled(), {
  readme: { content: readmeTextAreaDisabled }
});
stories.add('With Error', TextAreaError(), {
  readme: { content: readmeTextAreaError }
});
stories.add('With Text', TextAreaText(), {
  readme: { content: readmeTextAreaText }
});
