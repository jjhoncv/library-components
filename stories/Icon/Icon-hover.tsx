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

const IconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${COLORS.HOVER_BLACK};

  &:hover {
    background: ${COLORS.LIGHT_GRAY};
  }
`;


const icons = [
  {
    name: 'eye',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'plus',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'settings',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'search',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'edit',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'calendar',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  }
]

const Wrapper = () => (
  <IconWrapper>
    {icons.map((icon, index) => (
      <IconBox>
        <Icon key={index} {...icon} />
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
