import { margin, padding } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const SectionStyled = styled.section(props => css`
  ${padding(props.theme.gutter * 4, 0)};
  ${margin(props.theme.gutter * 4, 0)};
  
  ${breakpoint('sm')`
    ${padding(props.theme.gutter * 5, 0)};
    ${margin(props.theme.gutter * 5, 0)};
  `};
  
  ${props.reversed && css`
    ${padding(props.theme.gutter * 8, 0)};
    background: ${props.theme.colorPrimary};
    color: ${props.theme.colorTextReversed};
    
    ${breakpoint('sm')`
      ${padding(props.theme.gutter * 10, 0)};
    `};
  `};
  
  ${props.odd && css`
    ${padding(props.theme.gutter * 8, 0)};
    background: ${props.theme.colors.gray};

    ${breakpoint('sm')`
      ${padding(props.theme.gutter * 10, 0)};
    `};
  `};
`);
