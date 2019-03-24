import PropTypes from 'prop-types';
import React from 'react';
import { TextStyled } from './styled';

const Text = ({ children, secondary, featured, tight }) => (
  <TextStyled secondary={secondary} featured={featured} tight={tight}>
    {children}
  </TextStyled>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  featured: PropTypes.bool,
  tight: PropTypes.bool,
};

export default Text;
