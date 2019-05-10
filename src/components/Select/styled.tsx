import styled from 'styled-components';
import { COLORS, FONTS } from '../../ui';

interface Props {
  disabled?: boolean;
  error?: boolean;
  width?: string;
  fullWidth?: boolean;
}

export const SelectIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  z-index: 1;
`;


export const SelectStyled = styled.select`
  width: 100%;
  height: 40px;
  border: 2px solid ${COLORS.BORDER_GRAY};
  border-radius: 4px;
  background: transparent;
  box-sizing: border-box;
  padding: 0 12px;
  outline: 0;
  appearance: none;
  cursor: pointer;
  z-index: 2;

  ${(props: Props) => props.error && `
    border: 2px solid ${COLORS.ERROR_RED};
  `}

  &:focus {
    border: 2px solid ${COLORS.AQUA_BLUE};
  }

  &:focus ~ ${SelectIcon} {
    svg {
      color: black;
    }
  }
`;


export const SelectWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  width: ${(props: Props) => props.fullWidth ? '100%' : props.width};
  position: relative;
  z-index: 0;
  color: ${COLORS.BLACK};
  font-family: ${FONTS.ROBOTO_REGULAR};
  font-size: 14px;

  ${(props: Props) => props.disabled && `
    pointer-events: none;

    ${SelectStyled} {
      opacity: 0.3;
    }

    ${SelectIcon} {
      opacity: 0.3;
    }
  `}
`;

