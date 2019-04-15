import { cover } from 'polished';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import DirectCamerasImage from '../assets/images/case-studies/direct-cameras.jpg';
import MagicianFrankBackImage from '../assets/images/case-studies/magician-frank-back.jpg';
import MagicianFrankImage from '../assets/images/case-studies/magician-frank.jpg';
import MaliResortBackImage from '../assets/images/case-studies/mali-resort-back.jpg';
import MaliResortImage from '../assets/images/case-studies/mali-resort.jpg';
import TrueBeddingImage from '../assets/images/case-studies/true-bedding.jpg';
import HeroImage from '../assets/images/hero.jpg';
import HowWeWorkImage from '../assets/images/how-we-work.png';
import WhatWeDoImage from '../assets/images/what-we-do.png';
import MobileIcon from '../assets/svg/icons/mobile.svg';
import ProductIcon from '../assets/svg/icons/product.svg';
import StaffIcon from '../assets/svg/icons/staff.svg';
import WebIcon from '../assets/svg/icons/web.svg';
import AWSLogo from '../assets/svg/logos/aws.svg';
import GoogleLogo from '../assets/svg/logos/google.svg';
import IBMLogo from '../assets/svg/logos/ibm.svg';
import MicrosoftLogo from '../assets/svg/logos/microsoft.svg';
import NetflixLogo from '../assets/svg/logos/netflix.svg';
import OracleLogo from '../assets/svg/logos/oracle.svg';
import SlackLogo from '../assets/svg/logos/slack.svg';
import StorybookLogo from '../assets/svg/logos/storybook.svg';
import Button from '../components/Button';
import CaseBox from '../components/CaseBox';
import Footer from '../components/Footer';
import { Column, Row } from '../components/Grid';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Marquee from '../components/Marquee';
import Quote from '../components/Quote';
import Section from '../components/Section';
import SimpleBox from '../components/SimpleBox';
import SimpleList from '../components/SimpleList';
import Text from '../components/Text';
import TextContent from '../components/TextContent';
import Title from '../components/Title';

const FigureStyled = styled.figure`
  height: 100%;
  position: relative;
  
  ${breakpoint('lg')`
    img,
    video {
      ${cover()};
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `};
`;

const IndexPage = () => (
  <Layout>
    <Header />
    <Hero
      big
      title={<>Lorem ipsum dolor,<br />labore et dolore magna</>}
      media={<img src={HeroImage} alt="" />}
    >
      <Text featured>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </Hero>
    <Section>
      <Row wide>
        <Column>
          <Row wide>
            <Column sizes={{ lg: 6 }}>
              <FigureStyled>
                <img src={WhatWeDoImage} alt="" />
              </FigureStyled>
            </Column>
            <Column sizes={{ md: 10, lg: 6 }} offsets={{ md: 1, lg: 0 }}>
              <TextContent wide>
                <Title as="h2" size="medium">
                  What we do
                </Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </TextContent>
            </Column>
          </Row>
        </Column>
        <Column>
          <Row>
            <Column sizes={{ md: 6, xxl: 3 }}>
              <SimpleBox link="#" icon={<WebIcon />}>
                <Title as="h3" size="tiny">
                  <>Web<br />Development</>
                </Title>
                <Text tight>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus mi.
                </Text>
              </SimpleBox>
            </Column>
            <Column sizes={{ md: 6, xxl: 3 }}>
              <SimpleBox link="#" icon={<MobileIcon />}>
                <Title as="h3" size="tiny">
                  <>Mobile<br />Development</>
                </Title>
                <Text tight>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient.
                </Text>
              </SimpleBox>
            </Column>
            <Column sizes={{ md: 6, xxl: 3 }}>
              <SimpleBox link="#" icon={<ProductIcon />}>
                <Title as="h3" size="tiny">
                  <>Web<br />Development</>
                </Title>
                <Text tight>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi neque egestas congue.
                </Text>
              </SimpleBox>
            </Column>
            <Column sizes={{ md: 6, xxl: 3 }}>
              <SimpleBox link="#" icon={<StaffIcon />}>
                <Title as="h3" size="tiny">
                  <>Mobile<br />Development</>
                </Title>
                <Text tight>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget.
                </Text>
              </SimpleBox>
            </Column>
          </Row>
        </Column>
      </Row>
    </Section>
    <Section odd>
      <Row wide>
        <Column sizes={{ md: 10, lg: 6 }} offsets={{ md: 1, lg: 0 }}>
          <TextContent wide>
            <Title as="h2" size="medium">
              Technology
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua.
            </Text>
            <Text secondary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus.
            </Text>
          </TextContent>
        </Column>
        <Column sizes={{ lg: 6 }}>
          <FigureStyled>
            <img src={WhatWeDoImage} alt="" />
          </FigureStyled>
        </Column>
      </Row>
    </Section>
    <Section>
      <Row wide>
        <Column sizes={{ md: 10, lg: 8, xl: 6 }} offsets={{ md: 1, lg: 2, xl: 3 }}>
          <TextContent>
            <Title as="h2" size="medium">
              Our Partners
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.
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
                Cum sociis natoque penatibus eu, luctus laoreet. Nam consectetuer adipiscing elit. Curabitur magna sit amet, consectetuer.
              </Quote>,
              <Quote media={<StorybookLogo />}>
                Duis porttitor auctor, sapien eleifend in, purus. Nulla interdum libero.
              </Quote>,
              <Quote media={<GoogleLogo />}>
                Proin nunc mauris, rutrum ut, semper leo. Suspendisse porttitor ullamcorper, enim eget massa. Nam turpis eget ipsum ante.
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
    <Section reversed>
      <Row wide>
        <Column sizes={{ md: 10, lg: 8, xl: 6 }} offsets={{ md: 1, lg: 2, xl: 3 }}>
          <TextContent>
            <Title as="h2" size="medium" reversed>
              How we work
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ua aliqua.
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
              Case studies
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet.
            </Text>
          </TextContent>
        </Column>
        <Column>
          <Row float>
            <Column sizes={{ md: 6 }}>
              <CaseBox
                href="#"
                title="Magician Frank"
                media1={<img src={MagicianFrankImage} alt="" />}
                media2={<img src={MagicianFrankBackImage} alt="" />}
              >
                <SimpleList tight items={['React', 'Product Design']} />
              </CaseBox>
            </Column>
            <Column sizes={{ md: 6 }}>
              <CaseBox
                href="#"
                title="Direct Cameras"
                big
                media1={<img src={DirectCamerasImage} alt="" />}
              >
                <SimpleList tight items={['WordPress', 'Product Design']} />
              </CaseBox>
            </Column>
            <Column sizes={{ md: 6 }}>
              <CaseBox
                href="#"
                title="True Bedding"
                big
                media1={<img src={TrueBeddingImage} alt="" />}
              >
                <SimpleList tight items={['Shoplo', 'Product Design']} />
              </CaseBox>
            </Column>
            <Column sizes={{ md: 6 }}>
              <CaseBox
                href="#"
                title="Mali Resort"
                media1={<img src={MaliResortImage} alt="" />}
                media2={<img src={MaliResortBackImage} alt="" />}
              >
                <SimpleList tight items={['Angular', 'Product Design']} />
              </CaseBox>
            </Column>
          </Row>
        </Column>
        <Column>
          <TextContent>
            <Button as="a" href="#">
              See all case studies
            </Button>
          </TextContent>
        </Column>
      </Row>
    </Section>
    <Footer />
  </Layout>
);

export default IndexPage;
