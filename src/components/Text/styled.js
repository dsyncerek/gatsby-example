import { margin } from 'polished';
import styled, { css } from 'styled-components';

export const TextStyled = styled.p(props => css`
  line-height: ${props.tight ? '1.5' : '1.7'};
  
  ${props.featured && css`
    font-size: 1.25em;
  `}
  
  ${props.secondary && css`
    font-size: .75em;
  `}
  
  &:not(:last-child) {
    ${margin(0, 0, props.theme.gutter * 2, 0)};
  }
`);
