import * as React from 'react';

import { createGlobalStyle } from 'styled-components';

import { configure, addDecorator, addParameters } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';

import { styledDefault } from './../src/config/styles';
import { fonts } from './../src/config/fonts';
import { Wrapper } from './Containers/Wrapper';

const GlobalStyle = createGlobalStyle`
  ${styledDefault}
  ${fonts}
`;

addParameters({
  options: {
    brandTitle: 'library',
    brandUrl: '#',
    hierarchyRootSeparator: /\//,
    panelPosition: 'right'
  }
})
addDecorator(addReadme);
configureReadme({
  StoryPreview: ({ children }) => (
    <div style={{ width: "100%" }}>{children}</div>
  )
})
addDecorator(story => <Wrapper>{story()}<GlobalStyle/></Wrapper>)

const req = require.context('../stories/', true, /storie/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
