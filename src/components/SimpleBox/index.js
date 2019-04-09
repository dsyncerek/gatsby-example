import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import { SimpleBoxInnerStyled, SimpleBoxMedia, SimpleBoxStyled } from './styled';

const SimpleBox = ({ link, icon, children, btnText = 'Read more' }) => (
  <SimpleBoxStyled>
    <SimpleBoxInnerStyled>
      {icon && (
        <SimpleBoxMedia>
          {icon}
        </SimpleBoxMedia>
      )}
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
  children: PropTypes.node.isRequired,
  btnText: PropTypes.string,
};

export default SimpleBox;
