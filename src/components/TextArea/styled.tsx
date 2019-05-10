import styled from 'styled-components';
import { COLORS, FONTS } from './../../ui';

interface Props {
  width?: string;
  fullWidth?: boolean;
  error?: boolean;
  disabled?: boolean;
}

export const TextAreaStyled = styled.textarea`
  width: ${(props: Props) => props.fullWidth ? '100%' : props.width};
  height: 100px;
  font-family: ${FONTS.ROBOTO_REGULAR};
  font-size: 14px;
  resize: none;
  padding: 12px;
  background: ${COLORS.WHITE};
  border: 2px solid ${COLORS.BORDER_GRAY};
  border-radius: 4px;
  outline: 0;

  ${(props: Props) => props.error && `
    border: 2px solid ${COLORS.ERROR_RED};
  `}

  ${(props: Props) => props.disabled && `
    pointer-events: none;
    opacity: 0.3;
  `}

  &:focus{
    border: 2px solid ${COLORS.AQUA_BLUE};
  }

  &::placeholder{
    color: ${COLORS.TEXT_GRAY};
    font-family: ${FONTS.ROBOTO_REGULAR}
  }
`;
