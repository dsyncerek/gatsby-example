import { cover, margin, padding, rgba } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { HamburgerStyled } from '../Hamburger/styled';

export const HeaderStyled = styled.header(props => css`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  ${padding(props.theme.gutter * 6, 0)};
  color: ${props.theme.colorTextReversed};
  transition: ${props.theme.transitionTime};
  
  &::before {
    content: "";
    ${cover()};
    z-index: 0;
    background: ${props.theme.colorBackgroundDefault};
    box-shadow: 0 0 20px 0 ${rgba(props.theme.colorPrimary, .2)};
    transform: translateY(-100%);
    transition: ${props.theme.transitionTime};
  }
  
  ${props.state === 'hidden' && css`
    ${padding(props.theme.gutter * 2, 0)};
    color: ${props.theme.colorTextDefault};
    
    &::before {
      transform: none;
    }
  `};
`);

export const HeaderLogoStyled = styled.div(props => css`
  width: 300px;
  max-width: 50vw;
`);


export const HeaderNavStyled = styled.nav(props => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${breakpoint('lg')`
    ${HamburgerStyled} {
      display: none;
    }
  `};
`);

export const HeaderListStyled = styled.ul(props => css`
  display: flex;
  align-items: center;
  font-size: 1.125em;
  
  ${breakpoint('xs', 'lg')`
    ${cover()};
    position: fixed;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    background: white;
    color: black;
    font-size: 1.5em;
    transform: ${props.opened ? 'none' : 'translateY(-100%)'};
    transition: .3s;
    
    li {
      &:not(:last-of-type) {
        ${margin(0, 0, props.theme.gutter * 3, 0)};
      }
    }
  `};
  
  ${breakpoint('lg')`
    li {
      &:not(:last-of-type) {
        ${margin(0, props.theme.gutter * 3, 0, 0)};
      }
    }
  `};
  
  ${breakpoint('xl')`
    li {
      &:not(:last-of-type) {
        ${margin(0, props.theme.gutter * 6, 0, 0)};
      }
    }
  `};
`);
