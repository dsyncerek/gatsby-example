import PropTypes from 'prop-types';
import React from 'react';
import ChevronRightIcon from '../../assets/svg/icons/chevron-right.svg';
import { ButtonStyled } from './styled';

const Button = ({ children, block, ...props }) => (
  <ButtonStyled block={block} {...props}>
    {children}
    <ChevronRightIcon />
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
};

export default Button;
