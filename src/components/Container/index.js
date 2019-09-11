import PropTypes from 'prop-types';
import React from 'react';
import { ContainerStyled } from './styled';

const Container = ({ children }) => <ContainerStyled>{children}</ContainerStyled>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
