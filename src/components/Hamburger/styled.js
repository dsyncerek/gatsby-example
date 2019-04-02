import styled, { css } from 'styled-components';

export const HamburgerStyled = styled.button(props => css`
  position: relative;
  height: 30px;
  width: 30px;
  cursor: pointer;
  
     &::before, 
     &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: currentColor;
        left: 0;
        transition: .3s;
    }
    
    &::before {
        top: 7px;
        width: 75%;
    }

    &:after {
       bottom: 7px;
       box-shadow: 0 -7px currentColor;
    }
`);
