import styled from 'styled-components';
import { SelectWrapper } from '../Select/styled';
import { DatePickerWrapper } from '../DatePicker/styled';
import { TimePickerWrapper } from '../TimePicker/styled';
import { TextAreaStyled } from '../TextArea/styled';

import { COLORS, FONTS } from '../../ui';

interface GroupProps {
  keepProps?: boolean;
}

interface Props {
  errorMessage?: string;
  portionWidth?: number;
}

export const FieldStyled = styled.div`
  font-family: ${FONTS.ROBOTO_REGULAR};
  width: ${props => `${props.portionWidth * 100}%`};
  flex: 1 1 100%;


  input {
    width: 100%;
  }
  ${SelectWrapper} {
    width: 100%;
  }
  ${DatePickerWrapper} {
    width: 100%;
  }
  ${TimePickerWrapper} {
    width: 100%;
  }
  ${TextAreaStyled} {
    width: 100%;
  }
  margin-bottom: 14px;

  @media(min-width: 480px) {
    ${(props: Props) => props.portionWidth && `
      flex: 1 1 calc(${props.portionWidth * 100}% - 20px);
    `}
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${(props: GroupProps) => props.keepProps && `
    ${FieldStyled} {
      margin-right: 20px;
      flex: 1 1 calc(50% - 20px);
    }
    ${FieldStyled}:last-child {
      margin-right: 0;
    }
  `}

  @media(min-width: 480px) {
    ${FieldStyled} {
      margin-right: 20px;
    }
    ${FieldStyled}:last-child {
      margin-right: 0;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 2px;
  min-height: 19px;
  color: ${COLORS.BLACK};
  font-size: 12px;

  @media(min-width: 480px) {
    font-size: 14px;
  }
`;

export const BoxMessage = styled.span`
  display: block;
  font-size: 12px;
  line-height: 15px;
  margin-top: 4px;
  ${(props: Props) => props.errorMessage && `
    color: ${COLORS.ERROR_RED};
  `}
  height: 15px;
`;
