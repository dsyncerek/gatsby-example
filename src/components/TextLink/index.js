import PropTypes from 'prop-types';
import React from 'react';
import { TextLinkStyled } from './styled';

const TextLink = ({ children, href }) => (
  <TextLinkStyled href={href}>
    {children}
  </TextLinkStyled>
);

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default TextLink;
