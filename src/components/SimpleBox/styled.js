import { padding, rgba } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { TitleStyled } from '../Title/styled';

export const SimpleBoxStyled = styled.div(props => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0 0 20px 0 ${rgba(props.theme.colorPrimary, .2)};
  
  ${TitleStyled} {
    ${padding(0, 0, props.theme.gutter * 2, 0)};
  }
`);

export const SimpleBoxInnerStyled = styled.div(props => css`
  ${padding(props.theme.gutter * 3)};
  
  ${breakpoint('sm')`
    ${padding(props.theme.gutter * 4)};
  `};
`);

export const SimpleBoxMedia = styled.div(props => css`
  ${padding(0, 0, props.theme.gutter * 2, 0)};
 
  svg {
    height: 100px;
  }
  
  ${breakpoint('sm')`
    ${padding(0, 0, props.theme.gutter * 4, 0)};
    
    svg {
      height: 150px;
    }
  `};
`);
