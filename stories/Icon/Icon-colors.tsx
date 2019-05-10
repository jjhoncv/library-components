import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Icon } from '../../src/components/Icon';
import { COLORS } from '../../src/ui/colors';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;

const icons = [
  {
    name: 'settings',
    color: COLORS.AQUA_BLUE
  },
  {
    name: 'settings',
    color: COLORS.YELLOW
  },
  {
    name: 'settings',
    color: COLORS.TEXT_GRAY
  },
  {
    name: 'settings',
    color: COLORS.ERROR_RED
  },
  {
    name: 'settings',
    color: COLORS.BLACK
  },
  {
    name: 'settings',
    color: COLORS.LIGHT_GRAY
  }
]

const Wrapper = () => (
  <IconWrapper>
    {icons.map((icon, index) => (
      <Icon key={index} {...icon} />
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
