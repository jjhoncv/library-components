import styled, { css } from 'styled-components';
import { COLORS, FONTS } from './../../ui'

interface Props {
  disabled?: boolean;
  width?: string;
  backgroundColor?: string;
  'data-error'?: boolean;
  fullwidth?: boolean;
}

export const InputWrapper = styled.div`
  display: inline;
  position: relative;
  z-index: 0;
`;

export const InputText = styled.input`
  background-color: ${(props: Props) => props.backgroundColor ? `${props.backgroundColor}` : `${COLORS.WHITE}`};
  width: ${(props: Props) => props.fullwidth ? '100%': props.width};
  height: 40px;
  border: 2px solid ${COLORS.BORDER_GRAY};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px;
  font-size: 14px;
  ${(props: Props) => props.disabled && css`
    pointer-events: none;
    user-select: none;
    opacity: 0.3;
  `};
  ${(props: Props) => props['data-error'] && css`
    border: 2px solid ${COLORS.ERROR_RED};
  `};
  font-family: ${FONTS.ROBOTO_REGULAR};
  &::placeholder{
    font-family: ${FONTS.ROBOTO_REGULAR}
  }
  &:focus{
    outline: none;
    border: 2px solid ${COLORS.AQUA_BLUE};
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  right: 10px;
  z-index: 10;
  top: -3px;
  cursor: pointer;
`;
