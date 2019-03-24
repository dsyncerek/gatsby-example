import PropTypes from 'prop-types';
import React from 'react';
import { RowStyled } from './styled';

const Row = ({ children, float, wide }) => (
  <RowStyled float={float} wide={wide}>
    {children}
  </RowStyled>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  float: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Row;
