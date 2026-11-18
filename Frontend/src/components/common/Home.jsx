import React from 'react';
import Layout from './Layout';
import Hero from './Hero';
import LatestProducts from './LatestProducts';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <LatestProducts />
      <FeaturedProducts />
    </Layout>
  );
};

export default Home;
