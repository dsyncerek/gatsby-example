import React from 'react';
import HeroImage from '../../assets/images/code-1.jpg';
import MobileIcon from '../../assets/svg/icons/mobile.svg';
import ProductIcon from '../../assets/svg/icons/product.svg';
import StaffIcon from '../../assets/svg/icons/staff.svg';
import WebIcon from '../../assets/svg/icons/web.svg';
import Footer from '../../components/Footer';
import { Column, Row } from '../../components/Grid';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import SimpleBox from '../../components/SimpleBox';
import Text from '../../components/Text';
import Title from '../../components/Title';

const ServicesPage = () => (
  <Layout>
    <Header />
    <Hero title="Services" media={<img src={HeroImage} alt="" />}>
      <Text featured>
        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Hero>
    <Section>
      <Row>
        <Column sizes={{ md: 6, xxl: 3 }}>
          <SimpleBox link="#" icon={<WebIcon />}>
            <Title as="h3" size="tiny">
              <>
                Web
                <br />
                Development
              </>
            </Title>
            <Text tight>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus mi.
            </Text>
          </SimpleBox>
        </Column>
        <Column sizes={{ md: 6, xxl: 3 }}>
          <SimpleBox link="#" icon={<MobileIcon />}>
            <Title as="h3" size="tiny">
              <>
                Mobile
                <br />
                Development
              </>
            </Title>
            <Text tight>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Natoque penatibus et magnis dis parturient.
            </Text>
          </SimpleBox>
        </Column>
        <Column sizes={{ md: 6, xxl: 3 }}>
          <SimpleBox link="#" icon={<ProductIcon />}>
            <Title as="h3" size="tiny">
              <>
                Web
                <br />
                Development
              </>
            </Title>
            <Text tight>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Faucibus turpis in eu mi neque egestas congue.
            </Text>
          </SimpleBox>
        </Column>
        <Column sizes={{ md: 6, xxl: 3 }}>
          <SimpleBox link="#" icon={<StaffIcon />}>
            <Title as="h3" size="tiny">
              <>
                Mobile
                <br />
                Development
              </>
            </Title>
            <Text tight>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ullamcorper sit amet risus nullam eget.
            </Text>
          </SimpleBox>
        </Column>
      </Row>
    </Section>
    <Footer />
  </Layout>
);

export default ServicesPage;
