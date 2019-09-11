import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title';
import { CaseBoxContentStyled, CaseBoxMediaStyled, CaseBoxStyled } from './styled';

const CaseBox = ({ big, href, title, media1, media2, children }) => (
  <CaseBoxStyled big={big} as={href ? 'a' : 'div'} href={href}>
    <CaseBoxMediaStyled>
      {media2}
      {media1}
    </CaseBoxMediaStyled>
    <CaseBoxContentStyled>
      <Title size="small" as="h3" reversed>
        {title}
      </Title>
      <div>{children}</div>
    </CaseBoxContentStyled>
  </CaseBoxStyled>
);

CaseBox.propTypes = {
  big: PropTypes.bool,
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  media1: PropTypes.node.isRequired,
  media2: PropTypes.node,
  children: PropTypes.node,
};

export default CaseBox;
