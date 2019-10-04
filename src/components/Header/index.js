import { Link } from 'gatsby';
import React, { useState } from 'react';
import Logo from '../../assets/svg/logos/logo.svg';
import Container from '../Container';
import Hamburger from '../Hamburger';
import TextLink from '../TextLink';
import { HeaderListStyled, HeaderLogoStyled, HeaderNavStyled, HeaderStyled } from './styled';
import useHeaderState from './useHeaderState';

const Header = () => {
  const headerState = useHeaderState();
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <HeaderStyled state={headerState}>
      <Container>
        <HeaderNavStyled>
          <TextLink to="/" as={Link}>
            <HeaderLogoStyled>
              <Logo />
            </HeaderLogoStyled>
          </TextLink>
          <HeaderListStyled opened={menuOpened}>
            <li>
              <TextLink to="/about" as={Link}>
                About
              </TextLink>
            </li>
            <li>
              <TextLink to="/services" as={Link}>
                Services
              </TextLink>
            </li>
            <li>
              <TextLink to="/case-studies" as={Link}>
                Case studies
              </TextLink>
            </li>
            <li>
              <TextLink to="/contact" as={Link}>
                Contact
              </TextLink>
            </li>
          </HeaderListStyled>
          <Hamburger onClick={() => setMenuOpened(b => !b)} opened={menuOpened} />
        </HeaderNavStyled>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
