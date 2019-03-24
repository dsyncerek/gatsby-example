import { cover, margin, padding } from 'polished';
import styled, { css, keyframes } from 'styled-components';

const move = itemsLength => keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-3720px);
  }
`;

export const MarqueeContainerStyled = styled.div(props => css`
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  animation: ${move(props.itemsLength)} 60s linear infinite;
`);

export const MarqueeStyled = styled.div(props => css`
  overflow: hidden;
  position: relative;
  
  &::after {
    content: "";
    ${cover()};
    z-index: 2;
    display: block;
    height: 100%;
    background: linear-gradient(90deg, white 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, white 100%);
    pointer-events: none;
  }
  
  &:hover {
    ${MarqueeContainerStyled} {
      animation-play-state: paused;
    }
  }
`);

export const MarqueeItemStyled = styled.div(props => css`
  position: relative;
  z-index: 0;
  flex-shrink: 0;
  width: 300px;
  ${padding(props.theme.gutter * 4, props.theme.gutter * 2)};
  
  &::before {
    content: '';
    ${cover()};
    z-index: -1;   
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  
  &:nth-of-type(4n+1)::before {
    background-image: url('https://awww.software/wp-content/themes/awww/assets/images/blob-5.png');
  }
  
  &:nth-of-type(4n+2)::before {
    background-image: url('https://awww.software/wp-content/themes/awww/assets/images/blob-3.png');
  }
  
  &:nth-of-type(4n+3)::before {
    background-image: url('https://awww.software/wp-content/themes/awww/assets/images/blob-2.png');
  }
  
  &:nth-of-type(4n)::before {
    background-image: url('https://awww.software/wp-content/themes/awww/assets/images/blob-1.png');
  }
  
  &:nth-child(odd) {
    ${margin(props.theme.gutter * 3, 0, 0, 0)};
  }
  
  &:nth-child(even) {
    ${margin(0, 0, props.theme.gutter * 3, 0)};
  }
  
  & > * {
    background: ${props.theme.colorBackgroundDefault};
  }
`);
