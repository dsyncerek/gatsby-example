import PropTypes from 'prop-types';
import React from 'react';
import { TextContentStyled } from './styled';

const TextContent = ({ children, wide, standard }) => (
  <TextContentStyled wide={wide} standard={standard}>
    {children}
  </TextContentStyled>
);

TextContent.propTypes = {
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
  standard: PropTypes.bool,
};

export default TextContent;
