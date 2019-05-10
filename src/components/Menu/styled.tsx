import styled from 'styled-components';
import { COLORS, FONTS } from './../../ui';

export const Menu: any = styled.ul`
  display: inline-block;
  background: ${COLORS.WHITE};
  box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  border-radius: 2px;
  font-size: 14px;
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.TEXT_GRAY};
`;

export const ItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px 4px 8px;
  box-sizing: border-box;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
    margin-left: 17px;

    & path {
      color: ${COLORS.TEXT_GRAY};
    }

    & polygon {
      color: ${COLORS.TEXT_GRAY};
    }
  }

  &:hover {
    background: ${COLORS.HOVER_GRAY};
  }

  &:first-child {
    font-family: ${FONTS.ROBOTO_BOLD};
  }
`;
