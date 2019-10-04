import PropTypes from 'prop-types';
import React from 'react';
import { ImageSectionStyled } from './styled';

const ImageSection = ({ children, height = 'auto' }) => (
  <ImageSectionStyled height={height}>{children}</ImageSectionStyled>
);

ImageSection.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
};

export default ImageSection;
