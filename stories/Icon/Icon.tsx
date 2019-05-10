import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Icon } from '../../src/components/Icon';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;

const IconBox = styled.div`
  text-align: center;
`;

const icons = [
  {
    name: 'eye',
    color: 'black',
    size: '40px'
  },
  {
    name: 'plus',
    color: 'black',
    size: '40px'
  },
  {
    name: 'settings',
    color: 'black',
    size: '40px'
  },
  {
    name: 'search',
    color: 'black',
    size: '40px'
  },
  {
    name: 'edit',
    color: 'black',
    size: '40px'
  },
  {
    name: 'calendar',
    color: 'black',
    size: '40px'
  },
]

const Wrapper = () => (
  <IconWrapper>
    {icons.map((icon, index) => (
      <IconBox>
        <Icon key={index} {...icon} />
        <div>{icon.name}</div>
      </IconBox>
    ))}
  </IconWrapper>
);

export default () => {
  return WithPropTypes({
    Component: Icon,
    RenderComponent: Wrapper,
    showProp: false
  });
}
