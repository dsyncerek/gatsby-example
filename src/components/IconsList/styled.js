import { margin, size } from 'polished';
import styled, { css } from 'styled-components';
import { TextLinkStyled } from '../TextLink/styled';

export const IconsListStyled = styled.ol(props => css`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  ${margin(props.theme.gutter * -2, props.theme.gutter * -2, 0)};
  color: ${props.theme.colorPrimary};
`);

export const IconsListItemStyled = styled.li(props => css`
  ${margin(props.theme.gutter * 2, props.theme.gutter * 2, 0)};
  
  ${TextLinkStyled} {
    display: block;
  }

  svg {
    display: block;
    ${size(props.theme.gutter * 2.5)};
  }
`);
