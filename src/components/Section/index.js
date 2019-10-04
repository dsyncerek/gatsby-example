import PropTypes from 'prop-types';
import React from 'react';
import Container from '../Container';
import { SectionStyled } from './styled';

const Section = ({ children, reversed, odd, as = 'section' }) => (
  <SectionStyled reversed={reversed} odd={odd} as={as}>
    <Container>{children}</Container>
  </SectionStyled>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  reserved: PropTypes.bool,
  odd: PropTypes.bool,
  as: PropTypes.string,
};

export default Section;
