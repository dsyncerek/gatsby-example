import React from 'react';
import { MarqueeContainerStyled, MarqueeItemStyled, MarqueeStyled } from './styled';

const Marquee = ({ items = [] }) => (
  <MarqueeStyled>
    <MarqueeContainerStyled itemsLength={items.length}>
      {[...items, ...items].map(item => (
        <MarqueeItemStyled>
          {item}
        </MarqueeItemStyled>
      ))}
    </MarqueeContainerStyled>
  </MarqueeStyled>
);

export default Marquee;
