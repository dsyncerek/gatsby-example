import PropTypes from 'prop-types';
import React from 'react';
import ChevronRightIcon from '../../assets/icons/chevron-right.svg';
import { ButtonStyled } from './styled';

const Button = ({ children, block, href, as }) => (
  <ButtonStyled block={block} href={href} as={as}>
    {children}
    <ChevronRightIcon />
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
  href: PropTypes.string,
  as: PropTypes.string,
};

export default Button;
