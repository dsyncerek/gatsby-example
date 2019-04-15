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
  ${padding(props.theme.gutter * 2, 0)};
  color: ${props.theme.colorTextDefault};
  
  &::before {
    content: "";
    ${cover()};
    z-index: 0;
    background: ${props.theme.colorBackgroundDefault};
    box-shadow: 0 0 20px 0 ${rgba(props.theme.colorPrimary, .2)};
  }
  
  ${breakpoint('lg')`
    ${padding(props.theme.gutter * 6, 0)};
    color: ${props.theme.colorTextReversed};
    transition: ${props.theme.transitionTime};
    
    &::before {
      transition: ${props.theme.transitionTime};
      transform: translateY(-100%);
    }
    
    ${props.state === 'hidden' && css`
      ${padding(props.theme.gutter * 2, 0)};
      color: ${props.theme.colorTextDefault};
      
      &::before {
        transform: none;
      }
    `};
  `};
`);

export const HeaderLogoStyled = styled.div(props => css`
  width: 200px;
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
    z-index: -1;
    top: -100%;
    bottom: auto;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background: white;
    color: black;
    font-size: 1.5em;
    transform: ${props.opened ? 'translateY(100%)' : 'none'};
    transition: .5s;
    
    li {
      &:not(:last-of-type) {
        ${margin(0, 0, props.theme.gutter * 3, 0)};
      }
    }
  `};
  
  ${breakpoint('sm', 'lg')`
    font-size: 2em;
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
