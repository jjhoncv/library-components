import * as React from 'react';
import styled from 'styled-components'
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Button } from '../../src/components/Button/Button';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  align-items: center;
`;

const Wrapper = () => (
  <ButtonWrapper>
    <Button
      onClick={()=> {console.log("Le diste click")}}
    >
      Default
    </Button>
    <Button
      onClick={()=> {console.log("Le diste click")}}
      fullWidth
    >
      Default
    </Button>
    <Button
      primary
      onClick={()=> {console.log("Le diste click")}}
    >
      Primary
    </Button>
    <Button
      primary
      onClick={()=> {console.log("Le diste click")}}
      fullWidth
    >
      Primary
    </Button>
  </ButtonWrapper>
);

export default () => {
  return WithPropTypes({
    Component: Button,
    RenderComponent: Wrapper,
    showProp: false
  });
}
