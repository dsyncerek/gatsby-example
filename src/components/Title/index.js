import PropTypes from 'prop-types';
import React from 'react';
import { TitleStyled } from './styled';

const Title = ({ children, as, size, reversed }) => (
  <TitleStyled as={as} size={size} reversed={reversed}>
    {children}
  </TitleStyled>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']).isRequired,
  reversed: PropTypes.bool,
};

export default Title;
