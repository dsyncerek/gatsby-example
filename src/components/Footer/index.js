import React from 'react';
import BehanceIcon from '../../assets/icons/behance.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GithubIcon from '../../assets/icons/github.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import Container from '../Container';
import IconsList from '../IconsList';
import SimpleList from '../SimpleList';
import TextLink from '../TextLink';
import Title from '../Title';
import { FooterStyled } from './styled';

const Footer = () => (
  <FooterStyled>
    <Container>
      <Title as="h2" size="medium">
        Let's work together!
      </Title>
      <SimpleList
        items={[
          <TextLink href="#">
            hello@lorem.ipsum
          </TextLink>,
          <TextLink href="#">
            +48 394 103 953
          </TextLink>,
          <TextLink href="#">
            Estimate project
          </TextLink>,
        ]}
      >
      </SimpleList>
      <img src="https://awww.software/wp-content/themes/awww/assets/images/img-footer.png" alt="" />
      <IconsList
        items={[
          <TextLink href="#">
            <FacebookIcon />
          </TextLink>,
          <TextLink href="#">
            <GithubIcon />
          </TextLink>, <TextLink href="#">
            <LinkedinIcon />
          </TextLink>,
          <TextLink href="#">
            <BehanceIcon />
          </TextLink>,
        ]}
      />
    </Container>
  </FooterStyled>
);

export default Footer;
