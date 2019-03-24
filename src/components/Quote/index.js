import PropTypes from 'prop-types';
import React from 'react';
import Text from '../Text';
import { QuoteStyled } from './styled';

const Quote = ({ children, media }) => (
  <QuoteStyled>
    {media}
    <Text secondary tight>
      {children}
    </Text>
  </QuoteStyled>
);

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  media: PropTypes.node,
};

export default Quote;
