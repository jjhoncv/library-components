import * as React from 'react';
import styled from 'styled-components'
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Box } from '../../src/components/Box';

const InnerWrapper = styled.div`
  border-top: 1px dashed black;
  border-left: 1px dashed black;
  border-right: 1px dashed black;
  color: black;
`;

const Wrapper = () => {
  return(
    <Box style={{ backgroundColor: '#d8d8d8' }}>
      <InnerWrapper>
        Box
      </InnerWrapper>
    </Box>
  )
}
export default () => {
  return WithPropTypes({
    Component: Box,
    RenderComponent: Wrapper,
    showProp: false
  });
}
