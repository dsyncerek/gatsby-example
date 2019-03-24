import styled, { css } from 'styled-components';

export const TextLinkStyled = styled.a(props => css`
  font-weight: 500;
  transition: opacity ${props.theme.transitionTime};
  
  &:hover,
  &:focus {
    opacity: .75;
  }
`);
