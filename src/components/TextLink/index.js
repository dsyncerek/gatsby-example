import PropTypes from 'prop-types';
import React from 'react';
import { TextLinkStyled } from './styled';

const TextLink = ({ children, ...props }) => <TextLinkStyled {...props}>{children}</TextLinkStyled>;

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextLink;
