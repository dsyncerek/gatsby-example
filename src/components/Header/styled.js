import { cover, margin, padding, rgba } from 'polished';
import styled, { css } from 'styled-components';

// todo: mobile

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
    height: 0;
    transition: ${props.theme.transitionTime};
  }
  
  ${props.state === 'hidden' && css`
    transform: translateY(-100%);
  `};
  
  ${props.state === 'wtf' && css`
    ${padding(props.theme.gutter * 3, 0)};
    color: ${props.theme.colorTextDefault};
    
    &::before {
      height: 100%; 
    }
  `};
`);

export const HeaderNavStyled = styled.nav(props => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125em;
`);

export const HeaderListStyled = styled.ul(props => css`
  display: flex;
  align-items: center;
  
  li {
    &:not(:last-of-type) {
      ${margin(0, props.theme.gutter * 6, 0, 0)};
    }
  }
`);
