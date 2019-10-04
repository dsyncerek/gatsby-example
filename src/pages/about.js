import React from 'react';
import HeroImage from '../assets/images/code-1.jpg';
import About2Image from '../assets/images/code-2.jpg';
import HowWeWorkImage from '../assets/images/how-we-work.png';
import About1Image from '../assets/images/office-1.jpg';
import About3Image from '../assets/images/office-2.jpg';
import AWSLogo from '../assets/svg/logos/aws.svg';
import GoogleLogo from '../assets/svg/logos/google.svg';
import IBMLogo from '../assets/svg/logos/ibm.svg';
import MicrosoftLogo from '../assets/svg/logos/microsoft.svg';
import NetflixLogo from '../assets/svg/logos/netflix.svg';
import OracleLogo from '../assets/svg/logos/oracle.svg';
import SlackLogo from '../assets/svg/logos/slack.svg';
import StorybookLogo from '../assets/svg/logos/storybook.svg';
import Footer from '../components/Footer';
import { Column, Row } from '../components/Grid';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageSection from '../components/ImageSection';
import Layout from '../components/Layout';
import Marquee from '../components/Marquee';
import Quote from '../components/Quote';
import Section from '../components/Section';
import Text from '../components/Text';
import TextContent from '../components/TextContent';
import Title from '../components/Title';

const ServicesPage = () => (
  <Layout>
    <Header />
    <Hero title="About" media={<img src={HeroImage} alt="" />}>
      <Text featured>
        Lorem ipsum tempor incididunt ut labore et dolore dolor sit amet, consectetur elit, sed do eiusmod magna aliqua.
      </Text>
    </Hero>
    <Section>
      <Row wide>
        <Column sizes={{ md: 10, lg: 8, xl: 6 }} offsets={{ md: 1, lg: 2, xl: 3 }}>
          <TextContent>
            <Title as="h2" size="medium">
              Who we are
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.
            </Text>
          </TextContent>
        </Column>
      </Row>
    </Section>
    <ImageSection height="75vh">
      <img src={About1Image} alt="" />
    </ImageSection>
    <Section>
      <Row wide>
        <Column sizes={{ md: 10, lg: 8, xl: 6 }} offsets={{ md: 1, lg: 2, xl: 3 }}>
          <TextContent>
            <Title as="h2" size="medium">
              What we do
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.
            </Text>
          </TextContent>
        </Column>
        <Column>
          <img src={About2Image} alt="" />
        </Column>
      </Row>
    </Section>
    <Section reversed>
      <Row wide>
        <Column sizes={{ md: 10, lg: 8, xl: 6 }} offsets={{ md: 1, lg: 2, xl: 3 }}>
          <TextContent>
            <Title as="h2" size="medium" reversed>
              How we work
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ua aliqua.
            </Text>
          </TextContent>
        </Column>
        <Column>
          <img src={HowWeWorkImage} alt="" />
        </Column>
      </Row>
    </Section>
    <Section>
      <Row wide>
        <Column sizes={{ md: 10, lg: 8, xl: 6 }} offsets={{ md: 1, lg: 2, xl: 3 }}>
          <TextContent>
            <Title as="h2" size="medium">
              Our experience
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.
            </Text>
          </TextContent>
        </Column>
      </Row>
    </Section>
    <ImageSection height="75vh">
      <img src={About3Image} alt="" />
    </ImageSection>
    <Section>
      <Row wide>
        <Column sizes={{ md: 10, lg: 8, xl: 6 }} offsets={{ md: 1, lg: 2, xl: 3 }}>
          <TextContent>
            <Title as="h2" size="medium">
              Our partners
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.
            </Text>
          </TextContent>
        </Column>
        <Column>
          <Marquee
            items={[
              <Quote media={<MicrosoftLogo />}>
                Lorem ipsum dolor sit amet augue. Nam sed enim ac libero. Vestibulum ante ipsum primis.
              </Quote>,
              <Quote media={<AWSLogo />}>
                Cum sociis natoque penatibus eu, luctus laoreet. Nam consectetuer adipiscing elit. Curabitur magna sit
                amet, consectetuer.
              </Quote>,
              <Quote media={<StorybookLogo />}>
                Duis porttitor auctor, sapien eleifend in, purus. Nulla interdum libero.
              </Quote>,
              <Quote media={<GoogleLogo />}>
                Proin nunc mauris, rutrum ut, semper leo. Suspendisse porttitor ullamcorper, enim eget massa. Nam turpis
                eget ipsum ante.
              </Quote>,
              <Quote media={<NetflixLogo />}>
                Mauris fringilla sed, ullamcorper augue, dictum arcu. Sed nonummy enim dictum.
              </Quote>,
              <Quote media={<IBMLogo />}>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per conubia nostra, per inceptos.
              </Quote>,
              <Quote media={<SlackLogo />}>
                Phasellus vitae lorem vitae nibh consectetuer condimentum ante. Duis tempor, sapien magna et accumsan.
              </Quote>,
              <Quote media={<OracleLogo />}>
                Cum sociis natoque penatibus et ultrices posuere lobortis, massa non.
              </Quote>,
            ]}
          />
        </Column>
      </Row>
    </Section>
    <Footer />
  </Layout>
);

export default ServicesPage;
