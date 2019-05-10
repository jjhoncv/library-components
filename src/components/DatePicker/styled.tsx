import styled from 'styled-components';
import { COLORS, FONTS } from './../../ui';

interface Props {
  width?: string;
  fullWidth?: boolean;
  error?: boolean;
  disabled?: boolean;
}

interface WeekDateProps {
  disabled?: boolean;
  selected?: boolean;
}

export const DatePickerWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: ${(props: Props) => props.fullWidth ? '100%' : props.width};
  font-family: ${FONTS.ROBOTO_REGULAR};

  ${(props: Props) => props.disabled && `
    pointer-events: none;

    ${DatePickerBox} {
      opacity: 0.3;
    }
  `}
`;

export const DatePickerIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  z-index: 1;

  ${(props: Props) => props.error && `
    svg {
      color: black;
    }
  `}
`;

export const DatePickerBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 0;
  color: ${COLORS.BLACK};
  font-size: 14px;
`;

export const DatePickerInput = styled.input`
  background-color: transparent;
  width: 100%;
  height: 40px;
  padding: 12px 30px 12px 12px;
  border: 2px solid ${COLORS.BORDER_GRAY};
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  z-index: 2;
  &::placeholder {
    font-family: ${FONTS.ROBOTO_REGULAR};
  }
  &:focus {
    outline: none;
    border: 2px solid ${COLORS.AQUA_BLUE};
  }

  ${(props: Props) => props.error && `
    border: 2px solid ${COLORS.ERROR_RED};
  `}

  &:focus ~ ${DatePickerIcon} {
    svg {
      color: black;
    }
  }
`;

export const DatePickerCalendarWrapper = styled.div`
  position: absolute;
  margin-top: 40px;
  z-index: 9;
  width: 240px;
  max-height: 300px;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  border: 1px solid ${COLORS.BORDER_GRAY};
  box-shadow: 0px 0px 8px ${COLORS.HOVER_GRAY};
  border-radius: 4px;
  padding: 5px;
`;

export const DatePickerMonth = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;

export const DatePickerPrev = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: ${COLORS.AQUA_BLUE};
    color: ${COLORS.WHITE};
  }
`;

export const DatePickerNext = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: ${COLORS.AQUA_BLUE};
    color: ${COLORS.WHITE};
  }
`;

export const DatePickerTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 5 1 0;
  justify-content: center;
`;

export const DatePickerWeekDays = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const DatePickerWeekDay = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const DatePickerDates = styled.div``;

export const DatePickerWeek = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DatePickerWeekDate = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;

  ${(props: WeekDateProps) => props.disabled && `
    color: ${COLORS.TEXT_GRAY} !important;
    cursor: not-allowed;

    &: hover {
      background: ${COLORS.WHITE} !important;
      color: ${COLORS.TEXT_GRAY} !important;
    }
  `}

  ${(props: WeekDateProps) => props.selected && `
    background-color: ${COLORS.AQUA_BLUE};
    color: ${COLORS.WHITE};
  `}

  &:hover {
    background: ${COLORS.AQUA_BLUE};
    color: ${COLORS.WHITE};
  }
`;


