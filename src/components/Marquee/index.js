import React from 'react';
import { MarqueeContainerStyled, MarqueeItemInnerStyled, MarqueeItemStyled, MarqueeStyled } from './styled';

const Marquee = ({ items = [] }) => {
  const itemWidth = 300;

  return (
    <MarqueeStyled>
      <MarqueeContainerStyled itemsLength={items.length} itemWidth={itemWidth}>
        {[...items, ...items].map((item, i) => (
          <MarqueeItemStyled width={itemWidth} key={i}>
            <MarqueeItemInnerStyled>
              {item}
            </MarqueeItemInnerStyled>
          </MarqueeItemStyled>
        ))}
      </MarqueeContainerStyled>
    </MarqueeStyled>
  );
};

export default Marquee;
