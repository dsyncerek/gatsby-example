import { cover, margin, rgba } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const CaseBoxMediaStyled = styled.div(props => css`
  ${cover()};
  
  img,
  video {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease 0s, transform 3s ease 0s;
  }
`);

export const CaseBoxStyled = styled.div(props => css`
  position: relative;
  display: block;
  color: ${props.theme.colorTextReversed};
  overflow: hidden;
  
  &::before {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: ${props.big ? '124%' : '62%'};
  }
  
  &::after {
    content: "";
    background: radial-gradient(ellipse at center, transparent 0%, ${rgba(props.theme.colorPrimary, .5)} 100%);
    ${cover()};
  }
  
  &:hover,
  &:focus {
    ${CaseBoxMediaStyled} {
      img,
      video {
        transform: scale(1.03);
        
        &:last-child:not(:first-child) {
          opacity: 0;
        }
      }
    }
  }
`);

export const CaseBoxContentStyled = styled.div(props => css`
  ${cover()};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  ${margin(props.theme.gutter * 3)};
  
  ${breakpoint('sm')`
    ${margin(props.theme.gutter * 4)};
  `};
`);
