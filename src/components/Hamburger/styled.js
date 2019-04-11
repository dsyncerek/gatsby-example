import { size } from 'polished';
import styled, { css } from 'styled-components';

export const HamburgerStyled = styled.button(props => css`
  position: relative;
  ${size(props.theme.gutter * 3)};
  color: currentColor;
  cursor: pointer;
  
  &::before, 
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: calc(50% - 1px);
    width: 100%;
    height: 2px;
    background: currentColor;
    transition: ${props.theme.transitionTime};
  }
  
  ${!props.opened && css`
    &::before {
      top: 7px;
      width: 75%;
    }
    
    &::after {
      top: auto;
      bottom: 7px;
      box-shadow: 0 -7px currentColor;
    }
  `};
  
  ${props.opened && css`
    &::before {
      transform: rotate(45deg);
    }
    
    &::after {
      transform: rotate(-45deg);
      box-shadow: none;
    }
  `};
`);
