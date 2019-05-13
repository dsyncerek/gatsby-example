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
          <TextLink href="#">
            <HeaderLogoStyled>
              <Logo />
            </HeaderLogoStyled>
          </TextLink>
          <HeaderListStyled opened={menuOpened}>
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
              <TextLink href="/case-studies">
                Case studies
              </TextLink>
            </li>
            <li>
              <TextLink href="#">
                Contact
              </TextLink>
            </li>
          </HeaderListStyled>
          <Hamburger
            onClick={() => setMenuOpened(b => !b)}
            opened={menuOpened}
          />
        </HeaderNavStyled>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
