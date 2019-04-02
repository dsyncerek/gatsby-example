import PropTypes from 'prop-types';
import React from 'react';
import { HamburgerStyled } from './styled';

const Hamburger = ({ onClick }) => (
  <HamburgerStyled onClick={onClick} />
);

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
