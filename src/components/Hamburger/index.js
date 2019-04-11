import PropTypes from 'prop-types';
import React from 'react';
import { HamburgerStyled } from './styled';

const Hamburger = ({ onClick, opened }) => (
  <HamburgerStyled onClick={onClick} opened={opened} />
);

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default Hamburger;
