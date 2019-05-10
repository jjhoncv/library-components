import { storiesOf } from '@storybook/react';
import Icon from './Icon';
import * as readmeIcon from './Icon.md';
import IconColors from './Icon-colors';
import * as readmeIconColors from './Icon-colors.md';
import IconSize from './Icon-size';
import * as readmeIconSize from './Icon-size.md';
import IconHover from './Icon-hover';
import * as readmeIconHover from './Icon-hover.md';

const stories = storiesOf('2. Components/Icon', module);

stories.add('Default', Icon(), {
  readme: { content: readmeIcon}
})
stories.add('Colors', IconColors(), {
  readme: { content: readmeIconColors}
})
stories.add('Size', IconSize(), {
  readme: { content: readmeIconSize}
})
stories.add('Hover', IconHover(), {
  readme: { content: readmeIconHover}
})


