import { margin, padding, size } from 'polished';
import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button(props => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${padding(props.theme.gutter * 2, props.theme.gutter * 3)};
  background: ${props.theme.colorPrimary};
  color: ${props.theme.colorTextReversed};
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  transition: background ${props.theme.transitionTime};
  cursor: pointer;
  
  &:hover,
  &:focus {
    background: ${props.theme.colorSecondary};
  }
  
  svg {
    ${size(props.theme.gutter * 1.5)};
    ${margin(0, 0, 0, props.theme.gutter)};
    color: ${props.theme.colors.green};
  }
  
  ${props.block && css`
    width: 100%;
  `};
`);
