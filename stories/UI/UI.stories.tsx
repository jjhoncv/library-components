import { storiesOf } from '@storybook/react';
import UIColors from './UI.colors';
import * as readmeColorsUI from './UI.colors.md';
import UIFonts from './UI.fonts';
import * as readmeFontsUI from './UI.fonts.md';

const stories = storiesOf('1. UI/Theme', module);
stories.add('Colors', UIColors, {
  readme: { content: readmeColorsUI }
});
stories.add('Fonts', UIFonts, {
  readme: { content: readmeFontsUI }
});
