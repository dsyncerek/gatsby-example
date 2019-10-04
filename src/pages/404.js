import React from 'react';
import HeroImage from '../assets/images/code-1.jpg';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Text from '../components/Text';

const NotFoundPage = () => (
  <Layout>
    <Header />
    <Hero title="404" media={<img src={HeroImage} alt="" />}>
      <Text featured>
        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Hero>
  </Layout>
);

export default NotFoundPage;
