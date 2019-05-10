import { storiesOf } from '@storybook/react';
import ButtonColors from './Button-colors';
import * as readmeColors from './Button-colors.md';
import ButtonDisabled from './Button-disabled';
import * as readmeDisabled from './Button-disabled.md';
import ButtonLoading from './Button-loading';
import * as readmeLoading from './Button-loading.md';
import ButtonSize from './Button-size';
import * as readmeSize from './Button-size.md';

const stories = storiesOf('2. Components/Button', module);

stories.add('Colors', ButtonColors(), {
  readme: { content: readmeColors }
});
stories.add('Disabled', ButtonDisabled(), {
  readme: { content: readmeDisabled }
});
stories.add('Loading', ButtonLoading(), {
  readme: { content: readmeLoading }
});
stories.add('Size', ButtonSize(), {
  readme: { content: readmeSize }
});
