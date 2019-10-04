import PropTypes from 'prop-types';
import React from 'react';
import { SimpleListItemStyled, SimpleListStyled } from './styled';

const SimpleList = ({ items = [], tight, featured }) => (
  <SimpleListStyled featured={featured}>
    {items.map((item, i) => (
      <SimpleListItemStyled key={i} tight={tight}>
        {item}
      </SimpleListItemStyled>
    ))}
  </SimpleListStyled>
);

SimpleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  tight: PropTypes.bool,
  featured: PropTypes.bool,
};

export default SimpleList;
