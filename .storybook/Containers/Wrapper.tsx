import styled, { css } from 'styled-components';

export const stylesDefault = css`
  ul, h1 {
    margin : 0;
    padding: 0;
    list-style-type: none;
  }
  font-family: 'arial';
  font-size: 14px;
  a {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  padding: 20px 30px;
  ${stylesDefault}
`;
