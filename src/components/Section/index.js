import PropTypes from 'prop-types';
import React from 'react';
import Container from '../Container';
import { SectionStyled } from './styled';

const Section = ({ children, reversed, odd }) => (
  <SectionStyled reversed={reversed} odd={odd}>
    <Container>{children}</Container>
  </SectionStyled>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  reserved: PropTypes.bool,
  odd: PropTypes.bool,
};

export default Section;
