import styled from 'styled-components';
import { COLORS, FONTS } from './../../ui';

interface Props {
  width?: string;
  fullWidth?: boolean;
  error?: boolean;
  disabled?: boolean;
}

export const TimePickerStyled = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
`;

export const TimePickerInput = styled.input`
  width: 100%;
  background-color: ${COLORS.WHITE};
  border: none;
  border: 2px solid ${COLORS.BORDER_GRAY};
  border-radius: 4px;
  height: 40px;
  padding: 12px;
  cursor: pointer;
  outline: 0;
  padding: 12px 28px 12px 12px;

  ${(props: Props) => props.error && `
    border: 2px solid ${COLORS.ERROR_RED};
  `}

  &::placeholder{
    color: ${COLORS.TEXT_GRAY};
    font-family: ${FONTS.ROBOTO_REGULAR}
  }

  &:focus {
    border: 2px solid ${COLORS.AQUA_BLUE};
  }
`;

export const TimePickerIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  z-index: 1;
`;

export const TimePickerList = styled.ul`
  position: absolute;
  background-color: ${COLORS.WHITE};
  border: 1px solid black;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  border: 1px solid ${COLORS.BORDER_GRAY};
  box-shadow: 0px 0px 8px ${COLORS.HOVER_GRAY};
  overflow-y: auto;
  z-index: 9;
`;
export const TimePickerItem = styled.li`
  padding: 0 12px;
  cursor: pointer;

  &:hover {
    background: ${COLORS.AQUA_BLUE};
    color: ${COLORS.WHITE};
  }
`;

export const TimePickerWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: ${(props: Props) => props.fullWidth ? '100%' : props.width};
  position: relative;
  font-family: ${FONTS.ROBOTO_REGULAR};
  font-size: 14px;

  ${(props: Props) => props.disabled && `
    pointer-events: none;

    ${TimePickerStyled} {
      opacity: 0.3;
    }
  `}

  ${TimePickerList} {
    margin-top: 40px;
  }
`;
