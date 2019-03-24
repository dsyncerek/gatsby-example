import PropTypes from 'prop-types';
import React from 'react';
import { SimpleListItemStyled, SimpleListStyled } from './styled';

const SimpleList = ({ items = [], tight }) => (
  <SimpleListStyled>
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
};

export default SimpleList;
