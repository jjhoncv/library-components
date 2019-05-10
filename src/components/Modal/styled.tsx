import styled from 'styled-components';

import { COLORS, FONTS } from './../../ui';

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  opacity: 1;
  z-index: 100;
  padding: 15px;
  position: fixed;
  animation: show 0.5s ease;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.7);
`;
export const ModalStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${COLORS.WHITE};
  padding: 10px;
  color: black;
  position: relative;
  padding: 30px;
`;

export const ModalIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  align-self: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50%;
  transition: .3s linear;

  &:hover {
    background-color: ${COLORS.BORDER_GRAY};
  }

  svg {
    color: ${COLORS.BLACK};
  }
`;
