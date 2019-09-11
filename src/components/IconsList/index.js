import PropTypes from 'prop-types';
import React from 'react';
import { IconsListItemStyled, IconsListStyled } from './styled';

const IconsList = ({ items = [] }) => (
  <IconsListStyled>
    {items.map((item, i) => (
      <IconsListItemStyled key={i}>{item}</IconsListItemStyled>
    ))}
  </IconsListStyled>
);

IconsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default IconsList;
