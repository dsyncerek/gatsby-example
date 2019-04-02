import React from 'react';
import Logo from '../../assets/icons/logo.svg';
import Container from '../Container';
import Hamburger from '../Hamburger';
import TextLink from '../TextLink';
import { HeaderListStyled, HeaderNavStyled, HeaderStyled } from './styled';
import useHeaderState from './useHeaderState';

const Header = () => {
  const headerState = useHeaderState();

  return (
    <HeaderStyled state={headerState}>
      <Container>
        <HeaderNavStyled>
          <TextLink href="#">
            <Logo style={{ height: '35px', maxWidth: '50vw' }} />
          </TextLink>
          <HeaderListStyled>
            <li>
              <TextLink href="#">
                About
              </TextLink>
            </li>
            <li>
              <TextLink href="#">
                Services
              </TextLink>
            </li>
            <li>
              <TextLink href="#">
                Case studies
              </TextLink>
            </li>
            <li>
              <TextLink href="#">
                Contact
              </TextLink>
            </li>
          </HeaderListStyled>
          <Hamburger />
        </HeaderNavStyled>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
