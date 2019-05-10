import styled from 'styled-components';
import { COLORS } from './../../ui';

interface Props {
  color?: string,
  size?: string,
  colorHover?: string
}

export const IconStyled = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  svg {
    color: ${(props: Props) => props.color || `${COLORS.TEXT_GRAY}`}
    ${(props: Props) => `
      width: ${props.size || 'auto'};
      height: ${props.size || 'auto'};
    `}
  }

  &:hover {
    svg {
      color: ${(props: Props) => props.colorHover && `${props.colorHover}`};
    }
  }
`;
