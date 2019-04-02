import styled, { css } from 'styled-components';

export const HamburgerStyled = styled.button(props => css`
  position: relative;
  width: 30px;
  height: 30px;
  background: currentColor;
  cursor: pointer;
`);
