import { margin, padding, rgba } from 'polished';
import styled, { css } from 'styled-components';
import { IconsListStyled } from '../IconsList/styled';
import { SimpleListStyled } from '../SimpleList/styled';

export const FooterStyled = styled.footer(props => css`
  ${padding(props.theme.gutter * 8, 0)};
  border-top: 1px solid ${rgba(props.theme.colorPrimary, .5)};
  text-align: center;
  
  ${SimpleListStyled} {
    ${margin(props.theme.gutter * 6, 0)};
  }
  
  ${IconsListStyled} {
    ${margin(props.theme.gutter * 4, 0, 0, 0)};
  }
`);
