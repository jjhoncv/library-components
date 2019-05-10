import styled from 'styled-components';
import { COLORS, FONTS } from '../../ui';

interface Props {
  width?: string;
  fixed?: boolean;
  show?: boolean;
}

export const SidebarHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 50px;
  z-index: 2;
  background-color: ${COLORS.YELLOW};
  padding: 13px 15px;
  box-sizing: border-box;

  @media(min-width: 480px) {
    display: none;
  }
`;

export const SidebarTitle = styled.div`
  font-size: 18px;
`;

export const SidebarToggle = styled.div`
  position: absolute;
  left: 15px;
  cursor: pointer;
`;

export const SidebarOverlay = styled.div`
  display: none;

  ${(props: Props) => props.show && `
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    cursor: pointer;
    z-index: 99;
  `}

  @media (min-width: 480px) {
    display: none;
  }
`;

export const SidebarWrapper = styled.div`
  width: 80px;
  min-width: 80px;
  transform: translateX(-80px);
  transition: .2s linear;
  position: fixed;
  z-index: 100;

  ${(props: Props) => props.width && `
    width: ${props.width};
    min-width: ${props.width};
  `}

  ${(props: Props) => props.show && `
    transform: none;
    z-index: 100;
  `}

  @media (min-width: 480px) {
    transform: none;
    position: relative;
    z-index: 100;
  }
`;

export const SidebarStyled = styled.nav`
  display: block;
  text-align: center;
  width: ${(props: Props) => props.width ? props.width : "80px"};
  background: ${COLORS.YELLOW};
  padding: 20px 12px;
  box-sizing: border-box;

  ${(props: Props) => props.fixed && `
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    min-height: 100vh;
  `}
`;

export const SidebarIsotipo = styled.div`
  margin-bottom: 41px;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 136px);
  flex-direction: column;
`;

export const SidebarTooltip = styled.span`
  display: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  font-size: 14px;
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.WHITE};
  line-height: 14px;
  padding: 4px 15px;
  left: 68px;
`;

export const SidebarItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 9px 8px;
  position: relative;
  ul {
    position: absolute;
    left: 60px;
    min-width: max-content;
  }

  &:last-child {
    position: fixed;
    bottom: 20px;
    margin-top: auto;

    ul {
      align-self: flex-end;
    }
  }

  @media(min-width: 480px) {
    &:last-child {
      position: relative;
      bottom: 0;
    }
  }
`;

export const SidebarItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: .6s;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.1);

    ${SidebarTooltip} {
      display: block;
    }
  }
`;

export const SidebarIcon = styled.div`
  display: flex;
  flex-wrap: wrap;

  svg {
    width: 24px;
    height: 24px;

    & line {
      color: black;
    }

    & circle {
      color: black;
    }

    & path {
      color: black;
    }
  }
`;
