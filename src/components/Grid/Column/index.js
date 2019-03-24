import PropTypes from 'prop-types';
import React from 'react';
import { ColumnStyled } from './styled';

const Column = ({ children, sizes = {}, offsets = {} }) => (
  <ColumnStyled sizes={sizes} offsets={offsets}>
    {children}
  </ColumnStyled>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  sizes: PropTypes.objectOf(PropTypes.number),
  offsets: PropTypes.objectOf(PropTypes.number),
};

export default Column;
