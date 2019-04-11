import { cover, margin, padding, rgba, size } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import blob1 from '../../assets/images/blob/blob-1.png';
import blob2 from '../../assets/images/blob/blob-2.png';
import blob3 from '../../assets/images/blob/blob-3.png';
import blob4 from '../../assets/images/blob/blob-4.png';

const moveKeyFrames = width => keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(${-width}px);
  }
`;

export const MarqueeContainerStyled = styled.div(props => css`
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  height: 100%;
  animation-name: ${moveKeyFrames(props.itemsLength * props.itemWidth)};
  animation-duration: ${props.itemsLength * 4}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
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
  ${size('auto', props.width)};
  ${padding(props.theme.gutter * 4, props.theme.gutter * 2)};
  
  &::before {
    content: '';
    ${cover()};
    z-index: -1;   
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  
  &:nth-of-type(4n)::before {
    background-image: url(${blob1});
  }
  
  &:nth-of-type(4n+1)::before {
    background-image: url(${blob2});
  }
  
  &:nth-of-type(4n+2)::before {
    background-image: url(${blob3});
  }
  
  &:nth-of-type(4n+3)::before {
    background-image: url(${blob4});
  }
  
  &:nth-child(odd) {
    ${margin(props.theme.gutter * 3, 0, 0, 0)};
  }
  
  &:nth-child(even) {
    ${margin(0, 0, props.theme.gutter * 3, 0)};
  }
`);

export const MarqueeItemInnerStyled = styled.div(props => css`
  background: ${rgba(props.theme.colorBackgroundDefault, .97)};
`);
