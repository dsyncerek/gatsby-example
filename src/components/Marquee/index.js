import React from 'react';
import { MarqueeContainerStyled, MarqueeItemInnerStyled, MarqueeItemStyled, MarqueeStyled } from './styled';

const Marquee = ({ items = [] }) => {
  const itemWidth = 300;

  return (
    <MarqueeStyled>
      <MarqueeContainerStyled itemsLength={items.length} itemWidth={itemWidth}>
        {[...items, ...items].map(item => (
          <MarqueeItemStyled width={itemWidth}>
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
