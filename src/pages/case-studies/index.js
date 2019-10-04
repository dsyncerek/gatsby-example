import React from 'react';
import DirectCamerasImage from '../../assets/images/case-studies/direct-cameras.jpg';
import MagicianFrankBackImage from '../../assets/images/case-studies/magician-frank-back.jpg';
import MagicianFrankImage from '../../assets/images/case-studies/magician-frank.jpg';
import MaliResortBackImage from '../../assets/images/case-studies/mali-resort-back.jpg';
import MaliResortImage from '../../assets/images/case-studies/mali-resort.jpg';
import TrueBeddingImage from '../../assets/images/case-studies/true-bedding.jpg';
import HeroImage from '../../assets/images/code-1.jpg';
import CaseBox from '../../components/CaseBox';
import Footer from '../../components/Footer';
import { Column, Row } from '../../components/Grid';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import SimpleList from '../../components/SimpleList';
import Text from '../../components/Text';

const CaseStudiesPage = () => (
  <Layout>
    <Header />
    <Hero title="Case studies" media={<img src={HeroImage} alt="" />}>
      <Text featured>
        Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna sit amet, consectetur elit aliqua.
      </Text>
    </Hero>
    <Section>
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
          <CaseBox href="#" title="Direct Cameras" big media1={<img src={DirectCamerasImage} alt="" />}>
            <SimpleList tight items={['WordPress', 'Product Design']} />
          </CaseBox>
        </Column>
        <Column sizes={{ md: 6 }}>
          <CaseBox href="#" title="True Bedding" big media1={<img src={TrueBeddingImage} alt="" />}>
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
    </Section>
    <Footer />
  </Layout>
);

export default CaseStudiesPage;
