import styled, { keyframes } from 'styled-components';
import { COLORS, FONTS } from './../../ui'

interface Props {
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
}

const animationLoading = keyframes`
  to {transform: rotate(360deg);}
`;

export const ButtonLoading = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${COLORS.BLACK};
  border-top: 2px solid ${COLORS.LIGHT_GRAY};
  animation: ${animationLoading} .6s linear infinite;

  ${(props: Props) => props.primary && `
    border: 2px solid ${COLORS.WHITE};
    border-top: 2px solid ${COLORS.BLACK};
  `};
`;

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: Props) => props.fullWidth ? '100%' : 'auto'};
  background-color: ${COLORS.LIGHT_GRAY};
  height: 44px;
  padding: 12px 25px;
  border: none;
  border: 1px solid ${COLORS.OPAQUE_GRAY};
  border-radius: 4px;
  color: ${COLORS.BLACK};
  font-size: 14px;
  font-family: ${FONTS.ROBOTO_REGULAR};
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.HOVER_GRAY};
  }

  ${(props: Props) => props.disabled && `
    pointer-events: none;
    user-select: none;
    opacity: 0.3;
  `};

  ${(props: Props) => props.loading && `
    pointer-events: none;
    user-select: none;
  `};

  ${(props: Props) => props.primary && `
    background:${COLORS.BLACK};
    color: ${COLORS.WHITE};

    &:hover {
      background-color: ${COLORS.HOVER_BLACK};
    }
  `};
`;
