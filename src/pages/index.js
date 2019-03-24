import { cover } from 'polished';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import MobileIcon from '../assets/icons/mobile.svg';
import ProductIcon from '../assets/icons/product.svg';
import StaffIcon from '../assets/icons/staff.svg';
import WebIcon from '../assets/icons/web.svg';
import Button from '../components/Button';
import CaseBox from '../components/CaseBox';
import FluidImage from '../components/FluidImage';
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
      title={<> Lorem ipsum dolor,<br />labore et dolore magna</>}
      media={<img src="https://awww.software/wp-content/uploads/2018/08/Web-Development-02-Front-end-min.jpg" alt="" />}
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
                <img src="https://awww.software/wp-content/themes/awww/assets/images/img-what-we-do.png" alt="" />
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
              <SimpleBox
                link="#"
                icon={<WebIcon />}
                title={<>Web<br /> Development</>}
              >
                <Text tight>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus mi.
                </Text>
              </SimpleBox>
            </Column>
            <Column sizes={{ md: 6, xxl: 3 }}>
              <SimpleBox
                link="#"
                icon={<MobileIcon />}
                title={<>Mobile<br /> Development</>}
              >
                <Text tight>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient.
                </Text>
              </SimpleBox>
            </Column>
            <Column sizes={{ md: 6, xxl: 3 }}>
              <SimpleBox
                link="#"
                icon={<ProductIcon />}
                title={<>Web<br /> Development</>}
              >
                <Text tight>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi neque egestas congue.
                </Text>
              </SimpleBox>
            </Column>
            <Column sizes={{ md: 6, xxl: 3 }}>
              <SimpleBox
                link="#"
                icon={<StaffIcon />}
                title={<>Mobile<br /> Development</>}
              >
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text secondary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus.
            </Text>
          </TextContent>
        </Column>
        <Column sizes={{ lg: 6 }}>
          <FigureStyled>
            <img src="https://awww.software/wp-content/themes/awww/assets/images/img-what-we-do.png" alt="" />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </TextContent>
        </Column>
        <Column>
          <Marquee
            items={[
              <Quote media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-ipi.png" alt="" />}>
                Our clients brag about their websites almost every time we speak to them!
              </Quote>,
              <Quote media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-mowies.png" alt="" />}>
                IPI website: business-like, modern & consistent with our brand’s visual identification - those are the goals that have been fully achieved!
              </Quote>,
              <Quote media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-mm.png" alt="" />}>
                Huge thanks to all the AWWW team for their top-notch professionalism… and patience! :D
              </Quote>,
              <Quote media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-ads.png" alt="" />}>
                AWWW Software is keeping an eye on our website since few seasons already - they are recommendable in 100% :)
              </Quote>,
              <Quote media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-peira.png" alt="" />}>
                “Fu&%ing awesome!” is more or less what Vogue editor has told me after my site’s premiere!
              </Quote>,
              <Quote
                media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-fdirect.png" alt="" />}
              >
                Our romance with AWW team and Joanna goes for few years now - yes, we love you guys!
              </Quote>,
              <Quote
                media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-tarabanski.png" alt="" />}
              >
                To say we are thrilled about the website and the overall cooperation with the team is to say that the sun is only a bit bright.
              </Quote>,
              <Quote media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-ila.png" alt="" />}>
                Our sales have gone up by 75% in only 3 months since the website was launched!
              </Quote>,
              <Quote
                media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-fotofestiwal.png" alt="" />}
              >
                Darek, those past 2 editions - we wouldn't be able to do it without you!
              </Quote>,
              <Quote
                media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-casamali.png" alt="" />}
              >
                The site’s implementation (for Shoplo platform) have gone superbly. Again, many thanks!
              </Quote>,
              <Quote media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-janbor.png" alt="" />}>
                Our website - the best thing next to sliced bread!
              </Quote>,
              <Quote
                media={<img src="https://awww.software/wp-content/uploads/2018/08/awww-logo-threnton.png" alt="" />}
              >
                The websites for all our development investments were done by the fantastic AWWW team!
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </TextContent>
        </Column>
        <Column>
          <FluidImage src="how-we-work.png" />
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
                title="Fotofestiwal"
                media1={
                  <img
                    src="https://awww.software/wp-content/uploads/2018/07/AWWW-Fotofestiwal-Min-001-min-768x499.jpg"
                    alt=""
                  />
                }
              />
            </Column>
            <Column sizes={{ md: 6 }}>
              <CaseBox
                title="Tarabanski"
                big
                media1={
                  <img
                    src="https://awww.software/wp-content/uploads/2018/07/dominik_tarabanski_-_032c_adonis_bosso_10-min.jpg"
                    alt=""
                  />
                }
              >
                <SimpleList tight items={['WordPress', 'UI/UX']} />
              </CaseBox>
            </Column>
            <Column sizes={{ md: 6 }}>
              <CaseBox
                title='Threnton'
                big
                media1={
                  <img
                    src="https://awww.software/wp-content/uploads/2018/07/AWWW-Thr-min-768x992.jpg"
                    alt=""
                  />
                }
              />
            </Column>
            <Column sizes={{ md: 6 }}>
              <CaseBox
                title="Rooms"
                media1={
                  <img
                    src="https://awww.software/wp-content/uploads/2018/07/AWWW-Rooms-Website-Min-000-min-768x499.jpg"
                    alt=""
                  />
                }
                media2={
                  <img
                    src="https://awww.software/wp-content/uploads/2018/07/AWWW-Thr-min-768x992.jpg"
                    alt=""
                  />
                }
              />
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
