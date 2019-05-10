import styled from 'styled-components';
import { COLORS, FONTS } from './../../ui';

export const HeaderWrapper = styled.div`
  width: 100%;
`;
export const HeaderTitle = styled.span`
  display: block;
  font-family: ${FONTS.MULI_BOLD};
  font-size: 24px;
  line-height: 30px;
  padding-bottom: 7px;
  border-bottom: 1px black dashed;
  color: ${COLORS.TEXT_GRAY};
`;
export const HeaderSubTitle = styled.span`
  display: block;
  font-family: ${FONTS.MULI_REGULAR};
  font-size: 18px;
  line-height: 23px;
  color: ${COLORS.BLACK};
  padding-top: 9px;
`;

export const HeaderTitleImage = styled(HeaderTitle)`
  display: flex;
  ${({ pos }) => (pos === "start") && `
    justify-content: flex-end;
    flex-direction: row-reverse;
    align-items: flex-end;
  `}

  ${({ pos }) => (pos === "end") && `
    align-items: flex-end;
    justify-content: space-between;
  `}
`;
