import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Title from '../Title';
import { SimpleBoxInnerStyled, SimpleBoxMedia, SimpleBoxStyled } from './styled';

const SimpleBox = ({ link, icon, title, children, btnText = 'Read more' }) => (
  <SimpleBoxStyled>
    <SimpleBoxInnerStyled>
      {icon && (
        <SimpleBoxMedia>
          {icon}
        </SimpleBoxMedia>
      )}
      <Title as="h3" size="tiny">
        {title}
      </Title>
      {children}
    </SimpleBoxInnerStyled>
    {link && (
      <Button block as="a" href={link}>
        {btnText}
      </Button>
    )}
  </SimpleBoxStyled>
);

SimpleBox.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  btnText: PropTypes.string,
};

export default SimpleBox;
