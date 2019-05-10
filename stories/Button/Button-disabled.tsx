import * as React from 'react';
import styled from 'styled-components'
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Button } from '../../src/components/Button/Button';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 200px;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = () => (
  <ButtonWrapper>
    <Button
      onClick={()=> {console.log("Le diste click")}}
      disabled
    >
      Default
    </Button>
    <Button
      primary
      onClick={()=> {console.log("Le diste click")}}
      disabled
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
